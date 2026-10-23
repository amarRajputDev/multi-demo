"use client";

import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Heart, Menu, Search, ShoppingBag, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { anyaaBrand, anyaaContact, anyaaNav } from "../data";
import { AnyaaLogo } from "./logo";
import { useScrollLock } from "./scroll-lock";
import { useShop } from "./shop-provider";

/**
 * Announcement strip + compact sticky navigation with search, wishlist and bag
 * entry points, plus an accessible mobile drawer menu.
 *
 * `usePathname` only drives active-link styling, so the read lives in small
 * children wrapped in <Suspense> to keep the layout prerenderable under
 * `cacheComponents`.
 */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount, wishlist, openCart, openWishlist, openSearch } = useShop();
  const reduce = useReducedMotion();

  useScrollLock("anyaa-mobile-nav", menuOpen);

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
      <p className="font-anyaa-body bg-[#22332F] px-4 py-2 text-center text-[10px] font-medium tracking-[0.34em] text-[#D3E5DF] uppercase sm:text-[11px]">
        {anyaaBrand.announcement}
      </p>

      <header
        className={cn(
          "sticky top-0 z-50 border-b bg-[#FAF8F3]/92 backdrop-blur-md transition-shadow duration-300",
          scrolled
            ? "border-[#DFE7E2] shadow-[0_10px_30px_rgba(34,51,47,0.07)]"
            : "border-transparent",
        )}
      >
        <div className="mx-auto flex max-w-[1360px] items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:gap-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-2">
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="anyaa-mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-[#22332F] transition hover:bg-[#D3E5DF]/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2E6F62] lg:hidden"
            >
              {menuOpen ? (
                <X aria-hidden className="h-5 w-5" />
              ) : (
                <Menu aria-hidden className="h-5 w-5" />
              )}
            </button>

            <Link
              href="/demos/anyaa-attire"
              onClick={closeMenu}
              aria-label={`${anyaaBrand.name} home`}
              className="focus-visible:rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2E6F62]"
            >
              <AnyaaLogo size={40} priority />
            </Link>
          </div>

          <Suspense fallback={<PrimaryNav pathname={null} />}>
            <PrimaryNavSuspense />
          </Suspense>

          <div className="flex items-center gap-0.5 sm:gap-1">
            <HeaderIconButton label="Search" onClick={openSearch} count={0} hideCount>
              <Search aria-hidden className="h-[18px] w-[18px]" />
            </HeaderIconButton>

            <HeaderIconButton
              label={`Wishlist (${wishlist.length} saved)`}
              onClick={openWishlist}
              count={wishlist.length}
            >
              <Heart aria-hidden className="h-[18px] w-[18px]" />
            </HeaderIconButton>

            <HeaderIconButton
              label={`Shopping bag (${cartCount} items)`}
              onClick={openCart}
              count={cartCount}
            >
              <ShoppingBag aria-hidden className="h-[18px] w-[18px]" />
            </HeaderIconButton>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen ? (
            <motion.nav
              id="anyaa-mobile-menu"
              aria-label="Mobile"
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -16 }}
              transition={{
                duration: reduce ? 0 : 0.32,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-x-0 top-full max-h-[70vh] overflow-y-auto border-b border-[#DFE7E2] bg-[#FAF8F3] px-4 py-4 shadow-[0_18px_40px_rgba(34,51,47,0.12)] sm:px-6 lg:hidden"
            >
              <Suspense fallback={null}>
                <MobileNavSuspense onNavigate={closeMenu} />
              </Suspense>

              <div className="mt-4 grid gap-2 border-t border-[#DFE7E2] pt-4">
                <button
                  type="button"
                  onClick={() => {
                    closeMenu();
                    openSearch();
                  }}
                  className="font-anyaa-body flex items-center gap-3 rounded-2xl bg-white px-3 py-3 text-sm text-[#22332F] shadow-sm transition hover:bg-[#F2F5F1]"
                >
                  <Search aria-hidden className="h-4 w-4 text-[#2E6F62]" />
                  Search the collection
                </button>
                <a
                  href={anyaaContact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-anyaa-body flex items-center gap-3 rounded-2xl bg-white px-3 py-3 text-sm text-[#22332F] shadow-sm transition hover:bg-[#F2F5F1]"
                >
                  <Heart aria-hidden className="h-4 w-4 text-[#2E6F62]" />
                  Follow {anyaaContact.instagramHandle}
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
            className="fixed inset-0 z-40 bg-[#22332F]/45 backdrop-blur-[2px] lg:hidden"
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
  if (href === "/demos/anyaa-attire") return pathname === href;
  return pathname === href || pathname.startsWith(`${href}/`);
}

/** Desktop primary nav; `pathname` is injected so the markup is reusable. */
function PrimaryNav({ pathname }: { pathname: string | null }) {
  return (
    <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex xl:gap-2">
      {anyaaNav.map((item) => {
        const active = isActivePath(pathname, item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "font-anyaa-body rounded-full px-3 py-2 text-[11.5px] tracking-[0.16em] uppercase transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2E6F62] xl:text-[12px]",
              active
                ? "bg-[#2E6F62] text-[#FAF8F3]"
                : "text-[#22332F] hover:bg-[#D3E5DF]/60 hover:text-[#2E6F62]",
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
      {anyaaNav.map((item, index) => {
        const active = isActivePath(pathname, item.href);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onNavigate}
              aria-current={active ? "page" : undefined}
              className={cn(
                "font-anyaa-body flex items-center justify-between rounded-2xl px-3 py-3 text-[13px] tracking-[0.18em] uppercase transition",
                index === 0 && "border-b border-[#DFE7E2] pb-3",
                active
                  ? "bg-[#D3E5DF]/70 text-[#2E6F62]"
                  : "text-[#22332F] hover:bg-[#D3E5DF]/50",
              )}
            >
              {item.label}
              <span aria-hidden className="font-anyaa-display text-xs text-[#6E7C77]">
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
  hideCount = false,
  children,
}: {
  label: string;
  onClick: () => void;
  count: number;
  hideCount?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="relative grid h-10 w-10 place-items-center rounded-full text-[#22332F] transition hover:bg-[#D3E5DF]/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2E6F62]"
    >
      {children}
      {!hideCount && count > 0 ? (
        <span className="absolute -right-0.5 -top-0.5 grid min-w-4 place-items-center rounded-full bg-[#2E6F62] px-1 text-[9px] font-medium leading-4 text-white">
          {count > 9 ? "9+" : count}
        </span>
      ) : null}
    </button>
  );
}
