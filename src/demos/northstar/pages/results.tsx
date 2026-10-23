import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, RevealImage } from "@/components/shared/reveal";
import { northstarJourneys, northstarResults, northstarTestimonials } from "../data";

export function generateMetadata(): Metadata {
  return {
    title: "Results & Record | Northstar Institute (Demo)",
    description:
      "The Northstar results record — achievement figures, student journeys and testimonial voices. All content is illustrative demo material, not verified claims.",
  };
}

export default function NorthstarResultsPage() {
  return (
    <>
      <section aria-labelledby="results-hero" className="border-b border-[#26241F]/12">
        <div className="mx-auto max-w-[1240px] px-5 pt-14 pb-14 sm:px-8 lg:pt-20">
          <Reveal y={12} duration={0.8}>
            <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.3em] text-[#9C4F36] uppercase">
              <span aria-hidden className="h-px w-8 bg-[#9C4F36]" />
              Results &amp; Record
            </p>
            <h1
              id="results-hero"
              className="mt-5 max-w-3xl text-[2.5rem] leading-[1.06] tracking-tight text-[#26241F] sm:text-6xl lg:text-[4rem]"
            >
              A record kept
              <span className="text-[#9C4F36] italic"> honestly.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-[#6E6A62]">
              Every figure, name and story on this page is an illustrative
              placeholder created for this design demo. A real institute would
              publish verifiable citations here; we publish fiction, clearly
              labelled, to demonstrate the layout.
            </p>
          </Reveal>
        </div>
      </section>

      <section
        aria-labelledby="results-figures"
        className="border-b border-[#26241F]/12 bg-[#E5C9BC]/40"
      >
        <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 lg:py-20">
          <Reveal y={14} duration={0.8}>
            <h2
              id="results-figures"
              className="text-[2rem] leading-tight tracking-tight text-[#26241F] sm:text-4xl"
            >
              Achievement highlights
              <span className="text-[#9C4F36] italic"> (demo figures)</span>
            </h2>
          </Reveal>
          <dl className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {northstarResults.map((item, index) => (
              <div key={item.label} className="border-t border-[#26241F]/20 pt-5">
                <Reveal delay={index * 0.06} duration={0.8} y={16}>
                  <dt>
                    <span className="font-northstar-display text-[3.25rem] leading-none text-[#26241F]">
                      {item.figure}
                    </span>
                    <span className="mt-3 block text-sm font-semibold tracking-[0.08em] text-[#26241F]">
                      {item.label}
                    </span>
                  </dt>
                  <dd className="mt-2.5 text-sm leading-relaxed text-[#6E6A62]">
                    {item.detail}
                  </dd>
                </Reveal>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section
        aria-labelledby="results-method"
        className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 lg:py-20"
      >
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <Reveal y={14} duration={0.8}>
              <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.3em] text-[#9C4F36] uppercase">
                <span aria-hidden className="h-px w-8 bg-[#9C4F36]" />
                How the record is built
              </p>
              <h2
                id="results-method"
                className="mt-5 text-[2rem] leading-[1.12] tracking-tight text-[#26241F] sm:text-4xl"
              >
                The result is the last chapter of a
                <span className="text-[#9C4F36] italic"> long book.</span>
              </h2>
              <p className="mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-[#6E6A62]">
                Aspirants who succeed here tend to share a profile: they wrote
                every week, revised on the published cycle, and treated mentor
                feedback as instruction rather than opinion. The figures above
                are fictional, but the method that would produce them is the
                whole point of the institute.
              </p>
              <ul className="mt-7 space-y-3.5">
                {[
                  "Weekly answer writing, marked against a published rubric",
                  "Prelims simulations under full exam-hall discipline",
                  "Mains seat-time blocks reproduced exactly in test series",
                  "One mentor conversation for every aspirant, every month",
                ].map((line) => (
                  <li
                    key={line}
                    className="flex gap-3 text-[15px] leading-relaxed text-[#6E6A62]"
                  >
                    <span
                      aria-hidden
                      className="mt-2.5 h-px w-4 shrink-0 bg-[#9C4F36]"
                    />
                    {line}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <RevealImage delay={0.1} duration={0.9}>
              <figure>
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/images/northstar/notes.jpg"
                    alt="A revision notebook with marginal notes beside a marked answer script"
                    fill
                    sizes="(max-width: 1024px) 100vw, 460px"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <figcaption className="mt-2.5 text-xs text-[#6E6A62] italic">
                  The artefacts of preparation: one notebook, many marked
                  copies.
                </figcaption>
              </figure>
            </RevealImage>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="results-journeys"
        className="border-y border-[#26241F]/12 bg-[#F1ECE3]"
      >
        <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 lg:py-20">
          <Reveal y={14} duration={0.8}>
            <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.3em] text-[#9C4F36] uppercase">
              <span aria-hidden className="h-px w-8 bg-[#9C4F36]" />
              Journeys (demo stories)
            </p>
            <h2
              id="results-journeys"
              className="mt-5 text-[2rem] leading-[1.12] tracking-tight text-[#26241F] sm:text-4xl"
            >
              What the record looks like
              <span className="text-[#9C4F36] italic"> up close.</span>
            </h2>
          </Reveal>
          <ul className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-3">
            {northstarJourneys.map((journey, index) => (
              <li key={journey.id}>
                <Reveal delay={index * 0.07} duration={0.8} y={18}>
                  <figure className="flex h-full flex-col">
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={journey.image}
                        alt={journey.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 360px"
                        className="object-cover"
                        loading="lazy"
                      />
                    </div>
                    <figcaption className="mt-5 flex flex-1 flex-col border-t border-[#26241F]/20 pt-4">
                      <p className="text-[10px] font-semibold tracking-[0.2em] text-[#9C4F36] uppercase">
                        {journey.track}
                      </p>
                      <p className="mt-2 font-northstar-display text-xl text-[#26241F]">
                        {journey.aspirant}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-[#6E6A62]">
                        {journey.outcome}
                      </p>
                      <p className="mt-4 text-xs tracking-[0.06em] text-[#6E6A62]/80 italic">
                        {journey.timeframe}
                      </p>
                    </figcaption>
                  </figure>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="results-voices"
        className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 lg:py-20"
      >
        <Reveal y={14} duration={0.8}>
          <h2
            id="results-voices"
            className="text-[2rem] leading-tight tracking-tight text-[#26241F] sm:text-4xl"
          >
            Voices from the cohorts
            <span className="text-[#9C4F36] italic"> (demo)</span>
          </h2>
        </Reveal>
        <ul className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-3">
          {northstarTestimonials.map((item, index) => (
            <li key={item.id}>
              <Reveal delay={index * 0.07} duration={0.8} y={18}>
                <figure className="flex h-full flex-col border-t border-[#26241F]/20 pt-6">
                  <blockquote className="flex-1">
                    <p className="font-northstar-display text-[1.375rem] leading-[1.6] text-[#26241F]">
                      {item.quote}
                    </p>
                  </blockquote>
                  <figcaption className="mt-6">
                    <p className="text-sm font-semibold text-[#26241F]">
                      {item.name}
                    </p>
                    <p className="mt-1 text-xs text-[#6E6A62]">{item.role}</p>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
        <Reveal y={12} duration={0.8}>
          <div className="mt-14">
            <Link
              href="/demos/northstar/contact"
              className="group inline-flex min-h-12 items-center gap-3 bg-[#26241F] px-8 py-3.5 text-[13px] tracking-[0.16em] text-[#F7F4EF] uppercase transition-colors duration-300 hover:bg-[#9C4F36] focus-visible:ring-2 focus-visible:ring-[#9C4F36] focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              Discuss your preparation timeline
              <ArrowRight
                aria-hidden
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
