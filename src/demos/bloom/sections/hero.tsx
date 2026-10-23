import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Reveal, RevealImage } from "@/components/shared/reveal";
import { bloomCourses } from "../data";
import { FlowerMark, StarMark } from "../components/illustrations";

const featured = bloomCourses.slice(0, 3);

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-[58%_42%_55%_45%/50%_55%_45%_50%] bg-[#F5C86B]/25 blur-[2px] sm:h-96 sm:w-96"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-32 h-64 w-64 rounded-[45%_55%_50%_50%/55%_45%_55%_45%] bg-[#E8836F]/12 sm:h-80 sm:w-80"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 left-[46%] hidden h-16 w-16 rounded-[60%_40%_55%_45%/50%_55%_45%_50%] bg-[#7A7295]/10 lg:block"
      />

      <div className="relative mx-auto max-w-[1200px] px-4 pt-10 pb-16 sm:px-6 lg:px-8 lg:pt-14">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
          <div>
            <Reveal y={16}>
              <p className="inline-flex items-center gap-2 rounded-full border border-[#E8836F]/30 bg-white px-4 py-2 text-[11px] font-semibold tracking-[0.16em] text-[#B34832] uppercase shadow-[0_2px_12px_rgba(59,51,88,0.05)]">
                <Sparkles aria-hidden className="h-3.5 w-3.5 text-[#E8836F]" />
                Admissions open · Classes 5–10 · Foundation &amp; Olympiad
              </p>
            </Reveal>

            <Reveal delay={0.06} y={20}>
              <h1
                id="hero-heading"
                className="mt-6 font-bloom-display text-[clamp(2.4rem,6vw,4rem)] leading-[1.06] font-semibold tracking-tight text-[#3B3358]"
              >
                Every child can{" "}
                <span className="relative inline-block">
                  <span
                    aria-hidden
                    className="absolute inset-x-[-6%] bottom-1 -z-10 h-[38%] rounded-full bg-[#F5C86B]/55"
                  />
                  <span className="relative">bloom</span>
                </span>
                <br className="hidden sm:block" /> when learning feels{" "}
                <span className="text-[#C2503A]">joyful.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.12} y={18}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-[#5F5878] sm:text-lg">
                Bloom Learning is a warm, neighbourhood coaching home for
                school students — small batches of kind mentors, joyful
                classrooms, and steady progress that parents can actually see.
              </p>
            </Reveal>

            <Reveal delay={0.18} y={16}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/demos/bloom/courses"
                  className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-[#C2503A] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_4px_18px_rgba(194,80,58,0.3)] transition-all duration-200 hover:scale-[1.03] hover:bg-[#A8402D] hover:shadow-[0_8px_24px_rgba(194,80,58,0.38)] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#3B3358] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FBF7F2] focus-visible:outline-none"
                >
                  Explore courses
                  <ArrowRight
                    aria-hidden
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </Link>
                <Link
                  href="/demos/bloom/contact"
                  className="inline-flex min-h-12 items-center rounded-full border-2 border-[#3B3358]/15 bg-white px-7 py-3 text-sm font-semibold text-[#3B3358] transition-all duration-200 hover:border-[#E8836F] hover:text-[#B34832] focus-visible:ring-2 focus-visible:ring-[#D96A54] focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  Book a free visit
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.24} y={14}>
              <div className="mt-10">
                <p className="text-[11px] font-semibold tracking-[0.18em] text-[#7A7295] uppercase">
                  Programmes families love
                </p>
                <ul className="mt-3 flex flex-wrap gap-2.5">
                  {featured.map((course) => (
                    <li key={course.id}>
                      <Link
                        href="/demos/bloom/courses"
                        className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-[#3B3358] shadow-[0_2px_12px_rgba(59,51,88,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_18px_rgba(59,51,88,0.1)] focus-visible:ring-2 focus-visible:ring-[#D96A54] focus-visible:ring-offset-2 focus-visible:outline-none"
                      >
                        <span
                          aria-hidden
                          className="h-2 w-2 rounded-full bg-[#E8836F]"
                        />
                        {course.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="relative">
            <RevealImage delay={0.1}>
              <figure className="relative">
                <div
                  aria-hidden
                  className="absolute -inset-3 -z-10 rounded-[55%_45%_52%_48%/48%_55%_45%_52%] bg-[#F5C86B]/20"
                />
                <Image
                  src="/images/bloom/hero-kids.jpg"
                  alt="Students at Bloom Learning smiling together during a classroom activity"
                  width={1400}
                  height={933}
                  priority
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="h-auto w-full rounded-[36px_28px_40px_26px] object-cover shadow-[0_12px_40px_rgba(59,51,88,0.12)]"
                />
                <figcaption className="mt-3 text-xs text-[#7A7295] italic">
                  Kind classrooms, curious minds — every single day.
                </figcaption>
              </figure>
            </RevealImage>

            <Reveal delay={0.3} y={18}>
              <div className="absolute -bottom-6 -left-2 hidden max-w-[240px] rounded-[22px] border border-[#3B3358]/8 bg-white p-5 shadow-[0_8px_28px_rgba(59,51,88,0.12)] sm:block lg:-left-8">
                <div className="flex items-center gap-3">
                  <FlowerMark className="h-9 w-9 shrink-0 text-[#E8836F]" />
                  <p className="font-bloom-display text-sm leading-snug font-semibold text-[#3B3358]">
                    Batches capped at 12 students
                  </p>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-[#5F5878]">
                  Every child known by name — and by their strengths.
                </p>
              </div>
            </Reveal>

            <StarMark className="absolute -top-5 -left-4 hidden h-10 w-10 text-[#F5C86B] lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
