"use client";

import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Heart, Menu, Search, ShoppingBag, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { syBrand, syContact, syNav } from "../data";
import { useScrollLock } from "./scroll-lock";
import { SyLogo } from "./logo";
import { useShop } from "./shop-provider";

/**
 * Announcement strip + compact sticky navigation with search, wishlist and bag
 * entry points, plus an accessible mobile menu.
 *
 * `usePathname` only drives active-link styling, so the read lives in small
 * children wrapped in <Suspense>. With `cacheComponents` enabled that keeps the
 * layout prerenderable for the demo's dynamic product and category routes.
 */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount, wishlist, openCart, openWishlist, openSearch } = useShop();
  const reduce = useReducedMotion();

  useScrollLock("sy-mobile-nav", menuOpen);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <p className="bg-[#2C1F26] px-4 py-2 text-center text-[10px] font-medium tracking-[0.34em] text-[#F4E4E4] uppercase sm:text-[11px]">
        {syBrand.announcement}
      </p>

      <header
        className={cn(
          "sticky top-0 z-50 border-b bg-[#FBF6F2]/90 backdrop-blur-md transition-shadow duration-300",
          scrolled
            ? "border-[#EADFDB] shadow-[0_10px_30px_rgba(44,31,38,0.07)]"
            : "border-transparent",
        )}
      >
        <div className="mx-auto flex max-w-[1360px] items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:gap-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-2">
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="sy-mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-[#2C1F26] transition hover:bg-[#F3E9E4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A63D57] lg:hidden"
            >
              {menuOpen ? (
                <X aria-hidden className="h-5 w-5" />
              ) : (
                <Menu aria-hidden className="h-5 w-5" />
              )}
            </button>

            <Link
              href="/demos/sy-collections"
              onClick={closeMenu}
              aria-label={`${syBrand.name} home`}
              className="focus-visible:rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A63D57]"
            >
              <SyLogo size={40} priority />
            </Link>
          </div>

          <Suspense fallback={<PrimaryNav pathname={null} />}>
            <PrimaryNavSuspense />
          </Suspense>

          <div className="flex items-center gap-0.5 sm:gap-1">
            <HeaderIconButton
              label="Search"
              onClick={openSearch}
              count={0}
              hideCount
            >
              <Search aria-hidden className="h-[18px] w-[18px]" />
            </HeaderIconButton>

            <HeaderIconButton
              label={`Wishlist (${wishlist.length} saved)`}
              onClick={openWishlist}
              count={wishlist.length}
              tone="rose"
            >
              <Heart aria-hidden className="h-[18px] w-[18px]" />
            </HeaderIconButton>

            <HeaderIconButton
              label={`Shopping bag (${cartCount} items)`}
              onClick={openCart}
              count={cartCount}
              tone="ink"
            >
              <ShoppingBag aria-hidden className="h-[18px] w-[18px]" />
            </HeaderIconButton>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen ? (
            <motion.nav
              id="sy-mobile-menu"
              aria-label="Mobile"
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -16 }}
              transition={{
                duration: reduce ? 0 : 0.32,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-x-0 top-full max-h-[70vh] overflow-y-auto border-b border-[#EADFDB] bg-[#FBF6F2] px-4 py-4 shadow-[0_18px_40px_rgba(44,31,38,0.12)] sm:px-6 lg:hidden"
            >
              <Suspense fallback={null}>
                <MobileNavSuspense onNavigate={closeMenu} />
              </Suspense>

              <div className="mt-4 grid gap-2 border-t border-[#EFE5E1] pt-4">
                <button
                  type="button"
                  onClick={() => {
                    closeMenu();
                    openSearch();
                  }}
                  className="flex items-center gap-3 rounded-2xl bg-white px-3 py-3 text-sm text-[#4B2C3B] shadow-sm transition hover:bg-[#FBF7F4]"
                >
                  <Search aria-hidden className="h-4 w-4 text-[#A63D57]" />
                  Search the collection
                </button>
                <a
                  href={syContact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl bg-white px-3 py-3 text-sm text-[#4B2C3B] shadow-sm transition hover:bg-[#FBF7F4]"
                >
                  <Heart aria-hidden className="h-4 w-4 text-[#A63D57]" />
                  Follow {syContact.instagramHandle}
                </a>
              </div>
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </header>

      {/* Backdrop sits outside <header> so the header's backdrop-filter cannot
          change its fixed positioning; the panel itself is inside the header
          and therefore paints above it. */}
      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            className="fixed inset-0 z-40 bg-[#2C1F26]/45 backdrop-blur-[2px] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.25 }}
            onClick={closeMenu}
            aria-hidden
          />
        ) : null}
      </AnimatePresence>
    </>
  );
}

function isActivePath(pathname: string | null, href: string): boolean {
  if (!pathname) return false;
  if (href === "/demos/sy-collections") return pathname === href;
  return pathname === href || pathname.startsWith(`${href}/`);
}

/** Desktop primary nav; `pathname` is injected so the markup is reusable. */
function PrimaryNav({ pathname }: { pathname: string | null }) {
  return (
    <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex xl:gap-2">
      {syNav.map((item) => {
        const active = isActivePath(pathname, item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "rounded-full px-3 py-2 text-[11.5px] tracking-[0.16em] uppercase transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A63D57] xl:text-[12px]",
              active
                ? "bg-[#2C1F26] text-[#FBF6F2]"
                : "text-[#4B2C3B] hover:bg-[#F3E9E4] hover:text-[#A63D57]",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

function PrimaryNavSuspense() {
  const pathname = usePathname();
  return <PrimaryNav pathname={pathname} />;
}

/** Mobile menu link list; same injection pattern as the desktop nav. */
function MobileNavLinks({
  pathname,
  onNavigate,
}: {
  pathname: string | null;
  onNavigate: () => void;
}) {
  return (
    <ul className="grid gap-1">
      {syNav.map((item, index) => {
        const active = isActivePath(pathname, item.href);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onNavigate}
              aria-current={active ? "page" : undefined}
              className={cn(
                "flex items-center justify-between rounded-2xl px-3 py-3 text-[13px] tracking-[0.18em] uppercase transition",
                index === 0 && "border-b border-[#EFE5E1] pb-3",
                active
                  ? "bg-[#F6E9EA] text-[#A63D57]"
                  : "text-[#2C1F26] hover:bg-[#F3E9E4]",
              )}
            >
              {item.label}
              <span aria-hidden className="font-sy-display text-xs text-[#B9A7AD]">
                &rarr;
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

function MobileNavSuspense({ onNavigate }: { onNavigate: () => void }) {
  const pathname = usePathname();
  return <MobileNavLinks pathname={pathname} onNavigate={onNavigate} />;
}

function HeaderIconButton({
  label,
  onClick,
  count,
  tone = "plain",
  hideCount = false,
  children,
}: {
  label: string;
  onClick: () => void;
  count: number;
  tone?: "plain" | "rose" | "ink";
  hideCount?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="relative grid h-10 w-10 place-items-center rounded-full text-[#2C1F26] transition hover:bg-[#F3E9E4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A63D57]"
    >
      {children}
      {!hideCount && count > 0 ? (
        <span
          className={cn(
            "absolute -right-0.5 -top-0.5 grid min-w-4 place-items-center rounded-full px-1 text-[9px] font-medium leading-4 text-white",
            tone === "rose" ? "bg-[#A63D57]" : "bg-[#2C1F26]",
          )}
        >
          {count > 9 ? "9+" : count}
        </span>
      ) : null}
    </button>
  );
}
