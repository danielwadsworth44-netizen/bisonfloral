import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "The Artist",
  description:
    "Meet Avery of Bison Floral—timeless, modern wedding and event florals inspired by life near Glacier National Park.",
};

export default function TheArtistPage() {
  return (
    <div className="min-h-screen min-w-0 bg-background text-[#241915]">
      <SiteHeader />
      <main className="w-full min-w-0">
        <section
          aria-labelledby="meet-avery-heading"
          className="grid lg:min-h-[85vh] lg:grid-cols-2"
        >
          <div className="flex flex-col justify-center bg-[#972d3e] px-5 py-10 text-white sm:px-8 sm:py-12 md:px-12 md:py-16 lg:px-14 lg:py-20">
            <h1
              id="meet-avery-heading"
              className="text-balance font-[family:var(--font-display)] text-[2.25rem] leading-[0.98] sm:text-5xl md:text-[2.75rem] md:leading-[0.98] lg:text-6xl"
            >
              Meet Avery!
            </h1>
            <div className="mt-8 max-w-xl space-y-5 text-[0.9375rem] leading-7 text-white/95 sm:text-base sm:leading-8">
              <p>
                Welcome to Bison Floral! I&apos;m Avery, a florist with a deep passion for
                creating beautiful, timeless, and modern floral designs. Growing up and living on a
                farm just outside of Glacier National Park, surrounded by bison and breathtaking
                landscapes, has been a constant source of inspiration for my work.
              </p>
              <p>
                At Bison Floral, I blend the natural beauty of my surroundings with a fresh,
                creative approach to floristry.
              </p>
              <p>
                Whether you&apos;re planning a wedding, an intimate elopement, a dinner party, or
                simply looking to add a touch of elegance to your home, I am here to bring your
                floral dreams to life.
              </p>
              <p>
                I&apos;m excited to share my love for flowers and unique design with you. Let&apos;s
                create something beautiful together!
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center bg-[#972d3e] px-5 pb-12 pt-4 sm:px-8 sm:pb-14 sm:pt-6 md:py-14 lg:px-12 lg:py-16">
            <div className="w-full max-w-md border-[3px] border-white p-1 shadow-[0_12px_40px_rgba(0,0,0,0.2)] sm:border-4 sm:p-1.5 lg:max-w-lg">
              <div className="relative aspect-[512/381] w-full overflow-hidden bg-black/10">
                <Image
                  src="/images/brand-story-1.png"
                  alt="Avery in a field before a floral arch, birch trees and mountains in the distance"
                  width={1024}
                  height={762}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
