"use client";

import { useEffect } from "react";
import {
  honeyBookInquiryUrl,
  honeyBookPlacementControllerSrc,
  honeyBookPlacementId,
  honeyBookPlacementSlotSuffix,
} from "@/components/site-data";

const INLINE_SCRIPT_ID = "honeybook-placement-inline";

export function HoneyBookEmbed() {
  const containerClass = `hb-p-${honeyBookPlacementId}-${honeyBookPlacementSlotSuffix}`;

  useEffect(() => {
    if (document.getElementById(INLINE_SCRIPT_ID)) return;
    const s = document.createElement("script");
    s.id = INLINE_SCRIPT_ID;
    s.type = "text/javascript";
    s.async = true;
    s.text = `(function(h,b,s,n,i,p,e,t){h._HB_=h._HB_||{};h._HB_.pid=i;t=b.createElement(s);t.type="text/javascript";t.async=!0;t.src=n;e=b.getElementsByTagName(s)[0];e.parentNode.insertBefore(t,e);})(window,document,"script",${JSON.stringify(honeyBookPlacementControllerSrc)},${JSON.stringify(honeyBookPlacementId)});`;
    document.body.appendChild(s);
  }, []);

  return (
    <div className="w-full">
      <div className={`${containerClass} min-h-[28rem] w-full`} />
      {/* HoneyBook tracking pixel from their embed snippet */}
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
