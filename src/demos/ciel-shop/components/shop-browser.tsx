"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  CIEL_CATEGORIES,
  CIEL_PRICE_NOTE,
  CIEL_PRODUCTS,
  formatPrice,
  type CielCategory,
  type CielProduct,
} from "../products";
import { CielImage } from "./ciel-image";
import { ProductCard } from "./product-card";
import { useCielStore } from "./store-provider";

type SortKey = "featured" | "price-asc" | "price-desc" | "name";

const SORTS: { key: SortKey; label: string }[] = [
  { key: "featured", label: "Featured" },
  { key: "price-asc", label: "Price · low to high" },
  { key: "price-desc", label: "Price · high to low" },
  { key: "name", label: "Name · A–Z" },
];

export function ShopBrowser({ initialCategory }: { initialCategory?: CielCategory }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CielCategory | "all">(
    initialCategory ?? "all",
  );
  const [sort, setSort] = useState<SortKey>("featured");
  const [quickView, setQuickView] = useState<CielProduct | null>(null);

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    const filtered = CIEL_PRODUCTS.filter((product) => {
      const inCategory =
        category === "all" ||
        product.category === category ||
        product.tags?.includes(category);
      const matches =
        !needle ||
        product.name.toLowerCase().includes(needle) ||
        product.description.toLowerCase().includes(needle) ||
        product.category.replace("-", " ").includes(needle);
      return inCategory && matches;
    });

    const sorted = [...filtered];
    if (sort === "price-asc") sorted.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") sorted.sort((a, b) => b.price - a.price);
    if (sort === "name") sorted.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "featured")
      sorted.sort((a, b) => (a.featuredRank ?? 50) - (b.featuredRank ?? 50));
    return sorted;
  }, [query, category, sort]);

  return (
    <div>
      <div className="flex flex-col gap-5 border-y border-white/10 py-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-xs">
          <Search
            aria-hidden
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8A8F96]"
          />
          <label htmlFor="ciel-search" className="sr-only">
            Search the collection
          </label>
          <input
            id="ciel-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search shirts, denim, co-ords…"
            className="w-full border border-white/15 bg-transparent py-2.5 pl-9 pr-9 text-sm text-[#F4F1EC] placeholder:text-[#8A8F96]/70 focus:border-[#A9D6E5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A9D6E5]"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute right-2 top-1/2 grid h-6 w-6 -translate-y-1/2 place-items-center text-[#8A8F96] hover:text-[#F4F1EC]"
            >
              <X aria-hidden className="h-4 w-4" />
            </button>
          ) : null}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setCategory("all")}
            aria-pressed={category === "all"}
            className={cn(
              "border px-3.5 py-2 text-[10px] uppercase tracking-[0.18em] transition-colors",
              category === "all"
                ? "border-[#A9D6E5] bg-[#A9D6E5] text-[#0E0E10]"
                : "border-white/15 text-[#F4F1EC]/75 hover:border-white/40 hover:text-[#F4F1EC]",
            )}
          >
            All
          </button>
          {CIEL_CATEGORIES.map((entry) => (
            <button
              key={entry.key}
              type="button"
              onClick={() => setCategory(entry.key)}
              aria-pressed={category === entry.key}
              className={cn(
                "border px-3.5 py-2 text-[10px] uppercase tracking-[0.18em] transition-colors",
                category === entry.key
                  ? "border-[#A9D6E5] bg-[#A9D6E5] text-[#0E0E10]"
                  : "border-white/15 text-[#F4F1EC]/75 hover:border-white/40 hover:text-[#F4F1EC]",
              )}
            >
              {entry.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <label
            htmlFor="ciel-sort"
            className="text-[10px] uppercase tracking-[0.2em] text-[#8A8F96]"
          >
            Sort
          </label>
          <select
            id="ciel-sort"
            value={sort}
            onChange={(event) => setSort(event.target.value as SortKey)}
            className="border border-white/15 bg-[#0E0E10] px-3 py-2 text-xs text-[#F4F1EC] focus:border-[#A9D6E5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A9D6E5]"
          >
            {SORTS.map((option) => (
              <option key={option.key} value={option.key}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p aria-live="polite" className="mt-4 text-xs text-[#8A8F96]">
        {results.length} {results.length === 1 ? "piece" : "pieces"} ·{" "}
        {query ? `matching “${query}”` : "archive catalogue"}
      </p>

      {results.length === 0 ? (
        <div className="mt-10 border border-white/10 px-6 py-16 text-center">
          <p className="font-ciel-display text-2xl text-[#F4F1EC]">
            Nothing in that corner of the archive.
          </p>
          <p className="mx-auto mt-3 max-w-md text-sm text-[#8A8F96]">
            {category === "athleisure"
              ? "The archived catalogue did not include confirmed athleisure pieces, so none are listed here rather than inventing products."
              : "Try a different search term or reset the filters."}
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("all");
            }}
            className="mt-6 border border-[#A9D6E5] px-5 py-2.5 text-[10px] uppercase tracking-[0.2em] text-[#A9D6E5] transition-colors hover:bg-[#A9D6E5] hover:text-[#0E0E10]"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
          {results.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={setQuickView}
              priority={index < 4}
            />
          ))}
        </div>
      )}

      <p className="mt-10 max-w-xl text-[11px] leading-relaxed text-[#8A8F96]">
        {CIEL_PRICE_NOTE}
      </p>

      {quickView ? (
        <QuickView product={quickView} onClose={() => setQuickView(null)} />
      ) : null}
    </div>
  );
}

function QuickView({
  product,
  onClose,
}: {
  product: CielProduct;
  onClose: () => void;
}) {
  const { addToCart } = useCielStore();
  const [size, setSize] = useState("M");

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Quick view — ${product.name}`}
      className="fixed inset-0 z-[80] flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative grid max-h-[92vh] w-full max-w-3xl overflow-y-auto bg-[#111113] sm:grid-cols-2"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close quick view"
          className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center border border-white/20 bg-black/50 text-[#F4F1EC] hover:border-[#A9D6E5] hover:text-[#A9D6E5]"
        >
          <X aria-hidden className="h-4 w-4" />
        </button>

        <div className="relative aspect-square sm:aspect-auto sm:min-h-[440px]">
          <CielImage
            src={product.image}
            alt={product.imageAlt}
            sizes="(max-width: 640px) 90vw, 40vw"
          />
        </div>

        <div className="flex flex-col p-6 sm:p-8">
          <p className="text-[10px] uppercase tracking-[0.22em] text-[#A9D6E5]">
            {product.category.replace("-", " ")}
          </p>
          <h3 className="font-ciel-display mt-3 text-2xl leading-tight text-[#F4F1EC]">
            {product.name}
          </h3>
          <p className="mt-2 text-lg text-[#F4F1EC]/85">{formatPrice(product.price)}</p>
          <p className="mt-4 text-sm leading-relaxed text-[#8A8F96]">
            {product.description}
          </p>

          <fieldset className="mt-5">
            <legend className="text-[10px] uppercase tracking-[0.2em] text-[#8A8F96]">
              Size (demo)
            </legend>
            <div className="mt-2 flex flex-wrap gap-2">
              {["S", "M", "L", "XL"].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setSize(option)}
                  aria-pressed={size === option}
                  className={cn(
                    "min-w-10 border px-3 py-1.5 text-xs",
                    size === option
                      ? "border-[#A9D6E5] text-[#A9D6E5]"
                      : "border-white/20 text-[#F4F1EC]/70 hover:border-white/40",
                  )}
                >
                  {option}
                </button>
              ))}
            </div>
          </fieldset>

          <div className="mt-auto flex flex-col gap-2 pt-6">
            <button
              type="button"
              onClick={() => {
                addToCart(product.slug, size);
                onClose();
              }}
              className="w-full bg-[#F4F1EC] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0E0E10] transition-colors hover:bg-[#A9D6E5]"
            >
              Add to bag · {size}
            </button>
            <Link
              href={`/demos/ciel-shop/products/${product.slug}`}
              className="w-full border border-white/20 px-5 py-3 text-center text-[11px] uppercase tracking-[0.2em] text-[#F4F1EC] transition-colors hover:border-[#A9D6E5] hover:text-[#A9D6E5]"
            >
              View full details
            </Link>
            <p className="mt-1 text-[10px] leading-relaxed text-[#8A8F96]">
              Sizes and stock are demonstration data — confirm with the brand.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
