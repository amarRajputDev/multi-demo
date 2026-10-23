import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { SyLogo } from "../components/logo";
import { syBrand, syHomeHref } from "../data";
import { formatSyPrice, syProducts } from "../products";

/** Affordable-fashion positioning, quoting the line the brand publishes. */
export function Positioning() {
  const startingPrice = Math.min(...syProducts.map((product) => product.price));

  return (
    <section
      id="positioning"
      aria-labelledby="sy-positioning-title"
      className="border-y border-[#EFE5E1] bg-white"
    >
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:py-24">
        <Reveal>
          <p className="text-[10px] font-medium tracking-[0.34em] text-[#A63D57] uppercase">
            05 &mdash; Style in budget
          </p>

          <figure className="mt-7">
            <blockquote
              id="sy-positioning-title"
              className="font-sy-display text-[clamp(1.6rem,3.6vw,2.7rem)] leading-[1.18] tracking-tight text-[#2C1F26]"
            >
              &ldquo;{syBrand.positionLine}&rdquo;
            </blockquote>
            <figcaption className="mt-4 text-[11px] tracking-[0.2em] text-[#8B7B81] uppercase">
              As published by {syBrand.name} on its storefront
            </figcaption>
          </figure>

          <div className="mx-auto mt-10 h-px w-20 bg-[#EADFDB]" />

          <p className="mx-auto mt-8 max-w-xl text-[15px] leading-relaxed text-[#6B5A61]">
            {syBrand.conceptLine} This concept keeps every price visible,
            honest and easy to compare - demonstration pieces start from{" "}
            <span className="font-sy-display text-[#A63D57]">
              {formatSyPrice(startingPrice)}
            </span>
            .
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-5">
            <SyLogo size={78} />
            <Link
              href={`${syHomeHref}/collections`}
              className="group inline-flex items-center gap-2.5 rounded-full bg-[#A63D57] px-8 py-4 text-[11px] font-medium tracking-[0.22em] text-white uppercase transition hover:bg-[#8E3148] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C1F26]"
            >
              Shop the collection
              <ArrowRight
                aria-hidden
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
