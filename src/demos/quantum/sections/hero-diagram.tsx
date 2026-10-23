/**
 * Decorative educational diagram: coordinate plane, a sine curve with a shaded
 * integral region, a secondary curve, and faint orbital rings. Pure inline
 * SVG — no WebGL, no animation.
 */
export function HeroDiagram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 380"
      role="img"
      aria-label="Decorative diagram of a coordinate plane with a sine curve, a shaded integral region and orbital rings"
      className={className}
    >
      <defs>
        <pattern
          id="q-grid"
          width="26"
          height="26"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M26 0H0v26"
            fill="none"
            stroke="rgba(234,242,255,0.05)"
            strokeWidth="1"
          />
        </pattern>
      </defs>

      <rect width="520" height="380" fill="url(#q-grid)" />

      <line
        x1="50"
        y1="270"
        x2="486"
        y2="270"
        stroke="rgba(124,147,184,0.55)"
        strokeWidth="1.25"
      />
      <line
        x1="90"
        y1="30"
        x2="90"
        y2="340"
        stroke="rgba(124,147,184,0.55)"
        strokeWidth="1.25"
      />
      <path
        d="M486 270l-7-3.5v7zM90 30l-3.5 7h7z"
        fill="rgba(124,147,184,0.55)"
      />

      {[130, 170, 210, 250, 290, 330, 370, 410, 450].map((x) => (
        <line
          key={`tx-${x}`}
          x1={x}
          y1="266"
          x2={x}
          y2="274"
          stroke="rgba(124,147,184,0.4)"
          strokeWidth="1"
        />
      ))}
      {[70, 110, 150, 190, 230, 310].map((y) => (
        <line
          key={`ty-${y}`}
          x1="86"
          y1={y}
          x2="94"
          y2={y}
          stroke="rgba(124,147,184,0.4)"
          strokeWidth="1"
        />
      ))}

      <path
        d="M90 270C105 240 135 210 150 210C165 210 195 240 210 270C225 300 255 330 270 330C285 330 315 300 330 270C345 240 375 210 390 210C405 210 435 240 450 270L450 270L90 270Z"
        fill="rgba(34,211,238,0.08)"
      />
      <path
        d="M90 270C105 240 135 210 150 210C165 210 195 240 210 270C225 300 255 330 270 330C285 330 315 300 330 270C345 240 375 210 390 210C405 210 435 240 450 270"
        fill="none"
        stroke="#22D3EE"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M90 316C160 312 250 300 310 258C360 222 410 160 450 118"
        fill="none"
        stroke="#8B5CF6"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeDasharray="6 7"
      />

      {[
        [150, 210],
        [270, 330],
        [390, 210],
      ].map(([cx, cy]) => (
        <circle
          key={`pt-${cx}`}
          cx={cx}
          cy={cy}
          r="4"
          fill="#0B1430"
          stroke="#22D3EE"
          strokeWidth="1.75"
        />
      ))}

      <ellipse
        cx="424"
        cy="78"
        rx="54"
        ry="20"
        fill="none"
        stroke="rgba(34,211,238,0.35)"
        strokeWidth="1.25"
        transform="rotate(-24 424 78)"
      />
      <ellipse
        cx="424"
        cy="78"
        rx="54"
        ry="20"
        fill="none"
        stroke="rgba(139,92,246,0.4)"
        strokeWidth="1.25"
        transform="rotate(28 424 78)"
      />
      <circle cx="424" cy="78" r="3.5" fill="#22D3EE" />
      <circle cx="466" cy="64" r="2.5" fill="#8B5CF6" />

      <text
        x="454"
        y="256"
        fill="#22D3EE"
        fontSize="13"
        fontFamily="var(--font-ibm-plex-mono), monospace"
      >
        f(x)
      </text>
      <text
        x="456"
        y="112"
        fill="#8B5CF6"
        fontSize="13"
        fontFamily="var(--font-ibm-plex-mono), monospace"
      >
        g(x)
      </text>
      <text
        x="176"
        y="252"
        fill="rgba(34,211,238,0.75)"
        fontSize="12"
        fontFamily="var(--font-ibm-plex-mono), monospace"
      >
        ∫ f(x) dx
      </text>
      <text
        x="492"
        y="288"
        fill="rgba(124,147,184,0.9)"
        fontSize="12"
        fontFamily="var(--font-ibm-plex-mono), monospace"
      >
        x
      </text>
      <text
        x="78"
        y="36"
        fill="rgba(124,147,184,0.9)"
        fontSize="12"
        fontFamily="var(--font-ibm-plex-mono), monospace"
      >
        y
      </text>
    </svg>
  );
}
