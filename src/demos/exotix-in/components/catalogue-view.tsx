"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { exotixCategories, exotixDemo, exotixHomeHref } from "../data";
import {
  EXOTIX_DATA_NOTE,
  exotixProducts,
  formatExotixPrice,
  type ExotixCategory,
  type ExotixProduct,
} from "../products";
import { ProductCard } from "./product-card";
import { useShop } from "./shop-provider";

type SortKey = "featured" | "price-asc" | "price-desc" | "name";

interface CatalogueViewProps {
  /** "all" or a single category key; drives the initial filter chip. */
  initialCategory?: ExotixCategory | "all";
  products?: ExotixProduct[];
}

/**
 * Interactive catalogue: live search, category chips, price sorting and an
 * empty state. All state is client-side; the dataset is the verified snapshot
 * defined in ../products.
 */
export function CatalogueView({
  initialCategory = "all",
  products = exotixProducts,
}: CatalogueViewProps) {
  const { searchQuery, setSearchQuery } = useShop();
  const [category, setCategory] = useState<ExotixCategory | "all">(
    initialCategory,
  );
  const [sort, setSort] = useState<SortKey>("featured");
  const [maxPrice, setMaxPrice] = useState<number>(3000);

  const visible = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    const filtered = products.filter((product) => {
      const matchesCategory =
        category === "all" ||
        product.category === category ||
        product.tags.includes(category);
      const matchesQuery =
        !query ||
        [product.name, product.code, product.category, product.drop]
          .join(" ")
          .toLowerCase()
          .includes(query);
      const matchesPrice = product.price === null || product.price <= maxPrice;
      return matchesCategory && matchesQuery && matchesPrice;
    });

    const sorted = [...filtered];
    switch (sort) {
      case "price-asc":
        sorted.sort((a, b) => (a.price ?? Infinity) - (b.price ?? Infinity));
        break;
      case "price-desc":
        sorted.sort((a, b) => (b.price ?? -1) - (a.price ?? -1));
        break;
      case "name":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        sorted.sort((a, b) => a.featuredRank - b.featuredRank);
    }
    return sorted;
  }, [products, category, searchQuery, sort, maxPrice]);

  const hasActiveFilters =
    category !== "all" || searchQuery.trim() !== "" || sort !== "featured" || maxPrice !== 3000;

  return (
    <div className="flex flex-col gap-8">
      {/* Controls */}
      <div className="flex flex-col gap-5 rounded-sm border border-[#232327] bg-[#101013] p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <label className="flex flex-1 items-center gap-3 border-b border-[#2A2A30] pb-3 focus-within:border-[#E23B2E]">
            <Search aria-hidden className="h-4 w-4 shrink-0 text-[#8A8A92]" />
            <span className="sr-only">Search products</span>
            <input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search by name, code or drop…"
              className="font-exotix-body w-full bg-transparent text-sm text-[#F2EFEA] placeholder:text-[#5A5A62] focus:outline-none"
            />
          </label>

          <div className="flex flex-wrap items-center gap-3">
            <label className="flex items-center gap-2">
              <SlidersHorizontal aria-hidden className="h-4 w-4 text-[#8A8A92]" />
              <span className="sr-only">Sort products</span>
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value as SortKey)}
                className="font-exotix-mono rounded-sm border border-[#2A2A30] bg-[#0C0C0E] px-3 py-2 text-[11px] tracking-[0.14em] text-[#B9BDC4] uppercase focus:border-[#E23B2E] focus:outline-none"
              >
                <option value="featured">Sort — Featured</option>
                <option value="price-asc">Price — Low to high</option>
                <option value="price-desc">Price — High to low</option>
                <option value="name">Name — A to Z</option>
              </select>
            </label>

            <label className="flex items-center gap-2">
              <span className="font-exotix-mono text-[10px] tracking-[0.16em] text-[#8A8A92] uppercase">
                Max ₹{maxPrice}
              </span>
              <input
                type="range"
                min={500}
                max={3000}
                step={100}
                value={maxPrice}
                onChange={(event) => setMaxPrice(Number(event.target.value))}
                className="accent-[#E23B2E]"
                aria-label="Maximum price in rupees"
              />
            </label>
          </div>
        </div>

        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          <FilterChip
            active={category === "all"}
            onClick={() => setCategory("all")}
            label="All lanes"
            count={products.length}
          />
          {exotixCategories.map((meta) => {
            const count = products.filter(
              (product) =>
                product.category === meta.key || product.tags.includes(meta.key),
            ).length;
            if (count === 0) return null;
            return (
              <FilterChip
                key={meta.key}
                active={category === meta.key}
                onClick={() => setCategory(meta.key)}
                label={meta.label}
                count={count}
              />
            );
          })}
          {hasActiveFilters ? (
            <button
              type="button"
              onClick={() => {
                setCategory("all");
                setSearchQuery("");
                setSort("featured");
                setMaxPrice(3000);
              }}
              className="font-exotix-mono inline-flex items-center gap-1.5 rounded-sm border border-[#2A2A30] px-3 py-2 text-[10px] tracking-[0.16em] text-[#8A8A92] uppercase transition hover:border-[#E23B2E] hover:text-[#F2EFEA]"
            >
              <X aria-hidden className="h-3 w-3" />
              Reset
            </button>
          ) : null}
        </div>
      </div>

      <p className="font-exotix-mono text-[10px] leading-relaxed tracking-[0.14em] text-[#8A8A92] uppercase">
        {EXOTIX_DATA_NOTE}
      </p>

      {/* Results */}
      {visible.length === 0 ? (
        <div className="rounded-sm border border-dashed border-[#2A2A30] bg-[#101013] px-8 py-16 text-center">
          <p className="font-exotix-display text-xl text-[#F2EFEA]">
            No pieces on this grid
          </p>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-[#8A8A92]">
            {exotixDemo.stockNotice} Try a different lane, clear the search, or
            raise the price ceiling.
          </p>
          <Link
            href={exotixHomeHref}
            className="mt-5 inline-block rounded-sm bg-[#E23B2E] px-6 py-3 text-xs font-medium tracking-[0.2em] text-[#F2EFEA] uppercase transition hover:bg-[#C7301F]"
          >
            Back to the paddock
          </Link>
        </div>
      ) : (
        <ul className="grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-3 lg:gap-x-7 xl:grid-cols-4">
          {visible.map((product, index) => (
            <li key={product.slug}>
              <ProductCard
                product={product}
                priority={index < 4}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </li>
          ))}
        </ul>
      )}

      {visible.length > 0 ? (
        <p className="font-exotix-mono text-[11px] tracking-[0.14em] text-[#5A5A62] uppercase">
          Showing {visible.length} of {products.length} snapshot pieces · prices
          observed 23.10.26 ·{" "}
          {visible.some((product) => product.price === null)
            ? "some pieces are enquire-only"
            : `range ₹${Math.min(...visible.map((product) => product.price ?? 0))}–₹${Math.max(...visible.map((product) => product.price ?? 0))}`}
        </p>
      ) : null}
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  label,
  count,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  count: number;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "font-exotix-mono rounded-sm border px-3.5 py-2 text-[10px] tracking-[0.16em] uppercase transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E23B2E]",
        active
          ? "border-[#E23B2E] bg-[#E23B2E] text-[#F2EFEA]"
          : "border-[#2A2A30] text-[#B9BDC4] hover:border-[#E23B2E] hover:text-[#F2EFEA]",
      )}
    >
      {label}
      <span className={cn("ml-1.5", active ? "text-[#F2EFEA]/70" : "text-[#5A5A62]")}>
        {count}
      </span>
    </button>
  );
}

/** Compact formatted price helper used by sibling client components. */
export function formatPrice(value: number): string {
  return formatExotixPrice(value);
}
