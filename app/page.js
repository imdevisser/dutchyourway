import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ContactSection from "./components/sections/ContactSection";

import LessonsSection from "./components/sections/LessonsSection";
import DutchForAfrikaansSection from "./components/sections/DutchForAfrikaansSection";
import TestimonialSection from "./components/sections/TestimonialSection";
import FreeResourcesSection from "./components/sections/FreeResourcesSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <section id="lessons">
        <LessonsSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>
      <section id="free-resources">
        <FreeResourcesSection />
      </section>
      <section id="testimonial">
        <TestimonialSection />
      </section>
      <section id="dutch-for-afrikaans">
        <DutchForAfrikaansSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </main>
  );
}
