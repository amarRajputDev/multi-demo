import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, RevealImage } from "@/components/shared/reveal";
import { Enquiry } from "../components/enquiry";
import { northstarFaculty } from "../data";

export function generateMetadata(): Metadata {
  return {
    title: "Mentors — The Faculty | Northstar Institute (Demo)",
    description:
      "Meet the Northstar mentors: named faculty who design each cohort's syllabus, teach its core classes and return its evaluated copies. Illustrative demo profiles.",
  };
}

export default function NorthstarFacultyPage() {
  return (
    <>
      <section aria-labelledby="faculty-hero" className="border-b border-[#26241F]/12">
        <div className="mx-auto max-w-[1240px] px-5 pt-14 pb-14 sm:px-8 lg:pt-20">
          <Reveal y={12} duration={0.8}>
            <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.3em] text-[#9C4F36] uppercase">
              <span aria-hidden className="h-px w-8 bg-[#9C4F36]" />
              The Faculty
            </p>
            <h1
              id="faculty-hero"
              className="mt-5 max-w-3xl text-[2.5rem] leading-[1.06] tracking-tight text-[#26241F] sm:text-6xl lg:text-[4rem]"
            >
              Mentors who stay,
              <span className="text-[#9C4F36] italic">
                {" "}
                so the teaching compounds.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-[#6E6A62]">
              A Northstar cohort belongs to one named mentor who designs its
              syllabus map, teaches its core classes and returns its evaluated
              copies. Faculty profiles below are illustrative demo content.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        {northstarFaculty.map((member, index) => (
          <Reveal key={member.id} delay={0.04} duration={0.8} y={20}>
            <article
              aria-labelledby={`${member.id}-name`}
              className="grid gap-8 border-b border-[#26241F]/12 py-14 lg:grid-cols-12 lg:gap-12"
            >
              <div
                className={`lg:col-span-4 ${
                  index % 2 === 1 ? "lg:order-last" : ""
                }`}
              >
                <RevealImage delay={0.08} duration={0.9}>
                  <figure>
                    <div className="relative aspect-[3/4] w-full">
                      <Image
                        src={member.image}
                        alt={member.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 400px"
                        className="object-cover object-top"
                        loading={index === 0 ? undefined : "lazy"}
                      />
                    </div>
                    <figcaption className="mt-2.5 text-xs text-[#6E6A62] italic">
                      {member.name}, Northstar mentor.
                    </figcaption>
                  </figure>
                </RevealImage>
              </div>

              <div className="lg:col-span-8">
                <p className="text-[10px] font-semibold tracking-[0.24em] text-[#9C4F36] uppercase">
                  {member.role}
                </p>
                <h2
                  id={`${member.id}-name`}
                  className="mt-3 font-northstar-display text-[2rem] leading-tight text-[#26241F] sm:text-[2.5rem]"
                >
                  {member.name}
                </h2>
                <div aria-hidden className="mt-4 h-px w-14 bg-[#9C4F36]" />
                <p className="mt-5 text-sm font-medium tracking-[0.05em] text-[#26241F]/80">
                  {member.credentials}
                </p>
                <p className="mt-5 max-w-2xl text-[1.0625rem] leading-[1.75] text-[#6E6A62]">
                  {member.bio}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <section
        aria-labelledby="faculty-practice"
        className="border-y border-[#26241F]/12 bg-[#F1ECE3]"
      >
        <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:gap-14 lg:py-20">
          <div className="lg:col-span-7">
            <Reveal y={14} duration={0.8}>
              <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.3em] text-[#9C4F36] uppercase">
                <span aria-hidden className="h-px w-8 bg-[#9C4F36]" />
                How mentorship works here
              </p>
              <h2
                id="faculty-practice"
                className="mt-5 text-[2rem] leading-[1.12] tracking-tight text-[#26241F] sm:text-4xl"
              >
                Three duties every mentor
                <span className="text-[#9C4F36] italic"> keeps.</span>
              </h2>
              <ul className="mt-8 space-y-6">
                {[
                  {
                    title: "Owns the syllabus map",
                    description:
                      "The mentor who teaches a cohort also writes its week-by-week plan, so lectures, tests and reading lists never contradict each other.",
                  },
                  {
                    title: "Returns every written copy",
                    description:
                      "Answer sheets are marked in the mentor's own hand with a rubric and one line of next-action advice. Nothing is outsourced to evaluators.",
                  },
                  {
                    title: "Holds office hours",
                    description:
                      "Two fixed hours a week, per cohort, for one-to-one doubt — the quiet conversations where most of the real preparation actually happens.",
                  },
                ].map((duty, dutyIndex) => (
                  <li key={duty.title}>
                    <Reveal delay={dutyIndex * 0.06} duration={0.8} y={14}>
                      <div className="border-t border-[#26241F]/20 pt-4">
                        <h3 className="font-northstar-display text-xl text-[#26241F]">
                          {duty.title}
                        </h3>
                        <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-[#6E6A62]">
                          {duty.description}
                        </p>
                      </div>
                    </Reveal>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link
                  href="/demos/northstar/contact"
                  className="group inline-flex min-h-12 items-center gap-2 border-b border-[#9C4F36] pb-0.5 text-[13px] tracking-[0.14em] text-[#26241F] uppercase transition-colors hover:text-[#9C4F36] focus-visible:ring-2 focus-visible:ring-[#9C4F36] focus-visible:ring-offset-4 focus-visible:outline-none"
                >
                  Arrange a conversation with a mentor
                  <ArrowRight
                    aria-hidden
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <RevealImage delay={0.1} duration={0.9}>
              <figure>
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/images/northstar/mentor.jpg"
                    alt="A Northstar mentor in conversation with an aspirant after class"
                    fill
                    sizes="(max-width: 1024px) 100vw, 460px"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <figcaption className="mt-2.5 text-xs text-[#6E6A62] italic">
                  Office hours: the quiet half-hour where most doubts are
                  actually settled.
                </figcaption>
              </figure>
            </RevealImage>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="faculty-enquire"
        className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 lg:py-20"
      >
        <h2 id="faculty-enquire" className="sr-only">
          Speak with the faculty
        </h2>
        <Enquiry
          heading="Speak with a mentor"
          subheading="Ask for a short call with the mentor who would lead your cohort — before you commit to anything."
        />
      </section>
    </>
  );
}
