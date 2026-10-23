"use client";

import Link from "next/link";
import { InstagramGlyph } from "./icons";
import { Check, ListPlus, Phone, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { tmContact, type TmProduct } from "../data";
import { useTmEnquiry } from "./enquiry-provider";

interface ProductActionsProps {
  product: TmProduct;
  categoryLabel: string;
}

/**
 * Detail-page purchase-intent controls.
 *
 * There is no checkout, no price and no stock counter: the only actions are
 * adding to the enquiry list and talking to the showroom.
 */
export function ProductActions({ product, categoryLabel }: ProductActionsProps) {
  const { addItem, has, openDrawer, items } = useTmEnquiry();
  const inList = has(product.slug);

  return (
    <div className="mt-8 border-t border-[#1C1A17]/12 pt-7">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-[9px] tracking-[0.24em] text-[#6F6A61] uppercase">
            Pricing
          </p>
          <p className="font-tmsons-display mt-1.5 text-[1.35rem] leading-none text-[#B23B2E]">
            Request Wholesale Price
          </p>
        </div>
        <p className="text-[10px] tracking-[0.16em] text-[#6F6A61] uppercase">
          {categoryLabel}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => {
            if (!inList) {
              addItem({
                slug: product.slug,
                title: product.title,
                image: product.imageId,
                alt: product.alt,
                categoryLabel,
              });
            }
            openDrawer();
          }}
          className={cn(
            "inline-flex min-h-13 items-center gap-2.5 px-7 py-4 text-[11px] tracking-[0.2em] uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B23B2E]",
            inList
              ? "bg-[#1C1A17] text-[#FAF7F2] hover:bg-[#332F29]"
              : "bg-[#B23B2E] text-white hover:bg-[#8F2E23]",
          )}
          aria-label={
            inList
              ? `${product.title} is in your enquiry list — open the list`
              : `Add ${product.title} to enquiry list`
          }
        >
          {inList ? (
            <>
              <Check aria-hidden className="h-4 w-4" />
              In enquiry list
            </>
          ) : (
            <>
              <ListPlus aria-hidden className="h-4 w-4" />
              Add to enquiry
            </>
          )}
        </button>

        <Link
          href="/demos/tm-sons/wholesale"
          className="inline-flex min-h-13 items-center gap-2.5 border border-[#1C1A17]/30 px-7 py-4 text-[11px] tracking-[0.2em] text-[#1C1A17] uppercase transition-colors hover:border-[#1C1A17] hover:bg-[#1C1A17]/[0.04] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B23B2E]"
        >
          Wholesale enquiry
        </Link>
      </div>

      <p className="mt-4 text-[11px] leading-relaxed text-[#6F6A61]">
        {inList
          ? `${items.length} ${
              items.length === 1 ? "piece" : "pieces"
            } in your list. Quantities and colour preferences are set in the list.`
          : "No minimum quantity is imposed in this concept — add the piece and set your own quantity."}
      </p>

      <div className="mt-7 grid gap-3 sm:grid-cols-2">
        {tmContact.phones.map((phone) => (
          <a
            key={phone.telHref}
            href={phone.telHref}
            className="group flex min-h-14 items-center gap-3 border border-[#1C1A17]/20 bg-[#FFFDFA] px-4 transition-colors hover:border-[#B23B2E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B23B2E]"
          >
            <Phone
              aria-hidden
              className="h-4 w-4 shrink-0 text-[#B23B2E] transition-transform group-hover:-rotate-12"
            />
            <span>
              <span className="block font-tmsons-display text-[0.98rem] text-[#1C1A17]">
                {phone.display}
              </span>
              <span className="block text-[9px] tracking-[0.18em] text-[#6F6A61] uppercase">
                {phone.label}
              </span>
            </span>
            <Plus
              aria-hidden
              className="ml-auto h-3.5 w-3.5 rotate-45 text-[#B23B2E]"
            />
          </a>
        ))}
        <a
          href={tmContact.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-14 items-center gap-3 border border-[#1C1A17]/20 bg-[#FFFDFA] px-4 transition-colors hover:border-[#B23B2E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B23B2E] sm:col-span-2"
        >
          <InstagramGlyph aria-hidden className="h-4 w-4 shrink-0 text-[#B23B2E]" />
          <span>
            <span className="block font-tmsons-display text-[0.98rem] text-[#1C1A17]">
              Message on Instagram
            </span>
            <span className="block text-[9px] tracking-[0.18em] text-[#6F6A61] uppercase">
              {tmContact.instagramHandle}
            </span>
          </span>
        </a>
      </div>
    </div>
  );
}
