import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal, RevealImage } from "@/components/shared/reveal";
import { AnyaaImage } from "../components/anyaa-image";
import { SectionHeading } from "../components/section-heading";
import { getAnyaaCategoryMeta } from "../data";
import { getAnyaaProductsByCategory } from "../products";

const FEATURED_CATEGORIES = ["everyday-fashion", "kurti-collection"] as const;

/** Two-up feature for the Everyday Fashion and Kurti Collection edits. */
export function CollectionsFeature() {
  return (
    <section
      aria-labelledby="anyaa-collections-title"
      className="border-b border-[#DFE7E2] bg-[#FAF8F3]"
    >
      <div className="mx-auto max-w-[1360px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          index="Collections"
          eyebrow="The edits"
          title={<span id="anyaa-collections-title">Two ways to wear Anyaa.</span>}
          description="Start with the everyday fashion wardrobe, or dive straight into the kurti collection the brand is known for."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-10">
          {FEATURED_CATEGORIES.map((key, index) => {
            const meta = getAnyaaCategoryMeta(key);
            const count = getAnyaaProductsByCategory(key).length;
            const lead = getAnyaaProductsByCategory(key)[0];

            return (
              <Reveal key={key} delay={index * 0.08}>
                <article className="group flex h-full flex-col overflow-hidden rounded-[3px] border border-[#DFE7E2] bg-white transition hover:border-[#2E6F62]/40">
                  <RevealImage>
                    <AnyaaImage
                      src={lead?.image ?? null}
                      alt={lead?.imageAlt ?? meta.blurb}
                      tint={meta.tint}
                      aspectClassName="aspect-[16/10]"
                      loading="eager"
                      imgClassName="transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                    />
                  </RevealImage>

                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <p className="font-anyaa-body text-[10px] tracking-[0.3em] text-[#2E6F62] uppercase">
                      {count} {count === 1 ? "piece" : "pieces"}
                    </p>
                    <h3 className="font-anyaa-display mt-2 text-[1.8rem] leading-tight text-[#22332F]">
                      {meta.label}
                    </h3>
                    <p className="font-anyaa-body mt-3 text-[14.5px] leading-relaxed text-[#6E7C77]">
                      {meta.blurb}
                    </p>
                    <Link
                      href={meta.href}
                      className="font-anyaa-body mt-6 inline-flex w-fit items-center gap-2 text-[11px] font-medium tracking-[0.2em] text-[#2E6F62] uppercase transition hover:gap-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2E6F62]"
                    >
                      Explore {meta.label}
                      <ArrowUpRight aria-hidden className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
