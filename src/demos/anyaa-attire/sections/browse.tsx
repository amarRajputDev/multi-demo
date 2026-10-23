import { CollectionsView } from "../components/collections-view";
import { SectionHeading } from "../components/section-heading";
import { anyaaDataNote } from "../data";

/** Search & filtering section on the homepage - the full interactive catalogue. */
export function BrowseSection() {
  return (
    <section
      aria-labelledby="anyaa-browse-title"
      className="border-b border-[#DFE7E2] bg-[#FAF8F3]"
    >
      <div className="mx-auto max-w-[1360px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          index="Browse"
          eyebrow="Search & filter"
          title={<span id="anyaa-browse-title">Find your piece.</span>}
          description="Search by name, filter by collection and sort the edit. Every entry is a concept piece awaiting price confirmation."
        />

        <div className="mt-12">
          <CollectionsView />
        </div>

        <p className="font-anyaa-body mt-10 border-t border-[#DFE7E2] pt-5 text-[11px] leading-relaxed text-[#6E7C77]">
          {anyaaDataNote}
        </p>
      </div>
    </section>
  );
}
