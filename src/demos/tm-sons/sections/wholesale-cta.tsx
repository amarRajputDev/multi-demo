import Link from "next/link";
import { ArrowRight, Boxes, Handshake, Store } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { tmContact } from "../data";

const audiences = [
  {
    icon: Store,
    title: "Boutiques",
    text: "Add a fresh seasonal line without committing to a fixed price list first.",
  },
  {
    icon: Boxes,
    title: "Multi-store retailers",
    text: "Request availability across several collections in a single enquiry.",
  },
  {
    icon: Handshake,
    title: "Resellers & buyers",
    text: "Share your city and volume interest — the showroom replies directly.",
  },
];

export function WholesaleCta() {
  return (
    <section
      id="wholesale"
      className="relative scroll-mt-24 overflow-hidden border-b border-[#1C1A17]/10 bg-[#1C1A17] py-16 text-[#FAF7F2] sm:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-32 h-[26rem] w-[26rem] rounded-full bg-[#B23B2E]/25 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-start lg:gap-16">
          <Reveal>
            <div className="mb-5 h-px w-12 bg-[#B23B2E]" />
            <p className="text-[10px] tracking-[0.32em] text-[#E9B7AE] uppercase">
              03 — Wholesale
            </p>
            <h2 className="font-tmsons-display mt-4 text-[clamp(1.9rem,4vw,3.2rem)] leading-[1.05] tracking-[-0.01em]">
              Stock Your Next Collection with{" "}
              <span className="italic text-[#E9B7AE]">TM SONS.</span>
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-[#FAF7F2]/70 sm:text-base">
              Explore our clothing collections and contact our team for
              wholesale availability, pricing and bulk enquiries.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/demos/tm-sons/wholesale"
                className="group inline-flex min-h-13 items-center gap-2.5 bg-[#B23B2E] px-8 py-4 text-[11px] tracking-[0.2em] text-white uppercase transition-colors hover:bg-[#C9483B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FAF7F2]"
              >
                Enquire About Wholesale
                <ArrowRight
                  aria-hidden
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/demos/tm-sons/shop"
                className="inline-flex min-h-13 items-center gap-2.5 border border-white/30 px-8 py-4 text-[11px] tracking-[0.2em] text-[#FAF7F2] uppercase transition-colors hover:border-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FAF7F2]"
              >
                View Collections
              </Link>
            </div>

            <p className="mt-8 text-[11px] leading-relaxed text-[#FAF7F2]/50">
              No minimum order quantity, trade price list or delivery promise is
              published in this concept — those terms belong to TM SONS and are
              shared directly after verification.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="space-y-3">
              {audiences.map(({ icon: Icon, title, text }) => (
                <li
                  key={title}
                  className="flex gap-4 border border-white/15 bg-white/[0.04] p-5 transition-colors duration-300 hover:border-white/30"
                >
                  <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#E9B7AE]/40 text-[#E9B7AE]">
                    <Icon aria-hidden className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block font-tmsons-display text-lg leading-tight">
                      {title}
                    </span>
                    <span className="mt-1.5 block text-sm leading-relaxed text-[#FAF7F2]/65">
                      {text}
                    </span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/15 pt-6">
              <span className="text-[10px] tracking-[0.24em] text-[#FAF7F2]/50 uppercase">
                Call the showroom
              </span>
              {tmContact.phones.map((phone) => (
                <a
                  key={phone.telHref}
                  href={phone.telHref}
                  className="inline-flex min-h-10 items-center border border-white/25 px-4 text-[12px] tracking-[0.1em] text-[#FAF7F2] transition-colors hover:border-[#E9B7AE] hover:text-[#E9B7AE] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E9B7AE]"
                >
                  {phone.display}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
