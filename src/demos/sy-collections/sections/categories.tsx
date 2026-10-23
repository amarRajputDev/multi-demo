import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "../components/section-heading";
import { SyImage } from "../components/sy-image";
import { syCategories, syHomeHref } from "../data";
import { getSyProductsByCategory } from "../products";

/** Six shoppable category cards linking to filtered collection routes. */
export function Categories() {
  return (
    <section
      id="categories"
      aria-labelledby="sy-categories-title"
      className="mx-auto max-w-[1360px] scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <SectionHeading
        index="01"
        eyebrow="Shop by category"
        title={<span id="sy-categories-title">Find your everyday edit.</span>}
        description="Six focused collections - from breathable cotton kurtis to coordinated pant sets - each opening on its own filtered view."
        action={
          <Link
            href={`${syHomeHref}/collections`}
            className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.2em] text-[#4B2C3B] uppercase underline decoration-[#DCCFC9] underline-offset-4 transition hover:text-[#A63D57]"
          >
            Shop all
            <ArrowUpRight aria-hidden className="h-4 w-4" />
          </Link>
        }
      />

      <ul className="mt-10 grid grid-cols-2 gap-4 lg:mt-14 lg:grid-cols-3 lg:gap-6">
        {syCategories.map((category, index) => {
          const count = getSyProductsByCategory(category.key).length;
          return (
            <li key={category.key}>
              <Reveal delay={Math.min(index, 3) * 0.07}>
                <Link
                  href={category.href}
                  className="group relative block overflow-hidden rounded-[2px] bg-[#F2E8E3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A63D57]"
                >
                  <SyImage
                    src={category.image}
                    alt={category.imageAlt}
                    aspectClassName="aspect-[4/5]"
                    imgClassName="transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                  />
                  <span
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-[#2C1F26]/80 via-[#2C1F26]/15 to-transparent"
                  />
                  <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-[#FBF6F2]/90 text-[#2C1F26] opacity-0 transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                    <ArrowUpRight aria-hidden className="h-4 w-4" />
                  </span>

                  <span className="absolute inset-x-0 bottom-0 block p-4 text-left sm:p-5">
                    <span className="block text-[9px] tracking-[0.26em] text-[#F1D7DB] uppercase">
                      {count} {count === 1 ? "piece" : "pieces"}
                    </span>
                    <span className="font-sy-display mt-1 block text-[1.15rem] leading-tight text-[#FBF6F2] sm:text-[1.35rem]">
                      {category.label}
                    </span>
                    <span className="mt-1.5 hidden text-[12.5px] leading-snug text-[#E4D3D7] sm:block">
                      {category.blurb}
                    </span>
                  </span>
                </Link>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
