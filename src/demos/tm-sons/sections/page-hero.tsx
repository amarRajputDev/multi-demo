import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  className?: string;
  /** Right-hand aside rendered beside the heading on large screens. */
  aside?: React.ReactNode;
}

export function PageHero({
  eyebrow,
  title,
  intro,
  className,
  aside,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "border-b border-[#1C1A17]/10 bg-[#F1EBE2] py-12 sm:py-16",
        className,
      )}
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <div className="max-w-3xl">
            <div aria-hidden className="mb-5 h-px w-12 bg-[#B23B2E]" />
            <p className="text-[10px] tracking-[0.32em] text-[#B23B2E] uppercase">
              {eyebrow}
            </p>
            <h1 className="font-tmsons-display mt-4 text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.05] tracking-[-0.015em] text-[#1C1A17]">
              {title}
            </h1>
            {intro ? (
              <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-[#6F6A61] sm:text-base">
                {intro}
              </p>
            ) : null}
          </div>
          {aside ? <div className="lg:justify-self-end">{aside}</div> : null}
        </div>
      </div>
    </section>
  );
}
