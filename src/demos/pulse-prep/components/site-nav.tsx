"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ArrowUpRight } from "lucide-react";
import { MobileNav } from "@/components/shared/mobile-nav";
import { cn } from "@/lib/utils";
import { pulseNav } from "../data";

function PulseMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      aria-hidden
      focusable="false"
      className={cn("h-9 w-9 shrink-0", className)}
    >
      <rect width="40" height="40" rx="7" fill="#2447F0" />
      <path
        d="M4 22h6.5l3.2-9.5L19 29l3.8-11 2.7 4H36"
        fill="none"
        stroke="#D8FF3E"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
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
      setScrolled(window.scrollY > 6);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-[#0A1B4D]/10 bg-white/92 backdrop-blur-md transition-shadow duration-300",
        scrolled && "shadow-[0_10px_30px_-24px_rgba(10,27,77,0.9)]",
      )}
    >
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label="Pulse Prep home"
          className="group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2447F0]"
        >
          <PulseMark className="transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105" />
          <span className="flex flex-col leading-none">
            <span className="font-pulse-display text-[1.4rem] font-black tracking-[-0.055em] text-[#0A1B4D] uppercase sm:text-[1.6rem]">
              Pulse<span className="text-[#2447F0]">Prep</span>
            </span>
            <span className="mt-1 hidden text-[9px] font-bold tracking-[0.3em] text-[#5A6A99] uppercase sm:block">
              Compete ready
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {pulseNav
            .filter((item) => item.href !== "/")
            .map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative py-2 text-[11px] font-bold tracking-[0.18em] uppercase transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2447F0]",
                    active
                      ? "text-[#0A1B4D]"
                      : "text-[#5A6A99] hover:text-[#2447F0]",
                  )}
                >
                  {item.label}
                  <span
                    aria-hidden
                    className={cn(
                      "absolute -bottom-0.5 left-0 h-[3px] bg-[#D8FF3E] transition-all duration-300",
                      active ? "w-full" : "w-0",
                    )}
                  />
                </Link>
              );
            })}
          <Link
            href="/demos/pulse-prep/contact"
            className="group inline-flex items-center gap-1.5 rounded-full bg-[#2447F0] px-5 py-3 text-[11px] font-bold tracking-[0.14em] text-white uppercase transition-colors duration-200 hover:bg-[#0A1B4D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A1B4D] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            Book a free test
            <ArrowUpRight
              aria-hidden
              className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#0A1B4D]/15 text-[#0A1B4D] transition-colors duration-200 hover:border-[#2447F0] hover:bg-[#2447F0] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2447F0] lg:hidden"
        >
          <Menu aria-hidden className="h-5 w-5" />
        </button>
      </div>

      <MobileNav
        open={open}
        onClose={() => setOpen(false)}
        label="Site menu"
        links={pulseNav}
        panelClassName="bg-[#0A1B4D] border-l border-white/10 pt-24"
        linkClassName="font-pulse-display text-xl font-extrabold uppercase tracking-[-0.02em] text-white hover:text-[#D8FF3E] hover:bg-white/5 border-b border-white/10 py-4"
        cta={
          <Link
            href="/demos/pulse-prep/contact"
            onClick={() => setOpen(false)}
            className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#D8FF3E] px-6 py-3.5 text-xs font-bold tracking-[0.16em] text-[#0A1B4D] uppercase transition-transform duration-200 hover:scale-[1.02] active:scale-[0.99]"
          >
            Book a free test
            <ArrowUpRight aria-hidden className="h-4 w-4" />
          </Link>
        }
      />
    </header>
  );
}
