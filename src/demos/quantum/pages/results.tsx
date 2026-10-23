import Image from "next/image";
import Link from "next/link";
import { TriangleAlert } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { quantumResults, quantumTracking } from "../data";
import { ContactCta } from "../sections/contact-cta";
import { PageHero } from "../sections/page-hero";
import { Testimonials } from "../sections/testimonials";
import { Trust } from "../sections/trust";

export default function QuantumResultsPage() {
  const [featured, ...rest] = quantumResults;

  return (
    <>
      <PageHero
        eyebrow="Results"
        title="Achievement stories, told with the work left in."
        lead="Rank bands and percentile bands matter to families — but what actually changed matters more. Each story below names the method behind the number, written the way our mentors write fortnightly reviews."
        meta={[
          "JEE · NEET · coding stories",
          "Rank bands shown in demo form",
          "Illustrative content, not verified results",
        ]}
      />

      <section
        aria-label="Demo content notice"
        className="border-b border-white/10 bg-[#8B5CF6]/12"
      >
        <div className="mx-auto flex w-full max-w-[1240px] items-start gap-3 px-5 py-5 sm:px-8 lg:px-10">
          <TriangleAlert
            aria-hidden
            className="mt-0.5 h-4 w-4 shrink-0 text-[#8B5CF6]"
          />
          <p className="text-xs leading-relaxed text-[#7C93B8] sm:text-sm">
            Every rank, score, student name and percentage on this page is
            fictional demo content written for a design showcase. None of it is
            a verified achievement of a real student.
          </p>
        </div>
      </section>

      <Trust />

      <section className="border-b border-white/10">
        <div className="mx-auto w-full max-w-[1240px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
          <h2 className="sr-only">Featured achievement story</h2>
          {featured ? (
            <Reveal>
              <article className="grid gap-8 border border-white/10 bg-[#0B1430]/60 p-5 sm:p-8 lg:grid-cols-12 lg:gap-10">
                <div className="lg:col-span-5">
                  <div className="relative aspect-[3/2] w-full overflow-hidden border border-white/10 lg:aspect-[4/5]">
                    <Image
                      src="/images/quantum/lab.jpg"
                      alt="A Quantum Learning student reviewing graded papers in the lab (demo image)"
                      width={1400}
                      height={933}
                      priority
                      sizes="(min-width: 1024px) 38vw, (min-width: 640px) 90vw, 90vw"
                      className="h-full w-full object-cover"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-[#050A18]/80 via-transparent to-transparent"
                    />
                    <p className="font-quantum-mono absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.18em] text-[#22D3EE]">
                      Featured story (demo)
                    </p>
                  </div>
                </div>
                <div className="lg:col-span-7">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-quantum-display text-3xl font-semibold text-[#EAF2FF]">
                      {featured.student}
                    </h3>
                    <p className="font-quantum-mono text-[10px] uppercase tracking-[0.18em] text-[#8B5CF6]">
                      {featured.exam}
                    </p>
                  </div>
                  <p className="font-quantum-display mt-5 text-xl font-semibold leading-snug text-[#22D3EE] sm:text-2xl">
                    {featured.headline}
                  </p>
                  <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[#7C93B8] sm:text-base">
                    {featured.story}
                  </p>
                  <ul className="mt-7 flex flex-wrap gap-2 border-t border-white/10 pt-6">
                    {featured.focus.map((item) => (
                      <li
                        key={item}
                        className="border border-white/12 px-3 py-1.5 text-[11px] tracking-wide text-[#EAF2FF]/75"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ) : null}

          <div className="mt-8 grid gap-px bg-white/10 md:grid-cols-3">
            {rest.map((story, index) => (
              <Reveal
                key={story.id}
                delay={index * 0.07}
                className="bg-[#0B1430]"
              >
                <article className="flex h-full flex-col p-6 sm:p-7">
                  <p className="font-quantum-mono text-[10px] uppercase tracking-[0.18em] text-[#8B5CF6]">
                    {story.exam}
                  </p>
                  <h3 className="font-quantum-display mt-3 text-2xl font-semibold text-[#EAF2FF]">
                    {story.student}
                  </h3>
                  <p className="font-quantum-display mt-4 text-base font-semibold leading-snug text-[#22D3EE] sm:text-lg">
                    {story.headline}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-[#7C93B8]">
                    {story.story}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-4">
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
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0B1430]">
        <div className="mx-auto w-full max-w-[1240px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
          <Reveal className="max-w-2xl">
            <p className="font-quantum-mono text-[11px] font-medium uppercase tracking-[0.28em] text-[#22D3EE]">
              How progress is tracked
            </p>
            <h2 className="font-quantum-display mt-5 text-[clamp(1.65rem,3vw,2.4rem)] font-semibold leading-[1.1] text-[#EAF2FF] [text-wrap:balance]">
              A number only matters if you know how it moved.
            </h2>
          </Reveal>

          <ol className="mt-10 grid gap-8 sm:grid-cols-3 sm:gap-10">
            {quantumTracking.map((step, index) => (
              <li key={step.id} className="border-t border-[#22D3EE]/40 pt-6">
                <Reveal delay={index * 0.07}>
                  <span
                    aria-hidden
                    className="font-quantum-mono block text-sm tracking-[0.24em] text-[#22D3EE]"
                  >
                    {step.step}
                  </span>
                  <h3 className="font-quantum-display mt-4 text-xl font-semibold text-[#EAF2FF]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#7C93B8]">
                    {step.body}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>

          <Reveal delay={0.1} className="mt-10">
            <Link
              href="/demos/quantum/contact"
              className="inline-flex min-h-12 items-center justify-center border border-[#22D3EE] bg-[#22D3EE] px-7 text-sm font-semibold tracking-wide text-[#050A18] shadow-[0_0_22px_rgba(34,211,238,0.22)] transition-all duration-300 hover:bg-[#67E8F9] hover:shadow-[0_0_28px_rgba(34,211,238,0.32)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8B5CF6]"
            >
              Book your baseline diagnostic
            </Link>
          </Reveal>
        </div>
      </section>

      <Testimonials />
      <ContactCta />
    </>
  );
}
