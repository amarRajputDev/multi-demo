import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { revCategories, revHomeHref } from "../data";
import { MonogramTile } from "../components/rev-image";

const TONES = [1, 2, 3] as const;

/** Collection discovery: three numbered editorial collection panels. */
export function Collections() {
  return (
    <section
      aria-labelledby="rev-collections-title"
      className="border-b border-[#E8D9DC] bg-white"
    >
      <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.36em] text-[#B4707F] uppercase">
              Collections
            </p>
            <h2
              id="rev-collections-title"
              className="font-rev-heading mt-3 text-[clamp(2.2rem,5vw,3.6rem)] leading-[0.95] text-[#1A1618]"
            >
              Three edits.
              <br />
              One attitude.
            </h2>
          </div>
          <Link
            href={`${revHomeHref}/collections`}
            className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] text-[#1A1618] uppercase underline decoration-[#B4707F] underline-offset-8 transition hover:text-[#B4707F]"
          >
            View full lookbook
            <ArrowUpRight aria-hidden className="h-4 w-4" />
          </Link>
        </div>

        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {revCategories.map((entry, index) => (
            <li key={entry.key}>
              <Reveal delay={index * 0.08}>
                <Link
                  href={entry.href}
                  className="group block overflow-hidden rounded-[2px] border border-[#E8D9DC] transition hover:border-[#B4707F]"
                >
                  <div className="aspect-[5/4] w-full overflow-hidden">
                    <MonogramTile
                      label={entry.label}
                      tone={TONES[index % TONES.length]}
                      className="transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex items-start justify-between gap-4 bg-[#FAF4F3] p-6">
                    <div>
                      <p className="font-rev-display text-[10px] tracking-[0.2em] text-[#B4707F]">
                        {entry.index}
                      </p>
                      <p className="font-rev-heading mt-1.5 text-xl text-[#1A1618]">
                        {entry.label}
                      </p>
                      <p className="mt-2 max-w-xs text-[13px] leading-relaxed text-[#7C7073]">
                        {entry.blurb}
                      </p>
                      <p className="mt-3 text-[10px] tracking-[0.2em] text-[#9C8D93] uppercase">
                        {entry.productCount} demo{" "}
                        {entry.productCount === 1 ? "piece" : "pieces"}
                      </p>
                    </div>
                    <ArrowUpRight
                      aria-hidden
                      className="mt-1 h-5 w-5 shrink-0 text-[#B4707F] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
