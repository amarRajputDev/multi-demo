import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * CIÈL product image.
 *
 * When the manifest could not recover an authentic photograph the component
 * renders a neutral, clearly-labelled placeholder at the same aspect ratio —
 * never a stock or unrelated image.
 */
export function CielImage({
  src,
  alt,
  label,
  className,
  imageClassName,
  sizes = "(max-width: 768px) 90vw, 30vw",
  priority = false,
}: {
  src: string | null;
  alt: string;
  label?: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
}) {
  if (!src) {
    return (
      <div
        className={cn(
          "relative flex h-full w-full flex-col items-center justify-center gap-2 overflow-hidden bg-[#17171A] text-center",
          className,
        )}
        role="img"
        aria-label={`${alt} — image to be supplied`}
      >
        <span
          aria-hidden
          className="absolute inset-0 opacity-[0.12] [background-image:repeating-linear-gradient(135deg,#F4F1EC_0_1px,transparent_1px_9px)]"
        />
        <span className="font-ciel-display relative text-2xl tracking-[0.2em] text-[#F4F1EC]/40">
          CIÈL
        </span>
        <span className="relative max-w-[80%] text-[10px] uppercase tracking-[0.22em] text-[#8A8F96]">
          {label ?? "Image to be supplied"}
        </span>
      </div>
    );
  }

  return (
    <div className={cn("relative h-full w-full overflow-hidden bg-[#17171A]", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn("object-cover", imageClassName)}
      />
    </div>
  );
}
