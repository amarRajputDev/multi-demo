"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { TmProductImage } from "./product-image";
import {
  tmCategoryBySlug,
  tmContact,
  tmProducts,
  tmSortedProducts,
} from "../data";

interface SearchDialogProps {
  open: boolean;
  onClose: () => void;
}

/**
 * Client-side catalogue search. Nothing leaves the page: the query runs over
 * the same product data the catalogue routes render.
 */
export function SearchDialog({ open, onClose }: SearchDialogProps) {
  const [query, setQuery] = useState("");
  const reduce = useReducedMotion();
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  /** Closing always clears the query, so a reopened search starts fresh. */
  const close = useCallback(() => {
    setQuery("");
    onCloseRef.current();
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") close();
    }
    document.addEventListener("keydown", onKey);
    const focusTarget =
      inputRef.current ??
      panelRef.current?.querySelector<HTMLElement>("a, button");
    focusTarget?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  const results = useMemo(() => {
    const term = query.trim().toLowerCase();
    const all = tmSortedProducts(tmProducts);
    if (!term) return all;
    return all.filter((product) => {
      const haystack = [
        product.title,
        product.summary,
        ...product.categories.map(
          (slug) => tmCategoryBySlug(slug)?.label ?? slug,
        ),
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(term);
    });
  }, [query]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[96]">
          <motion.button
            type="button"
            aria-label="Close search"
            onClick={close}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="absolute inset-0 bg-[#1C1A17]/60 backdrop-blur-[2px]"
          />
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Search the catalogue"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: -16 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -16 }}
            transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
            className="absolute inset-x-0 top-0 max-h-[90vh] overflow-hidden bg-[#FAF7F2] shadow-2xl sm:inset-x-6 sm:top-6 sm:mx-auto sm:max-w-2xl"
          >
            <div className="flex items-center gap-3 border-b border-[#1C1A17]/12 px-5 py-4">
              <Search aria-hidden className="h-4 w-4 shrink-0 text-[#B23B2E]" />
              <input
                ref={inputRef}
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search cardigans, co-ords, farshi sets…"
                aria-label="Search products"
                className="w-full bg-transparent py-1 font-tmsons-display text-lg text-[#1C1A17] placeholder:text-[#6F6A61]/70 focus:outline-none"
              />
              <button
                type="button"
                onClick={close}
                aria-label="Close search"
                className="grid h-9 w-9 shrink-0 place-items-center border border-[#1C1A17]/15 text-[#1C1A17] transition-colors hover:border-[#1C1A17]"
              >
                <X aria-hidden className="h-4 w-4" />
              </button>
            </div>

            <div className="max-h-[calc(90vh-4.5rem)] overflow-y-auto px-5 py-4">
              <p className="text-[10px] tracking-[0.2em] text-[#6F6A61] uppercase">
                {results.length}{" "}
                {results.length === 1 ? "result" : "results"} · prices available
                on request
              </p>

              {results.length === 0 ? (
                <div className="py-10 text-center">
                  <p className="font-tmsons-display text-lg text-[#1C1A17]">
                    Nothing matched &ldquo;{query.trim()}&rdquo;
                  </p>
                  <p className="mt-2 text-sm text-[#6F6A61]">
                    Try a collection name, or call the showroom on{" "}
                    <a
                      href={tmContact.phones[0].telHref}
                      className="text-[#B23B2E] underline underline-offset-4"
                    >
                      {tmContact.phones[0].display}
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <ul className="mt-4 divide-y divide-[#1C1A17]/10">
                  {results.map((product) => (
                    <li key={product.slug}>
                      <Link
                        href={`/demos/tm-sons/products/${product.slug}`}
                        onClick={close}
                        className="flex items-center gap-4 py-3 transition-colors hover:bg-[#1C1A17]/[0.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B23B2E]"
                      >
                        <span className="w-12 shrink-0">
                          <TmProductImage
                            imageId={product.imageId}
                            alt={product.alt}
                            sizes="48px"
                          />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate font-tmsons-display text-[0.98rem] text-[#1C1A17]">
                            {product.title}
                          </span>
                          <span className="mt-0.5 block truncate text-[11px] tracking-[0.14em] text-[#6F6A61] uppercase">
                            {product.categories
                              .map((slug) => tmCategoryBySlug(slug)?.label)
                              .filter(Boolean)
                              .join(" · ")}
                          </span>
                        </span>
                        <span className="shrink-0 text-[10px] tracking-[0.16em] text-[#B23B2E] uppercase">
                          Enquire
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
