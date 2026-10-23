import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  /** Optional right-hand action (link/button) aligned with the title. */
  action?: ReactNode;
  tone?: "light" | "dark";
}

/** Editorial section header used across the homepage. */
export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  action,
  tone = "light",
}: SectionHeadingProps) {
  const dark = tone === "dark";

  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        <p
          className={cn(
            "text-[10px] font-medium tracking-[0.34em] uppercase",
            dark ? "text-[#E7B9C2]" : "text-[#A63D57]",
          )}
        >
          {index} &mdash; {eyebrow}
        </p>
        <h2
          className={cn(
            "font-sy-display mt-3 text-[clamp(1.85rem,4vw,3rem)] leading-[1.04] tracking-tight",
            dark ? "text-[#FBF6F2]" : "text-[#2C1F26]",
          )}
        >
          {title}
        </h2>
        {description ? (
          <p
            className={cn(
              "mt-4 max-w-xl text-[15px] leading-relaxed",
              dark ? "text-[#D8C7CC]" : "text-[#6B5A61]",
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
