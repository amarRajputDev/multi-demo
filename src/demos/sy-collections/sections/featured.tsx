import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { ProductCard } from "../components/product-card";
import { SectionHeading } from "../components/section-heading";
import { syDemo, syHomeHref } from "../data";
import { syProducts } from "../products";

/** Curated product grid drawn from the representative demo catalogue. */
export function FeaturedProducts() {
  const featured = [...syProducts]
    .sort((a, b) => a.featuredRank - b.featuredRank)
    .slice(0, 6);

  return (
    <section
      id="featured"
      aria-labelledby="sy-featured-title"
      className="bg-white"
    >
      <div className="mx-auto max-w-[1360px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          index="02"
          eyebrow="Featured pieces"
          title={<span id="sy-featured-title">Loved for everyday wear.</span>}
          description="A curated selection from the current catalogue - kurtis, sets and prints with accessible pricing."
          action={
            <Link
              href={`${syHomeHref}/collections`}
              className="inline-flex items-center gap-2 rounded-full border border-[#DCCFC9] px-5 py-3 text-[11px] font-medium tracking-[0.2em] text-[#4B2C3B] uppercase transition hover:border-[#A63D57] hover:text-[#A63D57]"
            >
              View all pieces
              <ArrowUpRight aria-hidden className="h-4 w-4" />
            </Link>
          }
        />

        <ul className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 lg:mt-14 lg:grid-cols-3 lg:gap-x-8">
          {featured.map((product, index) => (
            <li key={product.slug}>
              <Reveal delay={Math.min(index, 3) * 0.06}>
                <ProductCard
                  product={product}
                  priority={index < 3}
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
              </Reveal>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-[#EFE5E1] pt-6 sm:flex-row sm:items-center">
          <p className="max-w-xl text-[11px] leading-relaxed text-[#8B7B81]">
            {syDemo.disclosure}
          </p>
          <Link
            href={`${syHomeHref}/collections`}
            className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-[0.2em] text-[#A63D57] uppercase underline decoration-[#E4CFD4] underline-offset-4 transition hover:gap-2.5"
          >
            Open the full collection
            <ArrowUpRight aria-hidden className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
