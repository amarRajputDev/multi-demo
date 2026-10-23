import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "../components/product-card";
import { tmCollectionNav, tmDemoNotice, tmProducts, tmSortedProducts } from "../data";
import { PageHero } from "../sections/page-hero";
import { Reveal } from "@/components/shared/reveal";

export function generateMetadata(): Metadata {
  return {
    title: "Shop All — TM SONS | Women's Clothing Catalogue",
    description:
      "Browse every TM SONS clothing reference in this concept catalogue: cardigans, woollen co-ord sets, patterned winterwear, farshi sets, sweatshirts and ethnic collections. Prices on request.",
  };
}

export default function TmSonsShopPage() {
  const products = tmSortedProducts(tmProducts);

  return (
    <>
      <PageHero
        eyebrow="Catalogue"
        title={
          <>
            Shop <span className="italic text-[#B23B2E]">all</span>
          </>
        }
        intro="Seven reference pieces from the TM SONS floor, organised by collection. Prices are not published — add pieces to your enquiry list and request wholesale or retail rates directly."
        aside={
          <div className="border border-[#1C1A17]/15 bg-[#FFFDFA] p-5">
            <p className="text-[9px] tracking-[0.24em] text-[#B23B2E] uppercase">
              Collections
            </p>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
              {tmCollectionNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[13px] text-[#1C1A17] underline-offset-4 transition-colors hover:text-[#B23B2E] hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        }
      />

      <section className="bg-[#FAF7F2] py-12 sm:py-16">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <p className="text-[10px] tracking-[0.24em] text-[#6F6A61] uppercase">
            {products.length} pieces · prices available on request
          </p>

          <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {products.map((product, index) => (
              <li key={product.slug}>
                <Reveal delay={(index % 4) * 0.04} className="h-full">
                  <ProductCard
                    product={product}
                    priority={index < 4}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                    className="h-full"
                  />
                </Reveal>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-col items-start justify-between gap-5 border border-[#1C1A17]/12 bg-[#F1EBE2] p-6 sm:flex-row sm:items-center sm:p-7">
            <div>
              <p className="font-tmsons-display text-xl text-[#1C1A17]">
                Buying for a store?
              </p>
              <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-[#6F6A61]">
                Send your selected pieces, quantities and city in one wholesale
                enquiry — no minimum order quantity is imposed in this concept.
              </p>
            </div>
            <Link
              href="/demos/tm-sons/wholesale"
              className="group inline-flex min-h-12 shrink-0 items-center gap-2.5 bg-[#B23B2E] px-7 text-[11px] tracking-[0.2em] text-white uppercase transition-colors hover:bg-[#8F2E23] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C1A17]"
            >
              Wholesale enquiry
              <ArrowRight
                aria-hidden
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <p className="mt-8 max-w-3xl text-[11px] leading-relaxed text-[#6F6A61]">
            {tmDemoNotice}
          </p>
        </div>
      </section>
    </>
  );
}
