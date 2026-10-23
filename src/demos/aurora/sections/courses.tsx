import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { auroraCourses } from "../data";
import { SectionHeading } from "./section-heading";

export function Courses({ limit }: { limit?: number }) {
  const courses = limit ? auroraCourses.slice(0, limit) : auroraCourses;

  return (
    <section className="border-b border-white/10">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            index="03"
            eyebrow="Programmes"
            title="Five routes into the same exam hall."
            lead="Each programme shares the same teaching standard and testing discipline — they differ only in how much time you have and where you are starting from."
          />
          <Reveal delay={0.1} className="shrink-0">
            <Link
              href="/demos/aurora/courses"
              className="group inline-flex min-h-12 items-center gap-2 border-b border-[#C9A227]/50 pb-1 text-sm font-semibold tracking-wide text-[#E8D9A0] transition-colors hover:border-[#C9A227] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8D9A0]"
            >
              All programmes &amp; fees
              <ArrowUpRight
                aria-hidden
                className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14">
          {courses.map((course, index) => (
            <Reveal
              key={course.id}
              delay={0.04 * index}
              className="border-t border-white/10 last:border-b"
            >
              <article className="grid gap-5 py-8 md:grid-cols-12 md:gap-6 md:py-10">
                <div className="md:col-span-1">
                  <span
                    aria-hidden
                    className="font-aurora-display text-sm tracking-[0.2em] text-[#6B7A94]"
                  >
                    0{index + 1}
                  </span>
                </div>

                <div className="md:col-span-5">
                  <h3 className="font-aurora-display text-2xl leading-tight text-[#F4EFE6] sm:text-[1.75rem]">
                    {course.name}
                  </h3>
                  <p className="mt-2.5 max-w-md text-sm leading-relaxed text-[#F4EFE6]/70">
                    {course.tagline}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {course.highlights.slice(0, 3).map((highlight) => (
                      <li
                        key={highlight}
                        className="border border-white/12 px-2.5 py-1 text-[11px] tracking-wide text-[#F4EFE6]/70"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <dl className="space-y-3 text-sm md:col-span-3">
                  <div>
                    <dt className="text-[11px] uppercase tracking-[0.18em] text-[#C9A227]">
                      Duration
                    </dt>
                    <dd className="mt-1 text-[#F4EFE6]/75">{course.duration}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] uppercase tracking-[0.18em] text-[#C9A227]">
                      Mode
                    </dt>
                    <dd className="mt-1 text-[#F4EFE6]/75">{course.mode}</dd>
                  </div>
                </dl>

                <div className="md:col-span-3 md:text-right">
                  <p className="font-aurora-display text-xl text-[#E8D9A0]">
                    {course.fee}
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-[#F4EFE6]/60">
                    Indicative demo fee
                  </p>
                  <Link
                    href="/demos/aurora/courses"
                    className="mt-4 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-[#F4EFE6] underline decoration-[#C9A227]/60 underline-offset-4 transition-colors hover:text-[#E8D9A0] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8D9A0]"
                  >
                    Programme detail
                    <ArrowUpRight aria-hidden className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
