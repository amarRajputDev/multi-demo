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
import type { AnyaaProduct } from "../products";
import { CartDrawer } from "./cart-drawer";
import { SearchOverlay } from "./search-overlay";
import { Toast } from "./toast";
import { WishlistDrawer } from "./wishlist-drawer";

export interface CartLine {
  key: string;
  slug: string;
  name: string;
  /** null = enquire for price; such lines never enter the priced subtotal. */
  price: number | null;
  image: string | null;
  imageAlt: string;
  size: string;
  qty: number;
}

interface ShopContextValue {
  cart: CartLine[];
  cartCount: number;
  subtotal: number;
  /** Lines whose price is still "enquire for price". */
  unpricedCount: number;
  cartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (product: AnyaaProduct, size: string, qty: number) => void;
  setQty: (key: string, qty: number) => void;
  removeLine: (key: string) => void;

  wishlist: string[];
  isWished: (slug: string) => boolean;
  toggleWishlist: (product: AnyaaProduct) => void;
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

const WISHLIST_KEY = "anyaa-attire:wishlist";
const CART_KEY = "anyaa-attire:bag";

function safeParse<T>(raw: string | null): T | null {
  if (!raw) return null;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

/**
 * Client-side shop state for the concept: bag, wishlist, search and feedback
 * toasts. Wishlist and bag persist to localStorage on this device only - no
 * data is sent anywhere, and nothing is connected to the brand's business.
 */
export function ShopProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [toast, setToast] = useState<{ id: number; message: string } | null>(
    null,
  );

  useEffect(() => {
    const storedWishlist = safeParse<string[]>(window.localStorage.getItem(WISHLIST_KEY));
    const storedCart = safeParse<CartLine[]>(window.localStorage.getItem(CART_KEY));
    startTransition(() => {
      if (storedWishlist) setWishlist(storedWishlist);
      if (storedCart) setCart(storedCart);
      setHydrated(true);
    });
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  }, [wishlist, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart, hydrated]);

  const showToast = useCallback((message: string) => {
    setToast({ id: Date.now(), message });
  }, []);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(null), 2600);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const addToCart = useCallback(
    (product: AnyaaProduct, size: string, qty: number) => {
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
      setCartOpen(true);
      showToast(
        product.price === null
          ? `Added to bag (enquire for price) - ${product.name}`
          : `Added to bag - ${product.name}`,
      );
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
    (product: AnyaaProduct) => {
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
      (total, line) => total + (line.price === null ? 0 : line.qty * line.price),
      0,
    );
    const unpricedCount = cart.filter((line) => line.price === null).length;

    return {
      cart,
      cartCount,
      subtotal,
      unpricedCount,
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
