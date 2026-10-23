import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, Info } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { quantumChooser, quantumCourses } from "../data";
import { ContactCta } from "../sections/contact-cta";
import { PageHero } from "../sections/page-hero";

export default function QuantumCoursesPage() {
  return (
    <>
      <PageHero
        eyebrow="Programmes · 2026–27 session (demo)"
        title="Five programmes, one standard of rigour."
        lead="Every Quantum programme is built from the same materials: a concept diagnostic, problem labs with in-room solving, and error-tagged paper analysis. What changes is the subject depth and the calendar you have."
        meta={[
          "JEE · NEET · Coding",
          "Two-year, weekend and evening routes",
          "Classroom + online mirror",
        ]}
      >
        <Reveal delay={0.15} className="mt-12">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-3 border border-[#22D3EE]/25 sm:-inset-4"
            />
            <div className="relative aspect-[3/2] w-full overflow-hidden border border-white/10 sm:aspect-[12/5]">
              <Image
                src="/images/quantum/math.jpg"
                alt="A Quantum Learning desk with worked mathematics problems and graph paper (demo image)"
                width={1400}
                height={933}
                priority
                sizes="(min-width: 1240px) 1200px, 100vw"
                className="h-full w-full object-cover object-center"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-r from-[#050A18] via-[#050A18]/40 to-transparent"
              />
              <p className="absolute bottom-5 left-5 max-w-xs text-xs leading-relaxed text-[#EAF2FF]/85 sm:bottom-7 sm:left-7 sm:max-w-sm sm:text-sm">
                Every programme ends the same way: a student who has seen the
                method before the paper demands it.
              </p>
            </div>
          </div>
        </Reveal>
      </PageHero>

      <section aria-label="Fee note" className="border-b border-white/10 bg-[#0B1430]">
        <div className="mx-auto flex w-full max-w-[1240px] items-start gap-3 px-5 py-5 sm:px-8 lg:px-10">
          <Info
            aria-hidden
            className="mt-0.5 h-4 w-4 shrink-0 text-[#22D3EE]"
          />
          <p className="text-xs leading-relaxed text-[#7C93B8] sm:text-sm">
            All fees on this page are indicative demo figures for a design
            concept. A live institute would publish its current fee structure,
            concessions and refund policy here.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto w-full max-w-[1240px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
          <h2 className="sr-only">Quantum Learning programmes in detail</h2>
          <div className="space-y-6">
            {quantumCourses.map((course, index) => (
              <Reveal key={course.id} delay={0.03 * index}>
                <article className="border border-white/10 bg-[#0B1430]/60 p-5 transition-colors duration-300 hover:border-[#22D3EE]/45 sm:p-8">
                  <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
                    <div className="lg:col-span-7">
                      <p className="font-quantum-mono text-[11px] uppercase tracking-[0.22em] text-[#8B5CF6]">
                        Course {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="font-quantum-display mt-2 text-[1.55rem] font-semibold leading-tight text-[#EAF2FF] sm:text-3xl">
                        {course.name}
                      </h3>
                      <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#7C93B8] sm:text-base">
                        {course.tagline}
                      </p>

                      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                        {course.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start gap-2.5 text-sm text-[#EAF2FF]/75"
                          >
                            <Check
                              aria-hidden
                              className="mt-0.5 h-4 w-4 shrink-0 text-[#22D3EE]"
                            />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="lg:col-span-5">
                      <dl className="divide-y divide-white/10 border-y border-white/10">
                        <div className="flex items-baseline justify-between gap-4 py-3.5">
                          <dt className="font-quantum-mono text-[10px] uppercase tracking-[0.18em] text-[#22D3EE]">
                            Duration
                          </dt>
                          <dd className="text-right text-sm text-[#EAF2FF]/80">
                            {course.duration}
                          </dd>
                        </div>
                        <div className="flex items-baseline justify-between gap-4 py-3.5">
                          <dt className="font-quantum-mono text-[10px] uppercase tracking-[0.18em] text-[#22D3EE]">
                            Mode
                          </dt>
                          <dd className="text-right text-sm text-[#EAF2FF]/80">
                            {course.mode}
                          </dd>
                        </div>
                        <div className="flex items-baseline justify-between gap-4 py-3.5">
                          <dt className="font-quantum-mono text-[10px] uppercase tracking-[0.18em] text-[#22D3EE]">
                            Fee
                          </dt>
                          <dd className="font-quantum-display text-right text-lg font-semibold text-[#22D3EE]">
                            {course.fee}
                          </dd>
                        </div>
                      </dl>

                      <Link
                        href="/demos/quantum/contact"
                        className="group mt-6 inline-flex min-h-12 w-full items-center justify-between gap-3 border border-[#22D3EE]/50 px-5 text-sm font-semibold tracking-wide text-[#EAF2FF] transition-colors hover:border-[#22D3EE] hover:bg-[#22D3EE]/10 hover:text-[#67E8F9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22D3EE]"
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

      <section className="border-b border-white/10 bg-[#0B1430]">
        <div className="mx-auto w-full max-w-[1240px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
          <Reveal className="max-w-2xl">
            <p className="font-quantum-mono text-[11px] font-medium uppercase tracking-[0.28em] text-[#22D3EE]">
              Choosing well
            </p>
            <h2 className="font-quantum-display mt-5 text-[clamp(1.65rem,3vw,2.4rem)] font-semibold leading-[1.1] text-[#EAF2FF] [text-wrap:balance]">
              Three questions decide the right programme.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-px bg-white/10 sm:grid-cols-3">
            {quantumChooser.map((card, index) => (
              <Reveal
                key={card.id}
                delay={index * 0.07}
                className="bg-[#0B1430]"
              >
                <div className="h-full p-6 sm:p-7">
                  <span
                    aria-hidden
                    className="font-quantum-mono text-sm tracking-[0.22em] text-[#22D3EE]"
                  >
                    0{index + 1}
                  </span>
                  <h3 className="font-quantum-display mt-4 text-xl font-semibold text-[#EAF2FF]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#7C93B8]">
                    {card.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1} className="mt-10">
            <p className="text-xs leading-relaxed text-[#7C93B8]">
              Undecided? A sixty-minute concept diagnostic gives a mentor
              enough to recommend a route — or tell you plainly that you need
              less than you came for.
            </p>
          </Reveal>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
