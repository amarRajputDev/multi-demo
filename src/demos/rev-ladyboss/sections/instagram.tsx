import Link from "next/link";
import { InstagramGlyph } from "../components/icons";
import { Reveal } from "@/components/shared/reveal";
import { revContact, revInstagramTiles } from "../data";
import { MonogramTile } from "../components/rev-image";

const TONES = [1, 2, 3, 4] as const;

/**
 * Instagram strip. No post media could be verified in the research window,
 * so the tiles are typographic placeholders that link to the real account -
 * never another brand's photography.
 */
export function InstagramStrip() {
  return (
    <section
      aria-labelledby="rev-instagram-title"
      className="border-b border-[#E8D9DC] bg-[#F3DCE1]/40"
    >
      <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.36em] text-[#B4707F] uppercase">
              From the feed
            </p>
            <h2
              id="rev-instagram-title"
              className="font-rev-heading mt-3 text-[clamp(2rem,4.5vw,3.2rem)] leading-[0.95] text-[#1A1618]"
            >
              {revContact.instagramHandle}
            </h2>
          </div>
          <a
            href={revContact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-[2px] bg-[#1A1618] px-6 py-3.5 text-[11px] font-semibold tracking-[0.2em] text-[#FAF4F3] uppercase transition hover:bg-[#B4707F]"
          >
            <InstagramGlyph aria-hidden className="h-4 w-4" />
            Open Instagram
          </a>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {revInstagramTiles.map((tile, index) => (
            <li key={tile.label}>
              <Reveal delay={Math.min(index, 5) * 0.05}>
                <a
                  href={revContact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-[2px]"
                >
                  <div className="aspect-square w-full">
                    <MonogramTile
                      label={tile.label}
                      tone={TONES[index % TONES.length]}
                      compact
                      className="transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                    />
                  </div>
                  <p className="mt-2 text-[10px] tracking-[0.16em] text-[#7C7073] uppercase">
                    {tile.caption}
                  </p>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-[11px] leading-relaxed text-[#7C7073]">
          Placeholder tiles - no post media from {revContact.instagramHandle}{" "}
          was accessible for this concept. Follow the account for the real
          catalogue.{" "}
          <Link
            href="/demos/rev-ladyboss/contact"
            className="text-[#B4707F] underline underline-offset-4"
          >
            Contact &amp; enquiry
          </Link>
        </p>
      </div>
    </section>
  );
}
