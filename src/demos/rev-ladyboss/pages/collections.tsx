import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { DataNote } from "../components/data-note";
import { ProductBrowser } from "../components/product-browser";
import {
  getRevCategoryMeta,
  revHomeHref,
} from "../data";
import type { RevCategory } from "../products";

interface CollectionsPageProps {
  /** Null = the full "Shop All" lookbook. */
  category?: RevCategory | null;
}

/** Collection listing with the shared client-side browser. */
export default function RevCollectionsPage({
  category = null,
}: CollectionsPageProps) {
  const meta = category ? getRevCategoryMeta(category) : null;

  return (
    <>
      <div className="border-b border-[#E8D9DC] bg-[#F3DCE1]/50">
        <div className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-[10px] font-semibold tracking-[0.22em] text-[#7C7073] uppercase">
              <li>
                <Link
                  href={revHomeHref}
                  className="inline-flex items-center gap-1.5 transition hover:text-[#B4707F]"
                >
                  <ArrowLeft aria-hidden className="h-3 w-3" />
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link
                  href={`${revHomeHref}/collections`}
                  className="transition hover:text-[#B4707F]"
                >
                  Collections
                </Link>
              </li>
              {meta ? (
                <>
                  <li aria-hidden>/</li>
                  <li className="text-[#1A1618]" aria-current="page">
                    {meta.label}
                  </li>
                </>
              ) : (
                <li aria-hidden className="text-[#1A1618]">
                  / Lookbook
                </li>
              )}
            </ol>
          </nav>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              {meta ? (
                <p className="font-rev-display text-[11px] tracking-[0.24em] text-[#B4707F]">
                  {meta.index} — Lookbook collection
                </p>
              ) : (
                <p className="font-rev-display text-[11px] tracking-[0.24em] text-[#B4707F]">
                  Full lookbook
                </p>
              )}
              <h1 className="font-rev-heading mt-2 text-[clamp(2.4rem,6vw,4.5rem)] leading-[0.92] text-[#1A1618]">
                {meta ? meta.label : "All pieces"}
              </h1>
              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-[#5F5458]">
                {meta
                  ? meta.blurb
                  : "The complete Rev Ladyboss concept lookbook - tunics, cotton maxis and denim, all enquiry-led."}
              </p>
            </div>
          </div>

          <DataNote className="mt-8 flex items-start gap-2.5 rounded-[2px] bg-white/70 p-4 text-[11.5px] leading-relaxed text-[#5F5458]" />
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <ProductBrowser initialCategory={category} />
      </div>
    </>
  );
}
