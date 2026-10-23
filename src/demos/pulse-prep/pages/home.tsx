import { Admissions } from "../sections/admissions";
import { Bento } from "../sections/bento";
import { ContactCta } from "../sections/contact-cta";
import { Faq } from "../sections/faq";
import { Faculty } from "../sections/faculty";
import { Hero } from "../sections/hero";
import { MockTests } from "../sections/mock-tests";
import { Results } from "../sections/results";
import { Roadmap } from "../sections/roadmap";
import { Testimonials } from "../sections/testimonials";
import { Trust } from "../sections/trust";

export function HomePage() {
  return (
    <>
      <Hero />
      <Trust />
      <Bento />
      <Roadmap />
      <MockTests />
      <Faculty />
      <Results />
      <Testimonials />
      <Admissions />
      <Faq />
      <ContactCta />
    </>
  );
}
