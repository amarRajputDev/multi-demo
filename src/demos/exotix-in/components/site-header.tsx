"use client";

import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Heart, Menu, Search, ShoppingBag, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { exotixBrand, exotixContact, exotixNav } from "../data";
import { useScrollLock } from "./scroll-lock";
import { useShop } from "./shop-provider";

/** Typographic wordmark - no logo file is downloaded or invented. */
export function ExotixWordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-exotix-display inline-flex items-baseline gap-1 leading-none tracking-[0.08em] text-[#F2EFEA] uppercase",
        className,
      )}
    >
      Exotix
      <span className="font-exotix-mono text-[0.55em] tracking-[0.3em] text-[#E23B2E]">
        IN
      </span>
    </span>
  );
}

/**
 * Sticky motorsport-style navigation: announcement strip, numbered desktop
 * links, search / saved / bag entry points and an accessible mobile drawer.
 *
 * `usePathname` only drives active-link styling, so the read lives in small
 * children wrapped in <Suspense>, keeping the layout prerenderable under
 * `cacheComponents` for the dynamic product and category routes.
 */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount, wishlist, openCart, openWishlist, openSearch } = useShop();

  useScrollLock("exotix-mobile-nav", menuOpen);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <p className="font-exotix-mono bg-[#E23B2E] px-4 py-2 text-center text-[10px] font-medium tracking-[0.28em] text-[#F2EFEA] uppercase sm:text-[11px]">
        {exotixBrand.announcement}
      </p>

      <header
        className={cn(
          "sticky top-0 z-50 border-b bg-[#0C0C0E]/92 backdrop-blur-md transition-shadow duration-300",
          scrolled
            ? "border-[#232327] shadow-[0_10px_30px_rgba(0,0,0,0.45)]"
            : "border-transparent",
        )}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:gap-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-2">
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="exotix-mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-sm text-[#F2EFEA] transition hover:bg-[#1A1A1E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E23B2E] lg:hidden"
            >
              {menuOpen ? (
                <X aria-hidden className="h-5 w-5" />
              ) : (
                <Menu aria-hidden className="h-5 w-5" />
              )}
            </button>

            <Link
              href="/demos/exotix-in"
              onClick={closeMenu}
              aria-label={`${exotixBrand.name} home`}
              className="focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E23B2E]"
            >
              <ExotixWordmark className="text-lg sm:text-xl" />
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
              label={`Saved list (${wishlist.length} pieces)`}
              onClick={openWishlist}
              count={wishlist.length}
            >
              <Heart aria-hidden className="h-[18px] w-[18px]" />
            </HeaderIconButton>
            <HeaderIconButton
              label={`Bag (${cartCount} items)`}
              onClick={openCart}
              count={cartCount}
            >
              <ShoppingBag aria-hidden className="h-[18px] w-[18px]" />
            </HeaderIconButton>
          </div>
        </div>

        {menuOpen ? (
          <nav
            id="exotix-mobile-menu"
            aria-label="Mobile"
            className="exotix-fade absolute inset-x-0 top-full max-h-[72vh] overflow-y-auto border-b border-[#232327] bg-[#0C0C0E] px-4 py-4 shadow-[0_18px_40px_rgba(0,0,0,0.5)] sm:px-6 lg:hidden"
          >
            <Suspense fallback={null}>
              <MobileNavSuspense onNavigate={closeMenu} />
            </Suspense>

            <div className="mt-4 grid gap-2 border-t border-[#232327] pt-4">
              <button
                type="button"
                onClick={() => {
                  closeMenu();
                  openSearch();
                }}
                className="flex items-center gap-3 rounded-sm bg-[#141416] px-3 py-3 text-sm text-[#F2EFEA] transition hover:bg-[#1A1A1E]"
              >
                <Search aria-hidden className="h-4 w-4 text-[#E23B2E]" />
                Search the grid
              </button>
              <a
                href={exotixContact.linkHub}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-sm bg-[#141416] px-3 py-3 text-sm text-[#F2EFEA] transition hover:bg-[#1A1A1E]"
              >
                <Heart aria-hidden className="h-4 w-4 text-[#E23B2E]" />
                {exotixContact.instagramHandle} &amp; link hub
              </a>
            </div>
          </nav>
        ) : null}
      </header>

      {/* Backdrop sits outside <header> so the header's backdrop-filter cannot
          change its fixed positioning; the panel itself is inside the header
          and therefore paints above it. */}
      {menuOpen ? (
        <div
          className="fixed inset-0 z-40 bg-[#0C0C0E]/60 backdrop-blur-[2px] lg:hidden"
          onClick={closeMenu}
          aria-hidden
        />
      ) : null}
    </>
  );
}

function isActivePath(pathname: string | null, href: string): boolean {
  if (!pathname) return false;
  if (href === "/demos/exotix-in") return pathname === href;
  return pathname === href || pathname.startsWith(`${href}/`);
}

function PrimaryNav({ pathname }: { pathname: string | null }) {
  return (
    <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex xl:gap-1">
      {exotixNav.map((item) => {
        const active = isActivePath(pathname, item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "group relative rounded-sm px-3 py-2 text-[11.5px] tracking-[0.16em] uppercase transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E23B2E] xl:text-[12px]",
              active
                ? "bg-[#E23B2E] text-[#F2EFEA]"
                : "text-[#B9BDC4] hover:bg-[#141416] hover:text-[#F2EFEA]",
            )}
          >
            <span
              className={cn(
                "font-exotix-mono mr-1.5 text-[9px] tracking-[0.2em]",
                active ? "text-[#F2EFEA]/80" : "text-[#5A5A62]",
              )}
              aria-hidden
            >
              {item.code}
            </span>
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
      {exotixNav.map((item) => {
        const active = isActivePath(pathname, item.href);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onNavigate}
              aria-current={active ? "page" : undefined}
              className={cn(
                "flex items-center justify-between rounded-sm px-3 py-3 text-[13px] tracking-[0.16em] uppercase transition",
                active
                  ? "bg-[#E23B2E] text-[#F2EFEA]"
                  : "text-[#F2EFEA] hover:bg-[#141416]",
              )}
            >
              <span>
                <span className="font-exotix-mono mr-2 text-[10px] text-[#8A8A92]">
                  {item.code}
                </span>
                {item.label}
              </span>
              <span aria-hidden className="font-exotix-mono text-xs text-[#5A5A62]">
                →
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
      className="relative grid h-10 w-10 place-items-center rounded-sm text-[#F2EFEA] transition hover:bg-[#1A1A1E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E23B2E]"
    >
      {children}
      {!hideCount && count > 0 ? (
        <span className="font-exotix-mono absolute -right-0.5 -top-0.5 grid min-w-4 place-items-center rounded-full bg-[#E23B2E] px-1 text-[9px] leading-4 text-[#F2EFEA]">
          {count > 9 ? "9+" : count}
        </span>
      ) : null}
    </button>
  );
}
