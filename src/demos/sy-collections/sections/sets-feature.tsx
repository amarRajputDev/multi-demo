import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, RevealImage } from "@/components/shared/reveal";
import { SectionHeading } from "../components/section-heading";
import { SyImage } from "../components/sy-image";
import { syHomeHref } from "../data";
import { syImages } from "../images";

/** Dedicated dark band celebrating coordinated kurti-pant sets. */
export function SetsFeature() {
  return (
    <section
      id="sets"
      aria-labelledby="sy-sets-title"
      className="bg-[#2C1F26] text-[#FBF6F2]"
    >
      <div className="mx-auto grid max-w-[1360px] items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8 lg:py-24">
        <div className="relative lg:col-span-6">
          <RevealImage>
            <SyImage
              src={syImages.redFloralSet}
              alt="Red floral kurti top shown with matching trousers as a coordinated outfit"
              aspectClassName="aspect-[4/5] lg:aspect-[5/6]"
              className="rounded-[2px]"
            />
          </RevealImage>

          <div className="absolute -bottom-8 right-3 hidden w-[38%] max-w-[230px] sm:block lg:-right-8">
            <Reveal delay={0.2}>
              <SyImage
                src={syImages.redFloralSetAlt}
                alt="Cream-and-red floral top with coordinating trousers"
                aspectClassName="aspect-[4/5]"
                className="rounded-[2px] border-[6px] border-[#2C1F26] shadow-[0_24px_50px_rgba(0,0,0,0.35)]"
              />
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <Reveal delay={0.1}>
            <SectionHeading
              tone="dark"
              index="04"
              eyebrow="Kurti-pant sets"
              title={
                <span id="sy-sets-title">
                  Two pieces.
                  <br />
                  One considered look.
                </span>
              }
              description="Coordinated kurti-and-pant pairings for days when deciding is the hardest part. Styled together, priced accessibly, ready for your rotation."
            />

            <div className="mt-7 flex flex-wrap gap-2">
              {[
                { label: "All sets", href: `${syHomeHref}/collections/kurti-pant-sets` },
                {
                  label: "Bottomwear",
                  href: `${syHomeHref}/collections/bottomwear`,
                },
                {
                  label: "Premium cotton",
                  href: `${syHomeHref}/collections/premium-cotton`,
                },
              ].map((chip) => (
                <Link
                  key={chip.label}
                  href={chip.href}
                  className="rounded-full border border-[#FBF6F2]/25 px-4 py-2 text-[10.5px] tracking-[0.18em] text-[#F3E7E7] uppercase transition hover:border-[#E7B9C2] hover:text-[#F5CBD3]"
                >
                  {chip.label}
                </Link>
              ))}
            </div>

            <Link
              href={`${syHomeHref}/collections/kurti-pant-sets`}
              className="group mt-8 inline-flex items-center gap-2.5 rounded-full bg-[#FBF6F2] px-7 py-4 text-[11px] font-medium tracking-[0.22em] text-[#2C1F26] uppercase transition hover:bg-white"
            >
              Explore the sets
              <ArrowRight
                aria-hidden
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
              />
            </Link>

            <p className="mt-6 max-w-md text-[12px] leading-relaxed text-[#C9B4BA]">
              Set photography and product names are taken from the live
              catalogue; prices shown in this concept are editable demo data.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
