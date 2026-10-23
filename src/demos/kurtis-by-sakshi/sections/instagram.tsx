import { InstagramGlyph, PetalMotif } from "../components/icons";
import { sakshiContact, sakshiDemo } from "../data";

/**
 * Instagram contact block + how ordering works. Only the published Instagram
 * channel is linked. Shipping/return lines are shown exclusively as an
 * explicitly unverified third-party note.
 */
export function InstagramSection() {
  return (
    <section
      aria-labelledby="kbs-instagram-heading"
      className="relative overflow-hidden bg-[#3B1F24] text-[#F3E4DF]"
    >
      <div className="sakshi-weave absolute inset-0 opacity-40" aria-hidden />
      <div className="relative mx-auto grid max-w-[1320px] gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
        <div>
          <p className="sakshi-eyebrow inline-flex items-center gap-2 text-[10px] font-semibold text-[#EFD9D5]">
            <PetalMotif className="h-3 w-3" />
            Order on Instagram
          </p>
          <h2
            id="kbs-instagram-heading"
            className="font-sakshi-display mt-4 text-[clamp(2rem,4.5vw,3rem)] leading-tight text-[#FBF6EF]"
          >
            Say hello, <span className="italic text-[#EFD9D5]">enquire</span>,
            order
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#D9C6C0] sm:text-base">
            {sakshiContact.orderingNote} Share the pieces from your enquiry
            list, ask about sizes and fabrics, and confirm current pricing
            directly with the seller.
          </p>

          <a
            href={sakshiContact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#EFD9D5] px-8 py-4 text-[12px] font-semibold tracking-[0.18em] text-[#3B1F24] uppercase transition hover:bg-[#FBF6EF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EFD9D5]"
          >
            <InstagramGlyph className="h-4.5 w-4.5" />
            {sakshiContact.instagramHandle}
          </a>

          <p className="mt-8 text-[11px] leading-relaxed text-[#B9A29C]">
            {sakshiContact.verificationNote}
          </p>
        </div>

        <div className="rounded-[2rem] border border-[#EFD9D5]/25 bg-[#FBF6EF]/5 p-6 sm:p-8">
          <h3 className="font-sakshi-display text-2xl text-[#FBF6EF]">
            How ordering works
          </h3>
          <div
            aria-hidden
            className="mt-4 h-px w-24 bg-gradient-to-r from-[#EFD9D5]/70 to-transparent"
          />
          <ol className="mt-6 grid gap-6">
            {[
              {
                step: "01",
                title: "Browse & shortlist",
                body: "Filter the concept catalogue, open a piece and add sizes to your enquiry list — it works like a shopping bag, without checkout.",
              },
              {
                step: "02",
                title: "Enquire on Instagram",
                body: "Send your list by DM to @kurtis_by_sakshi. Ask for current availability, fabric details, sizes and price.",
              },
              {
                step: "03",
                title: "Confirm with the seller",
                body: "Pricing, delivery and any return or exchange terms are agreed directly with the seller — nothing on this concept page is a guarantee.",
              },
            ].map((item) => (
              <li key={item.step} className="flex gap-4">
                <span
                  aria-hidden
                  className="font-sakshi-display mt-0.5 text-2xl text-[#EFD9D5]"
                >
                  {item.step}
                </span>
                <div>
                  <h4 className="text-[12px] font-semibold tracking-[0.18em] text-[#FBF6EF] uppercase">
                    {item.title}
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#D9C6C0]">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-8 rounded-xl border border-dashed border-[#EFD9D5]/35 px-4 py-3 text-[11px] leading-relaxed text-[#D9C6C0]">
            <span className="font-semibold tracking-[0.14em] text-[#EFD9D5] uppercase">
              Unverified third-party note:
            </span>{" "}
            a listing site reports all-India delivery and a seven-day
            return/exchange policy. {sakshiDemo.footerNote} — confirm all terms
            before ordering.
          </p>
        </div>
      </div>
    </section>
  );
}
