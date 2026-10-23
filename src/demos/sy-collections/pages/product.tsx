import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Info } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { AddToBag } from "../components/add-to-bag";
import { ProductGallery } from "../components/gallery";
import { ProductCard } from "../components/product-card";
import { SectionHeading } from "../components/section-heading";
import {
  getSyCategoryMeta,
  syContact,
  syDemo,
  syHomeHref,
} from "../data";
import {
  formatSyPrice,
  getSyRelatedProducts,
  type SyProduct,
} from "../products";

interface ProductPageProps {
  product: SyProduct;
}

/** Product detail experience for one representative catalogue piece. */
export default function ProductPage({ product }: ProductPageProps) {
  const category = getSyCategoryMeta(product.category);
  const related = getSyRelatedProducts(product, 3);

  return (
    <>
      <div className="mx-auto max-w-[1360px] px-4 pt-7 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-[10px] tracking-[0.2em] text-[#8B7B81] uppercase">
            <li>
              <Link
                href={syHomeHref}
                className="inline-flex items-center gap-1.5 transition hover:text-[#A63D57]"
              >
                <ArrowLeft aria-hidden className="h-3 w-3" />
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link
                href={`${syHomeHref}/collections`}
                className="transition hover:text-[#A63D57]"
              >
                Collections
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link
                href={category.href}
                className="transition hover:text-[#A63D57]"
              >
                {category.label}
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-[#4B2C3B]" aria-current="page">
              {product.name}
            </li>
          </ol>
        </nav>
      </div>

      <div className="mx-auto grid max-w-[1360px] gap-10 px-4 pb-14 pt-6 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pb-20">
        <div>
          <ProductGallery product={product} />
        </div>

        <div className="lg:sticky lg:top-28 lg:self-start">
          <Link
            href={category.href}
            className="text-[10px] font-medium tracking-[0.3em] text-[#A63D57] uppercase transition hover:underline underline-offset-4"
          >
            {category.label}
          </Link>

          <h1 className="font-sy-display mt-3 text-[clamp(2rem,4.4vw,3rem)] leading-[1.04] tracking-tight text-[#2C1F26]">
            {product.name}
          </h1>

          <div className="mt-4 flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <span className="font-sy-display text-[1.7rem] text-[#A63D57]">
              {formatSyPrice(product.price)}
            </span>
            {product.referencePrice ? (
              <span className="text-[15px] text-[#9A8A90] line-through">
                {formatSyPrice(product.referencePrice)}
              </span>
            ) : null}
            {product.referencePrice ? (
              <span className="text-[10px] tracking-[0.18em] text-[#8B7B81] uppercase">
                Reference price
              </span>
            ) : null}
          </div>

          <p className="mt-2 text-[11px] leading-relaxed text-[#8B7B81]">
            Reference prices are observations from the live catalogue and are
            not guaranteed live pricing.
          </p>

          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-[#4B2C3B]">
            {product.description}
          </p>

          <div className="mt-6">
            <AddToBag product={product} />
          </div>

          <dl className="mt-6 grid gap-3 border-t border-[#EFE5E1] pt-5 text-[13px]">
            <div className="flex items-start justify-between gap-4">
              <dt className="text-[10px] tracking-[0.2em] text-[#8B7B81] uppercase">
                Availability
              </dt>
              <dd className="text-right text-[#4B2C3B]">
                Not confirmed for this concept
              </dd>
            </div>
            <div className="flex items-start justify-between gap-4">
              <dt className="text-[10px] tracking-[0.2em] text-[#8B7B81] uppercase">
                Collection
              </dt>
              <dd>
                <Link
                  href={category.href}
                  className="text-[#A63D57] underline decoration-[#E4CFD4] underline-offset-4 transition hover:decoration-[#A63D57]"
                >
                  {category.label}
                </Link>
              </dd>
            </div>
            <div className="flex items-start justify-between gap-4">
              <dt className="text-[10px] tracking-[0.2em] text-[#8B7B81] uppercase">
                Original listing
              </dt>
              <dd>
                <a
                  href={product.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#A63D57] underline decoration-[#E4CFD4] underline-offset-4 transition hover:decoration-[#A63D57]"
                >
                  View on sycollections.shop
                  <ArrowUpRight aria-hidden className="h-3.5 w-3.5" />
                </a>
              </dd>
            </div>
          </dl>

          <p className="mt-5 flex items-start gap-2.5 rounded-[3px] bg-[#F6F1ED] p-4 text-[12px] leading-relaxed text-[#6B5A61]">
            <Info aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-[#A63D57]" />
            <span>
              {syDemo.sizeNotice} {syDemo.stockNotice}
            </span>
          </p>
        </div>
      </div>

      <section
        aria-labelledby="sy-related-title"
        className="border-t border-[#EFE5E1] bg-white"
      >
        <div className="mx-auto max-w-[1360px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            index="More to explore"
            eyebrow="Similar pieces"
            title={<span id="sy-related-title">You may also like.</span>}
            action={
              <Link
                href={category.href}
                className="inline-flex items-center gap-2 rounded-full border border-[#DCCFC9] px-5 py-3 text-[11px] font-medium tracking-[0.2em] text-[#4B2C3B] uppercase transition hover:border-[#A63D57] hover:text-[#A63D57]"
              >
                All {category.label}
                <ArrowUpRight aria-hidden className="h-4 w-4" />
              </Link>
            }
          />

          <ul className="mt-9 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-3 lg:gap-x-8">
            {related.map((item, index) => (
              <li key={item.slug}>
                <Reveal delay={Math.min(index, 3) * 0.06}>
                  <ProductCard
                    product={item}
                    sizes="(max-width: 640px) 50vw, 33vw"
                  />
                </Reveal>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-[3px] bg-[#F7F1EC] p-6 sm:flex-row sm:items-center sm:p-8">
            <div>
              <p className="text-[10px] tracking-[0.3em] text-[#A63D57] uppercase">
                Related collection
              </p>
              <p className="font-sy-display mt-2 text-[1.4rem] leading-snug text-[#2C1F26]">
                {category.label}
              </p>
              <p className="mt-1.5 max-w-md text-[13.5px] leading-relaxed text-[#6B5A61]">
                {category.blurb}
              </p>
            </div>
            <Link
              href={category.href}
              className="inline-flex items-center gap-2 rounded-full bg-[#2C1F26] px-6 py-3.5 text-[11px] font-medium tracking-[0.2em] text-[#FBF6F2] uppercase transition hover:bg-[#4B2C3B]"
            >
              Explore the collection
            </Link>
          </div>

          <p className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] leading-relaxed text-[#8B7B81]">
            {syDemo.disclosure}
            <a
              href={syContact.contactPage}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A63D57] underline decoration-[#E4CFD4] underline-offset-4"
            >
              Contact the brand
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
