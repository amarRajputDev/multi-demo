import { ArrowUpRight } from "lucide-react";
import { InstagramGlyph } from "../components/icons";
import { Reveal } from "@/components/shared/reveal";
import { TmProductImage } from "../components/product-image";
import { tmContact, tmProducts, tmSortedProducts } from "../data";
import { SectionHeading } from "./section-heading";

/**
 * Instagram band.
 *
 * This is NOT a live Instagram integration — the grid is built from the
 * reference photographs recovered for this concept. The only real connection
 * is a plain link to the brand's public profile.
 */
export function InstagramGallery() {
  const images = tmSortedProducts(tmProducts).slice(0, 6);

  return (
    <section
      id="instagram"
      className="scroll-mt-24 border-b border-[#1C1A17]/10 bg-[#FAF7F2] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="06 — From the feed"
            title={
              <>
                See what lands{" "}
                <span className="italic text-[#B23B2E]">first</span>
              </>
            }
            intro="New arrivals are posted on the TM SONS Instagram before they reach the site. This grid is a static selection from the concept assets — not a live feed."
          />
          <a
            href={tmContact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center gap-2.5 border border-[#1C1A17]/25 px-6 py-4 text-[11px] tracking-[0.2em] text-[#1C1A17] uppercase transition-colors hover:border-[#B23B2E] hover:text-[#B23B2E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B23B2E]"
          >
            <InstagramGlyph aria-hidden className="h-4 w-4" />
            {tmContact.instagramHandle}
            <ArrowUpRight
              aria-hidden
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
          {images.map((product, index) => (
            <li key={product.slug}>
              <Reveal delay={(index % 6) * 0.05}>
                <a
                  href={tmContact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block overflow-hidden border border-[#1C1A17]/12 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B23B2E]"
                  aria-label={`${product.title} on the TM SONS Instagram profile`}
                >
                  <TmProductImage
                    imageId={product.imageId}
                    alt={product.alt}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    aspectClassName="aspect-[4/5]"
                    className="transition-transform duration-[900ms] ease-out group-hover:scale-[1.07]"
                  />
                  <span className="absolute inset-0 flex items-end bg-gradient-to-t from-[#1C1A17]/85 via-transparent to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                    <span className="text-[9px] leading-snug tracking-[0.16em] text-[#FAF7F2] uppercase">
                      {product.title}
                    </span>
                  </span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-[11px] leading-relaxed text-[#6F6A61]">
          Images are locally saved references of publicly indexed TM SONS posts
          and require owner approval before commercial use. View the live
          profile at{" "}
          <a
            href={tmContact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#B23B2E] underline underline-offset-4"
          >
            instagram.com/tmsonsludhiana
          </a>
          .
        </p>
      </div>
    </section>
  );
}
