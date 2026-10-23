"use client";

import { EnquiryForm } from "../components/enquiry-form";
import {
  InstagramGlyph,
  OrnamentDivider,
  PetalMotif,
} from "../components/icons";
import { sakshiBrand, sakshiContact, sakshiDemo } from "../data";
import { SAKSHI_DATA_NOTE } from "../products";
import { useShop } from "../components/shop-provider";

/**
 * Contact page: Instagram is the only published channel. No phone, email or
 * address is rendered because none is published. The enquiry form is
 * demo-only (client-side validation + on-screen confirmation, no backend).
 */
export default function ContactPage() {
  return (
    <>
      <header className="border-b border-[#E9DDD4] bg-[linear-gradient(160deg,#F8EFE7_0%,#EFD9D5_100%)]">
        <div className="mx-auto max-w-[1320px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <p className="sakshi-eyebrow text-[10px] font-semibold text-[#8E3B47]">
            Enquire
          </p>
          <h1 className="font-sakshi-display mt-3 text-[clamp(2.2rem,5vw,3.4rem)] leading-tight text-[#3B1F24]">
            Contact &amp; ordering
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#7A6461] sm:text-base">
            {sakshiBrand.name} takes orders by Instagram DM. Use the form to
            prepare your enquiry, then send it straight to the seller&rsquo;s inbox.
          </p>
          <OrnamentDivider className="mt-6" />
        </div>
      </header>

      <div className="mx-auto grid max-w-[1320px] gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:gap-20 lg:px-8 lg:py-20">
        <section aria-labelledby="kbs-contact-form-heading">
          <h2
            id="kbs-contact-form-heading"
            className="font-sakshi-display text-[clamp(1.8rem,3.5vw,2.4rem)] text-[#3B1F24]"
          >
            Prepare an enquiry
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-[#7A6461]">
            Ask about pieces from your enquiry list, sizes, fabrics or
            availability. This demo form validates in your browser only — on
            submit it prepares a prefilled Instagram DM for you to send.
          </p>
          <div className="mt-8">
            <EnquiryForm defaultMessage="Hi! I'd like to enquire about your kurtis. Please share current pieces, sizes and prices." />
          </div>
        </section>

        <aside className="grid content-start gap-6">
          <div className="sakshi-panel rounded-[1.75rem] border p-6 sm:p-8">
            <h2 className="font-sakshi-display text-2xl text-[#3B1F24]">
              Order on Instagram
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#7A6461]">
              {sakshiContact.orderingNote}
            </p>
            <a
              href={sakshiContact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#8E3B47] px-7 py-3.5 text-[12px] font-semibold tracking-[0.18em] text-[#FBF6EF] uppercase transition hover:bg-[#7A3140]"
            >
              <InstagramGlyph className="h-4 w-4" />
              {sakshiContact.instagramHandle}
            </a>
            <EnquiryListSummary />
          </div>

          <div className="rounded-[1.75rem] border border-dashed border-[#D8C3BB] bg-white/60 p-6">
            <h2 className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] text-[#3B1F24] uppercase">
              <PetalMotif className="h-3.5 w-3.5 text-[#8E3B47]" />
              What we can &amp; can&rsquo;t confirm
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#7A6461]">
              <li>
                <span className="font-semibold text-[#3B1F24]">Verified:</span>{" "}
                the brand&rsquo;s Instagram handle{" "}
                {sakshiContact.instagramHandle} and its kurti / women&rsquo;s
                fashion focus.
              </li>
              <li>
                <span className="font-semibold text-[#3B1F24]">
                  Unverified third-party:
                </span>{" "}
                DM-based ordering, all-India delivery and a seven-day
                return/exchange policy, per a listing site. Confirm directly
                with the seller.
              </li>
              <li>
                <span className="font-semibold text-[#3B1F24]">Not published:</span>{" "}
                no official website, phone number, email or physical address —
                so none is shown on this concept.
              </li>
            </ul>
            <p className="mt-5 text-[11px] leading-relaxed text-[#7A6461]">
              {SAKSHI_DATA_NOTE}
            </p>
          </div>

          <p className="px-2 text-[11px] leading-relaxed text-[#7A6461]">
            {sakshiDemo.disclosure}
          </p>
        </aside>
      </div>
    </>
  );
}

/** Small client-side summary of the current enquiry list. */
function EnquiryListSummary() {
  const { lines, lineCount } = useShop();

  if (lines.length === 0) {
    return (
      <p className="mt-6 text-sm leading-relaxed text-[#7A6461]">
        Your enquiry list is empty — add pieces from any product card and they
        will be easy to mention in your DM.
      </p>
    );
  }

  return (
    <div className="mt-6 border-t border-[#E9DDD4] pt-5">
      <p className="text-[11px] font-semibold tracking-[0.18em] text-[#3B1F24] uppercase">
        Your enquiry list ({lineCount})
      </p>
      <ul className="mt-3 grid gap-2">
        {lines.map((line) => (
          <li
            key={line.key}
            className="flex items-baseline justify-between gap-3 text-sm text-[#7A6461]"
          >
            <span className="min-w-0 truncate text-[#3B1F24]">
              {line.name}
            </span>
            <span className="shrink-0 text-[11px] tracking-[0.1em] uppercase">
              {line.size} × {line.qty} · Enquire
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
