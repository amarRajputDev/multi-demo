import Image from "next/image";
import { Reveal, RevealImage } from "@/components/shared/reveal";
import { scholarJourney } from "../data";

export function Journey() {
  return (
    <section
      aria-labelledby="journey-heading"
      className="border-y border-[#1F3A2E]/12 bg-[#F5EFE1]"
    >
      <div className="mx-auto max-w-[1200px] px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:gap-16">
          <div>
            <Reveal y={16}>
              <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.3em] text-[#A8842C] uppercase">
                <span aria-hidden className="h-px w-8 bg-[#A8842C]" />
                The Scholar House Method
              </p>
              <h2
                id="journey-heading"
                className="mt-4 font-scholar-display text-4xl leading-tight font-medium tracking-tight text-[#1F3A2E] sm:text-5xl"
              >
                A deliberate path,
                <br className="hidden sm:block" /> term after term
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-[#5C6B60]">
                Progress here is planned, not left to chance. Every student
                follows a written learning term-plan, reviewed with faculty and
                family at natural checkpoints through the year.
              </p>
            </Reveal>

            <ol className="mt-10 space-y-0">
              {scholarJourney.map((step, index) => (
                <li
                  key={step.step}
                  className="border-t border-[#1F3A2E]/12 last:border-b"
                >
                  <Reveal
                    delay={index * 0.06}
                    y={18}
                    className="grid grid-cols-[44px_1fr] gap-4 py-6"
                  >
                    <span
                      aria-hidden
                      className="font-scholar-display pt-0.5 text-lg font-medium text-[#A8842C]"
                    >
                      {step.step}
                    </span>
                    <div>
                      <h3 className="font-scholar-display text-xl font-medium text-[#1F3A2E]">
                        {step.title}
                      </h3>
                      <p className="mt-1.5 text-[15px] leading-relaxed text-[#5C6B60]">
                        {step.description}
                      </p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>

          <RevealImage delay={0.15} className="lg:sticky lg:top-24 lg:self-start">
            <figure>
              <Image
                src="/images/scholar-house/students.jpg"
                alt="Students working together on practice problems in the Scholar House reading room"
                width={1400}
                height={933}
                sizes="(max-width: 1024px) 100vw, 420px"
                className="h-auto w-full object-cover"
              />
              <figcaption className="mt-3 text-xs text-[#5C6B60] italic">
                Guided practice in the reading room — part of every
                week&apos;s timetable.
              </figcaption>
            </figure>
          </RevealImage>
        </div>
      </div>
    </section>
  );
}
