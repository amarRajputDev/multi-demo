import { ArrowUpRight } from "lucide-react";
import { exotixContact, exotixLinkHub } from "../data";
import { exotixImages } from "../images";
import { ExotixImage } from "../components/exotix-image";
import { SectionHeading } from "../components/section-heading";

/**
 * Instagram / link-hub block: verified official destinations only
 * (linktr.ee/exotix.in was checked live), plus an editorial image strip.
 */
export function LinkHub() {
  const tiles = [
    {
      src: exotixImages.cnyKnotJacketAlt,
      alt: "Cream CNY knot jacket in a Y2K streetwear lookbook frame",
    },
    {
      src: exotixImages.redBullAlt,
      alt: "Red Bull-inspired racing jacket from the Exotix grid line",
    },
    {
      src: exotixImages.tribalDepthHoodieAlt,
      alt: "White tribal shadow hoodie with puff-print detail",
    },
    {
      src: exotixImages.balaclavaHoodieAlt,
      alt: "Black and white balaclava hoodies shown as a duo",
    },
  ];

  return (
    <section
      aria-labelledby="exotix-hub-title"
      className="border-b border-[#232327] bg-[#0A0A0C]"
    >
      <div className="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          index="SECTION 03"
          eyebrow="Follow the label"
          title={<span id="exotix-hub-title">Find Exotix off-site.</span>}
          description="Every link below points at an official Exotix destination - the brand's Instagram, live store, contact page and verified link hub."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {exotixLinkHub.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-3 rounded-sm border border-[#232327] bg-[#101013] p-5 transition hover:border-[#E23B2E]"
            >
              <span className="min-w-0">
                <span className="font-exotix-mono block text-[10px] tracking-[0.24em] text-[#E23B2E] uppercase">
                  {link.label}
                </span>
                <span className="font-exotix-display mt-1.5 block truncate text-[15px] text-[#F2EFEA]">
                  {link.handle}
                </span>
              </span>
              <ArrowUpRight
                aria-hidden
                className="h-5 w-5 shrink-0 text-[#5A5A62] transition group-hover:text-[#E23B2E]"
              />
            </a>
          ))}
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {tiles.map((tile) => (
            <li key={tile.src}>
              <ExotixImage
                src={tile.src}
                alt={tile.alt}
                aspectClassName="aspect-square"
                className="border border-[#1C1C20]"
                imgClassName="transition-transform duration-[700ms] ease-out hover:scale-[1.04]"
              />
            </li>
          ))}
        </ul>

        <p className="mt-8 text-[12px] leading-relaxed text-[#8A8A92]">
          Prefer messaging? The brand publishes{" "}
          <a
            href={`tel:${exotixContact.phoneHref}`}
            className="text-[#F2EFEA] underline decoration-[#E23B2E] underline-offset-4"
          >
            {exotixContact.phoneDisplay}
          </a>{" "}
          and two email addresses (see the contact page) - confirm which inbox
          is current before sending anything sensitive.
        </p>
      </div>
    </section>
  );
}
