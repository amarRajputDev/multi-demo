"use client";

import Link from "next/link";
import { ArrowRight, Trash2 } from "lucide-react";
import { sakshiContact, sakshiHomeHref } from "../data";
import { SAKSHI_PRICE_NOTE } from "../products";
import { Drawer } from "./drawer";
import { InstagramGlyph } from "./icons";
import { SakshiImage } from "./sakshi-image";
import { useShop } from "./shop-provider";

/**
 * The "shopping bag" for this brand: an enquiry list. Prices are never
 * claimed — every line reads "Enquire for Price" and the CTA routes to the
 * contact/enquiry flow (Instagram DM), not a checkout.
 */
export function EnquiryDrawer() {
  const { lines, enquiryOpen, closeEnquiry, setQty, removeLine, clearList } =
    useShop();

  return (
    <Drawer
      id="kbs-enquiry-drawer"
      open={enquiryOpen}
      onClose={closeEnquiry}
      title="Enquiry list"
      footer={
        lines.length > 0 ? (
          <div className="grid gap-3">
            <p className="font-sakshi-body text-[11px] leading-relaxed text-[#7A6461]">
              {SAKSHI_PRICE_NOTE}
            </p>
            <div className="flex flex-wrap gap-2">
              <Link
                href={`${sakshiHomeHref}/contact`}
                onClick={closeEnquiry}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#8E3B47] px-5 py-3 text-[12px] font-semibold tracking-[0.16em] text-[#FBF6EF] uppercase transition hover:bg-[#7A3140] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B1F24]"
              >
                Send enquiry
                <ArrowRight aria-hidden className="h-3.5 w-3.5" />
              </Link>
              <a
                href={sakshiContact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D8C3BB] bg-transparent px-4 py-3 text-[12px] font-semibold tracking-[0.16em] text-[#3B1F24] uppercase transition hover:border-[#8E3B47] hover:text-[#8E3B47]"
              >
                <InstagramGlyph className="h-4 w-4" />
                DM
              </a>
            </div>
            <button
              type="button"
              onClick={clearList}
              className="text-[11px] tracking-[0.14em] text-[#7A6461] uppercase underline underline-offset-4 transition hover:text-[#8E3B47]"
            >
              Clear list
            </button>
          </div>
        ) : null
      }
    >
      {lines.length === 0 ? (
        <div className="flex h-full flex-col items-center justify-center gap-3 py-16 text-center">
          <p className="font-sakshi-display text-2xl text-[#3B1F24]">
            Your enquiry list is empty
          </p>
          <p className="max-w-xs text-sm leading-relaxed text-[#7A6461]">
            Add pieces from the collection and send them over — pricing,
            availability and sizing are confirmed on Instagram.
          </p>
          <Link
            href={`${sakshiHomeHref}/collections`}
            onClick={closeEnquiry}
            className="mt-2 rounded-full border border-[#8E3B47] px-5 py-2.5 text-[11px] font-semibold tracking-[0.18em] text-[#8E3B47] uppercase transition hover:bg-[#8E3B47] hover:text-[#FBF6EF]"
          >
            Browse collections
          </Link>
        </div>
      ) : (
        <ul className="grid gap-4">
          {lines.map((line) => (
            <li
              key={line.key}
              className="flex gap-4 border-b border-[#E9DDD4] pb-4 last:border-b-0"
            >
              <div className="w-20 shrink-0">
                <SakshiImage
                  src={line.image}
                  alt={line.imageAlt}
                  tone={line.tone}
                  compact
                  aspectClassName="aspect-[4/5]"
                  className="rounded-md"
                />
              </div>
              <div className="min-w-0 flex-1">
                <Link
                  href={`${sakshiHomeHref}/products/${line.slug}`}
                  onClick={closeEnquiry}
                  className="font-sakshi-display text-base leading-snug text-[#3B1F24] transition hover:text-[#8E3B47]"
                >
                  {line.name}
                </Link>
                <p className="mt-0.5 text-[11px] tracking-[0.14em] text-[#7A6461] uppercase">
                  Size {line.size} · Enquire for price
                </p>
                <div className="mt-2 flex items-center gap-3">
                  <div className="inline-flex items-center rounded-full border border-[#D8C3BB]">
                    <button
                      type="button"
                      onClick={() => setQty(line.key, line.qty - 1)}
                      aria-label={`Decrease quantity of ${line.name}`}
                      className="grid h-8 w-8 place-items-center rounded-l-full text-[#3B1F24] transition hover:bg-[#EFD9D5]"
                    >
                      &minus;
                    </button>
                    <span className="w-6 text-center text-sm text-[#3B1F24]">
                      {line.qty}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQty(line.key, line.qty + 1)}
                      aria-label={`Increase quantity of ${line.name}`}
                      className="grid h-8 w-8 place-items-center rounded-r-full text-[#3B1F24] transition hover:bg-[#EFD9D5]"
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeLine(line.key)}
                    aria-label={`Remove ${line.name} from enquiry list`}
                    className="grid h-8 w-8 place-items-center rounded-full text-[#7A6461] transition hover:bg-[#EFD9D5] hover:text-[#8E3B47]"
                  >
                    <Trash2 aria-hidden className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </Drawer>
  );
}
