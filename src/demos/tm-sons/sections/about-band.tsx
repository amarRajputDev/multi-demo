import Link from "next/link";
import { ArrowRight, MapPin, Phone, ShoppingBag } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { BrandMark } from "../components/brand-mark";
import { tmContact, tmCategories } from "../data";
import { SectionHeading } from "./section-heading";

const facts = [
  { label: "Based in", value: "Ludhiana, Punjab" },
  { label: "Serving", value: "Retail buyers & wholesalers" },
  { label: "Collections", value: `${tmCategories.length} categories` },
  { label: "Pricing", value: "Shared on enquiry" },
];

export function AboutBand() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-b border-[#1C1A17]/10 bg-[#FFFDFA] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="05 — About"
              title={
                <>
                  A Ludhiana clothing house,{" "}
                  <span className="italic text-[#B23B2E]">open to enquiry</span>
                </>
              }
              intro={
                <>
                  TM SONS is a women&rsquo;s apparel business based in
                  Ludhiana, with clothing collections spanning winterwear,
                  coordinated styles and ethnic fashion. Retail customers and
                  wholesale buyers can enquire about available products and
                  current collection details.
                </>
              }
            />
            <p className="mt-5 max-w-2xl border-l-2 border-[#B23B2E]/40 pl-4 text-[12px] leading-relaxed text-[#6F6A61]">
              Proposed demonstration copy. The business&rsquo;s exact scope and
              preferred brand story are confirmed with its owner before
              publication. No manufacturing capability, history or founding
              date is claimed here.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/demos/tm-sons/about"
                className="group inline-flex min-h-12 items-center gap-2.5 bg-[#1C1A17] px-7 text-[11px] tracking-[0.2em] text-[#FAF7F2] uppercase transition-colors hover:bg-[#B23B2E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B23B2E]"
              >
                Read the full story
                <ArrowRight
                  aria-hidden
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/demos/tm-sons/contact"
                className="inline-flex min-h-12 items-center gap-2.5 border border-[#1C1A17]/25 px-7 text-[11px] tracking-[0.2em] text-[#1C1A17] uppercase transition-colors hover:border-[#1C1A17] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B23B2E]"
              >
                Contact
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="border border-[#1C1A17]/12 bg-[#FAF7F2] p-7 sm:p-9">
              <BrandMark size={64} withWordmark subWordmark="Ludhiana · Punjab" />

              <dl className="mt-8 grid gap-x-8 gap-y-6 border-t border-[#1C1A17]/12 pt-7 sm:grid-cols-2">
                {facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="text-[9px] tracking-[0.24em] text-[#6F6A61] uppercase">
                      {fact.label}
                    </dt>
                    <dd className="font-tmsons-display mt-1.5 text-[1.05rem] text-[#1C1A17]">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 space-y-3 border-t border-[#1C1A17]/12 pt-7">
                <p className="flex items-start gap-2.5 text-[13px] leading-relaxed text-[#1C1A17]">
                  <MapPin
                    aria-hidden
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#B23B2E]"
                  />
                  {tmContact.locationShort}
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {tmContact.phones.map((phone) => (
                    <a
                      key={phone.telHref}
                      href={phone.telHref}
                      className="inline-flex min-h-10 items-center gap-2 border border-[#1C1A17]/20 px-4 text-[12px] tracking-[0.08em] text-[#1C1A17] transition-colors hover:border-[#B23B2E] hover:text-[#B23B2E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B23B2E]"
                    >
                      <Phone aria-hidden className="h-3.5 w-3.5 text-[#B23B2E]" />
                      {phone.display}
                    </a>
                  ))}
                </div>
                <p className="flex items-start gap-2.5 pt-1 text-[12px] leading-relaxed text-[#6F6A61]">
                  <ShoppingBag
                    aria-hidden
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#B23B2E]"
                  />
                  Prices, availability and terms are shared directly after
                  confirmation — nothing is published here.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
