"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  KHALEEZI_CATEGORIES,
  KHALEEZI_DATA_NOTE,
  KHALEEZI_PRODUCTS,
  KHALEEZI_SIZES,
  type KhaleeziCategory,
} from "../products";
import { KhaleeziCard } from "./product-card";

type SortKey = "name" | "category";

export function KhaleeziCatalogue({
  initialCategory,
}: {
  initialCategory?: KhaleeziCategory;
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<KhaleeziCategory | "all">(
    initialCategory ?? "all",
  );
  const [size, setSize] = useState<string>("any");
  const [sort, setSort] = useState<SortKey>("name");

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    const filtered = KHALEEZI_PRODUCTS.filter((product) => {
      const inCategory =
        category === "all" ||
        product.category === category ||
        product.tags?.includes(category);
      const inSize = size === "any" || product.sizes.includes(size);
      const matches =
        !needle ||
        product.name.toLowerCase().includes(needle) ||
        product.description.toLowerCase().includes(needle);
      return inCategory && inSize && matches;
    });

    const sorted = [...filtered];
    if (sort === "name") sorted.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "category") sorted.sort((a, b) => a.category.localeCompare(b.category));
    return sorted;
  }, [query, category, size, sort]);

  return (
    <div>
      <div className="flex flex-col gap-4 border-y border-[#E4DCD0] py-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-xs">
          <Search
            aria-hidden
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7A6E67]"
          />
          <label htmlFor="khaleezi-search" className="sr-only">
            Search the collection
          </label>
          <input
            id="khaleezi-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search dupatta sets, cotton, pants…"
            className="w-full border border-[#2A2320]/20 bg-transparent py-2.5 pl-9 pr-9 text-sm text-[#2A2320] placeholder:text-[#7A6E67]/70 focus:border-[#2F6D72] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F6D72]"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute right-2 top-1/2 grid h-6 w-6 -translate-y-1/2 place-items-center text-[#7A6E67] hover:text-[#2A2320]"
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
              "border px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] transition-colors",
              category === "all"
                ? "border-[#2F6D72] bg-[#2F6D72] text-[#FBF8F2]"
                : "border-[#2A2320]/20 text-[#2A2320]/75 hover:border-[#2F6D72]",
            )}
          >
            All
          </button>
          {KHALEEZI_CATEGORIES.map((entry) => (
            <button
              key={entry.key}
              type="button"
              onClick={() => setCategory(entry.key)}
              aria-pressed={category === entry.key}
              className={cn(
                "border px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] transition-colors",
                category === entry.key
                  ? "border-[#2F6D72] bg-[#2F6D72] text-[#FBF8F2]"
                  : "border-[#2A2320]/20 text-[#2A2320]/75 hover:border-[#2F6D72]",
              )}
            >
              {entry.label}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <label htmlFor="khaleezi-size" className="text-[10px] uppercase tracking-[0.18em] text-[#7A6E67]">
            Size
          </label>
          <select
            id="khaleezi-size"
            value={size}
            onChange={(event) => setSize(event.target.value)}
            className="border border-[#2A2320]/20 bg-[#FBF8F2] px-3 py-2 text-xs text-[#2A2320] focus:border-[#2F6D72]"
          >
            <option value="any">Any size</option>
            {KHALEEZI_SIZES.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <label htmlFor="khaleezi-sort" className="text-[10px] uppercase tracking-[0.18em] text-[#7A6E67]">
            Sort
          </label>
          <select
            id="khaleezi-sort"
            value={sort}
            onChange={(event) => setSort(event.target.value as SortKey)}
            className="border border-[#2A2320]/20 bg-[#FBF8F2] px-3 py-2 text-xs text-[#2A2320] focus:border-[#2F6D72]"
          >
            <option value="name">Name · A–Z</option>
            <option value="category">Category</option>
          </select>
        </div>
      </div>

      <p aria-live="polite" className="mt-4 text-xs text-[#7A6E67]">
        {results.length} {results.length === 1 ? "piece" : "pieces"} ·{" "}
        {query ? `matching “${query}”` : "demo catalogue"} ·{" "}
        {size === "any" ? "all sizes" : `size ${size}`}
      </p>

      {results.length === 0 ? (
        <div className="mt-8 border border-[#E4DCD0] bg-[#FBF8F2] px-6 py-16 text-center">
          <p className="font-khaleezi-display text-2xl text-[#2A2320]">
            No pieces match those filters.
          </p>
          <p className="mx-auto mt-3 max-w-md text-sm text-[#7A6E67]">
            This concept holds eight representative pieces. Reset the filters to
            see the whole demo catalogue.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("all");
              setSize("any");
            }}
            className="mt-6 border border-[#2F6D72] px-5 py-2.5 text-[10px] uppercase tracking-[0.18em] text-[#2F6D72] hover:bg-[#2F6D72] hover:text-[#FBF8F2]"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-9 sm:gap-x-6 lg:grid-cols-4">
          {results.map((product) => (
            <KhaleeziCard key={product.id} product={product} />
          ))}
        </div>
      )}

      <p className="mt-8 max-w-2xl text-[11px] leading-relaxed text-[#7A6E67]">
        {KHALEEZI_DATA_NOTE}
      </p>
    </div>
  );
}
