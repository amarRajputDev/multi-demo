
import { Reveal } from "@/components/shared/reveal";
import { InstagramGlyph } from "../components/icons";
import { SectionHeading } from "../components/section-heading";
import { SyImage } from "../components/sy-image";
import { syContact, syInstagramTiles } from "../data";

/**
 * Static gallery linking to the brand's real Instagram profile - it is a
 * curated selection of catalogue imagery, not a live API feed.
 */
export function InstagramGallery() {
  return (
    <section
      id="instagram"
      aria-labelledby="sy-instagram-title"
      className="bg-[#FBF6F2]"
    >
      <div className="mx-auto max-w-[1360px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          index="06"
          eyebrow="Instagram"
          title={<span id="sy-instagram-title">On the grid.</span>}
          description="A curated static gallery from the catalogue. Follow the brand for daily styling."
          action={
            <a
              href={syContact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#DCCFC9] bg-white px-5 py-3 text-[11px] font-medium tracking-[0.18em] text-[#4B2C3B] uppercase transition hover:border-[#A63D57] hover:text-[#A63D57]"
            >
              <InstagramGlyph className="h-4 w-4" />
              {syContact.instagramHandle}
            </a>
          }
        />

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:mt-14 lg:grid-cols-6">
          {syInstagramTiles.map((tile, index) => (
            <li key={`${tile.src}-${index}`}>
              <Reveal delay={Math.min(index, 4) * 0.05}>
                <a
                  href={syContact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${syContact.instagramHandle} on Instagram`}
                  className="group relative block overflow-hidden rounded-[2px] bg-[#F2E8E3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A63D57]"
                >
                  <SyImage
                    src={tile.src}
                    alt={tile.alt}
                    aspectClassName="aspect-square"
                    imgClassName="transition-transform duration-[900ms] ease-out group-hover:scale-[1.07]"
                  />
                  <span
                    aria-hidden
                    className="absolute inset-0 flex items-center justify-center bg-[#2C1F26]/45 opacity-0 transition duration-300 group-hover:opacity-100"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-white/95 text-[#A63D57]">
                      <InstagramGlyph className="h-5 w-5" />
                    </span>
                  </span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-[11px] leading-relaxed text-[#8B7B81]">
          Curated catalogue imagery presented as a static gallery - this demo is
          not connected to a live Instagram feed.
        </p>
      </div>
    </section>
  );
}
