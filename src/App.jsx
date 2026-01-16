import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import About from "./components/About";
import Expert from "./components/Expert";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-purple-600/25 blur-[90px]" />
        <div className="absolute top-40 -right-40 h-[520px] w-[520px] rounded-full bg-pink-500/20 blur-[100px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[520px] w-[720px] rounded-full bg-indigo-500/10 blur-[120px]" />
        <div className="absolute inset-0 bg-grid bg-[size:70px_70px] opacity-[0.25]" />
      </div>

      <Navbar />
      <Hero />

      <main className="relative z-10">
        <Section id="about" title="WHO I AM?">
          <About />
        </Section>

        <Section id="experience" title="Expert">
          <Expert />
        </Section>

        <Section id="skills" title="Skills">
          <Skills />
        </Section>

        <Section id="projects" title="Projects">
          <Projects />
        </Section>

        <Section id="education" title="Educations">
          <Education />
        </Section>

        <Section id="contact" title="CONTACT WITH ME">
          <Contact />
        </Section>

        <Footer />
      </main>

      <ScrollToTop />
    </div>
  );
}
