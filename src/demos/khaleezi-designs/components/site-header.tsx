"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, ShoppingBag, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { khaleeziBrand, khaleeziContact, khaleeziNav } from "../data";
import { BrandMark } from "./brand";
import { useEnquiry } from "./enquiry-provider";

export function SiteHeader() {
  const { count, openDrawer, hydrated } = useEnquiry();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <>
      <div className="border-b border-[#E4DCD0] bg-[#2A2320] text-[#F7F2E9]">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-4 px-4 py-2 text-[10px] uppercase tracking-[0.16em] sm:px-6">
          <p className="truncate">Cotton dupatta sets · small to 7XL</p>
          <p className="hidden shrink-0 text-[#F7F2E9]/65 sm:block">
            WhatsApp ordering · worldwide shipping
          </p>
          <a
            href={khaleeziContact.instagramUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="shrink-0 text-[#CFE0DA] hover:underline"
          >
            {khaleeziBrand.instagramHandle}
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-[#E4DCD0] bg-[#FBF8F2]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="grid h-9 w-9 place-items-center text-[#2A2320] lg:hidden"
            >
              <Menu aria-hidden className="h-5 w-5" />
            </button>
            <Link
              href={khaleeziBrand.homeHref}
              className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2F6D72]"
            >
              <BrandMark />
            </Link>
          </div>

          <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
            {khaleeziNav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[11px] uppercase tracking-[0.18em] text-[#2A2320]/80 transition-colors hover:text-[#2F6D72] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2F6D72]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={khaleeziContact.instagramUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="hidden text-[10px] uppercase tracking-[0.18em] text-[#7A6E67] transition-colors hover:text-[#2F6D72] sm:block"
            >
              Instagram
            </a>
            <button
              type="button"
              onClick={openDrawer}
              aria-label={`Enquiry list, ${hydrated ? count : 0} pieces`}
              className="relative inline-flex items-center gap-2 border border-[#2A2320]/20 px-3.5 py-2 text-[10px] uppercase tracking-[0.16em] text-[#2A2320] transition-colors hover:border-[#2F6D72] hover:text-[#2F6D72]"
            >
              <ShoppingBag aria-hidden className="h-3.5 w-3.5" />
              Enquiry
              {hydrated && count > 0 ? (
                <span className="grid h-4 min-w-4 place-items-center rounded-full bg-[#2F6D72] px-1 text-[9px] font-semibold text-[#FBF8F2]">
                  {count}
                </span>
              ) : null}
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-[85] lg:hidden",
          menuOpen ? "" : "pointer-events-none",
        )}
        aria-hidden={!menuOpen}
      >
        <div
          className={cn(
            "absolute inset-0 bg-[#2A2320]/45 transition-opacity duration-300",
            menuOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setMenuOpen(false)}
        />
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className={cn(
            "absolute inset-y-0 left-0 flex w-[86%] max-w-sm flex-col bg-[#FBF8F2] px-6 py-5 transition-transform duration-300 ease-out",
            menuOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="flex items-center justify-between">
            <BrandMark />
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="grid h-9 w-9 place-items-center text-[#2A2320]"
            >
              <X aria-hidden className="h-5 w-5" />
            </button>
          </div>
          <nav aria-label="Mobile" className="mt-10 flex flex-col">
            {khaleeziNav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="font-khaleezi-display border-b border-[#E4DCD0] py-4 text-2xl text-[#2A2320]"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={khaleeziContact.instagramUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="font-khaleezi-display border-b border-[#E4DCD0] py-4 text-2xl text-[#2A2320]"
            >
              Instagram
            </a>
          </nav>
          <p className="mt-auto text-[10px] leading-relaxed text-[#7A6E67]">
            {khaleeziBrand.name} concept by Vizo Technology. Prices, availability
            and policies require confirmation.
          </p>
        </div>
      </div>
    </>
  );
}
