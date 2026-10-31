import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useScene } from '../SceneBackground';
import { ExternalLink, Code } from 'lucide-react';
import adhamImage from './photo/adham.jfif';

const projects = [
  {
    id: 1,
    name: 'portfolio',
    type: 'portfolio website',
    desc: 'A portfolio website for a monter.',
    tech: ['React', 'Framer Motion', 'Tailwind CSS'],
    image: adhamImage,
    link: 'https://nagwazki.github.io/Adhammamdoh/', // <-- ضع رابط الـ Explore / Live Demo هنا
    github: 'https://github.com/username/project-1' // <-- ضع رابط الكود هنا (اختياري)
  },
  {
    id: 2,
    name: 'Neon Commerce',
    type: 'E-commerce App',
    desc: 'High-performance storefront featuring 3D product previews and seamless page transitions.',
    tech: ['Next.js', 'Three.js', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000',
    link: 'https://example.com/neon-commerce', // <-- ضع رابط الـ Explore / Live Demo هنا
    github: 'https://github.com/username/neon-commerce' // <-- ضع رابط الكود هنا (اختياري)
  }
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1 });
  const { setActiveScene } = useScene();

  useEffect(() => {
    if (isInView) setActiveScene('projects');
  }, [isInView, setActiveScene]);

  return (
    <section ref={ref} id="projects" className="relative min-h-screen py-24 px-6">
      <div className="max-w-7xl mx-auto w-full">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Selected <span className="text-primary glow-text">Works</span></h2>
          <div className="h-0.5 w-20 bg-primary/50"></div>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group relative flex flex-row gap-4 md:gap-8 items-center bg-surface/30 p-2 md:p-4 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Project Image */}
              <div className="w-1/2 overflow-hidden rounded-xl relative h-full">
                <div className="absolute inset-0 bg-background/40 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                <motion.img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-32 md:h-72 object-cover transition-transform duration-700 group-hover:scale-105 relative z-0"
                />
              </div>

              {/* Project Info */}
              <div className="w-1/2 p-2 md:p-4 lg:p-8 relative z-20">
                <span className="font-mono text-secondary text-[10px] md:text-sm mb-1 md:mb-2 block">{project.type}</span>
                <h3 className="text-lg md:text-3xl font-bold mb-2 md:mb-4 text-textMain group-hover:text-primary transition-colors duration-300">{project.name}</h3>
                <p className="text-muted mb-2 md:mb-6 text-xs md:text-lg leading-snug md:leading-relaxed">{project.desc}</p>
                
                <div className="flex flex-wrap gap-1 md:gap-2 mb-2 md:mb-8">
                  {project.tech.map(tech => (
                    <span key={tech} className="px-1.5 py-0.5 md:px-3 md:py-1 bg-white/5 border border-white/10 rounded-full text-[8px] md:text-xs font-mono text-muted group-hover:border-primary/20 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col md:flex-row gap-2 md:gap-4 opacity-100 md:opacity-0 transform translate-y-0 md:translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 mt-2 md:mt-0">
                  {/* Explore Button */}
                  <a 
                    href={project.link || '#'} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 md:gap-2 text-[10px] md:text-sm font-bold text-white hover:text-primary transition-colors"
                  >
                    <ExternalLink size={14} className="md:w-4 md:h-4" /> Explore
                  </a>

                  {/* Source Code Button */}
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 md:gap-2 text-[10px] md:text-sm font-bold text-white hover:text-primary transition-colors"
                    >
                      <Code size={14} className="md:w-4 md:h-4" /> Source Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}