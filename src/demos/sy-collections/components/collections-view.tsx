"use client";

import { useMemo, useState } from "react";
import { Check, Search, SlidersHorizontal, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { getSyCategoryMeta, syCategories, syDemo } from "../data";
import {
  syProductCount,
  syProductMatchesCategory,
  syProducts,
  type SyCategory,
} from "../products";
import { Drawer } from "./drawer";
import { ProductCard } from "./product-card";
import { SyImage } from "./sy-image";

type SortKey = "featured" | "price-asc" | "price-desc";

const SORT_OPTIONS: { key: SortKey; label: string }[] = [
  { key: "featured", label: "Featured" },
  { key: "price-asc", label: "Price: low to high" },
  { key: "price-desc", label: "Price: high to low" },
];

interface CollectionsViewProps {
  /** Pre-selected category from the route, or "all" for the full catalogue. */
  initialCategory?: SyCategory | "all";
}

/**
 * Catalogue experience: live search, category filtering with removable chips,
 * price sorting, a desktop filter rail and a mobile filter sheet. All state is
 * local - this concept does not claim to reproduce the full live catalogue.
 */
export function CollectionsView({
  initialCategory = "all",
}: CollectionsViewProps) {
  const [selected, setSelected] = useState<SyCategory[]>(
    initialCategory === "all" ? [] : [initialCategory],
  );
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortKey>("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    const filtered = syProducts.filter((product) => {
      const inCategory =
        selected.length === 0 ||
        selected.some((category) =>
          syProductMatchesCategory(product, category),
        );
      if (!inCategory) return false;
      if (!needle) return true;

      const haystack = [
        product.name,
        getSyCategoryMeta(product.category).label,
        ...product.tags.map((tag) => getSyCategoryMeta(tag).label),
        product.description,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(needle);
    });

    const sorted = [...filtered];
    if (sort === "price-asc") sorted.sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") sorted.sort((a, b) => b.price - a.price);
    else sorted.sort((a, b) => a.featuredRank - b.featuredRank);
    return sorted;
  }, [selected, query, sort]);

  const toggleCategory = (category: SyCategory) =>
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
    <div className="grid gap-10 lg:grid-cols-[15.5rem_1fr] lg:gap-12">
      {/* Desktop filter rail */}
      <aside className="hidden lg:block">
        <div className="sticky top-28">
          <FilterPanel
            selected={selected}
            onToggle={toggleCategory}
            sort={sort}
            onSortChange={setSort}
            onClear={clearAll}
            showClear={activeFilters}
          />
        </div>
      </aside>

      <div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <label className="relative flex-1">
            <Search
              aria-hidden
              className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9A8A90]"
            />
            <span className="sr-only">Search products</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search this collection..."
              className="w-full rounded-full border border-[#E4D8D3] bg-white py-3 pl-11 pr-4 text-sm text-[#2C1F26] placeholder:text-[#9A8A90] transition focus:border-[#A63D57] focus:outline-none"
            />
          </label>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setFiltersOpen(true)}
              className="inline-flex items-center gap-2 rounded-full border border-[#E4D8D3] bg-white px-4 py-3 text-[11px] font-medium tracking-[0.18em] text-[#4B2C3B] uppercase transition hover:border-[#A63D57] lg:hidden"
            >
              <SlidersHorizontal aria-hidden className="h-4 w-4" />
              Filters
              {selected.length > 0 ? (
                <span className="grid min-w-4 place-items-center rounded-full bg-[#A63D57] px-1 text-[9px] leading-4 text-white">
                  {selected.length}
                </span>
              ) : null}
            </button>

            <label className="relative">
              <span className="sr-only">Sort products</span>
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value as SortKey)}
                className="h-full appearance-none rounded-full border border-[#E4D8D3] bg-white py-3 pl-4 pr-9 text-[11px] font-medium tracking-[0.14em] text-[#4B2C3B] uppercase transition focus:border-[#A63D57] focus:outline-none"
              >
                {SORT_OPTIONS.map((option) => (
                  <option key={option.key} value={option.key}>
                    {option.label}
                  </option>
                ))}
              </select>
              <span
                aria-hidden
                className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#9A8A90]"
              >
                &#9662;
              </span>
            </label>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-b border-[#EFE5E1] pb-4">
          <p className="text-[11px] tracking-[0.2em] text-[#7A6A71] uppercase">
            {results.length} of {syProductCount} pieces
            {selected.length === 1
              ? ` - ${getSyCategoryMeta(selected[0]).label}`
              : selected.length > 1
                ? ` - ${selected.length} categories`
                : ""}
          </p>

          {activeFilters ? (
            <div className="flex flex-wrap items-center gap-2">
              {selected.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => toggleCategory(category)}
                  aria-label={`Remove ${getSyCategoryMeta(category).label} filter`}
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#F6E9EA] px-3 py-1.5 text-[10px] tracking-[0.16em] text-[#A63D57] uppercase transition hover:bg-[#F3DCDF]"
                >
                  {getSyCategoryMeta(category).label}
                  <X aria-hidden className="h-3 w-3" />
                </button>
              ))}
              {query.trim() ? (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EFEAE6] px-3 py-1.5 text-[10px] tracking-[0.16em] text-[#4B2C3B] uppercase">
                  &ldquo;{query.trim()}&rdquo;
                </span>
              ) : null}
              <button
                type="button"
                onClick={clearAll}
                className="text-[10px] font-medium tracking-[0.18em] text-[#4B2C3B] uppercase underline decoration-[#DCCFC9] underline-offset-4 transition hover:text-[#A63D57]"
              >
                Clear all
              </button>
            </div>
          ) : null}
        </div>

        {results.length > 0 ? (
          <ul className="mt-8 grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-7">
            {results.map((product) => (
              <li key={product.slug}>
                <ProductCard product={product} sizes="(max-width: 640px) 50vw, 33vw" />
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-10 rounded-[3px] border border-dashed border-[#E4D8D3] bg-white px-6 py-16 text-center">
            <p className="font-sy-display text-xl text-[#2C1F26]">
              No pieces match those filters
            </p>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-[#7A6A71]">
              Try another category or clear the filters to see all {syProductCount}{" "}
              representative pieces in this concept.
            </p>
            <button
              type="button"
              onClick={clearAll}
              className="mt-5 rounded-full bg-[#2C1F26] px-6 py-3 text-[11px] font-medium tracking-[0.2em] text-[#FBF6F2] uppercase transition hover:bg-[#4B2C3B]"
            >
              Clear filters
            </button>
          </div>
        )}

        <p className="mt-10 border-t border-[#EFE5E1] pt-5 text-[11px] leading-relaxed text-[#8B7B81]">
          {syDemo.disclosure} Struck-through prices are reference prices
          observed on the live catalogue, not guaranteed live pricing.
        </p>
      </div>

      {/* Mobile filter sheet */}
      <Drawer
        open={filtersOpen}
        onClose={() => setFiltersOpen(false)}
        lockKey="sy-filters"
        title="Filter & sort"
        subtitle={`${results.length} of ${syProductCount} pieces`}
        side="bottom"
      >
        <div className="px-5 py-5 sm:px-6">
          <FilterPanel
            selected={selected}
            onToggle={toggleCategory}
            sort={sort}
            onSortChange={setSort}
            onClear={clearAll}
            showClear={activeFilters}
          />
        </div>
      </Drawer>
    </div>
  );
}

function FilterPanel({
  selected,
  onToggle,
  sort,
  onSortChange,
  onClear,
  showClear,
}: {
  selected: SyCategory[];
  onToggle: (category: SyCategory) => void;
  sort: SortKey;
  onSortChange: (sort: SortKey) => void;
  onClear: () => void;
  showClear: boolean;
}) {
  return (
    <div className="space-y-8">
      <fieldset>
        <legend className="text-[10px] tracking-[0.3em] text-[#A63D57] uppercase">
          Category
        </legend>
        <ul className="mt-3 grid gap-1">
          {syCategories.map((category) => {
            const count = syProducts.filter((product) =>
              syProductMatchesCategory(product, category.key),
            ).length;
            const active = selected.includes(category.key);
            return (
              <li key={category.key}>
                <button
                  type="button"
                  onClick={() => onToggle(category.key)}
                  aria-pressed={active}
                  className={cn(
                    "flex w-full items-center justify-between gap-3 rounded-[2px] px-3 py-2.5 text-left text-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A63D57]",
                    active
                      ? "bg-[#F6E9EA] text-[#A63D57]"
                      : "text-[#4B2C3B] hover:bg-[#F6F1ED]",
                  )}
                >
                  <span className="inline-flex items-center gap-2.5">
                    <span
                      className={cn(
                        "grid h-4 w-4 place-items-center rounded-[3px] border transition",
                        active
                          ? "border-[#A63D57] bg-[#A63D57] text-white"
                          : "border-[#D8CBC5] bg-white",
                      )}
                    >
                      {active ? <Check aria-hidden className="h-3 w-3" /> : null}
                    </span>
                    {category.label}
                  </span>
                  <span className="text-[11px] text-[#9A8A90]">{count}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </fieldset>

      <fieldset>
        <legend className="text-[10px] tracking-[0.3em] text-[#A63D57] uppercase">
          Sort by
        </legend>
        <ul className="mt-3 grid gap-1">
          {SORT_OPTIONS.map((option) => (
            <li key={option.key}>
              <button
                type="button"
                onClick={() => onSortChange(option.key)}
                aria-pressed={sort === option.key}
                className={cn(
                  "flex w-full items-center gap-2.5 rounded-[2px] px-3 py-2.5 text-left text-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A63D57]",
                  sort === option.key
                    ? "bg-[#F6E9EA] text-[#A63D57]"
                    : "text-[#4B2C3B] hover:bg-[#F6F1ED]",
                )}
              >
                <span
                  className={cn(
                    "h-3.5 w-3.5 rounded-full border transition",
                    sort === option.key
                      ? "border-[5px] border-[#A63D57]"
                      : "border-[#D8CBC5]",
                  )}
                />
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      </fieldset>

      {showClear ? (
        <button
          type="button"
          onClick={onClear}
          className="w-full rounded-full border border-[#DCCFC9] px-5 py-3 text-[11px] font-medium tracking-[0.2em] text-[#4B2C3B] uppercase transition hover:bg-white"
        >
          Clear all filters
        </button>
      ) : null}

      <div className="rounded-[3px] bg-[#F6F1ED] p-4">
        <p className="text-[11px] leading-relaxed text-[#7A6A71]">
          This concept shows {syProductCount} representative pieces from the
          live catalogue. Browse the full store on{" "}
          <a
            href="https://sycollections.shop/collections/all"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A63D57] underline decoration-[#E4CFD4] underline-offset-4"
          >
            sycollections.shop
          </a>
          .
        </p>
      </div>
    </div>
  );
}

/** Small helper reused by collection headers for category artwork. */
export function CollectionMosaic({ category }: { category: SyCategory }) {
  const meta = getSyCategoryMeta(category);
  return (
    <SyImage
      src={meta.image}
      alt={meta.imageAlt}
      aspectClassName="aspect-[16/10] sm:aspect-[21/9]"
      className="rounded-[2px]"
      loading="eager"
    />
  );
}
