"use client";

import Link from "next/link";
import { useState } from "react";
import { Heart, MessageCircle, Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { getSakshiCategoryMeta, sakshiContact, sakshiHomeHref } from "../data";
import {
  SAKSHI_DATA_NOTE,
  SAKSHI_PRICE_NOTE,
  sakshiProducts,
  type SakshiProduct,
} from "../products";
import { EnquiryForm } from "../components/enquiry-form";
import { InstagramGlyph, OrnamentDivider, PetalMotif } from "../components/icons";
import { ProductCard } from "../components/product-card";
import { SakshiImage } from "../components/sakshi-image";
import { useShop } from "../components/shop-provider";

/** Rotates the placeholder tone token for secondary gallery frames. */
function altTone(product: SakshiProduct, offset: number): 1 | 2 | 3 | 4 | 5 {
  return ((((product.tone - 1 + offset) % 5) + 1) as 1 | 2 | 3 | 4 | 5);
}

/** Product detail: placeholder gallery, demo sizes, enquiry CTA and form. */
export default function ProductPage({ product }: { product: SakshiProduct }) {
  const { addToList, isWished, toggleWishlist, showToast } = useShop();
  const [size, setSize] = useState(product.sizes[2] ?? product.sizes[0] ?? "M");
  const [qty, setQty] = useState(1);
  const wished = isWished(product.slug);
  const category = getSakshiCategoryMeta(product.category);

  const related = sakshiProducts
    .filter(
      (entry) => entry.slug !== product.slug && entry.category === product.category,
    )
    .slice(0, 3);
  const moreFromCatalogue = related.length
    ? related
    : sakshiProducts.filter((entry) => entry.slug !== product.slug).slice(0, 3);

  const defaultMessage = `Hi! I'd like to enquire about “${product.name}” (size ${size}, qty ${qty}). Is it currently available? Please share price, fabric details and sizing.`;

  return (
    <>
      <div className="mx-auto max-w-[1320px] px-4 pt-8 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="text-[11px] tracking-[0.16em] text-[#7A6461] uppercase">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href={`${sakshiHomeHref}/collections`} className="transition hover:text-[#8E3B47]">
                Collections
              </Link>
            </li>
            <li aria-hidden>&rsaquo;</li>
            <li>
              <Link href={category.href} className="transition hover:text-[#8E3B47]">
                {category.label}
              </Link>
            </li>
            <li aria-hidden>&rsaquo;</li>
            <li className="text-[#3B1F24]">{product.name}</li>
          </ol>
        </nav>
      </div>

      <article className="mx-auto grid max-w-[1320px] gap-10 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-14">
        {/* Gallery */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-[2rem] border border-[#E9DDD4] bg-white/70 p-3">
            <SakshiImage
              src={product.image}
              alt={product.imageAlt}
              tone={product.tone}
              aspectClassName="aspect-[4/5]"
              caption={`${product.name} · photography placeholder`}
            />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <SakshiImage
              src={null}
              alt={`Alternate detail placeholder for ${product.name}`}
              tone={altTone(product, 1)}
              aspectClassName="aspect-square"
              compact
              className="rounded-xl border border-[#E9DDD4]"
            />
            <SakshiImage
              src={null}
              alt={`Fabric detail placeholder for ${product.name}`}
              tone={altTone(product, 2)}
              aspectClassName="aspect-square"
              compact
              className="rounded-xl border border-[#E9DDD4]"
            />
          </div>
        </div>

        {/* Detail */}
        <div>
          <p className="sakshi-eyebrow inline-flex items-center gap-2 text-[10px] font-semibold text-[#8E3B47]">
            <PetalMotif className="h-3 w-3" />
            {category.label} · demonstration entry
          </p>
          <h1 className="font-sakshi-display mt-3 text-[clamp(2rem,4.5vw,3rem)] leading-tight text-[#3B1F24]">
            {product.name}
          </h1>

          <p className="mt-4 text-[13px] font-semibold tracking-[0.18em] text-[#8E3B47] uppercase">
            Enquire for price
          </p>
          <p className="mt-2 max-w-lg text-sm leading-relaxed text-[#7A6461]">
            {SAKSHI_PRICE_NOTE}
          </p>

          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-[#5C4644]">
            {product.description}
          </p>

          <OrnamentDivider className="mt-8 justify-start" />

          {/* Sizes — demonstration run */}
          <fieldset className="mt-8">
            <legend className="text-[11px] font-semibold tracking-[0.2em] text-[#3B1F24] uppercase">
              Size{" "}
              <span className="font-normal tracking-[0.1em] text-[#7A6461]">
                (demonstration size run — not a verified size chart)
              </span>
            </legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.sizes.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setSize(option)}
                  aria-pressed={size === option}
                  className={cn(
                    "grid min-w-12 place-items-center rounded-full border px-4 py-2.5 text-[12px] font-semibold tracking-[0.1em] uppercase transition",
                    size === option
                      ? "border-[#8E3B47] bg-[#8E3B47] text-[#FBF6EF]"
                      : "border-[#D8C3BB] bg-white text-[#3B1F24] hover:border-[#8E3B47] hover:text-[#8E3B47]",
                  )}
                >
                  {option}
                </button>
              ))}
            </div>
          </fieldset>

          {/* Qty + actions */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center rounded-full border border-[#D8C3BB] bg-white">
              <button
                type="button"
                onClick={() => setQty((current) => Math.max(1, current - 1))}
                aria-label="Decrease quantity"
                className="grid h-11 w-11 place-items-center rounded-l-full text-[#3B1F24] transition hover:bg-[#EFD9D5]"
              >
                <Minus aria-hidden className="h-4 w-4" />
              </button>
              <span className="w-8 text-center text-sm text-[#3B1F24]" aria-live="polite">
                {qty}
              </span>
              <button
                type="button"
                onClick={() => setQty((current) => Math.min(99, current + 1))}
                aria-label="Increase quantity"
                className="grid h-11 w-11 place-items-center rounded-r-full text-[#3B1F24] transition hover:bg-[#EFD9D5]"
              >
                <Plus aria-hidden className="h-4 w-4" />
              </button>
            </div>

            <button
              type="button"
              onClick={() => addToList(product, size, qty)}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#8E3B47] px-8 py-4 text-[12px] font-semibold tracking-[0.18em] text-[#FBF6EF] uppercase transition hover:bg-[#7A3140] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B1F24]"
            >
              <MessageCircle aria-hidden className="h-4 w-4" />
              Add to enquiry list
            </button>

            <button
              type="button"
              onClick={() => toggleWishlist(product)}
              aria-pressed={wished}
              aria-label={
                wished ? "Remove from wishlist" : "Save to wishlist"
              }
              className={cn(
                "grid h-[3.25rem] w-[3.25rem] place-items-center rounded-full border transition",
                wished
                  ? "border-[#8E3B47] bg-[#EFD9D5] text-[#8E3B47]"
                  : "border-[#D8C3BB] bg-white text-[#3B1F24] hover:border-[#8E3B47]",
              )}
            >
              <Heart aria-hidden className={cn("h-5 w-5", wished && "fill-current")} />
            </button>
          </div>

          <button
            type="button"
            onClick={() => showToast("Opening your enquiry list — send it on Instagram")}
            className="mt-3 text-[11px] tracking-[0.16em] text-[#7A6461] uppercase underline underline-offset-4 transition hover:text-[#8E3B47]"
          >
            Nothing is charged here — ordering happens by Instagram DM
          </button>

          {/* Details / policy notes */}
          <div className="mt-10 grid gap-4">
            <details className="group rounded-2xl border border-[#E9DDD4] bg-white/70 open:bg-white">
              <summary className="cursor-pointer list-none px-5 py-4 text-[11px] font-semibold tracking-[0.2em] text-[#3B1F24] uppercase">
                Details
                <span className="float-right text-[#8E3B47] transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <ul className="space-y-2 px-5 pb-5 text-sm leading-relaxed text-[#7A6461]">
                {product.details.map((detail) => (
                  <li key={detail} className="flex gap-2">
                    <PetalMotif aria-hidden className="mt-1 h-3 w-3 shrink-0 text-[#8E3B47]" />
                    {detail}
                  </li>
                ))}
                <li className="flex gap-2">
                  <PetalMotif aria-hidden className="mt-1 h-3 w-3 shrink-0 text-[#8E3B47]" />
                  Verification: {product.detailsVerification} — confirm fabric,
                  fit and measurements with the seller.
                </li>
              </ul>
            </details>

            <details className="group rounded-2xl border border-[#E9DDD4] bg-white/70 open:bg-white">
              <summary className="cursor-pointer list-none px-5 py-4 text-[11px] font-semibold tracking-[0.2em] text-[#3B1F24] uppercase">
                Delivery &amp; returns
                <span className="float-right text-[#8E3B47] transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="space-y-3 px-5 pb-5 text-sm leading-relaxed text-[#7A6461]">
                <p>
                  <span className="font-semibold tracking-[0.1em] text-[#3B1F24] uppercase">
                    Unverified third-party note:
                  </span>{" "}
                  a listing site reports that the seller offers all-India
                  delivery and a seven-day return/exchange policy. These are
                  not guarantees published by the brand and require
                  confirmation before ordering.
                </p>
                <p>{SAKSHI_DATA_NOTE}</p>
              </div>
            </details>

            <details className="group rounded-2xl border border-[#E9DDD4] bg-white/70 open:bg-white">
              <summary className="cursor-pointer list-none px-5 py-4 text-[11px] font-semibold tracking-[0.2em] text-[#3B1F24] uppercase">
                How to order
                <span className="float-right text-[#8E3B47] transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="space-y-3 px-5 pb-5 text-sm leading-relaxed text-[#7A6461]">
                <p>
                  Add this piece to your enquiry list, then send the list on
                  Instagram DM. Confirm price, size availability and delivery
                  directly with the seller.
                </p>
                <a
                  href={sakshiContact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#8E3B47] px-5 py-2.5 text-[11px] font-semibold tracking-[0.16em] text-[#8E3B47] uppercase transition hover:bg-[#8E3B47] hover:text-[#FBF6EF]"
                >
                  <InstagramGlyph className="h-4 w-4" />
                  {sakshiContact.instagramHandle}
                </a>
              </div>
            </details>
          </div>

          {/* Enquiry form */}
          <div className="sakshi-panel mt-10 rounded-[1.75rem] border p-6 sm:p-8">
            <h2 className="font-sakshi-display text-2xl text-[#3B1F24]">
              Enquire about this piece
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[#7A6461]">
              Demo form — validated in your browser only. Submitting prepares
              an Instagram DM; nothing is stored or sent.
            </p>
            <div className="mt-5">
              <EnquiryForm defaultMessage={defaultMessage} />
            </div>
          </div>
        </div>
      </article>

      {/* Related */}
      <section
        aria-labelledby="kbs-related-heading"
        className="border-t border-[#E9DDD4] bg-[#F6EEE6]/70"
      >
        <div className="mx-auto max-w-[1320px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <h2
            id="kbs-related-heading"
            className="font-sakshi-display text-center text-[clamp(1.8rem,3.5vw,2.5rem)] text-[#3B1F24]"
          >
            You may also like
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {moreFromCatalogue.map((entry) => (
              <ProductCard key={entry.slug} product={entry} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
