import { Info } from "lucide-react";
import { REV_DATA_NOTE } from "../products";

/** Shared honesty note rendered wherever prices, sizes or policies appear. */
export function DataNote({ className }: { className?: string }) {
  return (
    <p
      className={
        className ??
        "flex items-start gap-2.5 rounded-[2px] bg-[#F3DCE1]/60 p-4 text-[11.5px] leading-relaxed text-[#5F5458]"
      }
    >
      <Info aria-hidden className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#B4707F]" />
      <span>{REV_DATA_NOTE}</span>
    </p>
  );
}
