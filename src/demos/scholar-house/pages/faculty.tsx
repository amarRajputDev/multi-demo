import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, RevealImage } from "@/components/shared/reveal";
import { scholarFaculty } from "../data";

export default function ScholarFacultyPage() {
  return (
    <>
      <section aria-labelledby="faculty-hero" className="border-b border-[#1F3A2E]/12">
        <div className="mx-auto max-w-[1200px] px-4 pt-14 pb-12 sm:px-6 lg:px-8">
          <Reveal y={14}>
            <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.3em] text-[#A8842C] uppercase">
              <span aria-hidden className="h-px w-8 bg-[#A8842C]" />
              The Faculty
            </p>
            <h1
              id="faculty-hero"
              className="mt-4 max-w-3xl font-scholar-display text-4xl leading-tight font-medium tracking-tight text-[#1F3A2E] sm:text-6xl"
            >
              Mentors who know
              <span className="italic"> every student</span> by name
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#5C6B60] sm:text-lg">
              Our core faculty have taught together for years — continuity that
              lets teaching build deliberately, term after term. (Faculty
              profiles below are illustrative demo content.)
            </p>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {scholarFaculty.map((member, index) => (
          <Reveal key={member.id} delay={0.04} y={20}>
            <article
              aria-labelledby={`${member.id}-name`}
              className={`grid gap-8 border-b border-[#1F3A2E]/12 py-14 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-14 ${
                index % 2 === 1 ? "lg:grid-cols-[minmax(0,1fr)_280px]" : ""
              }`}
            >
              <RevealImage delay={0.08}>
                <Image
                  src={member.image}
                  alt={member.alt}
                  width={1400}
                  height={2100}
                  sizes="(max-width: 1024px) 100vw, 280px"
                  className="aspect-[3/4] w-full object-cover object-top"
                />
              </RevealImage>
              <div className={index % 2 === 1 ? "lg:order-first" : undefined}>
                <p className="text-xs font-semibold tracking-[0.18em] text-[#A8842C] uppercase">
                  {member.role}
                </p>
                <h2
                  id={`${member.id}-name`}
                  className="mt-2 font-scholar-display text-3xl font-medium text-[#1F3A2E] sm:text-4xl"
                >
                  {member.name}
                </h2>
                <div aria-hidden className="mt-4 h-px w-12 bg-[#A8842C]" />
                <p className="mt-4 text-sm font-medium tracking-wide text-[#1F3A2E]/80">
                  {member.credentials}
                </p>
                <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[#5C6B60]">
                  {member.bio}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <section aria-labelledby="faculty-cta" className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8">
        <Reveal y={16}>
          <div className="border border-[#1F3A2E]/15 bg-[#F5EFE1] px-7 py-10 text-center sm:px-12">
            <h2
              id="faculty-cta"
              className="font-scholar-display text-3xl font-medium tracking-tight text-[#1F3A2E] sm:text-4xl"
            >
              Want to meet the faculty in person?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-[#5C6B60]">
              Campus visits include time with the faculty who would teach your
              child — not just the admissions desk.
            </p>
            <Link
              href="/demos/scholar-house/contact"
              className="group mt-7 inline-flex items-center gap-2 bg-[#1F3A2E] px-7 py-3.5 text-sm font-medium tracking-wide text-[#FBF8F1] transition-colors hover:bg-[#2a4d3c] focus-visible:ring-2 focus-visible:ring-[#A8842C] focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              Arrange a visit
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
