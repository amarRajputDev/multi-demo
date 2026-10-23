"use client";

import { useState } from "react";
import { Heart, Minus, Plus, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { syDemo } from "../data";
import { type SyProduct } from "../products";
import { useShop } from "./shop-provider";

/**
 * Product-detail purchase panel: demonstration size selector, quantity
 * stepper, add-to-bag and wishlist controls with honest state labels.
 */
export function AddToBag({ product }: { product: SyProduct }) {
  const { addToCart, toggleWishlist, isWished } = useShop();
  const [size, setSize] = useState(product.sizes[0]);
  const [qty, setQty] = useState(1);
  const wished = isWished(product.slug);

  return (
    <div className="space-y-5 rounded-[3px] border border-[#EADFDB] bg-white p-5">
      <div>
        <div className="flex items-baseline justify-between gap-3">
          <p className="text-[10px] tracking-[0.26em] text-[#7A6A71] uppercase">
            Select size
          </p>
          <span className="text-[10px] tracking-[0.16em] text-[#A63D57] uppercase">
            Demo selector
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
                "min-w-12 rounded-full border px-3.5 py-2 text-xs transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A63D57]",
                size === option
                  ? "border-[#2C1F26] bg-[#2C1F26] text-[#FBF6F2]"
                  : "border-[#E4D8D3] bg-white text-[#4B2C3B] hover:border-[#A63D57]",
              )}
            >
              {option}
            </button>
          ))}
        </div>
        <p className="mt-2 text-[11px] leading-relaxed text-[#7A6A71]">
          {syDemo.sizeNotice}
        </p>
      </div>

      <div className="flex items-center justify-between gap-4">
        <p className="text-[10px] tracking-[0.26em] text-[#7A6A71] uppercase">
          Quantity
        </p>
        <div className="inline-flex items-center rounded-full border border-[#E4D8D3] bg-white">
          <button
            type="button"
            onClick={() => setQty((current) => Math.max(1, current - 1))}
            aria-label="Decrease quantity"
            className="grid h-10 w-10 place-items-center rounded-full text-[#4B2C3B] transition hover:bg-[#F6EEEA]"
          >
            <Minus aria-hidden className="h-4 w-4" />
          </button>
          <span className="w-7 text-center text-sm text-[#2C1F26]" aria-live="polite">
            {qty}
          </span>
          <button
            type="button"
            onClick={() => setQty((current) => Math.min(9, current + 1))}
            aria-label="Increase quantity"
            className="grid h-10 w-10 place-items-center rounded-full text-[#4B2C3B] transition hover:bg-[#F6EEEA]"
          >
            <Plus aria-hidden className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => addToCart(product, size, qty)}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#2C1F26] px-6 py-4 text-xs font-medium tracking-[0.2em] text-[#FBF6F2] uppercase transition hover:bg-[#4B2C3B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A63D57]"
        >
          <ShoppingBag aria-hidden className="h-4 w-4" />
          Add to bag
        </button>
        <button
          type="button"
          onClick={() => toggleWishlist(product)}
          aria-pressed={wished}
          aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
          className={cn(
            "grid h-[52px] w-[52px] shrink-0 place-items-center rounded-full border transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A63D57]",
            wished
              ? "border-[#A63D57] bg-[#FBEFF1] text-[#A63D57]"
              : "border-[#E4D8D3] bg-white text-[#4B2C3B] hover:border-[#A63D57]",
          )}
        >
          <Heart
            aria-hidden
            className="h-5 w-5"
            fill={wished ? "currentColor" : "none"}
          />
        </button>
      </div>

      <p className="border-t border-[#EFE5E1] pt-4 text-[11px] leading-relaxed text-[#7A6A71]">
        {syDemo.stockNotice} Adding an item only updates local demonstration
        state - no order, payment or inventory system is involved.
      </p>
    </div>
  );
}
