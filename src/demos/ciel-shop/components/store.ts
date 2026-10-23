"use client";

import { CIEL_PRODUCTS } from "../products";

export interface CielCartLine {
  slug: string;
  size: string;
  quantity: number;
}

export interface CielStoreSnapshot {
  cart: CielCartLine[];
  wishlist: string[];
  hydrated: boolean;
}

const STORAGE_KEY = "ciel-shop-demo-bag-v1";

const EMPTY: CielStoreSnapshot = { cart: [], wishlist: [], hydrated: false };

/**
 * A tiny external store. Keeping the bag outside React means the persisted
 * state can be read after hydration without a setState-in-effect cascade, and
 * the server snapshot stays byte-identical to the first client render.
 */
let snapshot: CielStoreSnapshot = EMPTY;
let loaded = false;
const listeners = new Set<() => void>();

function isCartLine(value: unknown): value is CielCartLine {
  if (!value || typeof value !== "object") return false;
  const line = value as Record<string, unknown>;
  return (
    typeof line.slug === "string" &&
    typeof line.size === "string" &&
    typeof line.quantity === "number" &&
    line.quantity > 0 &&
    CIEL_PRODUCTS.some((product) => product.slug === line.slug)
  );
}

function commit(next: CielStoreSnapshot) {
  snapshot = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    /* Storage blocked or full — the bag still works for this session. */
  }
  listeners.forEach((listener) => listener());
}

function hydrate() {
  loaded = true;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      commit({ ...EMPTY, hydrated: true });
      return;
    }
    const parsed = JSON.parse(raw) as Partial<CielStoreSnapshot>;
    commit({
      cart: Array.isArray(parsed.cart) ? parsed.cart.filter(isCartLine) : [],
      wishlist: Array.isArray(parsed.wishlist)
        ? parsed.wishlist.filter(
            (slug): slug is string =>
              typeof slug === "string" &&
              CIEL_PRODUCTS.some((product) => product.slug === slug),
          )
        : [],
      hydrated: true,
    });
  } catch {
    commit({ ...EMPTY, hydrated: true });
  }
}

export function subscribeCielStore(listener: () => void): () => void {
  listeners.add(listener);
  if (!loaded) hydrate();
  return () => {
    listeners.delete(listener);
  };
}

export function getCielSnapshot(): CielStoreSnapshot {
  return snapshot;
}

export function getCielServerSnapshot(): CielStoreSnapshot {
  return EMPTY;
}

export function addToCart(slug: string, size: string, quantity = 1) {
  const existing = snapshot.cart.find(
    (line) => line.slug === slug && line.size === size,
  );
  commit({
    ...snapshot,
    hydrated: true,
    cart: existing
      ? snapshot.cart.map((line) =>
          line.slug === slug && line.size === size
            ? { ...line, quantity: Math.min(99, line.quantity + quantity) }
            : line,
        )
      : [...snapshot.cart, { slug, size, quantity }],
  });
}

export function setQuantity(slug: string, size: string, quantity: number) {
  commit({
    ...snapshot,
    hydrated: true,
    cart:
      quantity <= 0
        ? snapshot.cart.filter(
            (line) => !(line.slug === slug && line.size === size),
          )
        : snapshot.cart.map((line) =>
            line.slug === slug && line.size === size
              ? { ...line, quantity: Math.min(99, quantity) }
              : line,
          ),
  });
}

export function removeLine(slug: string, size: string) {
  commit({
    ...snapshot,
    hydrated: true,
    cart: snapshot.cart.filter(
      (line) => !(line.slug === slug && line.size === size),
    ),
  });
}

export function clearCart() {
  commit({ ...snapshot, hydrated: true, cart: [] });
}

export function toggleWishlist(slug: string) {
  commit({
    ...snapshot,
    hydrated: true,
    wishlist: snapshot.wishlist.includes(slug)
      ? snapshot.wishlist.filter((item) => item !== slug)
      : [...snapshot.wishlist, slug],
  });
}
