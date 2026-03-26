"use client";

import { useEffect, useRef, useState } from "react";
import {
  honeyBookInquiryUrl,
  honeyBookPlacementControllerSrc,
  honeyBookPlacementId,
  honeyBookPlacementSlotSuffix,
} from "@/components/site-data";

type HoneyBookGlobal = {
  pid?: string;
  iframeElements?: Record<string, unknown>;
  userConfig?: unknown;
  runSnippet?: () => void;
  docReady?: (fn: () => void) => void;
};

function getHB(): HoneyBookGlobal {
  const w = window as unknown as { _HB_: HoneyBookGlobal };
  if (!w._HB_) w._HB_ = {};
  return w._HB_;
}

/** Clear SPA state so HoneyBook will inject into a fresh `.hb-p-*` node (see placement-controller). */
function resetHoneyBookPlacementState(hb: HoneyBookGlobal, placementId: string) {
  hb.pid = placementId;
  hb.iframeElements = {};
  hb.userConfig = null;
}

export function HoneyBookEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const containerClass = `hb-p-${honeyBookPlacementId}-${honeyBookPlacementSlotSuffix}`;
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const preload = document.createElement("link");
    preload.rel = "preload";
    preload.as = "script";
    preload.href = honeyBookPlacementControllerSrc;
    document.head.appendChild(preload);

    container.innerHTML = "";

    const hb = getHB();
    resetHoneyBookPlacementState(hb, honeyBookPlacementId);

    const boot = () => {
      if (typeof hb.runSnippet === "function") {
        const run = () => hb.runSnippet?.();
        if (typeof hb.docReady === "function") {
          hb.docReady(run);
        } else {
          queueMicrotask(run);
        }
        return;
      }
      if (document.querySelector('script[src*="placement-controller.min.js"]')) {
        return;
      }

      const s = document.createElement("script");
      s.async = true;
      s.src = honeyBookPlacementControllerSrc;
      document.head.appendChild(s);
    };

    const frame = requestAnimationFrame(() => {
      queueMicrotask(boot);
    });

    return () => {
      preload.remove();
      cancelAnimationFrame(frame);
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
      const h = getHB();
      if (h.iframeElements) {
        h.iframeElements = {};
      }
    };
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const mo = new MutationObserver(() => {
      if (el.querySelector("iframe")) {
        setFormVisible(true);
      }
    });
    mo.observe(el, { childList: true, subtree: true });

    const t = window.setTimeout(() => setFormVisible(true), 6000);

    return () => {
      mo.disconnect();
      window.clearTimeout(t);
    };
  }, []);

  return (
    <div className="w-full">
      <div
        className={`relative min-h-[28rem] w-full ${!formVisible ? "min-h-[32rem]" : ""}`}
        aria-busy={!formVisible}
      >
        {!formVisible ? (
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-3 px-4 text-center">
            <span
              className="inline-block size-8 animate-spin rounded-full border-2 border-[#972d3e]/25 border-t-[#972d3e]"
              aria-hidden
            />
            <p className="text-sm text-[#6f3944]">Loading form…</p>
          </div>
        ) : null}
        <div ref={containerRef} className={`${containerClass} relative z-[1] min-h-[28rem] w-full`} />
      </div>

      <img
        src={`https://www.honeybook.com/p.png?pid=${encodeURIComponent(honeyBookPlacementId)}`}
        height={1}
        width={1}
        alt=""
        className="hidden"
        aria-hidden
      />

      <p className="mt-5 text-center text-xs text-[#6f3944]">
        <a
          href={honeyBookInquiryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold uppercase tracking-[0.12em] text-[#972d3e] underline decoration-[#972d3e]/25 underline-offset-4"
        >
          Open form in a new tab
        </a>
        <span className="opacity-90"> if it doesn&apos;t load.</span>
      </p>
    </div>
  );
}
