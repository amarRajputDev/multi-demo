import { EnquiryForm } from "@/components/shared/enquiry-form";
import { quantumContact, quantumCourses } from "../data";

interface EnquiryProps {
  className?: string;
  heading?: string;
  subheading?: string;
}

const inputClass =
  "min-h-12 text-[#EAF2FF] placeholder:text-[#7C93B8]/70 focus:border-[#22D3EE] focus:outline-none focus:ring-0";

const buttonClass =
  "rounded-none! bg-[#22D3EE] text-[#050A18] shadow-[0_0_22px_rgba(34,211,238,0.22)] hover:bg-[#67E8F9] hover:shadow-[0_0_28px_rgba(34,211,238,0.32)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B5CF6]";

export function Enquiry({
  className,
  heading,
  subheading,
}: EnquiryProps) {
  return (
    <div className={className}>
      <EnquiryForm
        brandName="Quantum Learning"
        courses={quantumCourses.map((course) => course.name)}
        whatsappNumber={quantumContact.whatsappDigits}
        heading={heading ?? "Request a callback"}
        subheading={
          subheading ??
          "Tell us about the student and a Quantum counsellor will call you back."
        }
        labelClassName="font-quantum-mono text-[#22D3EE]"
        inputClassName={inputClass}
        buttonClassName={buttonClass}
        noteClassName="text-[#7C93B8]"
        successClassName="border-[#22D3EE]/40! bg-[#22D3EE]/10!"
      />
    </div>
  );
}
