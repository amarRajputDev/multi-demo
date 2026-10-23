import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, RevealImage } from "@/components/shared/reveal";
import { EnquiryPanel } from "../components/enquiry-panel";
import { scholarCourses } from "../data";

const featured = scholarCourses.slice(0, 3);

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_0%,rgba(231,216,180,0.45),transparent_70%)]"
      />
      <div className="relative mx-auto max-w-[1200px] px-4 pt-12 pb-16 sm:px-6 lg:px-8 lg:pt-16">
        <Reveal y={18}>
          <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.3em] text-[#A8842C] uppercase">
            <span aria-hidden className="h-px w-10 bg-[#A8842C]" />
            Admissions open · Classes 9–12 · Foundation &amp; Olympiad
          </p>
        </Reveal>

        <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_minmax(0,460px)] lg:items-start lg:gap-14">
          <div>
            <Reveal delay={0.05}>
              <h1
                id="hero-heading"
                className="font-scholar-display text-[2.5rem] leading-[1.08] font-medium tracking-tight text-[#1F3A2E] sm:text-6xl lg:text-[4rem]"
              >
                Building strong foundations
                <br className="hidden sm:block" />{" "}
                <span className="italic">for lifelong success.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.1} y={20}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-[#5C6B60] sm:text-lg">
                <span className="float-left mr-2 font-scholar-display text-5xl leading-[0.8] font-semibold text-[#1F3A2E]">
                  S
                </span>
                cholar House is a neighbourhood coaching institute for school
                students who deserve patient, expert teaching — small batches,
                experienced faculty, and a calm campus where hard work feels
                supported, not pressured.
              </p>
            </Reveal>

            <Reveal delay={0.15} y={18}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/demos/scholar-house/courses"
                  className="group inline-flex items-center gap-2 bg-[#1F3A2E] px-7 py-3.5 text-sm font-medium tracking-wide text-[#FBF8F1] transition-colors duration-200 hover:bg-[#2a4d3c] focus-visible:ring-2 focus-visible:ring-[#A8842C] focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  Explore courses
                  <ArrowRight
                    aria-hidden
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </Link>
                <Link
                  href="/demos/scholar-house/about"
                  className="inline-flex items-center border-b border-[#A8842C] px-1 py-1 text-sm font-medium tracking-wide text-[#1F3A2E] transition-colors duration-200 hover:text-[#A8842C] focus-visible:ring-2 focus-visible:ring-[#A8842C] focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  Our teaching philosophy
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.2} y={16}>
              <div className="mt-8 border-y border-[#1F3A2E]/12 py-4">
                <p className="text-[10px] font-semibold tracking-[0.24em] text-[#5C6B60] uppercase">
                  Current programmes
                </p>
                <ul className="mt-3 grid gap-2 sm:grid-cols-3">
                  {featured.map((course) => (
                    <li key={course.id} className="text-sm text-[#1F3A2E]">
                      <Link
                        href="/demos/scholar-house/courses"
                        className="inline-flex min-h-11 items-center gap-2 transition-colors hover:text-[#A8842C]"
                      >
                        <span
                          aria-hidden
                          className="h-1.5 w-1.5 rounded-full bg-[#A8842C]"
                        />
                        {course.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-8 sm:grid-cols-[minmax(0,240px)_1fr] lg:block">
            <RevealImage className="order-2 sm:order-1 lg:order-none">
              <figure className="relative">
                <Image
                  src="/images/scholar-house/hero-teacher.jpg"
                  alt="A Scholar House teacher explaining a concept to students in a bright classroom"
                  width={1400}
                  height={988}
                  priority
                  sizes="(max-width: 1024px) 50vw, 240px"
                  className="h-auto w-full object-cover"
                />
                <figcaption className="mt-3 text-xs text-[#5C6B60] italic">
                  Faculty-led teaching, every single day.
                </figcaption>
              </figure>
            </RevealImage>
            <div className="order-1 sm:order-2 lg:order-none">
              <EnquiryPanel heading="Begin your enquiry" subheading="Tell us about the student and we will call you back with batch details and a campus-visit time." />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
