"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { MobileNav } from "@/components/shared/mobile-nav";
import { cn } from "@/lib/utils";
import { northstarContact, northstarHomeHref, northstarNav } from "../data";

function CompassMark({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      focusable="false"
    >
      <path
        d="M12 2.5 13.6 9.2 20.5 12l-6.9 2.8L12 21.5 10.4 14.8 3.5 12l6.9-2.8L12 2.5Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" />
    </svg>
  );
}

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
        "sticky top-0 z-50 bg-[#F7F4EF]/92 backdrop-blur-sm transition-shadow duration-300",
        scrolled
          ? "shadow-[0_1px_0_rgba(38,36,31,0.14)]"
          : "border-b border-[#26241F]/8",
      )}
    >
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <Link
          href={northstarHomeHref}
          className="group flex min-h-11 items-center gap-3"
          aria-label="Northstar Institute — home"
        >
          <CompassMark className="h-5 w-5 text-[#9C4F36] transition-transform duration-500 group-hover:rotate-45" />
          <span className="flex flex-col items-start">
            <span className="text-[1.0625rem] leading-none font-medium tracking-[0.32em] text-[#26241F] uppercase">
              Northstar
            </span>
            <span className="mt-1 hidden text-[9px] tracking-[0.3em] text-[#6E6A62] uppercase sm:block">
              Civil Services · Banking · SSC
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {northstarNav
            .filter((item) => item.href !== northstarHomeHref)
            .map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "group relative py-2.5 text-[13px] tracking-[0.14em] uppercase transition-colors duration-200",
                    active
                      ? "text-[#26241F]"
                      : "text-[#6E6A62] hover:text-[#26241F]",
                  )}
                >
                  {item.label}
                  <span
                    aria-hidden
                    className={cn(
                      "absolute bottom-1 left-0 h-px bg-[#9C4F36] transition-all duration-300",
                      active ? "w-full" : "w-0 group-hover:w-full",
                    )}
                  />
                </Link>
              );
            })}
          <a
            href={`tel:${northstarContact.phoneDigits}`}
            className="text-[13px] tracking-[0.1em] text-[#9C4F36] transition-colors duration-200 hover:text-[#7c3d29] focus-visible:ring-2 focus-visible:ring-[#9C4F36] focus-visible:ring-offset-4 focus-visible:outline-none"
          >
            Enquire — {northstarContact.phoneDisplay}
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center text-[#26241F] transition-colors hover:text-[#9C4F36] focus-visible:ring-2 focus-visible:ring-[#9C4F36] focus-visible:ring-offset-2 focus-visible:outline-none lg:hidden"
        >
          <Menu aria-hidden className="h-5 w-5" strokeWidth={1.5} />
        </button>
      </div>

      <MobileNav
        open={open}
        onClose={() => setOpen(false)}
        label="Site menu"
        links={northstarNav}
        linkClassName="font-northstar-display text-2xl text-[#26241F] hover:text-[#9C4F36] hover:bg-[#E5C9BC]/25 border-b border-[#26241F]/8 py-4"
        panelClassName="bg-[#F7F4EF] border-l border-[#26241F]/10"
        cta={
          <Link
            href="/demos/northstar/contact"
            onClick={() => setOpen(false)}
            className="flex min-h-12 w-full items-center justify-center gap-2 bg-[#26241F] px-6 py-3.5 text-sm tracking-[0.14em] text-[#F7F4EF] uppercase transition-colors hover:bg-[#9C4F36]"
          >
            Speak with a mentor
          </Link>
        }
      />
    </header>
  );
}
