import Link from "next/link";
import { ArrowDown, Sparkles } from "lucide-react";
import { DEMOS, numberWord } from "@/lib/registry";
import { ShowcaseNav } from "@/components/showcase/showcase-nav";
import { DemoCards } from "@/components/showcase/demo-cards";
import { WhatIsIncluded } from "@/components/showcase/what-is-included";
import { ContactCta } from "@/components/showcase/contact-cta";
import { ShowcaseFooter } from "@/components/showcase/showcase-footer";

export default function ShowcasePage() {
  return (
    <div className="relative min-h-screen flex-1 overflow-hidden bg-[#070B14] text-white">
      {/* Depth layers: grid + restrained glow. Static except one slow drift. */}
      <div aria-hidden className="vizo-grid-bg pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="vizo-glow vizo-float pointer-events-none absolute inset-x-0 top-0 h-[70vh] opacity-70"
      />

      <ShowcaseNav />

      <main className="relative">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-6xl px-4 pb-16 pt-20 sm:px-6 sm:pb-24 sm:pt-28 lg:pt-36">
            <p className="vizo-fade-up inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70">
              <Sparkles aria-hidden className="h-3.5 w-3.5 text-indigo-300" />
              Website Demo Studio · {numberWord(DEMOS.length)} live concepts
            </p>

            <h1
              className="vizo-fade-up mt-7 max-w-4xl text-[clamp(2.4rem,6vw,4.5rem)] font-semibold leading-[1.03] tracking-tight"
              style={{ animationDelay: "80ms" }}
            >
              {numberWord(DEMOS.length)} Visions. One Mission.
              <br />
              <span className="bg-gradient-to-r from-indigo-300 via-sky-300 to-cyan-200 bg-clip-text text-transparent">
                Your Students&rsquo; Success.
              </span>
            </h1>

            <p
              className="vizo-fade-up mt-6 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg"
              style={{ animationDelay: "160ms" }}
            >
              Explore {numberWord(DEMOS.length)} completely different website
              concepts — coaching institutes alongside retail and fashion
              brands such as TM SONS of Ludhiana. Each has its own design
              philosophy, typography, content and mobile experience. Open any
              demo live, click through its inner pages, and shortlist the design
              that fits your institute or business.
            </p>

            <div
              className="vizo-fade-up mt-9 flex flex-wrap items-center gap-3"
              style={{ animationDelay: "240ms" }}
            >
              <a
                href="#concepts"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#070B14] transition hover:bg-white/90 active:scale-[0.98]"
              >
                Explore the {numberWord(DEMOS.length)} concepts
                <ArrowDown aria-hidden className="h-4 w-4" />
              </a>
              <Link
                href={DEMOS[0].path}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/10 active:scale-[0.98]"
              >
                Start with {DEMOS[0].shortName}
              </Link>
            </div>

            <dl
              className="vizo-fade-up mt-14 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-6 border-t border-white/10 pt-8 sm:grid-cols-4"
              style={{ animationDelay: "320ms" }}
            >
              {[
                [String(DEMOS.length), "distinct designs"],
                ["100%", "responsive"],
                ["1", "link to explore"],
                ["0", "backend required"],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="sr-only">{label}</dt>
                  <dd>
                    <span className="block text-3xl font-semibold tracking-tight text-white">
                      {value}
                    </span>
                    <span className="mt-1 block text-xs uppercase tracking-wider text-white/45">
                      {label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <DemoCards />
        <WhatIsIncluded />
        <ContactCta />
      </main>

      <ShowcaseFooter />
    </div>
  );
}
