import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { TmProductImage } from "../components/product-image";
import { tmAssetAlt, tmSeasonalProducts } from "../data";
import { tmSeasonLabel } from "../season";
import { SectionHeading } from "./section-heading";

/**
 * Seasonal editorial band. The selection lives in `tmSeasonalSlugs` and the
 * season caption in `season.ts`, so re-curating this section never touches a
 * component.
 */
export async function Seasonal() {
  const products = tmSeasonalProducts();
  const season = await tmSeasonLabel();

  if (products.length === 0) return null;

  return (
    <section
      id="seasonal"
      className="scroll-mt-24 border-b border-[#1C1A17]/10 bg-[#F1EBE2] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow={`04 — In season · ${season}`}
            title={
              <>
                Cold-weather{" "}
                <span className="italic text-[#B23B2E]">layers</span>
              </>
            }
            intro="Cardigans, woollen co-ords and sweatshirts photographed on the TM SONS floor. Swap this edit by updating the seasonal list in the data file."
          />
          <Link
            href="/demos/tm-sons/collections/winterwear"
            className="group inline-flex shrink-0 items-center gap-2 border-b border-[#1C1A17] pb-1 text-[11px] tracking-[0.2em] text-[#1C1A17] uppercase transition-colors hover:border-[#B23B2E] hover:text-[#B23B2E]"
          >
            Winterwear
            <ArrowUpRight
              aria-hidden
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {products.map((product, index) => (
            <li key={product.slug}>
              <Reveal delay={index * 0.06}>
                <Link
                  href={`/demos/tm-sons/products/${product.slug}`}
                  className="group block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B23B2E]"
                >
                  <div className="overflow-hidden border border-[#1C1A17]/12 bg-[#FFFDFA] p-2.5">
                    <TmProductImage
                      imageId={product.imageId}
                      alt={tmAssetAlt(product.imageId, product.alt)}
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                      aspectClassName="aspect-[3/4]"
                      className="transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                    />
                  </div>
                  <div className="mt-3 flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className="font-tmsons-display truncate text-[0.98rem] leading-snug text-[#1C1A17] transition-colors group-hover:text-[#B23B2E]">
                        {product.title}
                      </p>
                      <p className="mt-1 text-[9px] tracking-[0.2em] text-[#6F6A61] uppercase">
                        Request wholesale price
                      </p>
                    </div>
                    <ArrowUpRight
                      aria-hidden
                      className="mt-1 h-4 w-4 shrink-0 text-[#B23B2E] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
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
