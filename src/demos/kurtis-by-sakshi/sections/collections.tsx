import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { sakshiCategories, sakshiHomeHref } from "../data";
import { OrnamentDivider, PetalMotif } from "../components/icons";
import { SakshiImage } from "../components/sakshi-image";

/** Collection cards linking to /collections/[category]. */
export function CollectionsSection() {
  return (
    <section
      aria-labelledby="kbs-collections-heading"
      className="mx-auto max-w-[1320px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="sakshi-eyebrow text-[10px] font-semibold text-[#8E3B47]">
          The edit
        </p>
        <h2
          id="kbs-collections-heading"
          className="font-sakshi-display mt-3 text-[clamp(2rem,4.5vw,3rem)] leading-tight text-[#3B1F24]"
        >
          Kurti collections
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-[#7A6461] sm:text-base">
          Concept groupings inspired by the kurti-first wardrobe — explore each
          edit, then enquire for the current pieces and pricing.
        </p>
        <OrnamentDivider className="mt-6" />
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {sakshiCategories.map((category, index) => (
          <Link
            key={category.key}
            href={category.href}
            className={`group relative overflow-hidden rounded-[1.75rem] border border-[#E9DDD4] bg-white/70 transition hover:border-[#D8C3BB] hover:shadow-[0_20px_50px_rgba(59,31,36,0.09)] ${
              index === 0 ? "lg:col-span-2" : ""
            }`}
          >
            <SakshiImage
              src={null}
              alt={`${category.label} collection — placeholder art for the concept`}
              tone={category.tone}
              aspectClassName={index === 0 ? "aspect-[16/9] sm:aspect-[21/9]" : "aspect-[4/3]"}
              caption={category.label}
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#3B1F24]/85 via-[#3B1F24]/35 to-transparent px-6 pb-6 pt-14">
              <p className="inline-flex items-center gap-1.5 rounded-full bg-[#FBF6EF]/15 px-2.5 py-1 text-[9px] tracking-[0.24em] text-[#F3E4DF] uppercase backdrop-blur-sm">
                <PetalMotif className="h-2.5 w-2.5" />
                Demo grouping
              </p>
              <h3 className="font-sakshi-display mt-2 text-2xl text-[#FBF6EF] sm:text-3xl">
                {category.label}
              </h3>
              <p className="mt-1 max-w-sm text-sm leading-relaxed text-[#EADBD5]">
                {category.blurb}
              </p>
              <span className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.18em] text-[#EFD9D5] uppercase transition group-hover:gap-2.5">
                View collection
                <ArrowRight aria-hidden className="h-3.5 w-3.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href={`${sakshiHomeHref}/collections`}
          className="inline-flex items-center gap-2 rounded-full border border-[#8E3B47] px-7 py-3.5 text-[12px] font-semibold tracking-[0.18em] text-[#8E3B47] uppercase transition hover:bg-[#8E3B47] hover:text-[#FBF6EF]"
        >
          Browse all pieces
          <ArrowRight aria-hidden className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
