import { Reveal } from "@/components/shared/reveal";

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
    <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(110%_70%_at_85%_0%,rgba(201,162,39,0.12),transparent_58%)]">
      <div className="mx-auto w-full max-w-[1240px] px-5 pb-14 pt-14 sm:px-8 sm:pb-16 sm:pt-20 lg:px-10">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C9A227]">
            {eyebrow}
          </p>
          <h1 className="font-aurora-display mt-5 max-w-4xl text-[clamp(2.15rem,5vw,3.75rem)] font-normal leading-[1.04] tracking-[-0.015em] text-[#F4EFE6] [text-wrap:balance]">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#F4EFE6]/70 sm:text-lg">
            {lead}
          </p>
          {meta && meta.length > 0 ? (
            <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.18em] text-[#F4EFE6]/60">
              {meta.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 shrink-0 bg-[#C9A227]"
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
