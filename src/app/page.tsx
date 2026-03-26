import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { instagramUrl } from "@/components/site-data";
import { homeWeddingPhoto } from "@/content/wedding-photos";
import { floatStyle } from "@/lib/float-style";

export default function Home() {
  const heroCopy = floatStyle(0);
  const heroImage = floatStyle(1);
  const whatImage = floatStyle(0);
  const whatCard = floatStyle(1);
  const wayCard = floatStyle(0);
  const wayImage = floatStyle(1);
  const galleryTeaser = floatStyle(0);
  const inquireCopy = floatStyle(0);
  const inquireActions = floatStyle(1);

  return (
    <div className="min-h-screen min-w-0 bg-background text-[#241915]">
      <SiteHeader />

      <main>
        <section className="bg-[linear-gradient(180deg,#fae8ef_0%,#f3d8e4_100%)] text-[#241915]">
          <div className="mx-auto grid w-full max-w-7xl min-w-0 gap-6 px-4 py-8 sm:px-5 md:px-8 md:py-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.12fr)] lg:items-center lg:gap-10 lg:py-11">
            <div className={`min-w-0 max-w-xl ${heroCopy.className}`} style={heroCopy.style}>
              <p className="mb-3 text-xs uppercase tracking-[0.28em] text-[#c45c73]">Flathead Valley · Montana</p>
              <h1 className="text-balance text-[2rem] leading-[1.02] sm:text-5xl sm:leading-[0.98] md:text-6xl lg:text-7xl">
                <span className="font-[family:var(--font-script)] text-[2.35rem] sm:text-[2.85rem] md:text-[3.5rem] lg:text-[4.25rem]">
                  Wild heart.
                </span>{" "}
                <span className="font-[family:var(--font-display)] font-medium">Quiet luxury.</span>
              </h1>
              <p className="mt-5 max-w-md text-base leading-7 text-[#4b3833]">
                Floral design for days that feel as beautiful as they look
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/inquire"
                  className="inline-flex min-h-12 touch-manipulation items-center justify-center rounded-full bg-[#aa004f] px-6 text-sm font-semibold uppercase tracking-[0.18em] text-white transition active:scale-[0.98] hover:bg-[#972d3e]"
                >
                  Inquire
                </Link>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 touch-manipulation items-center justify-center rounded-full border border-[#972d3e]/20 bg-surface-elevated/85 px-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#6f3944] transition active:scale-[0.98] hover:border-[#d96889] hover:text-[#972d3e]"
                >
                  Instagram
                </a>
              </div>
            </div>

            <div
              className={`relative w-full max-w-lg justify-self-center overflow-hidden rounded-2xl border border-[#972d3e]/12 bg-surface-elevated/55 shadow-[0_12px_40px_rgba(151,45,62,0.08)] lg:max-w-[28.5rem] lg:justify-self-end xl:max-w-[31.5rem] ${heroImage.className}`}
              style={heroImage.style}
            >
              <Image
                src="/images/brand-story-3.png"
                alt="Bison Floral founder walking in front of a floral installation"
                width={1024}
                height={768}
                sizes="(max-width: 1024px) 100vw, 480px"
                priority
                className="aspect-[4/3] w-full object-cover sm:aspect-auto sm:min-h-[200px] lg:aspect-[4/3] lg:min-h-0"
              />
            </div>
          </div>
        </section>

        <section className="border-t border-[#972d3e]/10 bg-background">
          <div className="mx-auto grid w-full max-w-7xl min-w-0 gap-6 px-4 py-9 sm:px-5 md:px-8 md:py-10 lg:grid-cols-2 lg:items-center lg:gap-10">
            <div
              className={`order-1 w-full max-w-lg justify-self-center overflow-hidden rounded-2xl border border-[#972d3e]/12 bg-surface-elevated/65 shadow-[0_8px_32px_rgba(151,45,62,0.06)] lg:order-1 lg:max-w-[28.5rem] lg:justify-self-start xl:max-w-[31.5rem] ${whatImage.className}`}
              style={whatImage.style}
            >
              {/* Same image as gallery slot 01 (see gallery-manifest.json) */}
              <Image
                src={homeWeddingPhoto.src}
                alt={homeWeddingPhoto.alt}
                width={homeWeddingPhoto.width}
                height={homeWeddingPhoto.height}
                sizes="(max-width: 1024px) 100vw, 480px"
                className="aspect-[4/3] w-full object-cover sm:min-h-[200px] lg:aspect-[4/3] lg:min-h-0"
              />
            </div>
            <div className="order-2 min-w-0 lg:order-2">
              <div
                className={`rounded-2xl border border-[#d96889]/20 bg-surface/90 p-6 shadow-[0_8px_32px_rgba(151,45,62,0.06)] md:p-8 ${whatCard.className}`}
                style={whatCard.style}
              >
                <p className="text-xs uppercase tracking-[0.28em] text-[#972d3e]">What we do</p>
                <h2 className="mt-3 text-balance font-[family:var(--font-display)] text-2xl leading-tight sm:text-3xl md:text-4xl">
                  Floral design for modern love stories
                </h2>
                <p className="mt-4 max-w-md text-sm leading-7 text-[#4b3833] md:text-base">
                  From bouquets to full-scale installations, each piece is created with movement,
                  texture, and intention—bringing a soft, romantic presence to the spaces you&apos;ll
                  remember most.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[#972d3e]/10 bg-background">
          <div className="mx-auto grid w-full max-w-7xl min-w-0 gap-6 px-4 py-9 sm:px-5 md:px-8 md:py-10 lg:grid-cols-2 lg:items-center lg:gap-10">
            <div className="order-2 min-w-0 lg:order-1">
              <div
                className={`rounded-2xl border border-[#d96889]/20 bg-surface/90 p-6 shadow-[0_8px_32px_rgba(151,45,62,0.06)] md:p-8 ${wayCard.className}`}
                style={wayCard.style}
              >
                <p className="text-xs uppercase tracking-[0.28em] text-[#972d3e]">The Bison Floral way</p>
                <h2 className="mt-3 text-balance font-[family:var(--font-display)] text-2xl leading-tight sm:text-3xl md:text-4xl">
                  Thoughtful design, rooted in intention
                </h2>
                <p className="mt-4 max-w-md text-sm leading-7 text-[#4b3833] md:text-base">
                  Inspired by the natural landscape, our designs embrace seasonality, movement, and an
                  organic sense of balance—florals that feel like they belong.
                </p>
              </div>
            </div>
            <div
              className={`order-1 min-w-0 overflow-hidden rounded-2xl border border-[#972d3e]/12 bg-surface-elevated/65 shadow-[0_8px_32px_rgba(151,45,62,0.06)] lg:order-2 ${wayImage.className}`}
              style={wayImage.style}
            >
              <Image
                src="/images/brand-story-4.png"
                alt="Floral arch with bison in a Montana field"
                width={1200}
                height={900}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="aspect-[4/3] w-full object-cover lg:aspect-auto lg:min-h-[300px]"
              />
            </div>
          </div>
        </section>

        <section className="border-t border-[#972d3e]/10 bg-background">
          <div className="mx-auto max-w-2xl min-w-0 px-4 py-8 text-center sm:px-5 md:px-8 md:py-10">
            <div
              className={`rounded-2xl border border-[#d96889]/20 bg-surface/95 px-5 py-7 shadow-[0_8px_28px_rgba(151,45,62,0.05)] md:px-8 ${galleryTeaser.className}`}
              style={galleryTeaser.style}
            >
              <Link
                href="/gallery"
                className="inline-flex min-h-11 items-center justify-center text-sm font-semibold uppercase tracking-[0.2em] text-[#972d3e] underline decoration-[#972d3e]/30 underline-offset-8 transition hover:decoration-[#972d3e]"
              >
                Gallery
              </Link>
            </div>
          </div>
        </section>

        <section className="border-t border-[#972d3e]/10 bg-[linear-gradient(180deg,#f5dfe8_0%,#edc9d6_100%)]">
          <div className="mx-auto flex w-full max-w-7xl min-w-0 flex-col gap-5 px-4 py-9 sm:px-5 md:flex-row md:items-center md:justify-between md:px-8 md:py-10">
            <div className={`min-w-0 max-w-md ${inquireCopy.className}`} style={inquireCopy.style}>
              <p className="text-xs uppercase tracking-[0.28em] text-[#c45c73]">Inquire</p>
              <h2 className="mt-3 text-balance font-[family:var(--font-display)] text-2xl leading-tight sm:text-3xl md:text-4xl">
                For couples who care about details
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#4b3833]">
                If that&apos;s you, we&apos;d love to connect.
              </p>
            </div>
            <div
              className={`flex flex-col gap-3 sm:flex-row sm:items-center ${inquireActions.className}`}
              style={inquireActions.style}
            >
              <Link
                href="/inquire"
                className="inline-flex min-h-12 touch-manipulation items-center justify-center rounded-full bg-[#aa004f] px-6 text-sm font-semibold uppercase tracking-[0.18em] text-white transition active:scale-[0.98] hover:bg-[#972d3e]"
              >
                Inquire
              </Link>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 touch-manipulation items-center justify-center rounded-full border border-[#972d3e]/20 bg-surface-elevated/85 px-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#6f3944] transition active:scale-[0.98] hover:border-[#d96889]"
              >
                Instagram
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
