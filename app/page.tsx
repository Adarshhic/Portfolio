import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import ProjectsSection from "@/components/ProjectsSection";
import UsesSection from "@/components/UsesSection";
import AnalyticsSection from "@/components/AnalyticsSection";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="home-container">
      <Hero />
      <Skills />
      <Experience />
      <ProjectsSection />
      <UsesSection />
      <AnalyticsSection />
      <ContactMe />
      <Footer />
    </div>
  );
}
