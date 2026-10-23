import { Admissions } from "../sections/admissions";
import { Concepts } from "../sections/concepts";
import { ContactCta } from "../sections/contact-cta";
import { Courses } from "../sections/courses";
import { Faculty } from "../sections/faculty";
import { Faq } from "../sections/faq";
import { Features } from "../sections/features";
import { Hero } from "../sections/hero";
import { Process } from "../sections/process";
import { Results } from "../sections/results";
import { Testimonials } from "../sections/testimonials";
import { Trust } from "../sections/trust";

export default function QuantumHomePage() {
  return (
    <>
      <Hero />
      <Trust />
      <Concepts />
      <Process />
      <Features />
      <Courses limit={5} />
      <Faculty />
      <Results />
      <Testimonials />
      <Admissions />
      <Faq />
      <ContactCta />
    </>
  );
}
