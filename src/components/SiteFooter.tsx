import Image from "next/image";
import Link from "next/link";
import { instagramUrl, siteNav } from "@/components/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#972d3e]/12 bg-surface text-[#241915]">
      <div className="mx-auto flex w-full max-w-7xl min-w-0 flex-col gap-6 px-4 py-8 pb-[max(2rem,env(safe-area-inset-bottom,0px))] sm:px-5 md:px-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-sm min-w-0">
          <Image
            src="/brand/logo-primary.svg"
            alt="Bison Floral"
            width={330}
            height={145}
            className="h-auto w-[min(100%,200px)] sm:w-[220px]"
          />
          <p className="mt-4 text-sm leading-6 text-[#4b3833]">
            Montana wedding florals—intentional, romantic, rooted in place.
          </p>
        </div>

        <div className="grid gap-3 text-sm text-[#6f3944]">
          <div className="flex flex-wrap gap-x-4 gap-y-2 uppercase tracking-[0.2em]">
            {siteNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex min-h-10 items-center py-1 hover:text-[#972d3e]"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-10 w-fit items-center py-1 hover:text-[#972d3e]"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
