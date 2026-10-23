"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Minus, Plus, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { khaleeziBrand } from "../data";
import {
  KHALEEZI_DATA_NOTE,
  khaleeziRelated,
  type KhaleeziProduct,
} from "../products";
import { PendingArtwork } from "./brand";
import { useEnquiry, WishlistButton } from "./enquiry-provider";
import { KhaleeziCard } from "./product-card";

export function KhaleeziProductDetail({ product }: { product: KhaleeziProduct }) {
  const { add } = useEnquiry();
  const [size, setSize] = useState(product.sizes[2] ?? product.sizes[0] ?? "M");
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const related = khaleeziRelated(product);

  return (
    <div className="mx-auto max-w-[1320px] px-4 pb-20 pt-8 sm:px-6">
      <Link
        href={`${khaleeziBrand.homeHref}/collections`}
        className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-[#7A6E67] transition-colors hover:text-[#2A2320]"
      >
        <ArrowLeft aria-hidden className="h-3.5 w-3.5" />
        All pieces
      </Link>

      <div className="mt-6 grid gap-9 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div>
          <div className="relative aspect-[4/5] overflow-hidden border border-[#E4DCD0]">
            <PendingArtwork tone={product.tone} label={product.name} />
            <div className="absolute right-3 top-3">
              <WishlistButton slug={product.slug} name={product.name} />
            </div>
            <span className="absolute bottom-0 left-0 bg-[#FBF8F2]/95 px-3 py-1.5 text-[9px] uppercase tracking-[0.16em] text-[#2F6D72]">
              Artwork pending
            </span>
          </div>
          <p className="mt-3 text-[11px] leading-relaxed text-[#7A6E67]">
            No authentic photograph of this piece could be verified. The tile is a
            replaceable placeholder — swapping in real brand imagery later is a
            data change only.
          </p>
        </div>

        <div className="lg:pt-2">
          <p className="khaleezi-eyebrow text-[9px] text-[#2F6D72]">
            {product.category.replace("-", " ")}
          </p>
          <h1 className="font-khaleezi-display mt-3 text-[clamp(1.9rem,4vw,2.9rem)] leading-tight text-[#2A2320]">
            {product.name}
          </h1>
          <p className="mt-3 text-lg text-[#2F6D72]">Enquire for price</p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[#7A6E67]">
            No public price · shared by the label
          </p>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-[#7A6E67]">
            {product.description}
          </p>

          <fieldset className="mt-7">
            <legend className="khaleezi-eyebrow text-[9px] text-[#7A6E67]">
              Size · small to 7XL
            </legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.sizes.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setSize(option)}
                  aria-pressed={size === option}
                  className={cn(
                    "min-w-9 border px-2.5 py-1.5 text-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F6D72]",
                    size === option
                      ? "border-[#2F6D72] bg-[#2F6D72] text-[#FBF8F2]"
                      : "border-[#2A2320]/20 text-[#2A2320]/80 hover:border-[#2F6D72]",
                  )}
                >
                  {option}
                </button>
              ))}
            </div>
            <p className="mt-2 text-[10px] text-[#7A6E67]">
              Size run follows the label&rsquo;s publicly stated range — confirm the
              chart before ordering.
            </p>
          </fieldset>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div className="flex items-center border border-[#2A2320]/20">
              <button
                type="button"
                onClick={() => setQty((value) => Math.max(1, value - 1))}
                aria-label="Decrease quantity"
                className="grid h-10 w-10 place-items-center text-[#2A2320] hover:text-[#2F6D72]"
              >
                <Minus aria-hidden className="h-3.5 w-3.5" />
              </button>
              <span className="w-7 text-center text-sm" aria-label={`Quantity ${qty}`}>
                {qty}
              </span>
              <button
                type="button"
                onClick={() => setQty((value) => Math.min(20, value + 1))}
                aria-label="Increase quantity"
                className="grid h-10 w-10 place-items-center text-[#2A2320] hover:text-[#2F6D72]"
              >
                <Plus aria-hidden className="h-3.5 w-3.5" />
              </button>
            </div>
            <button
              type="button"
              onClick={() => {
                add(product, size, qty);
                setAdded(true);
              }}
              className="inline-flex flex-1 items-center justify-center gap-2 bg-[#2F6D72] px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FBF8F2] transition-colors hover:bg-[#255A5E] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2F6D72]"
            >
              <ShoppingBag aria-hidden className="h-4 w-4" />
              Add to enquiry
            </button>
          </div>

          {added ? (
            <p className="mt-3 text-[11px] text-[#2F6D72]" role="status">
              Added to your enquiry list · size {size} × {qty}
            </p>
          ) : null}

          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-[#E4DCD0] pt-6 text-sm">
            <div>
              <dt className="khaleezi-eyebrow text-[9px] text-[#7A6E67]">Fabric</dt>
              <dd className="mt-1 text-[#2A2320]">
                {product.fabric ?? "Not published"}
              </dd>
            </div>
            <div>
              <dt className="khaleezi-eyebrow text-[9px] text-[#7A6E67]">Sizes</dt>
              <dd className="mt-1 text-[#2A2320]">S – 7XL</dd>
            </div>
            <div>
              <dt className="khaleezi-eyebrow text-[9px] text-[#7A6E67]">Ordering</dt>
              <dd className="mt-1 text-[#2A2320]">WhatsApp enquiry</dd>
            </div>
            <div>
              <dt className="khaleezi-eyebrow text-[9px] text-[#7A6E67]">Delivery</dt>
              <dd className="mt-1 text-[#2A2320]">Confirm with label</dd>
            </div>
          </dl>

          <p className="mt-6 text-[11px] leading-relaxed text-[#7A6E67]">
            {KHALEEZI_DATA_NOTE}
          </p>
        </div>
      </div>

      <section className="mt-16 border-t border-[#E4DCD0] pt-10">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-khaleezi-display text-2xl text-[#2A2320]">
            More from the label
          </h2>
          <Link
            href={`${khaleeziBrand.homeHref}/collections`}
            className="text-[10px] uppercase tracking-[0.16em] text-[#7A6E67] hover:text-[#2A2320]"
          >
            Shop all
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-9 sm:gap-x-6 lg:grid-cols-3">
          {related.map((item) => (
            <KhaleeziCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
