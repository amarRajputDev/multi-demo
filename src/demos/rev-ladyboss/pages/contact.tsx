import { InstagramGlyph } from "../components/icons";
import { DataNote } from "../components/data-note";
import { EnquiryForm } from "../components/enquiry-form";
import { revContact, revDemo } from "../data";

/** Standalone contact page: enquiry form + verified contact channel only. */
export default function RevContactPage() {
  return (
    <>
      <div className="border-b border-[#E8D9DC] bg-[#F3DCE1]/50">
        <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <p className="text-[10px] font-semibold tracking-[0.36em] text-[#B4707F] uppercase">
            Contact &amp; enquiry
          </p>
          <h1 className="font-rev-heading mt-3 max-w-2xl text-[clamp(2.4rem,6vw,4.5rem)] leading-[0.92] text-[#1A1618]">
            Talk to Lady Boss
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-[#5F5458]">
            {revContact.verificationNote}
          </p>

          <a
            href={revContact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2.5 rounded-[2px] bg-[#1A1618] px-7 py-4 text-[11px] font-semibold tracking-[0.22em] text-[#FAF4F3] uppercase transition hover:bg-[#B4707F]"
          >
            <InstagramGlyph aria-hidden className="h-4 w-4" />
            Open {revContact.instagramHandle}
          </a>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1400px] gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:py-20">
        <div className="rounded-[2px] border border-[#E8D9DC] bg-[#FAF4F3] p-6 sm:p-8">
          <p className="font-rev-heading text-xl text-[#1A1618]">
            Product enquiry
          </p>
          <p className="mt-2 text-[13px] leading-relaxed text-[#7C7073]">
            Prepare your question here, then paste it into an Instagram DM -
            this concept never sends or stores your details.
          </p>
          <div className="mt-6">
            <EnquiryForm />
          </div>
        </div>

        <div className="grid content-start gap-6">
          <div className="rounded-[2px] border border-[#E8D9DC] p-6">
            <p className="text-[10px] font-semibold tracking-[0.28em] text-[#B4707F] uppercase">
              Ordering
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-[#5F5458]">
              {revBrandOrderLine()}
            </p>
          </div>

          <div className="rounded-[2px] border border-[#E8D9DC] p-6">
            <p className="text-[10px] font-semibold tracking-[0.28em] text-[#B4707F] uppercase">
              Policies (unverified)
            </p>
            <ul className="mt-3 grid gap-3 text-[13px] leading-relaxed text-[#5F5458]">
              <li>{revDemo.codNote}</li>
              <li>{revDemo.shippingHistoryNote}</li>
              <li>{revDemo.deliveryHistoryNote}</li>
            </ul>
          </div>

          <DataNote />
        </div>
      </div>
    </>
  );
}

function revBrandOrderLine() {
  return (
    <>
      Orders are placed by direct message on Instagram. Screenshot the piece
      you want from {revContact.instagramHandle} and send it to the account -
      sizing, pricing and availability are confirmed by the seller.
    </>
  );
}
