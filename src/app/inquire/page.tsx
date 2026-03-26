import type { Metadata } from "next";
import Image from "next/image";
import { HoneyBookEmbed } from "@/components/HoneyBookEmbed";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
export const metadata: Metadata = {
  title: "Inquire",
};

export default function InquirePage() {
  return (
    <div className="min-h-screen min-w-0 bg-background text-[#241915]">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl min-w-0 px-4 py-8 sm:px-5 md:px-8 md:py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
          <div className="min-w-0 flex-1">
            <p className="mb-5 text-xs uppercase tracking-[0.28em] text-[#972d3e] sm:mb-6">
              Inquire
            </p>
            <h1 className="pt-1 [font-family:var(--font-script)] text-[1.58rem] leading-[1.12] text-[#241915] sm:pt-1.5 sm:text-[1.69rem] sm:leading-[1.1] md:text-[1.99rem] md:leading-[1.08]">
              I had a feeling you&apos;d be here…
            </h1>
            <p className="mt-2 [font-family:var(--font-script)] text-lg leading-snug text-[#4b3833] sm:text-xl md:text-2xl">
              Fill out the form to get started!
            </p>
          </div>
          <div className="mx-auto w-[7.5rem] shrink-0 rounded-xl border border-[#972d3e]/10 bg-surface-elevated/90 p-2 sm:mx-0 sm:mt-1 sm:w-[8.25rem] md:w-[9rem]">
            <Image
              src="/brand/logo-secondary.svg"
              alt="Bison Floral"
              width={396}
              height={274}
              className="h-auto w-full"
            />
          </div>
        </div>

        <div className="relative mt-8 max-w-full overflow-hidden rounded-3xl border border-[#d96889]/20 bg-surface p-4 shadow-[0_12px_40px_rgba(151,45,62,0.07)] sm:p-6 md:p-8">
          <HoneyBookEmbed />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
