import Link from "next/link";
import { ArrowLeft, LayoutGrid } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#070B14] px-6 text-white">
      <div className="max-w-md text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/40">
          404
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight">
          This concept doesn&rsquo;t exist
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-white/60">
          The demo you&rsquo;re looking for may have been renamed. Head back to
          the studio to explore all six coaching website designs.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#070B14] transition hover:bg-white/90"
          >
            <LayoutGrid aria-hidden className="h-4 w-4" />
            All concepts
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white/80 transition hover:border-white/40 hover:text-white"
          >
            <ArrowLeft aria-hidden className="h-4 w-4" />
            Back to showcase
          </Link>
        </div>
      </div>
    </div>
  );
}
