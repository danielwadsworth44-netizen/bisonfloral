import Image from "next/image";
import Link from "next/link";
import { siteNav } from "@/components/site-data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-[#972d3e]/10 bg-background/90 pt-[env(safe-area-inset-top,0px)] backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl min-w-0 flex-col gap-3 px-4 py-3 sm:px-5 md:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex w-full shrink-0 justify-center lg:w-auto lg:justify-start">
          <Link
            href="/"
            className="mx-auto flex max-w-full shrink-0 items-center justify-center lg:mx-0"
          >
            <Image
              src="/brand/logo-primary.svg"
              alt="Bison Floral"
              width={330}
              height={145}
              priority
              className="h-auto w-[min(100%,200px)] sm:w-[220px] lg:w-[260px]"
            />
          </Link>
        </div>

        <nav
          className="mx-auto grid w-full max-w-sm grid-cols-2 gap-2 text-sm uppercase tracking-[0.22em] text-[#6f3944] lg:mx-0 lg:flex lg:max-w-none lg:w-auto lg:flex-wrap lg:items-center lg:justify-end"
          aria-label="Primary"
        >
          {siteNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 w-full min-w-0 items-center justify-center rounded-full border border-[#972d3e]/12 bg-surface-elevated/80 px-4 py-2 text-center transition active:scale-[0.98] hover:border-[#d96889] hover:text-[#972d3e] lg:w-auto lg:min-w-[2.75rem]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
