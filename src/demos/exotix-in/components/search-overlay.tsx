"use client";

import Link from "next/link";
import { Search, X } from "lucide-react";
import { useEffect, useMemo, useRef } from "react";
import { exotixDemo, exotixHomeHref } from "../data";
import { exotixProducts, formatExotixPrice } from "../products";
import { useScrollLock } from "./scroll-lock";
import { useShop } from "./shop-provider";

/**
 * Full-screen search: filters the verified catalogue by name, code and
 * category as you type, with a clear empty state. Results link to the demo's
 * product routes.
 */
export function SearchOverlay() {
  const { searchOpen, closeSearch, searchQuery, setSearchQuery } = useShop();
  const inputRef = useRef<HTMLInputElement>(null);
  const normalized = searchQuery.trim().toLowerCase();

  useScrollLock("exotix-search", searchOpen);

  useEffect(() => {
    if (!searchOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeSearch();
    };
    window.addEventListener("keydown", onKeyDown);
    inputRef.current?.focus();
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [searchOpen, closeSearch]);

  const results = useMemo(() => {
    if (!normalized) return [];
    return exotixProducts
      .filter((product) =>
        [product.name, product.code, product.category, product.drop]
          .join(" ")
          .toLowerCase()
          .includes(normalized),
      )
      .slice(0, 8);
  }, [normalized]);

  if (!searchOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[85] bg-[#0C0C0E]/95 backdrop-blur-sm exotix-fade"
      role="dialog"
      aria-modal="true"
      aria-label="Search the collection"
    >
      <div className="mx-auto flex h-full max-w-3xl flex-col px-4 pt-10 sm:px-6">
        <div className="flex items-center justify-between">
          <p className="font-exotix-mono text-[10px] tracking-[0.3em] text-[#E23B2E] uppercase">
            Search the grid
          </p>
          <button
            type="button"
            onClick={closeSearch}
            aria-label="Close search"
            className="grid h-10 w-10 place-items-center rounded-sm text-[#B9BDC4] transition hover:bg-[#1A1A1E] hover:text-[#F2EFEA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E23B2E]"
          >
            <X aria-hidden className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-6 flex items-center gap-3 border-b border-[#2A2A30] pb-4 focus-within:border-[#E23B2E]">
          <Search aria-hidden className="h-5 w-5 shrink-0 text-[#8A8A92]" />
          <input
            ref={inputRef}
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Jacket, hoodie, EXO-CNY, drop…"
            aria-label="Search products"
            className="font-exotix-display w-full bg-transparent text-xl text-[#F2EFEA] placeholder:text-[#5A5A62] focus:outline-none sm:text-2xl"
          />
        </div>

        <div className="mt-6 min-h-0 flex-1 overflow-y-auto pb-10">
          {!normalized ? (
            <p className="text-sm leading-relaxed text-[#8A8A92]">
              {exotixDemo.headerNotice} — try &ldquo;CNY&rdquo;, &ldquo;ferrari&rdquo;,
              &ldquo;hoodie&rdquo; or a code like EXO-RCE.
            </p>
          ) : results.length === 0 ? (
            <div className="rounded-sm border border-[#232327] bg-[#101013] p-8 text-center">
              <p className="font-exotix-display text-lg text-[#F2EFEA]">
                No match on this grid
              </p>
              <p className="mt-2 text-sm text-[#8A8A92]">
                Nothing in the snapshot matches &ldquo;{searchQuery.trim()}
                &rdquo;. Browse everything instead.
              </p>
              <Link
                href={`${exotixHomeHref}/collections`}
                onClick={closeSearch}
                className="mt-4 inline-block rounded-sm bg-[#E23B2E] px-5 py-2.5 text-xs font-medium tracking-[0.2em] text-[#F2EFEA] uppercase transition hover:bg-[#C7301F]"
              >
                Shop all pieces
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-[#232327]">
              {results.map((product) => (
                <li key={product.slug}>
                  <Link
                    href={`${exotixHomeHref}/products/${product.slug}`}
                    onClick={closeSearch}
                    className="flex items-center justify-between gap-4 py-4 transition hover:text-[#E23B2E]"
                  >
                    <span className="min-w-0">
                      <span className="font-exotix-display block truncate text-[#F2EFEA]">
                        {product.name}
                      </span>
                      <span className="font-exotix-mono mt-1 block text-[10px] tracking-[0.2em] text-[#8A8A92] uppercase">
                        {product.code} · {product.category.replace("-", " ")}
                      </span>
                    </span>
                    <span className="font-exotix-display shrink-0 text-[#E23B2E]">
                      {product.price === null
                        ? "Enquire"
                        : formatExotixPrice(product.price)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
