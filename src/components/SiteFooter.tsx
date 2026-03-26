import Image from "next/image";
import Link from "next/link";
import { instagramUrl, siteNav } from "@/components/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#972d3e]/12 bg-surface text-[#241915]">
      <div className="mx-auto flex w-full max-w-7xl min-w-0 flex-col items-center gap-4 px-4 py-6 pb-[max(1.25rem,env(safe-area-inset-bottom,0px))] text-center sm:px-5 md:px-8">
        <div className="flex w-full max-w-sm flex-col items-center">
          <Image
            src="/brand/logo-primary.svg"
            alt="Bison Floral"
            width={330}
            height={145}
            className="h-auto w-[min(100%,200px)] sm:w-[220px]"
          />
          <p className="mt-3 text-sm leading-6 text-[#4b3833]">
            Montana wedding florals—intentional, romantic, rooted in place.
          </p>
        </div>

        <nav
          className="flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm uppercase tracking-[0.2em] text-[#6f3944]"
          aria-label="Footer"
        >
          {siteNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex min-h-10 items-center justify-center py-1 hover:text-[#972d3e]"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-10 items-center justify-center py-1 hover:text-[#972d3e]"
          >
            Instagram
          </a>
        </nav>

        <p className="max-w-2xl text-center text-[0.7rem] leading-relaxed text-[#6f3944] sm:text-xs">
          <span className="opacity-95">Website by </span>
          <a
            href="https://theclickbuilders.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#972d3e] underline decoration-[#972d3e]/30 underline-offset-2 transition hover:decoration-[#972d3e]"
          >
            TheClickBuilders
          </a>
          <span className="mx-2 inline-block opacity-40" aria-hidden>
            ·
          </span>
          <span className="opacity-95">Logo and Brand design by Moxie Design</span>
        </p>
      </div>
    </footer>
  );
}
