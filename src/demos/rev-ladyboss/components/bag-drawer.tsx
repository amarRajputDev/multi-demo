"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { revContact, revDemo, revHomeHref } from "../data";
import { formatRevPrice } from "../products";
import { MonogramTile } from "./rev-image";
import { useScrollLock } from "./scroll-lock";
import { useShop, type RevCartLine } from "./shop-provider";

/**
 * Slide-in bag. Priced lines show qty controls and a running subtotal;
 * enquiry-only lines (price === null) are grouped into an enquiry list that
 * can be copied for an Instagram DM - this concept never charges anything.
 */
export function BagDrawer() {
  const {
    cart,
    cartCount,
    subtotal,
    pricedLines,
    enquiryLines,
    cartOpen,
    closeCart,
    setQty,
    removeLine,
    clearCart,
    showToast,
  } = useShop();
  const reduce = useReducedMotion();

  useScrollLock("rev-bag-drawer", cartOpen);

  const enquirySummary = enquiryLines
    .map((line) => `- ${line.name} (size ${line.size}, x${line.qty})`)
    .join("\n");

  return (
    <AnimatePresence>
      {cartOpen ? (
        <>
          <motion.div
            className="fixed inset-0 z-[80] bg-[#1A1618]/45 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.25 }}
            onClick={closeCart}
            aria-hidden
          />
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label="Shopping bag"
            initial={reduce ? { opacity: 0 } : { x: "100%" }}
            animate={reduce ? { opacity: 1 } : { x: 0 }}
            exit={reduce ? { opacity: 0 } : { x: "100%" }}
            transition={{ duration: reduce ? 0 : 0.36, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 right-0 z-[85] flex w-full max-w-[26rem] flex-col bg-[#FAF4F3] shadow-[0_0_60px_rgba(26,22,24,0.25)]"
          >
            <div className="flex items-center justify-between border-b border-[#E8D9DC] px-5 py-4">
              <p className="font-rev-heading text-sm text-[#1A1618]">
                Your bag{" "}
                <span className="text-[#B4707F]">({cartCount})</span>
              </p>
              <button
                type="button"
                onClick={closeCart}
                aria-label="Close bag"
                className="grid h-9 w-9 place-items-center rounded-[2px] text-[#1A1618] transition hover:bg-[#F3DCE1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B4707F]"
              >
                <X aria-hidden className="h-4 w-4" />
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
                <ShoppingBag aria-hidden className="h-8 w-8 text-[#B4707F]" />
                <p className="font-rev-heading text-lg text-[#1A1618]">
                  Your bag is empty
                </p>
                <p className="text-sm leading-relaxed text-[#7C7073]">
                  Add pieces from the lookbook to build an enquiry list for
                  {revContact.instagramHandle}.
                </p>
                <Link
                  href={`${revHomeHref}/collections`}
                  onClick={closeCart}
                  className="mt-2 inline-flex rounded-[2px] bg-[#1A1618] px-6 py-3 text-[11px] font-semibold tracking-[0.22em] text-[#FAF4F3] uppercase transition hover:bg-[#B4707F]"
                >
                  Browse the lookbook
                </Link>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-5 py-4">
                  {enquiryLines.length > 0 ? (
                    <section aria-label="Enquiry items">
                      <p className="text-[10px] tracking-[0.28em] text-[#B4707F] uppercase">
                        Enquiry list
                      </p>
                      <ul className="mt-3 grid gap-4">
                        {enquiryLines.map((line) => (
                          <BagLine
                            key={line.key}
                            line={line}
                            setQty={setQty}
                            removeLine={removeLine}
                          />
                        ))}
                      </ul>
                      <p className="mt-3 text-[11px] leading-relaxed text-[#7C7073]">
                        Pricing for these pieces is confirmed by the seller -
                        nothing here is charged on this concept.
                      </p>
                    </section>
                  ) : null}

                  {pricedLines.length > 0 ? (
                    <section
                      aria-label="Priced items"
                      className={enquiryLines.length > 0 ? "mt-7" : ""}
                    >
                      <p className="text-[10px] tracking-[0.28em] text-[#B4707F] uppercase">
                        Priced items
                      </p>
                      <ul className="mt-3 grid gap-4">
                        {pricedLines.map((line) => (
                          <BagLine
                            key={line.key}
                            line={line}
                            setQty={setQty}
                            removeLine={removeLine}
                          />
                        ))}
                      </ul>
                      <div className="mt-4 flex items-center justify-between border-t border-[#E8D9DC] pt-3">
                        <span className="text-[10px] tracking-[0.24em] text-[#7C7073] uppercase">
                          Subtotal
                        </span>
                        <span className="font-rev-heading text-base text-[#1A1618]">
                          {formatRevPrice(subtotal)}
                        </span>
                      </div>
                    </section>
                  ) : null}
                </div>

                <div className="border-t border-[#E8D9DC] bg-[#F3DCE1]/50 px-5 py-5">
                  <p className="text-[11px] leading-relaxed text-[#7C7073]">
                    {revDemo.orderNotice}
                  </p>
                  {enquiryLines.length > 0 ? (
                    <div className="mt-3 grid gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          const text = `Hi ${revContact.instagramHandle}! I'd like to enquire about:\n${enquirySummary}`;
                          void navigator.clipboard
                            ?.writeText(text)
                            .then(() =>
                              showToast("Enquiry list copied - paste it in a DM"),
                            )
                            .catch(() =>
                              showToast("Could not copy - select the list manually"),
                            );
                        }}
                        className="inline-flex items-center justify-center rounded-[2px] bg-[#1A1618] px-5 py-3.5 text-[11px] font-semibold tracking-[0.2em] text-[#FAF4F3] uppercase transition hover:bg-[#B4707F]"
                      >
                        Copy enquiry &amp; DM {revContact.instagramHandle}
                      </button>
                      <a
                        href={revContact.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-[2px] border border-[#1A1618] px-5 py-3.5 text-[11px] font-semibold tracking-[0.2em] text-[#1A1618] uppercase transition hover:border-[#B4707F] hover:text-[#B4707F]"
                      >
                        Open Instagram
                      </a>
                    </div>
                  ) : null}
                  <div className="mt-3 flex items-center justify-between gap-3">
                    <p className="text-[10px] tracking-[0.16em] text-[#7C7073] uppercase">
                      Demonstration bag
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        clearCart();
                        showToast("Bag cleared");
                      }}
                      className="text-[10px] tracking-[0.16em] text-[#B4707F] uppercase underline underline-offset-4 transition hover:text-[#1A1618]"
                    >
                      Clear bag
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}

function BagLine({
  line,
  setQty,
  removeLine,
}: {
  line: RevCartLine;
  setQty: (key: string, qty: number) => void;
  removeLine: (key: string) => void;
}) {
  return (
    <li className="flex gap-3">
      <div className="h-24 w-20 shrink-0 overflow-hidden rounded-[2px] bg-[#F3DCE1]">
        {line.image ? (
          // eslint-disable-next-line @next/next/no-img-element -- remote-only demo images
          <img
            src={line.image}
            alt={line.imageAlt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        ) : (
          <MonogramTile label={line.name} tone={line.tone} compact />
        )}
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-rev-body text-sm font-semibold text-[#1A1618]">
          {line.name}
        </p>
        <p className="mt-0.5 text-[11px] tracking-[0.14em] text-[#7C7073] uppercase">
          Size {line.size}
        </p>
        <p className="mt-1 text-[12px] text-[#B4707F]">
          {formatRevPrice(line.price)}
        </p>
        <div className="mt-2 flex items-center gap-3">
          <div className="inline-flex items-center rounded-[2px] border border-[#E8D9DC] bg-white">
            <button
              type="button"
              aria-label={`Decrease quantity of ${line.name}`}
              onClick={() => setQty(line.key, line.qty - 1)}
              className="grid h-8 w-8 place-items-center text-[#1A1618] transition hover:bg-[#F3DCE1]"
            >
              <Minus aria-hidden className="h-3 w-3" />
            </button>
            <span className="min-w-6 text-center text-xs text-[#1A1618]">
              {line.qty}
            </span>
            <button
              type="button"
              aria-label={`Increase quantity of ${line.name}`}
              onClick={() => setQty(line.key, line.qty + 1)}
              className="grid h-8 w-8 place-items-center text-[#1A1618] transition hover:bg-[#F3DCE1]"
            >
              <Plus aria-hidden className="h-3 w-3" />
            </button>
          </div>
          <button
            type="button"
            aria-label={`Remove ${line.name} from bag`}
            onClick={() => removeLine(line.key)}
            className="grid h-8 w-8 place-items-center text-[#7C7073] transition hover:text-[#B4707F]"
          >
            <Trash2 aria-hidden className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </li>
  );
}
