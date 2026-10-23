import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { exotixCategories, exotixHomeHref } from "../data";
import { exotixImages } from "../images";
import { exotixProducts, formatExotixPrice } from "../products";
import { ExotixImage } from "../components/exotix-image";
import { SectionHeading } from "../components/section-heading";

const DROPS = [
  {
    id: "01",
    title: "CNY Archive",
    blurb:
      "Tang-style knot jackets from the Chinese New Year festive line - frog closures, oversized drape, eight colourways on the lead listing.",
    slugs: [
      "exotix-chinese-new-year-jacket-cny-festive-edition",
      "black-cny-jacket-tang-style-oversized-exotix",
      "olive-green-cny-jacket-tang-style-oversized-exotix",
    ],
    href: `${exotixHomeHref}/collections/jackets`,
    imageKey: "cnyGroup" as const,
    alt: "Maroon, grey and green CNY jackets shown together",
  },
  {
    id: "02",
    title: "Grid Racing",
    blurb:
      "Motorsport-inspired shells and vintage racing livery. Team references are stylistic only - these are Exotix pieces, not official merchandise.",
    slugs: [
      "black-ferrari-jacket-f1-inspired-streetwear-by-exotix",
      "premium-embroidered-red-bull-racing-jacket-exotix-streetwear",
      "marlboro-jacket-vintage-f1-racing-leather-exotix",
    ],
    href: `${exotixHomeHref}/collections/leather-jackets`,
    imageKey: "ferrariCloseup" as const,
    alt: "Embroidered racing jacket panel close-up",
  },
] as const;

/** Numbered drop bands - the motorsport structure of the homepage. */
export function DropBands() {
  return (
    <section
      aria-labelledby="exotix-drops-title"
      className="border-b border-[#232327] bg-[#0A0A0C]"
    >
      <div className="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          index="SECTION 01"
          eyebrow="Numbered drops"
          title={<span id="exotix-drops-title">Two bands on the grid.</span>}
          description="The catalogue is staged as drops, the way a race weekend runs in sessions - festive tailoring first, then the racing line."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-10">
          {DROPS.map((drop) => {
            const pieces = drop.slugs
              .map((slug) => exotixProducts.find((product) => product.slug === slug))
              .filter((product): product is NonNullable<typeof product> =>
                Boolean(product),
              );
            const prices = pieces
              .map((piece) => piece.price)
              .filter((price): price is number => price !== null);

            return (
              <article
                key={drop.id}
                className="group flex flex-col overflow-hidden rounded-sm border border-[#232327] bg-[#101013] transition-colors hover:border-[#E23B2E]/50"
              >
                <div className="relative">
                  <ExotixImage
                    src={exotixImages[drop.imageKey]}
                    alt={drop.alt}
                    aspectClassName="aspect-[16/9]"
                    className="border-b border-[#232327]"
                    imgClassName="transition-transform duration-[700ms] ease-out group-hover:scale-[1.04]"
                  />
                  <span className="font-exotix-display absolute left-4 top-3 text-[clamp(2.2rem,5vw,3.2rem)] leading-none text-[#F2EFEA] opacity-90 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                    {drop.id}
                  </span>
                  <span className="font-exotix-mono absolute right-3 top-3 bg-[#E23B2E] px-2 py-1 text-[9px] tracking-[0.24em] text-[#F2EFEA] uppercase">
                    Drop {drop.id}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="font-exotix-display text-[1.6rem] leading-tight tracking-tight text-[#F2EFEA]">
                    {drop.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#8A8A92]">
                    {drop.blurb}
                  </p>

                  <ul className="mt-4 grid gap-2 border-t border-[#232327] pt-4">
                    {pieces.map((piece) => (
                      <li key={piece.slug}>
                        <Link
                          href={`${exotixHomeHref}/products/${piece.slug}`}
                          className="flex items-center justify-between gap-3 py-1.5 text-sm text-[#B9BDC4] transition hover:text-[#E23B2E]"
                        >
                          <span className="min-w-0 truncate">
                            <span className="font-exotix-mono mr-2 text-[10px] tracking-[0.16em] text-[#5A5A62]">
                              {piece.code}
                            </span>
                            {piece.name}
                          </span>
                          <span className="font-exotix-display shrink-0 text-[#E23B2E]">
                            {piece.price === null
                              ? "Enquire"
                              : formatExotixPrice(piece.price)}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex items-center justify-between gap-3 border-t border-[#232327] pt-4">
                    <span className="font-exotix-mono text-[10px] tracking-[0.18em] text-[#5A5A62] uppercase">
                      {prices.length
                        ? `From ₹${Math.min(...prices)} · stock unconfirmed`
                        : "Enquire for pricing"}
                    </span>
                    <Link
                      href={drop.href}
                      className="font-exotix-mono inline-flex items-center gap-1 text-[11px] tracking-[0.16em] text-[#F2EFEA] uppercase transition hover:gap-2 hover:text-[#E23B2E]"
                    >
                      Open lane
                      <ArrowUpRight aria-hidden className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Lane index - all seven categories as a timing strip */}
        <div className="mt-12 border-t border-[#232327] pt-8">
          <p className="font-exotix-mono text-[10px] tracking-[0.3em] text-[#5A5A62] uppercase">
            Full lane index
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7">
            {exotixCategories.map((category) => (
              <li key={category.key}>
                <Link
                  href={category.href}
                  className="block rounded-sm border border-[#232327] bg-[#101013] p-4 transition hover:border-[#E23B2E]"
                >
                  <span className="font-exotix-mono block text-[9px] tracking-[0.22em] text-[#E23B2E] uppercase">
                    {category.lane}
                  </span>
                  <span className="font-exotix-display mt-1.5 block text-[15px] leading-snug text-[#F2EFEA]">
                    {category.label}
                  </span>
                  <span className="mt-1 block text-[11px] leading-snug text-[#5A5A62]">
                    {category.blurb}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
