import type { Metadata } from "next";
import Image from "next/image";
import { InquireForm } from "@/components/InquireForm";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { instagramUrl } from "@/components/site-data";

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
            <p className="text-xs uppercase tracking-[0.28em] text-[#972d3e]">Inquire</p>
            <h1 className="mt-2 [font-family:var(--font-script)] text-[2.1rem] leading-[1.05] text-[#241915] sm:text-4xl md:text-[2.65rem]">
              I had a feeling you&apos;d be here…
            </h1>
            <p className="mt-2 text-base leading-snug text-[#4b3833] sm:text-lg">
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

        <div className="mt-8 max-w-full rounded-3xl border border-[#d96889]/20 bg-surface p-5 shadow-[0_12px_40px_rgba(151,45,62,0.07)] sm:p-6 md:p-9">
          <InquireForm />

          <p className="mt-8 text-center text-xs text-[#6f3944]">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="font-semibold uppercase tracking-[0.12em] text-[#972d3e] underline decoration-[#972d3e]/25 underline-offset-4"
            >
              Instagram
            </a>
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
