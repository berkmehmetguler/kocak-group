import { LanguageProvider } from "./context/LanguageContext";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { WhyChooseUsSection } from "./components/WhyChooseUsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <HeroSection />

          {/* About Us Section */}
          <AboutSection />

          {/* Services Section */}
          <ServicesSection />

          {/* Projects Section */}
          <ProjectsSection />

          {/* Why Choose Us Section */}
          <WhyChooseUsSection />

          {/* Contact Section */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </LanguageProvider>
  );
}