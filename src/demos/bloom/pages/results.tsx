import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { Reveal, RevealImage } from "@/components/shared/reveal";
import { bloomResults, bloomTestimonials } from "../data";
import { StarMark } from "../components/illustrations";

export default function BloomResultsPage() {
  return (
    <>
      <section aria-labelledby="results-hero" className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-16 -right-20 h-60 w-60 rounded-[58%_42%_50%_50%/48%_55%_45%_52%] bg-[#F5C86B]/25"
        />
        <div className="relative mx-auto max-w-[1200px] px-4 pt-14 pb-12 sm:px-6 lg:px-8">
          <Reveal y={14}>
            <p className="inline-flex items-center gap-2 rounded-full bg-[#E8836F]/12 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-[#B34832] uppercase">
              <StarMark className="h-4 w-4 text-[#E8836F]" />
              Results &amp; Recognition
            </p>
            <h1
              id="results-hero"
              className="mt-4 max-w-3xl font-bloom-display text-[clamp(2.1rem,5vw,3.25rem)] leading-[1.1] font-semibold tracking-tight text-[#3B3358]"
            >
              Steady growth,{" "}
              <span className="text-[#C2503A]">calmly expressed</span> in
              results
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#5F5878] sm:text-lg">
              We measure success by understanding and confidence first — but we
              are proud of the outcomes our students earn. All figures and
              stories on this page are illustrative placeholders for this design
              demo.
            </p>
          </Reveal>
        </div>
      </section>

      <section
        aria-labelledby="results-figures"
        className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 lg:px-8"
      >
        <Reveal y={16}>
          <h2
            id="results-figures"
            className="font-bloom-display text-[clamp(1.75rem,4vw,2.5rem)] font-semibold tracking-tight text-[#3B3358]"
          >
            Achievement highlights
          </h2>
        </Reveal>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {bloomResults.map((item, index) => (
            <li key={item.label}>
              <Reveal delay={index * 0.06} y={18}>
                <article className="flex h-full flex-col rounded-[24px] bg-white p-6 shadow-[0_2px_16px_rgba(59,51,88,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(59,51,88,0.1)]">
                  <p className="font-bloom-display text-[2.75rem] leading-none font-semibold text-[#C2503A]">
                    {item.figure}
                  </p>
                  <p className="mt-4 font-bloom-display text-base leading-snug font-semibold text-[#3B3358]">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[#5F5878]">
                    {item.detail}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="results-story"
        className="relative overflow-hidden bg-[#F3EDF8]/60 py-16 lg:py-20"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -right-16 h-56 w-56 rounded-[45%_55%_55%_45%/55%_45%_50%_50%] bg-[#FDF0EA]"
        />
        <div className="relative mx-auto grid max-w-[1200px] gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)] lg:gap-16 lg:px-8">
          <div>
            <Reveal y={16}>
              <p className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-[#3B3358] uppercase shadow-[0_2px_10px_rgba(59,51,88,0.05)]">
                How results are built
              </p>
              <h2
                id="results-story"
                className="mt-4 font-bloom-display text-[clamp(1.75rem,4vw,2.5rem)] leading-tight font-semibold tracking-tight text-[#3B3358]"
              >
                Results are a by-product
                <br className="hidden sm:block" /> of joyful, steady effort
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-[#5F5878]">
                Children here do not chase marks directly. They attend
                well-paced classes, hand in weekly practice, revise on a gentle
                published cycle, and ask for help the moment something feels
                hard. Understanding comes first — confidence and marks follow.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Weekly practice reviewed with kind, specific feedback",
                  "Fortnightly chapter checks used for planning, never ranking",
                  "Saturday doubt clinics with the mentor who taught the topic",
                  "Monthly progress cards written in plain, honest language",
                ].map((line) => (
                  <li
                    key={line}
                    className="flex gap-3 text-[15px] leading-relaxed text-[#5F5878]"
                  >
                    <span
                      aria-hidden
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E8836F]"
                    />
                    {line}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <RevealImage delay={0.12}>
            <figure>
              <Image
                src="/images/bloom/reading.jpg"
                alt="Students reading and working together in the Bloom Learning reading corner"
                width={1400}
                height={932}
                sizes="(max-width: 1024px) 100vw, 400px"
                className="h-auto w-full rounded-[26px] object-cover shadow-[0_8px_28px_rgba(59,51,88,0.1)]"
              />
              <figcaption className="mt-3 text-xs text-[#7A7295] italic">
                Quiet focus, shared happily.
              </figcaption>
            </figure>
          </RevealImage>
        </div>
      </section>

      <section
        aria-labelledby="results-voices"
        className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8"
      >
        <Reveal y={16}>
          <h2
            id="results-voices"
            className="font-bloom-display text-[clamp(1.75rem,4vw,2.5rem)] font-semibold tracking-tight text-[#3B3358]"
          >
            Voices from our families
          </h2>
        </Reveal>
        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          {bloomTestimonials.map((item, index) => (
            <li key={item.id} className="h-full">
              <Reveal delay={index * 0.08} y={18}>
                <figure className="flex h-full flex-col rounded-[26px] border border-[#3B3358]/8 bg-white p-7 shadow-[0_2px_16px_rgba(59,51,88,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(59,51,88,0.1)]">
                  <Quote aria-hidden className="h-6 w-6 text-[#E8836F]" />
                  <blockquote className="mt-4 flex-1">
                    <p className="font-bloom-display text-lg leading-relaxed text-[#3B3358]">
                      {item.quote}
                    </p>
                  </blockquote>
                  <figcaption className="mt-6 border-t border-[#3B3358]/10 pt-4">
                    <p className="text-sm font-semibold text-[#3B3358]">
                      {item.name}
                    </p>
                    <p className="mt-0.5 text-xs text-[#7A7295]">{item.role}</p>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
        <Reveal y={14}>
          <div className="mt-12 text-center">
            <Link
              href="/demos/bloom/contact"
              className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-[#C2503A] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_4px_18px_rgba(194,80,58,0.3)] transition-all duration-200 hover:scale-[1.03] hover:bg-[#A8402D] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#3B3358] focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              Discuss your child&apos;s goals with us
              <ArrowRight
                aria-hidden
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
