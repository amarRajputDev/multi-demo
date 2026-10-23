import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ProductCard } from "../components/product-card";
import { TmProductImage } from "../components/product-image";
import {
  tmCollectionNav,
  tmDemoNotice,
  tmProductsInCategory,
  type TmCategory,
} from "../data";
import { PageHero } from "../sections/page-hero";
import { Reveal } from "@/components/shared/reveal";

interface CollectionPageProps {
  category: TmCategory;
}

export function generateCollectionMetadata(category: TmCategory): Metadata {
  return {
    title: `${category.title} — TM SONS | Ludhiana`,
    description: `${category.blurb} Browse the TM SONS ${category.label.toLowerCase()} selection in this website concept. Wholesale and retail prices on request.`,
  };
}

export default function TmSonsCollectionPage({ category }: CollectionPageProps) {
  const products = tmProductsInCategory(category.slug);
  const others = tmCollectionNav.filter(
    (item) => item.href !== `/demos/tm-sons/collections/${category.slug}`,
  );

  const words = category.title.split(" ");
  const title =
    words.length > 1 ? (
      <>
        {words.slice(0, -1).join(" ")}{" "}
        <span className="italic text-[#B23B2E]">{words.slice(-1)}</span>
      </>
    ) : (
      <span className="italic text-[#B23B2E]">{category.title}</span>
    );

  return (
    <>
      <PageHero
        eyebrow={`Collection · ${category.label}`}
        title={title}
        intro={category.blurb}
        aside={
          <div className="border border-[#1C1A17]/15 bg-[#FFFDFA] p-5">
            <p className="text-[9px] tracking-[0.24em] text-[#B23B2E] uppercase">
              More collections
            </p>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
              {others.map((item) => (
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
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-[11px] tracking-[0.16em] text-[#6F6A61] uppercase"
          >
            <Link
              href="/demos/tm-sons/shop"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-[#B23B2E]"
            >
              <ArrowLeft aria-hidden className="h-3.5 w-3.5" />
              Shop all
            </Link>
            <span aria-hidden>/</span>
            <span className="text-[#1C1A17]">{category.label}</span>
          </nav>

          <p className="mt-6 text-[10px] tracking-[0.24em] text-[#6F6A61] uppercase">
            {products.length}{" "}
            {products.length === 1 ? "piece" : "pieces"} · prices available on
            request
          </p>

          {products.length > 0 ? (
            <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
              {products.map((product, index) => (
                <li key={product.slug}>
                  <Reveal delay={index * 0.05} className="h-full">
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
          ) : (
            <div className="mt-8 border border-dashed border-[#1C1A17]/25 bg-[#FFFDFA] p-10 text-center">
              <p className="font-tmsons-display text-xl text-[#1C1A17]">
                This collection is not published yet
              </p>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#6F6A61]">
                Categories with no verified product photography are hidden from
                this concept rather than shown as empty shelves.
              </p>
            </div>
          )}

          {/* Editorial single-collection note when the shelf is small. */}
          {products.length > 0 && products.length < 3 && (
            <div className="mt-12 grid gap-6 border-t border-[#1C1A17]/12 pt-10 sm:grid-cols-[auto_1fr] sm:items-center">
              <div className="w-full max-w-[9rem] overflow-hidden border border-[#1C1A17]/12 bg-[#FFFDFA] p-2.5">
                <TmProductImage
                  imageId={category.imageId}
                  alt={`${category.label} category reference`}
                  sizes="144px"
                />
              </div>
              <div>
                <p className="font-tmsons-display text-xl leading-snug text-[#1C1A17]">
                  More of this collection is shared on request
                </p>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#6F6A61]">
                  Only photography confirmed for this concept is published here.
                  Ask the TM SONS team for the current{" "}
                  {category.label.toLowerCase()} sheet, available colours and
                  wholesale rates.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="/demos/tm-sons/wholesale"
                    className="inline-flex min-h-11 items-center bg-[#B23B2E] px-6 text-[11px] tracking-[0.18em] text-white uppercase transition-colors hover:bg-[#8F2E23] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C1A17]"
                  >
                    Request the sheet
                  </Link>
                  <Link
                    href="/demos/tm-sons/shop"
                    className="group inline-flex min-h-11 items-center gap-2 border border-[#1C1A17]/25 px-6 text-[11px] tracking-[0.18em] text-[#1C1A17] uppercase transition-colors hover:border-[#1C1A17] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B23B2E]"
                  >
                    See everything
                    <ArrowRight
                      aria-hidden
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </div>
          )}

          <p className="mt-12 max-w-3xl text-[11px] leading-relaxed text-[#6F6A61]">
            {tmDemoNotice}
          </p>
        </div>
      </section>
    </>
  );
}
