import type { Metadata } from "next";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { EnquiryForm } from "@/demos/exotix-in/components/enquiry-form";
import {
  exotixContact,
  exotixDemo,
  exotixLinkHub,
} from "@/demos/exotix-in/data";

export const metadata: Metadata = {
  title: "Contact | Exotix In redesign concept",
  description:
    "Contact details published on exotix.in, both published email addresses, official policy links and a demonstration enquiry form.",
  robots: { index: false, follow: false },
};

export default function ExotixContactPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-4 pb-20 pt-10 sm:px-6 lg:pt-14">
      <div className="border-b border-white/10 pb-8">
        <p className="font-exotix-mono text-[10px] uppercase tracking-[0.24em] text-[#E23B2E]">
          Contact
        </p>
        <h1 className="font-exotix-display mt-3 text-[clamp(2.2rem,5vw,3.6rem)] uppercase leading-[0.95] text-[#F2EFEA]">
          Talk to the studio
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#B9BDC4]">
          Every detail below is as published on the brand&rsquo;s own site or link
          hub. Where the brand publishes two different values, both are shown
          instead of picking one.
        </p>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <ul className="space-y-6 text-sm">
            <li className="flex items-start gap-3">
              <Phone aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-[#E23B2E]" />
              <div>
                <p className="font-exotix-mono text-[9px] uppercase tracking-[0.2em] text-[#8A8A92]">
                  Phone · site header
                </p>
                <a
                  href={`tel:${exotixContact.phoneHref}`}
                  className="mt-1 block text-[#F2EFEA] hover:text-[#E23B2E]"
                >
                  {exotixContact.phoneDisplay}
                </a>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <Mail aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-[#E23B2E]" />
              <div>
                <p className="font-exotix-mono text-[9px] uppercase tracking-[0.2em] text-[#8A8A92]">
                  Email · two published addresses
                </p>
                <a
                  href={`mailto:${exotixContact.emailHeader}`}
                  className="mt-1 block text-[#F2EFEA] hover:text-[#E23B2E]"
                >
                  {exotixContact.emailHeader}{" "}
                  <span className="text-[10px] text-[#8A8A92]">(header)</span>
                </a>
                <a
                  href={`mailto:${exotixContact.emailContactPage}`}
                  className="mt-1 block text-[#F2EFEA] hover:text-[#E23B2E]"
                >
                  {exotixContact.emailContactPage}{" "}
                  <span className="text-[10px] text-[#8A8A92]">(contact page)</span>
                </a>
                <p className="mt-2 max-w-sm text-[11px] leading-relaxed text-[#8A8A92]">
                  {exotixContact.emailDiscrepancyNote}
                </p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <MapPin aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-[#E23B2E]" />
              <div>
                <p className="font-exotix-mono text-[9px] uppercase tracking-[0.2em] text-[#8A8A92]">
                  Studio
                </p>
                <address className="mt-1 not-italic leading-relaxed text-[#F2EFEA]">
                  {exotixContact.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
                <p className="mt-2 text-[11px] text-[#8A8A92]">
                  {exotixContact.hours}
                </p>
              </div>
            </li>
          </ul>

          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="font-exotix-mono text-[9px] uppercase tracking-[0.2em] text-[#8A8A92]">
              Official pages
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {exotixLinkHub.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1 border border-white/15 px-3 py-2 text-[10px] uppercase tracking-[0.14em] text-[#F2EFEA]/80 transition-colors hover:border-[#E23B2E] hover:text-[#E23B2E]"
                >
                  {link.label}
                  <ArrowUpRight aria-hidden className="h-3 w-3" />
                </a>
              ))}
              <a
                href={exotixContact.shippingPolicy}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1 border border-white/15 px-3 py-2 text-[10px] uppercase tracking-[0.14em] text-[#F2EFEA]/80 transition-colors hover:border-[#E23B2E] hover:text-[#E23B2E]"
              >
                Shipping
                <ArrowUpRight aria-hidden className="h-3 w-3" />
              </a>
              <a
                href={exotixContact.refundPolicy}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1 border border-white/15 px-3 py-2 text-[10px] uppercase tracking-[0.14em] text-[#F2EFEA]/80 transition-colors hover:border-[#E23B2E] hover:text-[#E23B2E]"
              >
                Returns
                <ArrowUpRight aria-hidden className="h-3 w-3" />
              </a>
            </div>
            <p className="mt-3 text-[11px] leading-relaxed text-[#8A8A92]">
              {exotixDemo.policyNotice} {exotixContact.verificationNote}
            </p>
          </div>

          <p className="mt-6 max-w-sm text-[11px] leading-relaxed text-[#8A8A92]">
            {exotixDemo.disclosure}
          </p>
        </div>

        <div className="border border-white/10 bg-[#111113] p-5 sm:p-8">
          <p className="font-exotix-display text-xl uppercase text-[#F2EFEA]">
            Send an enquiry
          </p>
          <p className="mt-1.5 text-xs text-[#8A8A92]">
            Demo form · validates in your browser, sends nothing.
          </p>
          <div className="mt-6">
            <EnquiryForm />
          </div>
        </div>
      </div>
    </div>
  );
}
