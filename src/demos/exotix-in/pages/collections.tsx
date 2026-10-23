import Link from "next/link";
import { CatalogueView } from "../components/catalogue-view";
import { ExotixImage } from "../components/exotix-image";
import {
  getExotixCategoryMeta,
  exotixHomeHref,
} from "../data";
import {
  EXOTIX_DATA_NOTE,
  getExotixProductsByCategory,
  exotixProductCount,
  type ExotixCategory,
} from "../products";

interface CollectionsPageProps {
  /** "all" renders the full snapshot catalogue, otherwise a single category. */
  category?: ExotixCategory | "all";
}

/**
 * Collection header + the interactive catalogue view. The dataset is a
 * representative snapshot of the live store, not the full catalogue.
 */
export default function CollectionsPage({
  category = "all",
}: CollectionsPageProps) {
  const meta = category === "all" ? null : getExotixCategoryMeta(category);
  const products =
    category === "all" ? undefined : getExotixProductsByCategory(category);
  const count = products ? products.length : exotixProductCount;

  const title = meta ? meta.label : "The full grid";
  const blurb =
    meta?.blurb ??
    "Every piece in this redesign concept's verified snapshot - festive jackets, racing shells, hoodies, sweat layers, tees, bottoms and co-ords.";

  return (
    <>
      <header className="border-b border-[#232327] bg-[#0A0A0C]">
        <div className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <nav aria-label="Breadcrumb">
            <ol className="font-exotix-mono flex flex-wrap items-center gap-2 text-[10px] tracking-[0.2em] text-[#8A8A92] uppercase">
              <li>
                <Link href={exotixHomeHref} className="transition hover:text-[#E23B2E]">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link
                  href={`${exotixHomeHref}/collections`}
                  className="transition hover:text-[#E23B2E]"
                >
                  Collections
                </Link>
              </li>
              {meta ? (
                <>
                  <li aria-hidden>/</li>
                  <li className="text-[#F2EFEA]" aria-current="page">
                    {meta.label}
                  </li>
                </>
              ) : null}
            </ol>
          </nav>

          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="font-exotix-mono flex items-center gap-3 text-[10px] font-medium tracking-[0.3em] text-[#E23B2E] uppercase">
                <span>{meta ? meta.lane : "ALL LANES"}</span>
                <span aria-hidden className="exotix-timing-strip h-2.5 w-16 opacity-80" />
                <span className="text-[#8A8A92]">
                  {count} {count === 1 ? "piece" : "pieces"}
                </span>
              </p>
              <h1 className="font-exotix-display mt-3 text-[clamp(2.1rem,5vw,3.3rem)] leading-[1.02] tracking-tight text-[#F2EFEA] uppercase">
                {title}
              </h1>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#B9BDC4]">
                {blurb}
              </p>
              <p className="font-exotix-mono mt-4 text-[10px] leading-relaxed tracking-[0.12em] text-[#8A8A92] uppercase">
                {EXOTIX_DATA_NOTE}
              </p>
            </div>

            {meta ? (
              <ExotixImage
                src={meta.image}
                alt={meta.imageAlt}
                aspectClassName="aspect-[16/9] w-full lg:w-80"
                loading="eager"
                className="border border-[#1C1C20]"
              />
            ) : null}
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <CatalogueView
          key={category}
          initialCategory={category}
          {...(products ? { products } : {})}
        />
      </div>
    </>
  );
}
