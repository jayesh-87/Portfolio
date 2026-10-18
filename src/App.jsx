import { useMemo } from 'react';
import About from './components/About';
import Approach from './components/Approach';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import siteConfig from './data/siteConfig';
import useActiveSection from './hooks/useActiveSection';

export default function App() {
  const sectionIds = useMemo(
    () => ['home', ...siteConfig.nav.map((item) => item.href.slice(1))],
    [],
  );
  const activeId = useActiveSection(sectionIds);

  return (
    <>
      <Navbar activeId={activeId} />

      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Approach />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
