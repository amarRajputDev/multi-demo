"use client";

import Link from "next/link";
import { useState } from "react";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { exotixContact, exotixDemo, exotixHomeHref } from "../data";
import { formatExotixPrice, EXOTIX_DATA_NOTE } from "../products";
import { Drawer } from "./drawer";
import { ExotixImage } from "./exotix-image";
import { useShop } from "./shop-provider";

/**
 * Demonstration bag: quantity edits, removals, subtotal and an enquiry action
 * that never places a real order or connects to payment systems.
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
      lockKey="exotix-cart"
      title="Pit-lane bag"
      subtitle={`${cartCount} ${cartCount === 1 ? "item" : "items"} — demonstration only`}
      footer={
        noticeOpen ? (
          <div className="space-y-3">
            <p className="font-exotix-display text-base text-[#F2EFEA]">
              {exotixDemo.checkoutNoticeTitle}
            </p>
            <p className="text-[13px] leading-relaxed text-[#B9BDC4]">
              {exotixDemo.checkoutNotice}
            </p>
            <a
              href={exotixContact.contactPage}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-sm bg-[#E23B2E] px-5 py-3 text-center text-xs font-medium tracking-[0.18em] text-[#F2EFEA] uppercase transition hover:bg-[#C7301F]"
            >
              Open the brand&apos;s contact page
            </a>
            <button
              type="button"
              onClick={() => setNoticeOpen(false)}
              className="w-full rounded-sm border border-[#2A2A30] px-5 py-2.5 text-xs font-medium tracking-[0.18em] text-[#B9BDC4] uppercase transition hover:border-[#E23B2E] hover:text-[#F2EFEA]"
            >
              Back to bag
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="flex items-baseline justify-between">
              <span className="font-exotix-mono text-[10px] tracking-[0.24em] text-[#8A8A92] uppercase">
                Subtotal
              </span>
              <span className="font-exotix-display text-xl text-[#F2EFEA]">
                {subtotal === null ? "Enquire for total" : formatExotixPrice(subtotal)}
              </span>
            </div>
            <p className="text-[11px] leading-relaxed text-[#8A8A92]">
              {EXOTIX_DATA_NOTE}
            </p>
            <button
              type="button"
              onClick={() => setNoticeOpen(true)}
              className="flex w-full items-center justify-center gap-2 rounded-sm bg-[#E23B2E] px-5 py-3 text-xs font-medium tracking-[0.2em] text-[#F2EFEA] uppercase transition hover:bg-[#C7301F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E23B2E]"
            >
              How to order
            </button>
          </div>
        )
      }
    >
      {cart.length === 0 ? (
        <div className="flex h-full flex-col items-center justify-center gap-4 px-8 py-16 text-center">
          <span className="grid h-14 w-14 place-items-center rounded-sm border border-[#2A2A30] text-[#E23B2E]">
            <ShoppingBag aria-hidden className="h-6 w-6" />
          </span>
          <p className="font-exotix-display text-lg text-[#F2EFEA]">
            Bag is on pit
          </p>
          <p className="max-w-xs text-sm leading-relaxed text-[#8A8A92]">
            Nothing staged yet. Add a piece from the grid to see the demo bag in
            action.
          </p>
          <Link
            href={`${exotixHomeHref}/collections`}
            onClick={closeCart}
            className="rounded-sm bg-[#E23B2E] px-6 py-3 text-xs font-medium tracking-[0.2em] text-[#F2EFEA] uppercase transition hover:bg-[#C7301F]"
          >
            Enter the shop
          </Link>
        </div>
      ) : (
        <ul className="divide-y divide-[#232327]">
          {cart.map((line) => (
            <li key={line.key} className="flex gap-4 px-5 py-4 sm:px-6">
              <Link
                href={`${exotixHomeHref}/products/${line.slug}`}
                onClick={closeCart}
                className="block w-16 shrink-0 sm:w-20"
                aria-label={`View ${line.name}`}
              >
                <ExotixImage
                  src={line.image}
                  alt={line.imageAlt}
                  aspectClassName="aspect-[4/5]"
                />
              </Link>

              <div className="flex min-w-0 flex-1 flex-col">
                <div className="flex items-start justify-between gap-3">
                  <Link
                    href={`${exotixHomeHref}/products/${line.slug}`}
                    onClick={closeCart}
                    className="font-exotix-display text-[15px] leading-snug text-[#F2EFEA] hover:text-[#E23B2E]"
                  >
                    {line.name}
                  </Link>
                  <button
                    type="button"
                    onClick={() => removeLine(line.key)}
                    aria-label={`Remove ${line.name} from bag`}
                    className="shrink-0 rounded-sm p-1.5 text-[#8A8A92] transition hover:bg-[#1A1A1E] hover:text-[#E23B2E]"
                  >
                    <Trash2 aria-hidden className="h-4 w-4" />
                  </button>
                </div>

                <p className="font-exotix-mono mt-1 text-[10px] tracking-[0.16em] text-[#8A8A92] uppercase">
                  {line.code} · Size {line.size}
                </p>

                <div className="mt-auto flex items-center justify-between gap-3 pt-3">
                  <div className="inline-flex items-center rounded-sm border border-[#2A2A30]">
                    <button
                      type="button"
                      onClick={() => setQty(line.key, line.qty - 1)}
                      aria-label={`Decrease quantity of ${line.name}`}
                      className="grid h-8 w-8 place-items-center text-[#B9BDC4] transition hover:bg-[#1A1A1E]"
                    >
                      <Minus aria-hidden className="h-3.5 w-3.5" />
                    </button>
                    <span
                      className="w-6 text-center text-sm text-[#F2EFEA]"
                      aria-live="polite"
                    >
                      {line.qty}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQty(line.key, line.qty + 1)}
                      aria-label={`Increase quantity of ${line.name}`}
                      className="grid h-8 w-8 place-items-center text-[#B9BDC4] transition hover:bg-[#1A1A1E]"
                    >
                      <Plus aria-hidden className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  <span className="font-exotix-display text-[15px] text-[#F2EFEA]">
                    {line.price === null
                      ? "Enquire"
                      : formatExotixPrice(line.price * line.qty)}
                  </span>
                </div>
              </div>
            </li>
          ))}
          <li className="px-5 py-4 sm:px-6">
            <Link
              href={`${exotixHomeHref}/contact`}
              onClick={closeCart}
              className="font-exotix-mono text-[11px] tracking-[0.14em] text-[#8A8A92] uppercase underline decoration-[#2A2A30] underline-offset-4 transition hover:text-[#E23B2E]"
            >
              Questions? Send an enquiry
            </Link>
          </li>
        </ul>
      )}
    </Drawer>
  );
}
