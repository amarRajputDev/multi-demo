import type { Metadata } from "next";
import { InstagramGlyph } from "../components/icons";
import Link from "next/link";
import { Clock, MapPin, Phone, ShoppingBag } from "lucide-react";
import { QuoteBuilder } from "../components/quote-builder";
import { tmContact, tmDemoNotice } from "../data";
import { PageHero } from "../sections/page-hero";
import { Reveal } from "@/components/shared/reveal";

export function generateMetadata(): Metadata {
  return {
    title: "Contact TM SONS — Ludhiana | Wholesale & Retail Enquiries",
    description:
      "Call TM SONS in Ludhiana for wholesale and retail clothing enquiries, or send a quote request from this website concept. Website concept by Vizo Technology.",
  };
}

export default function TmSonsContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Talk to <span className="italic text-[#B23B2E]">TM SONS</span>
          </>
        }
        intro="Two public enquiry lines, an Instagram inbox and a quote builder. This concept publishes no email address and no opening hours, because neither has been supplied by the business."
        aside={
          <div className="border border-[#1C1A17]/15 bg-[#FFFDFA] p-5">
            <p className="text-[9px] tracking-[0.24em] text-[#B23B2E] uppercase">
              Prefer WhatsApp?
            </p>
            <p className="mt-2 text-[13px] leading-relaxed text-[#6F6A61]">
              WhatsApp is <strong className="text-[#1C1A17]">not</strong> offered
              here. Neither number has been confirmed as WhatsApp-enabled, so
              this concept only uses telephone links.
            </p>
          </div>
        }
      />

      <section className="bg-[#FAF7F2] py-14 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {tmContact.phones.map((phone, index) => (
              <li key={phone.telHref} className="list-none">
                <Reveal delay={index * 0.06} className="h-full">
                  <a
                    href={phone.telHref}
                    className="group flex h-full flex-col justify-between gap-6 border border-[#1C1A17]/12 bg-[#FFFDFA] p-6 transition-colors hover:border-[#B23B2E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B23B2E]"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-[#B23B2E]/10 text-[#B23B2E]">
                      <Phone aria-hidden className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-[9px] tracking-[0.24em] text-[#6F6A61] uppercase">
                        {phone.label}
                      </span>
                      <span className="font-tmsons-display mt-2 block text-[1.3rem] leading-none text-[#1C1A17] transition-colors group-hover:text-[#B23B2E]">
                        {phone.display}
                      </span>
                      <span className="mt-3 block text-[11px] tracking-[0.16em] text-[#B23B2E] uppercase">
                        Tap to call
                      </span>
                    </span>
                  </a>
                </Reveal>
              </li>
            ))}

            <li className="list-none">
              <Reveal delay={0.12} className="h-full">
                <a
                  href={tmContact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col justify-between gap-6 border border-[#1C1A17]/12 bg-[#FFFDFA] p-6 transition-colors hover:border-[#B23B2E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B23B2E]"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[#B23B2E]/10 text-[#B23B2E]">
                    <InstagramGlyph aria-hidden className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-[9px] tracking-[0.24em] text-[#6F6A61] uppercase">
                      Instagram inbox
                    </span>
                    <span className="font-tmsons-display mt-2 block text-[1.15rem] leading-none text-[#1C1A17] transition-colors group-hover:text-[#B23B2E]">
                      {tmContact.instagramHandle}
                    </span>
                    <span className="mt-3 block text-[11px] tracking-[0.16em] text-[#B23B2E] uppercase">
                      Open profile
                    </span>
                  </span>
                </a>
              </Reveal>
            </li>

            <li className="list-none sm:col-span-2 lg:col-span-1">
              <Reveal delay={0.18} className="h-full">
                <div className="flex h-full flex-col justify-between gap-6 border border-[#1C1A17]/12 bg-[#FFFDFA] p-6">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[#B23B2E]/10 text-[#B23B2E]">
                    <MapPin aria-hidden className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-[9px] tracking-[0.24em] text-[#6F6A61] uppercase">
                      Showroom
                    </span>
                    <address className="font-tmsons-display mt-2 text-[1.05rem] leading-snug text-[#1C1A17] not-italic">
                      {tmContact.addressLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </address>
                    <span className="mt-3 block text-[11px] leading-relaxed text-[#6F6A61]">
                      Address pending owner confirmation before publication.
                    </span>
                  </span>
                </div>
              </Reveal>
            </li>
          </ul>

          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            <li className="flex items-start gap-3 border border-dashed border-[#1C1A17]/25 px-5 py-4">
              <Clock
                aria-hidden
                className="mt-0.5 h-4 w-4 shrink-0 text-[#B23B2E]"
              />
              <span className="text-[13px] leading-relaxed text-[#6F6A61]">
                <strong className="text-[#1C1A17]">Opening hours:</strong> not
                published — no verified hours have been supplied.
              </span>
            </li>
            <li className="flex items-start gap-3 border border-dashed border-[#1C1A17]/25 px-5 py-4">
              <ShoppingBag
                aria-hidden
                className="mt-0.5 h-4 w-4 shrink-0 text-[#B23B2E]"
              />
              <span className="text-[13px] leading-relaxed text-[#6F6A61]">
                <strong className="text-[#1C1A17]">Product enquiry:</strong>{" "}
                add pieces to your list on any{" "}
                <Link
                  href="/demos/tm-sons/shop"
                  className="text-[#B23B2E] underline underline-offset-4"
                >
                  product page
                </Link>
                , then build a quote request.
              </span>
            </li>
          </ul>

          <div className="mt-12">
            <QuoteBuilder
              heading="Enquiry form"
              description="Leave your details and what you are looking for. Nothing is transmitted from this concept — you get an on-screen preview you can copy, plus the showroom numbers to call."
            />
          </div>

          <div className="mt-12 border-t border-[#1C1A17]/12 pt-7">
            <p className="max-w-3xl text-[11px] leading-relaxed text-[#6F6A61]">
              {tmDemoNotice} Telephone numbers should be dialled and confirmed
              before this concept is shown as anything other than a demo.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
