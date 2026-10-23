import type { SVGProps } from "react";

/** Instagram glyph used in contact blocks and the footer. */
export function InstagramGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Small four-petal ornamental motif used across headers and dividers. */
export function PetalMotif(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 2c1.4 2.8 1.4 5.8 0 8.6C10.6 7.8 10.6 4.8 12 2Z" />
      <path d="M22 12c-2.8 1.4-5.8 1.4-8.6 0 2.8-1.4 5.8-1.4 8.6 0Z" />
      <path d="M12 22c-1.4-2.8-1.4-5.8 0-8.6 1.4 2.8 1.4 5.8 0 8.6Z" />
      <path d="M2 12c2.8-1.4 5.8-1.4 8.6 0C7.8 13.4 4.8 13.4 2 12Z" />
      <circle cx="12" cy="12" r="1.6" />
    </svg>
  );
}

/** Ornamental divider line with a centre petal. */
export function OrnamentDivider({ className }: { className?: string }) {
  return (
    <div className={`sakshi-ornament ${className ?? ""}`}>
      <PetalMotif className="h-3 w-3" />
    </div>
  );
}
