import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Leadership from './components/Leadership';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="font-['Inter',sans-serif] bg-background text-text-primary transition-colors duration-300">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Education />
        <Certifications />
        <Projects />
        <Leadership />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;