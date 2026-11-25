import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useScene } from '../SceneBackground';
import { ExternalLink, Code } from 'lucide-react';
import theTemplateImg from '../../assets/projects/the_template.jpg';
import adhamMamdouhImg from '../../assets/projects/adham_mamdouh.jpg';
import habibaKhidrImg from '../../assets/projects/habiba_khidr.jpg';
import oleCafeImg from '../../assets/projects/ole_cafe.jpg';
import concordImg from '../../assets/projects/concord.jpg';
import aymanDesignImg from '../../assets/projects/ayman_design.jpg';
import janaDesignImg from '../../assets/projects/jana_design.jpg';

const projects = [
  {
    id: 1,
    name: 'Abdelrahman',
    type: 'Portfolio Website',
    desc: 'Personal portfolio and branding website for Abdelrahman - Content Creator, Model & Life Coach.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    image: theTemplateImg,
    link: 'https://nagwazki.github.io/the_template/',
    github: 'https://github.com/nagwazki/the_template'
  },
  {
    id: 2,
    name: 'Adham Mamdouh',
    type: 'Video Editor Portfolio',
    desc: 'Cinematic video editor portfolio showcasing stories through motion, reels, films, and motion graphics.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    image: adhamMamdouhImg,
    link: 'https://nagwazki.github.io/Adhammamdoh/',
    github: 'https://github.com/nagwazki/Adhammamdoh'
  },
  {
    id: 3,
    name: 'Habiba Khidr',
    type: 'Video Editor & Monter',
    desc: 'Portfolio website for Habiba Khidr - Monter turning raw footage into stories that feel.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    image: habibaKhidrImg,
    link: 'https://nagwazki.github.io/habiba/',
    github: 'https://github.com/nagwazki/habiba'
  },
  {
    id: 4,
    name: 'OLÉ',
    type: 'Cafe Menu & Portfolio',
    desc: 'Interactive digital menu and portfolio for Olé Coffee & Croffle with smooth animations and gaming lounge showcases.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'GSAP'],
    image: oleCafeImg,
    link: 'https://ole-cafe.wuaze.com/',
    github: 'https://github.com/nagwazki/ole-cafe'
  },
  {
    id: 5,
    name: 'CONCORD',
    type: 'Marketing & Development Agency',
    desc: 'Digital marketing and development agency platform - growing brands and building modern digital solutions.',
    tech: ['Tailwind CSS', 'Vanilla.js', 'GSAP'],
    image: concordImg,
    link: 'https://concord.freehosting.dev/',
    github: 'https://github.com/nagwazki/concord'
  },
  {
    id: 6,
    name: 'Ayman Elshanwany',
    type: 'Graphic Design & Marketing',
    desc: 'Creative portfolio for Ayman - Graphic Designer & Digital Marketing Specialist crafting bold visual identities.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'UI/UX'],
    image: aymanDesignImg,
    link: 'https://nagwazki.github.io/ayman-elshanwany/',
    github: 'https://github.com/nagwazki/ayman-elshanwany'
  },
  {
    id: 7,
    name: 'Jana Ahmed',
    type: 'Creative Graphic Designer',
    desc: 'Portfolio website for Jana Ahmed - Creative Graphic Designer & Motion Graphics specialist transforming ideas into visual experiences.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'UI/UX'],
    image: janaDesignImg,
    link: 'https://nagwazki.github.io/janagraphicdesign/',
    github: 'https://github.com/nagwazki/janagraphicdesign'
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