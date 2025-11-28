import React, { useState } from 'react';  // Added useState for menu toggle
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import siteConfig from './data/siteConfig';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // State to track menu open/close

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);  // Function to toggle menu
  const closeMenu = () => setIsMenuOpen(false);  // Function to close menu (e.g., after clicking a link)

  return (
    <div>
      <header className="topbar">
        <div className="container">
          <a href="#home" className="logo" onClick={closeMenu}>{siteConfig.name}</a>  // Close menu on logo click
          <nav className="nav">
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#experience" onClick={closeMenu}>Training & Intern</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>
          {/* Hamburger Button - Only visible on mobile via CSS */}
          <button className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        {/* Mobile Nav Overlay - Only visible when open */}
        <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#experience" onClick={closeMenu}>Training & Intern</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>
      </header>

      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="experience"><Experience /></section>
        <section id="contact"><Contact /></section>
      </main>

      <Footer />
    </div>
  );
}