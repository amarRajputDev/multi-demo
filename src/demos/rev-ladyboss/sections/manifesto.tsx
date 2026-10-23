import { Reveal } from "@/components/shared/reveal";
import { revDemo } from "../data";
import { DataNote } from "../components/data-note";

/** Brand honesty strip: how the business operates, with verified/unverified notes. */
export function Manifesto() {
  const points = [
    {
      label: "Verified",
      title: "Instagram-first seller",
      body: "The business trades through its public Instagram account, lists a contact channel in the profile, and has no standalone website.",
    },
    {
      label: "Verified",
      title: "Orders by direct message",
      body: "Customers screenshot the piece they want and send it in a DM - the ordering flow this concept mirrors.",
    },
    {
      label: "Unverified",
      title: "Historical shipping note",
      body: revDemo.shippingHistoryNote,
    },
    {
      label: "Unverified",
      title: "Payment & delivery",
      body: `${revDemo.codNote} ${revDemo.deliveryHistoryNote}`,
    },
  ];

  return (
    <section
      aria-labelledby="rev-manifesto-title"
      className="border-b border-[#2A2226] bg-[#1A1618] text-[#F3DCE1]"
    >
      <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.36em] text-[#B4707F] uppercase">
              The label
            </p>
            <h2
              id="rev-manifesto-title"
              className="font-rev-heading mt-3 text-[clamp(2.2rem,5vw,3.6rem)] leading-[0.95] text-[#FAF4F3]"
            >
              Fashion,
              <br />
              without the
              <br />
              fiction.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[#B9AAAF]">
              This concept shows how the @rev_ladyboss catalogue could live on
              a proper storefront. Nothing here invents prices, stock, phone
              numbers or delivery promises - anything unconfirmed is labelled.
            </p>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2">
            {points.map((point, index) => (
              <li key={point.title}>
                <Reveal delay={index * 0.06}>
                  <div className="h-full rounded-[2px] border border-[#2A2226] bg-[#221B1F] p-6">
                    <p
                      className={`inline-block rounded-[2px] px-2.5 py-1 text-[9px] font-semibold tracking-[0.24em] uppercase ${
                        point.label === "Verified"
                          ? "bg-[#B4707F] text-white"
                          : "bg-[#3A3036] text-[#D9A3AE]"
                      }`}
                    >
                      {point.label}
                    </p>
                    <p className="font-rev-heading mt-4 text-lg text-[#FAF4F3]">
                      {point.title}
                    </p>
                    <p className="mt-2 text-[13px] leading-relaxed text-[#B9AAAF]">
                      {point.body}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        <DataNote className="mt-10 flex items-start gap-2.5 rounded-[2px] border border-[#2A2226] bg-[#221B1F] p-5 text-[11.5px] leading-relaxed text-[#B9AAAF]" />
      </div>
    </section>
  );
}
