"use client";

import { useState } from "react";
import { Heart, Minus, Plus, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { exotixDemo } from "../data";
import { EXOTIX_DATA_NOTE, formatExotixPrice, type ExotixProduct } from "../products";
import { useShop } from "./shop-provider";

/**
 * Product-detail purchase panel: verified size-run selector, quantity
 * stepper, add-to-bag and save controls with honest state labels. Sizes shown
 * are the runs published on the live listing; stock itself is unconfirmed.
 */
export function AddToBag({ product }: { product: ExotixProduct }) {
  const { addToCart, toggleWishlist, isWished } = useShop();
  const [size, setSize] = useState(product.sizes[0]);
  const [qty, setQty] = useState(1);
  const wished = isWished(product.slug);

  return (
    <div className="space-y-5 rounded-sm border border-[#232327] bg-[#101013] p-5">
      <div>
        <div className="flex items-baseline justify-between gap-3">
          <p className="font-exotix-mono text-[10px] tracking-[0.26em] text-[#8A8A92] uppercase">
            Size run {product.sizesVerified ? "· from live listing" : "· demo"}
          </p>
          <span className="font-exotix-mono text-[10px] tracking-[0.16em] text-[#E23B2E] uppercase">
            Stock unconfirmed
          </span>
        </div>
        <div className="mt-2.5 flex flex-wrap gap-2">
          {product.sizes.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setSize(option)}
              aria-pressed={size === option}
              aria-label={`Size ${option}`}
              className={cn(
                "font-exotix-mono min-w-12 rounded-sm border px-3.5 py-2 text-xs tracking-[0.1em] uppercase transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E23B2E]",
                size === option
                  ? "border-[#E23B2E] bg-[#E23B2E] text-[#F2EFEA]"
                  : "border-[#2A2A30] bg-[#0C0C0E] text-[#B9BDC4] hover:border-[#E23B2E]",
              )}
            >
              {option}
            </button>
          ))}
        </div>
        <p className="mt-2 text-[11px] leading-relaxed text-[#8A8A92]">
          {exotixDemo.sizeNotice}
        </p>
        {product.colors?.length ? (
          <p className="mt-2 text-[11px] leading-relaxed text-[#8A8A92]">
            Live listing colourways: {product.colors.join(", ")}.
          </p>
        ) : null}
      </div>

      <div className="flex items-center justify-between gap-4">
        <p className="font-exotix-mono text-[10px] tracking-[0.26em] text-[#8A8A92] uppercase">
          Quantity
        </p>
        <div className="inline-flex items-center rounded-sm border border-[#2A2A30]">
          <button
            type="button"
            onClick={() => setQty((current) => Math.max(1, current - 1))}
            aria-label="Decrease quantity"
            className="grid h-10 w-10 place-items-center text-[#B9BDC4] transition hover:bg-[#1A1A1E]"
          >
            <Minus aria-hidden className="h-4 w-4" />
          </button>
          <span className="w-7 text-center text-sm text-[#F2EFEA]" aria-live="polite">
            {qty}
          </span>
          <button
            type="button"
            onClick={() => setQty((current) => Math.min(9, current + 1))}
            aria-label="Increase quantity"
            className="grid h-10 w-10 place-items-center text-[#B9BDC4] transition hover:bg-[#1A1A1E]"
          >
            <Plus aria-hidden className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => addToCart(product, size, qty)}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-sm bg-[#E23B2E] px-6 py-4 text-xs font-medium tracking-[0.2em] text-[#F2EFEA] uppercase transition hover:bg-[#C7301F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E23B2E]"
        >
          <ShoppingBag aria-hidden className="h-4 w-4" />
          Add to bag
        </button>
        <button
          type="button"
          onClick={() => toggleWishlist(product)}
          aria-pressed={wished}
          aria-label={wished ? "Remove from saved list" : "Save for later"}
          className={cn(
            "grid h-[52px] w-[52px] shrink-0 place-items-center rounded-sm border transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E23B2E]",
            wished
              ? "border-[#E23B2E] bg-[#E23B2E]/15 text-[#E23B2E]"
              : "border-[#2A2A30] bg-[#0C0C0E] text-[#B9BDC4] hover:border-[#E23B2E]",
          )}
        >
          <Heart aria-hidden className="h-5 w-5" fill={wished ? "currentColor" : "none"} />
        </button>
      </div>

      <p className="border-t border-[#232327] pt-4 text-[11px] leading-relaxed text-[#8A8A92]">
        {exotixDemo.stockNotice} {EXOTIX_DATA_NOTE}{" "}
        {product.price !== null ? `Listed at ${formatExotixPrice(product.price)} when snapshotted. ` : ""}
        Adding an item only updates local demonstration state - no order,
        payment or inventory system is involved.
      </p>
    </div>
  );
}
