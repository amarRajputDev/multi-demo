export function VizoWordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 32 32"
        aria-hidden
        className="h-7 w-7 shrink-0"
        fill="none"
      >
        <rect width="32" height="32" rx="9" fill="url(#vizo-mark-bg)" />
        <path
          d="M8 9.5h4.6L16 20l3.4-10.5H24L18.2 25h-4.4L8 9.5Z"
          fill="#fff"
        />
        <defs>
          <linearGradient id="vizo-mark-bg" x1="0" y1="0" x2="32" y2="32">
            <stop stopColor="#6366F1" />
            <stop offset="0.55" stopColor="#3B82F6" />
            <stop offset="1" stopColor="#0EA5E9" />
          </linearGradient>
        </defs>
      </svg>
      <span className="text-[15px] font-semibold tracking-tight text-white">
        Vizo{" "}
        <span className="font-normal text-white/60">Technology</span>
      </span>
    </span>
  );
}
