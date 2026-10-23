import { Reveal } from "@/components/shared/reveal";
import { Users, BookOpen, Handshake, Sprout } from "lucide-react";

const points = [
  {
    icon: Users,
    title: "Batches capped at 15–20",
    text: "Every student known by name and by their work.",
  },
  {
    icon: BookOpen,
    title: "NCERT-deep teaching",
    text: "Board syllabus taught for understanding, not cramming.",
  },
  {
    icon: Handshake,
    title: "Monthly parent meetings",
    text: "Regular, honest progress conversations — no surprises.",
  },
  {
    icon: Sprout,
    title: "Calm, bookish campus",
    text: "A quiet environment built for focused study.",
  },
] as const;

export function Trust() {
  return (
    <section aria-labelledby="trust-heading" className="border-y border-[#1F3A2E]/12 bg-[#1F3A2E] text-[#FBF8F1]">
      <div className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6 lg:px-8">
        <Reveal y={14}>
          <h2 id="trust-heading" className="sr-only">
            Why families trust Scholar House
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {points.map((point) => (
              <div key={point.title} className="flex gap-4">
                <point.icon
                  aria-hidden
                  className="mt-1 h-5 w-5 shrink-0 text-[#E7D8B4]"
                />
                <div>
                  <p className="font-scholar-display text-lg leading-snug text-[#FBF8F1]">
                    {point.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[#FBF8F1]/70">
                    {point.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
