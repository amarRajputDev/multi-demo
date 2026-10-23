/**
 * Small inline glyphs used by the Anyaa Attire concept. Kept local because no
 * brand mark or botanical asset is downloaded - all artwork is original SVG
 * line-art drawn for this demo.
 */

export function InstagramGlyph({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3" y="3" width="18" height="18" rx="5.4" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.3" cy="6.7" r="1.15" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Delicate botanical sprig used as an editorial divider / accent. */
export function BotanicalSprig({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 120 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M6 42 C34 42 58 32 76 18 C86 10 96 6 114 6" />
      <path d="M40 34 C38 26 42 20 50 18 C50 27 46 33 40 34 Z" />
      <path d="M58 26 C58 17 64 11 73 11 C72 20 66 26 58 26 Z" />
      <path d="M76 16 C78 8 85 3 94 4 C92 13 85 18 76 16 Z" />
      <path d="M30 38 C25 33 24 26 28 20 C33 26 34 33 30 38 Z" />
      <circle cx="106" cy="8" r="2.2" />
    </svg>
  );
}

/** Single-line leaf pair used inside the placeholder cards. */
export function LeafPair({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 64 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M32 36 C32 22 32 12 32 4" />
      <path d="M32 22 C24 22 16 17 12 8 C23 8 30 13 32 22 Z" />
      <path d="M32 16 C40 15 48 10 52 2 C41 3 34 8 32 16 Z" />
    </svg>
  );
}
