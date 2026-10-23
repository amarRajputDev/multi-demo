"use client";

import Link from "next/link";
import { useState } from "react";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { syContact, syDemo, syHomeHref } from "../data";
import { formatSyPrice } from "../products";
import { Drawer } from "./drawer";
import { SyImage } from "./sy-image";
import { useShop } from "./shop-provider";

/**
 * Demonstration shopping bag: quantity edits, removals, subtotal and a
 * checkout action that only ever reveals a demo notice (no real order).
 */
export function CartDrawer() {
  const {
    cart,
    cartCount,
    subtotal,
    cartOpen,
    closeCart,
    setQty,
    removeLine,
  } = useShop();
  const [noticeOpen, setNoticeOpen] = useState(false);

  return (
    <Drawer
      open={cartOpen}
      onClose={() => {
        setNoticeOpen(false);
        closeCart();
      }}
      lockKey="sy-cart"
      title="Shopping bag"
      subtitle={`${cartCount} ${cartCount === 1 ? "item" : "items"} - demonstration only`}
      footer={
        noticeOpen ? (
          <div className="space-y-3">
            <p className="font-sy-display text-base text-[#2C1F26]">
              {syDemo.checkoutNoticeTitle}
            </p>
            <p className="text-[13px] leading-relaxed text-[#6B5A61]">
              {syDemo.checkoutNotice}
            </p>
            <button
              type="button"
              onClick={() => setNoticeOpen(false)}
              className="w-full rounded-full border border-[#DCCFC9] px-5 py-2.5 text-xs font-medium tracking-[0.18em] text-[#4B2C3B] uppercase transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A63D57]"
            >
              Back to bag
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="flex items-baseline justify-between">
              <span className="text-xs tracking-[0.2em] text-[#7A6A71] uppercase">
                Subtotal
              </span>
              <span className="font-sy-display text-xl text-[#2C1F26]">
                {formatSyPrice(subtotal)}
              </span>
            </div>
            <p className="text-[11px] leading-relaxed text-[#7A6A71]">
              Prices are demonstration data and may differ from the live store.
              Shipping, taxes and availability are not calculated here.
            </p>
            <button
              type="button"
              onClick={() => setNoticeOpen(true)}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#2C1F26] px-5 py-3 text-xs font-medium tracking-[0.2em] text-[#FBF6F2] uppercase transition hover:bg-[#4B2C3B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A63D57]"
            >
              Proceed to checkout
            </button>
          </div>
        )
      }
    >
      {cart.length === 0 ? (
        <div className="flex h-full flex-col items-center justify-center gap-4 px-8 py-16 text-center">
          <span className="grid h-14 w-14 place-items-center rounded-full bg-[#F6EEEA] text-[#A63D57]">
            <ShoppingBag aria-hidden className="h-6 w-6" />
          </span>
          <p className="font-sy-display text-lg text-[#2C1F26]">
            Your bag is empty
          </p>
          <p className="max-w-xs text-sm leading-relaxed text-[#7A6A71]">
            Add a piece from the collection to see the demo bag in action.
          </p>
          <Link
            href={`${syHomeHref}/collections`}
            onClick={closeCart}
            className="rounded-full bg-[#A63D57] px-6 py-3 text-xs font-medium tracking-[0.2em] text-white uppercase transition hover:bg-[#8E3148]"
          >
            Shop the collection
          </Link>
        </div>
      ) : (
        <ul className="divide-y divide-[#EFE5E1]">
          {cart.map((line) => (
            <li key={line.key} className="flex gap-4 px-5 py-4 sm:px-6">
              <Link
                href={`${syHomeHref}/products/${line.slug}`}
                onClick={closeCart}
                className="block w-16 shrink-0 sm:w-20"
                aria-label={`View ${line.name}`}
              >
                <SyImage
                  src={line.image}
                  alt={line.imageAlt}
                  aspectClassName="aspect-[4/5]"
                  imgClassName="transition-transform duration-500 hover:scale-105"
                />
              </Link>

              <div className="flex min-w-0 flex-1 flex-col">
                <div className="flex items-start justify-between gap-3">
                  <Link
                    href={`${syHomeHref}/products/${line.slug}`}
                    onClick={closeCart}
                    className="font-sy-display text-[15px] leading-snug text-[#2C1F26] hover:text-[#A63D57]"
                  >
                    {line.name}
                  </Link>
                  <button
                    type="button"
                    onClick={() => removeLine(line.key)}
                    aria-label={`Remove ${line.name} from bag`}
                    className="shrink-0 rounded-full p-1.5 text-[#9A8A90] transition hover:bg-[#F6EEEA] hover:text-[#A63D57]"
                  >
                    <Trash2 aria-hidden className="h-4 w-4" />
                  </button>
                </div>

                <p className="mt-1 text-[11px] tracking-[0.16em] text-[#7A6A71] uppercase">
                  Size {line.size} - demo
                </p>

                <div className="mt-auto flex items-center justify-between gap-3 pt-3">
                  <div className="inline-flex items-center rounded-full border border-[#E4D8D3] bg-white">
                    <button
                      type="button"
                      onClick={() => setQty(line.key, line.qty - 1)}
                      aria-label={`Decrease quantity of ${line.name}`}
                      className="grid h-8 w-8 place-items-center rounded-full text-[#4B2C3B] transition hover:bg-[#F6EEEA]"
                    >
                      <Minus aria-hidden className="h-3.5 w-3.5" />
                    </button>
                    <span
                      className="w-6 text-center text-sm text-[#2C1F26]"
                      aria-live="polite"
                    >
                      {line.qty}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQty(line.key, line.qty + 1)}
                      aria-label={`Increase quantity of ${line.name}`}
                      className="grid h-8 w-8 place-items-center rounded-full text-[#4B2C3B] transition hover:bg-[#F6EEEA]"
                    >
                      <Plus aria-hidden className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  <span className="font-sy-display text-[15px] text-[#2C1F26]">
                    {formatSyPrice(line.price * line.qty)}
                  </span>
                </div>
              </div>
            </li>
          ))}
          <li className="px-5 py-4 sm:px-6">
            <a
              href={syContact.contactPage}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] tracking-[0.14em] text-[#7A6A71] uppercase underline decoration-[#DCCFC9] underline-offset-4 transition hover:text-[#A63D57]"
            >
              Questions? Open the brand&apos;s contact page
            </a>
          </li>
        </ul>
      )}
    </Drawer>
  );
}
