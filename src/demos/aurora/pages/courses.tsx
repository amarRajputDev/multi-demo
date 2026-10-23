import { ArrowUpRight, Check, Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { auroraChooser, auroraCourses } from "../data";
import { ContactCta } from "../sections/contact-cta";
import { PageHero } from "../sections/page-hero";
import { Reveal } from "@/components/shared/reveal";

export default function AuroraCoursesPage() {
  return (
    <>
      <PageHero
        eyebrow="Programmes · 2026–27 session (demo)"
        title="Five programmes, one standard of rigour."
        lead="Every Aurora programme is built from the same three materials: concept-first teaching, graded weekly papers and a mentor who owns the batch. What changes is the calendar you have to work with."
        meta={[
          "JEE · NEET · Boards",
          "Two-year, twelve-week and full-year routes",
          "Classroom + digital campus",
        ]}
      >
        <Reveal delay={0.15} className="mt-12">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-3 border border-[#C9A227]/30 sm:-inset-4"
            />
            <div className="relative aspect-[3/2] w-full overflow-hidden border border-white/10 sm:aspect-[12/5]">
              <Image
                src="/images/aurora/study.jpg"
                alt="An Aurora Academy desk set up with notes, formula sheets and practice papers (demo image)"
                width={1400}
                height={1051}
                priority
                sizes="(min-width: 1240px) 1200px, 100vw"
                className="h-full w-full object-cover object-center"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-r from-[#0B1A33] via-[#0B1A33]/35 to-transparent"
              />
              <p className="absolute bottom-5 left-5 max-w-xs text-xs leading-relaxed text-[#F4EFE6]/85 sm:bottom-7 sm:left-7 sm:max-w-sm sm:text-sm">
                Every programme ends the same way: a student who has seen the
                paper before the paper sees them.
              </p>
            </div>
          </div>
        </Reveal>
      </PageHero>

      <section aria-label="Fee note" className="border-b border-white/10 bg-[#0A1729]">
        <div className="mx-auto flex w-full max-w-[1240px] items-start gap-3 px-5 py-5 sm:px-8 lg:px-10">
          <Info
            aria-hidden
            className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A227]"
          />
          <p className="text-xs leading-relaxed text-[#F4EFE6]/70 sm:text-sm">
            All fees on this page are indicative demo figures for a design
            concept. A live institute would publish its current fee structure,
            concessions and refund policy here.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto w-full max-w-[1240px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
          <h2 className="sr-only">
            Aurora Academy programmes in detail
          </h2>
          <div className="space-y-6">
            {auroraCourses.map((course, index) => (
              <Reveal key={course.id} delay={0.03 * index}>
                <article className="border border-white/10 bg-[#0D1F3B]/60 p-5 transition-colors duration-300 hover:border-[#C9A227]/45 sm:p-8">
                  <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
                    <div className="lg:col-span-7">
                      <div className="flex items-baseline gap-4">
                        <span
                          aria-hidden
                          className="font-aurora-display text-sm tracking-[0.22em] text-[#C9A227]"
                        >
                          0{index + 1}
                        </span>
                        <h3 className="font-aurora-display text-[1.6rem] leading-tight text-[#F4EFE6] sm:text-3xl">
                          {course.name}
                        </h3>
                      </div>
                      <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#F4EFE6]/75 sm:text-base">
                        {course.tagline}
                      </p>

                      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                        {course.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start gap-2.5 text-sm text-[#F4EFE6]/75"
                          >
                            <Check
                              aria-hidden
                              className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A227]"
                            />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="lg:col-span-5">
                      <dl className="divide-y divide-white/10 border-y border-white/10">
                        <div className="flex items-baseline justify-between gap-4 py-3.5">
                          <dt className="text-[11px] uppercase tracking-[0.18em] text-[#C9A227]">
                            Duration
                          </dt>
                          <dd className="text-right text-sm text-[#F4EFE6]/80">
                            {course.duration}
                          </dd>
                        </div>
                        <div className="flex items-baseline justify-between gap-4 py-3.5">
                          <dt className="text-[11px] uppercase tracking-[0.18em] text-[#C9A227]">
                            Mode
                          </dt>
                          <dd className="text-right text-sm text-[#F4EFE6]/80">
                            {course.mode}
                          </dd>
                        </div>
                        <div className="flex items-baseline justify-between gap-4 py-3.5">
                          <dt className="text-[11px] uppercase tracking-[0.18em] text-[#C9A227]">
                            Fee
                          </dt>
                          <dd className="font-aurora-display text-right text-lg text-[#E8D9A0]">
                            {course.fee}
                          </dd>
                        </div>
                      </dl>

                      <Link
                        href="/demos/aurora/contact"
                        className="group mt-6 inline-flex min-h-12 w-full items-center justify-between gap-3 border border-[#C9A227]/50 px-5 text-sm font-semibold tracking-wide text-[#F4EFE6] transition-colors hover:border-[#C9A227] hover:bg-[#C9A227]/10 hover:text-[#E8D9A0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A227]"
                      >
                        Enquire about this programme
                        <ArrowUpRight
                          aria-hidden
                          className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0A1729]">
        <div className="mx-auto w-full max-w-[1240px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
          <Reveal className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C9A227]">
              Choosing well
            </p>
            <h2 className="font-aurora-display mt-5 text-[clamp(1.7rem,3.2vw,2.5rem)] leading-[1.08] text-[#F4EFE6] [text-wrap:balance]">
              Three questions decide the right programme.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-px bg-white/10 sm:grid-cols-3">
            {auroraChooser.map((card, index) => (
              <Reveal
                key={card.id}
                delay={index * 0.07}
                className="bg-[#0A1729]"
              >
                <div className="h-full p-6 sm:p-7">
                  <span
                    aria-hidden
                    className="font-aurora-display text-sm tracking-[0.22em] text-[#C9A227]"
                  >
                    0{index + 1}
                  </span>
                  <h3 className="font-aurora-display mt-4 text-xl text-[#F4EFE6]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#F4EFE6]/70">
                    {card.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1} className="mt-10">
            <p className="text-xs leading-relaxed text-[#F4EFE6]/60">
              Undecided? A 45-minute diagnostic sitting gives a mentor enough
              to recommend a route — or tell you plainly that you need less than
              you came for.
            </p>
          </Reveal>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
