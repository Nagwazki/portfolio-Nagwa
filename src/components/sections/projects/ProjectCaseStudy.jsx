import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { X, ExternalLink, Code } from 'lucide-react';

export default function ProjectCaseStudy({ project, onClose }) {
  const containerRef = useRef(null);

  useEffect(() => {
    // Lock body scroll
    document.body.style.overflow = 'hidden';
    
    // Entrance animation
    const ctx = gsap.context(() => {
      gsap.from(containerRef.current, {
        y: '100%',
        opacity: 0,
        duration: 0.8,
        ease: 'power4.out',
      });
      
      gsap.from('.stagger-content', {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.4,
        ease: 'power3.out'
      });
    }, containerRef);

    return () => {
      document.body.style.overflow = '';
      ctx.revert();
    };
  }, []);

  const handleClose = () => {
    // Exit animation
    gsap.to(containerRef.current, {
      y: '100%',
      opacity: 0,
      duration: 0.6,
      ease: 'power3.in',
      onComplete: onClose
    });
  };

  if (!project) return null;

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-50 bg-background overflow-y-auto overflow-x-hidden"
    >
      {/* Background layer */}
      <div className="absolute inset-0 bg-linear-to-b from-primary/10 via-background to-background pointer-events-none"></div>
      <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: "url('/circuit.svg')", backgroundSize: '400px' }}></div>
      
      {/* Header controls */}
      <div className="fixed top-0 left-0 right-0 p-6 flex justify-end z-50 mix-blend-difference">
        <button 
          onClick={handleClose}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 hover:bg-white/20 transition-colors"
        >
          <X size={24} className="text-white" />
        </button>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-24 relative z-10">
        
        {/* Intro */}
        <div className="stagger-content mb-24">
          <span className="font-mono text-primary tracking-widest text-sm uppercase mb-4 block">
            Project {String(project.id).padStart(2, '0')}
          </span>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">
            {project.name.toUpperCase()}
          </h1>
          <p className="text-2xl text-muted max-w-2xl leading-relaxed">
            {project.desc}
          </p>
        </div>

        {/* Hero Image */}
        <div className="stagger-content w-full aspect-video rounded-2xl overflow-hidden mb-24 border border-white/10 shadow-2xl relative">
          <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-t from-background/40 to-transparent"></div>
        </div>

        {/* The Idea */}
        <div className="stagger-content flex flex-col md:flex-row gap-12 border-t border-white/10 pt-16 mb-24">
          <div className="w-full md:w-1/3">
            <h2 className="text-sm font-mono text-primary tracking-widest uppercase mb-4">The Idea</h2>
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-xl leading-relaxed text-textMain/90">
              This concept explores a highly interactive approach to {project.type.toLowerCase()}. 
              The goal was to move away from static presentations and build an experience that feels alive, 
              using motion and geometry to guide the user's focus.
            </p>
          </div>
        </div>

        {/* The Build */}
        <div className="stagger-content flex flex-col md:flex-row gap-12 border-t border-white/10 pt-16 mb-24">
          <div className="w-full md:w-1/3">
            <h2 className="text-sm font-mono text-primary tracking-widest uppercase mb-4">The Build</h2>
          </div>
          <div className="w-full md:w-2/3 flex flex-col gap-4">
            {project.tech.map(tech => (
              <div key={tech} className="text-3xl font-bold tracking-tight text-white/40 hover:text-white transition-colors duration-300">
                {tech}
              </div>
            ))}
            <div className="text-3xl font-bold tracking-tight text-white/40 hover:text-white transition-colors duration-300">
              JavaScript
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="stagger-content flex flex-col md:flex-row items-center gap-6 py-24 justify-center border-t border-white/10">
          <a href="#" className="px-8 py-4 bg-primary text-background font-bold rounded-full hover:bg-white hover:text-primary transition-colors flex items-center gap-2">
            <ExternalLink size={20} /> View Live Website
          </a>
          <a href="#" className="px-8 py-4 border border-white/20 text-white rounded-full hover:border-white transition-colors flex items-center gap-2">
            <Code size={20} /> Source Code
          </a>
        </div>

      </div>
    </div>
  );
}
