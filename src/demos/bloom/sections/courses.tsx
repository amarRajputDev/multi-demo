import Link from "next/link";
import { ArrowRight, Clock, Monitor, IndianRupee } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { bloomCourses } from "../data";
import { BookMark, StarMark } from "../components/illustrations";

export function Courses() {
  return (
    <section
      aria-labelledby="courses-heading"
      className="relative overflow-hidden bg-white/60 py-16 lg:py-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 -left-24 h-64 w-64 rounded-[55%_45%_50%_50%/50%_55%_45%_50%] bg-[#F3EDF8]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -bottom-24 h-60 w-60 rounded-[45%_55%_55%_45%/55%_45%_50%_50%] bg-[#FDF0EA]"
      />

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <Reveal y={16}>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-[#E8836F]/12 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-[#B34832] uppercase">
                Our programmes
              </p>
              <h2
                id="courses-heading"
                className="mt-4 font-bloom-display text-[clamp(1.9rem,4vw,2.75rem)] leading-tight font-semibold tracking-tight text-[#3B3358]"
              >
                Warm classrooms,
                <br className="hidden sm:block" /> serious learning
              </h2>
            </div>
            <Link
              href="/demos/bloom/courses"
              className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full border-2 border-[#3B3358]/15 bg-white px-5 py-2.5 text-sm font-semibold text-[#3B3358] transition-all duration-200 hover:border-[#E8836F] hover:text-[#B34832] focus-visible:ring-2 focus-visible:ring-[#D96A54] focus-visible:ring-offset-2 focus-visible:outline-none sm:self-auto"
            >
              View full prospectus
              <ArrowRight
                aria-hidden
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </Reveal>

        <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {bloomCourses.map((course, index) => {
            const featured = index === 0;
            return (
              <li
                key={course.id}
                className={featured ? "lg:col-span-2" : undefined}
              >
                <Reveal delay={index * 0.05} y={20}>
                  <article className="group flex h-full flex-col rounded-[26px] border border-[#3B3358]/8 bg-white p-7 shadow-[0_2px_18px_rgba(59,51,88,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(59,51,88,0.1)]">
                    <div className="flex items-start justify-between gap-4">
                      <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-[16px] bg-[#FBF7F2] transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-105">
                        {index % 2 === 0 ? (
                          <BookMark className="h-7 w-7 text-[#E8836F]" />
                        ) : (
                          <StarMark className="h-7 w-7 text-[#E8836F]" />
                        )}
                      </span>
                      {featured && (
                        <span className="rounded-full bg-[#F5C86B]/35 px-3 py-1 text-[11px] font-semibold tracking-wide text-[#3B3358]">
                          Most popular
                        </span>
                      )}
                    </div>
                    <h3 className="mt-4 font-bloom-display text-2xl font-semibold text-[#3B3358]">
                      {course.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#5F5878]">
                      {course.tagline}
                    </p>

                    <dl className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-[#5F5878]">
                      <div className="flex items-center gap-1.5">
                        <Clock aria-hidden className="h-3.5 w-3.5 text-[#E8836F]" />
                        <dt className="sr-only">Duration</dt>
                        <dd>{course.duration}</dd>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Monitor aria-hidden className="h-3.5 w-3.5 text-[#E8836F]" />
                        <dt className="sr-only">Mode</dt>
                        <dd>{course.mode}</dd>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <IndianRupee aria-hidden className="h-3.5 w-3.5 text-[#E8836F]" />
                        <dt className="sr-only">Fee</dt>
                        <dd className="font-semibold text-[#3B3358]">
                          {course.fee}
                        </dd>
                      </div>
                    </dl>

                    <ul className="mt-5 flex-1 space-y-2.5">
                      {course.highlights.slice(0, featured ? 4 : 3).map((highlight) => (
                        <li
                          key={highlight}
                          className="flex gap-2.5 text-sm leading-relaxed text-[#5F5878]"
                        >
                          <span
                            aria-hidden
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F5C86B]"
                          />
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/demos/bloom/courses"
                      className="mt-6 inline-flex min-h-11 items-center gap-2 self-start rounded-full bg-[#FBF7F2] px-5 py-2.5 text-sm font-semibold text-[#3B3358] transition-all duration-200 group-hover:bg-[#C2503A] group-hover:text-white focus-visible:ring-2 focus-visible:ring-[#D96A54] focus-visible:ring-offset-2 focus-visible:outline-none"
                    >
                      Programme details
                      <ArrowRight aria-hidden className="h-4 w-4" />
                    </Link>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
