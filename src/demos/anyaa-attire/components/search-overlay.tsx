"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, Search, X } from "lucide-react";
import { anyaaCategories, anyaaHomeHref } from "../data";
import { anyaaPriceLabel, anyaaProducts } from "../products";
import { AnyaaImage } from "./anyaa-image";
import { useScrollLock } from "./scroll-lock";
import { useShop } from "./shop-provider";

/** Instant client-side search across the demo catalogue + category links. */
export function SearchOverlay() {
  const { searchOpen, closeSearch } = useShop();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const reduce = useReducedMotion();

  useScrollLock("anyaa-search", searchOpen);

  /** Closing also resets the query so every open starts clean. */
  const close = () => {
    setQuery("");
    closeSearch();
  };
  const closeRef = useRef(close);

  useEffect(() => {
    closeRef.current = close;
  });

  useEffect(() => {
    if (!searchOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeRef.current();
    };
    window.addEventListener("keydown", onKeyDown);
    const timer = window.setTimeout(() => inputRef.current?.focus(), 60);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(timer);
    };
  }, [searchOpen]);

  const trimmed = query.trim().toLowerCase();
  const results = trimmed
    ? anyaaProducts
        .filter((product) => {
          const haystack = [
            product.name,
            product.description,
            product.category,
          ]
            .join(" ")
            .toLowerCase();
          return haystack.includes(trimmed);
        })
        .slice(0, 5)
    : [];

  return (
    <AnimatePresence>
      {searchOpen ? (
        <div className="fixed inset-0 z-[85]">
          <motion.div
            className="absolute inset-0 bg-[#22332F]/45 backdrop-blur-[3px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.25 }}
            onClick={close}
            aria-hidden
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Search the collection"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: -28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -28 }}
            transition={{ duration: reduce ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 top-0 max-h-[86vh] overflow-y-auto bg-[#FAF8F3] shadow-[0_24px_60px_rgba(34,51,47,0.25)]"
          >
            <div className="mx-auto max-w-3xl px-4 py-5 sm:px-6 sm:py-7">
              <div className="flex items-center gap-3 border-b border-[#DFE7E2] pb-3">
                <Search aria-hidden className="h-5 w-5 shrink-0 text-[#2E6F62]" />
                <input
                  ref={inputRef}
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search kurtis, florals, everyday..."
                  aria-label="Search products"
                  className="font-anyaa-display w-full min-w-0 bg-transparent text-lg text-[#22332F] placeholder:text-[#6E7C77]/70 focus:outline-none sm:text-xl"
                />
                <button
                  type="button"
                  onClick={close}
                  aria-label="Close search"
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-[#22332F] transition hover:bg-[#D3E5DF]/60"
                >
                  <X aria-hidden className="h-4 w-4" />
                </button>
              </div>

              {trimmed ? (
                results.length > 0 ? (
                  <ul className="mt-4 divide-y divide-[#DFE7E2]">
                    {results.map((product) => (
                      <li key={product.slug}>
                        <Link
                          href={`${anyaaHomeHref}/products/${product.slug}`}
                          onClick={close}
                          className="group flex items-center gap-4 py-3 transition hover:bg-[#F2F5F1]"
                        >
                          <span className="block w-12 shrink-0">
                            <AnyaaImage
                              src={product.image}
                              alt={product.imageAlt}
                              tint={product.tint}
                              aspectClassName="aspect-[4/5]"
                              compactPlaceholder
                            />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="font-anyaa-display block truncate text-[15px] text-[#22332F]">
                              {product.name}
                            </span>
                            <span className="font-anyaa-body mt-0.5 block text-[11px] tracking-[0.16em] text-[#6E7C77] uppercase">
                              {product.category.replace("-", " ")}
                            </span>
                          </span>
                          <span className="font-anyaa-display shrink-0 text-[15px] text-[#2E6F62]">
                            {anyaaPriceLabel(product)}
                          </span>
                          <ArrowRight
                            aria-hidden
                            className="h-4 w-4 shrink-0 text-[#2E6F62] opacity-0 transition group-hover:opacity-100"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="font-anyaa-body py-6 text-sm text-[#6E7C77]">
                    Nothing matches &ldquo;{query.trim()}&rdquo; yet. Try
                    &ldquo;kurti&rdquo;, &ldquo;floral&quot; or
                    &quot;everyday&quot;.
                  </p>
                )
              ) : (
                <div className="mt-4">
                  <p className="font-anyaa-body text-[10px] tracking-[0.28em] text-[#6E7C77] uppercase">
                    Browse by category
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {anyaaCategories.map((category) => (
                      <Link
                        key={category.key}
                        href={category.href}
                        onClick={close}
                        className="font-anyaa-body rounded-full border border-[#DFE7E2] bg-white px-4 py-2 text-xs tracking-[0.14em] text-[#22332F] uppercase transition hover:border-[#2E6F62] hover:text-[#2E6F62]"
                      >
                        {category.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
