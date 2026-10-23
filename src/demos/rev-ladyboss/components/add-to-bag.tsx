"use client";

import { useState } from "react";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import { REV_DATA_NOTE, formatRevPrice, type RevProduct } from "../products";
import { useShop } from "./shop-provider";

/** Size + quantity selector with enquiry-aware add-to-bag CTA. */
export function AddToBag({ product }: { product: RevProduct }) {
  const { addToCart } = useShop();
  const [size, setSize] = useState<string | null>(
    product.sizes.length > 0 ? product.sizes[0] : null,
  );
  const [qty, setQty] = useState(1);
  const [error, setError] = useState<string | null>(null);

  return (
    <div>
      <fieldset>
        <legend className="text-[10px] tracking-[0.26em] text-[#7C7073] uppercase">
          Select size
        </legend>
        <div className="mt-2.5 flex flex-wrap gap-2">
          {product.sizes.map((option) => {
            const active = size === option;
            return (
              <button
                key={option}
                type="button"
                onClick={() => {
                  setSize(option);
                  setError(null);
                }}
                aria-pressed={active}
                className={`min-w-12 rounded-[2px] border px-3.5 py-2.5 text-[12px] font-semibold tracking-[0.12em] uppercase transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B4707F] ${
                  active
                    ? "border-[#1A1618] bg-[#1A1618] text-[#FAF4F3]"
                    : "border-[#E8D9DC] bg-white text-[#1A1618] hover:border-[#B4707F]"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-5 flex flex-wrap items-center gap-4">
        <div className="inline-flex items-center rounded-[2px] border border-[#E8D9DC] bg-white">
          <button
            type="button"
            aria-label="Decrease quantity"
            onClick={() => setQty((current) => Math.max(1, current - 1))}
            className="grid h-11 w-11 place-items-center text-[#1A1618] transition hover:bg-[#F3DCE1]"
          >
            <Minus aria-hidden className="h-3.5 w-3.5" />
          </button>
          <span className="min-w-8 text-center text-sm text-[#1A1618]">
            {qty}
          </span>
          <button
            type="button"
            aria-label="Increase quantity"
            onClick={() => setQty((current) => Math.min(9, current + 1))}
            className="grid h-11 w-11 place-items-center text-[#1A1618] transition hover:bg-[#F3DCE1]"
          >
            <Plus aria-hidden className="h-3.5 w-3.5" />
          </button>
        </div>

        <p className="font-rev-heading text-lg text-[#B4707F]">
          {formatRevPrice(product.price)}
        </p>
      </div>

      <button
        type="button"
        onClick={() => {
          if (!size) {
            setError("Please choose a size first.");
            return;
          }
          addToCart(product, size, qty);
        }}
        className="mt-5 inline-flex w-full items-center justify-center gap-2.5 rounded-[2px] bg-[#1A1618] px-8 py-4 text-[12px] font-semibold tracking-[0.24em] text-[#FAF4F3] uppercase transition hover:bg-[#B4707F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B4707F] sm:w-auto"
      >
        <ShoppingBag aria-hidden className="h-4 w-4" />
        Add to bag
      </button>

      {error ? (
        <p role="alert" className="mt-3 text-[12px] text-[#B4707F]">
          {error}
        </p>
      ) : null}

      <p className="mt-4 text-[11px] leading-relaxed text-[#7C7073]">
        {REV_DATA_NOTE}
      </p>
    </div>
  );
}
