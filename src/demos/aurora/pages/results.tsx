import Image from "next/image";
import Link from "next/link";
import { TriangleAlert } from "lucide-react";
import { auroraResults, auroraTracking } from "../data";
import { ContactCta } from "../sections/contact-cta";
import { PageHero } from "../sections/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { Testimonials } from "../sections/testimonials";
import { Trust } from "../sections/trust";

export default function AuroraResultsPage() {
  const [featured, ...rest] = auroraResults;

  return (
    <>
      <PageHero
        eyebrow="Results"
        title="Achievement stories, told with the work left in."
        lead="Rank bands and percentile bands matter to families — but what actually changed matters more. Each story below names the method behind the number, written the way our mentors write fortnightly reviews."
        meta={[
          "JEE · NEET achievement stories",
          "Rank bands shown in demo form",
          "Illustrative content, not verified results",
        ]}
      />

      <section
        aria-label="Demo content notice"
        className="border-b border-white/10 bg-[#C9A227]/15"
      >
        <div className="mx-auto flex w-full max-w-[1240px] items-start gap-3 px-5 py-5 sm:px-8 lg:px-10">
          <TriangleAlert
            aria-hidden
            className="mt-0.5 h-4 w-4 shrink-0 text-[#E8D9A0]"
          />
          <p className="text-xs leading-relaxed text-[#F4EFE6]/80 sm:text-sm">
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
              <article className="grid gap-8 border border-white/10 bg-[#0D1F3B]/60 p-5 sm:p-8 lg:grid-cols-12 lg:gap-10">
                <div className="lg:col-span-5">
                  <div className="relative aspect-[3/2] w-full overflow-hidden border border-white/10 lg:aspect-[4/5]">
                    <Image
                      src="/images/aurora/results.jpg"
                      alt="An Aurora Academy student reviewing graded papers after a mock examination (demo image)"
                      width={1400}
                      height={933}
                      priority
                      sizes="(min-width: 1024px) 38vw, (min-width: 640px) 90vw, 90vw"
                      className="h-full w-full object-cover"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-[#0B1A33]/80 via-transparent to-transparent"
                    />
                    <p className="absolute bottom-4 left-4 text-[11px] uppercase tracking-[0.18em] text-[#E8D9A0]">
                      Featured story (demo)
                    </p>
                  </div>
                </div>
                <div className="lg:col-span-7">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-aurora-display text-3xl text-[#F4EFE6]">
                      {featured.student}
                    </h3>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-[#C9A227]">
                      {featured.exam}
                    </p>
                  </div>
                  <p className="font-aurora-display mt-5 text-xl leading-snug text-[#E8D9A0] sm:text-2xl">
                    {featured.headline}
                  </p>
                  <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[#F4EFE6]/75 sm:text-base">
                    {featured.story}
                  </p>
                  <ul className="mt-7 flex flex-wrap gap-2 border-t border-white/10 pt-6">
                    {featured.focus.map((item) => (
                      <li
                        key={item}
                        className="border border-white/12 px-3 py-1.5 text-[11px] tracking-wide text-[#F4EFE6]/75"
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
                className="bg-[#0B1A33]"
              >
                <article className="flex h-full flex-col p-6 sm:p-7">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[#C9A227]">
                    {story.exam}
                  </p>
                  <h3 className="font-aurora-display mt-3 text-2xl text-[#F4EFE6]">
                    {story.student}
                  </h3>
                  <p className="font-aurora-display mt-4 text-base leading-snug text-[#E8D9A0] sm:text-lg">
                    {story.headline}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-[#F4EFE6]/70">
                    {story.story}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-4">
                    {story.focus.map((item) => (
                      <li
                        key={item}
                        className="border border-white/12 px-2.5 py-1 text-[11px] tracking-wide text-[#F4EFE6]/70"
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

      <section className="border-b border-white/10 bg-[#0A1729]">
        <div className="mx-auto w-full max-w-[1240px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
          <Reveal className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C9A227]">
              How progress is tracked
            </p>
            <h2 className="font-aurora-display mt-5 text-[clamp(1.7rem,3.2vw,2.5rem)] leading-[1.08] text-[#F4EFE6] [text-wrap:balance]">
              A number only matters if you know how it moved.
            </h2>
          </Reveal>

          <ol className="mt-10 grid gap-8 sm:grid-cols-3 sm:gap-10">
            {auroraTracking.map((step, index) => (
              <li key={step.id} className="border-t border-[#C9A227]/40 pt-6">
                <Reveal delay={index * 0.07}>
                  <span
                    aria-hidden
                    className="font-aurora-display block text-sm tracking-[0.24em] text-[#C9A227]"
                  >
                    {step.step}
                  </span>
                  <h3 className="font-aurora-display mt-4 text-xl text-[#F4EFE6]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#F4EFE6]/70">
                    {step.body}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>

          <Reveal delay={0.1} className="mt-10">
            <Link
              href="/demos/aurora/contact"
              className="inline-flex min-h-12 items-center justify-center bg-[#C9A227] px-7 text-sm font-semibold tracking-wide text-[#0B1A33] transition-colors hover:bg-[#E8D9A0] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8D9A0]"
            >
              Book your baseline paper
            </Link>
          </Reveal>
        </div>
      </section>

      <Testimonials />
      <ContactCta />
    </>
  );
}
