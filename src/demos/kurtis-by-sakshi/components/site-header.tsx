"use client";

import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Heart, Menu, MessageCircle, Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { sakshiBrand, sakshiContact, sakshiNav } from "../data";
import { InstagramGlyph } from "./icons";
import { SakshiWordmark } from "./logo";
import { useScrollLock } from "./scroll-lock";
import { useShop } from "./shop-provider";

/**
 * Announcement strip + sticky navigation with search, wishlist and enquiry
 * entry points, plus an accessible mobile drawer menu. `usePathname` only
 * drives active-link styling, so the read lives in small <Suspense>-wrapped
 * children to keep the layout prerenderable under `cacheComponents`.
 */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lineCount, wishlist, openEnquiry, openWishlist, openSearch } =
    useShop();
  const reduce = useReducedMotion();

  useScrollLock("kbs-mobile-nav", menuOpen);

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
      <p className="bg-[#3B1F24] px-4 py-2 text-center text-[10px] font-medium tracking-[0.3em] text-[#F3E4DF] uppercase sm:text-[11px]">
        {sakshiBrand.announcement}
      </p>

      <header
        className={cn(
          "sticky top-0 z-50 border-b bg-[#FBF6EF]/92 backdrop-blur-md transition-shadow duration-300",
          scrolled
            ? "border-[#E9DDD4] shadow-[0_10px_30px_rgba(59,31,36,0.07)]"
            : "border-transparent",
        )}
      >
        <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-2">
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="kbs-mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-[#3B1F24] transition hover:bg-[#EFD9D5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8E3B47] lg:hidden"
            >
              {menuOpen ? (
                <X aria-hidden className="h-5 w-5" />
              ) : (
                <Menu aria-hidden className="h-5 w-5" />
              )}
            </button>

            <Link
              href="/demos/kurtis-by-sakshi"
              onClick={closeMenu}
              aria-label={`${sakshiBrand.name} home`}
              className="focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8E3B47]"
            >
              <SakshiWordmark size="sm" className="hidden sm:inline-flex" />
              <SakshiWordmark size="sm" className="sm:hidden" />
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
              label={`Enquiry list (${lineCount} items)`}
              onClick={openEnquiry}
              count={lineCount}
            >
              <MessageCircle aria-hidden className="h-[18px] w-[18px]" />
            </HeaderIconButton>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen ? (
            <motion.nav
              id="kbs-mobile-menu"
              aria-label="Mobile"
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -16 }}
              transition={{ duration: reduce ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 top-full max-h-[70vh] overflow-y-auto border-b border-[#E9DDD4] bg-[#FBF6EF] px-4 py-4 shadow-[0_18px_40px_rgba(59,31,36,0.12)] sm:px-6 lg:hidden"
            >
              <Suspense fallback={null}>
                <MobileNavSuspense onNavigate={closeMenu} />
              </Suspense>

              <div className="mt-4 grid gap-2 border-t border-[#E9DDD4] pt-4">
                <button
                  type="button"
                  onClick={() => {
                    closeMenu();
                    openSearch();
                  }}
                  className="flex items-center gap-3 rounded-2xl bg-white px-3 py-3 text-sm text-[#3B1F24] shadow-sm transition hover:bg-[#F6EEE6]"
                >
                  <Search aria-hidden className="h-4 w-4 text-[#8E3B47]" />
                  Search the collection
                </button>
                <a
                  href={sakshiContact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl bg-white px-3 py-3 text-sm text-[#3B1F24] shadow-sm transition hover:bg-[#F6EEE6]"
                >
                  <InstagramGlyph aria-hidden className="h-4 w-4 text-[#8E3B47]" />
                  Order on {sakshiContact.instagramHandle}
                </a>
              </div>
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </header>

      {/* Backdrop sits outside <header> so the header's backdrop-filter cannot
          change its fixed positioning; the panel itself is inside the header. */}
      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            className="fixed inset-0 z-40 bg-[#3B1F24]/45 backdrop-blur-[2px] lg:hidden"
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
  if (href === "/demos/kurtis-by-sakshi") return pathname === href;
  return pathname === href || pathname.startsWith(`${href}/`);
}

function PrimaryNav({ pathname }: { pathname: string | null }) {
  return (
    <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex xl:gap-2">
      {sakshiNav.map((item) => {
        const active = isActivePath(pathname, item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "rounded-full px-3 py-2 text-[11.5px] tracking-[0.16em] uppercase transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8E3B47]",
              active
                ? "bg-[#3B1F24] text-[#FBF6EF]"
                : "text-[#3B1F24] hover:bg-[#EFD9D5] hover:text-[#8E3B47]",
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
      {sakshiNav.map((item, index) => {
        const active = isActivePath(pathname, item.href);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onNavigate}
              aria-current={active ? "page" : undefined}
              className={cn(
                "flex items-center justify-between rounded-2xl px-3 py-3 text-[13px] tracking-[0.18em] uppercase transition",
                index === 0 && "border-b border-[#E9DDD4] pb-3",
                active
                  ? "bg-[#EFD9D5] text-[#8E3B47]"
                  : "text-[#3B1F24] hover:bg-[#F6EEE6]",
              )}
            >
              {item.label}
              <span aria-hidden className="font-sakshi-display text-xs text-[#C0AAA3]">
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
      className="relative grid h-10 w-10 place-items-center rounded-full text-[#3B1F24] transition hover:bg-[#EFD9D5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8E3B47]"
    >
      {children}
      {!hideCount && count > 0 ? (
        <span className="absolute -right-0.5 -top-0.5 grid min-w-4 place-items-center rounded-full bg-[#8E3B47] px-1 text-[9px] font-medium leading-4 text-white">
          {count > 9 ? "9+" : count}
        </span>
      ) : null}
    </button>
  );
}
