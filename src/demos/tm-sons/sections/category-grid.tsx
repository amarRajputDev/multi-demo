import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { tmAssetAlt, tmHomeCategoryCards, tmImageManifest } from "../data";
import { TmProductImage } from "../components/product-image";
import { SectionHeading } from "./section-heading";

const assets = new Map(tmImageManifest.map((asset) => [asset.id, asset]));

/**
 * "Shop by category". Only categories with verified reference imagery are
 * shown — no empty shelves dressed up as stocked collections.
 */
export function CategoryGrid() {
  return (
    <section
      id="collections"
      className="scroll-mt-24 border-b border-[#1C1A17]/10 bg-[#FFFDFA] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="01 — Collections"
            title={
              <>
                Shop by{" "}
                <span className="italic text-[#B23B2E]">category</span>
              </>
            }
            intro="Five ways into the current catalogue. Every category below has a reference photograph from the TM SONS shop floor."
          />
          <Link
            href="/demos/tm-sons/shop"
            className="group inline-flex shrink-0 items-center gap-2 border-b border-[#1C1A17] pb-1 text-[11px] tracking-[0.2em] text-[#1C1A17] uppercase transition-colors hover:border-[#B23B2E] hover:text-[#B23B2E]"
          >
            View all products
            <ArrowUpRight
              aria-hidden
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {tmHomeCategoryCards.map((card, index) => (
            <li
              key={card.categorySlug}
              className={
                index === 0
                  ? "lg:col-span-3"
                  : index === 1
                    ? "lg:col-span-3"
                    : "lg:col-span-2"
              }
            >
              <Reveal delay={index * 0.06}>
                <Link
                  href={`/demos/tm-sons/collections/${card.categorySlug}`}
                  className="group relative block overflow-hidden border border-[#1C1A17]/12 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B23B2E]"
                >
                  <div className="overflow-hidden">
                    <TmProductImage
                      imageId={card.imageId}
                      alt={tmAssetAlt(
                        card.imageId,
                        `${card.label} reference photograph`,
                      )}
                      sizes={
                        index < 2
                          ? "(max-width: 1024px) 90vw, 45vw"
                          : "(max-width: 1024px) 45vw, 30vw"
                      }
                      aspectClassName="aspect-[4/3] sm:aspect-[16/11]"
                      className="transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                    />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1C1A17]/92 via-[#1C1A17]/60 to-transparent p-5 pt-16">
                    <p className="text-[9px] tracking-[0.26em] text-[#E9B7AE] uppercase">
                      {assets.get(card.imageId)?.label ?? "Reference"}
                    </p>
                    <p className="font-tmsons-display mt-1.5 flex items-center gap-2 text-[clamp(1.15rem,2vw,1.6rem)] leading-tight text-[#FAF7F2]">
                      {card.label}
                      <ArrowUpRight
                        aria-hidden
                        className="h-4 w-4 shrink-0 text-[#E9B7AE] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </p>
                    <p className="mt-1 text-[12px] leading-snug text-[#FAF7F2]/70">
                      {card.blurb}
                    </p>
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
