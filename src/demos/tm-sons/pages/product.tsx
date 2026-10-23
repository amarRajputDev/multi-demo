import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { ProductActions } from "../components/product-actions";
import { ProductCard } from "../components/product-card";
import { TmProductImage } from "../components/product-image";
import {
  tmCategoryBySlug,
  tmDemoNotice,
  tmRelatedProducts,
  type TmProduct,
} from "../data";
import { Reveal } from "@/components/shared/reveal";

interface ProductPageProps {
  product: TmProduct;
}

export function generateProductMetadata(product: TmProduct): Metadata {
  return {
    title: `${product.title} — TM SONS | Price on Request`,
    description: `${product.summary} Enquire for wholesale and retail pricing from TM SONS, Ludhiana. Website concept by Vizo Technology.`,
  };
}

export default function TmSonsProductPage({ product }: ProductPageProps) {
  const primaryCategory = tmCategoryBySlug(product.categories[0]);
  const related = tmRelatedProducts(product);

  return (
    <>
      <section className="bg-[#FAF7F2] py-10 sm:py-14">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-[11px] tracking-[0.16em] text-[#6F6A61] uppercase"
          >
            <Link
              href="/demos/tm-sons/shop"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-[#B23B2E]"
            >
              <ArrowLeft aria-hidden className="h-3.5 w-3.5" />
              Shop all
            </Link>
            {product.categories.map((slug) => {
              const category = tmCategoryBySlug(slug);
              if (!category) return null;
              return (
                <span key={slug} className="flex items-center gap-2">
                  <span aria-hidden>/</span>
                  <Link
                    href={`/demos/tm-sons/collections/${slug}`}
                    className="transition-colors hover:text-[#B23B2E]"
                  >
                    {category.label}
                  </Link>
                </span>
              );
            })}
            <span aria-hidden>/</span>
            <span className="text-[#1C1A17]">{product.title}</span>
          </nav>

          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-14">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <Reveal>
                <figure className="border border-[#1C1A17]/12 bg-[#FFFDFA] p-3 sm:p-4">
                  <TmProductImage
                    imageId={product.imageId}
                    alt={product.alt}
                    priority
                    sizes="(max-width: 1024px) 92vw, 38vw"
                    aspectClassName="aspect-[9/16] max-h-[70vh]"
                  />
                  <figcaption className="px-1 pt-3 text-[10px] leading-relaxed text-[#6F6A61]">
                    Reference photograph — single authentic angle, not
                    reconstructed. {product.alt}.
                  </figcaption>
                </figure>
              </Reveal>
            </div>

            <div>
              <Reveal delay={0.08}>
                <p className="text-[10px] tracking-[0.3em] text-[#B23B2E] uppercase">
                  {primaryCategory?.label ?? "Collection"}
                </p>
                <h1 className="font-tmsons-display mt-4 text-[clamp(1.9rem,4vw,3rem)] leading-[1.06] tracking-[-0.015em] text-[#1C1A17]">
                  {product.title}
                </h1>

                <div className="mt-5 flex flex-wrap gap-2">
                  {product.categories.map((slug) => {
                    const category = tmCategoryBySlug(slug);
                    if (!category) return null;
                    return (
                      <Link
                        key={slug}
                        href={`/demos/tm-sons/collections/${slug}`}
                        className="border border-[#1C1A17]/20 px-3 py-1.5 text-[10px] tracking-[0.16em] text-[#1C1A17] uppercase transition-colors hover:border-[#B23B2E] hover:text-[#B23B2E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B23B2E]"
                      >
                        {category.label}
                      </Link>
                    );
                  })}
                </div>

                <p className="mt-7 text-base leading-relaxed text-[#1C1A17] sm:text-[17px]">
                  {product.detail}
                </p>

                <dl className="mt-7 space-y-4 border-y border-[#1C1A17]/12 py-6">
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    <dt className="w-32 shrink-0 text-[9px] tracking-[0.24em] text-[#6F6A61] uppercase">
                      Colours / sizes
                    </dt>
                    <dd className="flex-1 text-[14px] text-[#1C1A17]">
                      {product.variants && product.variants.length > 0 ? (
                        product.variants.join(" · ")
                      ) : (
                        <span className="text-[#6F6A61]">
                          Not yet verified — confirmed on enquiry.
                        </span>
                      )}
                    </dd>
                  </div>
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    <dt className="w-32 shrink-0 text-[9px] tracking-[0.24em] text-[#6F6A61] uppercase">
                      Availability
                    </dt>
                    <dd className="flex-1 text-[14px] text-[#6F6A61]">
                      Stock levels are not published in this concept.
                    </dd>
                  </div>
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    <dt className="w-32 shrink-0 text-[9px] tracking-[0.24em] text-[#6F6A61] uppercase">
                      Care &amp; fabric
                    </dt>
                    <dd className="flex-1 text-[14px] text-[#6F6A61]">
                      Not stated — fabric composition and care instructions
                      require owner confirmation.
                    </dd>
                  </div>
                </dl>

                <ProductActions
                  product={product}
                  categoryLabel={primaryCategory?.label ?? "Collection"}
                />

                <p className="mt-7 flex items-start gap-2.5 text-[11px] leading-relaxed text-[#6F6A61]">
                  <ShieldCheck
                    aria-hidden
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#B23B2E]"
                  />
                  {tmDemoNotice}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-[#1C1A17]/10 bg-[#F1EBE2] py-14 sm:py-20">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
            <div className="mb-5 h-px w-12 bg-[#B23B2E]" />
            <p className="text-[10px] tracking-[0.32em] text-[#B23B2E] uppercase">
              Similar pieces
            </p>
            <h2 className="font-tmsons-display mt-3 text-[clamp(1.5rem,3vw,2.2rem)] leading-tight text-[#1C1A17]">
              You may also like
            </h2>

            <ul className="mt-9 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
              {related.map((item, index) => (
                <li key={item.slug}>
                  <Reveal delay={index * 0.05} className="h-full">
                    <ProductCard
                      product={item}
                      sizes="(max-width: 640px) 50vw, 32vw"
                      className="h-full"
                    />
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
