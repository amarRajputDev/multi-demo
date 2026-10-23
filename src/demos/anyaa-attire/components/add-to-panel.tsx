"use client";

import { useState } from "react";
import { Heart, Minus, Plus, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { anyaaDemo } from "../data";
import { anyaaPriceLabel, type AnyaaProduct } from "../products";
import { useShop } from "./shop-provider";

/**
 * Product-detail action panel: demonstration size selector, quantity stepper,
 * add-to-bag and wishlist controls with honest state labels. Unpriced pieces
 * are added as "enquire for price" bag lines - never a fabricated amount.
 */
export function AddToPanel({ product }: { product: AnyaaProduct }) {
  const { addToCart, toggleWishlist, isWished } = useShop();
  const [size, setSize] = useState(product.sizes[0]);
  const [qty, setQty] = useState(1);
  const wished = isWished(product.slug);

  return (
    <div className="space-y-5 rounded-[3px] border border-[#DFE7E2] bg-white p-5">
      <div>
        <div className="flex items-baseline justify-between gap-3">
          <p className="font-anyaa-body text-[10px] tracking-[0.26em] text-[#6E7C77] uppercase">
            Select size
          </p>
          <span className="font-anyaa-body text-[10px] tracking-[0.16em] text-[#2E6F62] uppercase">
            Demo selector
          </span>
        </div>
        <div className="font-anyaa-body mt-2.5 flex flex-wrap gap-2">
          {product.sizes.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setSize(option)}
              aria-pressed={size === option}
              aria-label={`Size ${option}`}
              className={cn(
                "min-w-12 rounded-full border px-3.5 py-2 text-xs transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2E6F62]",
                size === option
                  ? "border-[#2E6F62] bg-[#2E6F62] text-[#FAF8F3]"
                  : "border-[#DFE7E2] bg-white text-[#22332F] hover:border-[#2E6F62]",
              )}
            >
              {option}
            </button>
          ))}
        </div>
        <p className="font-anyaa-body mt-2 text-[11px] leading-relaxed text-[#6E7C77]">
          {anyaaDemo.sizeNotice}
        </p>
      </div>

      <div className="flex items-center justify-between gap-4">
        <p className="font-anyaa-body text-[10px] tracking-[0.26em] text-[#6E7C77] uppercase">
          Quantity
        </p>
        <div className="font-anyaa-body inline-flex items-center rounded-full border border-[#DFE7E2] bg-white">
          <button
            type="button"
            onClick={() => setQty((current) => Math.max(1, current - 1))}
            aria-label="Decrease quantity"
            className="grid h-10 w-10 place-items-center rounded-full text-[#22332F] transition hover:bg-[#D3E5DF]/60"
          >
            <Minus aria-hidden className="h-4 w-4" />
          </button>
          <span className="w-7 text-center text-sm text-[#22332F]" aria-live="polite">
            {qty}
          </span>
          <button
            type="button"
            onClick={() => setQty((current) => Math.min(9, current + 1))}
            aria-label="Increase quantity"
            className="grid h-10 w-10 place-items-center rounded-full text-[#22332F] transition hover:bg-[#D3E5DF]/60"
          >
            <Plus aria-hidden className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => addToCart(product, size, qty)}
          className="font-anyaa-body inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#2E6F62] px-6 py-4 text-xs font-medium tracking-[0.2em] text-[#FAF8F3] uppercase transition hover:bg-[#22332F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22332F]"
        >
          <ShoppingBag aria-hidden className="h-4 w-4" />
          {product.price === null ? "Add to bag (enquire)" : "Add to bag"}
        </button>
        <button
          type="button"
          onClick={() => toggleWishlist(product)}
          aria-pressed={wished}
          aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
          className={cn(
            "grid h-[52px] w-[52px] shrink-0 place-items-center rounded-full border transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2E6F62]",
            wished
              ? "border-[#2E6F62] bg-[#D3E5DF] text-[#2E6F62]"
              : "border-[#DFE7E2] bg-white text-[#22332F] hover:border-[#2E6F62]",
          )}
        >
          <Heart
            aria-hidden
            className="h-5 w-5"
            fill={wished ? "currentColor" : "none"}
          />
        </button>
      </div>

      <p className="font-anyaa-body border-t border-[#DFE7E2] pt-4 text-[11px] leading-relaxed text-[#6E7C77]">
        Current price: {anyaaPriceLabel(product)}. {anyaaDemo.stockNotice}{" "}
        Adding a piece only updates local demonstration state - no order,
        payment or inventory system is involved.
      </p>
    </div>
  );
}
