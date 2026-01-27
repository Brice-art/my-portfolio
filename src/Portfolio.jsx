import React, { useState } from 'react';
import Nav from './components/Navigation/Nav';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import GrowthTrajectory from './components/Growth/GrowthTrajectory';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');

  return (
    <div style={{
      fontFamily: "'Space Mono', 'Courier New', monospace",
      background: '#0a0e27',
      color: '#e8eaed',
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Grid Pattern */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          linear-gradient(rgba(99, 102, 241, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(99, 102, 241, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      {/* Navigation */}
      <Nav activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <Skills />
        <GrowthTrajectory />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Portfolio;
