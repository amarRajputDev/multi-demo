import { Info } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { ContactCta } from "../sections/contact-cta";
import { PageHero } from "../sections/page-hero";
import { Results } from "../sections/results";
import { Testimonials } from "../sections/testimonials";
import { Trust } from "../sections/trust";

const heroMeta = [
  { label: "Aspirants coached", value: "12,400+" },
  { label: "Mocks per month", value: "9 full-length" },
  { label: "Improved percentile", value: "92% · demo" },
  { label: "Tracked since", value: "2016" },
];

export function ResultsPage() {
  return (
    <>
      <PageHero
        headingId="results-hero"
        eyebrow="Results & recognition"
        heading={
          <>
            Proof, printed
            <br />
            every attempt cycle.
          </>
        }
        intro="Every rank here started as a diagnostic gap on a mentor's sheet. This page is the honest scoreboard: what the last cycle produced, how the climb is built week by week — and which figures are demonstration content for this design demo."
        meta={heroMeta}
      />

      <Trust />
      <Results showLink={false} />
      <Testimonials />

      <section aria-labelledby="results-note" className="bg-white">
        <div className="mx-auto max-w-[1240px] px-4 pb-14 sm:px-6 lg:px-8 lg:pb-20">
          <Reveal y={14} duration={0.45}>
            <h2 id="results-note" className="sr-only">
              Demonstration content notice
            </h2>
            <p className="flex items-start gap-2.5 rounded-2xl bg-[#F2F5FF] px-4 py-3.5 text-xs leading-relaxed text-[#5A6A99] sm:px-5 sm:py-4">
              <Info aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-[#2447F0]" />
              Honest small print: every rank, score, percentile, student name
              and testimonial on this page is an illustrative placeholder
              written for this design demonstration. Pulse Prep is a concept
              brand by Vizo Technology — nothing here is a verified real-world
              achievement.
            </p>
          </Reveal>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
