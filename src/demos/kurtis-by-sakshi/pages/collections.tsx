import { CatalogSection } from "../sections/catalog";
import { CollectionsSection } from "../sections/collections";
import { InstagramSection } from "../sections/instagram";
import type { SakshiCategory } from "../products";
import { getSakshiCategoryMeta, sakshiCategories } from "../data";

/**
 * Collections page — also used by /collections/[category] with a
 * pre-selected category. Shows the collection cards plus the full filterable
 * catalogue.
 */
export default function CollectionsPage({
  category,
}: {
  category?: SakshiCategory;
}) {
  const meta = category ? getSakshiCategoryMeta(category) : null;

  return (
    <>
      <header className="border-b border-[#E9DDD4] bg-[linear-gradient(160deg,#F8EFE7_0%,#EFD9D5_100%)]">
        <div className="mx-auto max-w-[1320px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <p className="sakshi-eyebrow text-[10px] font-semibold text-[#8E3B47]">
            {meta ? "Collection" : "All collections"}
          </p>
          <h1 className="font-sakshi-display mt-3 text-[clamp(2.2rem,5vw,3.4rem)] leading-tight text-[#3B1F24]">
            {meta ? meta.label : "The full edit"}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#7A6461] sm:text-base">
            {meta
              ? `${meta.blurb} A concept grouping — confirm current pieces, fabrics and pricing with the seller on Instagram.`
              : "Browse every demonstration piece in one place. Filter by edit, search by word, and build an enquiry list. Prices are not published — enquire to order."}
          </p>
          {!meta ? (
            <p className="mt-6 text-[11px] leading-relaxed tracking-[0.1em] text-[#7A6461] uppercase">
              {sakshiCategories.length} concept edits · demonstration catalogue
            </p>
          ) : null}
        </div>
      </header>

      {meta ? (
        <CatalogSection
          initialCategory={category}
          heading={meta.label}
          blurb={meta.blurb}
          titleId={`kbs-catalog-${meta.key}`}
        />
      ) : (
        <>
          <CollectionsSection />
          <CatalogSection
            heading="All pieces"
            titleId="kbs-collections-catalog"
          />
        </>
      )}

      <InstagramSection />
    </>
  );
}
