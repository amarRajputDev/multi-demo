import { Reveal } from "@/components/shared/reveal";
import { GridBackdrop } from "./grid-backdrop";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  lead: string;
  meta?: string[];
  children?: React.ReactNode;
}

export function PageHero({
  eyebrow,
  title,
  lead,
  meta,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(110%_80%_at_80%_-10%,rgba(34,211,238,0.09),transparent_60%),radial-gradient(70%_60%_at_10%_110%,rgba(139,92,246,0.07),transparent_60%)]">
      <GridBackdrop />
      <div className="relative mx-auto w-full max-w-[1240px] px-5 pb-14 pt-14 sm:px-8 sm:pb-16 sm:pt-20 lg:px-10">
        <Reveal>
          <p className="font-quantum-mono text-[11px] font-medium uppercase tracking-[0.28em] text-[#22D3EE]">
            {eyebrow}
          </p>
          <h1 className="font-quantum-display mt-5 max-w-4xl text-[clamp(2.05rem,4.6vw,3.5rem)] font-semibold leading-[1.06] tracking-[-0.02em] text-[#EAF2FF] [text-wrap:balance]">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#7C93B8] sm:text-lg">
            {lead}
          </p>
          {meta && meta.length > 0 ? (
            <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6">
              {meta.map((item) => (
                <li
                  key={item}
                  className="font-quantum-mono flex items-center gap-2.5 text-[11px] uppercase tracking-[0.16em] text-[#7C93B8]"
                >
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 shrink-0 rotate-45 bg-[#22D3EE]"
                  />
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
