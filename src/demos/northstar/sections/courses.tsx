import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, RevealImage } from "@/components/shared/reveal";
import { northstarCourses } from "../data";

const featured = northstarCourses.slice(0, 3);
const remaining = northstarCourses.slice(3);

export function Courses() {
  return (
    <section
      aria-labelledby="courses-heading"
      className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:py-28"
    >
      <Reveal y={14} duration={0.8}>
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-[#26241F]/15 pb-6">
          <div>
            <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.3em] text-[#9C4F36] uppercase">
              <span aria-hidden className="h-px w-8 bg-[#9C4F36]" />
              Programmes
            </p>
            <h2
              id="courses-heading"
              className="mt-5 max-w-xl text-[2rem] leading-[1.12] tracking-tight text-[#26241F] sm:text-4xl"
            >
              Five programmes,
              <span className="text-[#9C4F36] italic"> one method.</span>
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-[#6E6A62]">
            Each programme shares the same discipline: mapped syllabus, weekly
            writing, marked returns. Fees shown are illustrative demo figures.
          </p>
        </div>
      </Reveal>

      <div className="mt-4">
        {featured.map((course, index) => (
          <Reveal key={course.id} delay={0.04} duration={0.8} y={20}>
            <article
              aria-labelledby={`${course.id}-title`}
              className="grid gap-8 border-b border-[#26241F]/12 py-12 lg:grid-cols-12 lg:gap-12"
            >
              <div className="lg:col-span-4">
                <p className="text-[10px] font-semibold tracking-[0.24em] text-[#6E6A62] uppercase">
                  Programme {String(index + 1).padStart(2, "0")}
                </p>
                <h3
                  id={`${course.id}-title`}
                  className="mt-3 font-northstar-display text-[1.75rem] leading-tight text-[#26241F] sm:text-3xl"
                >
                  {course.name}
                </h3>
                <p className="mt-4 font-northstar-display text-lg leading-relaxed text-[#9C4F36] italic">
                  {course.tagline}
                </p>
              </div>

              <div className="lg:col-span-5">
                <dl className="grid grid-cols-2 gap-x-6 gap-y-4 border-y border-[#26241F]/12 py-4 text-sm sm:grid-cols-3">
                  <div>
                    <dt className="text-[10px] tracking-[0.2em] text-[#6E6A62] uppercase">
                      Duration
                    </dt>
                    <dd className="mt-1 text-[#26241F]">{course.duration}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] tracking-[0.2em] text-[#6E6A62] uppercase">
                      Mode
                    </dt>
                    <dd className="mt-1 text-[#26241F]">{course.mode}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] tracking-[0.2em] text-[#6E6A62] uppercase">
                      Fee
                    </dt>
                    <dd className="mt-1 text-[#26241F]">{course.fee}</dd>
                  </div>
                </dl>
                <ul className="mt-5 space-y-2.5">
                  {course.highlights.slice(0, 3).map((highlight) => (
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
                {index === 0 ? (
                  <RevealImage delay={0.1} duration={0.9}>
                    <figure>
                      <div className="relative aspect-[4/5] w-full">
                        <Image
                          src="/images/northstar/notes.jpg"
                          alt="Answer-writing practice: a marked script with mentor notes in the margin"
                          fill
                          sizes="(max-width: 1024px) 100vw, 300px"
                          className="object-cover"
                        />
                      </div>
                      <figcaption className="mt-2.5 text-xs text-[#6E6A62] italic">
                        A marked copy, returned the same week it was written.
                      </figcaption>
                    </figure>
                  </RevealImage>
                ) : (
                  <Link
                    href="/demos/northstar/courses"
                    className="group inline-flex min-h-11 items-center gap-2 border-b border-[#9C4F36] pb-0.5 text-[13px] tracking-[0.14em] text-[#26241F] uppercase transition-colors hover:text-[#9C4F36] focus-visible:ring-2 focus-visible:ring-[#9C4F36] focus-visible:ring-offset-4 focus-visible:outline-none"
                  >
                    Full syllabus
                    <ArrowRight
                      aria-hidden
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-12 grid gap-8 border border-[#26241F]/15 bg-[#F1ECE3] p-8 sm:grid-cols-2 sm:p-10">
        {remaining.map((course) => (
          <Reveal key={course.id} duration={0.8} y={16}>
            <div>
              <h3 className="font-northstar-display text-2xl text-[#26241F]">
                {course.name}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#6E6A62]">
                {course.tagline}
              </p>
              <p className="mt-4 text-xs tracking-[0.1em] text-[#6E6A62]">
                {course.duration} · {course.fee}
              </p>
            </div>
          </Reveal>
        ))}
        <div className="sm:col-span-2">
          <Reveal duration={0.8} y={12}>
            <Link
              href="/demos/northstar/courses"
              className="group inline-flex min-h-12 items-center gap-3 bg-[#26241F] px-8 py-3.5 text-[13px] tracking-[0.16em] text-[#F7F4EF] uppercase transition-colors duration-300 hover:bg-[#9C4F36] focus-visible:ring-2 focus-visible:ring-[#9C4F36] focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              Read the full prospectus
              <ArrowRight
                aria-hidden
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
