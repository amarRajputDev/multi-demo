"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { revCategories, revHomeHref } from "../data";
import {
  REV_DATA_NOTE,
  revProducts,
  revProductMatchesCategory,
  type RevCategory,
  type RevProduct,
} from "../products";
import { ProductCard } from "./product-card";

type SortKey = "featured" | "name-asc" | "name-desc" | "price-asc" | "price-desc";

const SORT_OPTIONS: { key: SortKey; label: string }[] = [
  { key: "featured", label: "Featured" },
  { key: "name-asc", label: "Name: A - Z" },
  { key: "name-desc", label: "Name: Z - A" },
  { key: "price-asc", label: "Price: low to high" },
  { key: "price-desc", label: "Price: high to low" },
];

interface ProductBrowserProps {
  /** Optional category pre-filter (collection routes pass their own key). */
  initialCategory?: RevCategory | null;
  className?: string;
}

/**
 * Client-side product browser: live search, category chips and sorting.
 * Every piece in this concept is enquiry-priced (price === null), so price
 * sorts keep null-priced items in stable featured order and the honesty note
 * below the toolbar explains why.
 */
export function ProductBrowser({
  initialCategory = null,
  className,
}: ProductBrowserProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<RevCategory | null>(initialCategory);
  const [sort, setSort] = useState<SortKey>("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = revProducts.filter((product) => {
      const matchesQuery =
        q === "" ||
        product.name.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q) ||
        product.category.replace("-", " ").includes(q);
      const matchesCategory =
        category === null || revProductMatchesCategory(product, category);
      return matchesQuery && matchesCategory;
    });

    const sorted = [...filtered];
    switch (sort) {
      case "name-asc":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "price-asc":
      case "price-desc":
        // null prices (enquiry-only) always sort last; order is otherwise stable.
        sorted.sort((a, b) => {
          if (a.price === null && b.price === null) return 0;
          if (a.price === null) return 1;
          if (b.price === null) return -1;
          return sort === "price-asc"
            ? a.price - b.price
            : b.price - a.price;
        });
        break;
      default:
        sorted.sort((a, b) => a.featuredRank - b.featuredRank);
    }
    return sorted;
  }, [query, category, sort]);

  return (
    <div className={className}>
      <div className="flex flex-col gap-3 border-y border-[#E8D9DC] py-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search
            aria-hidden
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#B4707F]"
          />
          <label htmlFor="rev-product-search" className="sr-only">
            Search pieces
          </label>
          <input
            id="rev-product-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search tunics, maxis, denim..."
            className="w-full rounded-[2px] border border-[#E8D9DC] bg-white py-3 pl-10 pr-10 text-sm text-[#1A1618] placeholder:text-[#9C8D93] focus:border-[#B4707F] focus:outline-none"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute right-2 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center text-[#7C7073] transition hover:text-[#B4707F]"
            >
              <X aria-hidden className="h-3.5 w-3.5" />
            </button>
          ) : null}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setFiltersOpen((open) => !open)}
            aria-expanded={filtersOpen}
            aria-controls="rev-filter-panel"
            className="inline-flex items-center gap-2 rounded-[2px] border border-[#E8D9DC] bg-white px-4 py-3 text-[11px] font-semibold tracking-[0.18em] text-[#1A1618] uppercase transition hover:border-[#B4707F] sm:hidden"
          >
            <SlidersHorizontal aria-hidden className="h-3.5 w-3.5" />
            Filters
          </button>

          <div className="hidden flex-wrap items-center gap-2 sm:flex">
            <FilterChips category={category} onSelect={setCategory} />
          </div>

          <label htmlFor="rev-sort" className="sr-only">
            Sort pieces
          </label>
          <select
            id="rev-sort"
            value={sort}
            onChange={(event) => setSort(event.target.value as SortKey)}
            className="rounded-[2px] border border-[#E8D9DC] bg-white px-3 py-3 text-[12px] text-[#1A1618] focus:border-[#B4707F] focus:outline-none"
          >
            {SORT_OPTIONS.map((option) => (
              <option key={option.key} value={option.key}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div
        id="rev-filter-panel"
        className={cn(
          "flex-wrap gap-2 sm:hidden",
          filtersOpen ? "flex py-3" : "hidden",
        )}
      >
        <FilterChips category={category} onSelect={setCategory} />
      </div>

      <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[11px] tracking-[0.2em] text-[#7C7073] uppercase">
          {results.length} {results.length === 1 ? "piece" : "pieces"}
          {category ? ` in ${category.replace("-", " ")}` : ""}
        </p>
        <Link
          href={`${revHomeHref}/contact`}
          className="text-[11px] tracking-[0.14em] text-[#B4707F] uppercase underline underline-offset-4 transition hover:text-[#1A1618]"
        >
          Need pricing? Send an enquiry
        </Link>
      </div>

      {results.length === 0 ? (
        <div className="mt-10 rounded-[2px] border border-dashed border-[#E8D9DC] bg-white/60 px-6 py-14 text-center">
          <p className="font-rev-heading text-xl text-[#1A1618]">
            No pieces match
          </p>
          <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-[#7C7073]">
            Try a different word, or clear the filters to see the full
            demonstration lookbook.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory(null);
              setSort("featured");
            }}
            className="mt-5 inline-flex rounded-[2px] bg-[#1A1618] px-5 py-3 text-[11px] font-semibold tracking-[0.2em] text-[#FAF4F3] uppercase transition hover:bg-[#B4707F]"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <ProductGrid products={results} className="mt-9" />
      )}

      <p className="mt-8 text-[11px] leading-relaxed text-[#7C7073]">
        {REV_DATA_NOTE}
      </p>
    </div>
  );
}

function FilterChips({
  category,
  onSelect,
}: {
  category: RevCategory | null;
  onSelect: (category: RevCategory | null) => void;
}) {
  return (
    <>
      <Chip active={category === null} onClick={() => onSelect(null)}>
        All pieces
      </Chip>
      {revCategories.map((entry) => (
        <Chip
          key={entry.key}
          active={category === entry.key}
          onClick={() =>
            onSelect(category === entry.key ? null : entry.key)
          }
        >
          {entry.label}
        </Chip>
      ))}
    </>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-[2px] border px-3.5 py-2.5 text-[10.5px] font-semibold tracking-[0.18em] uppercase transition sm:py-2",
        active
          ? "border-[#1A1618] bg-[#1A1618] text-[#FAF4F3]"
          : "border-[#E8D9DC] bg-white text-[#1A1618] hover:border-[#B4707F] hover:text-[#B4707F]",
      )}
    >
      {children}
    </button>
  );
}

/** Responsive editorial grid with an asymmetric first-row rhythm. */
export function ProductGrid({
  products,
  className,
}: {
  products: RevProduct[];
  className?: string;
}) {
  return (
    <ul
      className={cn(
        "grid grid-cols-2 gap-x-5 gap-y-12 sm:gap-x-7 lg:grid-cols-3 lg:gap-x-9",
        className,
      )}
    >
      {products.map((product, index) => (
        <li
          key={product.slug}
          className={cn(
            index === 0 && "lg:col-span-2 lg:row-span-1",
          )}
        >
          <ProductCard
            product={product}
            delay={Math.min(index, 4) * 0.05}
            sizes="(max-width: 640px) 50vw, 33vw"
            className={cn(index === 0 && "lg:[&>a>div]:aspect-[16/11]")}
          />
        </li>
      ))}
    </ul>
  );
}
