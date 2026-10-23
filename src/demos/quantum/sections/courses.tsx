import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { quantumCourses } from "../data";
import { SectionHeading } from "./section-heading";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#22D3EE]";

export function Courses({ limit }: { limit?: number }) {
  const courses = limit ? quantumCourses.slice(0, limit) : quantumCourses;

  return (
    <section className="border-b border-white/10 bg-[#0B1430]">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            index="04"
            eyebrow="Programmes"
            title="Five routes into the same exam hall."
            lead="Each programme shares the same diagnostic discipline and error analytics — they differ only in subject depth and the calendar you have."
          />
          <Reveal delay={0.1} className="shrink-0">
            <Link
              href="/demos/quantum/courses"
              className={`group inline-flex min-h-12 items-center gap-2 border-b border-[#22D3EE]/50 pb-1 text-sm font-semibold tracking-wide text-[#22D3EE] transition-colors hover:border-[#22D3EE] hover:text-[#67E8F9] ${focusRing}`}
            >
              All programmes &amp; fees
              <ArrowUpRight
                aria-hidden
                className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {courses.map((course, index) => (
            <Reveal key={course.id} delay={index * 0.05}>
              <article
                className={`flex h-full flex-col border border-white/10 bg-[#050A18]/70 p-6 transition-colors duration-300 hover:border-[#22D3EE]/45 sm:p-8 ${
                  index === courses.length - 1 && courses.length % 2 === 1
                    ? "md:col-span-2"
                    : ""
                }`}
              >
                <p className="font-quantum-mono text-[11px] uppercase tracking-[0.22em] text-[#8B5CF6]">
                  Course {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-quantum-display mt-3 text-xl font-semibold leading-snug text-[#EAF2FF] sm:text-2xl">
                  {course.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#7C93B8]">
                  {course.tagline}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {course.highlights.slice(0, 2).map((highlight) => (
                    <li
                      key={highlight}
                      className="border border-white/12 px-2.5 py-1 text-[11px] tracking-wide text-[#EAF2FF]/70"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>

                <dl className="font-quantum-mono mt-6 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-white/10 pt-5 text-[11px] uppercase tracking-[0.14em]">
                  <div>
                    <dt className="text-[#22D3EE]">Duration</dt>
                    <dd className="mt-1 normal-case tracking-normal text-[#EAF2FF]/80">
                      {course.duration}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[#22D3EE]">Mode</dt>
                    <dd className="mt-1 normal-case tracking-normal text-[#EAF2FF]/80">
                      {course.mode}
                    </dd>
                  </div>
                  <div className="col-span-2">
                    <dt className="text-[#22D3EE]">Indicative demo fee</dt>
                    <dd className="font-quantum-display mt-1 text-lg font-semibold normal-case tracking-normal text-[#22D3EE]">
                      {course.fee}
                    </dd>
                  </div>
                </dl>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-xs text-[#7C93B8]">
          Fees shown are indicative demo figures — a live institute would
          publish its current fee structure and policies in this section.
        </p>
      </div>
    </section>
  );
}
