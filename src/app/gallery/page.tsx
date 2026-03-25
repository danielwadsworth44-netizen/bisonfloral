import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import type { WeddingPhoto } from "@/content/wedding-photos";
import {
  moreFloralsPhotos,
  reviewFirstQuoteStripPhotos,
  reviewSecondQuotePhotos,
} from "@/content/wedding-photos";

export const metadata: Metadata = {
  title: "Gallery",
};

type CollageTreatment = "cover-center" | "cover-top" | "cover-bottom";

const treatmentCycle: CollageTreatment[] = ["cover-top", "cover-center", "cover-bottom"];

function collageTreatment(i: number): CollageTreatment {
  return treatmentCycle[i % treatmentCycle.length]!;
}

const gridSizes =
  "(max-width: 640px) 48vw, (max-width: 1024px) 24vw, calc((min(80rem,100vw) - 4rem) / 5)";

function CollagePhotoCell({
  photo,
  treatment,
}: {
  photo: WeddingPhoto;
  treatment: CollageTreatment;
}) {
  const objectClass =
    treatment === "cover-center"
      ? "object-cover object-center"
      : treatment === "cover-top"
        ? "object-cover object-top"
        : "object-cover object-bottom";

  return (
    <div className="relative aspect-[4/5] w-full min-w-0 overflow-hidden rounded-lg border border-[#972d3e]/10 bg-[#2a1815] shadow-sm">
      <Image src={photo.src} alt={photo.alt} fill sizes={gridSizes} className={objectClass} />
    </div>
  );
}

function StoryPhotoStrip({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`-mx-1 flex w-full max-w-full flex-shrink-0 flex-row flex-nowrap items-center justify-center gap-2 overflow-x-auto overscroll-x-contain px-1 pb-1 [-webkit-overflow-scrolling:touch] sm:gap-2.5 ${className}`}
    >
      {children}
    </div>
  );
}

function StoryThumbPortraitFeatured({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-[15.25rem] w-[9.5rem] shrink-0 overflow-hidden rounded-xl border border-[#972d3e]/10 bg-surface-elevated shadow-sm sm:h-[17.25rem] sm:w-[10.35rem] md:h-[19.5rem] md:w-48">
      <Image src={src} alt={alt} fill sizes="(max-width: 768px) 42vw, 200px" className="object-cover" />
    </div>
  );
}

function StoryThumbPortrait({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-[11.75rem] w-[7.65rem] shrink-0 overflow-hidden rounded-xl border border-[#972d3e]/10 bg-surface-elevated shadow-sm sm:h-56 sm:w-[9.25rem] md:h-[15.75rem] md:w-40">
      <Image src={src} alt={alt} fill sizes="(max-width: 640px) 32vw, 160px" className="object-cover" />
    </div>
  );
}

function StoryThumbLandscape({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-[11.75rem] w-[16.25rem] shrink-0 overflow-hidden rounded-xl border border-[#972d3e]/10 bg-surface-elevated shadow-sm sm:h-56 sm:w-[19.5rem] md:h-[15.75rem] md:w-[22.5rem]">
      <Image src={src} alt={alt} fill sizes="(max-width: 640px) 68vw, 340px" className="object-cover" />
    </div>
  );
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen min-w-0 bg-background text-[#241915]">
      <SiteHeader />
      <main className="mx-auto w-full max-w-7xl min-w-0 px-4 py-8 sm:px-5 md:px-8 md:py-10">
        <div className="max-w-xl">
          <p className="text-xs uppercase tracking-[0.28em] text-[#972d3e]">Gallery</p>
          <h1 className="mt-2 font-[family:var(--font-display)] text-3xl leading-[0.95] md:text-4xl">
            Work from real days
          </h1>
        </div>

        <section
          aria-labelledby="gallery-bride-reviews-heading"
          className="mt-8 border-t border-[#972d3e]/10 pt-8"
        >
          <p
            id="gallery-bride-reviews-heading"
            className="mx-auto max-w-5xl text-center text-xs uppercase tracking-[0.28em] text-[#972d3e]"
          >
            Reviews from the brides
          </p>

          <div className="mx-auto mt-6 flex w-full max-w-5xl flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-center lg:gap-12">
            <StoryPhotoStrip className="w-full shrink-0 lg:w-auto">
              {reviewFirstQuoteStripPhotos.map((p) => (
                <StoryThumbPortraitFeatured key={p.src} src={p.src} alt={p.alt} />
              ))}
            </StoryPhotoStrip>

            <div className="flex w-full min-w-0 max-w-xl flex-col items-center justify-center text-center">
              <blockquote className="font-[family:var(--font-display)] text-lg leading-snug text-[#241915] sm:text-xl sm:leading-snug md:text-2xl md:leading-snug">
                <p className="mx-auto max-w-[19rem] text-balance sm:max-w-[22rem] md:max-w-[26rem]">
                  &ldquo;I could not get over the florals—they were stunning. It was everything I
                  wanted and more.&rdquo;
                </p>
              </blockquote>
              <div className="mx-auto mt-5 h-px w-10 bg-[#d96889]/55" aria-hidden />
              <blockquote className="mt-5 font-[family:var(--font-display)] text-base leading-snug text-[#4b3833] sm:text-lg sm:leading-relaxed">
                <p className="mx-auto max-w-[24rem] text-balance">
                  &ldquo;So many compliments on the florals—everyone was blown away.&rdquo;
                </p>
              </blockquote>
            </div>
          </div>

          <div className="mt-10 border-t border-[#972d3e]/10 pt-10">
            <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-center lg:gap-12">
              <div className="order-2 flex w-full min-w-0 max-w-xl flex-col items-center justify-center text-center lg:order-1">
                <blockquote className="font-[family:var(--font-display)] text-xl leading-snug text-[#241915] md:text-2xl md:leading-snug">
                  <p className="text-balance">&ldquo;The best day.&rdquo;</p>
                </blockquote>
                <div
                  className="mx-auto mt-5 h-px w-10 bg-[#d96889]/55"
                  aria-hidden
                />
                <blockquote className="mt-5 font-[family:var(--font-display)] text-xl leading-snug text-[#4b3833] md:text-2xl md:leading-snug">
                  <p className="mx-auto max-w-[11rem] text-balance sm:max-w-[13rem]">
                    &ldquo;The most talented florist.&rdquo;
                  </p>
                </blockquote>
              </div>

              <StoryPhotoStrip className="order-1 w-full shrink-0 lg:order-2 lg:w-auto">
                <StoryThumbLandscape
                  src={reviewSecondQuotePhotos[0]!.src}
                  alt={reviewSecondQuotePhotos[0]!.alt}
                />
                <StoryThumbPortrait
                  src={reviewSecondQuotePhotos[1]!.src}
                  alt={reviewSecondQuotePhotos[1]!.alt}
                />
                <StoryThumbPortrait
                  src={reviewSecondQuotePhotos[2]!.src}
                  alt={reviewSecondQuotePhotos[2]!.alt}
                />
              </StoryPhotoStrip>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="gallery-general-heading"
          className="mt-8 border-t border-[#972d3e]/10 pt-8"
        >
          <p
            id="gallery-general-heading"
            className="mx-auto max-w-5xl text-xs uppercase tracking-[0.28em] text-[#972d3e]"
          >
            More florals
          </p>
          <div className="mx-auto mt-5 grid max-w-5xl grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-2.5 md:grid-cols-4 md:gap-2.5 lg:grid-cols-5 lg:gap-2.5">
            {moreFloralsPhotos.map((photo, i) => (
              <CollagePhotoCell key={photo.src} photo={photo} treatment={collageTreatment(i)} />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
