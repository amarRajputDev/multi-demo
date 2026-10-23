"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { ReactNode } from "react";
import type { SakshiProduct } from "../products";
import { EnquiryDrawer } from "./enquiry-drawer";
import { SearchOverlay } from "./search-overlay";
import { Toast } from "./toast";
import { WishlistDrawer } from "./wishlist-drawer";

export interface EnquiryLine {
  key: string;
  slug: string;
  name: string;
  /** Always null for this brand — pricing is enquiry-based. */
  price: null;
  image: string | null;
  imageAlt: string;
  tone: 1 | 2 | 3 | 4 | 5;
  size: string;
  qty: number;
}

interface ShopContextValue {
  /** Enquiry list doubles as the "bag" — nothing is purchased here. */
  lines: EnquiryLine[];
  lineCount: number;
  enquiryOpen: boolean;
  openEnquiry: () => void;
  closeEnquiry: () => void;
  addToList: (product: SakshiProduct, size: string, qty: number) => void;
  setQty: (key: string, qty: number) => void;
  removeLine: (key: string) => void;
  clearList: () => void;

  wishlist: string[];
  isWished: (slug: string) => boolean;
  toggleWishlist: (product: SakshiProduct) => void;
  wishlistOpen: boolean;
  openWishlist: () => void;
  closeWishlist: () => void;

  searchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;

  toast: { id: number; message: string } | null;
  showToast: (message: string) => void;
}

const ShopContext = createContext<ShopContextValue | null>(null);

const WISHLIST_KEY = "kbs-wishlist-v1";

/**
 * Client-side shop state for the concept: enquiry list (bag), wishlist,
 * search and toasts. The wishlist persists in localStorage; nothing is sent
 * anywhere. There is no checkout — ordering happens by Instagram DM.
 */
export function ShopProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<EnquiryLine[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [toast, setToast] = useState<{ id: number; message: string } | null>(
    null,
  );

  const showToast = useCallback((message: string) => {
    setToast({ id: Date.now(), message });
  }, []);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(null), 2600);
    return () => window.clearTimeout(timer);
  }, [toast]);

  useEffect(() => {
    // Deferred one tick so the first client paint matches the server HTML
    // (no hydration mismatch) while still hydrating the persisted wishlist.
    let cancelled = false;
    const timer = window.setTimeout(() => {
      if (cancelled) return;
      try {
        const raw = window.localStorage.getItem(WISHLIST_KEY);
        if (raw) {
          const parsed: unknown = JSON.parse(raw);
          if (Array.isArray(parsed)) {
            setWishlist(
              parsed.filter((item): item is string => typeof item === "string"),
            );
          }
        }
      } catch {
        // Ignore corrupt storage — wishlist simply starts empty.
      }
    }, 0);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
    } catch {
      // Storage may be unavailable (private mode); state still works in-memory.
    }
  }, [wishlist]);

  const addToList = useCallback(
    (product: SakshiProduct, size: string, qty: number) => {
      const key = `${product.slug}:${size}`;
      setLines((current) => {
        const existing = current.find((line) => line.key === key);
        if (existing) {
          return current.map((line) =>
            line.key === key ? { ...line, qty: line.qty + qty } : line,
          );
        }
        return [
          ...current,
          {
            key,
            slug: product.slug,
            name: product.name,
            price: null,
            image: product.image,
            imageAlt: product.imageAlt,
            tone: product.tone,
            size,
            qty,
          },
        ];
      });
      setEnquiryOpen(true);
      showToast(`Added to enquiry list — ${product.name}`);
    },
    [showToast],
  );

  const setQty = useCallback((key: string, qty: number) => {
    setLines((current) =>
      qty < 1
        ? current.filter((line) => line.key !== key)
        : current.map((line) => (line.key === key ? { ...line, qty } : line)),
    );
  }, []);

  const removeLine = useCallback((key: string) => {
    setLines((current) => current.filter((line) => line.key !== key));
  }, []);

  const clearList = useCallback(() => setLines([]), []);

  const toggleWishlist = useCallback(
    (product: SakshiProduct) => {
      setWishlist((current) => {
        const saved = current.includes(product.slug);
        showToast(
          saved
            ? `Removed from wishlist — ${product.name}`
            : `Saved to wishlist — ${product.name}`,
        );
        return saved
          ? current.filter((slug) => slug !== product.slug)
          : [...current, product.slug];
      });
    },
    [showToast],
  );

  const value = useMemo<ShopContextValue>(() => {
    return {
      lines,
      lineCount: lines.reduce((total, line) => total + line.qty, 0),
      enquiryOpen,
      openEnquiry: () => setEnquiryOpen(true),
      closeEnquiry: () => setEnquiryOpen(false),
      addToList,
      setQty,
      removeLine,
      clearList,

      wishlist,
      isWished: (slug: string) => wishlist.includes(slug),
      toggleWishlist,
      wishlistOpen,
      openWishlist: () => setWishlistOpen(true),
      closeWishlist: () => setWishlistOpen(false),

      searchOpen,
      openSearch: () => setSearchOpen(true),
      closeSearch: () => setSearchOpen(false),

      toast,
      showToast,
    };
  }, [
    lines,
    enquiryOpen,
    wishlist,
    wishlistOpen,
    searchOpen,
    toast,
    addToList,
    setQty,
    removeLine,
    clearList,
    toggleWishlist,
    showToast,
  ]);

  return (
    <ShopContext.Provider value={value}>
      {children}
      <EnquiryDrawer />
      <WishlistDrawer />
      <SearchOverlay />
      <Toast />
    </ShopContext.Provider>
  );
}

export function useShop(): ShopContextValue {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShop must be used inside <ShopProvider>");
  }
  return context;
}
