"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { formatPrice } from "../products";
import { CielImage } from "./ciel-image";
import { useCielStore } from "./store-provider";

export function CheckoutView() {
  const { cartDetail, subtotal, setQuantity, removeLine, clearCart, hydrated } =
    useCielStore();
  const [placed, setPlaced] = useState(false);

  if (!hydrated) {
    return (
      <div className="border border-white/10 px-6 py-16 text-center text-sm text-[#8A8F96]">
        Loading your bag…
      </div>
    );
  }

  if (cartDetail.length === 0) {
    return (
      <div className="border border-white/10 px-6 py-20 text-center">
        <ShoppingBag aria-hidden className="mx-auto h-8 w-8 text-[#8A8F96]" />
        <p className="font-ciel-display mt-5 text-2xl text-[#F4F1EC]">
          Your bag is empty.
        </p>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-[#8A8F96]">
          Browse the archive and add a piece to preview the shopping flow. The
          bag is saved in this browser only.
        </p>
        <Link
          href="/demos/ciel-shop/shop"
          className="mt-7 inline-flex items-center gap-2 bg-[#F4F1EC] px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0E0E10] transition-colors hover:bg-[#A9D6E5]"
        >
          Explore the collection
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1.4fr_0.9fr] lg:gap-14">
      <div>
        <ul className="divide-y divide-white/10 border-y border-white/10">
          {cartDetail.map(({ line, product, lineTotal }) => (
            <li
              key={`${line.slug}-${line.size}`}
              className="flex gap-4 py-5 sm:gap-5"
            >
              <Link
                href={`/demos/ciel-shop/products/${product.slug}`}
                className="relative h-32 w-24 shrink-0 overflow-hidden bg-[#17171A] sm:h-36 sm:w-28"
              >
                <CielImage
                  src={product.image}
                  alt={product.imageAlt}
                  sizes="112px"
                />
              </Link>

              <div className="flex flex-1 flex-col">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <Link
                      href={`/demos/ciel-shop/products/${product.slug}`}
                      className="text-sm text-[#F4F1EC] hover:text-[#A9D6E5]"
                    >
                      {product.name}
                    </Link>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[#8A8F96]">
                      Size {line.size} · demo size run
                    </p>
                  </div>
                  <span className="text-sm text-[#F4F1EC]">
                    {formatPrice(lineTotal)}
                  </span>
                </div>

                <div className="mt-auto flex items-center justify-between gap-3 pt-4">
                  <div className="flex items-center border border-white/20">
                    <button
                      type="button"
                      onClick={() =>
                        setQuantity(line.slug, line.size, line.quantity - 1)
                      }
                      aria-label={`Decrease quantity of ${product.name}`}
                      className="grid h-9 w-9 place-items-center text-[#F4F1EC] hover:text-[#A9D6E5]"
                    >
                      <Minus aria-hidden className="h-3.5 w-3.5" />
                    </button>
                    <span
                      className="w-7 text-center text-xs text-[#F4F1EC]"
                      aria-label={`Quantity ${line.quantity}`}
                    >
                      {line.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        setQuantity(line.slug, line.size, line.quantity + 1)
                      }
                      aria-label={`Increase quantity of ${product.name}`}
                      className="grid h-9 w-9 place-items-center text-[#F4F1EC] hover:text-[#A9D6E5]"
                    >
                      <Plus aria-hidden className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeLine(line.slug, line.size)}
                    className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.16em] text-[#8A8F96] transition-colors hover:text-[#E0A3A3]"
                  >
                    <Trash2 aria-hidden className="h-3.5 w-3.5" />
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/demos/ciel-shop/shop"
            className="text-[10px] uppercase tracking-[0.18em] text-[#8A8F96] hover:text-[#F4F1EC]"
          >
            Continue browsing
          </Link>
          <button
            type="button"
            onClick={() => {
              clearCart();
              setPlaced(false);
            }}
            className="text-[10px] uppercase tracking-[0.18em] text-[#8A8F96] hover:text-[#E0A3A3]"
          >
            Empty bag
          </button>
        </div>
      </div>

      <aside className="h-fit border border-white/10 bg-[#0B0B0D] p-5 sm:p-7">
        <p className="text-[10px] uppercase tracking-[0.24em] text-[#A9D6E5]">
          Bag summary
        </p>

        <dl className="mt-5 space-y-3 text-sm">
          <div className="flex items-center justify-between">
            <dt className="text-[#8A8F96]">Subtotal</dt>
            <dd className="text-[#F4F1EC]">{formatPrice(subtotal)}</dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="text-[#8A8F96]">Shipping</dt>
            <dd className="text-[#8A8F96]">Not calculated</dd>
          </div>
          <div className="flex items-center justify-between border-t border-white/10 pt-3">
            <dt className="text-[#F4F1EC]">Estimated total</dt>
            <dd className="text-lg text-[#F4F1EC]">{formatPrice(subtotal)}</dd>
          </div>
        </dl>

        <button
          type="button"
          onClick={() => setPlaced(true)}
          className="mt-6 w-full bg-[#F4F1EC] px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0E0E10] transition-colors hover:bg-[#A9D6E5] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A9D6E5]"
        >
          Preview checkout
        </button>

        <p className="mt-4 text-[11px] leading-relaxed text-[#8A8F96]">
          Demonstration only. No payment is collected, no order is placed and
          nothing is transmitted. Prices are historical reference values.
        </p>

        {placed ? (
          <div
            role="status"
            className="mt-5 flex gap-3 border border-[#A9D6E5]/40 bg-[#A9D6E5]/[0.06] p-4"
          >
            <Check aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-[#A9D6E5]" />
            <div>
              <p className="text-sm text-[#F4F1EC]">Checkout preview complete.</p>
              <p className="mt-1 text-xs leading-relaxed text-[#8A8F96]">
                This was a demonstration flow — no order was created and no
                payment details were requested. Contact the brand directly to
                confirm price and availability.
              </p>
            </div>
          </div>
        ) : null}
      </aside>
    </div>
  );
}
