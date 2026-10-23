"use client";

import {
  createContext,
  startTransition,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { ReactNode } from "react";
import type { ExotixProduct } from "../products";
import { CartDrawer } from "./cart-drawer";
import { SearchOverlay } from "./search-overlay";
import { Toast } from "./toast";
import { WishlistDrawer } from "./wishlist-drawer";

export interface CartLine {
  key: string;
  slug: string;
  name: string;
  code: string;
  /** null when a listing publishes no confirmable price (enquire-only). */
  price: number | null;
  image: string;
  imageAlt: string;
  size: string;
  qty: number;
}

interface ShopContextValue {
  cart: CartLine[];
  cartCount: number;
  /** null when any bag line has an unconfirmed price. */
  subtotal: number | null;
  cartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (product: ExotixProduct, size: string, qty: number) => void;
  setQty: (key: string, qty: number) => void;
  removeLine: (key: string) => void;

  wishlist: string[];
  isWished: (slug: string) => boolean;
  toggleWishlist: (product: ExotixProduct) => void;
  wishlistOpen: boolean;
  openWishlist: () => void;
  closeWishlist: () => void;

  searchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
  /** Shared query string used by the search overlay and catalogue filters. */
  searchQuery: string;
  setSearchQuery: (value: string) => void;

  toast: { id: number; message: string } | null;
  showToast: (message: string) => void;
}

const ShopContext = createContext<ShopContextValue | null>(null);

const WISHLIST_KEY = "exotix-in-wishlist";

/**
 * Client-side shop state for the concept: bag, wishlist, search and feedback
 * toasts. Wishlist slugs persist to localStorage on this device only. Nothing
 * is sent anywhere or connected to the brand's store - demonstration state.
 */
export function ShopProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [toast, setToast] = useState<{ id: number; message: string } | null>(
    null,
  );
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(WISHLIST_KEY);
      if (stored) {
        const parsed: unknown = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          startTransition(() => {
            setWishlist(
              parsed.filter((item): item is string => typeof item === "string"),
            );
          });
        }
      }
    } catch {
      /* localStorage unavailable - wishlist simply stays in memory. */
    }
    startTransition(() => setHydrated(true));
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
    } catch {
      /* Ignore write failures - demonstration state only. */
    }
  }, [wishlist, hydrated]);

  const showToast = useCallback((message: string) => {
    setToast({ id: Date.now(), message });
  }, []);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(null), 2600);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const addToCart = useCallback(
    (product: ExotixProduct, size: string, qty: number) => {
      const key = `${product.slug}:${size}`;
      setCart((current) => {
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
            code: product.code,
            price: product.price,
            image: product.image,
            imageAlt: product.imageAlt,
            size,
            qty,
          },
        ];
      });
      setCartOpen(true);
      showToast(`Added to bag — ${product.name}`);
    },
    [showToast],
  );

  const setQty = useCallback((key: string, qty: number) => {
    setCart((current) =>
      qty < 1
        ? current.filter((line) => line.key !== key)
        : current.map((line) => (line.key === key ? { ...line, qty } : line)),
    );
  }, []);

  const removeLine = useCallback((key: string) => {
    setCart((current) => current.filter((line) => line.key !== key));
  }, []);

  const toggleWishlist = useCallback(
    (product: ExotixProduct) => {
      setWishlist((current) => {
        const saved = current.includes(product.slug);
        showToast(
          saved
            ? `Removed from saved list — ${product.name}`
            : `Saved — ${product.name}`,
        );
        return saved
          ? current.filter((slug) => slug !== product.slug)
          : [...current, product.slug];
      });
    },
    [showToast],
  );

  const value = useMemo<ShopContextValue>(() => {
    const cartCount = cart.reduce((total, line) => total + line.qty, 0);
    const allPriced = cart.every((line) => line.price !== null);
    const subtotal = allPriced
      ? cart.reduce((total, line) => total + line.qty * (line.price ?? 0), 0)
      : null;

    return {
      cart,
      cartCount,
      subtotal,
      cartOpen,
      openCart: () => setCartOpen(true),
      closeCart: () => setCartOpen(false),
      addToCart,
      setQty,
      removeLine,

      wishlist,
      isWished: (slug: string) => wishlist.includes(slug),
      toggleWishlist,
      wishlistOpen,
      openWishlist: () => setWishlistOpen(true),
      closeWishlist: () => setWishlistOpen(false),

      searchOpen,
      openSearch: () => setSearchOpen(true),
      closeSearch: () => setSearchOpen(false),
      searchQuery,
      setSearchQuery,

      toast,
      showToast,
    };
  }, [
    cart,
    wishlist,
    cartOpen,
    wishlistOpen,
    searchOpen,
    searchQuery,
    toast,
    addToCart,
    setQty,
    removeLine,
    toggleWishlist,
    showToast,
  ]);

  return (
    <ShopContext.Provider value={value}>
      {children}
      <CartDrawer />
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
