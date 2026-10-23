"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { SyProduct } from "../products";
import { CartDrawer } from "./cart-drawer";
import { QuickViewDrawer } from "./quick-view";
import { SearchOverlay } from "./search-overlay";
import { Toast } from "./toast";
import { WishlistDrawer } from "./wishlist-drawer";

export interface CartLine {
  key: string;
  slug: string;
  name: string;
  price: number;
  image: string;
  imageAlt: string;
  size: string;
  qty: number;
}

interface ShopContextValue {
  cart: CartLine[];
  cartCount: number;
  subtotal: number;
  cartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (product: SyProduct, size: string, qty: number) => void;
  setQty: (key: string, qty: number) => void;
  removeLine: (key: string) => void;

  wishlist: string[];
  isWished: (slug: string) => boolean;
  toggleWishlist: (product: SyProduct) => void;
  wishlistOpen: boolean;
  openWishlist: () => void;
  closeWishlist: () => void;

  quickViewSlug: string | null;
  openQuickView: (slug: string) => void;
  closeQuickView: () => void;

  searchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;

  toast: { id: number; message: string } | null;
  showToast: (message: string) => void;
}

const ShopContext = createContext<ShopContextValue | null>(null);

/**
 * Client-side shop state for the concept: bag, wishlist, quick view, search
 * and feedback toasts. Nothing is persisted, sent anywhere, or connected to
 * the brand's store - it is local demonstration state only.
 */
export function ShopProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [quickViewSlug, setQuickViewSlug] = useState<string | null>(null);
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

  const addToCart = useCallback(
    (product: SyProduct, size: string, qty: number) => {
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
            price: product.price,
            image: product.image,
            imageAlt: product.imageAlt,
            size,
            qty,
          },
        ];
      });
      setQuickViewSlug(null);
      setCartOpen(true);
      showToast(`Added to bag - ${product.name}`);
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
    (product: SyProduct) => {
      setWishlist((current) => {
        const saved = current.includes(product.slug);
        showToast(
          saved
            ? `Removed from wishlist - ${product.name}`
            : `Saved to wishlist - ${product.name}`,
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
    const subtotal = cart.reduce(
      (total, line) => total + line.qty * line.price,
      0,
    );

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

      quickViewSlug,
      openQuickView: (slug: string) => setQuickViewSlug(slug),
      closeQuickView: () => setQuickViewSlug(null),

      searchOpen,
      openSearch: () => setSearchOpen(true),
      closeSearch: () => setSearchOpen(false),

      toast,
      showToast,
    };
  }, [
    cart,
    wishlist,
    cartOpen,
    wishlistOpen,
    searchOpen,
    quickViewSlug,
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
      <QuickViewDrawer />
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
