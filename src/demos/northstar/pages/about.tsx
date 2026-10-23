import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, RevealImage } from "@/components/shared/reveal";
import {
  northstarPrinciples,
  northstarRoadmap,
  northstarFaculty,
} from "../data";

export function generateMetadata(): Metadata {
  return {
    title: "About — Philosophy & Method | Northstar Institute (Demo)",
    description:
      "The philosophy behind Northstar Institute: mentor-led cohorts, syllabus as architecture, answer writing from week three, and counselling that can say no. Illustrative demo content.",
  };
}

const timeline = [
  {
    year: "2015",
    title: "The first cohort",
    description:
      "Founded above a public-library annexe with a single UPSC General Studies batch of sixteen aspirants and one promise: every answer copy would be read by the mentor who taught it. (Illustrative demo history.)",
  },
  {
    year: "2018",
    title: "The writing studio",
    description:
      "Answer writing moved from optional homework to a weekly ritual with a published rubric — the method that still defines every Northstar cohort.",
  },
  {
    year: "2021",
    title: "SSC & banking programmes",
    description:
      "The method was adapted for SSC and banking aspirants: sectional drills, speed sheets and interview studios built on the same mentor-ownership principle.",
  },
  {
    year: "2023",
    title: "The interview studio",
    description:
      "A winter cohort of eight, recorded mocks and honest debriefs — the personality-test programme that completes the preparation arc.",
  },
  {
    year: "2026",
    title: "This prospectus",
    description:
      "A deliberate, quieter presentation of the institute — less advertising, more architecture. You are reading its demo edition.",
  },
];

export default function NorthstarAboutPage() {
  return (
    <>
      <section aria-labelledby="about-hero" className="border-b border-[#26241F]/12">
        <div className="mx-auto max-w-[1240px] px-5 pt-14 pb-14 sm:px-8 lg:pt-20">
          <Reveal y={12} duration={0.8}>
            <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.3em] text-[#9C4F36] uppercase">
              <span aria-hidden className="h-px w-8 bg-[#9C4F36]" />
              About the Institute
            </p>
            <h1
              id="about-hero"
              className="mt-5 max-w-3xl text-[2.5rem] leading-[1.06] tracking-tight text-[#26241F] sm:text-6xl lg:text-[4rem]"
            >
              Built for candidates who
              <span className="text-[#9C4F36] italic"> mean it.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-[#6E6A62]">
              Northstar exists for one kind of aspirant: the person preparing
              seriously, often around a job or a family, who needs structure and
              honest mentorship more than motivation. This demo site presents
              that idea with the restraint it deserves.
            </p>
          </Reveal>
        </div>
      </section>

      <section
        aria-labelledby="about-story"
        className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 lg:py-24"
      >
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <Reveal y={14} duration={0.8}>
              <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.3em] text-[#9C4F36] uppercase">
                <span aria-hidden className="h-px w-8 bg-[#9C4F36]" />
                The idea
              </p>
              <h2
                id="about-story"
                className="mt-5 text-[2rem] leading-[1.12] tracking-tight text-[#26241F] sm:text-4xl"
              >
                Coaching, minus the theatre.
              </h2>
              <p className="mt-6 max-w-2xl text-[1.0625rem] leading-[1.75] text-[#6E6A62]">
                Competitive-examination coaching often competes on volume: more
                lectures, more materials, more announcements. Northstar was
                founded on the suspicion that most of that noise is
                substituting for the two things that actually move candidates
                forward — a mentor who knows your work, and a written habit you
                never break.
              </p>
              <p className="mt-4 max-w-2xl text-[1.0625rem] leading-[1.75] text-[#6E6A62]">
                So the institute is deliberately small, deliberately quiet, and
                deliberately willing to talk candidates out of programmes that
                do not fit them. Growth, if it comes, will come from the
                quality of that counsel. (This is illustrative demo copy for a
                design demonstration.)
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <RevealImage delay={0.1} duration={0.9}>
              <figure>
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/images/northstar/hero-desk.jpg"
                    alt="A quiet preparation desk with newspapers and marked papers, warm morning light"
                    fill
                    sizes="(max-width: 1024px) 100vw, 460px"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <figcaption className="mt-2.5 text-xs text-[#6E6A62] italic">
                  Quiet rooms, published timetables, and work that is actually
                  read.
                </figcaption>
              </figure>
            </RevealImage>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="about-principles"
        className="border-y border-[#26241F]/12 bg-[#F1ECE3]"
      >
        <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 lg:py-24">
          <Reveal y={14} duration={0.8}>
            <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.3em] text-[#9C4F36] uppercase">
              <span aria-hidden className="h-px w-8 bg-[#9C4F36]" />
              Philosophy
            </p>
            <h2
              id="about-principles"
              className="mt-5 text-[2rem] leading-[1.12] tracking-tight text-[#26241F] sm:text-4xl"
            >
              Four commitments, kept in writing.
            </h2>
          </Reveal>
          <ol className="mt-12">
            {northstarPrinciples.map((principle, index) => (
              <li key={principle.index}>
                <Reveal delay={index * 0.06} duration={0.8} y={16}>
                  <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-5 border-t border-[#26241F]/15 py-7 sm:gap-x-8 lg:grid-cols-[auto_minmax(0,28rem)_minmax(0,1fr)]">
                    <span
                      aria-hidden
                      className="font-northstar-display text-sm text-[#9C4F36] tabular-nums"
                    >
                      {principle.index}
                    </span>
                    <h3 className="font-northstar-display text-2xl leading-snug text-[#26241F]">
                      {principle.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-[#6E6A62] lg:mt-0">
                      {principle.description}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
            <li aria-hidden className="border-t border-[#26241F]/15" />
          </ol>
        </div>
      </section>

      <section
        aria-labelledby="about-method"
        className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 lg:py-24"
      >
        <Reveal y={14} duration={0.8}>
          <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.3em] text-[#9C4F36] uppercase">
            <span aria-hidden className="h-px w-8 bg-[#9C4F36]" />
            Method
          </p>
          <h2
            id="about-method"
            className="mt-5 max-w-2xl text-[2rem] leading-[1.12] tracking-tight text-[#26241F] sm:text-4xl"
          >
            The five stages,
            <span className="text-[#9C4F36] italic"> in order.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-[#6E6A62]">
            Preparation is staged deliberately. Each stage ends with an artefact
            — a map, a notebook, a marked copy, a scorecard — so progress is
            visible rather than felt.
          </p>
        </Reveal>
        <ol className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
          {northstarRoadmap.map((stage) => (
            <li key={stage.stage}>
              <Reveal duration={0.8} y={14}>
                <div className="border-t border-[#26241F]/20 pt-4">
                  <p className="text-[10px] tracking-[0.2em] text-[#9C4F36] uppercase">
                    Stage {stage.stage}
                  </p>
                  <h3 className="mt-2 font-northstar-display text-lg leading-snug text-[#26241F]">
                    {stage.title}
                  </h3>
                  <p className="mt-1 text-xs text-[#6E6A62]">{stage.window}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[#6E6A62]">
                    {stage.description}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <section
        aria-labelledby="about-history"
        className="border-y border-[#26241F]/12 bg-[#26241F] text-[#F7F4EF]"
      >
        <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 lg:py-24">
          <Reveal y={14} duration={0.8}>
            <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.3em] text-[#E5C9BC] uppercase">
              <span aria-hidden className="h-px w-8 bg-[#E5C9BC]" />
              A brief history (demo)
            </p>
            <h2
              id="about-history"
              className="mt-5 text-[2rem] leading-[1.12] tracking-tight sm:text-4xl"
            >
              Eleven years, five turning points.
            </h2>
          </Reveal>
          <ol className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
            {timeline.map((entry) => (
              <li key={entry.year}>
                <Reveal duration={0.8} y={16}>
                  <div className="border-t border-[#F7F4EF]/25 pt-4">
                    <p className="font-northstar-display text-sm tracking-[0.2em] text-[#E5C9BC]">
                      {entry.year}
                    </p>
                    <h3 className="mt-2 font-northstar-display text-lg leading-snug">
                      {entry.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#F7F4EF]/65">
                      {entry.description}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        aria-labelledby="about-mentors"
        className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 lg:py-24"
      >
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Reveal y={14} duration={0.8}>
              <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.3em] text-[#9C4F36] uppercase">
                <span aria-hidden className="h-px w-8 bg-[#9C4F36]" />
                The people
              </p>
              <h2
                id="about-mentors"
                className="mt-5 text-[2rem] leading-[1.12] tracking-tight text-[#26241F] sm:text-4xl"
              >
                Continuity is a
                <span className="text-[#9C4F36] italic"> results strategy.</span>
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[#6E6A62]">
                The four mentors below have taught together for years. The same
                argument, delivered with increasing precision, compounds —
                which is precisely why we keep faculty small and stable.
              </p>
              <ul className="mt-7 space-y-3">
                {northstarFaculty.map((member) => (
                  <li
                    key={member.id}
                    className="flex items-baseline gap-3 border-t border-[#26241F]/15 pt-3 text-[15px]"
                  >
                    <span className="font-northstar-display text-[#9C4F36]">
                      {member.name}
                    </span>
                    <span className="text-sm text-[#6E6A62]">
                      {member.role}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-9">
                <Link
                  href="/demos/northstar/faculty"
                  className="group inline-flex min-h-12 items-center gap-2 border-b border-[#9C4F36] pb-0.5 text-[13px] tracking-[0.14em] text-[#26241F] uppercase transition-colors hover:text-[#9C4F36] focus-visible:ring-2 focus-visible:ring-[#9C4F36] focus-visible:ring-offset-4 focus-visible:outline-none"
                >
                  Meet the mentors in full
                  <ArrowRight
                    aria-hidden
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <RevealImage delay={0.1} duration={0.9}>
              <figure>
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/northstar/books.jpg"
                    alt="The shared reference shelf maintained by Northstar mentors"
                    fill
                    sizes="(max-width: 1024px) 100vw, 700px"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <figcaption className="mt-2.5 text-xs text-[#6E6A62] italic">
                  The shared shelf: a short list of standard works, argued over
                  by four mentors.
                </figcaption>
              </figure>
            </RevealImage>
          </div>
        </div>
      </section>
    </>
  );
}
