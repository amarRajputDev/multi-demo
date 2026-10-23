import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, RevealImage } from "@/components/shared/reveal";
import { scholarResults, scholarTestimonials } from "../data";

export default function ScholarResultsPage() {
  return (
    <>
      <section aria-labelledby="results-hero" className="border-b border-[#1F3A2E]/12">
        <div className="mx-auto max-w-[1200px] px-4 pt-14 pb-12 sm:px-6 lg:px-8">
          <Reveal y={14}>
            <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.3em] text-[#A8842C] uppercase">
              <span aria-hidden className="h-px w-8 bg-[#A8842C]" />
              Results &amp; Recognition
            </p>
            <h1
              id="results-hero"
              className="mt-4 max-w-3xl font-scholar-display text-4xl leading-tight font-medium tracking-tight text-[#1F3A2E] sm:text-6xl"
            >
              Steady preparation,
              <span className="italic"> calmly expressed</span> in results
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#5C6B60] sm:text-lg">
              We measure success by understanding, not just marks — but we are
              proud of the outcomes our students earn. All figures and stories
              on this page are illustrative placeholders for this design demo.
            </p>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="results-figures" className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 lg:px-8">
        <Reveal y={16}>
          <h2
            id="results-figures"
            className="font-scholar-display text-3xl font-medium tracking-tight text-[#1F3A2E] sm:text-4xl"
          >
            Achievement highlights
          </h2>
          <div aria-hidden className="mt-5 border-t-2 border-b border-[#1F3A2E]/20 pt-1">
            <div className="border-t border-[#A8842C]/40" />
          </div>
        </Reveal>
        <ul className="mt-10 grid gap-px border border-[#1F3A2E]/15 bg-[#1F3A2E]/15 sm:grid-cols-2 lg:grid-cols-4">
          {scholarResults.map((item, index) => (
            <li key={item.label} className="bg-[#FBF8F1]">
              <Reveal delay={index * 0.06} y={18} className="flex h-full flex-col p-7">
                <p className="font-scholar-display text-5xl leading-none font-medium text-[#1F3A2E]">
                  {item.figure}
                </p>
                <div aria-hidden className="mt-4 h-px w-8 bg-[#A8842C]" />
                <p className="mt-4 text-sm font-semibold tracking-wide text-[#1F3A2E]">
                  {item.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#5C6B60]">
                  {item.detail}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="results-story"
        className="border-y border-[#1F3A2E]/12 bg-[#F5EFE1]"
      >
        <div className="mx-auto grid max-w-[1200px] gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)] lg:gap-16 lg:px-8">
          <div>
            <Reveal y={16}>
              <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.3em] text-[#A8842C] uppercase">
                <span aria-hidden className="h-px w-8 bg-[#A8842C]" />
                How results are built
              </p>
              <h2
                id="results-story"
                className="mt-4 font-scholar-display text-3xl leading-tight font-medium tracking-tight text-[#1F3A2E] sm:text-4xl"
              >
                Results are a by-product
                <br className="hidden sm:block" /> of the process
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-[#5C6B60]">
                Students here do not chase marks directly. They follow the
                timetable, hand in their weekly work, attend clinics when
                concepts feel shaky, and revise on a published cycle. Marks
                follow understanding — and understanding follows steady,
                supported effort.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Weekly worksheets with model answers, reviewed line by line",
                  "Fortnightly tests under exam-hall conditions",
                  "Three full pre-boards before board examinations",
                  "One-to-one review of every student's weakest chapter",
                ].map((line) => (
                  <li
                    key={line}
                    className="flex gap-3 text-[15px] leading-relaxed text-[#5C6B60]"
                  >
                    <span
                      aria-hidden
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#A8842C]"
                    />
                    {line}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <RevealImage delay={0.12}>
            <figure>
              <Image
                src="/images/scholar-house/writing.jpg"
                alt="Close-up of a student writing answers during a practice test"
                width={1400}
                height={933}
                sizes="(max-width: 1024px) 100vw, 400px"
                className="h-auto w-full object-cover"
              />
              <figcaption className="mt-3 text-xs text-[#5C6B60] italic">
                Written practice under exam conditions, every fortnight.
              </figcaption>
            </figure>
          </RevealImage>
        </div>
      </section>

      <section aria-labelledby="results-voices" className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8">
        <Reveal y={16}>
          <h2
            id="results-voices"
            className="font-scholar-display text-3xl font-medium tracking-tight text-[#1F3A2E] sm:text-4xl"
          >
            Voices from our families
          </h2>
        </Reveal>
        <ul className="mt-8 grid gap-8 md:grid-cols-3">
          {scholarTestimonials.map((item, index) => (
            <li key={item.id}>
              <Reveal delay={index * 0.08} y={18}>
                <figure className="flex h-full flex-col border border-[#1F3A2E]/12 p-7">
                  <blockquote className="flex-1">
                    <p className="font-scholar-display text-lg leading-relaxed text-[#1F3A2E]">
                      {item.quote}
                    </p>
                  </blockquote>
                  <figcaption className="mt-5 border-t border-[#1F3A2E]/12 pt-4">
                    <p className="text-sm font-semibold text-[#1F3A2E]">
                      {item.name}
                    </p>
                    <p className="mt-0.5 text-xs text-[#5C6B60]">{item.role}</p>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
        <Reveal y={14}>
          <div className="mt-12 text-center">
            <Link
              href="/demos/scholar-house/contact"
              className="group inline-flex items-center gap-2 bg-[#1F3A2E] px-7 py-3.5 text-sm font-medium tracking-wide text-[#FBF8F1] transition-colors hover:bg-[#2a4d3c] focus-visible:ring-2 focus-visible:ring-[#A8842C] focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              Discuss your child&apos;s goals with us
              <ArrowRight
                aria-hidden
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
