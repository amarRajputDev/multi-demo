"use client";

import { createContext, useContext, useMemo, useSyncExternalStore } from "react";
import {
  CIEL_PRODUCTS,
  formatPrice,
  type CielProduct,
} from "../products";
import {
  addToCart,
  clearCart,
  getCielServerSnapshot,
  getCielSnapshot,
  removeLine,
  setQuantity,
  subscribeCielStore,
  toggleWishlist,
  type CielCartLine,
} from "./store";

interface StoreValue {
  cart: CielCartLine[];
  wishlist: string[];
  hydrated: boolean;
  cartCount: number;
  subtotal: number;
  addToCart: (slug: string, size: string, quantity?: number) => void;
  setQuantity: (slug: string, size: string, quantity: number) => void;
  removeLine: (slug: string, size: string) => void;
  clearCart: () => void;
  toggleWishlist: (slug: string) => void;
  isWishlisted: (slug: string) => boolean;
  cartDetail: { line: CielCartLine; product: CielProduct; lineTotal: number }[];
}

const StoreContext = createContext<StoreValue | null>(null);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const state = useSyncExternalStore(
    subscribeCielStore,
    getCielSnapshot,
    getCielServerSnapshot,
  );

  const value = useMemo<StoreValue>(() => {
    const cartDetail = state.cart
      .map((line) => {
        const product = CIEL_PRODUCTS.find((item) => item.slug === line.slug);
        if (!product) return null;
        return { line, product, lineTotal: product.price * line.quantity };
      })
      .filter(
        (
          entry,
        ): entry is { line: CielCartLine; product: CielProduct; lineTotal: number } =>
          entry !== null,
      );

    return {
      cart: state.cart,
      wishlist: state.wishlist,
      hydrated: state.hydrated,
      cartCount: state.cart.reduce((total, line) => total + line.quantity, 0),
      subtotal: cartDetail.reduce((total, entry) => total + entry.lineTotal, 0),
      cartDetail,
      addToCart,
      setQuantity,
      removeLine,
      clearCart,
      toggleWishlist,
      isWishlisted: (slug: string) => state.wishlist.includes(slug),
    };
  }, [state]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useCielStore(): StoreValue {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useCielStore must be used inside StoreProvider");
  }
  return context;
}

export { formatPrice };
