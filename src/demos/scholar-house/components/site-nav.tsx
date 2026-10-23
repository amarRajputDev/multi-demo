"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { MobileNav } from "@/components/shared/mobile-nav";
import { cn } from "@/lib/utils";
import { scholarHomeHref, scholarNav } from "../data";

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
        "sticky top-0 z-50 border-b border-[#1F3A2E]/10 bg-[#FBF8F1]/92 backdrop-blur-sm transition-shadow duration-300",
        scrolled && "shadow-[0_1px_0_rgba(31,58,46,0.08)]",
      )}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href={scholarHomeHref}
          className="group flex flex-col items-start"
          aria-label="Scholar House home"
        >
          <span className="flex items-center gap-2">
            <span
              aria-hidden
              className="hidden h-5 w-px bg-[#A8842C] sm:block"
            />
            <span className="font-scholar-display text-[1.375rem] leading-none font-medium tracking-tight text-[#1F3A2E] sm:text-2xl">
              Scholar House
            </span>
          </span>
          <span className="mt-1 h-px w-10 bg-[#A8842C] transition-all duration-300 group-hover:w-16" />
          <span className="mt-1 hidden text-[10px] tracking-[0.22em] text-[#5C6B60] uppercase sm:block">
            Est. 2012 · Academic Excellence
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {scholarNav
            .filter((item) => item.href !== scholarHomeHref)
            .map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative py-2 text-sm tracking-wide transition-colors duration-200",
                    active
                      ? "text-[#1F3A2E]"
                      : "text-[#5C6B60] hover:text-[#1F3A2E]",
                  )}
                >
                  {item.label}
                  <span
                    aria-hidden
                    className={cn(
                      "absolute -bottom-0.5 left-0 h-px bg-[#A8842C] transition-all duration-300",
                      active ? "w-full" : "w-0",
                    )}
                  />
                </Link>
              );
            })}
          <Link
            href="/demos/scholar-house/contact"
            className="rounded-none bg-[#1F3A2E] px-6 py-2.5 text-sm font-medium tracking-wide text-[#FBF8F1] transition-colors duration-200 hover:bg-[#2a4d3c] focus-visible:ring-2 focus-visible:ring-[#A8842C] focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            Enquire
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center text-[#1F3A2E] transition-colors hover:text-[#A8842C] focus-visible:ring-2 focus-visible:ring-[#A8842C] focus-visible:ring-offset-2 focus-visible:outline-none lg:hidden"
        >
          <Menu aria-hidden className="h-6 w-6" />
        </button>
      </div>

      <MobileNav
        open={open}
        onClose={() => setOpen(false)}
        label="Site menu"
        links={scholarNav}
        linkClassName="font-scholar-display text-xl text-[#1F3A2E] hover:text-[#A8842C] hover:bg-[#E7D8B4]/30 border-b border-[#1F3A2E]/8 py-4"
        panelClassName="bg-[#FBF8F1] border-l border-[#1F3A2E]/10"
        cta={
          <Link
            href="/demos/scholar-house/contact"
            onClick={() => setOpen(false)}
            className="flex w-full items-center justify-center gap-2 bg-[#1F3A2E] px-6 py-3.5 text-sm font-medium tracking-wide text-[#FBF8F1] transition-colors hover:bg-[#2a4d3c]"
          >
            Enquire about admissions
          </Link>
        }
      />
    </header>
  );
}
