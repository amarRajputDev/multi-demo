"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, Search, X } from "lucide-react";
import { getSyCategoryMeta, syCategories, syHomeHref } from "../data";
import { formatSyPrice, syProducts } from "../products";
import { useScrollLock } from "./scroll-lock";
import { SyImage } from "./sy-image";
import { useShop } from "./shop-provider";

/** Instant client-side search across the demo catalogue + category links. */
export function SearchOverlay() {
  const { searchOpen, closeSearch } = useShop();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const reduce = useReducedMotion();

  useScrollLock("sy-search", searchOpen);

  /** Closing also resets the query so every open starts clean. */
  const close = () => {
    setQuery("");
    closeSearch();
  };
  const closeRef = useRef(close);

  // Keep the latest close handler reachable from the window listener without
  // re-subscribing whenever the shop context object changes.
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
    ? syProducts
        .filter((product) => {
          const haystack = [
            product.name,
            getSyCategoryMeta(product.category).label,
            ...product.tags.map((tag) => getSyCategoryMeta(tag).label),
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
            className="absolute inset-0 bg-[#2C1F26]/45 backdrop-blur-[3px]"
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
            className="absolute inset-x-0 top-0 max-h-[86vh] overflow-y-auto bg-[#FFFDFC] shadow-[0_24px_60px_rgba(44,31,38,0.25)]"
          >
            <div className="mx-auto max-w-3xl px-4 py-5 sm:px-6 sm:py-7">
              <div className="flex items-center gap-3 border-b border-[#E4D8D3] pb-3">
                <Search aria-hidden className="h-5 w-5 shrink-0 text-[#A63D57]" />
                <input
                  ref={inputRef}
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search kurtis, sets, tissue silk..."
                  aria-label="Search products"
                  className="font-sy-display w-full min-w-0 bg-transparent text-lg text-[#2C1F26] placeholder:text-[#A99AA0] focus:outline-none sm:text-xl"
                />
                <button
                  type="button"
                  onClick={close}
                  aria-label="Close search"
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-[#4B2C3B] transition hover:bg-[#F6EEEA]"
                >
                  <X aria-hidden className="h-4 w-4" />
                </button>
              </div>

              {trimmed ? (
                results.length > 0 ? (
                  <ul className="mt-4 divide-y divide-[#EFE5E1]">
                    {results.map((product) => (
                      <li key={product.slug}>
                        <Link
                          href={`${syHomeHref}/products/${product.slug}`}
                          onClick={close}
                          className="group flex items-center gap-4 py-3 transition hover:bg-[#FBF7F4]"
                        >
                          <span className="block w-12 shrink-0">
                            <SyImage
                              src={product.image}
                              alt={product.imageAlt}
                              aspectClassName="aspect-[4/5]"
                            />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="font-sy-display block truncate text-[15px] text-[#2C1F26]">
                              {product.name}
                            </span>
                            <span className="mt-0.5 block text-[11px] tracking-[0.16em] text-[#7A6A71] uppercase">
                              {getSyCategoryMeta(product.category).label}
                            </span>
                          </span>
                          <span className="font-sy-display shrink-0 text-[15px] text-[#A63D57]">
                            {formatSyPrice(product.price)}
                          </span>
                          <ArrowRight
                            aria-hidden
                            className="h-4 w-4 shrink-0 text-[#A63D57] opacity-0 transition group-hover:opacity-100"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="py-6 text-sm text-[#7A6A71]">
                    Nothing matches &ldquo;{query.trim()}&rdquo; yet. Try
                    &ldquo;kurti&rdquo;, &ldquo;set&rdquo; or &ldquo;cotton&quot;.
                  </p>
                )
              ) : (
                <div className="mt-4">
                  <p className="text-[10px] tracking-[0.28em] text-[#7A6A71] uppercase">
                    Browse by category
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {syCategories.map((category) => (
                      <Link
                        key={category.key}
                        href={category.href}
                        onClick={close}
                        className="rounded-full border border-[#E4D8D3] bg-white px-4 py-2 text-xs tracking-[0.14em] text-[#4B2C3B] uppercase transition hover:border-[#A63D57] hover:text-[#A63D57]"
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
