import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal, RevealImage } from "@/components/shared/reveal";
import { Enquiry } from "../components/enquiry";
import { northstarCourses, northstarRoadmap } from "../data";

export function generateMetadata(): Metadata {
  return {
    title: "Programmes — UPSC, SSC & Banking | Northstar Institute (Demo)",
    description:
      "Five mentor-led programmes for UPSC General Studies, SSC CGL/CHSL, banking PO & clerk, optional mentoring and the personality test. Illustrative demo content.",
  };
}

export default function NorthstarCoursesPage() {
  return (
    <>
      <section aria-labelledby="courses-hero" className="border-b border-[#26241F]/12">
        <div className="mx-auto max-w-[1240px] px-5 pt-14 pb-14 sm:px-8 lg:pt-20">
          <Reveal y={12} duration={0.8}>
            <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.3em] text-[#9C4F36] uppercase">
              <span aria-hidden className="h-px w-8 bg-[#9C4F36]" />
              Prospectus
            </p>
            <h1
              id="courses-hero"
              className="mt-5 max-w-3xl text-[2.5rem] leading-[1.06] tracking-tight text-[#26241F] sm:text-6xl lg:text-[4rem]"
            >
              Programmes designed as
              <span className="text-[#9C4F36] italic"> structures,</span>
              not syllabus dumps.
            </h1>
            <p className="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-[#6E6A62]">
              Every programme below shares the same method: a mapped syllabus,
              weekly evaluated writing, and a named mentor who owns the cohort.
              Durations, modes and fees shown are illustrative demo figures.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        {northstarCourses.map((course, index) => (
          <Reveal key={course.id} delay={0.04} duration={0.8} y={20}>
            <article
              id={course.id}
              aria-labelledby={`${course.id}-title`}
              className="grid gap-8 border-b border-[#26241F]/12 py-14 lg:grid-cols-12 lg:gap-12"
            >
              <div className="lg:col-span-3">
                <p className="text-[10px] font-semibold tracking-[0.24em] text-[#6E6A62] uppercase">
                  Programme {String(index + 1).padStart(2, "0")}
                </p>
                <h2
                  id={`${course.id}-title`}
                  className="mt-3 font-northstar-display text-[1.75rem] leading-tight text-[#26241F] sm:text-3xl"
                >
                  {course.name}
                </h2>
              </div>

              <div className="lg:col-span-6">
                <p className="font-northstar-display text-xl leading-relaxed text-[#9C4F36] italic">
                  {course.tagline}
                </p>
                <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-y border-[#26241F]/12 py-4 text-sm">
                  <div className="flex gap-2">
                    <dt className="text-[#6E6A62]">Duration</dt>
                    <dd className="font-medium text-[#26241F]">
                      {course.duration}
                    </dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="text-[#6E6A62]">Mode</dt>
                    <dd className="font-medium text-[#26241F]">
                      {course.mode}
                    </dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="text-[#6E6A62]">Fee</dt>
                    <dd className="font-medium text-[#26241F]">{course.fee}</dd>
                  </div>
                </dl>
                <ul className="mt-6 space-y-3">
                  {course.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3 text-[15px] leading-relaxed text-[#6E6A62]"
                    >
                      <span
                        aria-hidden
                        className="mt-2.5 h-px w-4 shrink-0 bg-[#9C4F36]"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-3">
                {index === 1 ? (
                  <RevealImage delay={0.08} duration={0.9}>
                    <figure>
                      <div className="relative aspect-[4/5] w-full">
                        <Image
                          src="/images/northstar/books.jpg"
                          alt="Standard reference books stacked with reading markers"
                          fill
                          sizes="(max-width: 1024px) 100vw, 320px"
                          className="object-cover"
                          loading="lazy"
                        />
                      </div>
                      <figcaption className="mt-2.5 text-xs text-[#6E6A62] italic">
                        A prescribed reading list — short, standard, and
                        re-read often.
                      </figcaption>
                    </figure>
                  </RevealImage>
                ) : (
                  <div className="border-t border-[#26241F]/20 pt-4">
                    <p className="text-[10px] font-semibold tracking-[0.24em] text-[#6E6A62] uppercase">
                      Included in every programme
                    </p>
                    <ul className="mt-4 space-y-2 text-sm text-[#6E6A62]">
                      <li>Weekly evaluated writing</li>
                      <li>Published test calendar</li>
                      <li>Mentor office hours</li>
                      <li>Library &amp; reading-room access</li>
                    </ul>
                  </div>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <section
        aria-labelledby="courses-method"
        className="mt-4 border-y border-[#26241F]/12 bg-[#F1ECE3]"
      >
        <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 lg:py-20">
          <Reveal y={14} duration={0.8}>
            <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.3em] text-[#9C4F36] uppercase">
              <span aria-hidden className="h-px w-8 bg-[#9C4F36]" />
              Inside every programme
            </p>
            <h2
              id="courses-method"
              className="mt-5 max-w-2xl text-[2rem] leading-[1.12] tracking-tight text-[#26241F] sm:text-4xl"
            >
              The five stages of preparation
            </h2>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-[#6E6A62]">
              However long the programme, aspirants move through the same
              stages — each with an artefact you can hold in your hand.
            </p>
          </Reveal>
          <ol className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
            {northstarRoadmap.map((stage) => (
              <li key={stage.stage}>
                <Reveal duration={0.8} y={14}>
                  <div className="border-t border-[#26241F]/20 pt-4">
                    <p className="text-[10px] tracking-[0.2em] text-[#9C4F36] uppercase">
                      Stage {stage.stage} · {stage.window}
                    </p>
                    <h3 className="mt-2 font-northstar-display text-lg text-[#26241F]">
                      {stage.title}
                    </h3>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        aria-labelledby="courses-enquire"
        className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 lg:py-20"
      >
        <h2 id="courses-enquire" className="sr-only">
          Enquire about programmes
        </h2>
        <Enquiry
          heading="Ask about a programme"
          subheading="Not sure which cohort fits your timeline? Share your target examination and constraints — the counsellor will recommend honestly."
        />
        <Reveal y={10} duration={0.8}>
          <p className="mt-8 text-sm text-[#6E6A62]">
            Prefer to read first?{" "}
            <Link
              href="/demos/northstar/about"
              className="border-b border-[#9C4F36] pb-0.5 text-[#26241F] transition-colors hover:text-[#9C4F36]"
            >
              Our teaching philosophy
            </Link>
          </p>
        </Reveal>
      </section>
    </>
  );
}
