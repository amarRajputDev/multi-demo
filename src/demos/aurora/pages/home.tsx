import { Admissions } from "../sections/admissions";
import { ContactCta } from "../sections/contact-cta";
import { Courses } from "../sections/courses";
import { Faculty } from "../sections/faculty";
import { Faq } from "../sections/faq";
import { Hero } from "../sections/hero";
import { Method } from "../sections/method";
import { Results } from "../sections/results";
import { Testimonials } from "../sections/testimonials";
import { Trust } from "../sections/trust";
import { Why } from "../sections/why";

export default function AuroraHomePage() {
  return (
    <>
      <Hero />
      <Trust />
      <Why />
      <Method />
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
