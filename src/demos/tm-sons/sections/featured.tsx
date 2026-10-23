import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { ProductCard } from "../components/product-card";
import { tmDemoNotice, tmSortedProducts, tmProducts } from "../data";
import { SectionHeading } from "./section-heading";

export function FeaturedProducts() {
  const products = tmSortedProducts(tmProducts);

  return (
    <section
      id="featured"
      className="scroll-mt-24 border-b border-[#1C1A17]/10 bg-[#FAF7F2] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="02 — Featured"
            title={
              <>
                From the current{" "}
                <span className="italic text-[#B23B2E]">floor</span>
              </>
            }
            intro="Seven pieces photographed in store. Product names here are descriptive demo labels — official names, colours and pricing are confirmed with TM SONS."
          />
          <Link
            href="/demos/tm-sons/shop"
            className="group inline-flex shrink-0 items-center gap-2.5 bg-[#1C1A17] px-7 py-4 text-[11px] tracking-[0.2em] text-[#FAF7F2] uppercase transition-colors hover:bg-[#B23B2E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B23B2E]"
          >
            Shop all
            <ArrowRight
              aria-hidden
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {products.map((product, index) => (
            <li key={product.slug}>
              <Reveal delay={(index % 4) * 0.05} className="h-full">
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

        <p className="mt-8 max-w-3xl text-[11px] leading-relaxed text-[#6F6A61]">
          {tmDemoNotice}
        </p>
      </div>
    </section>
  );
}
