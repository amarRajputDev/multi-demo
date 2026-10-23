"use client";

import Link from "next/link";
import { useMemo } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Heart, X } from "lucide-react";
import { revHomeHref } from "../data";
import { formatRevPrice, getRevProduct } from "../products";
import { MonogramTile } from "./rev-image";
import { useScrollLock } from "./scroll-lock";
import { useShop } from "./shop-provider";

/** Slide-in wishlist listing every saved slug (localStorage-free session state). */
export function WishlistDrawer() {
  const { wishlist, wishlistOpen, closeWishlist, toggleWishlist } = useShop();
  const reduce = useReducedMotion();

  useScrollLock("rev-wishlist-drawer", wishlistOpen);

  const products = useMemo(
    () =>
      wishlist
        .map((slug) => getRevProduct(slug))
        .filter((product) => product !== undefined),
    [wishlist],
  );

  return (
    <AnimatePresence>
      {wishlistOpen ? (
        <>
          <motion.div
            className="fixed inset-0 z-[80] bg-[#1A1618]/45 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.25 }}
            onClick={closeWishlist}
            aria-hidden
          />
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label="Wishlist"
            initial={reduce ? { opacity: 0 } : { x: "100%" }}
            animate={reduce ? { opacity: 1 } : { x: 0 }}
            exit={reduce ? { opacity: 0 } : { x: "100%" }}
            transition={{ duration: reduce ? 0 : 0.36, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 right-0 z-[85] flex w-full max-w-[24rem] flex-col bg-[#FAF4F3] shadow-[0_0_60px_rgba(26,22,24,0.25)]"
          >
            <div className="flex items-center justify-between border-b border-[#E8D9DC] px-5 py-4">
              <p className="font-rev-heading text-sm text-[#1A1618]">
                Wishlist{" "}
                <span className="text-[#B4707F]">({products.length})</span>
              </p>
              <button
                type="button"
                onClick={closeWishlist}
                aria-label="Close wishlist"
                className="grid h-9 w-9 place-items-center rounded-[2px] text-[#1A1618] transition hover:bg-[#F3DCE1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B4707F]"
              >
                <X aria-hidden className="h-4 w-4" />
              </button>
            </div>

            {products.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
                <Heart aria-hidden className="h-8 w-8 text-[#B4707F]" />
                <p className="font-rev-heading text-lg text-[#1A1618]">
                  Nothing saved yet
                </p>
                <p className="text-sm leading-relaxed text-[#7C7073]">
                  Tap the heart on any piece to keep it here while you browse.
                </p>
                <Link
                  href={`${revHomeHref}/collections`}
                  onClick={closeWishlist}
                  className="mt-2 inline-flex rounded-[2px] bg-[#1A1618] px-6 py-3 text-[11px] font-semibold tracking-[0.22em] text-[#FAF4F3] uppercase transition hover:bg-[#B4707F]"
                >
                  Start browsing
                </Link>
              </div>
            ) : (
              <ul className="flex-1 overflow-y-auto px-5 py-4">
                {products.map((product) => (
                  <li
                    key={product.slug}
                    className="flex gap-3 border-b border-[#E8D9DC] py-4 last:border-b-0"
                  >
                    <Link
                      href={`${revHomeHref}/products/${product.slug}`}
                      onClick={closeWishlist}
                      className="h-24 w-20 shrink-0 overflow-hidden rounded-[2px] bg-[#F3DCE1]"
                    >
                      {product.image ? (
                        // eslint-disable-next-line @next/next/no-img-element -- remote-only demo images
                        <img
                          src={product.image}
                          alt={product.imageAlt}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <MonogramTile
                          label={product.name}
                          tone={product.tone}
                          compact
                        />
                      )}
                    </Link>
                    <div className="min-w-0 flex-1">
                      <Link
                        href={`${revHomeHref}/products/${product.slug}`}
                        onClick={closeWishlist}
                        className="font-rev-body text-sm font-semibold text-[#1A1618] transition hover:text-[#B4707F]"
                      >
                        {product.name}
                      </Link>
                      <p className="mt-1 text-[12px] text-[#B4707F]">
                        {formatRevPrice(product.price)}
                      </p>
                      <button
                        type="button"
                        onClick={() => toggleWishlist(product)}
                        className="mt-2 text-[10px] tracking-[0.18em] text-[#7C7073] uppercase underline underline-offset-4 transition hover:text-[#B4707F]"
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}
