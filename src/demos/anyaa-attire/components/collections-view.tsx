"use client";

import { useMemo, useState } from "react";
import { Check, Search, SlidersHorizontal, X } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  anyaaCategories,
  anyaaDemo,
  getAnyaaCategoryMeta,
} from "../data";
import {
  anyaaProductCount,
  anyaaProductMatchesCategory,
  anyaaProducts,
  type AnyaaCategory,
} from "../products";
import { Drawer } from "./drawer";
import { ProductCard } from "./product-card";

type SortKey = "featured" | "price-asc" | "price-desc" | "name-asc";

const SORT_OPTIONS: { key: SortKey; label: string }[] = [
  { key: "featured", label: "Featured" },
  { key: "price-asc", label: "Price: low to high" },
  { key: "price-desc", label: "Price: high to low" },
  { key: "name-asc", label: "Name: A to Z" },
];

interface CollectionsViewProps {
  initialCategory?: AnyaaCategory | "all";
  /** Compact mode for the homepage browse section. */
  compact?: boolean;
}

/**
 * Catalogue experience: live search, category filtering with removable chips,
 * price sorting (enquire-for-price entries always sort last), a desktop filter
 * rail and a mobile filter sheet. All state is local demonstration state.
 */
export function CollectionsView({
  initialCategory = "all",
  compact = false,
}: CollectionsViewProps) {
  const [selected, setSelected] = useState<AnyaaCategory[]>(
    initialCategory === "all" ? [] : [initialCategory],
  );
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortKey>("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    const filtered = anyaaProducts.filter((product) => {
      const inCategory =
        selected.length === 0 ||
        selected.some((category) =>
          anyaaProductMatchesCategory(product, category),
        );
      if (!inCategory) return false;
      if (!needle) return true;

      const haystack = [
        product.name,
        getAnyaaCategoryMeta(product.category).label,
        ...product.tags.map((tag) => getAnyaaCategoryMeta(tag).label),
        product.description,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(needle);
    });

    const sorted = [...filtered];
    /** null prices always sort last in either direction - never invented. */
    const priceValue = (value: number | null) =>
      value === null ? Number.POSITIVE_INFINITY : value;
    if (sort === "price-asc")
      sorted.sort((a, b) => priceValue(a.price) - priceValue(b.price));
    else if (sort === "price-desc")
      sorted.sort((a, b) => {
        const pa = a.price === null ? -1 : a.price;
        const pb = b.price === null ? -1 : b.price;
        return pb - pa;
      });
    else if (sort === "name-asc")
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    else sorted.sort((a, b) => a.featuredRank - b.featuredRank);
    return sorted;
  }, [selected, query, sort]);

  const toggleCategory = (category: AnyaaCategory) =>
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
              className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6E7C77]"
            />
            <span className="sr-only">Search products</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search kurtis, florals, everyday..."
              className="font-anyaa-body w-full rounded-full border border-[#DFE7E2] bg-white py-3 pl-11 pr-4 text-sm text-[#22332F] placeholder:text-[#6E7C77]/70 transition focus:border-[#2E6F62] focus:outline-none"
            />
          </label>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setFiltersOpen(true)}
              className="font-anyaa-body inline-flex items-center gap-2 rounded-full border border-[#DFE7E2] bg-white px-4 py-3 text-[11px] font-medium tracking-[0.18em] text-[#22332F] uppercase transition hover:border-[#2E6F62] lg:hidden"
            >
              <SlidersHorizontal aria-hidden className="h-4 w-4" />
              Filters
              {selected.length > 0 ? (
                <span className="grid min-w-4 place-items-center rounded-full bg-[#2E6F62] px-1 text-[9px] leading-4 text-white">
                  {selected.length}
                </span>
              ) : null}
            </button>

            <label className="relative">
              <span className="sr-only">Sort products</span>
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value as SortKey)}
                className="font-anyaa-body h-full appearance-none rounded-full border border-[#DFE7E2] bg-white py-3 pl-4 pr-9 text-[11px] font-medium tracking-[0.14em] text-[#22332F] uppercase transition focus:border-[#2E6F62] focus:outline-none"
              >
                {SORT_OPTIONS.map((option) => (
                  <option key={option.key} value={option.key}>
                    {option.label}
                  </option>
                ))}
              </select>
              <span
                aria-hidden
                className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#6E7C77]"
              >
                &#9662;
              </span>
            </label>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-b border-[#DFE7E2] pb-4">
          <p className="font-anyaa-body text-[11px] tracking-[0.2em] text-[#6E7C77] uppercase">
            {results.length} of {anyaaProductCount} pieces
            {selected.length === 1
              ? ` - ${getAnyaaCategoryMeta(selected[0]).label}`
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
                  aria-label={`Remove ${getAnyaaCategoryMeta(category).label} filter`}
                  className="font-anyaa-body inline-flex items-center gap-1.5 rounded-full bg-[#D3E5DF]/70 px-3 py-1.5 text-[10px] tracking-[0.16em] text-[#2E6F62] uppercase transition hover:bg-[#D3E5DF]"
                >
                  {getAnyaaCategoryMeta(category).label}
                  <X aria-hidden className="h-3 w-3" />
                </button>
              ))}
              {query.trim() ? (
                <span className="font-anyaa-body inline-flex items-center gap-1.5 rounded-full bg-[#F2F5F1] px-3 py-1.5 text-[10px] tracking-[0.16em] text-[#22332F] uppercase">
                  &ldquo;{query.trim()}&rdquo;
                </span>
              ) : null}
              <button
                type="button"
                onClick={clearAll}
                className="font-anyaa-body text-[10px] font-medium tracking-[0.18em] text-[#22332F] uppercase underline decoration-[#DFE7E2] underline-offset-4 transition hover:text-[#2E6F62]"
              >
                Clear all
              </button>
            </div>
          ) : null}
        </div>

        {results.length > 0 ? (
          <ul
            className={cn(
              "mt-8 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-3 lg:gap-x-7",
              compact && "lg:grid-cols-3",
            )}
          >
            {results.map((product) => (
              <li key={product.slug}>
                <ProductCard product={product} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-10 rounded-[3px] border border-dashed border-[#DFE7E2] bg-white px-6 py-16 text-center">
            <p className="font-anyaa-display text-xl text-[#22332F]">
              No pieces match those filters
            </p>
            <p className="font-anyaa-body mx-auto mt-2 max-w-md text-sm leading-relaxed text-[#6E7C77]">
              Try another category or clear the filters to see all{" "}
              {anyaaProductCount} concept entries.
            </p>
            <button
              type="button"
              onClick={clearAll}
              className="font-anyaa-body mt-5 rounded-full bg-[#2E6F62] px-6 py-3 text-[11px] font-medium tracking-[0.2em] text-[#FAF8F3] uppercase transition hover:bg-[#22332F]"
            >
              Clear filters
            </button>
          </div>
        )}

        <p className="font-anyaa-body mt-10 border-t border-[#DFE7E2] pt-5 text-[11px] leading-relaxed text-[#6E7C77]">
          {anyaaDemo.disclosure} All entries are currently &quot;Enquire for
          Price&quot; - no pricing has been verified for this brand.
        </p>
      </div>

      {/* Mobile filter sheet */}
      <Drawer
        open={filtersOpen}
        onClose={() => setFiltersOpen(false)}
        lockKey="anyaa-filters"
        title="Filter & sort"
        subtitle={`${results.length} of ${anyaaProductCount} pieces`}
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
  selected: AnyaaCategory[];
  onToggle: (category: AnyaaCategory) => void;
  sort: SortKey;
  onSortChange: (sort: SortKey) => void;
  onClear: () => void;
  showClear: boolean;
}) {
  return (
    <div className="space-y-8">
      <fieldset>
        <legend className="font-anyaa-body text-[10px] tracking-[0.3em] text-[#2E6F62] uppercase">
          Category
        </legend>
        <ul className="font-anyaa-body mt-3 grid gap-1">
          {anyaaCategories.map((category) => {
            const count = anyaaProducts.filter((product) =>
              anyaaProductMatchesCategory(product, category.key),
            ).length;
            const active = selected.includes(category.key);
            return (
              <li key={category.key}>
                <button
                  type="button"
                  onClick={() => onToggle(category.key)}
                  aria-pressed={active}
                  className={cn(
                    "flex w-full items-center justify-between gap-3 rounded-[2px] px-3 py-2.5 text-left text-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2E6F62]",
                    active
                      ? "bg-[#D3E5DF]/70 text-[#2E6F62]"
                      : "text-[#22332F] hover:bg-[#F2F5F1]",
                  )}
                >
                  <span className="inline-flex items-center gap-2.5">
                    <span
                      className={cn(
                        "grid h-4 w-4 place-items-center rounded-[3px] border transition",
                        active
                          ? "border-[#2E6F62] bg-[#2E6F62] text-white"
                          : "border-[#DFE7E2] bg-white",
                      )}
                    >
                      {active ? <Check aria-hidden className="h-3 w-3" /> : null}
                    </span>
                    {category.label}
                  </span>
                  <span className="text-[11px] text-[#6E7C77]">{count}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </fieldset>

      <fieldset>
        <legend className="font-anyaa-body text-[10px] tracking-[0.3em] text-[#2E6F62] uppercase">
          Sort by
        </legend>
        <ul className="font-anyaa-body mt-3 grid gap-1">
          {SORT_OPTIONS.map((option) => (
            <li key={option.key}>
              <button
                type="button"
                onClick={() => onSortChange(option.key)}
                aria-pressed={sort === option.key}
                className={cn(
                  "flex w-full items-center gap-2.5 rounded-[2px] px-3 py-2.5 text-left text-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2E6F62]",
                  sort === option.key
                    ? "bg-[#D3E5DF]/70 text-[#2E6F62]"
                    : "text-[#22332F] hover:bg-[#F2F5F1]",
                )}
              >
                <span
                  className={cn(
                    "h-3.5 w-3.5 rounded-full border transition",
                    sort === option.key
                      ? "border-[5px] border-[#2E6F62]"
                      : "border-[#DFE7E2]",
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
          className="font-anyaa-body w-full rounded-full border border-[#2E6F62]/40 px-5 py-3 text-[11px] font-medium tracking-[0.2em] text-[#22332F] uppercase transition hover:bg-white"
        >
          Clear all filters
        </button>
      ) : null}

      <div className="rounded-[3px] bg-[#F2F5F1] p-4">
        <p className="font-anyaa-body text-[11px] leading-relaxed text-[#6E7C77]">
          This concept shows {anyaaProductCount} representative entries. No
          official Anyaa Attire store was found during research - browse the
          brand&apos;s{" "}
          <a
            href="https://www.instagram.com/anyaa_attire/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2E6F62] underline decoration-[#DFE7E2] underline-offset-4"
          >
            Instagram
          </a>{" "}
          for current pieces.
        </p>
      </div>
    </div>
  );
}
