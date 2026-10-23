import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { ProductCard } from "../components/product-card";
import { SectionHeading } from "../components/section-heading";
import { anyaaHomeHref } from "../data";
import { anyaaProducts } from "../products";

/** Featured products - the highest-ranked concept entries. */
export function FeaturedProducts() {
  const featured = [...anyaaProducts]
    .sort((a, b) => a.featuredRank - b.featuredRank)
    .slice(0, 4);

  return (
    <section
      aria-labelledby="anyaa-featured-title"
      className="border-b border-[#DFE7E2] bg-white"
    >
      <div className="mx-auto max-w-[1360px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          index="Featured"
          eyebrow="Pieces to know"
          title={<span id="anyaa-featured-title">A first look at the edit.</span>}
          description="Four representative entries from the concept catalogue. Each one is honestly marked as concept content and priced on enquiry."
          action={
            <Link
              href={`${anyaaHomeHref}/collections`}
              className="font-anyaa-body inline-flex items-center gap-2 rounded-full border border-[#2E6F62]/40 px-6 py-3.5 text-[11px] font-medium tracking-[0.2em] text-[#22332F] uppercase transition hover:border-[#2E6F62] hover:text-[#2E6F62]"
            >
              Shop all
              <ArrowUpRight aria-hidden className="h-4 w-4" />
            </Link>
          }
        />

        <ul className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4 lg:gap-x-7">
          {featured.map((product, index) => (
            <li key={product.slug}>
              <Reveal delay={Math.min(index, 3) * 0.06}>
                <ProductCard product={product} priority={index < 2} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
