import React, { useState, useEffect } from 'react';
import { SceneProvider } from './components/SceneBackground';
import SceneBackground from './components/SceneBackground';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/projects/Projects';
import CreativeShowcase from './components/sections/CreativeShowcase';
import Contact from './components/sections/Contact';

// Note: Ensure images are placed in /public/ or imported correctly
const backgroundScenes = {
  hero: { image: '', position: 'center right' },
  about: { image: '', position: 'center center' },
  skills: { image: '', position: 'center top' },
  projects: { image: '', position: 'center' },
  showcase: { image: '', position: 'center right' },
  contact: { image: '', position: 'center' }
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for the cinematic entrance
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-background flex flex-col items-center justify-center z-50">
        <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin mb-4"></div>
        <p className="font-mono text-primary animate-pulse tracking-widest">INITIALIZING UNIVERSE...</p>
      </div>
    );
  }

  return (
    <SceneProvider>
      <div className="relative w-full h-full text-textMain selection:bg-primary/30 selection:text-white overflow-x-clip">
        
        {/* Background Layer */}
        <SceneBackground scenes={backgroundScenes} />
        
        {/* Navigation */}
        <Navbar />
        
        {/* Main Content */}
        <main className="flex flex-col">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <CreativeShowcase />
          <Contact />
        </main>

      </div>
    </SceneProvider>
  );
}

export default App;
