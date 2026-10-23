import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProductCard } from "../components/product-card";
import { SectionHeading } from "../components/section-heading";
import { exotixHomeHref } from "../data";
import { EXOTIX_DATA_NOTE, exotixProducts } from "../products";

/** Featured grid of the highest-ranked pieces in the verified snapshot. */
export function FeaturedGrid() {
  const featured = [...exotixProducts]
    .sort((a, b) => a.featuredRank - b.featuredRank)
    .slice(0, 8);

  return (
    <section
      aria-labelledby="exotix-featured-title"
      className="border-b border-[#232327]"
    >
      <div className="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          index="SECTION 02"
          eyebrow="Featured grid"
          title={<span id="exotix-featured-title">Start on the front row.</span>}
          description="Eight pieces from the live catalogue snapshot - festive jackets up front, then the racing line and the graphic hoodies."
          action={
            <Link
              href={`${exotixHomeHref}/collections`}
              className="font-exotix-mono inline-flex items-center gap-2 rounded-sm border border-[#2A2A30] px-5 py-3 text-[11px] tracking-[0.2em] text-[#B9BDC4] uppercase transition hover:border-[#E23B2E] hover:text-[#F2EFEA]"
            >
              Shop all pieces
              <ArrowUpRight aria-hidden className="h-4 w-4" />
            </Link>
          }
        />

        <p className="font-exotix-mono mt-6 text-[10px] leading-relaxed tracking-[0.12em] text-[#8A8A92] uppercase">
          {EXOTIX_DATA_NOTE}
        </p>

        <ul className="mt-8 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4 lg:gap-x-7">
          {featured.map((product, index) => (
            <li key={product.slug}>
              <ProductCard
                product={product}
                priority={index < 4}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 25vw"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
