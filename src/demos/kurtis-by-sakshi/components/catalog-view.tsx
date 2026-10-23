"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { sakshiCategories, getSakshiCategoryMeta } from "../data";
import {
  sakshiProducts,
  SAKSHI_DATA_NOTE,
  type SakshiCategory,
} from "../products";
import { ProductCard } from "./product-card";

type SortKey = "featured" | "name-asc" | "price-asc" | "price-desc";

const SORT_OPTIONS: { key: SortKey; label: string; disabled?: boolean }[] = [
  { key: "featured", label: "Featured" },
  { key: "name-asc", label: "Name: A–Z" },
  // Prices are not published for this brand, so price sorting is offered but
  // gracefully disabled with an explanatory hint.
  { key: "price-asc", label: "Price: low to high", disabled: true },
  { key: "price-desc", label: "Price: high to low", disabled: true },
];

interface CatalogViewProps {
  initialCategory?: SakshiCategory | "all";
  heading?: string;
}

/**
 * All-products view: live search, category filtering with removable chips,
 * sorting (price sort disabled because no prices are published) and empty
 * states. Purely client-side demonstration state.
 */
export function CatalogView({
  initialCategory = "all",
  heading,
}: CatalogViewProps) {
  const [selected, setSelected] = useState<SakshiCategory[]>(
    initialCategory === "all" ? [] : [initialCategory],
  );
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortKey>("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    const filtered = sakshiProducts.filter((product) => {
      const inCategory =
        selected.length === 0 || selected.includes(product.category);
      if (!inCategory) return false;
      if (!needle) return true;
      const haystack = [
        product.name,
        product.description,
        getSakshiCategoryMeta(product.category).label,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(needle);
    });

    const sorted = [...filtered];
    if (sort === "name-asc") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      sorted.sort((a, b) => a.featuredRank - b.featuredRank);
    }
    return sorted;
  }, [selected, query, sort]);

  const toggleCategory = (category: SakshiCategory) =>
    setSelected((current) =>
      current.includes(category)
        ? current.filter((key) => key !== category)
        : [...current, category],
    );

  const clearAll = () => {
    setSelected([]);
    setQuery("");
    setSort("featured");
  };

  const activeFilters = selected.length > 0 || query.trim().length > 0;

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <label className="relative flex-1">
          <Search
            aria-hidden
            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7A6461]"
          />
          <span className="sr-only">Search products</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search kurtis, sets, prints…"
            className="w-full rounded-full border border-[#D8C3BB] bg-white py-3 pl-11 pr-4 text-sm text-[#3B1F24] placeholder:text-[#B4A19C] transition focus:border-[#8E3B47] focus:outline-none"
          />
        </label>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setFiltersOpen((open) => !open)}
            aria-expanded={filtersOpen}
            className="inline-flex items-center gap-2 rounded-full border border-[#D8C3BB] bg-white px-4 py-3 text-[11px] font-medium tracking-[0.18em] text-[#3B1F24] uppercase transition hover:border-[#8E3B47] lg:hidden"
          >
            <SlidersHorizontal aria-hidden className="h-4 w-4" />
            Filters
            {selected.length > 0 ? (
              <span className="grid min-w-4 place-items-center rounded-full bg-[#8E3B47] px-1 text-[9px] leading-4 text-white">
                {selected.length}
              </span>
            ) : null}
          </button>

          <label className="relative">
            <span className="sr-only">Sort products</span>
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value as SortKey)}
              className="h-full appearance-none rounded-full border border-[#D8C3BB] bg-white py-3 pl-4 pr-9 text-[11px] font-medium tracking-[0.14em] text-[#3B1F24] uppercase transition focus:border-[#8E3B47] focus:outline-none"
            >
              {SORT_OPTIONS.map((option) => (
                <option
                  key={option.key}
                  value={option.key}
                  disabled={option.disabled}
                >
                  {option.label}
                  {option.disabled ? " (unavailable)" : ""}
                </option>
              ))}
            </select>
            <span
              aria-hidden
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#7A6461]"
            >
              &#9662;
            </span>
          </label>
        </div>
      </div>

      <p className="mt-3 text-[11px] leading-relaxed text-[#7A6461]">
        Price sorting is unavailable because prices are not published — every
        piece is enquiry-priced.
      </p>

      {/* Category chips — desktop rail content is mirrored here for all sizes. */}
      <div
        className={cn(
          "mt-4",
          filtersOpen ? "block" : "hidden lg:block",
        )}
      >
        <div className="rounded-2xl border border-[#E9DDD4] bg-white/60 p-4">
          <p className="text-[10px] tracking-[0.28em] text-[#8E3B47] uppercase">
            Categories
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {sakshiCategories.map((category) => {
              const active = selected.includes(category.key);
              return (
                <button
                  key={category.key}
                  type="button"
                  onClick={() => toggleCategory(category.key)}
                  aria-pressed={active}
                  className={cn(
                    "rounded-full border px-4 py-2 text-[11px] font-medium tracking-[0.14em] uppercase transition",
                    active
                      ? "border-[#8E3B47] bg-[#8E3B47] text-[#FBF6EF]"
                      : "border-[#D8C3BB] bg-white text-[#3B1F24] hover:border-[#8E3B47] hover:text-[#8E3B47]",
                  )}
                >
                  {category.label}
                </button>
              );
            })}
            {activeFilters ? (
              <button
                type="button"
                onClick={clearAll}
                className="inline-flex items-center gap-1.5 rounded-full border border-transparent px-3 py-2 text-[11px] font-medium tracking-[0.14em] text-[#7A6461] uppercase underline underline-offset-4 transition hover:text-[#8E3B47]"
              >
                <X aria-hidden className="h-3 w-3" />
                Clear all
              </button>
            ) : null}
          </div>
          <p className="mt-3 text-[11px] leading-relaxed text-[#7A6461]">
            {SAKSHI_DATA_NOTE}
          </p>
        </div>
      </div>

      <p className="mt-6 text-[11px] tracking-[0.2em] text-[#7A6461] uppercase">
        {results.length} {results.length === 1 ? "piece" : "pieces"}
        {heading ? ` · ${heading}` : ""}
      </p>

      {results.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-dashed border-[#D8C3BB] px-6 py-16 text-center">
          <p className="font-sakshi-display text-2xl text-[#3B1F24]">
            No pieces match your search
          </p>
          <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-[#7A6461]">
            Try clearing filters or searching a broader word like “cotton” or
            “set”. You can also ask directly on Instagram for something specific.
          </p>
          <button
            type="button"
            onClick={clearAll}
            className="mt-5 rounded-full border border-[#8E3B47] px-5 py-2.5 text-[11px] font-semibold tracking-[0.18em] text-[#8E3B47] uppercase transition hover:bg-[#8E3B47] hover:text-[#FBF6EF]"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
