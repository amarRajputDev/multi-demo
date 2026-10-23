import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, RevealImage } from "@/components/shared/reveal";
import { syHomeHref } from "../data";
import { syImages } from "../images";
import { SyImage } from "../components/sy-image";

/**
 * Asymmetric editorial hero: oversized serif headline, supporting copy and a
 * large product photograph with an inset detail card.
 */
export function Hero() {
  return (
    <section
      aria-labelledby="sy-hero-title"
      className="relative overflow-hidden bg-[#FBF6F2]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-32 h-[26rem] w-[26rem] rounded-full bg-[#F6E4E6] blur-[120px]"
      />

      <div className="mx-auto grid max-w-[1360px] items-center gap-12 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="inline-flex items-center gap-2.5 text-[10px] font-medium tracking-[0.34em] text-[#A63D57] uppercase">
              <span aria-hidden className="h-px w-8 bg-[#E1BFC6]" />
              Everyday fashion
            </p>

            <h1
              id="sy-hero-title"
              className="font-sy-display mt-6 text-[clamp(2.7rem,6.4vw,4.7rem)] leading-[0.96] tracking-[-0.01em] text-[#2C1F26]"
            >
              Everyday Elegance,
              <br />
              <em className="font-normal text-[#A63D57] italic">Made Yours.</em>
            </h1>

            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[#6B5A61] sm:text-base">
              Explore thoughtfully styled kurtis and coordinated sets for your
              everyday wardrobe.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href={`${syHomeHref}/collections`}
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#2C1F26] px-7 py-4 text-[11px] font-medium tracking-[0.22em] text-[#FBF6F2] uppercase transition hover:bg-[#4B2C3B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A63D57]"
              >
                Shop the collection
                <ArrowRight
                  aria-hidden
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                href={`${syHomeHref}/collections/kurti-pant-sets`}
                className="inline-flex items-center gap-2.5 rounded-full border border-[#DCCFC9] px-7 py-4 text-[11px] font-medium tracking-[0.22em] text-[#4B2C3B] uppercase transition hover:border-[#A63D57] hover:text-[#A63D57] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A63D57]"
              >
                Discover kurti sets
              </Link>
            </div>

            <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-[#EADFDB] pt-6">
              {[
                ["6", "categories"],
                ["9", "demo pieces"],
                ["₹399", "starting price"],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="font-sy-display text-2xl text-[#2C1F26]">
                    {value}
                  </dt>
                  <dd className="mt-1 text-[10px] tracking-[0.2em] text-[#8B7B81] uppercase">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="relative lg:col-span-7">
          <RevealImage delay={0.1}>
            <SyImage
              src={syImages.burgundyOnForm}
              alt="Burgundy floral kurti with matching bottomwear displayed on a dress form"
              aspectClassName="aspect-[4/5] sm:aspect-[5/6]"
              loading="eager"
              className="ml-auto w-full rounded-[2px] sm:w-[88%]"
            />
          </RevealImage>

          <div className="absolute bottom-10 -left-2 hidden w-[36%] max-w-[220px] sm:block">
            <Reveal delay={0.3}>
              <SyImage
                src={syImages.pinkEmbroideredSet}
                alt="Bright pink coordinated kurti and pant set with embroidered detailing"
                aspectClassName="aspect-[4/5]"
                className="rounded-[2px] border-[6px] border-[#FBF6F2] shadow-[0_24px_50px_rgba(44,31,38,0.2)]"
              />
            </Reveal>
          </div>

          <div className="absolute -bottom-8 right-0 w-[78%] max-w-[330px] sm:right-6 lg:-bottom-10">
            <Reveal delay={0.4}>
              <div className="rounded-[2px] border border-[#EADFDB] bg-white/92 p-5 shadow-[0_18px_40px_rgba(44,31,38,0.1)] backdrop-blur-sm">
                <p className="text-[10px] tracking-[0.3em] text-[#A63D57] uppercase">
                  Coordinated sets
                </p>
                <p className="font-sy-display mt-2 text-[1.05rem] leading-snug text-[#2C1F26]">
                  Kurti and pant pairings, styled to wear together.
                </p>
                <Link
                  href={`${syHomeHref}/collections/kurti-pant-sets`}
                  className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-medium tracking-[0.18em] text-[#4B2C3B] uppercase underline decoration-[#DCCFC9] underline-offset-4 transition hover:text-[#A63D57]"
                >
                  Explore the sets
                  <ArrowRight aria-hidden className="h-3.5 w-3.5" />
                </Link>
              </div>
            </Reveal>
          </div>

          <p
            aria-hidden
            className="pointer-events-none absolute -left-5 top-1/4 hidden origin-left -rotate-90 text-[10px] tracking-[0.42em] text-[#A99AA0] uppercase xl:block"
          >
            Redesign concept
          </p>
        </div>
      </div>
    </section>
  );
}
