import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Info } from "lucide-react";
import { AddToBag } from "../components/add-to-bag";
import { ExotixImage } from "../components/exotix-image";
import { ProductCard } from "../components/product-card";
import { SectionHeading } from "../components/section-heading";
import {
  exotixContact,
  exotixDemo,
  getExotixCategoryMeta,
  exotixHomeHref,
} from "../data";
import {
  EXOTIX_DATA_NOTE,
  formatExotixPrice,
  getExotixRelatedProducts,
  type ExotixProduct,
} from "../products";

interface ProductPageProps {
  product: ExotixProduct;
}

/** Product detail experience for one piece in the verified snapshot. */
export default function ProductPage({ product }: ProductPageProps) {
  const category = getExotixCategoryMeta(product.category);
  const related = getExotixRelatedProducts(product, 4);
  const gallery = product.gallery?.length
    ? product.gallery
    : [product.image];

  return (
    <>
      <div className="mx-auto max-w-[1400px] px-4 pt-7 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb">
          <ol className="font-exotix-mono flex flex-wrap items-center gap-2 text-[10px] tracking-[0.2em] text-[#8A8A92] uppercase">
            <li>
              <Link
                href={exotixHomeHref}
                className="inline-flex items-center gap-1.5 transition hover:text-[#E23B2E]"
              >
                <ArrowLeft aria-hidden className="h-3 w-3" />
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link
                href={`${exotixHomeHref}/collections`}
                className="transition hover:text-[#E23B2E]"
              >
                Collections
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href={category.href} className="transition hover:text-[#E23B2E]">
                {category.label}
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-[#F2EFEA]" aria-current="page">
              {product.code}
            </li>
          </ol>
        </nav>
      </div>

      <div className="mx-auto grid max-w-[1400px] gap-10 px-4 pb-14 pt-6 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pb-20">
        <div className="grid gap-4">
          <ExotixImage
            src={gallery[0]}
            alt={product.imageAlt}
            aspectClassName="aspect-[4/5]"
            loading="eager"
            className="border border-[#1C1C20]"
          />
          {gallery.slice(1).map((src) => (
            <ExotixImage
              key={src}
              src={src}
              alt={`${product.name} — additional catalogue view`}
              aspectClassName="aspect-[4/5]"
              className="border border-[#1C1C20]"
            />
          ))}
        </div>

        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="font-exotix-mono flex items-center gap-3 text-[10px] tracking-[0.28em] text-[#E23B2E] uppercase">
            <span>{product.code}</span>
            <span aria-hidden className="exotix-timing-strip h-2.5 w-12 opacity-80" />
            <span className="text-[#8A8A92]">{product.drop}</span>
          </p>

          <h1 className="font-exotix-display mt-3 text-[clamp(2rem,4.4vw,3rem)] leading-[1.03] tracking-tight text-[#F2EFEA]">
            {product.name}
          </h1>

          <div className="mt-4 flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <span className="font-exotix-display text-[1.7rem] text-[#E23B2E]">
              {product.price === null
                ? "Enquire for price"
                : formatExotixPrice(product.price)}
            </span>
            {product.price !== null ? (
              <span className="font-exotix-mono text-[10px] tracking-[0.18em] text-[#8A8A92] uppercase">
                Verified on live listing · 23.10.26
              </span>
            ) : null}
          </div>

          <p className="mt-2 text-[11px] leading-relaxed text-[#8A8A92]">
            {EXOTIX_DATA_NOTE}
          </p>

          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-[#B9BDC4]">
            {product.description}
          </p>

          <div className="mt-6">
            <AddToBag product={product} />
          </div>

          <dl className="mt-6 grid gap-3 border-t border-[#232327] pt-5 text-[13px]">
            <div className="flex items-start justify-between gap-4">
              <dt className="font-exotix-mono text-[10px] tracking-[0.2em] text-[#8A8A92] uppercase">
                Availability
              </dt>
              <dd className="text-right text-[#B9BDC4]">
                Not confirmed — ask the brand
              </dd>
            </div>
            <div className="flex items-start justify-between gap-4">
              <dt className="font-exotix-mono text-[10px] tracking-[0.2em] text-[#8A8A92] uppercase">
                Lane
              </dt>
              <dd>
                <Link
                  href={category.href}
                  className="text-[#E23B2E] underline decoration-[#2A2A30] underline-offset-4 transition hover:decoration-[#E23B2E]"
                >
                  {category.label} — {category.lane}
                </Link>
              </dd>
            </div>
            <div className="flex items-start justify-between gap-4">
              <dt className="font-exotix-mono text-[10px] tracking-[0.2em] text-[#8A8A92] uppercase">
                Live listing
              </dt>
              <dd>
                <a
                  href={product.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#E23B2E] underline decoration-[#2A2A30] underline-offset-4 transition hover:decoration-[#E23B2E]"
                >
                  View on exotix.in
                  <ArrowUpRight aria-hidden className="h-3.5 w-3.5" />
                </a>
              </dd>
            </div>
          </dl>

          <p className="mt-5 flex items-start gap-2.5 rounded-sm border border-[#232327] bg-[#101013] p-4 text-[12px] leading-relaxed text-[#8A8A92]">
            <Info aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-[#E23B2E]" />
            <span>
              {exotixDemo.sizeNotice} {exotixDemo.stockNotice}{" "}
              {exotixDemo.policyNotice}
            </span>
          </p>

          <Link
            href={`${exotixHomeHref}/contact`}
            className="font-exotix-mono mt-4 inline-flex items-center gap-2 text-[11px] tracking-[0.18em] text-[#B9BDC4] uppercase underline decoration-[#2A2A30] underline-offset-4 transition hover:text-[#E23B2E]"
          >
            Enquire about this piece
            <ArrowUpRight aria-hidden className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      <section
        aria-labelledby="exotix-related-title"
        className="border-t border-[#232327] bg-[#0A0A0C]"
      >
        <div className="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            index="SECTION 04"
            eyebrow="Same garage"
            title={<span id="exotix-related-title">Related pieces.</span>}
            action={
              <Link
                href={category.href}
                className="font-exotix-mono inline-flex items-center gap-2 rounded-sm border border-[#2A2A30] px-5 py-3 text-[11px] tracking-[0.2em] text-[#B9BDC4] uppercase transition hover:border-[#E23B2E] hover:text-[#F2EFEA]"
              >
                All {category.label}
                <ArrowUpRight aria-hidden className="h-4 w-4" />
              </Link>
            }
          />

          <ul className="mt-9 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4 lg:gap-x-7">
            {related.map((item) => (
              <li key={item.slug}>
                <ProductCard
                  product={item}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 25vw"
                />
              </li>
            ))}
          </ul>

          <p className="mt-10 text-[11px] leading-relaxed text-[#8A8A92]">
            {exotixDemo.disclosure}{" "}
            <a
              href={exotixContact.contactPage}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E23B2E] underline decoration-[#2A2A30] underline-offset-4"
            >
              Open the brand&apos;s official contact page
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
