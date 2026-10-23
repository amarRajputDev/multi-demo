import { Reveal } from "@/components/shared/reveal";
import { northstarRoadmap } from "../data";

export function Roadmap() {
  return (
    <section
      aria-labelledby="roadmap-heading"
      className="border-y border-[#26241F]/12 bg-[#26241F] text-[#F7F4EF]"
    >
      <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:py-28">
        <Reveal y={14} duration={0.8}>
          <div className="max-w-2xl">
            <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.3em] text-[#E5C9BC] uppercase">
              <span aria-hidden className="h-px w-8 bg-[#E5C9BC]" />
              The preparation roadmap
            </p>
            <h2
              id="roadmap-heading"
              className="mt-5 text-[2rem] leading-[1.12] tracking-tight sm:text-4xl"
            >
              A syllabus is a structure.
              <br className="hidden sm:block" />{" "}
              <span className="text-[#E5C9BC] italic">
                We build it in stages.
              </span>
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-[#F7F4EF]/70">
              Every aspirant moves through the same five stages, at a pace set
              by their diagnostic and their life circumstances — never by a
              marketing calendar. Each stage has an artefact you can hold: a
              map, a notebook, a marked copy, a scorecard.
            </p>
          </div>
        </Reveal>

        <ol className="mt-14 grid gap-px border border-[#F7F4EF]/15 bg-[#F7F4EF]/15 sm:grid-cols-2 lg:grid-cols-5">
          {northstarRoadmap.map((stage, index) => (
            <li key={stage.stage} className="bg-[#26241F]">
              <Reveal delay={index * 0.06} duration={0.8} y={16} className="h-full">
                <div className="flex h-full flex-col px-6 py-8">
                  <div className="flex items-baseline justify-between">
                    <span className="font-northstar-display text-sm tracking-[0.2em] text-[#E5C9BC]">
                      Stage {stage.stage}
                    </span>
                    <span className="text-[10px] tracking-[0.14em] text-[#F7F4EF]/50 uppercase">
                      {stage.window}
                    </span>
                  </div>
                  <h3 className="mt-5 font-northstar-display text-xl leading-snug">
                    {stage.title}
                  </h3>
                  <div aria-hidden className="mt-3 h-px w-8 bg-[#9C4F36]" />
                  <p className="mt-4 text-sm leading-relaxed text-[#F7F4EF]/65">
                    {stage.description}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
