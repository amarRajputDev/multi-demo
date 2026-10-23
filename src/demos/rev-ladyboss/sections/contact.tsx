import { InstagramGlyph } from "../components/icons";
import { Reveal } from "@/components/shared/reveal";
import { EnquiryForm } from "../components/enquiry-form";
import { revContact, revDemo } from "../data";

/** Homepage contact + product enquiry band. */
export function ContactBand() {
  return (
    <section
      aria-labelledby="rev-contact-title"
      className="border-b border-[#E8D9DC] bg-white"
    >
      <div className="mx-auto grid max-w-[1400px] gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-24">
        <div>
          <p className="text-[10px] font-semibold tracking-[0.36em] text-[#B4707F] uppercase">
            Contact
          </p>
          <h2
            id="rev-contact-title"
            className="font-rev-heading mt-3 text-[clamp(2.2rem,5vw,3.4rem)] leading-[0.95] text-[#1A1618]"
          >
            Ask about
            <br />
            any piece.
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[#5F5458]">
            {revContact.verificationNote}
          </p>

          <div className="mt-8 grid gap-4">
            <a
              href={revContact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2.5 rounded-[2px] border border-[#1A1618] px-6 py-3.5 text-[11px] font-semibold tracking-[0.2em] text-[#1A1618] uppercase transition hover:border-[#B4707F] hover:text-[#B4707F]"
            >
              <InstagramGlyph aria-hidden className="h-4 w-4" />
              DM {revContact.instagramHandle}
            </a>
            <p className="text-[12px] leading-relaxed text-[#7C7073]">
              {revDemo.codNote}
            </p>
            <p className="text-[12px] leading-relaxed text-[#7C7073]">
              {revDemo.shippingHistoryNote}
            </p>
          </div>
        </div>

        <Reveal>
          <div className="rounded-[2px] border border-[#E8D9DC] bg-[#FAF4F3] p-6 sm:p-8">
            <EnquiryForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
