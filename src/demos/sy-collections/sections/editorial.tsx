import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Reveal, RevealImage } from "@/components/shared/reveal";
import { SectionHeading } from "../components/section-heading";
import { SyImage } from "../components/sy-image";
import { syHomeHref } from "../data";
import { syImages } from "../images";

const EDITORIAL_POINTS = [
  "Relaxed everyday silhouettes",
  "Coordinated sets for busy mornings",
  "Prints and finishes for occasion days",
];

/** Large editorial panel pairing one strong photograph with styling copy. */
export function Editorial() {
  return (
    <section
      id="editorial"
      aria-labelledby="sy-editorial-title"
      className="bg-[#F7F1EC]"
    >
      <div className="mx-auto grid max-w-[1360px] items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8 lg:py-24">
        <div className="relative lg:col-span-6">
          <RevealImage>
            <SyImage
              src={syImages.pinkEmbroideredModel}
              alt="Pink embroidered kurti photographed on a model"
              aspectClassName="aspect-[4/5] lg:aspect-[5/6]"
              className="rounded-[2px]"
            />
          </RevealImage>

          <div className="absolute -bottom-6 right-4 max-w-[220px] lg:-right-6">
            <Reveal delay={0.2}>
              <p className="rounded-[2px] border border-[#EADFDB] bg-white px-5 py-4 text-[13px] leading-relaxed text-[#4B2C3B] shadow-[0_18px_40px_rgba(44,31,38,0.1)]">
                <span className="font-sy-display block text-[1.05rem] text-[#2C1F26]">
                  The cotton edit
                </span>
                Soft-toned kurtis for daily rotation.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <Reveal delay={0.12}>
            <SectionHeading
              index="03"
              eyebrow="Editorial"
              title={
                <span id="sy-editorial-title">
                  Your Everyday Wardrobe,
                  <br />
                  Reimagined.
                </span>
              }
              description="A tighter, more considered way to shop the S_Y COLLECTIONS catalogue - fewer clicks, clearer edits and photography that lets the pieces speak first."
            />

            <ul className="mt-7 grid gap-3">
              {EDITORIAL_POINTS.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 border-b border-[#EADFDB] pb-3 text-[15px] text-[#4B2C3B]"
                >
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#F6E9EA] text-[#A63D57]">
                    <Check aria-hidden className="h-3 w-3" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`${syHomeHref}/collections/everyday-kurtis`}
                className="inline-flex items-center gap-2 rounded-full bg-[#2C1F26] px-6 py-3.5 text-[11px] font-medium tracking-[0.2em] text-[#FBF6F2] uppercase transition hover:bg-[#4B2C3B]"
              >
                Explore everyday kurtis
              </Link>
              <Link
                href={`${syHomeHref}/collections`}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#DCCFC9] px-6 py-3.5 text-[11px] font-medium tracking-[0.2em] text-[#4B2C3B] uppercase transition hover:border-[#A63D57] hover:text-[#A63D57]"
              >
                See all edits
                <ArrowUpRight aria-hidden className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
