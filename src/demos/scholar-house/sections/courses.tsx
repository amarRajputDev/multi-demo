import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { scholarCourses } from "../data";

export function Courses() {
  return (
    <section
      aria-labelledby="courses-heading"
      className="mx-auto max-w-[1200px] px-4 py-20 sm:px-6 lg:px-8"
    >
      <Reveal y={16}>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.3em] text-[#A8842C] uppercase">
              <span aria-hidden className="h-px w-8 bg-[#A8842C]" />
              Our Programmes
            </p>
            <h2
              id="courses-heading"
              className="mt-4 font-scholar-display text-4xl leading-tight font-medium tracking-tight text-[#1F3A2E] sm:text-5xl"
            >
              Courses for every stage
              <br className="hidden sm:block" /> of the school journey
            </h2>
          </div>
          <Link
            href="/demos/scholar-house/courses"
            className="group inline-flex shrink-0 items-center gap-2 self-start border-b border-[#A8842C] py-1 text-sm font-medium text-[#1F3A2E] transition-colors hover:text-[#A8842C] sm:self-auto"
          >
            View full course details
            <ArrowRight
              aria-hidden
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
        <div aria-hidden className="mt-6 border-t-2 border-b border-[#1F3A2E]/20 pt-1">
          <div className="border-t border-[#A8842C]/40" />
        </div>
      </Reveal>

      <ol className="mt-10 grid gap-x-12 gap-y-10 md:grid-cols-2">
        {scholarCourses.map((course, index) => (
          <li key={course.id} className="group">
            <Reveal delay={index * 0.05} y={20}>
              <div className="flex items-baseline gap-4">
                <span
                  aria-hidden
                  className="font-scholar-display text-sm font-medium text-[#A8842C]"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-scholar-display text-2xl font-medium text-[#1F3A2E]">
                  <Link
                    href="/demos/scholar-house/courses"
                    className="transition-colors hover:text-[#A8842C] focus-visible:ring-2 focus-visible:ring-[#A8842C] focus-visible:ring-offset-2 focus-visible:outline-none"
                  >
                    {course.name}
                  </Link>
                </h3>
              </div>
              <p className="mt-3 pl-9 text-[15px] leading-relaxed text-[#5C6B60]">
                {course.tagline}
              </p>
              <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-1 pl-9 text-xs tracking-wide text-[#1F3A2E]/80">
                <div className="flex gap-1.5">
                  <dt className="text-[#5C6B60]">Duration:</dt>
                  <dd>{course.duration}</dd>
                </div>
                <div className="flex gap-1.5">
                  <dt className="text-[#5C6B60]">Mode:</dt>
                  <dd>{course.mode}</dd>
                </div>
                <div className="flex gap-1.5">
                  <dt className="text-[#5C6B60]">Fee:</dt>
                  <dd className="font-medium text-[#1F3A2E]">{course.fee}</dd>
                </div>
              </dl>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
