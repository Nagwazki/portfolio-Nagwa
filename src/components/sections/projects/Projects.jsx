import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectBrowser from './ProjectBrowser';
import ProjectCaseStudy from './ProjectCaseStudy';

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

const projectsData = [
  {
    id: 1,
    name: 'Quantum UI',
    type: 'Design System',
    desc: 'A futuristic React component library with built-in spring physics and cinematic micro-interactions.',
    tech: ['React', 'Framer Motion', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 2,
    name: 'Velmira',
    type: 'E-commerce Experience',
    desc: 'E-commerce experience designed and developed with a focus on interaction and smooth transitions.',
    tech: ['Next.js', 'TypeScript', 'GSAP'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 3,
    name: 'Nexus API',
    type: 'Developer Tool',
    desc: 'Visual interface for monitoring complex real-time data streams and API health metrics.',
    tech: ['Vue', 'D3.js', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 4,
    name: 'Neon Core',
    type: 'Interactive Portfolio',
    desc: 'Cinematic digital experience blending 3D objects with advanced frontend motion graphics.',
    tech: ['React', 'Three.js', 'WebGL'],
    image: 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?auto=format&fit=crop&q=80&w=1000'
  }
];

export default function Projects() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [expandedProject, setExpandedProject] = useState(null);

  useEffect(() => {
    
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray('.project-panel');
      const totalPanels = panels.length;
      
      // Set initial states for panels
      gsap.set(panels, { 
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        opacity: 0, 
        scale: 0.92,
        y: 100,
        zIndex: (i) => i
      });
      
      // Show the first panel immediately
      gsap.set(panels[0], { opacity: 1, scale: 1, y: 0 });

      // Master Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${totalPanels * 50}%`,
          pin: true,
          scrub: 1,
          onUpdate: (self) => {
            // Calculate active index for the progress counter
            const index = Math.min(
              Math.max(Math.floor(self.progress * totalPanels), 0),
              totalPanels - 1
            );
            setActiveProjectIndex(index);
          }
        }
      });

      // Create the layered transitions
      panels.forEach((panel, i) => {
        if (i === 0) return; // Skip first panel as it's already visible
        
        const previousPanel = panels[i - 1];
        
        tl.to(previousPanel, {
          scale: 0.95,
          opacity: 0.3,
          y: -50,
          filter: 'blur(5px)',
          duration: 1,
          ease: "power2.inOut"
        }, `scene${i}`)
        .to(panel, {
          scale: 1,
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1,
          ease: "power2.inOut"
        }, `scene${i}`);
      });
      
      // Refresh ScrollTrigger to calculate correct heights on mobile
      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="relative w-full bg-background overflow-clip">
      
      {/* Editorial Intro */}
      <div className="min-h-screen flex items-center justify-center px-6 pt-24 pb-12 relative z-10 bg-background/80">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-mono text-primary tracking-widest text-sm uppercase mb-8 block">Selected Work</span>
          <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            Things I've built <br/>
            <span className="text-muted italic">with code & creativity.</span>
          </h2>
          <p className="text-xl text-muted/60 max-w-lg mx-auto">
            Scroll to explore the digital experiences.
          </p>
        </div>
      </div>

      {/* Pinned Scroll Container */}
      <div ref={containerRef} className="h-[100dvh] w-full relative flex items-center justify-center pt-16">
        
        {/* Progress Indicator */}
        <div className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-4">
          <span className="font-mono text-[10px] md:text-sm text-primary">
            {String(activeProjectIndex + 1).padStart(2, '0')}
          </span>
          <div className="w-px h-16 md:h-32 bg-white/10 relative">
            <div 
              className="absolute top-0 left-0 w-full bg-primary transition-all duration-300"
              style={{ height: `${((activeProjectIndex + 1) / projectsData.length) * 100}%` }}
            ></div>
          </div>
          <span className="font-mono text-[10px] md:text-sm text-muted">
            {String(projectsData.length).padStart(2, '0')}
          </span>
        </div>

        {/* Browser Stack */}
        <div className="relative w-full max-w-6xl px-8 md:px-16 h-[60vh] md:h-[70vh]">
          {projectsData.map((project, i) => (
            <div key={project.id} className="project-panel w-full h-full">
              <ProjectBrowser project={project} onExplore={setExpandedProject} />
            </div>
          ))}
        </div>
        
      </div>

      {/* Case Study Fullscreen Overlay */}
      {expandedProject && (
        <ProjectCaseStudy 
          project={expandedProject} 
          onClose={() => setExpandedProject(null)} 
        />
      )}

    </section>
  );
}
