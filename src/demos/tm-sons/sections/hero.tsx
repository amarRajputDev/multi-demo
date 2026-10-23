import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { tmContact, tmHomeCategoryCards } from "../data";
import { TmProductImage } from "../components/product-image";

const heroFrames = [
  {
    imageId: "premium-cardigan",
    alt: "A light-coloured cardigan with decorative embroidery, photographed in store",
    caption: "Embroidered cardigan",
  },
  {
    imageId: "woollen-coord",
    alt: "An olive-coloured woollen co-ord style garment",
    caption: "Woollen co-ord",
  },
  {
    imageId: "farshi-sets",
    alt: "Garments stacked in store beneath a Farshi sets label",
    caption: "Farshi sets",
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[#1C1A17]/10 bg-[#FAF7F2]">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-[#B23B2E]/[0.07] blur-3xl"
      />

      <div className="mx-auto grid max-w-[1320px] gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16 lg:py-24">
        <Reveal>
          <p className="text-[10px] tracking-[0.34em] text-[#B23B2E] uppercase">
            Ludhiana · Wholesale &amp; Retail Enquiries
          </p>

          <h1 className="font-tmsons-display mt-6 text-[clamp(2.4rem,6.2vw,4.4rem)] leading-[1.02] tracking-[-0.015em] text-[#1C1A17]">
            Women&rsquo;s Fashion,
            <br />
            Curated for{" "}
            <span className="italic text-[#B23B2E]">Every Collection.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-[#6F6A61] sm:text-[17px]">
            Explore contemporary winterwear, coordinated styles and ethnic
            collections from TM SONS, Ludhiana.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href="/demos/tm-sons/shop"
              className="group inline-flex min-h-13 items-center gap-2.5 bg-[#1C1A17] px-8 py-4 text-[11px] tracking-[0.2em] text-[#FAF7F2] uppercase transition-colors hover:bg-[#B23B2E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B23B2E]"
            >
              Explore Collections
              <ArrowRight
                aria-hidden
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/demos/tm-sons/wholesale"
              className="inline-flex min-h-13 items-center gap-2.5 border border-[#1C1A17]/30 px-8 py-4 text-[11px] tracking-[0.2em] text-[#1C1A17] uppercase transition-colors hover:border-[#1C1A17] hover:bg-[#1C1A17]/[0.04] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B23B2E]"
            >
              Wholesale Enquiry
            </Link>
          </div>

          <dl className="mt-11 grid max-w-xl grid-cols-1 gap-x-8 gap-y-4 border-t border-[#1C1A17]/12 pt-7 sm:grid-cols-3">
            <div>
              <dt className="text-[9px] tracking-[0.24em] text-[#6F6A61] uppercase">
                Showroom
              </dt>
              <dd className="mt-2 flex items-start gap-1.5 text-[13px] leading-snug text-[#1C1A17]">
                <MapPin
                  aria-hidden
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#B23B2E]"
                />
                {tmContact.locationShort}
              </dd>
            </div>
            <div>
              <dt className="text-[9px] tracking-[0.24em] text-[#6F6A61] uppercase">
                Pricing
              </dt>
              <dd className="mt-2 text-[13px] leading-snug text-[#1C1A17]">
                Wholesale &amp; retail rates on request
              </dd>
            </div>
            <div>
              <dt className="text-[9px] tracking-[0.24em] text-[#6F6A61] uppercase">
                Direct line
              </dt>
              <dd className="mt-2">
                <a
                  href={tmContact.phones[0].telHref}
                  className="inline-flex items-center gap-1.5 text-[13px] text-[#1C1A17] transition-colors hover:text-[#B23B2E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B23B2E]"
                >
                  <Phone aria-hidden className="h-3.5 w-3.5 text-[#B23B2E]" />
                  {tmContact.phones[0].display}
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>

        <div className="relative">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <Reveal delay={0.08} className="col-span-2 sm:col-span-1">
              <figure className="border border-[#1C1A17]/10 bg-[#FFFDFA] p-2.5">
                <TmProductImage
                  imageId={heroFrames[0].imageId}
                  alt={heroFrames[0].alt}
                  sizes="(max-width: 1024px) 45vw, 26vw"
                  priority
                  aspectClassName="aspect-[4/5]"
                />
                <figcaption className="px-1 pt-2.5 pb-1 text-[9px] tracking-[0.2em] text-[#6F6A61] uppercase">
                  {heroFrames[0].caption}
                </figcaption>
              </figure>
            </Reveal>

            <Reveal delay={0.16} className="col-span-1">
              <figure className="h-full border border-[#1C1A17]/10 bg-[#FFFDFA] p-2.5">
                <TmProductImage
                  imageId={heroFrames[1].imageId}
                  alt={heroFrames[1].alt}
                  sizes="(max-width: 640px) 45vw, 20vw"
                  aspectClassName="aspect-[3/4] sm:aspect-[4/5]"
                />
                <figcaption className="px-1 pt-2.5 pb-1 text-[9px] tracking-[0.2em] text-[#6F6A61] uppercase">
                  {heroFrames[1].caption}
                </figcaption>
              </figure>
            </Reveal>

            <Reveal delay={0.24} className="col-span-1">
              <figure className="h-full border border-[#1C1A17]/10 bg-[#FFFDFA] p-2.5">
                <TmProductImage
                  imageId={heroFrames[2].imageId}
                  alt={heroFrames[2].alt}
                  sizes="(max-width: 640px) 45vw, 20vw"
                  aspectClassName="aspect-[3/4] sm:aspect-[4/5]"
                />
                <figcaption className="px-1 pt-2.5 pb-1 text-[9px] tracking-[0.2em] text-[#6F6A61] uppercase">
                  {heroFrames[2].caption}
                </figcaption>
              </figure>
            </Reveal>
          </div>

          <p className="mt-4 text-[10px] leading-relaxed text-[#6F6A61]/85">
            Reference photographs from TM SONS public posts — pending owner
            approval for commercial use. Categories:{" "}
            {tmHomeCategoryCards
              .slice(0, 3)
              .map((card) => card.label)
              .join(" · ")}
            .
          </p>
        </div>
      </div>
    </section>
  );
}
