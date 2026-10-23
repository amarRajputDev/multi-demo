import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import {
  khaleeziBrand,
  khaleeziContact,
  khaleeziDemo,
} from "@/demos/khaleezi-designs/data";
import { Ornament } from "@/demos/khaleezi-designs/components/brand";
import { KhaleeziEnquiryForm } from "@/demos/khaleezi-designs/components/enquiry-form";

export const metadata: Metadata = {
  title: "Enquire | Khaleezi Designs concept",
  description:
    "Demonstration enquiry form and public contact channels for the Khaleezi Designs website concept.",
  robots: { index: false, follow: false },
};

export default function KhaleeziContactPage() {
  return (
    <div className="mx-auto max-w-[1320px] px-4 pb-20 pt-10 sm:px-6 lg:pt-14">
      <div className="border-b border-[#E4DCD0] pb-8">
        <p className="khaleezi-eyebrow text-[9px] text-[#2F6D72]">Enquire</p>
        <h1 className="font-khaleezi-display mt-3 max-w-2xl text-[clamp(2.2rem,5vw,3.4rem)] leading-tight text-[#2A2320]">
          Talk to the label
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#7A6E67]">
          Khaleezi Designs takes orders through Instagram and WhatsApp. This
          demonstration form validates in your browser and shows a confirmation
          instead of sending anything.
        </p>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <div>
          <h2 className="font-khaleezi-display text-2xl text-[#2A2320]">
            Public channels
          </h2>
          <ul className="mt-6 space-y-5 text-sm">
            <li>
              <p className="khaleezi-eyebrow text-[9px] text-[#7A6E67]">
                Instagram · primary
              </p>
              <a
                href={khaleeziContact.instagramUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-1 inline-flex items-center gap-1 text-base text-[#2A2320] hover:text-[#2F6D72]"
              >
                {khaleeziBrand.instagramHandle}
                <ArrowUpRight aria-hidden className="h-3.5 w-3.5" />
              </a>
            </li>
            <li>
              <p className="khaleezi-eyebrow text-[9px] text-[#7A6E67]">
                WhatsApp · from a public post
              </p>
              <p className="mt-1 text-base text-[#2A2320]">
                {khaleeziContact.whatsappDisplay}
              </p>
              <p className="mt-1 max-w-sm text-[11px] leading-relaxed text-[#7A6E67]">
                {khaleeziContact.contactNote}
              </p>
            </li>
            <li>
              <p className="khaleezi-eyebrow text-[9px] text-[#7A6E67]">Policies</p>
              <p className="mt-1 max-w-sm text-sm leading-relaxed text-[#7A6E67]">
                Worldwide shipping is offered. {khaleeziDemo.noCod} Confirm current
                return, exchange and delivery terms with the label before ordering.
              </p>
            </li>
          </ul>

          <Ornament className="mt-8 max-w-xs" />

          <p className="mt-6 max-w-sm text-[11px] leading-relaxed text-[#7A6E67]">
            {khaleeziDemo.disclosure}
          </p>
        </div>

        <div className="border border-[#E4DCD0] bg-[#FBF8F2] p-5 sm:p-8">
          <p className="font-khaleezi-display text-xl text-[#2A2320]">
            Send a brief
          </p>
          <p className="mt-1.5 text-xs text-[#7A6E67]">
            Demo form · nothing leaves your browser.
          </p>
          <KhaleeziEnquiryForm className="mt-6" />
        </div>
      </div>
    </div>
  );
}
