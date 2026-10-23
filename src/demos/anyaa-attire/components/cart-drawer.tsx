"use client";

import Link from "next/link";
import { useState } from "react";
import { Info, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { anyaaDemo, anyaaHomeHref } from "../data";
import { formatAnyaaPrice } from "../products";
import { AnyaaImage } from "./anyaa-image";
import { Drawer } from "./drawer";
import { useShop } from "./shop-provider";

/**
 * Demonstration shopping bag: quantity edits, removals, a subtotal that only
 * counts priced lines, and an on-screen summary - never a real checkout.
 */
export function CartDrawer() {
  const {
    cart,
    cartCount,
    subtotal,
    unpricedCount,
    cartOpen,
    closeCart,
    setQty,
    removeLine,
  } = useShop();
  const [summaryOpen, setSummaryOpen] = useState(false);

  return (
    <Drawer
      open={cartOpen}
      onClose={() => {
        setSummaryOpen(false);
        closeCart();
      }}
      lockKey="anyaa-cart"
      title="Shopping bag"
      subtitle={`${cartCount} ${cartCount === 1 ? "item" : "items"} - demonstration only`}
      footer={
        summaryOpen ? (
          <div className="space-y-3">
            <p className="font-anyaa-display text-base text-[#22332F]">
              {anyaaDemo.checkoutNoticeTitle}
            </p>
            <p className="font-anyaa-body text-[13px] leading-relaxed text-[#6E7C77]">
              {anyaaDemo.checkoutNotice}
            </p>
            <ul className="font-anyaa-body space-y-1 text-[12px] text-[#22332F]">
              <li className="flex justify-between gap-3">
                <span>Priced subtotal</span>
                <span>{subtotal > 0 ? formatAnyaaPrice(subtotal) : "-"}</span>
              </li>
              <li className="flex justify-between gap-3">
                <span>Enquire-for-price lines</span>
                <span>{unpricedCount}</span>
              </li>
              <li className="flex justify-between gap-3">
                <span>Total items</span>
                <span>{cartCount}</span>
              </li>
            </ul>
            <button
              type="button"
              onClick={() => setSummaryOpen(false)}
              className="font-anyaa-body w-full rounded-full border border-[#2E6F62]/40 px-5 py-2.5 text-xs font-medium tracking-[0.18em] text-[#22332F] uppercase transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2E6F62]"
            >
              Back to bag
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="flex items-baseline justify-between gap-3">
              <span className="font-anyaa-body text-xs tracking-[0.2em] text-[#6E7C77] uppercase">
                Priced subtotal
              </span>
              <span className="font-anyaa-display text-xl text-[#22332F]">
                {subtotal > 0 ? formatAnyaaPrice(subtotal) : "Enquire for price"}
              </span>
            </div>
            {unpricedCount > 0 ? (
              <p className="font-anyaa-body flex items-start gap-2 text-[11px] leading-relaxed text-[#6E7C77]">
                <Info aria-hidden className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#2E6F62]" />
                <span>
                  {unpricedCount}{" "}
                  {unpricedCount === 1 ? "piece is" : "pieces are"} priced on
                  enquiry and are not included in the subtotal.
                </span>
              </p>
            ) : null}
            <p className="font-anyaa-body text-[11px] leading-relaxed text-[#6E7C77]">
              Prices are demonstration data. Shipping, taxes and availability
              are not calculated here.
            </p>
            <button
              type="button"
              onClick={() => setSummaryOpen(true)}
              className="font-anyaa-body flex w-full items-center justify-center gap-2 rounded-full bg-[#2E6F62] px-5 py-3 text-xs font-medium tracking-[0.2em] text-[#FAF8F3] uppercase transition hover:bg-[#22332F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22332F]"
            >
              Review summary
            </button>
          </div>
        )
      }
    >
      {cart.length === 0 ? (
        <div className="flex h-full flex-col items-center justify-center gap-4 px-8 py-16 text-center">
          <span className="grid h-14 w-14 place-items-center rounded-full bg-[#D3E5DF] text-[#2E6F62]">
            <ShoppingBag aria-hidden className="h-6 w-6" />
          </span>
          <p className="font-anyaa-display text-lg text-[#22332F]">
            Your bag is empty
          </p>
          <p className="font-anyaa-body max-w-xs text-sm leading-relaxed text-[#6E7C77]">
            Add a piece from the concept edit to see the demonstration bag in
            action.
          </p>
          <Link
            href={`${anyaaHomeHref}/collections`}
            onClick={closeCart}
            className="font-anyaa-body rounded-full bg-[#2E6F62] px-6 py-3 text-xs font-medium tracking-[0.2em] text-[#FAF8F3] uppercase transition hover:bg-[#22332F]"
          >
            Shop the edit
          </Link>
        </div>
      ) : (
        <ul className="divide-y divide-[#DFE7E2]">
          {cart.map((line) => (
            <li key={line.key} className="flex gap-4 px-5 py-4 sm:px-6">
              <Link
                href={`${anyaaHomeHref}/products/${line.slug}`}
                onClick={closeCart}
                className="block w-16 shrink-0 sm:w-20"
                aria-label={`View ${line.name}`}
              >
                <AnyaaImage
                  src={line.image}
                  alt={line.imageAlt}
                  aspectClassName="aspect-[4/5]"
                  compactPlaceholder
                />
              </Link>

              <div className="flex min-w-0 flex-1 flex-col">
                <div className="flex items-start justify-between gap-3">
                  <Link
                    href={`${anyaaHomeHref}/products/${line.slug}`}
                    onClick={closeCart}
                    className="font-anyaa-display text-[15px] leading-snug text-[#22332F] hover:text-[#2E6F62]"
                  >
                    {line.name}
                  </Link>
                  <button
                    type="button"
                    onClick={() => removeLine(line.key)}
                    aria-label={`Remove ${line.name} from bag`}
                    className="shrink-0 rounded-full p-1.5 text-[#6E7C77] transition hover:bg-[#D3E5DF]/60 hover:text-[#2E6F62]"
                  >
                    <Trash2 aria-hidden className="h-4 w-4" />
                  </button>
                </div>

                <p className="font-anyaa-body mt-1 text-[11px] tracking-[0.16em] text-[#6E7C77] uppercase">
                  Size {line.size} - demo
                </p>

                <div className="mt-auto flex items-center justify-between gap-3 pt-3">
                  <div className="font-anyaa-body inline-flex items-center rounded-full border border-[#DFE7E2] bg-white">
                    <button
                      type="button"
                      onClick={() => setQty(line.key, line.qty - 1)}
                      aria-label={`Decrease quantity of ${line.name}`}
                      className="grid h-8 w-8 place-items-center rounded-full text-[#22332F] transition hover:bg-[#D3E5DF]/60"
                    >
                      <Minus aria-hidden className="h-3.5 w-3.5" />
                    </button>
                    <span
                      className="w-6 text-center text-sm text-[#22332F]"
                      aria-live="polite"
                    >
                      {line.qty}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQty(line.key, line.qty + 1)}
                      aria-label={`Increase quantity of ${line.name}`}
                      className="grid h-8 w-8 place-items-center rounded-full text-[#22332F] transition hover:bg-[#D3E5DF]/60"
                    >
                      <Plus aria-hidden className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  <span className="font-anyaa-display text-[15px] text-[#2E6F62]">
                    {line.price === null
                      ? "Enquire"
                      : formatAnyaaPrice(line.price * line.qty)}
                  </span>
                </div>
              </div>
            </li>
          ))}
          <li className="px-5 py-4 sm:px-6">
            <Link
              href={`${anyaaHomeHref}/#enquire`}
              onClick={closeCart}
              className="font-anyaa-body text-[11px] tracking-[0.14em] text-[#6E7C77] uppercase underline decoration-[#DFE7E2] underline-offset-4 transition hover:text-[#2E6F62]"
            >
              Questions about a piece? Send an enquiry
            </Link>
          </li>
        </ul>
      )}
    </Drawer>
  );
}
