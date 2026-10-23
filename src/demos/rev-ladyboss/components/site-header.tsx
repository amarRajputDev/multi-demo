"use client";

import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Heart, Menu, ShoppingBag, X } from "lucide-react";
import { InstagramGlyph } from "./icons";
import { cn } from "@/lib/utils";
import { revBrand, revContact, revNav } from "../data";
import { RevLogo } from "./logo";
import { useScrollLock } from "./scroll-lock";
import { useShop } from "./shop-provider";

/**
 * Announcement strip + sticky navigation with wishlist and bag entry points,
 * plus an accessible mobile drawer. `usePathname` only drives active-link
 * styling, so the read lives inside small children wrapped in <Suspense>
 * (required for prerendering under `cacheComponents`).
 */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount, wishlist, openCart, openWishlist } = useShop();
  const reduce = useReducedMotion();

  useScrollLock("rev-mobile-nav", menuOpen);

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
      <p className="bg-[#1A1618] px-4 py-2.5 text-center text-[10px] font-semibold tracking-[0.34em] text-[#F3DCE1] uppercase">
        {revBrand.announcement}
      </p>

      <header
        className={cn(
          "sticky top-0 z-50 border-b bg-[#FAF4F3]/92 backdrop-blur-md transition-shadow duration-300",
          scrolled
            ? "border-[#E8D9DC] shadow-[0_10px_30px_rgba(26,22,24,0.06)]"
            : "border-transparent",
        )}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:gap-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-2">
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="rev-mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-[2px] text-[#1A1618] transition hover:bg-[#F3DCE1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B4707F] lg:hidden"
            >
              {menuOpen ? (
                <X aria-hidden className="h-5 w-5" />
              ) : (
                <Menu aria-hidden className="h-5 w-5" />
              )}
            </button>

            <Link
              href="/demos/rev-ladyboss"
              onClick={closeMenu}
              aria-label={`${revBrand.name} home`}
              className="focus-visible:rounded-[2px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B4707F]"
            >
              <RevLogo size={40} priority />
            </Link>
          </div>

          <Suspense fallback={<PrimaryNav pathname={null} />}>
            <PrimaryNavSuspense />
          </Suspense>

          <div className="flex items-center gap-0.5 sm:gap-1">
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
              id="rev-mobile-menu"
              aria-label="Mobile"
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -16 }}
              transition={{
                duration: reduce ? 0 : 0.32,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-x-0 top-full max-h-[70vh] overflow-y-auto border-b border-[#E8D9DC] bg-[#FAF4F3] px-4 py-4 shadow-[0_18px_40px_rgba(26,22,24,0.12)] sm:px-6 lg:hidden"
            >
              <Suspense fallback={null}>
                <MobileNavSuspense onNavigate={closeMenu} />
              </Suspense>

              <div className="mt-4 grid gap-2 border-t border-[#E8D9DC] pt-4">
                <a
                  href={revContact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-[2px] bg-[#F3DCE1] px-3 py-3 text-sm text-[#1A1618] transition hover:bg-[#EBD0D7]"
                >
                  <InstagramGlyph aria-hidden className="h-4 w-4 text-[#B4707F]" />
                  Follow {revContact.instagramHandle}
                </a>
                <p className="px-1 text-[11px] leading-relaxed text-[#7C7073]">
                  {revBrand.orderLine}
                </p>
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
            className="fixed inset-0 z-40 bg-[#1A1618]/45 backdrop-blur-[2px] lg:hidden"
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
  if (href === "/demos/rev-ladyboss") return pathname === href;
  return pathname === href || pathname.startsWith(`${href}/`);
}

function PrimaryNav({ pathname }: { pathname: string | null }) {
  return (
    <nav
      aria-label="Primary"
      className="hidden items-center gap-1 lg:flex xl:gap-2"
    >
      {revNav.map((item) => {
        const active = isActivePath(pathname, item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "rounded-[2px] px-3 py-2 text-[11px] font-semibold tracking-[0.18em] uppercase transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B4707F] xl:text-[12px]",
              active
                ? "bg-[#1A1618] text-[#FAF4F3]"
                : "text-[#1A1618] hover:bg-[#F3DCE1] hover:text-[#B4707F]",
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

function MobileNavLinks({
  pathname,
  onNavigate,
}: {
  pathname: string | null;
  onNavigate: () => void;
}) {
  return (
    <ul className="grid gap-1">
      {revNav.map((item, index) => {
        const active = isActivePath(pathname, item.href);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onNavigate}
              aria-current={active ? "page" : undefined}
              className={cn(
                "flex items-center justify-between rounded-[2px] px-3 py-3 text-[13px] font-semibold tracking-[0.18em] uppercase transition",
                index === 0 && "border-b border-[#E8D9DC] pb-3",
                active
                  ? "bg-[#F3DCE1] text-[#1A1618]"
                  : "text-[#1A1618] hover:bg-[#F3DCE1]",
              )}
            >
              {item.label}
              <span aria-hidden className="font-rev-display text-xs text-[#B4707F]">
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
  children,
}: {
  label: string;
  onClick: () => void;
  count: number;
  tone?: "plain" | "rose" | "ink";
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="relative grid h-10 w-10 place-items-center rounded-[2px] text-[#1A1618] transition hover:bg-[#F3DCE1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B4707F]"
    >
      {children}
      {count > 0 ? (
        <span
          className={cn(
            "absolute -right-0.5 -top-0.5 grid min-w-4 place-items-center rounded-full px-1 text-[9px] font-semibold leading-4 text-white",
            tone === "rose" ? "bg-[#B4707F]" : "bg-[#1A1618]",
          )}
        >
          {count > 9 ? "9+" : count}
        </span>
      ) : null}
    </button>
  );
}
