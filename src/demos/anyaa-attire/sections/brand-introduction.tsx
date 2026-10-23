import { BotanicalSprig } from "../components/icons";
import { anyaaBrand } from "../data";

const VALUES = [
  {
    title: "Contemporary silhouettes",
    body: "Clean, current shapes sketched for the modern wardrobe - the direction this concept is built around.",
  },
  {
    title: "Botanical softness",
    body: "Floral language drawn from the brand's own archive, expressed here in quiet line-art and pale teal.",
  },
  {
    title: "Enquire-first shopping",
    body: "No invented prices. Every piece is honestly labelled \u201CEnquire for Price\u201D until the business confirms.",
  },
];

/** Brand introduction - story panel + value pillars. */
export function BrandIntroduction() {
  return (
    <section
      aria-labelledby="anyaa-intro-title"
      className="border-b border-[#DFE7E2] bg-white"
    >
      <div className="mx-auto max-w-[1360px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="font-anyaa-body text-[10px] font-medium tracking-[0.34em] text-[#2E6F62] uppercase">
              The brand
            </p>
            <h2
              id="anyaa-intro-title"
              className="font-anyaa-display mt-4 text-[clamp(2rem,4.5vw,3.2rem)] leading-[1.05] tracking-tight text-[#22332F]"
            >
              A boutique built on soft colour and considered detail.
            </h2>
            <BotanicalSprig className="mt-5 h-8 w-24 text-[#2E6F62]/60" />
            <p className="font-anyaa-body mt-6 text-[15px] leading-relaxed text-[#6E7C77]">
              {anyaaBrand.name} is a women&apos;s fashion label known for
              contemporary kurtis and everyday wear. This page is an unofficial
              website concept by Vizo Technology - a design exploration of how
              the brand could present itself online, with warm ivory space, deep
              sage ink and a botanical thread running throughout.
            </p>
            <p className="font-anyaa-body mt-4 text-[13px] leading-relaxed text-[#6E7C77]/90">
              No official website was found for the brand during research, so
              every product entry, price and policy shown here is demonstration
              content pending confirmation with the business.
            </p>
          </div>

          <ul className="grid gap-6 lg:col-span-6 lg:col-start-7 lg:gap-8">
            {VALUES.map((value, index) => (
              <li
                key={value.title}
                className="rounded-[3px] border border-[#DFE7E2] bg-[#FAF8F3] p-6 transition hover:border-[#2E6F62]/40"
              >
                <p className="font-anyaa-body text-[10px] tracking-[0.3em] text-[#2E6F62] uppercase">
                  0{index + 1}
                </p>
                <p className="font-anyaa-display mt-2 text-[1.4rem] leading-snug text-[#22332F]">
                  {value.title}
                </p>
                <p className="font-anyaa-body mt-2 text-[14px] leading-relaxed text-[#6E7C77]">
                  {value.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
