"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Phone, Search, ShoppingBag } from "lucide-react";
import { MobileNav } from "@/components/shared/mobile-nav";
import { cn } from "@/lib/utils";
import {
  tmCollectionNav,
  tmContact,
  tmHomeHref,
  tmMobileNav,
  tmPrimaryNav,
} from "../data";
import { BrandMark } from "./brand-mark";
import { useTmEnquiry } from "./enquiry-provider";
import { SearchDialog } from "./search-dialog";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  /**
   * The dropdown's open state is keyed to the pathname it was opened on, so
   * navigating closes it through rendering alone — no setState-in-effect.
   */
  const [collectionsPath, setCollectionsPath] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const collectionsRef = useRef<HTMLDivElement>(null);
  const { count, openDrawer } = useTmEnquiry();

  const collectionsOpen =
    collectionsPath !== null && collectionsPath === pathname;
  const toggleCollections = () =>
    setCollectionsPath(collectionsOpen ? null : pathname);
  const closeCollections = useCallback(() => setCollectionsPath(null), []);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!collectionsOpen) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") closeCollections();
    }
    function onClick(event: MouseEvent) {
      if (
        collectionsRef.current &&
        !collectionsRef.current.contains(event.target as Node)
      ) {
        closeCollections();
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [collectionsOpen, closeCollections]);

  const desktopNav = tmPrimaryNav.filter(
    (item) => item.href !== tmHomeHref,
  );

  return (
    <>
    <header
      className={cn(
        "sticky top-0 z-50 bg-[#FAF7F2]/95 backdrop-blur-md transition-shadow duration-300",
        scrolled
          ? "shadow-[0_1px_0_rgba(28,26,23,0.16)]"
          : "border-b border-[#1C1A17]/10",
      )}
    >
      <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link
          href={tmHomeHref}
          className="group flex min-h-11 items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B23B2E]"
          aria-label="TM SONS — home"
        >
          <BrandMark size={38} priority />
          <span className="hidden flex-col items-start sm:flex">
            <span className="font-tmsons-display text-[1.05rem] leading-none tracking-[0.3em] text-[#1C1A17] uppercase">
              TM SONS
            </span>
            <span className="mt-1.5 text-[9px] leading-none tracking-[0.3em] text-[#6F6A61] uppercase">
              Ludhiana · Wholesale
            </span>
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-7 xl:flex"
        >
          {desktopNav.slice(0, 1).map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}

          <div ref={collectionsRef} className="relative">
            <button
              type="button"
              aria-expanded={collectionsOpen}
              aria-haspopup="true"
              onClick={toggleCollections}
              className="flex min-h-11 items-center gap-1.5 text-[12px] tracking-[0.16em] text-[#6F6A61] uppercase transition-colors hover:text-[#1C1A17] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B23B2E]"
            >
              Collections
              <ChevronDown
                aria-hidden
                className={cn(
                  "h-3.5 w-3.5 transition-transform duration-300",
                  collectionsOpen && "rotate-180",
                )}
              />
            </button>

            {collectionsOpen && (
              <div className="absolute left-1/2 top-full z-10 w-[min(32rem,80vw)] -translate-x-1/2 pt-3">
                <div className="border border-[#1C1A17]/12 bg-[#FFFDFA] p-3 shadow-xl">
                  <p className="px-2 pb-2 text-[9px] tracking-[0.24em] text-[#B23B2E] uppercase">
                    Shop by collection
                  </p>
                  <ul className="grid grid-cols-2 gap-1">
                    {tmCollectionNav.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={closeCollections}
                          className={cn(
                            "block px-2.5 py-2.5 text-[13px] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B23B2E]",
                            pathname === link.href
                              ? "bg-[#B23B2E]/10 text-[#B23B2E]"
                              : "text-[#1C1A17] hover:bg-[#1C1A17]/5",
                          )}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {desktopNav.slice(1).map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <a
            href={tmContact.phones[0].telHref}
            className="mr-1 hidden items-center gap-2 border border-[#1C1A17]/20 px-3.5 py-2.5 text-[11px] tracking-[0.14em] text-[#1C1A17] uppercase transition-colors hover:border-[#B23B2E] hover:text-[#B23B2E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B23B2E] lg:inline-flex"
          >
            <Phone aria-hidden className="h-3.5 w-3.5" />
            {tmContact.phones[0].display}
          </a>

          <IconButton
            label="Search catalogue"
            onClick={() => setSearchOpen(true)}
          >
            <Search aria-hidden className="h-[18px] w-[18px]" />
          </IconButton>

          <IconButton
            label={`Enquiry list, ${count} ${
              count === 1 ? "item" : "items"
            }`}
            onClick={openDrawer}
            badge={count}
          >
            <ShoppingBag aria-hidden className="h-[18px] w-[18px]" />
          </IconButton>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="ml-1 flex h-11 w-11 items-center justify-center text-[#1C1A17] transition-colors hover:text-[#B23B2E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B23B2E] xl:hidden"
          >
            <Menu aria-hidden className="h-5 w-5" strokeWidth={1.4} />
          </button>
        </div>
      </div>
    </header>

    {/* Both overlays are siblings of <header>, never children of it: the
        header's backdrop-blur creates a containing block for
        position:fixed, which would collapse these panels to the header box
        on mobile instead of covering the viewport. */}
    <MobileNav
        open={open}
        onClose={() => setOpen(false)}
        label="Site menu"
        links={tmMobileNav}
        linkClassName="font-tmsons-display text-xl text-[#1C1A17] hover:text-[#B23B2E] hover:bg-[#B23B2E]/8 border-b border-[#1C1A17]/8 py-3.5"
        panelClassName="bg-[#FAF7F2] border-l border-[#1C1A17]/12"
        cta={
          <div className="space-y-3">
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                openDrawer();
              }}
              className="flex min-h-12 w-full items-center justify-center gap-2 bg-[#B23B2E] px-6 text-[11px] tracking-[0.2em] text-white uppercase transition-colors hover:bg-[#8F2E23]"
            >
              Enquiry list
              {count > 0 ? ` · ${count}` : ""}
            </button>
            <a
              href={tmContact.phones[0].telHref}
              className="flex min-h-12 w-full items-center justify-center gap-2 border border-[#1C1A17]/25 px-6 text-[11px] tracking-[0.2em] text-[#1C1A17] uppercase transition-colors hover:border-[#1C1A17]"
            >
              <Phone aria-hidden className="h-4 w-4" />
              {tmContact.phones[0].display}
            </a>
          </div>
        }
      />

      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "group relative flex min-h-11 items-center text-[12px] tracking-[0.16em] uppercase transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B23B2E]",
        active ? "text-[#1C1A17]" : "text-[#6F6A61] hover:text-[#1C1A17]",
      )}
    >
      {label}
      <span
        aria-hidden
        className={cn(
          "absolute bottom-1.5 left-0 h-px bg-[#B23B2E] transition-all duration-300",
          active ? "w-full" : "w-0 group-hover:w-full",
        )}
      />
    </Link>
  );
}

function IconButton({
  label,
  onClick,
  badge,
  children,
}: {
  label: string;
  onClick: () => void;
  badge?: number;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="relative grid h-11 w-11 place-items-center text-[#1C1A17] transition-colors hover:text-[#B23B2E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B23B2E]"
    >
      {children}
      {badge ? (
        <span
          aria-hidden
          className="absolute top-1.5 right-1.5 grid h-4 min-w-4 place-items-center rounded-full bg-[#B23B2E] px-1 text-[9px] font-semibold text-white"
        >
          {badge}
        </span>
      ) : null}
    </button>
  );
}
