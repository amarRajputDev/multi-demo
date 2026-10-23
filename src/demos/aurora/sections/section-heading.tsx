import { Reveal } from "@/components/shared/reveal";

interface SectionHeadingProps {
  index?: string;
  eyebrow: string;
  title: string;
  lead?: string;
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  lead,
}: SectionHeadingProps) {
  return (
    <Reveal className="max-w-3xl">
      <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C9A227]">
        {index ? (
          <span aria-hidden className="text-[#8E9CB5]">
            {index}
          </span>
        ) : null}
        <span>{eyebrow}</span>
        <span aria-hidden className="h-px flex-1 bg-[#C9A227]/30" />
      </p>
      <h2 className="font-aurora-display mt-5 text-[clamp(1.75rem,3.4vw,2.75rem)] font-normal leading-[1.08] tracking-[-0.01em] text-[#F4EFE6] [text-wrap:balance]">
        {title}
      </h2>
      {lead ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#F4EFE6]/70 sm:text-lg">
          {lead}
        </p>
      ) : null}
    </Reveal>
  );
}
