import Image from "next/image";
import { Reveal, RevealImage } from "@/components/shared/reveal";
import { Enquiry } from "../components/enquiry";
import { bloomCourses } from "../data";
import { BookMark, StarMark } from "../components/illustrations";

const courseImages = [
  {
    src: "/images/bloom/child.jpg",
    alt: "Two young Bloom Learning students reading a workbook together",
    width: 1400,
    height: 933,
  },
  {
    src: "/images/bloom/learning.jpg",
    alt: "A mentor guiding a student through a concept at Bloom Learning",
    width: 1400,
    height: 933,
  },
  {
    src: "/images/bloom/reading.jpg",
    alt: "Students reading together in the Bloom Learning reading corner",
    width: 1400,
    height: 932,
  },
  {
    src: "/images/bloom/hero-kids.jpg",
    alt: "Bloom Learning students collaborating happily in class",
    width: 1400,
    height: 933,
  },
  {
    src: "/images/bloom/art.jpg",
    alt: "A colourful creative project made by Bloom Learning students",
    width: 1400,
    height: 1400,
  },
] as const;

export default function BloomCoursesPage() {
  return (
    <>
      <section aria-labelledby="courses-hero" className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-16 -right-20 h-60 w-60 rounded-[58%_42%_50%_50%/48%_55%_45%_52%] bg-[#F5C86B]/25"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -left-16 h-52 w-52 rounded-[45%_55%_55%_45%/55%_45%_50%_50%] bg-[#F3EDF8]"
        />
        <div className="relative mx-auto max-w-[1200px] px-4 pt-14 pb-12 sm:px-6 lg:px-8">
          <Reveal y={14}>
            <p className="inline-flex items-center gap-2 rounded-full bg-[#E8836F]/12 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-[#B34832] uppercase">
              <BookMark className="h-4 w-4 text-[#E8836F]" />
              Prospectus
            </p>
            <h1
              id="courses-hero"
              className="mt-4 max-w-3xl font-bloom-display text-[clamp(2.1rem,5vw,3.25rem)] leading-[1.1] font-semibold tracking-tight text-[#3B3358]"
            >
              Programmes that make learning{" "}
              <span className="text-[#C2503A]">feel joyful</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#5F5878] sm:text-lg">
              Every Bloom programme follows the school syllabus deeply, adds the
              practice discipline exams reward, and keeps batches small enough
              for real friendship with learning. Fees below are illustrative
              demo figures.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {bloomCourses.map((course, index) => {
          const image = courseImages[index % courseImages.length];
          return (
            <Reveal key={course.id} delay={0.04} y={20}>
              <article
                id={course.id}
                aria-labelledby={`${course.id}-title`}
                className="grid gap-8 border-b border-[#3B3358]/10 py-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,340px)] lg:gap-14"
              >
                <div>
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-[16px] bg-[#FBF7F2] transition-transform duration-300 hover:rotate-[-6deg] hover:scale-105">
                      {index % 2 === 0 ? (
                        <BookMark className="h-7 w-7 text-[#E8836F]" />
                      ) : (
                        <StarMark className="h-7 w-7 text-[#E8836F]" />
                      )}
                    </span>
                    <h2
                      id={`${course.id}-title`}
                      className="font-bloom-display text-[clamp(1.6rem,3.5vw,2.25rem)] font-semibold text-[#3B3358]"
                    >
                      {course.name}
                    </h2>
                  </div>
                  <p className="mt-4 max-w-2xl font-bloom-display text-lg leading-relaxed text-[#5F5878]">
                    {course.tagline}
                  </p>

                  <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3 rounded-[20px] bg-white px-5 py-4 text-sm shadow-[0_2px_12px_rgba(59,51,88,0.05)]">
                    <div className="flex gap-2">
                      <dt className="text-[#7A7295]">Duration</dt>
                      <dd className="font-semibold text-[#3B3358]">
                        {course.duration}
                      </dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="text-[#7A7295]">Mode</dt>
                      <dd className="font-semibold text-[#3B3358]">
                        {course.mode}
                      </dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="text-[#7A7295]">Fee</dt>
                      <dd className="font-semibold text-[#3B3358]">
                        {course.fee}
                      </dd>
                    </div>
                  </dl>

                  <ul className="mt-6 space-y-3">
                    {course.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-[15px] leading-relaxed text-[#5F5878]"
                      >
                        <span
                          aria-hidden
                          className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E8836F]"
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <RevealImage delay={0.1} className="lg:pt-2">
                  <figure>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      sizes="(max-width: 1024px) 100vw, 340px"
                      className="h-auto w-full rounded-[24px] object-cover shadow-[0_8px_28px_rgba(59,51,88,0.1)]"
                    />
                    <figcaption className="mt-3 text-xs text-[#7A7295] italic">
                      Life inside a Bloom classroom.
                    </figcaption>
                  </figure>
                </RevealImage>
              </article>
            </Reveal>
          );
        })}
      </div>

      <section
        aria-labelledby="courses-enquire"
        className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8"
      >
        <h2 id="courses-enquire" className="sr-only">
          Enquire about courses
        </h2>
        <div className="mx-auto max-w-[900px]">
          <Enquiry
            heading="Ask about a programme"
            subheading="Not sure which batch fits? Tell us your child's class and interests — we will recommend honestly, even if it means a smaller programme."
          />
        </div>
      </section>
    </>
  );
}
