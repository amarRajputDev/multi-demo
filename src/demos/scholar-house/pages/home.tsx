import { Hero } from "../sections/hero";
import { Trust } from "../sections/trust";
import { Courses } from "../sections/courses";
import { Journey } from "../sections/journey";
import { Faculty } from "../sections/faculty";
import { Results } from "../sections/results";
import { Testimonials } from "../sections/testimonials";
import { Method } from "../sections/method";
import { Admissions } from "../sections/admissions";
import { Faq } from "../sections/faq";
import { ContactCta } from "../sections/contact-cta";

export default function ScholarHomePage() {
  return (
    <>
      <Hero />
      <Trust />
      <Courses />
      <Journey />
      <Faculty />
      <Results />
      <Testimonials />
      <Method />
      <Admissions />
      <Faq />
      <ContactCta />
    </>
  );
}
