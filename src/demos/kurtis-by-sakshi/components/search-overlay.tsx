"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Search, X } from "lucide-react";
import { sakshiCategories, sakshiHomeHref } from "../data";
import { sakshiProducts } from "../products";
import { useScrollLock } from "./scroll-lock";
import { SakshiImage } from "./sakshi-image";
import { useShop } from "./shop-provider";

/** Full-screen search overlay with instant client-side matching. */
export function SearchOverlay() {
  const { searchOpen, closeSearch } = useShop();
  const [query, setQuery] = useState("");
  const reduce = useReducedMotion();
  useScrollLock("kbs-search-overlay", searchOpen);

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return sakshiProducts.slice(0, 5);
    return sakshiProducts
      .filter((product) => {
        const categoryLabel =
          sakshiCategories.find((entry) => entry.key === product.category)
            ?.label ?? "";
        return [product.name, product.description, categoryLabel]
          .join(" ")
          .toLowerCase()
          .includes(needle);
      })
      .slice(0, 8);
  }, [query]);

  return (
    <AnimatePresence>
      {searchOpen ? (
        <motion.div
          id="kbs-search-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Search the collection"
          tabIndex={-1}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduce ? 0 : 0.24 }}
          className="fixed inset-0 z-[80] bg-[#FBF6EF]/97 backdrop-blur-sm outline-none"
        >
          <div className="mx-auto flex max-w-2xl flex-col px-4 py-6 sm:px-6">
            <div className="flex items-center justify-between">
              <p className="sakshi-eyebrow text-[10px] text-[#8E3B47]">
                Search the edit
              </p>
              <button
                type="button"
                onClick={closeSearch}
                aria-label="Close search"
                className="grid h-10 w-10 place-items-center rounded-full text-[#3B1F24] transition hover:bg-[#EFD9D5]"
              >
                <X aria-hidden className="h-5 w-5" />
              </button>
            </div>

            <label className="relative mt-6">
              <Search
                aria-hidden
                className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#7A6461]"
              />
              <span className="sr-only">Search products</span>
              <input
                type="search"
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Try “cotton”, “printed”, “set”…"
                className="font-sakshi-display w-full rounded-full border border-[#D8C3BB] bg-white py-4 pl-12 pr-4 text-lg text-[#3B1F24] placeholder:text-[#B4A19C] focus:border-[#8E3B47] focus:outline-none"
              />
            </label>

            <p className="mt-3 text-[11px] tracking-[0.14em] text-[#7A6461] uppercase">
              {results.length} demo {results.length === 1 ? "piece" : "pieces"}{" "}
              · prices on enquiry
            </p>

            <ul className="mt-4 grid gap-2 overflow-y-auto">
              {results.map((product) => (
                <li key={product.slug}>
                  <Link
                    href={`${sakshiHomeHref}/products/${product.slug}`}
                    onClick={closeSearch}
                    className="flex items-center gap-4 rounded-2xl border border-transparent bg-white/70 px-3 py-3 transition hover:border-[#E3CFC8] hover:bg-white"
                  >
                    <div className="w-14 shrink-0">
                      <SakshiImage
                        src={product.image}
                        alt={product.imageAlt}
                        tone={product.tone}
                        compact
                        aspectClassName="aspect-[4/5]"
                        className="rounded-md"
                      />
                    </div>
                    <span className="min-w-0">
                      <span className="font-sakshi-display block truncate text-base text-[#3B1F24]">
                        {product.name}
                      </span>
                      <span className="text-[11px] tracking-[0.14em] text-[#7A6461] uppercase">
                        Enquire for price
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
              {results.length === 0 ? (
                <li className="rounded-2xl border border-dashed border-[#D8C3BB] px-4 py-10 text-center">
                  <p className="font-sakshi-display text-lg text-[#3B1F24]">
                    No pieces match “{query.trim()}”
                  </p>
                  <p className="mt-1 text-sm text-[#7A6461]">
                    Try a broader word, or browse all collections.
                  </p>
                </li>
              ) : null}
            </ul>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
