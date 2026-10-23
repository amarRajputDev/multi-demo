import Image from "next/image";
import { Reveal, RevealImage } from "@/components/shared/reveal";
import { EnquiryPanel } from "../components/enquiry-panel";
import { scholarCourses } from "../data";

export default function ScholarCoursesPage() {
  return (
    <>
      <section aria-labelledby="courses-hero" className="border-b border-[#1F3A2E]/12">
        <div className="mx-auto max-w-[1200px] px-4 pt-14 pb-12 sm:px-6 lg:px-8">
          <Reveal y={14}>
            <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.3em] text-[#A8842C] uppercase">
              <span aria-hidden className="h-px w-8 bg-[#A8842C]" />
              Prospectus
            </p>
            <h1
              id="courses-hero"
              className="mt-4 max-w-3xl font-scholar-display text-4xl leading-tight font-medium tracking-tight text-[#1F3A2E] sm:text-6xl"
            >
              Courses designed for
              <span className="italic"> genuine understanding</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#5C6B60] sm:text-lg">
              Every programme follows the school syllabus deeply, adds the
              practice discipline exams reward, and keeps batch sizes small
              enough for personal attention. Fees below are illustrative demo
              figures.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {scholarCourses.map((course, index) => (
          <Reveal key={course.id} delay={0.04} y={20}>
            <article
              id={course.id}
              aria-labelledby={`${course.id}-title`}
              className="grid gap-8 border-b border-[#1F3A2E]/12 py-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:gap-14"
            >
              <div>
                <div className="flex items-baseline gap-4">
                  <span
                    aria-hidden
                    className="font-scholar-display text-sm font-medium text-[#A8842C]"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2
                    id={`${course.id}-title`}
                    className="font-scholar-display text-3xl font-medium text-[#1F3A2E] sm:text-4xl"
                  >
                    {course.name}
                  </h2>
                </div>
                <p className="mt-4 pl-10 font-scholar-display text-xl leading-relaxed text-[#5C6B60] italic">
                  {course.tagline}
                </p>

                <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-2 border-y border-[#1F3A2E]/12 py-4 pl-10 text-sm">
                  <div className="flex gap-2">
                    <dt className="text-[#5C6B60]">Duration</dt>
                    <dd className="font-medium text-[#1F3A2E]">
                      {course.duration}
                    </dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="text-[#5C6B60]">Mode</dt>
                    <dd className="font-medium text-[#1F3A2E]">
                      {course.mode}
                    </dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="text-[#5C6B60]">Fee</dt>
                    <dd className="font-medium text-[#1F3A2E]">{course.fee}</dd>
                  </div>
                </dl>

                <ul className="mt-6 space-y-3 pl-10">
                  {course.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3 text-[15px] leading-relaxed text-[#5C6B60]"
                    >
                      <span
                        aria-hidden
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#A8842C]"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {index % 2 === 0 ? (
                <RevealImage delay={0.1} className="lg:pt-2">
                  <Image
                    src={
                      index === 0
                        ? "/images/scholar-house/classroom.jpg"
                        : "/images/scholar-house/writing.jpg"
                    }
                    alt={
                      index === 0
                        ? "A Scholar House classroom during a live teaching session"
                        : "A student writing practice answers in a Scholar House notebook"
                    }
                    width={1400}
                    height={index === 0 ? 788 : 933}
                    sizes="(max-width: 1024px) 100vw, 360px"
                    className="h-auto w-full object-cover"
                  />
                </RevealImage>
              ) : (
                <div aria-hidden className="hidden lg:block" />
              )}
            </article>
          </Reveal>
        ))}
      </div>

      <section aria-labelledby="courses-enquire" className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8">
        <h2 id="courses-enquire" className="sr-only">
          Enquire about courses
        </h2>
        <EnquiryPanel
          heading="Ask about a course"
          subheading="Not sure which batch fits? Share your child's class and goals — we will recommend honestly, even if it means a smaller programme."
        />
      </section>
    </>
  );
}
