import { EnquiryForm } from "@/components/shared/enquiry-form";
import { auroraContact, auroraCourses } from "../data";

interface EnquiryProps {
  className?: string;
  heading?: string;
  subheading?: string;
}

const inputClass =
  "min-h-12 text-[#F4EFE6] placeholder:text-[#6B7A94] focus:border-[#C9A227] focus:outline-none focus:ring-0";

const buttonClass =
  "rounded-none! bg-[#C9A227] text-[#0B1A33] hover:bg-[#E8D9A0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8D9A0]";

export function Enquiry({
  className,
  heading,
  subheading,
}: EnquiryProps) {
  return (
    <div className={className}>
      <EnquiryForm
        brandName="Aurora Academy"
        courses={auroraCourses.map((course) => course.name)}
        whatsappNumber={auroraContact.whatsappDigits}
        heading={heading ?? "Request a callback"}
        subheading={
          subheading ??
          "Tell us about the student and an Aurora counsellor will call you back."
        }
        labelClassName="text-[#C9A227]"
        inputClassName={inputClass}
        buttonClassName={buttonClass}
        noteClassName="text-[#F4EFE6]/60"
        successClassName="border-[#C9A227]/40! bg-[#C9A227]/10!"
      />
    </div>
  );
}
