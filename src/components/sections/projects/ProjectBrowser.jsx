import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProjectBrowser({ project, onExplore }) {
  return (
    <div className="w-full max-w-5xl mx-auto rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-surface/40 backdrop-blur-md flex flex-col group transition-shadow hover:shadow-primary/20 hover:shadow-2xl">
      
      {/* Browser Header */}
      <div className="h-10 border-b border-white/10 bg-black/40 flex items-center px-4 justify-between">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        </div>
        
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center px-4 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] font-mono text-muted/60 w-64 text-center">
          noga.dev/projects/{project.name.toLowerCase().replace(/\s+/g, '-')}
        </div>
        
        <div></div>
      </div>

      {/* Browser Body / Preview */}
      <div className="flex flex-row relative h-full min-h-[250px] md:min-h-[400px]">
        
        {/* Left Side: Preview Image */}
        <div className="w-1/2 md:w-[65%] relative overflow-hidden bg-black/60 h-full">
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10"></div>
          <motion.img 
            src={project.image} 
            alt={project.name}
            className="w-full h-full object-cover origin-center transition-transform duration-[1.5s] ease-out group-hover:scale-105"
          />
        </div>

        {/* Right Side: Information Panel */}
        <div className="w-1/2 md:w-[35%] p-3 md:p-8 flex flex-col justify-between border-l border-white/5 bg-black/20">
          <div>
            <div className="font-mono text-primary text-[10px] md:text-sm tracking-widest mb-2 md:mb-4">
              {String(project.id).padStart(2, '0')}
            </div>
            
            <h3 className="text-xl md:text-4xl font-bold text-textMain tracking-tight mb-1 md:mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-primary transition-all duration-300">
              {project.name.toUpperCase()}
            </h3>
            
            <p className="text-muted text-[10px] md:text-sm leading-snug md:leading-relaxed mb-2 md:mb-6 line-clamp-3 md:line-clamp-none">
              {project.desc}
            </p>
          </div>
          
          <div>
            <div className="flex flex-wrap gap-1 mb-4 md:mb-8">
              {project.tech.map(tech => (
                <span key={tech} className="font-mono text-[8px] md:text-[11px] text-muted/80 uppercase tracking-widest">
                  {tech}
                </span>
              ))}
            </div>
            
            <a 
              href={project.link || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex items-center gap-1 md:gap-2 w-fit text-[10px] md:text-xs font-mono text-textMain hover:text-primary transition-colors uppercase tracking-widest cursor-pointer"
            >
              Explore 
              <ExternalLink size={12} className="md:w-[14px] md:h-[14px] transform transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
            </a>
          </div>
        </div>
        
      </div>
    </div>
  );
}
