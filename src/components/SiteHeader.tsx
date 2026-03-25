import Image from "next/image";
import Link from "next/link";
import { siteNav } from "@/components/site-data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-[#972d3e]/10 bg-background/90 pt-[env(safe-area-inset-top,0px)] backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl min-w-0 flex-col items-center gap-3 px-4 py-3 sm:px-5 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="flex w-full justify-center md:w-auto md:shrink-0 md:justify-start">
          <Link href="/" className="inline-flex max-w-full shrink-0 items-center">
            <Image
              src="/brand/logo-primary.svg"
              alt="Bison Floral"
              width={330}
              height={145}
              priority
              className="h-auto w-[min(100%,200px)] sm:w-[220px] md:w-[260px]"
            />
          </Link>
        </div>

        <nav
          className="mx-auto grid w-full max-w-sm grid-cols-2 gap-2 text-sm uppercase tracking-[0.22em] text-[#6f3944] md:mx-0 md:flex md:max-w-none md:w-auto md:flex-wrap md:items-center md:justify-end"
          aria-label="Primary"
        >
          {siteNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 w-full min-w-0 items-center justify-center rounded-full border border-[#972d3e]/12 bg-surface-elevated/80 px-4 py-2 text-center transition active:scale-[0.98] hover:border-[#d96889] hover:text-[#972d3e] md:w-auto md:min-w-[2.75rem]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
