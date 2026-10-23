"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { MobileNav } from "@/components/shared/mobile-nav";
import { cn } from "@/lib/utils";
import { bloomHomeHref, bloomNav } from "../data";
import { FlowerMark } from "./illustrations";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-[#FBF7F2]/90 backdrop-blur-md transition-shadow duration-300",
        scrolled && "shadow-[0_4px_24px_rgba(59,51,88,0.07)]",
      )}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href={bloomHomeHref}
          className="group flex min-h-11 items-center gap-2.5 focus-visible:ring-2 focus-visible:ring-[#D96A54] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FBF7F2] focus-visible:outline-none"
          aria-label="Bloom Learning home"
        >
          <FlowerMark className="h-8 w-8 shrink-0 text-[#E8836F] transition-transform duration-300 group-hover:rotate-12 group-hover:scale-105" />
          <span className="flex flex-col items-start leading-none">
            <span className="font-bloom-display text-2xl font-semibold tracking-tight text-[#3B3358]">
              Bloom
            </span>
            <span className="mt-1 text-[10px] font-semibold tracking-[0.18em] text-[#7A7295] uppercase">
              Learning
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {bloomNav
            .filter((item) => item.href !== bloomHomeHref)
            .map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "inline-flex min-h-11 items-center rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
                    "focus-visible:ring-2 focus-visible:ring-[#D96A54] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FBF7F2] focus-visible:outline-none",
                    active
                      ? "bg-white text-[#3B3358] shadow-[0_2px_12px_rgba(59,51,88,0.08)]"
                      : "text-[#5F5878] hover:bg-white/70 hover:text-[#3B3358]",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          <Link
            href="/demos/bloom/contact"
            className="ml-2 inline-flex min-h-11 items-center rounded-full bg-[#C2503A] px-6 py-2.5 text-sm font-semibold text-white shadow-[0_3px_14px_rgba(194,80,58,0.28)] transition-all duration-200 hover:scale-[1.03] hover:bg-[#A8402D] hover:shadow-[0_6px_20px_rgba(194,80,58,0.35)] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#3B3358] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FBF7F2] focus-visible:outline-none"
          >
            Book a visit
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#3B3358] shadow-[0_2px_12px_rgba(59,51,88,0.08)] transition-all duration-200 hover:scale-105 hover:text-[#C2503A] focus-visible:ring-2 focus-visible:ring-[#D96A54] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FBF7F2] focus-visible:outline-none lg:hidden"
        >
          <Menu aria-hidden className="h-5 w-5" />
        </button>
      </div>

      <MobileNav
        open={open}
        onClose={() => setOpen(false)}
        label="Site menu"
        links={bloomNav}
        linkClassName="font-bloom-display text-xl font-medium rounded-2xl text-[#3B3358] hover:bg-white shadow-none border-b border-[#3B3358]/8 py-4"
        panelClassName="bg-[#FBF7F2] rounded-l-[28px] shadow-[-8px_0_32px_rgba(59,51,88,0.12)]"
        cta={
          <Link
            href="/demos/bloom/contact"
            onClick={() => setOpen(false)}
            className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#C2503A] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#A8402D]"
          >
            Book a free visit
          </Link>
        }
      />
    </header>
  );
}
