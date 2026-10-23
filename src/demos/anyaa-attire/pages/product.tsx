import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Info } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { AddToPanel } from "../components/add-to-panel";
import { ProductGallery } from "../components/gallery";
import { ProductCard } from "../components/product-card";
import { SectionHeading } from "../components/section-heading";
import { EnquiryForm } from "../components/enquiry-form";
import {
  anyaaContact,
  anyaaDataNote,
  anyaaDemo,
  anyaaHomeHref,
  getAnyaaCategoryMeta,
} from "../data";
import {
  anyaaPriceLabel,
  getAnyaaRelatedProducts,
  type AnyaaProduct,
} from "../products";

interface ProductPageProps {
  product: AnyaaProduct;
}

/** Product detail experience for one concept entry. */
export default function ProductPage({ product }: ProductPageProps) {
  const category = getAnyaaCategoryMeta(product.category);
  const related = getAnyaaRelatedProducts(product, 3);

  return (
    <>
      <div className="mx-auto max-w-[1360px] px-4 pt-7 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb">
          <ol className="font-anyaa-body flex flex-wrap items-center gap-2 text-[10px] tracking-[0.2em] text-[#6E7C77] uppercase">
            <li>
              <Link
                href={anyaaHomeHref}
                className="inline-flex items-center gap-1.5 transition hover:text-[#2E6F62]"
              >
                <ArrowLeft aria-hidden className="h-3 w-3" />
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link
                href={`${anyaaHomeHref}/collections`}
                className="transition hover:text-[#2E6F62]"
              >
                Collections
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link
                href={category.href}
                className="transition hover:text-[#2E6F62]"
              >
                {category.label}
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-[#22332F]" aria-current="page">
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
            className="font-anyaa-body text-[10px] font-medium tracking-[0.3em] text-[#2E6F62] uppercase transition hover:underline underline-offset-4"
          >
            {category.label}
          </Link>

          <h1 className="font-anyaa-display mt-3 text-[clamp(2rem,4.4vw,3rem)] leading-[1.05] tracking-tight text-[#22332F]">
            {product.name}
          </h1>

          <p className="font-anyaa-display mt-4 text-[1.7rem] text-[#2E6F62]">
            {anyaaPriceLabel(product)}
          </p>

          <p className="font-anyaa-body mt-2 text-[11px] leading-relaxed text-[#6E7C77]">
            {anyaaDataNote}
          </p>

          <p className="font-anyaa-body mt-5 max-w-lg text-[15px] leading-relaxed text-[#22332F]">
            {product.description}
          </p>

          <div className="mt-6">
            <AddToPanel product={product} />
          </div>

          <dl className="font-anyaa-body mt-6 grid gap-3 border-t border-[#DFE7E2] pt-5 text-[13px]">
            <div className="flex items-start justify-between gap-4">
              <dt className="text-[10px] tracking-[0.2em] text-[#6E7C77] uppercase">
                Record status
              </dt>
              <dd className="text-right text-[#22332F]">
                {product.verification === "verified"
                  ? "Verified"
                  : product.verification === "unverified"
                    ? "Unverified"
                    : "Demo-only concept entry"}
              </dd>
            </div>
            <div className="flex items-start justify-between gap-4">
              <dt className="text-[10px] tracking-[0.2em] text-[#6E7C77] uppercase">
                Availability
              </dt>
              <dd className="text-right text-[#22332F]">
                Not confirmed for this concept
              </dd>
            </div>
            <div className="flex items-start justify-between gap-4">
              <dt className="text-[10px] tracking-[0.2em] text-[#6E7C77] uppercase">
                Collection
              </dt>
              <dd>
                <Link
                  href={category.href}
                  className="text-[#2E6F62] underline decoration-[#DFE7E2] underline-offset-4 transition hover:decoration-[#2E6F62]"
                >
                  {category.label}
                </Link>
              </dd>
            </div>
            {product.sourceUrl ? (
              <div className="flex items-start justify-between gap-4">
                <dt className="text-[10px] tracking-[0.2em] text-[#6E7C77] uppercase">
                  Historical reference
                </dt>
                <dd>
                  <a
                    href={product.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#2E6F62] underline decoration-[#DFE7E2] underline-offset-4 transition hover:decoration-[#2E6F62]"
                  >
                    View the 2023 archive post
                    <ArrowUpRight aria-hidden className="h-3.5 w-3.5" />
                  </a>
                </dd>
              </div>
            ) : null}
          </dl>

          <p className="font-anyaa-body mt-5 flex items-start gap-2.5 rounded-[3px] bg-[#F2F5F1] p-4 text-[12px] leading-relaxed text-[#6E7C77]">
            <Info aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-[#2E6F62]" />
            <span>
              {anyaaDemo.sizeNotice} {anyaaDemo.stockNotice}
            </span>
          </p>
        </div>
      </div>

      <section
        id="enquire-piece"
        aria-labelledby="anyaa-product-enquire-title"
        className="border-t border-[#DFE7E2] bg-[#F2F5F1]"
      >
        <div className="mx-auto grid max-w-[1360px] gap-10 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-20">
          <div className="lg:col-span-5">
            <p className="font-anyaa-body text-[10px] font-medium tracking-[0.34em] text-[#2E6F62] uppercase">
              Enquire about this piece
            </p>
            <h2
              id="anyaa-product-enquire-title"
              className="font-anyaa-display mt-4 text-[clamp(1.8rem,3.6vw,2.6rem)] leading-tight text-[#22332F]"
            >
              Ask about {product.name}.
            </h2>
            <p className="font-anyaa-body mt-4 max-w-md text-[14.5px] leading-relaxed text-[#6E7C77]">
              Pricing and availability for this piece are not confirmed. The
              form demonstrates an enquiry flow - it validates on screen and
              transmits nothing. The brand&apos;s only verified channel is{" "}
              <a
                href={anyaaContact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2E6F62] underline decoration-[#DFE7E2] underline-offset-4"
              >
                {anyaaContact.instagramHandle}
              </a>
              .
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <EnquiryForm />
          </div>
        </div>
      </section>

      <section
        aria-labelledby="anyaa-related-title"
        className="border-t border-[#DFE7E2] bg-white"
      >
        <div className="mx-auto max-w-[1360px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            index="More to explore"
            eyebrow="Similar pieces"
            title={<span id="anyaa-related-title">You may also like.</span>}
            action={
              <Link
                href={category.href}
                className="font-anyaa-body inline-flex items-center gap-2 rounded-full border border-[#2E6F62]/40 px-5 py-3 text-[11px] font-medium tracking-[0.2em] text-[#22332F] uppercase transition hover:border-[#2E6F62] hover:text-[#2E6F62]"
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
                  <ProductCard product={item} />
                </Reveal>
              </li>
            ))}
          </ul>

          <p className="font-anyaa-body mt-10 border-t border-[#DFE7E2] pt-5 text-[11px] leading-relaxed text-[#6E7C77]">
            {anyaaDemo.disclosure}
          </p>
        </div>
      </section>
    </>
  );
}
