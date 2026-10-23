import Link from "next/link";
import { CollectionsView } from "../components/collections-view";
import { RevealImage } from "@/components/shared/reveal";
import { SyImage } from "../components/sy-image";
import { getSyCategoryMeta, syHomeHref } from "../data";
import { syImages } from "../images";
import {
  getSyProductsByCategory,
  syProductCount,
  type SyCategory,
} from "../products";

interface CollectionsPageProps {
  /** "all" renders the full demo catalogue, otherwise a single category. */
  category?: SyCategory | "all";
}

/**
 * Collection header + the interactive catalogue view. The dataset is a
 * representative selection of the live store, not the full Shopify catalogue.
 */
export default function CollectionsPage({
  category = "all",
}: CollectionsPageProps) {
  const meta = category === "all" ? null : getSyCategoryMeta(category);
  const count =
    category === "all"
      ? syProductCount
      : getSyProductsByCategory(category).length;

  const title = meta ? meta.label : "Shop all pieces";
  const blurb =
    meta?.blurb ??
    "Every representative piece in this redesign concept - kurtis, coordinated sets, prints and tissue silk edits.";
  const headerImage = meta?.image ?? syImages.burgundyOnForm;
  const headerAlt =
    meta?.imageAlt ??
    "Burgundy floral kurti with matching bottomwear displayed on a dress form";

  return (
    <>
      <header className="border-b border-[#EFE5E1] bg-[#F7F1EC]">
        <div className="mx-auto max-w-[1360px] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-[10px] tracking-[0.2em] text-[#8B7B81] uppercase">
              <li>
                <Link
                  href={syHomeHref}
                  className="transition hover:text-[#A63D57]"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link
                  href={`${syHomeHref}/collections`}
                  className="transition hover:text-[#A63D57]"
                >
                  Collections
                </Link>
              </li>
              {meta ? (
                <>
                  <li aria-hidden>/</li>
                  <li className="text-[#4B2C3B]" aria-current="page">
                    {meta.label}
                  </li>
                </>
              ) : null}
            </ol>
          </nav>

          <div className="mt-6 grid items-end gap-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-[10px] font-medium tracking-[0.34em] text-[#A63D57] uppercase">
                {count} {count === 1 ? "piece" : "pieces"}
              </p>
              <h1 className="font-sy-display mt-3 text-[clamp(2.1rem,5vw,3.4rem)] leading-[1.02] tracking-tight text-[#2C1F26]">
                {title}
              </h1>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#6B5A61]">
                {blurb}
              </p>
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <RevealImage>
                <SyImage
                  src={headerImage}
                  alt={headerAlt}
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
      </div>
    </>
  );
}
