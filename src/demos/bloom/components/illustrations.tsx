type IllustrationProps = {
  className?: string;
};

function svgProps(className?: string) {
  return {
    className,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true as const,
    focusable: "false" as const,
  };
}

export function FlowerMark({ className }: IllustrationProps) {
  return (
    <svg {...svgProps(className)}>
      <g fill="currentColor" opacity="0.9">
        <ellipse cx="24" cy="13.5" rx="5" ry="7" />
        <ellipse cx="24" cy="34.5" rx="5" ry="7" />
        <ellipse cx="13.5" cy="24" rx="7" ry="5" />
        <ellipse cx="34.5" cy="24" rx="7" ry="5" />
        <ellipse cx="16.5" cy="16.5" rx="6" ry="5" transform="rotate(-45 16.5 16.5)" />
        <ellipse cx="31.5" cy="16.5" rx="6" ry="5" transform="rotate(45 31.5 16.5)" />
        <ellipse cx="16.5" cy="31.5" rx="6" ry="5" transform="rotate(45 16.5 31.5)" />
        <ellipse cx="31.5" cy="31.5" rx="6" ry="5" transform="rotate(-45 31.5 31.5)" />
      </g>
      <circle cx="24" cy="24" r="6" fill="#F5C86B" />
      <circle cx="24" cy="24" r="2.5" fill="#3B3358" opacity="0.35" />
    </svg>
  );
}

export function SproutMark({ className }: IllustrationProps) {
  return (
    <svg {...svgProps(className)}>
      <path
        d="M24 40V22"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M24 26c0-6-4.5-10-11-10 0 6.5 4.5 10 11 10Z"
        fill="currentColor"
        opacity="0.85"
      />
      <path
        d="M24 21c0-6 4.5-10 11-10 0 6.5-4.5 10-11 10Z"
        fill="currentColor"
        opacity="0.6"
      />
      <path
        d="M14 40h20"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

export function BookMark({ className }: IllustrationProps) {
  return (
    <svg {...svgProps(className)}>
      <path
        d="M24 14c-3.5-3-8.5-4-13-3.5v23c4.5-.5 9.5.5 13 3.5 3.5-3 8.5-4 13-3.5v-23c-4.5-.5-9.5.5-13 3.5Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path d="M24 14v23" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M15 18.5h5M15 23h5M28 18.5h5M28 23h5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

export function StarMark({ className }: IllustrationProps) {
  return (
    <svg {...svgProps(className)}>
      <path
        d="M24 7c1.5 6.5 4 10.5 9 12.5-5 2-7.5 6-9 12.5-1.5-6.5-4-10.5-9-12.5 5-2 7.5-6 9-12.5Z"
        fill="currentColor"
      />
      <circle cx="38" cy="11" r="2.5" fill="#F5C86B" />
      <circle cx="10" cy="34" r="2" fill="#E8836F" opacity="0.8" />
    </svg>
  );
}

export function PaletteMark({ className }: IllustrationProps) {
  return (
    <svg {...svgProps(className)}>
      <path
        d="M24 8c-9.5 0-16 6.5-16 15.5S14 40 24 40c2.5 0 3.5-1.5 3-3-.6-1.9.7-3.5 2.8-3.5H33c4.5 0 6-3 6-7C39 14.5 33.5 8 24 8Z"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <circle cx="17" cy="20" r="2.5" fill="#E8836F" />
      <circle cx="24" cy="15.5" r="2.5" fill="#F5C86B" />
      <circle cx="31" cy="18.5" r="2.5" fill="currentColor" opacity="0.7" />
      <circle cx="16.5" cy="28" r="2.5" fill="currentColor" opacity="0.45" />
    </svg>
  );
}

export function MagnifierMark({ className }: IllustrationProps) {
  return (
    <svg {...svgProps(className)}>
      <circle
        cx="21"
        cy="21"
        r="11"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="m29.5 29.5 9 9"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M16.5 21.5c1.5-3 4-4.5 7-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.5"
      />
      <circle cx="36" cy="13" r="2.5" fill="#F5C86B" />
    </svg>
  );
}

export function NumberMark({ className }: IllustrationProps) {
  return (
    <svg {...svgProps(className)}>
      <rect
        x="8"
        y="8"
        width="14"
        height="14"
        rx="4"
        fill="currentColor"
        opacity="0.85"
      />
      <rect
        x="26"
        y="8"
        width="14"
        height="14"
        rx="4"
        fill="#F5C86B"
      />
      <rect
        x="8"
        y="26"
        width="14"
        height="14"
        rx="4"
        fill="#E8836F"
        opacity="0.9"
      />
      <rect
        x="26"
        y="26"
        width="14"
        height="14"
        rx="4"
        fill="currentColor"
        opacity="0.45"
      />
      <path
        d="M30 12.5v7M27.5 15l2.5-2.5 2.5 2.5"
        stroke="#3B3358"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.55"
      />
    </svg>
  );
}

export function FlaskMark({ className }: IllustrationProps) {
  return (
    <svg {...svgProps(className)}>
      <path
        d="M20 8h8M22 8v9l-9 16a4 4 0 0 0 3.5 6h15a4 4 0 0 0 3.5-6l-9-16V8"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 30h17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />
      <circle cx="21" cy="34" r="2" fill="#E8836F" />
      <circle cx="27.5" cy="35.5" r="1.5" fill="#F5C86B" />
    </svg>
  );
}

export function HeartMark({ className }: IllustrationProps) {
  return (
    <svg {...svgProps(className)}>
      <path
        d="M24 38S9 30 9 19.5C9 14.8 12.8 11 17.5 11c3 0 5.2 1.6 6.5 3.6C25.3 12.6 27.5 11 30.5 11 35.2 11 39 14.8 39 19.5 39 30 24 38 24 38Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M24 38S9 30 9 19.5C9 14.8 12.8 11 17.5 11c3 0 5.2 1.6 6.5 3.6C25.3 12.6 27.5 11 30.5 11 35.2 11 39 14.8 39 19.5 39 30 24 38 24 38Z"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.35"
      />
    </svg>
  );
}

export function BlobSoft({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M163 58c19 26 14 66-10 91s-63 34-91 18S18 128 22 96 51 37 84 25s60 7 79 33Z"
        fill="currentColor"
      />
    </svg>
  );
}

const SUBJECT_ICON_MAP = {
  math: NumberMark,
  science: FlaskMark,
  english: BookMark,
  reasoning: MagnifierMark,
  olympiad: StarMark,
  art: PaletteMark,
} as const;

export type SubjectIconName = keyof typeof SUBJECT_ICON_MAP;

export function SubjectIcon({
  name,
  className,
}: {
  name: SubjectIconName;
  className?: string;
}) {
  const Icon = SUBJECT_ICON_MAP[name];
  return <Icon className={className} />;
}
