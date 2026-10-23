"use client";

import { KHALEEZI_PRODUCTS } from "../products";

export interface EnquiryItem {
  slug: string;
  size: string;
  qty: number;
}

export interface EnquirySnapshot {
  items: EnquiryItem[];
  wishlist: string[];
  hydrated: boolean;
}

const STORAGE_KEY = "khaleezi-designs:enquiry-v1";
const EMPTY: EnquirySnapshot = { items: [], wishlist: [], hydrated: false };

/**
 * Module-level store. Hydrating from localStorage outside React avoids a
 * setState-in-effect cascade while keeping the server snapshot identical to
 * the first client render.
 */
let snapshot: EnquirySnapshot = EMPTY;
let loaded = false;
const listeners = new Set<() => void>();

function commit(next: EnquirySnapshot) {
  snapshot = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    /* Storage blocked — the list still works for this session. */
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
    const parsed = JSON.parse(raw) as { items?: EnquiryItem[]; wishlist?: string[] };
    commit({
      items: Array.isArray(parsed.items)
        ? parsed.items.filter(
            (item) =>
              typeof item.slug === "string" &&
              typeof item.size === "string" &&
              typeof item.qty === "number" &&
              item.qty > 0 &&
              KHALEEZI_PRODUCTS.some((product) => product.slug === item.slug),
          )
        : [],
      wishlist: Array.isArray(parsed.wishlist)
        ? parsed.wishlist.filter((slug): slug is string =>
            KHALEEZI_PRODUCTS.some((product) => product.slug === slug),
          )
        : [],
      hydrated: true,
    });
  } catch {
    commit({ ...EMPTY, hydrated: true });
  }
}

export function subscribeEnquiry(listener: () => void): () => void {
  listeners.add(listener);
  if (!loaded) hydrate();
  return () => {
    listeners.delete(listener);
  };
}

export function getEnquirySnapshot(): EnquirySnapshot {
  return snapshot;
}

export function getEnquiryServerSnapshot(): EnquirySnapshot {
  return EMPTY;
}

export function addEnquiryItem(slug: string, size: string, qty = 1) {
  const existing = snapshot.items.find(
    (item) => item.slug === slug && item.size === size,
  );
  commit({
    ...snapshot,
    hydrated: true,
    items: existing
      ? snapshot.items.map((item) =>
          item.slug === slug && item.size === size
            ? { ...item, qty: Math.min(20, item.qty + qty) }
            : item,
        )
      : [...snapshot.items, { slug, size, qty }],
  });
}

export function setEnquiryQty(slug: string, size: string, qty: number) {
  commit({
    ...snapshot,
    hydrated: true,
    items:
      qty < 1
        ? snapshot.items.filter(
            (item) => !(item.slug === slug && item.size === size),
          )
        : snapshot.items.map((item) =>
            item.slug === slug && item.size === size
              ? { ...item, qty: Math.min(20, qty) }
              : item,
          ),
  });
}

export function removeEnquiryItem(slug: string, size: string) {
  commit({
    ...snapshot,
    hydrated: true,
    items: snapshot.items.filter(
      (item) => !(item.slug === slug && item.size === size),
    ),
  });
}

export function clearEnquiry() {
  commit({ ...snapshot, hydrated: true, items: [] });
}

export function toggleEnquiryWishlist(slug: string) {
  commit({
    ...snapshot,
    hydrated: true,
    wishlist: snapshot.wishlist.includes(slug)
      ? snapshot.wishlist.filter((item) => item !== slug)
      : [...snapshot.wishlist, slug],
  });
}
