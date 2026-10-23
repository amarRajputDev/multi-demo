import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/shared/reveal";
import { GridBackdrop } from "./grid-backdrop";
import { HeroDiagram } from "./hero-diagram";
import { Parallax } from "./parallax";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#22D3EE]";

const trustChips = [
  "Concept diagnostics before teaching",
  "Problem labs, capped ratios",
  "Error-tagged paper analysis",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(120%_85%_at_78%_-15%,rgba(34,211,238,0.11),transparent_60%),radial-gradient(80%_60%_at_5%_110%,rgba(139,92,246,0.08),transparent_60%)]">
      <GridBackdrop />
      <div className="relative mx-auto grid w-full max-w-[1240px] gap-14 px-5 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:grid-cols-12 lg:gap-10 lg:px-10 lg:pb-24 lg:pt-20">
        <div className="lg:col-span-6 lg:pt-6">
          <Reveal>
            <p className="font-quantum-mono flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-[#22D3EE]">
              Quantum Learning
              <span aria-hidden className="h-px w-12 bg-[#22D3EE]/40" />
              STEM · JEE · NEET
            </p>
          </Reveal>

          <Reveal delay={0.07}>
            <h1 className="font-quantum-display mt-6 text-[clamp(2.25rem,5.4vw,4.15rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-[#EAF2FF] [text-wrap:balance]">
              Master the concepts,{" "}
              <span className="text-[#22D3EE]">understand</span>{" "}
              <span className="text-[#8B5CF6]">the possibilities.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#7C93B8] sm:text-lg">
              A STEM coaching institute built around one idea: students do not
              fail entrances for lack of information — they fail because
              nobody watched them solve. Concept diagnostics, problem labs and
              error analytics, engineered end to end.
            </p>
          </Reveal>

          <Reveal delay={0.21}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/demos/quantum/courses"
                className={`inline-flex min-h-12 items-center justify-center border border-[#22D3EE] bg-[#22D3EE] px-7 text-sm font-semibold tracking-wide text-[#050A18] shadow-[0_0_26px_rgba(34,211,238,0.28)] transition-all duration-300 hover:bg-[#67E8F9] hover:shadow-[0_0_34px_rgba(34,211,238,0.4)] ${focusRing}`}
              >
                Explore the programmes
              </Link>
              <Link
                href="/demos/quantum/contact"
                className={`inline-flex min-h-12 items-center justify-center border border-[#22D3EE]/45 px-7 text-sm font-semibold tracking-wide text-[#EAF2FF] transition-colors duration-300 hover:border-[#22D3EE] hover:bg-[#22D3EE]/10 hover:text-[#67E8F9] ${focusRing}`}
              >
                Book a concept diagnostic
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.28}>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6">
              {trustChips.map((chip) => (
                <li
                  key={chip}
                  className="font-quantum-mono flex items-center gap-2.5 text-[11px] uppercase tracking-[0.14em] text-[#7C93B8]"
                >
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 shrink-0 rotate-45 bg-[#22D3EE]"
                  />
                  {chip}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="lg:col-span-6">
          <Parallax distance={16}>
            <Reveal delay={0.1}>
              <div className="relative border border-[#22D3EE]/25 bg-[#0B1430]/70 p-3 shadow-[0_0_40px_rgba(34,211,238,0.06)] backdrop-blur-sm sm:p-4">
                <div className="flex items-center justify-between gap-3 border-b border-white/10 px-1 pb-3">
                  <span className="font-quantum-mono text-[10px] uppercase tracking-[0.22em] text-[#7C93B8]">
                    plane · ℝ²
                  </span>
                  <span className="font-quantum-mono text-[10px] uppercase tracking-[0.22em] text-[#22D3EE]">
                    session 2026–27
                  </span>
                </div>
                <HeroDiagram className="mt-3 h-auto w-full" />
                <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 border-t border-white/10 px-1 pt-3">
                  <span className="font-quantum-mono flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-[#7C93B8]">
                    <span
                      aria-hidden
                      className="h-px w-4 bg-[#22D3EE]"
                    />
                    f(x) · concept curve
                  </span>
                  <span className="font-quantum-mono flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-[#7C93B8]">
                    <span
                      aria-hidden
                      className="h-px w-4 bg-[#8B5CF6]"
                    />
                    g(x) · progress trend
                  </span>
                </div>
              </div>
            </Reveal>
          </Parallax>

          <Reveal delay={0.24} className="mt-6">
            <div className="relative aspect-[16/9] w-full overflow-hidden border border-white/10">
              <Image
                src="/images/quantum/hero-physics.jpg"
                alt="Students solving mechanics problems during a Quantum Learning problem lab (demo image)"
                width={1400}
                height={933}
                priority
                sizes="(min-width: 1024px) 46vw, (min-width: 640px) 90vw, 90vw"
                className="h-full w-full object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-[#050A18] via-[#050A18]/25 to-transparent"
              />
              <p className="font-quantum-mono absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.2em] text-[#EAF2FF]/85">
                Problem lab · mechanics block (demo)
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
