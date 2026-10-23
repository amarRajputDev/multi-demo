import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { BotanicalSprig } from "./icons";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}

/** Editorial section header with a delicate botanical accent. */
export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  action,
  tone = "light",
  className,
}: SectionHeadingProps) {
  const dark = tone === "dark";

  return (
    <div
      className={cn(
        "flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between",
        className,
      )}
    >
      <div className="max-w-2xl">
        <p
          className={cn(
            "font-anyaa-body text-[10px] font-medium tracking-[0.34em] uppercase",
            dark ? "text-[#D3E5DF]" : "text-[#2E6F62]",
          )}
        >
          {index} &mdash; {eyebrow}
        </p>
        <h2
          className={cn(
            "font-anyaa-display mt-3 text-[clamp(1.85rem,4vw,3rem)] leading-[1.06] tracking-tight",
            dark ? "text-[#FAF8F3]" : "text-[#22332F]",
          )}
        >
          {title}
        </h2>
        {description ? (
          <p
            className={cn(
              "font-anyaa-body mt-4 max-w-xl text-[15px] leading-relaxed",
              dark ? "text-[#D3E5DF]" : "text-[#6E7C77]",
            )}
          >
            {description}
          </p>
        ) : null}
        <BotanicalSprig
          className={cn(
            "mt-4 h-7 w-20",
            dark ? "text-[#D3E5DF]/70" : "text-[#2E6F62]/60",
          )}
        />
      </div>

      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
