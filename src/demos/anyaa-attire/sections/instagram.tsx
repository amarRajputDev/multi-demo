import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { AnyaaImage } from "../components/anyaa-image";
import { InstagramGlyph } from "../components/icons";
import { SectionHeading } from "../components/section-heading";
import { anyaaContact, anyaaInstagramTiles } from "../data";

/**
 * Instagram gallery. One tile uses the brand's archived 2023 post image; the
 * rest are honest typographic placeholder tiles - no unrelated photography is
 * presented as the brand's work.
 */
export function InstagramGallery() {
  return (
    <section
      aria-labelledby="anyaa-instagram-title"
      className="border-b border-[#DFE7E2] bg-[#F2F5F1]"
    >
      <div className="mx-auto max-w-[1360px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          index="Instagram"
          eyebrow="From the feed"
          title={<span id="anyaa-instagram-title">@anyaa_attire</span>}
          description="A gallery strip for the brand's feed. Tiles without a confirmed photograph are shown as concept placeholders."
          action={
            <a
              href={anyaaContact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="font-anyaa-body inline-flex items-center gap-2 rounded-full bg-[#2E6F62] px-6 py-3.5 text-[11px] font-medium tracking-[0.2em] text-[#FAF8F3] uppercase transition hover:bg-[#22332F]"
            >
              <InstagramGlyph className="h-4 w-4" />
              Follow the brand
              <ArrowUpRight aria-hidden className="h-4 w-4" />
            </a>
          }
        />

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
          {anyaaInstagramTiles.map((tile, index) => (
            <li key={`${tile.caption}-${index}`}>
              <Reveal delay={Math.min(index, 5) * 0.05}>
                <figure className="group relative overflow-hidden rounded-[2px] border border-[#DFE7E2] bg-white">
                  <AnyaaImage
                    src={tile.src}
                    alt={tile.alt}
                    tint={tile.tint}
                    aspectClassName="aspect-square"
                    loading="lazy"
                    imgClassName="transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                  />
                  <figcaption className="font-anyaa-body absolute inset-x-0 bottom-0 bg-[#22332F]/80 px-2.5 py-2 text-[9px] leading-snug tracking-[0.14em] text-[#D3E5DF] uppercase opacity-0 transition group-hover:opacity-100">
                    {tile.caption}
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>

        <p className="font-anyaa-body mt-8 text-[11px] leading-relaxed text-[#6E7C77]">
          Placeholder tiles stand in for feed posts that could not be verified.
          The archived kurti image belongs to Anyaa Attire&apos;s August 2023
          post and is shown as a historical reference only.
        </p>
      </div>
    </section>
  );
}
