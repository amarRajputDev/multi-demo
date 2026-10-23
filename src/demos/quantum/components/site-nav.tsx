"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { MobileNav } from "@/components/shared/mobile-nav";
import { cn } from "@/lib/utils";
import { quantumNav } from "../data";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#22D3EE]";

function QuantumMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className}>
      <circle cx="12" cy="12" r="2.1" fill="#22D3EE" />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4.4"
        fill="none"
        stroke="#22D3EE"
        strokeWidth="1.2"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4.4"
        fill="none"
        stroke="#8B5CF6"
        strokeWidth="1.2"
        transform="rotate(60 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4.4"
        fill="none"
        stroke="rgba(34,211,238,0.45)"
        strokeWidth="1.2"
        transform="rotate(120 12 12)"
      />
    </svg>
  );
}

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

  const primaryLinks = quantumNav.filter((link) => link.href !== "/");

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-[80] border-b transition-colors duration-300",
          scrolled
            ? "border-[#22D3EE]/15 bg-[#050A18]/85 backdrop-blur-md"
            : "border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex h-16 w-full max-w-[1240px] items-center justify-between gap-4 px-5 sm:h-[72px] sm:px-8 lg:px-10">
          <Link
            href="/demos/quantum"
            aria-label="Quantum Learning — home"
            className={cn(
              "flex min-h-11 items-center gap-2.5 transition-opacity hover:opacity-80",
              focusRing,
            )}
          >
            <QuantumMark className="h-5 w-5 shrink-0" />
            <span className="font-quantum-display text-[15px] font-semibold tracking-[0.34em] text-[#EAF2FF] sm:text-base">
              QUANTUM
            </span>
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-0.5 lg:flex"
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
                      ? "text-[#22D3EE]"
                      : "text-[#EAF2FF]/75 hover:text-[#67E8F9]",
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
              href="/demos/quantum/contact"
              className={cn(
                "hidden min-h-11 items-center border border-[#22D3EE]/60 px-5 text-sm font-semibold tracking-wide text-[#22D3EE] transition-colors hover:border-[#22D3EE] hover:bg-[#22D3EE]/10 hover:text-[#67E8F9] lg:inline-flex",
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
                "grid h-11 w-11 place-items-center border border-white/15 text-[#EAF2FF] transition-colors hover:border-[#22D3EE]/60 hover:text-[#22D3EE] lg:hidden",
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
        links={quantumNav}
        label="Quantum Learning navigation"
        panelClassName="border-l border-[#22D3EE]/30 bg-[#0B1430] text-[#EAF2FF]"
        linkClassName="font-quantum-mono min-h-12 rounded-none border-b border-white/10 px-1 text-sm tracking-wide hover:text-[#22D3EE]"
        cta={
          <Link
            href="/demos/quantum/contact"
            onClick={() => setOpen(false)}
            className="flex min-h-12 w-full items-center justify-center border border-[#22D3EE] bg-[#22D3EE]/10 px-5 text-sm font-semibold tracking-wide text-[#22D3EE] transition-colors hover:bg-[#22D3EE]/20"
          >
            Enquire — book a diagnostic
          </Link>
        }
      />
    </>
  );
}
