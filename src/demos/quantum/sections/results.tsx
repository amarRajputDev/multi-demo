import Link from "next/link";
import { Reveal } from "@/components/shared/reveal";
import { quantumResults } from "../data";
import { SectionHeading } from "./section-heading";

export function Results() {
  return (
    <section className="border-b border-white/10 bg-[#0B1430]">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            index="06"
            eyebrow="Achievement stories"
            title="Results written as stories, not scoreboard noise."
            lead="Rank bands matter — but what changed matters more. Each story below names the work that moved the number."
          />
          <Reveal delay={0.1} className="shrink-0">
            <Link
              href="/demos/quantum/results"
              className="inline-flex min-h-12 items-center gap-2 border-b border-[#22D3EE]/50 pb-1 text-sm font-semibold tracking-wide text-[#22D3EE] transition-colors hover:border-[#22D3EE] hover:text-[#67E8F9] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#22D3EE]"
            >
              Read every result
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px bg-white/10 md:grid-cols-2">
          {quantumResults.map((story, index) => (
            <Reveal
              key={story.id}
              delay={index * 0.06}
              className="bg-[#0B1430]"
            >
              <article className="flex h-full flex-col p-6 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-quantum-display text-2xl font-semibold text-[#EAF2FF]">
                    {story.student}
                  </h3>
                  <p className="font-quantum-mono text-[10px] uppercase tracking-[0.18em] text-[#8B5CF6]">
                    {story.exam}
                  </p>
                </div>
                <p className="font-quantum-display mt-5 text-lg font-semibold leading-snug text-[#22D3EE] sm:text-xl">
                  {story.headline}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-[#7C93B8]">
                  {story.story}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-5">
                  {story.focus.map((item) => (
                    <li
                      key={item}
                      className="border border-white/12 px-2.5 py-1 text-[11px] tracking-wide text-[#EAF2FF]/70"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-xs text-[#7C93B8]">
          All ranks, scores and student names shown here are fictional demo
          placeholders, not verified achievements.
        </p>
      </div>
    </section>
  );
}
