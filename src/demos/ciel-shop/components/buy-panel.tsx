"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Check, Heart, Minus, Plus, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { CIEL_DEMO_SIZES, type CielProduct } from "../products";
import { useCielStore } from "./store-provider";

export function BuyPanel({ product }: { product: CielProduct }) {
  const { addToCart, toggleWishlist, isWishlisted } = useCielStore();
  const [size, setSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const wishlisted = isWishlisted(product.slug);

  useEffect(() => {
    if (!added) return;
    const timer = window.setTimeout(() => setAdded(false), 3200);
    return () => window.clearTimeout(timer);
  }, [added]);

  return (
    <div>
      <fieldset className="mt-7">
        <div className="flex items-center justify-between">
          <legend className="text-[10px] uppercase tracking-[0.2em] text-[#8A8F96]">
            Size · demo selector
          </legend>
          <span className="text-[10px] text-[#8A8F96]/70">availability unconfirmed</span>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {CIEL_DEMO_SIZES.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setSize(option)}
              aria-pressed={size === option}
              className={cn(
                "min-w-11 border px-3 py-2 text-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A9D6E5]",
                size === option
                  ? "border-[#A9D6E5] bg-[#A9D6E5] text-[#0E0E10]"
                  : "border-white/20 text-[#F4F1EC]/75 hover:border-white/40",
              )}
            >
              {option}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="mt-6 flex items-center gap-4">
        <div className="flex items-center border border-white/20">
          <button
            type="button"
            onClick={() => setQuantity((value) => Math.max(1, value - 1))}
            aria-label="Decrease quantity"
            className="grid h-10 w-10 place-items-center text-[#F4F1EC] hover:text-[#A9D6E5]"
          >
            <Minus aria-hidden className="h-3.5 w-3.5" />
          </button>
          <span
            aria-live="polite"
            className="w-8 text-center text-sm text-[#F4F1EC]"
            aria-label={`Quantity ${quantity}`}
          >
            {quantity}
          </span>
          <button
            type="button"
            onClick={() => setQuantity((value) => Math.min(9, value + 1))}
            aria-label="Increase quantity"
            className="grid h-10 w-10 place-items-center text-[#F4F1EC] hover:text-[#A9D6E5]"
          >
            <Plus aria-hidden className="h-3.5 w-3.5" />
          </button>
        </div>

        <button
          type="button"
          onClick={() => {
            addToCart(product.slug, size, quantity);
            setAdded(true);
          }}
          className="flex flex-1 items-center justify-center gap-2 bg-[#F4F1EC] px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0E0E10] transition-colors hover:bg-[#A9D6E5] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A9D6E5]"
        >
          <ShoppingBag aria-hidden className="h-4 w-4" />
          Add to bag
        </button>

        <button
          type="button"
          onClick={() => toggleWishlist(product.slug)}
          aria-pressed={wishlisted}
          aria-label={wishlisted ? "Remove from wishlist" : "Save to wishlist"}
          className={cn(
            "grid h-12 w-12 shrink-0 place-items-center border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A9D6E5]",
            wishlisted
              ? "border-[#A9D6E5] text-[#A9D6E5]"
              : "border-white/20 text-[#F4F1EC]/80 hover:border-[#A9D6E5] hover:text-[#A9D6E5]",
          )}
        >
          <Heart aria-hidden className={cn("h-4 w-4", wishlisted && "fill-current")} />
        </button>
      </div>

      <div className="mt-4 min-h-6" aria-live="polite">
        {added ? (
          <p className="flex items-center gap-2 text-[11px] text-[#A9D6E5]">
            <Check aria-hidden className="h-3.5 w-3.5" />
            Added · size {size} × {quantity}.{" "}
            <Link href="/demos/ciel-shop/checkout" className="underline">
              Review your bag
            </Link>
          </p>
        ) : null}
      </div>

      <p className="mt-2 text-[11px] leading-relaxed text-[#8A8F96]">
        Sizes shown are demonstration options. No live inventory, fit or material
        data is claimed — confirm with the brand before ordering.
      </p>
    </div>
  );
}
