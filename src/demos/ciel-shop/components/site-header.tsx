"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Heart,
  Menu,
  Search,
  ShoppingBag,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { CIEL_PRODUCTS, formatPrice } from "../products";
import { CielImage } from "./ciel-image";
import { useCielStore } from "./store-provider";

const NAV = [
  { label: "Shop", href: "/demos/ciel-shop/shop" },
  { label: "Story", href: "/demos/ciel-shop#story" },
  { label: "Made to order", href: "/demos/ciel-shop#made-to-order" },
  { label: "Contact", href: "/demos/ciel-shop/contact" },
];

const INSTAGRAM = "https://www.instagram.com/ciel_shop.in/";

export function SiteHeader() {
  const { cartCount, wishlist, toggleWishlist, addToCart } = useCielStore();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const anyOpen = menuOpen || searchOpen || wishlistOpen;
    document.body.style.overflow = anyOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, searchOpen, wishlistOpen]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setSearchOpen(false);
        setWishlistOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const searchResults = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return [];
    return CIEL_PRODUCTS.filter(
      (product) =>
        product.name.toLowerCase().includes(needle) ||
        product.description.toLowerCase().includes(needle),
    ).slice(0, 5);
  }, [query]);

  const wishlistProducts = CIEL_PRODUCTS.filter((product) =>
    wishlist.includes(product.slug),
  );

  return (
    <>
      {/* Announcement strip */}
      <div className="border-b border-white/10 bg-[#0B0B0D] text-[#F4F1EC]/70">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 py-2 text-[10px] uppercase tracking-[0.18em] sm:px-6">
          <p className="truncate">Concept store · prices require confirmation</p>
          <p className="hidden shrink-0 sm:block">
            Free-form streetwear · made in small runs
          </p>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noreferrer noopener"
            className="shrink-0 text-[#A9D6E5] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A9D6E5]"
          >
            @ciel_shop.in
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0E0E10]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="grid h-9 w-9 place-items-center text-[#F4F1EC] lg:hidden"
            >
              <Menu aria-hidden className="h-5 w-5" />
            </button>

            <Link
              href="/demos/ciel-shop"
              className="flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A9D6E5]"
              aria-label="CIÈL home"
            >
              <span className="relative h-7 w-7 overflow-hidden rounded-full border border-white/20">
                <Image
                  src="/images/cielshop/brand-logo.png"
                  alt=""
                  fill
                  sizes="28px"
                  className="object-cover"
                />
              </span>
              <span className="ciel-wordmark text-lg leading-none">CIÈL</span>
            </Link>
          </div>

          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="ciel-underline text-[11px] uppercase tracking-[0.2em] text-[#F4F1EC]/80 transition-colors hover:text-[#F4F1EC] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A9D6E5]"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer noopener"
              className="ciel-underline inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.2em] text-[#F4F1EC]/80 transition-colors hover:text-[#F4F1EC]"
            >
              Instagram
              <ArrowUpRight aria-hidden className="h-3 w-3" />
            </a>
          </nav>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search products"
              className="grid h-9 w-9 place-items-center text-[#F4F1EC]/85 transition-colors hover:text-[#A9D6E5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A9D6E5]"
            >
              <Search aria-hidden className="h-4.5 w-4.5" />
            </button>
            <button
              type="button"
              onClick={() => setWishlistOpen(true)}
              aria-label={`Wishlist, ${wishlist.length} saved`}
              className="relative grid h-9 w-9 place-items-center text-[#F4F1EC]/85 transition-colors hover:text-[#A9D6E5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A9D6E5]"
            >
              <Heart aria-hidden className="h-4.5 w-4.5" />
              {wishlist.length > 0 ? (
                <span className="absolute -right-0.5 -top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-[#A9D6E5] px-1 text-[9px] font-bold text-[#0E0E10]">
                  {wishlist.length}
                </span>
              ) : null}
            </button>
            <Link
              href="/demos/ciel-shop/checkout"
              aria-label={`Bag, ${cartCount} items`}
              className="relative grid h-9 w-9 place-items-center text-[#F4F1EC]/85 transition-colors hover:text-[#A9D6E5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A9D6E5]"
            >
              <ShoppingBag aria-hidden className="h-4.5 w-4.5" />
              {cartCount > 0 ? (
                <span className="absolute -right-0.5 -top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-[#F4F1EC] px-1 text-[9px] font-bold text-[#0E0E10]">
                  {cartCount}
                </span>
              ) : null}
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile navigation drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[85] lg:hidden",
          menuOpen ? "" : "pointer-events-none",
        )}
        aria-hidden={!menuOpen}
      >
        <div
          className={cn(
            "absolute inset-0 bg-black/60 transition-opacity duration-300",
            menuOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setMenuOpen(false)}
        />
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className={cn(
            "absolute inset-y-0 left-0 flex w-[86%] max-w-sm flex-col bg-[#111113] px-6 py-5 transition-transform duration-300 ease-out",
            menuOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="flex items-center justify-between">
            <span className="ciel-wordmark text-lg">CIÈL</span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="grid h-9 w-9 place-items-center text-[#F4F1EC]"
            >
              <X aria-hidden className="h-5 w-5" />
            </button>
          </div>
          <nav aria-label="Mobile" className="mt-10 flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="font-ciel-display border-b border-white/10 py-4 text-2xl text-[#F4F1EC]"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer noopener"
              className="font-ciel-display border-b border-white/10 py-4 text-2xl text-[#F4F1EC]"
            >
              Instagram
            </a>
          </nav>
          <p className="mt-auto text-[10px] leading-relaxed text-[#8A8F96]">
            CIÈL concept store by Vizo Technology. Product data, prices and
            availability require confirmation.
          </p>
        </div>
      </div>

      {/* Search overlay */}
      {searchOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Search"
          className="fixed inset-0 z-[85] bg-black/70 backdrop-blur-sm"
          onClick={() => setSearchOpen(false)}
        >
          <div
            className="mx-auto mt-24 w-[92%] max-w-2xl bg-[#111113] p-5 sm:p-7"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <p className="text-[10px] uppercase tracking-[0.24em] text-[#8A8F96]">
                Search the archive
              </p>
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                aria-label="Close search"
                className="grid h-8 w-8 place-items-center text-[#F4F1EC]"
              >
                <X aria-hidden className="h-4 w-4" />
              </button>
            </div>
            <div className="relative mt-4">
              <Search
                aria-hidden
                className="pointer-events-none absolute left-0 top-1/2 h-5 w-5 -translate-y-1/2 text-[#8A8F96]"
              />
              <label htmlFor="ciel-overlay-search" className="sr-only">
                Search products
              </label>
              <input
                id="ciel-overlay-search"
                autoFocus
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search shirts, denim, co-ords…"
                className="w-full border-b border-white/20 bg-transparent py-3 pl-8 text-lg text-[#F4F1EC] placeholder:text-[#8A8F96]/70 focus:border-[#A9D6E5] focus:outline-none"
              />
            </div>

            <ul className="mt-5 divide-y divide-white/10">
              {query.trim() === "" ? (
                <li className="py-4 text-xs text-[#8A8F96]">
                  Start typing to search the 13 archived pieces.
                </li>
              ) : searchResults.length === 0 ? (
                <li className="py-4 text-xs text-[#8A8F96]">
                  No pieces match “{query}”.
                </li>
              ) : (
                searchResults.map((product) => (
                  <li key={product.id}>
                    <Link
                      href={`/demos/ciel-shop/products/${product.slug}`}
                      onClick={() => setSearchOpen(false)}
                      className="flex items-center gap-3 py-3 transition-colors hover:text-[#A9D6E5]"
                    >
                      <span className="relative h-12 w-12 shrink-0 overflow-hidden">
                        <CielImage
                          src={product.image}
                          alt={product.imageAlt}
                          sizes="48px"
                        />
                      </span>
                      <span className="flex-1 text-sm text-[#F4F1EC]">
                        {product.name}
                      </span>
                      <span className="text-xs text-[#8A8F96]">
                        {formatPrice(product.price)}
                      </span>
                    </Link>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      ) : null}

      {/* Wishlist drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[85]",
          wishlistOpen ? "" : "pointer-events-none",
        )}
        aria-hidden={!wishlistOpen}
      >
        <div
          className={cn(
            "absolute inset-0 bg-black/60 transition-opacity duration-300",
            wishlistOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setWishlistOpen(false)}
        />
        <aside
          role="dialog"
          aria-modal="true"
          aria-label="Wishlist"
          className={cn(
            "absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-[#111113] transition-transform duration-300 ease-out",
            wishlistOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#F4F1EC]">
              Wishlist · {wishlistProducts.length}
            </p>
            <button
              type="button"
              onClick={() => setWishlistOpen(false)}
              aria-label="Close wishlist"
              className="grid h-8 w-8 place-items-center text-[#F4F1EC]"
            >
              <X aria-hidden className="h-4 w-4" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-5">
            {wishlistProducts.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <Heart aria-hidden className="h-8 w-8 text-[#8A8F96]" />
                <p className="mt-4 text-sm text-[#F4F1EC]">Nothing saved yet.</p>
                <p className="mt-2 max-w-[14rem] text-xs text-[#8A8F96]">
                  Tap the heart on any piece to keep it here.
                </p>
                <Link
                  href="/demos/ciel-shop/shop"
                  onClick={() => setWishlistOpen(false)}
                  className="mt-6 border border-[#A9D6E5] px-5 py-2.5 text-[10px] uppercase tracking-[0.2em] text-[#A9D6E5] hover:bg-[#A9D6E5] hover:text-[#0E0E10]"
                >
                  Browse the collection
                </Link>
              </div>
            ) : (
              <ul className="divide-y divide-white/10">
                {wishlistProducts.map((product) => (
                  <li key={product.id} className="flex gap-3 py-4">
                    <Link
                      href={`/demos/ciel-shop/products/${product.slug}`}
                      onClick={() => setWishlistOpen(false)}
                      className="relative h-24 w-20 shrink-0 overflow-hidden"
                    >
                      <CielImage
                        src={product.image}
                        alt={product.imageAlt}
                        sizes="80px"
                      />
                    </Link>
                    <div className="flex flex-1 flex-col">
                      <Link
                        href={`/demos/ciel-shop/products/${product.slug}`}
                        onClick={() => setWishlistOpen(false)}
                        className="text-sm text-[#F4F1EC]"
                      >
                        {product.name}
                      </Link>
                      <span className="mt-1 text-xs text-[#8A8F96]">
                        {formatPrice(product.price)}
                      </span>
                      <div className="mt-auto flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => addToCart(product.slug, "M")}
                          className="text-[10px] uppercase tracking-[0.16em] text-[#A9D6E5] hover:underline"
                        >
                          Add to bag · M
                        </button>
                        <button
                          type="button"
                          onClick={() => toggleWishlist(product.slug)}
                          className="text-[10px] uppercase tracking-[0.16em] text-[#8A8F96] hover:text-[#F4F1EC]"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </aside>
      </div>
    </>
  );
}
