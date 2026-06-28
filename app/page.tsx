import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="min-h-screen flex flex-col">
        <Hero />
        <About />
        
        {/* Section 3: Middle 3-Column Band */}
        <div className="grid grid-cols-1 lg:grid-cols-3 border-b-2 border-dark">
          <Skills />
          <Achievements />
        </div>
        
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
