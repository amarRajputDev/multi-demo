"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { Minus, Plus, Trash2, X } from "lucide-react";
import { TmProductImage } from "./product-image";
import { useTmEnquiry } from "./enquiry-provider";
import { tmContact, tmDemoNotice, tmHomeHref } from "../data";

/**
 * Enquiry drawer — the wholesale quote builder's collection step.
 *
 * Keyboard accessible (Escape closes, focus moves into the panel, body scroll
 * locks) and honest about scope: nothing is sent anywhere from this drawer.
 */
export function EnquiryDrawer() {
  const {
    items,
    drawerOpen,
    closeDrawer,
    setQuantity,
    removeItem,
    setNote,
    clear,
  } = useTmEnquiry();
  const reduce = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!drawerOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") closeDrawer();
    }
    document.addEventListener("keydown", onKey);
    panelRef.current
      ?.querySelector<HTMLElement>("button, a, input, [tabindex]:not([tabindex='-1'])")
      ?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [drawerOpen, closeDrawer]);

  return (
    <AnimatePresence>
      {drawerOpen && (
        <div className="fixed inset-0 z-[95]">
          <motion.button
            type="button"
            aria-label="Close enquiry list"
            onClick={closeDrawer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 bg-[#1C1A17]/55 backdrop-blur-[2px]"
          />
          <motion.aside
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Enquiry list"
            initial={reduce ? { opacity: 0 } : { x: "100%" }}
            animate={reduce ? { opacity: 1 } : { x: 0 }}
            exit={reduce ? { opacity: 0 } : { x: "100%" }}
            transition={{ duration: 0.34, ease: [0.32, 0.72, 0, 1] }}
            className="absolute top-0 right-0 flex h-full w-full max-w-[26rem] flex-col bg-[#FAF7F2] shadow-2xl"
          >
            <header className="flex items-center justify-between border-b border-[#1C1A17]/12 px-5 py-4">
              <div>
                <p className="font-tmsons-display text-lg text-[#1C1A17]">
                  Your enquiry list
                </p>
                <p className="mt-0.5 text-[10px] tracking-[0.2em] text-[#6F6A61] uppercase">
                  {items.length} {items.length === 1 ? "item" : "items"}
                </p>
              </div>
              <button
                type="button"
                onClick={closeDrawer}
                aria-label="Close enquiry list"
                className="grid h-10 w-10 place-items-center border border-[#1C1A17]/15 text-[#1C1A17] transition-colors hover:border-[#1C1A17] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B23B2E]"
              >
                <X aria-hidden className="h-4 w-4" />
              </button>
            </header>

            <div className="flex-1 overflow-y-auto px-5 py-5">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <span className="grid h-14 w-14 place-items-center rounded-full border border-dashed border-[#1C1A17]/30">
                    <Plus aria-hidden className="h-5 w-5 text-[#B23B2E]" />
                  </span>
                  <p className="mt-5 font-tmsons-display text-lg text-[#1C1A17]">
                    Nothing added yet
                  </p>
                  <p className="mt-2 max-w-[15rem] text-sm leading-relaxed text-[#6F6A61]">
                    Browse the catalogue and add the pieces you would like
                    quoted. There is no minimum quantity in this demo.
                  </p>
                  <Link
                    href="/demos/tm-sons/shop"
                    onClick={closeDrawer}
                    className="mt-6 inline-flex min-h-11 items-center bg-[#1C1A17] px-6 text-[11px] tracking-[0.18em] text-[#FAF7F2] uppercase transition-colors hover:bg-[#332F29]"
                  >
                    Browse the catalogue
                  </Link>
                </div>
              ) : (
                <ul className="space-y-5">
                  {items.map((item) => (
                    <li
                      key={item.slug}
                      className="border-b border-[#1C1A17]/10 pb-5 last:border-0 last:pb-0"
                    >
                      <div className="flex gap-4">
                        <Link
                          href={`/demos/tm-sons/products/${item.slug}`}
                          onClick={closeDrawer}
                          className="w-20 shrink-0"
                          aria-label={`${item.title} — view details`}
                        >
                          <TmProductImage
                            imageId={item.image}
                            alt={item.alt}
                            sizes="80px"
                            aspectClassName="aspect-[9/16] w-20"
                          />
                        </Link>
                        <div className="min-w-0 flex-1">
                          <p className="text-[9px] tracking-[0.2em] text-[#B23B2E] uppercase">
                            {item.categoryLabel}
                          </p>
                          <p className="mt-1 font-tmsons-display text-[0.98rem] leading-snug text-[#1C1A17]">
                            {item.title}
                          </p>
                          <p className="mt-1 text-[10px] tracking-[0.14em] text-[#6F6A61] uppercase">
                            Request wholesale price
                          </p>

                          <div className="mt-3 flex items-center gap-3">
                            <div className="inline-flex items-center border border-[#1C1A17]/20">
                              <button
                                type="button"
                                onClick={() =>
                                  setQuantity(item.slug, item.quantity - 1)
                                }
                                disabled={item.quantity <= 1}
                                aria-label={`Decrease quantity of ${item.title}`}
                                className="grid h-9 w-9 place-items-center text-[#1C1A17] transition-colors hover:bg-[#1C1A17]/5 disabled:opacity-35"
                              >
                                <Minus aria-hidden className="h-3.5 w-3.5" />
                              </button>
                              <input
                                type="number"
                                min={1}
                                max={9999}
                                inputMode="numeric"
                                aria-label={`Quantity of ${item.title}`}
                                value={item.quantity}
                                onChange={(event) =>
                                  setQuantity(
                                    item.slug,
                                    Number(event.target.value || 1),
                                  )
                                }
                                className="h-9 w-12 border-x border-[#1C1A17]/20 bg-transparent text-center text-sm text-[#1C1A17] outline-none [appearance:textfield] focus:bg-white [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                              />
                              <button
                                type="button"
                                onClick={() =>
                                  setQuantity(item.slug, item.quantity + 1)
                                }
                                aria-label={`Increase quantity of ${item.title}`}
                                className="grid h-9 w-9 place-items-center text-[#1C1A17] transition-colors hover:bg-[#1C1A17]/5"
                              >
                                <Plus aria-hidden className="h-3.5 w-3.5" />
                              </button>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeItem(item.slug)}
                              aria-label={`Remove ${item.title} from enquiry list`}
                              className="grid h-9 w-9 place-items-center border border-[#1C1A17]/15 text-[#6F6A61] transition-colors hover:border-[#B23B2E] hover:text-[#B23B2E]"
                            >
                              <Trash2 aria-hidden className="h-3.5 w-3.5" />
                            </button>
                          </div>

                          <label className="mt-3 block">
                            <span className="sr-only">
                              Preference or colour note for {item.title}
                            </span>
                            <input
                              type="text"
                              value={item.note}
                              onChange={(event) =>
                                setNote(item.slug, event.target.value)
                              }
                              placeholder="Colour / preference (optional)"
                              className="w-full border-b border-dashed border-[#1C1A17]/25 bg-transparent py-1.5 text-xs text-[#1C1A17] placeholder:text-[#6F6A61]/70 focus:border-[#B23B2E] focus:outline-none"
                            />
                          </label>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <footer className="border-t border-[#1C1A17]/12 bg-[#F3EDE4] px-5 py-5">
                <Link
                  href="/demos/tm-sons/wholesale"
                  onClick={closeDrawer}
                  className="flex min-h-12 w-full items-center justify-center bg-[#B23B2E] text-[11px] tracking-[0.2em] text-white uppercase transition-colors hover:bg-[#8F2E23] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C1A17]"
                >
                  Build quote request
                </Link>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <Link
                    href={`${tmHomeHref}/shop`}
                    onClick={closeDrawer}
                    className="text-[11px] tracking-[0.14em] text-[#6F6A61] uppercase underline underline-offset-4 hover:text-[#1C1A17]"
                  >
                    Continue browsing
                  </Link>
                  <button
                    type="button"
                    onClick={clear}
                    className="text-[11px] tracking-[0.14em] text-[#6F6A61] uppercase underline underline-offset-4 hover:text-[#B23B2E]"
                  >
                    Clear list
                  </button>
                </div>
                <p className="mt-4 text-[10px] leading-relaxed text-[#6F6A61]">
                  Demo only — this list is stored in your browser. No order is
                  placed. Prefer to talk?{" "}
                  <a
                    href={tmContact.phones[0].telHref}
                    className="text-[#B23B2E] underline underline-offset-2"
                  >
                    {tmContact.phones[0].display}
                  </a>
                </p>
                <p className="mt-2 text-[9px] leading-relaxed text-[#6F6A61]/80">
                  {tmDemoNotice}
                </p>
              </footer>
            )}
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
