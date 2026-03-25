import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Gallery",
};

type WeddingPhoto = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

const weddingPhotos: WeddingPhoto[] = [
  {
    src: "/images/weddings/01-bride-field-ground-florals.png",
    width: 682,
    height: 1024,
    alt: "Bride in a field with five large ground floral installations and matching bouquet, mountains behind",
  },
  {
    src: "/images/weddings/02-rectangular-ceremony-arch.png",
    width: 682,
    height: 1024,
    alt: "Full rectangular wedding arch covered in dahlias, roses, and hydrangeas on a lawn with valley view",
  },
  {
    src: "/images/weddings/03-couple-veil-wildflower-field.png",
    width: 682,
    height: 1024,
    alt: "Bride and groom under a long veil in a wildflower field; bride holds a soft pastel bouquet",
  },
  {
    src: "/images/weddings/04-bridal-bouquet-golden-hour.png",
    width: 683,
    height: 1024,
    alt: "Bride and groom at golden hour; lush peach, orange, and cream garden bouquet in foreground",
  },
  {
    src: "/images/weddings/05-bride-bridesmaids-bouquets.png",
    width: 1024,
    height: 683,
    alt: "Bride with four bridesmaids holding coordinated peach, cream, and white organic bouquets by a lodge",
  },
  {
    src: "/images/weddings/06-western-mountain-bouquet.png",
    width: 686,
    height: 1024,
    alt: "Western-style couple in mountain meadow; bride holds cream, mauve, and burgundy bouquet with long ribbon",
  },
  {
    src: "/images/weddings/07-bride-burgundy-bouquet.png",
    width: 678,
    height: 1024,
    alt: "Bride seated outdoors in lace gown and veil holding a burgundy, pink, and white bouquet",
  },
  {
    src: "/images/weddings/08-ceremony-ground-installations.png",
    width: 679,
    height: 1024,
    alt: "Outdoor ceremony with ground-level floral clusters, hydrangeas and dahlias, misty mountain backdrop",
  },
  {
    src: "/images/weddings/09-bouquet-and-boutonniere.png",
    width: 1024,
    height: 679,
    alt: "Close-up of bridal bouquet with pink dahlias and peach blooms beside groom boutonniere",
  },
  {
    src: "/images/weddings/10-reception-table-centerpiece.png",
    width: 679,
    height: 1024,
    alt: "Wedding table with blue and white chinoiserie plates and centerpiece of white roses and blue hydrangeas",
  },
  {
    src: "/images/weddings/11-garden-bouquet-couple.png",
    width: 686,
    height: 1024,
    alt: "Couple holding a vibrant peach, coral, and yellow garden bouquet; groom in sage green suit",
  },
  {
    src: "/images/weddings/12-couple-floral-dog-collars.png",
    width: 1024,
    height: 682,
    alt: "Bride and groom with two golden retrievers wearing floral wreath collars; blush and white bouquet",
  },
  {
    src: "/images/weddings/13-wedding-party-mountain-field.png",
    width: 1024,
    height: 683,
    alt: "Full wedding party in a field with peach and yellow bouquets, dusty blue dresses, mountain trees behind",
  },
  {
    src: "/images/weddings/14-bride-river-yellow-bouquet.png",
    width: 682,
    height: 1024,
    alt: "Bride with a vibrant yellow, orange, and white bouquet with silk ribbons, river and evergreens behind",
  },
  {
    src: "/images/weddings/15-broken-arch-floral-pillars.png",
    width: 682,
    height: 1024,
    alt: "Two lush floral pillars framing a ceremony space, coral and yellow blooms with blue accents, mountains beyond a fence",
  },
];

/** Focal variety only — always object-cover so cells fill with no letterboxing. */
const photoTreatments: Array<"cover-center" | "cover-top" | "cover-bottom"> = [
  "cover-top",
  "cover-center",
  "cover-bottom",
  "cover-center",
  "cover-top",
  "cover-center",
  "cover-bottom",
  "cover-center",
  "cover-top",
  "cover-bottom",
  "cover-center",
  "cover-top",
  "cover-bottom",
  "cover-center",
  "cover-top",
];

const gridSizes =
  "(max-width: 640px) 48vw, (max-width: 1024px) 24vw, calc((min(80rem,100vw) - 4rem) / 5)";

function CollagePhotoCell({
  photo,
  treatment,
}: {
  photo: WeddingPhoto;
  treatment: (typeof photoTreatments)[number];
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

/** Top-left: submark. Bottom row: full-width wordmark cell aligns to row height from photo cell. */
function GalleryLogoCorner({
  position,
  className = "",
}: {
  position: "top-left" | "bottom-right";
  className?: string;
}) {
  if (position === "top-left") {
    return (
      <div
        className={`flex aspect-[4/5] w-full min-w-0 flex-col items-center justify-center rounded-lg border border-[#972d3e]/10 bg-surface p-3 shadow-sm ${className}`}
        aria-hidden
      >
        <Image
          src="/brand/logo-submark.svg"
          alt=""
          width={399}
          height={304}
          className="h-auto w-[min(72%,6.25rem)] opacity-[0.42] sm:w-[min(70%,7rem)]"
        />
      </div>
    );
  }

  return (
    <div
      className={`flex h-full min-h-0 w-full min-w-0 flex-col items-center justify-center rounded-lg border border-[#972d3e]/10 bg-surface p-3 shadow-sm sm:items-end sm:pr-5 ${className}`}
      aria-hidden
    >
      <Image
        src="/brand/logo-secondary.svg"
        alt=""
        width={396}
        height={274}
        className="h-auto w-[min(92%,9.5rem)] opacity-[0.5] sm:w-[min(90%,10.5rem)]"
      />
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
              <StoryThumbPortraitFeatured
                src="/images/weddings/15-broken-arch-floral-pillars.png"
                alt="Two lush floral pillars framing a ceremony space, coral and yellow blooms with blue accents, mountains beyond a fence"
              />
              <StoryThumbPortraitFeatured
                src="/images/weddings/14-bride-river-yellow-bouquet.png"
                alt="Bride with a vibrant yellow, orange, and white bouquet with silk ribbons, river and evergreens behind"
              />
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
                  src="/images/weddings/16-bride-bridesmaids-lodge.png"
                  alt="Bride and four bridesmaids with peach, cream, and white bouquets in front of a wooden mountain lodge"
                />
                <StoryThumbPortrait
                  src="/images/weddings/17-couple-golden-hour-bouquet.png"
                  alt="Bride and groom at golden hour; bride smiles at camera with a lush peach and cream garden bouquet"
                />
                <StoryThumbPortrait
                  src="/images/weddings/18-sweetheart-table-ground-florals.png"
                  alt="Overhead view of couple at sweetheart table with ground floral installation of pink, peach, and lavender blooms on the lawn"
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
          {/*
            15 wedding photos + submark + wordmark. Desktop: 5×4 — last row is [P15][wordmark ×4].
            Same aspect ratio on single-column cells keeps row tops/bottoms aligned; cover fills cells.
          */}
          <div className="mx-auto mt-5 grid max-w-5xl grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-2.5 md:grid-cols-4 md:gap-2.5 lg:grid-cols-5 lg:gap-2.5">
            <GalleryLogoCorner position="top-left" />
            {weddingPhotos.slice(0, 4).map((photo, i) => (
              <CollagePhotoCell key={photo.src} photo={photo} treatment={photoTreatments[i]!} />
            ))}
            {weddingPhotos.slice(4, 9).map((photo, i) => (
              <CollagePhotoCell
                key={photo.src}
                photo={photo}
                treatment={photoTreatments[4 + i]!}
              />
            ))}
            {weddingPhotos.slice(9, 14).map((photo, i) => (
              <CollagePhotoCell
                key={photo.src}
                photo={photo}
                treatment={photoTreatments[9 + i]!}
              />
            ))}
            <CollagePhotoCell
              key={weddingPhotos[14]!.src}
              photo={weddingPhotos[14]!}
              treatment={photoTreatments[14]!}
            />
            <GalleryLogoCorner
              position="bottom-right"
              className="col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-4"
            />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
