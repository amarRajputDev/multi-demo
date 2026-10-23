import { CatalogView } from "../components/catalog-view";
import { OrnamentDivider } from "../components/icons";

/**
 * All-products view with category filtering, search and sorting. Embedded on
 * the homepage and reused by the collections pages.
 */
export function CatalogSection({
  initialCategory,
  heading = "All pieces",
  blurb,
  titleId,
}: {
  initialCategory?: "all" | import("../products").SakshiCategory;
  heading?: string;
  blurb?: string;
  titleId?: string;
}) {
  return (
    <section
      aria-labelledby={titleId}
      className="border-y border-[#E9DDD4] bg-[#F6EEE6]/70"
    >
      <div className="mx-auto max-w-[1320px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="sakshi-eyebrow text-[10px] font-semibold text-[#8E3B47]">
            Shop the concept
          </p>
          <h2
            id={titleId}
            className="font-sakshi-display mt-3 text-[clamp(2rem,4.5vw,3rem)] leading-tight text-[#3B1F24]"
          >
            {heading}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#7A6461] sm:text-base">
            {blurb ??
              "Search and filter the demonstration catalogue. Every piece is enquiry-priced — add favourites to your list and send it over on Instagram."}
          </p>
          <OrnamentDivider className="mt-6" />
        </div>

        <div className="mt-12">
          <CatalogView initialCategory={initialCategory} heading={heading} />
        </div>
      </div>
    </section>
  );
}
