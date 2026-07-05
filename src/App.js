import Navbar from "./components/layout/Navbar";
import About from "./components/about/About";
import Hero from "./components/hero/Hero";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <About />
      <Skills />
      <Experience />
      <Projects />
    </>
  );
}
