import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, RevealImage } from "@/components/shared/reveal";
import { northstarHomeHref } from "../data";

const metaLines = [
  { label: "Programmes", value: "UPSC · SSC · Banking" },
  { label: "Mentor ratio", value: "1 : 14" },
  { label: "Answer writing", value: "From week three" },
  { label: "Enrolment", value: "Open · 2026 cohort" },
];

export function Hero() {
  return (
    <section aria-labelledby="hero-heading">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <Reveal y={10} duration={0.8}>
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-[#26241F]/15 py-4 text-[10px] tracking-[0.28em] text-[#6E6A62] uppercase">
            <span>Northstar Institute · Prospectus</span>
            <span className="text-[#9C4F36]">
              Admissions open — 2026 cohort
            </span>
          </div>
        </Reveal>

        <div className="grid gap-10 pt-12 pb-14 lg:grid-cols-12 lg:gap-12 lg:pt-16 lg:pb-20">
          <div className="lg:col-span-7">
            <Reveal y={16} duration={0.8}>
              <p className="text-[10px] font-semibold tracking-[0.3em] text-[#9C4F36] uppercase">
                <span aria-hidden className="mr-3 inline-block h-px w-8 align-middle bg-[#9C4F36]" />
                UPSC · SSC · Banking · Government exams
              </p>
              <h1
                id="hero-heading"
                className="mt-6 text-[2.75rem] leading-[1.04] font-normal tracking-tight text-[#26241F] sm:text-6xl lg:text-[4.25rem]"
              >
                Clarity of purpose,
                <br className="hidden sm:block" />{" "}
                <span className="text-[#9C4F36] italic">
                  confidence in preparation.
                </span>
              </h1>
            </Reveal>

            <Reveal y={18} duration={0.8} delay={0.08}>
              <div className="mt-8 max-w-xl border-t border-[#26241F]/15 pt-6">
                <p className="text-[1.0625rem] leading-[1.75] text-[#6E6A62] sm:text-lg">
                  Northstar is a mentor-led institute for candidates who are
                  serious about public service. Small cohorts, evaluated
                  writing every week, and counsellors who would rather recommend
                  a shorter programme than an expensive mistake.
                </p>
              </div>
            </Reveal>

            <Reveal y={16} duration={0.8} delay={0.14}>
              <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
                <Link
                  href="/demos/northstar/courses"
                  className="group inline-flex min-h-12 items-center gap-3 bg-[#26241F] px-8 py-3.5 text-[13px] tracking-[0.16em] text-[#F7F4EF] uppercase transition-colors duration-300 hover:bg-[#9C4F36] focus-visible:ring-2 focus-visible:ring-[#9C4F36] focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  Explore programmes
                  <ArrowRight
                    aria-hidden
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
                <Link
                  href="/demos/northstar/contact"
                  className="inline-flex min-h-12 items-center border-b border-[#9C4F36] text-[13px] tracking-[0.16em] text-[#26241F] uppercase transition-colors duration-300 hover:text-[#9C4F36] focus-visible:ring-2 focus-visible:ring-[#9C4F36] focus-visible:ring-offset-4 focus-visible:outline-none"
                >
                  Speak with a mentor
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:pt-14">
            <Reveal y={18} duration={0.8} delay={0.1}>
              <dl className="grid grid-cols-2 gap-x-8 gap-y-7 sm:grid-cols-4 lg:grid-cols-2">
                {metaLines.map((item) => (
                  <div
                    key={item.label}
                    className="border-t border-[#26241F]/15 pt-3"
                  >
                    <dt className="text-[9px] font-semibold tracking-[0.26em] text-[#6E6A62] uppercase">
                      {item.label}
                    </dt>
                    <dd className="mt-1.5 font-northstar-display text-lg leading-snug text-[#26241F]">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>

        <RevealImage duration={1} className="pb-4">
          <figure>
            <div className="relative aspect-[16/10] w-full sm:aspect-[2/1] lg:aspect-[21/9]">
              <Image
                src="/images/northstar/hero-desk.jpg"
                alt="A quiet study desk with newspapers, marked answer sheets and a cup of tea, evoking a serious preparation routine"
                fill
                priority
                sizes="(max-width: 1240px) 100vw, 1240px"
                className="object-cover object-center"
              />
            </div>
            <figcaption className="mt-3 flex flex-wrap items-baseline justify-between gap-2 text-xs text-[#6E6A62] italic">
              <span>
                The working table of a Northstar aspirant — one newspaper, one
                notebook, one plan.
              </span>
              <Link
                href={northstarHomeHref}
                className="hidden text-[#9C4F36] not-italic transition-colors hover:text-[#26241F] lg:inline"
              >
                Prospectus, 2026 edition
              </Link>
            </figcaption>
          </figure>
        </RevealImage>
      </div>
    </section>
  );
}
