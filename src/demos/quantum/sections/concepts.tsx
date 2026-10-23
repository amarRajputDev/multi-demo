"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Reveal, RevealImage } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";
import { quantumConcepts } from "../data";
import { SectionHeading } from "./section-heading";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#22D3EE]";

export function Concepts() {
  const [activeId, setActiveId] = useState(quantumConcepts[0]?.id ?? "");
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeIndex = Math.max(
    0,
    quantumConcepts.findIndex((concept) => concept.id === activeId),
  );
  const active = quantumConcepts[activeIndex];

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    const count = quantumConcepts.length;
    if (count === 0) return;
    let next = -1;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      next = (activeIndex + 1) % count;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      next = (activeIndex - 1 + count) % count;
    } else if (event.key === "Home") {
      next = 0;
    } else if (event.key === "End") {
      next = count - 1;
    }
    if (next >= 0) {
      event.preventDefault();
      const concept = quantumConcepts[next];
      if (concept) {
        setActiveId(concept.id);
        tabRefs.current[next]?.focus();
      }
    }
  }

  return (
    <section className="border-b border-white/10">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        <SectionHeading
          index="01"
          eyebrow="Subject architectures"
          title="Five subjects, five methods — one diagnostic language."
          lead="Each subject is taught with the method it actually requires. Switch between them to see the topic map a Quantum batch works against."
        />

        <Reveal delay={0.08}>
          <div
            role="tablist"
            aria-label="Subjects"
            onKeyDown={handleKeyDown}
            className="mt-12 flex flex-wrap gap-2"
          >
            {quantumConcepts.map((concept, index) => {
              const selected = concept.id === activeId;
              return (
                <button
                  key={concept.id}
                  ref={(element) => {
                    tabRefs.current[index] = element;
                  }}
                  type="button"
                  role="tab"
                  id={`concept-tab-${concept.id}`}
                  aria-selected={selected}
                  aria-controls={`concept-panel-${concept.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActiveId(concept.id)}
                  className={cn(
                    "font-quantum-mono inline-flex min-h-11 items-center border px-4 text-xs uppercase tracking-[0.16em] transition-colors duration-200",
                    selected
                      ? "border-[#22D3EE] bg-[#22D3EE]/10 text-[#22D3EE]"
                      : "border-white/12 text-[#7C93B8] hover:border-[#22D3EE]/40 hover:text-[#EAF2FF]",
                    focusRing,
                  )}
                >
                  {concept.title}
                </button>
              );
            })}
          </div>
        </Reveal>

        {active ? (
          <div
            key={active.id}
            role="tabpanel"
            id={`concept-panel-${active.id}`}
            aria-labelledby={`concept-tab-${active.id}`}
            tabIndex={0}
            className={`mt-8 border border-white/10 bg-[#0B1430]/60 ${focusRing}`}
          >
            <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-12 lg:gap-10 lg:p-10">
              <div className="lg:col-span-6">
                <p className="font-quantum-mono text-[11px] uppercase tracking-[0.22em] text-[#8B5CF6]">
                  Module · {active.title}
                </p>
                <h3 className="font-quantum-display mt-3 text-[clamp(1.5rem,2.6vw,2.1rem)] font-semibold leading-tight text-[#EAF2FF]">
                  {active.title}
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#7C93B8] sm:text-base">
                  {active.blurb}
                </p>
                <ul className="mt-7 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                  {active.topics.map((topic) => (
                    <li
                      key={topic}
                      className="flex items-start gap-2.5 text-sm text-[#EAF2FF]/80"
                    >
                      <span
                        aria-hidden
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-[#22D3EE]"
                      />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-6">
                <RevealImage delay={0.05}>
                  <div className="relative aspect-[3/2] w-full overflow-hidden border border-[#22D3EE]/20">
                    <Image
                      src={active.image}
                      alt={active.imageAlt}
                      width={1400}
                      height={933}
                      sizes="(min-width: 1024px) 46vw, (min-width: 640px) 90vw, 90vw"
                      className="h-full w-full object-cover"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-[#0B1430]/85 via-transparent to-transparent"
                    />
                    <p className="font-quantum-mono absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.2em] text-[#EAF2FF]/85">
                      {active.title} lab (demo)
                    </p>
                  </div>
                </RevealImage>
              </div>
            </div>
          </div>
        ) : null}

        <p className="mt-6 text-xs text-[#7C93B8]">
          Topic maps are illustrative demo content — a live institute would
          publish its current syllabus coverage here.
        </p>
      </div>
    </section>
  );
}
