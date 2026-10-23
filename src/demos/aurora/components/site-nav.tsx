"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { MobileNav } from "@/components/shared/mobile-nav";
import { cn } from "@/lib/utils";
import { auroraNav } from "../data";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8D9A0]";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const primaryLinks = auroraNav.filter((link) => link.href !== "/");

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-[80] border-b transition-colors duration-300",
          scrolled
            ? "border-white/10 bg-[#0B1A33]/90 backdrop-blur-md"
            : "border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex h-16 w-full max-w-[1240px] items-center justify-between gap-4 px-5 sm:h-[72px] sm:px-8 lg:px-10">
          <Link
            href="/demos/aurora"
            aria-label="Aurora Academy — home"
            className={cn(
              "flex min-h-11 items-center gap-2.5 transition-opacity hover:opacity-80",
              focusRing,
            )}
          >
            <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5 shrink-0">
              <path
                d="M12 2l2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2L12 2z"
                fill="#C9A227"
              />
            </svg>
            <span className="font-aurora-display text-base font-medium tracking-[0.32em] text-[#F4EFE6] sm:text-lg">
              AURORA
            </span>
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-1 lg:flex"
          >
            {primaryLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex min-h-11 items-center px-3 text-sm tracking-wide transition-colors",
                    active
                      ? "text-[#C9A227]"
                      : "text-[#F4EFE6]/75 hover:text-[#E8D9A0]",
                    focusRing,
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/demos/aurora/contact"
              className={cn(
                "hidden min-h-11 items-center bg-[#C9A227] px-5 text-sm font-semibold tracking-wide text-[#0B1A33] transition-colors hover:bg-[#E8D9A0] lg:inline-flex",
                focusRing,
              )}
            >
              Enquire
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-label="Open menu"
              className={cn(
                "grid h-11 w-11 place-items-center border border-white/15 text-[#F4EFE6] transition-colors hover:border-[#C9A227] hover:text-[#E8D9A0] lg:hidden",
                focusRing,
              )}
            >
              <Menu aria-hidden className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <MobileNav
        open={open}
        onClose={() => setOpen(false)}
        links={auroraNav}
        label="Aurora Academy navigation"
        panelClassName="border-l border-[#C9A227]/30 bg-[#0B1A33] text-[#F4EFE6]"
        linkClassName="min-h-12 rounded-none border-b border-white/10 px-1 tracking-wide hover:text-[#E8D9A0]"
        cta={
          <Link
            href="/demos/aurora/contact"
            onClick={() => setOpen(false)}
            className="flex min-h-12 w-full items-center justify-center bg-[#C9A227] px-5 text-sm font-semibold tracking-wide text-[#0B1A33] transition-colors hover:bg-[#E8D9A0]"
          >
            Enquire — book a diagnostic
          </Link>
        }
      />
    </>
  );
}
