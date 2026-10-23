import Link from "next/link";
import { RevealImage } from "@/components/shared/reveal";
import { AnyaaImage } from "../components/anyaa-image";
import { CollectionsView } from "../components/collections-view";
import { BotanicalSprig } from "../components/icons";
import { anyaaDataNote, anyaaHomeHref, getAnyaaCategoryMeta } from "../data";
import {
  getAnyaaProductsByCategory,
  anyaaProductCount,
  type AnyaaCategory,
} from "../products";

interface CollectionsPageProps {
  /** "all" renders the full demo catalogue, otherwise a single category. */
  category?: AnyaaCategory | "all";
}

/** Collection header + the interactive catalogue view. */
export default function CollectionsPage({
  category = "all",
}: CollectionsPageProps) {
  const meta = category === "all" ? null : getAnyaaCategoryMeta(category);
  const count =
    category === "all"
      ? anyaaProductCount
      : getAnyaaProductsByCategory(category).length;

  const title = meta ? meta.label : "Shop the full edit";
  const blurb =
    meta?.blurb ??
    "Every concept entry in this website concept - kurtis, everyday pieces and floral edits, all priced on enquiry.";

  return (
    <>
      <header className="border-b border-[#DFE7E2] bg-[#F2F5F1]">
        <div className="mx-auto max-w-[1360px] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <nav aria-label="Breadcrumb">
            <ol className="font-anyaa-body flex flex-wrap items-center gap-2 text-[10px] tracking-[0.2em] text-[#6E7C77] uppercase">
              <li>
                <Link
                  href={anyaaHomeHref}
                  className="transition hover:text-[#2E6F62]"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link
                  href={`${anyaaHomeHref}/collections`}
                  className="transition hover:text-[#2E6F62]"
                >
                  Collections
                </Link>
              </li>
              {meta ? (
                <>
                  <li aria-hidden>/</li>
                  <li className="text-[#22332F]" aria-current="page">
                    {meta.label}
                  </li>
                </>
              ) : null}
            </ol>
          </nav>

          <div className="mt-6 grid items-end gap-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="font-anyaa-body text-[10px] font-medium tracking-[0.34em] text-[#2E6F62] uppercase">
                {count} {count === 1 ? "piece" : "pieces"}
              </p>
              <h1 className="font-anyaa-display mt-3 text-[clamp(2.1rem,5vw,3.4rem)] leading-[1.03] tracking-tight text-[#22332F]">
                {title}
              </h1>
              <BotanicalSprig className="mt-4 h-7 w-20 text-[#2E6F62]/60" />
              <p className="font-anyaa-body mt-4 max-w-xl text-[15px] leading-relaxed text-[#6E7C77]">
                {blurb}
              </p>
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <RevealImage>
                <AnyaaImage
                  src={null}
                  alt={`Editorial placeholder for the ${title} collection`}
                  tint={meta?.tint ?? "teal"}
                  aspectClassName="aspect-[16/9] lg:aspect-[16/10]"
                  loading="eager"
                  className="rounded-[2px]"
                />
              </RevealImage>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1360px] px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <CollectionsView key={category} initialCategory={category} />
        <p className="font-anyaa-body mt-10 border-t border-[#DFE7E2] pt-5 text-[11px] leading-relaxed text-[#6E7C77]">
          {anyaaDataNote}
        </p>
      </div>
    </>
  );
}
