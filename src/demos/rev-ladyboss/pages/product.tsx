import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { InstagramGlyph } from "../components/icons";
import { Reveal } from "@/components/shared/reveal";
import { AddToBag } from "../components/add-to-bag";
import { DataNote } from "../components/data-note";
import { EnquiryForm } from "../components/enquiry-form";
import { ProductGallery } from "../components/gallery";
import { ProductCard } from "../components/product-card";
import {
  getRevCategoryMeta,
  revContact,
  revDemo,
  revHomeHref,
} from "../data";
import {
  formatRevPrice,
  getRevRelatedProducts,
  type RevProduct,
} from "../products";

/** Product detail: gallery, size selection, wishlist-ready card grid, enquiry. */
export default function RevProductPage({ product }: { product: RevProduct }) {
  const category = getRevCategoryMeta(product.category);
  const related = getRevRelatedProducts(product, 3);

  return (
    <>
      <div className="mx-auto max-w-[1400px] px-4 pt-7 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-[10px] font-semibold tracking-[0.22em] text-[#7C7073] uppercase">
            <li>
              <Link
                href={revHomeHref}
                className="inline-flex items-center gap-1.5 transition hover:text-[#B4707F]"
              >
                <ArrowLeft aria-hidden className="h-3 w-3" />
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link
                href={`${revHomeHref}/collections`}
                className="transition hover:text-[#B4707F]"
              >
                Collections
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link
                href={category.href}
                className="transition hover:text-[#B4707F]"
              >
                {category.label}
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-[#1A1618]" aria-current="page">
              {product.name}
            </li>
          </ol>
        </nav>
      </div>

      <div className="mx-auto grid max-w-[1400px] gap-10 px-4 pb-14 pt-6 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pb-20">
        <div>
          <ProductGallery product={product} />
        </div>

        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="flex items-center gap-3">
            <Link
              href={category.href}
              className="text-[10px] font-semibold tracking-[0.3em] text-[#B4707F] uppercase transition hover:underline underline-offset-4"
            >
              {category.index} · {category.label}
            </Link>
            <span className="rounded-[2px] bg-[#F3DCE1] px-2 py-1 text-[9px] font-semibold tracking-[0.2em] text-[#8E5765] uppercase">
              Demo entry
            </span>
          </div>

          <h1 className="font-rev-heading mt-3 text-[clamp(2rem,4.6vw,3.2rem)] leading-[0.94] text-[#1A1618]">
            {product.name}
          </h1>

          <p className="font-rev-heading mt-4 text-[1.5rem] text-[#B4707F]">
            {formatRevPrice(product.price)}
          </p>

          <p className="mt-2 text-[11px] leading-relaxed text-[#7C7073]">
            {product.price === null
              ? "Pricing is confirmed by the seller - no price is assumed in this concept."
              : "Demonstration price."}
          </p>

          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-[#5F5458]">
            {product.description}
          </p>

          <div className="mt-6 border-t border-[#E8D9DC] pt-6">
            <AddToBag product={product} />
          </div>

          <dl className="mt-6 grid gap-3 border-t border-[#E8D9DC] pt-5 text-[13px]">
            <div className="flex items-start justify-between gap-4">
              <dt className="text-[10px] font-semibold tracking-[0.2em] text-[#7C7073] uppercase">
                Availability
              </dt>
              <dd className="text-right text-[#5F5458]">
                Not confirmed - enquire with the seller
              </dd>
            </div>
            <div className="flex items-start justify-between gap-4">
              <dt className="text-[10px] font-semibold tracking-[0.2em] text-[#7C7073] uppercase">
                Data status
              </dt>
              <dd className="text-right text-[#5F5458]">
                Demonstration entry ({product.verification})
              </dd>
            </div>
            <div className="flex items-start justify-between gap-4">
              <dt className="text-[10px] font-semibold tracking-[0.2em] text-[#7C7073] uppercase">
                How to order
              </dt>
              <dd>
                <a
                  href={revContact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#B4707F] underline decoration-[#E8D9DC] underline-offset-4 transition hover:decoration-[#B4707F]"
                >
                  DM {revContact.instagramHandle}
                  <ArrowUpRight aria-hidden className="h-3.5 w-3.5" />
                </a>
              </dd>
            </div>
          </dl>

          <p className="mt-5 text-[12px] leading-relaxed text-[#7C7073]">
            {revDemo.sizeNotice} {revDemo.stockNotice}
          </p>

          <div className="mt-6 rounded-[2px] border border-[#E8D9DC] bg-[#FAF4F3] p-6">
            <p className="font-rev-heading text-base text-[#1A1618]">
              Enquire about this piece
            </p>
            <div className="mt-4">
              <EnquiryForm productName={product.name} compact />
            </div>
          </div>
        </div>
      </div>

      <section
        aria-labelledby="rev-related-title"
        className="border-t border-[#E8D9DC] bg-white"
      >
        <div className="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.36em] text-[#B4707F] uppercase">
                Similar pieces
              </p>
              <h2
                id="rev-related-title"
                className="font-rev-heading mt-2 text-[clamp(1.8rem,4vw,2.8rem)] leading-[0.95] text-[#1A1618]"
              >
                You may also like
              </h2>
            </div>
            <Link
              href={category.href}
              className="inline-flex items-center gap-2 rounded-[2px] border border-[#1A1618] px-6 py-3.5 text-[11px] font-semibold tracking-[0.2em] text-[#1A1618] uppercase transition hover:border-[#B4707F] hover:text-[#B4707F]"
            >
              All {category.label}
              <ArrowUpRight aria-hidden className="h-4 w-4" />
            </Link>
          </div>

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

          <DataNote className="mt-12 flex items-start gap-2.5 rounded-[2px] bg-[#F3DCE1]/50 p-5 text-[11.5px] leading-relaxed text-[#5F5458]" />

          <p className="mt-6 flex flex-wrap items-center gap-3 text-[11px] text-[#7C7073]">
            {revDemo.disclosure}
            <a
              href={revContact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#B4707F] underline decoration-[#E8D9DC] underline-offset-4"
            >
              <InstagramGlyph aria-hidden className="h-3 w-3" />
              Contact the brand
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
