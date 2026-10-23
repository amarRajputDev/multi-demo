type IconProps = React.SVGProps<SVGSVGElement>;

/**
 * Brand glyphs drawn inline.
 *
 * lucide-react (v1.x) no longer ships third-party brand marks, so the
 * Instagram glyph used by TM SONS is a small hand-built SVG that inherits
 * `currentColor` and keeps the same 24×24 box as the rest of the icon set.
 */
export function InstagramGlyph({ className, ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      focusable="false"
      {...rest}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}
