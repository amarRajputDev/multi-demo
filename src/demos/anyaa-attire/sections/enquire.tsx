import { EnquiryForm } from "../components/enquiry-form";
import { InstagramGlyph } from "../components/icons";
import { anyaaContact, anyaaDemo } from "../data";

/**
 * Contact & enquiry section. Only the verified Instagram channel is shown -
 * phone, email and address are unverified and stay null, so nothing is
 * rendered for them.
 */
export function EnquireSection() {
  return (
    <section
      id="enquire"
      aria-labelledby="anyaa-enquire-title"
      className="border-b border-[#DFE7E2] bg-[#FAF8F3]"
    >
      <div className="mx-auto max-w-[1360px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="font-anyaa-body text-[10px] font-medium tracking-[0.34em] text-[#2E6F62] uppercase">
              Contact &amp; enquiry
            </p>
            <h2
              id="anyaa-enquire-title"
              className="font-anyaa-display mt-4 text-[clamp(2rem,4.5vw,3.1rem)] leading-[1.05] tracking-tight text-[#22332F]"
            >
              Let&apos;s talk pieces, sizes and styling.
            </h2>
            <p className="font-anyaa-body mt-5 max-w-md text-[15px] leading-relaxed text-[#6E7C77]">
              Every product in this concept is priced on enquiry. Send a note
              about the piece you like and the demonstration form will show how
              an enquiry flow could work for the brand.
            </p>

            <div className="mt-8 rounded-[3px] border border-[#DFE7E2] bg-white p-6">
              <p className="font-anyaa-body text-[10px] tracking-[0.3em] text-[#2E6F62] uppercase">
                Verified channel
              </p>
              <a
                href={anyaaContact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-anyaa-body mt-3 inline-flex items-center gap-2 text-sm text-[#22332F] transition hover:text-[#2E6F62]"
              >
                <InstagramGlyph className="h-4 w-4 text-[#2E6F62]" />
                {anyaaContact.instagramHandle}
              </a>
              <p className="font-anyaa-body mt-4 text-[11px] leading-relaxed text-[#6E7C77]">
                No phone number, email or street address could be verified for
                this brand, so none is displayed. Contact details must be
                confirmed with the business before launch.
              </p>
            </div>

            <p className="font-anyaa-body mt-6 text-[11px] leading-relaxed text-[#6E7C77]">
              {anyaaDemo.disclosure}
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <EnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
