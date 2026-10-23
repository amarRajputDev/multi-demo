import Image from "next/image";
import { Reveal, RevealImage } from "@/components/shared/reveal";
import { northstarJourneys } from "../data";

export function Journeys() {
  return (
    <section
      aria-labelledby="journeys-heading"
      className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:py-28"
    >
      <Reveal y={14} duration={0.8}>
        <div className="max-w-2xl">
          <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.3em] text-[#9C4F36] uppercase">
            <span aria-hidden className="h-px w-8 bg-[#9C4F36]" />
            Student journeys
          </p>
          <h2
            id="journeys-heading"
            className="mt-5 text-[2rem] leading-[1.12] tracking-tight text-[#26241F] sm:text-4xl"
          >
            Three routes through
            <span className="text-[#9C4F36] italic"> one discipline.</span>
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-[#6E6A62]">
            Preparation looks different for a working professional than for a
            final-year student. The habits are the same; the timetable bends.
            These illustrative stories show how. (Fictional demo accounts.)
          </p>
        </div>
      </Reveal>

      <div className="mt-14 space-y-px border-t border-[#26241F]/15">
        {northstarJourneys.map((journey, index) => (
          <Reveal key={journey.id} delay={0.05} duration={0.8} y={20}>
            <article
              aria-labelledby={`${journey.id}-name`}
              className="grid gap-8 border-b border-[#26241F]/15 py-12 lg:grid-cols-12 lg:gap-12"
            >
              <div
                className={`lg:col-span-4 ${
                  index % 2 === 1 ? "lg:order-last" : ""
                }`}
              >
                <RevealImage duration={0.9}>
                  <figure>
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={journey.image}
                        alt={journey.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 400px"
                        className="object-cover"
                        loading="lazy"
                      />
                    </div>
                    <figcaption className="mt-2.5 text-xs text-[#6E6A62] italic">
                      {journey.track} · {journey.timeframe}
                    </figcaption>
                  </figure>
                </RevealImage>
              </div>

              <div className="lg:col-span-8">
                <blockquote>
                  <p
                    id={`${journey.id}-name`}
                    className="font-northstar-display text-[1.625rem] leading-[1.45] text-[#26241F] sm:text-[1.875rem]"
                  >
                    <span aria-hidden className="text-[#9C4F36]">“</span>
                    {journey.story}
                    <span aria-hidden className="text-[#9C4F36]">”</span>
                  </p>
                </blockquote>
                <div className="mt-6 flex flex-wrap items-baseline gap-x-6 gap-y-2 border-t border-[#26241F]/15 pt-5">
                  <p className="text-sm font-semibold tracking-[0.08em] text-[#26241F]">
                    {journey.aspirant}
                  </p>
                  <p className="text-sm text-[#9C4F36] italic">
                    {journey.outcome}
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
