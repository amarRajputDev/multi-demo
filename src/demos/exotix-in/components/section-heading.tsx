import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  tone?: "dark" | "darker";
}

/** Motorsport-flavoured section header: numbered index, lane label, timing rule. */
export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  action,
  tone = "dark",
}: SectionHeadingProps) {
  const deep = tone === "darker";

  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        <p className="font-exotix-mono flex items-center gap-3 text-[10px] font-medium tracking-[0.3em] text-[#E23B2E] uppercase">
          <span>{index}</span>
          <span aria-hidden className="exotix-timing-strip h-2.5 w-16 opacity-80" />
          <span className={cn("tracking-[0.24em]", deep ? "text-[#8A8A92]" : "text-[#B9BDC4]")}>
            {eyebrow}
          </span>
        </p>
        <h2 className="font-exotix-display mt-3 text-[clamp(1.8rem,4vw,2.9rem)] leading-[1.05] tracking-tight text-[#F2EFEA]">
          {title}
        </h2>
        {description ? (
          <p
            className={cn(
              "mt-4 max-w-xl text-[15px] leading-relaxed",
              deep ? "text-[#8A8A92]" : "text-[#B9BDC4]",
            )}
          >
            {description}
          </p>
        ) : null}
      </div>

      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
