import type { Metadata } from "next";
import Link from "next/link";
import { ClipboardList, MessageSquareText, PhoneCall } from "lucide-react";
import { QuoteBuilder } from "../components/quote-builder";
import { tmContact, tmDemoNotice } from "../data";
import { PageHero } from "../sections/page-hero";
import { Reveal } from "@/components/shared/reveal";

export function generateMetadata(): Metadata {
  return {
    title: "Wholesale Enquiries — TM SONS | Quote Request Concept",
    description:
      "Boutiques, retailers and resellers can assemble a wholesale quote request for TM SONS collections. Website concept by Vizo Technology — no minimum order quantity, trade price or delivery term is published until confirmed.",
  };
}

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Pick the pieces",
    text: "Browse the catalogue and add every style you would like quoted to your enquiry list.",
  },
  {
    icon: MessageSquareText,
    step: "02",
    title: "Set quantities",
    text: "Enter your own quantities and any colour preferences. This concept imposes no minimum order quantity.",
  },
  {
    icon: PhoneCall,
    step: "03",
    title: "Preview and call",
    text: "Submit the form for an on-screen preview, then copy it or call the showroom to place it.",
  },
];

export default function TmSonsWholesalePage() {
  return (
    <>
      <PageHero
        eyebrow="Wholesale"
        title={
          <>
            Stock your next collection with{" "}
            <span className="italic text-[#B23B2E]">TM SONS</span>
          </>
        }
        intro="Explore our clothing collections and contact our team for wholesale availability, pricing and bulk enquiries. The builder below assembles a quote request you can send yourself — this concept has no backend."
        aside={
          <div className="border border-[#1C1A17]/15 bg-[#FFFDFA] p-5">
            <p className="text-[9px] tracking-[0.24em] text-[#B23B2E] uppercase">
              Direct lines
            </p>
            <ul className="mt-3 space-y-2">
              {tmContact.phones.map((phone) => (
                <li key={phone.telHref}>
                  <a
                    href={phone.telHref}
                    className="flex min-h-9 items-center justify-between gap-3 text-[14px] text-[#1C1A17] transition-colors hover:text-[#B23B2E]"
                  >
                    {phone.display}
                    <span className="text-[9px] tracking-[0.16em] text-[#6F6A61] uppercase">
                      {phone.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        }
      />

      <section className="border-b border-[#1C1A17]/10 bg-[#FAF7F2] py-12 sm:py-16">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <ul className="grid gap-4 sm:grid-cols-3">
            {steps.map(({ icon: Icon, step, title, text }, index) => (
              <li key={step}>
                <Reveal delay={index * 0.06} className="h-full">
                  <div className="h-full border border-[#1C1A17]/12 bg-[#FFFDFA] p-5">
                    <div className="flex items-center justify-between">
                      <span className="grid h-9 w-9 place-items-center rounded-full border border-[#B23B2E]/35 text-[#B23B2E]">
                        <Icon aria-hidden className="h-4 w-4" />
                      </span>
                      <span className="font-tmsons-display text-2xl text-[#1C1A17]/20">
                        {step}
                      </span>
                    </div>
                    <h2 className="font-tmsons-display mt-4 text-lg text-[#1C1A17]">
                      {title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-[#6F6A61]">
                      {text}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <QuoteBuilder />
          </div>

          <div className="mt-10 border-t border-[#1C1A17]/12 pt-7">
            <p className="max-w-3xl text-[11px] leading-relaxed text-[#6F6A61]">
              {tmDemoNotice} No minimum order quantity, trade price list,
              discount slab, stock figure or delivery guarantee appears on this
              page because none has been confirmed with the business.
            </p>
            <p className="mt-4 text-[11px] leading-relaxed text-[#6F6A61]">
              Retail buyer instead of a store?{" "}
              <Link
                href="/demos/tm-sons/shop"
                className="text-[#B23B2E] underline underline-offset-4"
              >
                Browse the full catalogue
              </Link>{" "}
              or{" "}
              <Link
                href="/demos/tm-sons/contact"
                className="text-[#B23B2E] underline underline-offset-4"
              >
                open the contact page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
