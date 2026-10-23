import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, RevealImage } from "@/components/shared/reveal";
import { bloomResults } from "../data";
import { StarMark } from "../components/illustrations";

export function Results() {
  return (
    <section
      aria-labelledby="results-heading"
      className="relative overflow-hidden bg-[#F3EDF8]/60 py-16 lg:py-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 right-[8%] h-44 w-44 rounded-[58%_42%_50%_50%/48%_55%_45%_52%] bg-[#F5C86B]/25"
      />

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <Reveal y={16}>
          <div className="mx-auto max-w-2xl text-center">
            <p className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-[#3B3358] uppercase shadow-[0_2px_10px_rgba(59,51,88,0.05)]">
              <StarMark className="h-4 w-4 text-[#E8836F]" />
              Happy progress
            </p>
            <h2
              id="results-heading"
              className="mt-4 font-bloom-display text-[clamp(1.9rem,4vw,2.75rem)] leading-tight font-semibold tracking-tight text-[#3B3358]"
            >
              Growth you can see,
              <br className="hidden sm:block" /> joy you can feel
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#5F5878]">
              We celebrate understanding and effort first — but steady learning
              shows up in outcomes too. All figures below are illustrative
              placeholders for this design demo.
            </p>
          </div>
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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

        <Reveal y={18}>
          <div className="mt-14 grid items-center gap-10 rounded-[32px] bg-white p-6 shadow-[0_4px_28px_rgba(59,51,88,0.07)] sm:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,380px)] lg:gap-14 lg:p-10">
            <div>
              <h3 className="font-bloom-display text-2xl font-semibold text-[#3B3358] sm:text-3xl">
                Results follow understanding
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-[#5F5878]">
                Children at Bloom do not chase marks directly. They attend
                cheerful, well-paced classes, hand in their weekly practice,
                revise on a gentle cycle, and ask for help the moment a concept
                feels fuzzy. Confidence grows — and marks follow.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Weekly practice with kind, specific feedback",
                  "Fortnightly chapter checks, never used for ranking",
                  "Mentor-led doubt clinics every Saturday",
                  "One-to-one support whenever a topic feels hard",
                ].map((line) => (
                  <li
                    key={line}
                    className="flex gap-3 text-[15px] leading-relaxed text-[#5F5878]"
                  >
                    <span
                      aria-hidden
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E8836F]"
                    />
                    {line}
                  </li>
                ))}
              </ul>
              <Link
                href="/demos/bloom/results"
                className="group mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#C2503A] px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(194,80,58,0.28)] transition-all duration-200 hover:scale-[1.03] hover:bg-[#A8402D] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#3B3358] focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                See the full results story
                <ArrowRight
                  aria-hidden
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
            <RevealImage delay={0.1}>
              <figure>
                <Image
                  src="/images/bloom/learning.jpg"
                  alt="A Bloom Learning mentor helping a student work through a problem together"
                  width={1400}
                  height={933}
                  sizes="(max-width: 1024px) 100vw, 380px"
                  className="h-auto w-full rounded-[24px] object-cover shadow-[0_8px_28px_rgba(59,51,88,0.1)]"
                />
                <figcaption className="mt-3 text-xs text-[#7A7295] italic">
                  Mentorship that meets every child where they are.
                </figcaption>
              </figure>
            </RevealImage>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
