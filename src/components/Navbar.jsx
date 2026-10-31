import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Terminal, Home, User, Code, Briefcase, Layers, Mail } from 'lucide-react';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const navLinks = [
    { name: 'Home', id: 'hero', icon: Home },
    { name: 'About', id: 'about', icon: User },
    { name: 'Skills', id: 'skills', icon: Code },
    { name: 'Projects', id: 'projects', icon: Briefcase },
    { name: 'Showcase', id: 'showcase', icon: Layers },
    { name: 'Contact', id: 'contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.getElementById(navLinks[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <>
      {/* Top Navigation Bar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? 'py-4 bg-background/70 backdrop-blur-xl border-b border-primary/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' 
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 text-textMain cursor-pointer group" onClick={() => scrollToSection('hero')}>
            <Terminal size={20} className="text-primary group-hover:text-secondary transition-colors" />
            <span className="font-mono font-bold tracking-widest text-lg">
              <span className="text-primary opacity-50">&lt;</span>
              NOGA
              <span className="text-primary opacity-50">/&gt;</span>
            </span>
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button 
                  onClick={() => scrollToSection(link.id)}
                  className={`text-sm font-medium transition-colors duration-300 relative group ${
                    activeSection === link.id ? 'text-primary' : 'text-muted hover:text-white'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-2 left-0 h-0.5 transition-all duration-300 ${
                    activeSection === link.id ? 'w-full bg-primary' : 'w-0 bg-primary group-hover:w-full'
                  }`}></span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </motion.nav>

      {/* Mobile Bottom Navigation App-like */}
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-background/80 backdrop-blur-xl border-t border-primary/20 pb-4 pt-2 shadow-[0_-4px_30px_rgba(0,0,0,0.3)] rounded-t-2xl"
      >
        <ul className="flex items-center justify-between px-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <li key={link.name} className="flex-1">
                <button 
                  onClick={() => scrollToSection(link.id)}
                  className={`w-full flex flex-col items-center justify-center gap-1.5 p-1 transition-all duration-300 ${
                    isActive ? 'text-primary transform -translate-y-1' : 'text-muted hover:text-white'
                  }`}
                >
                  <div className={`p-2 rounded-full transition-all duration-300 ${
                    isActive ? 'bg-primary/20 shadow-[0_0_15px_rgba(var(--primary),0.5)]' : 'bg-transparent'
                  }`}>
                    <Icon size={isActive ? 22 : 20} strokeWidth={isActive ? 2.5 : 2} />
                  </div>
                  <span className={`text-[9px] uppercase tracking-wider font-semibold transition-all duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-70'
                  }`}>
                    {link.name}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </motion.nav>
    </>
  );
}
