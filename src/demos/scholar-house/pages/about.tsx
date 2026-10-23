import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, RevealImage } from "@/components/shared/reveal";
import { scholarTimeline, scholarWhy } from "../data";

export default function ScholarAboutPage() {
  return (
    <>
      <section aria-labelledby="about-hero" className="border-b border-[#1F3A2E]/12">
        <div className="mx-auto max-w-[1200px] px-4 pt-14 pb-12 sm:px-6 lg:px-8">
          <Reveal y={14}>
            <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.3em] text-[#A8842C] uppercase">
              <span aria-hidden className="h-px w-8 bg-[#A8842C]" />
              About the Institute
            </p>
            <h1
              id="about-hero"
              className="mt-4 max-w-3xl font-scholar-display text-4xl leading-tight font-medium tracking-tight text-[#1F3A2E] sm:text-6xl"
            >
              A neighbourhood institute with
              <span className="italic"> old-school standards</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#5C6B60] sm:text-lg">
              Scholar House was founded in 2012 on the belief that excellent
              teaching is patient, personal, and unhurried. More than a decade
              later, those values still shape every batch, every timetable, and
              every conversation with a family.
            </p>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="about-story" className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)] lg:gap-16">
          <Reveal y={16}>
            <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.3em] text-[#A8842C] uppercase">
              <span aria-hidden className="h-px w-8 bg-[#A8842C]" />
              Our Story
            </p>
            <h2
              id="about-story"
              className="mt-4 font-scholar-display text-3xl leading-tight font-medium tracking-tight text-[#1F3A2E] sm:text-4xl"
            >
              Built above the old public library
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-[#5C6B60]">
              Scholar House began in two rented rooms above the neighbourhood
              public library, with fourteen students and a single promise to
              their parents: every child would be known, and no child would be
              rushed. That promise still holds. We have grown into a
              purpose-built campus, but batches remain small, faculty remain
              stable, and the reading room remains the quietest room in the
              building.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-[#5C6B60]">
              We teach Classes 9 to 12 across science and commerce streams,
              alongside a foundation programme for younger learners and a
              weekend olympiad stream for students who want to stretch further.
              What we do not do is chase volume. Growth, for us, has always
              been a by-product of teaching well. (This is illustrative demo
              copy for a design demonstration.)
            </p>
          </Reveal>
          <RevealImage delay={0.1}>
            <figure>
              <Image
                src="/images/scholar-house/classroom.jpg"
                alt="Interior of a Scholar House classroom with students at wooden desks"
                width={1400}
                height={788}
                sizes="(max-width: 1024px) 100vw, 400px"
                className="h-auto w-full object-cover"
              />
              <figcaption className="mt-3 text-xs text-[#5C6B60] italic">
                One of our small-batch classrooms.
              </figcaption>
            </figure>
          </RevealImage>
        </div>
      </section>

      <section
        aria-labelledby="about-timeline"
        className="border-y border-[#1F3A2E]/12 bg-[#F5EFE1]"
      >
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8">
          <Reveal y={16}>
            <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.3em] text-[#A8842C] uppercase">
              <span aria-hidden className="h-px w-8 bg-[#A8842C]" />
              Milestones
            </p>
            <h2
              id="about-timeline"
              className="mt-4 font-scholar-display text-3xl leading-tight font-medium tracking-tight text-[#1F3A2E] sm:text-4xl"
            >
              More than a decade of teaching
            </h2>
          </Reveal>
          <ol className="mt-10 border-l border-[#1F3A2E]/20 pl-6 sm:pl-10">
            {scholarTimeline.map((entry, index) => (
              <li key={entry.year} className="relative pb-10 last:pb-0">
                <Reveal delay={index * 0.06} y={16}>
                  <span
                    aria-hidden
                    className="absolute top-1.5 -left-[27px] h-2.5 w-2.5 rounded-full border-2 border-[#A8842C] bg-[#F5EFE1] sm:-left-[43px]"
                  />
                  <p className="font-scholar-display text-sm font-medium tracking-widest text-[#A8842C]">
                    {entry.year}
                  </p>
                  <h3 className="mt-1 font-scholar-display text-xl font-medium text-[#1F3A2E]">
                    {entry.title}
                  </h3>
                  <p className="mt-1.5 max-w-2xl text-[15px] leading-relaxed text-[#5C6B60]">
                    {entry.description}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="about-values" className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8">
        <Reveal y={16}>
          <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.3em] text-[#A8842C] uppercase">
            <span aria-hidden className="h-px w-8 bg-[#A8842C]" />
            Our Values
          </p>
          <h2
            id="about-values"
            className="mt-4 font-scholar-display text-3xl leading-tight font-medium tracking-tight text-[#1F3A2E] sm:text-4xl"
          >
            What we hold to
          </h2>
          <div aria-hidden className="mt-5 border-t-2 border-b border-[#1F3A2E]/20 pt-1">
            <div className="border-t border-[#A8842C]/40" />
          </div>
        </Reveal>
        <dl className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {scholarWhy.map((point, index) => (
            <Reveal key={point.title} delay={index * 0.06} y={18}>
              <div>
                <dt className="font-scholar-display text-xl font-medium text-[#1F3A2E]">
                  {point.title}
                </dt>
                <div aria-hidden className="mt-2 h-px w-6 bg-[#A8842C]" />
                <dd className="mt-3 text-[15px] leading-relaxed text-[#5C6B60]">
                  {point.description}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
        <Reveal y={14}>
          <div className="mt-12">
            <Link
              href="/demos/scholar-house/contact"
              className="group inline-flex items-center gap-2 bg-[#1F3A2E] px-7 py-3.5 text-sm font-medium tracking-wide text-[#FBF8F1] transition-colors hover:bg-[#2a4d3c] focus-visible:ring-2 focus-visible:ring-[#A8842C] focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              Visit the campus
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
