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
import type { RevProduct } from "../products";
import { BagDrawer } from "./bag-drawer";
import { Toast } from "./toast";
import { WishlistDrawer } from "./wishlist-drawer";

export interface RevCartLine {
  key: string;
  slug: string;
  name: string;
  /** null = enquiry-only line ("Enquire for Price"). */
  price: number | null;
  image: string;
  imageAlt: string;
  tone: 1 | 2 | 3 | 4;
  size: string;
  qty: number;
}

interface ShopContextValue {
  cart: RevCartLine[];
  cartCount: number;
  /** Sum of priced lines only; enquiry lines are listed separately. */
  subtotal: number;
  pricedLines: RevCartLine[];
  enquiryLines: RevCartLine[];
  cartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (product: RevProduct, size: string, qty: number) => void;
  setQty: (key: string, qty: number) => void;
  removeLine: (key: string) => void;
  clearCart: () => void;

  wishlist: string[];
  isWished: (slug: string) => boolean;
  toggleWishlist: (product: RevProduct) => void;
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

/**
 * Client-side shop state for the concept: bag, wishlist, search and feedback
 * toasts. Nothing is persisted to a server or connected to the brand's
 * operations - it is local demonstration state only. Bag lines keep a
 * nullable price so enquiry-only pieces behave differently from priced ones.
 */
export function ShopProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<RevCartLine[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
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
    const timer = window.setTimeout(() => setToast(null), 2800);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const addToCart = useCallback(
    (product: RevProduct, size: string, qty: number) => {
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
            tone: product.tone,
            size,
            qty,
          },
        ];
      });
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

  const clearCart = useCallback(() => setCart([]), []);

  const toggleWishlist = useCallback(
    (product: RevProduct) => {
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
    const pricedLines = cart.filter((line) => line.price !== null);
    const enquiryLines = cart.filter((line) => line.price === null);
    const subtotal = pricedLines.reduce(
      (total, line) => total + line.qty * (line.price ?? 0),
      0,
    );

    return {
      cart,
      cartCount,
      subtotal,
      pricedLines,
      enquiryLines,
      cartOpen,
      openCart: () => setCartOpen(true),
      closeCart: () => setCartOpen(false),
      addToCart,
      setQty,
      removeLine,
      clearCart,

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
    cart,
    wishlist,
    cartOpen,
    wishlistOpen,
    searchOpen,
    toast,
    addToCart,
    setQty,
    removeLine,
    clearCart,
    toggleWishlist,
    showToast,
  ]);

  return (
    <ShopContext.Provider value={value}>
      {children}
      <BagDrawer />
      <WishlistDrawer />
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
