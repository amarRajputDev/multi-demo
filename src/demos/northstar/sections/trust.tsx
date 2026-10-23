import { Reveal } from "@/components/shared/reveal";

const indicators = [
  {
    figure: "30",
    unit: "aspirants",
    label: "Upper limit per General Studies batch",
  },
  {
    figure: "Weekly",
    unit: "ritual",
    label: "Written answers, marked and returned",
  },
  {
    figure: "Named",
    unit: "mentors",
    label: "One faculty member owns each cohort",
  },
  {
    figure: "Honest",
    unit: "counselling",
    label: "We recommend smaller plans when they fit",
  },
];

export function Trust() {
  return (
    <section
      aria-labelledby="trust-heading"
      className="border-y border-[#26241F]/12 bg-[#F1ECE3]"
    >
      <div className="mx-auto max-w-[1240px] px-5 py-12 sm:px-8">
        <h2 id="trust-heading" className="sr-only">
          What Northstar holds itself to
        </h2>
        <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {indicators.map((item, index) => (
            <li key={item.label}>
              <Reveal delay={index * 0.06} duration={0.8} y={14}>
                <div className="border-t border-[#26241F]/20 pt-4">
                  <p className="font-northstar-display text-[1.75rem] leading-none text-[#26241F]">
                    {item.figure}
                    <span className="ml-1.5 text-base text-[#9C4F36] italic">
                      {item.unit}
                    </span>
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[#6E6A62]">
                    {item.label}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
