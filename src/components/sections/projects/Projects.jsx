import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Sparkles } from 'lucide-react';
import { useScene } from '../../SceneBackground';
import theTemplateImg from '../../../assets/projects/template.png';
import adhamMamdouhImg from '../../../assets/projects/adham_mamdouh.jpg';
import habibaKhidrImg from '../../../assets/projects/habiba_khidr.jpg';
import oleCafeImg from '../../../assets/projects/ole_cafe.jpg';
import concordImg from '../../../assets/projects/concord.jpg';
import aymanDesignImg from '../../../assets/projects/ayman_design.jpg';
import janaDesignImg from '../../../assets/projects/jana_design.jpg';

const projectsData = [
  {
    id: 1,
    number: '01',
    name: 'Abdelrahman',
    type: 'Portfolio Website',
    desc: 'Personal portfolio and branding website for Abdelrahman - Content Creator, Model & Life Coach.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    image: theTemplateImg,
    link: 'https://nagwazki.github.io/the_template/',
    slug: 'abdelrahman-portfolio'
  },
  {
    id: 2,
    number: '02',
    name: 'Adham Mamdouh',
    type: 'Video Editor Portfolio',
    desc: 'Cinematic video editor portfolio showcasing stories through motion, reels, films, and motion graphics.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
    image: adhamMamdouhImg,
    link: 'https://nagwazki.github.io/Adhammamdoh/',
    slug: 'adham-mamdouh'
  },
  {
    id: 3,
    number: '03',
    name: 'Habiba Khidr',
    type: 'Video Editor & Monter',
    desc: 'Portfolio website for Habiba Khidr - Monter turning raw footage into stories that feel.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'GSAP', 'React'],
    image: habibaKhidrImg,
    link: 'https://nagwazki.github.io/habiba/',
    slug: 'habiba-khidr'
  },
  {
    id: 4,
    number: '04',
    name: 'OLÉ Coffee & Croffle',
    type: 'Cafe Menu & Portfolio',
    desc: 'Interactive digital menu and portfolio for Olé Coffee & Croffle with smooth animations and gaming lounge showcases.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'GSAP'],
    image: oleCafeImg,
    link: 'https://ole-cafe.wuaze.com/',
    slug: 'ole-cafe'
  },
  {
    id: 5,
    number: '05',
    name: 'CONCORD',
    type: 'Marketing & Development Agency',
    desc: 'Digital marketing and development agency platform - growing brands and building modern digital solutions.',
    tech: ['Tailwind CSS', 'Vanilla.js', 'GSAP'],
    image: concordImg,
    link: 'https://concord.freehosting.dev/',
    slug: 'concord-agency'
  },
  {
    id: 6,
    number: '06',
    name: 'Ayman Elshanwany',
    type: 'Graphic Design & Marketing',
    desc: 'Creative portfolio for Ayman - Graphic Designer & Digital Marketing Specialist crafting bold visual identities.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'UI/UX'],
    image: aymanDesignImg,
    link: 'https://nagwazki.github.io/ayman-elshanwany/',
    slug: 'ayman-elshanwany'
  },
  {
    id: 7,
    number: '07',
    name: 'Jana Ahmed',
    type: 'Creative Graphic Designer',
    desc: 'Portfolio website for Jana Ahmed - Creative Graphic Designer & Motion Graphics specialist transforming ideas into visual experiences.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'UI/UX'],
    image: janaDesignImg,
    link: 'https://nagwazki.github.io/janagraphicdesign/',
    slug: 'jana-graphic-design'
  }
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1 });
  const { setActiveScene } = useScene();

  useEffect(() => {
    if (isInView && setActiveScene) {
      setActiveScene('projects');
    }
  }, [isInView, setActiveScene]);

  return (
    <section ref={ref} id="projects" className="relative w-full py-24 px-4 md:px-8 bg-background">
      
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-mono mb-4">
            <Sparkles size={14} />
            <span>SELECTED WORKS</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            Things I've Built <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-pink-400">
              With Code & Creativity.
            </span>
          </h2>
          <p className="text-muted text-sm md:text-base max-w-xl mx-auto">
            A curated collection of live client projects, responsive platforms, and interactive digital experiences.
          </p>
        </motion.div>

        {/* Projects Grid (2 Columns on Desktop, 1 on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              viewport={{ once: true, amount: 0.15 }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-surface/30 backdrop-blur-md hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 flex flex-col"
            >
              
              {/* Subtle hover glow layer */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Browser Header Bar */}
              <div className="h-10 px-4 bg-black/40 border-b border-white/10 flex items-center justify-between text-xs font-mono text-muted/60 select-none">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]/80 group-hover:bg-[#ff5f56] transition-colors"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]/80 group-hover:bg-[#ffbd2e] transition-colors"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]/80 group-hover:bg-[#27c93f] transition-colors"></div>
                </div>
                <div className="px-3 py-0.5 rounded-md bg-white/5 border border-white/5 text-[10px] text-muted/50 tracking-wider">
                  nevo.dev/{project.slug}
                </div>
                <span className="text-[11px] font-bold text-primary/70">{project.number}</span>
              </div>

              {/* Project Preview Image */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block w-full aspect-video overflow-hidden bg-black/50 cursor-pointer"
              >
                <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover origin-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Floating quick-open badge */}
                <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <div className="w-9 h-9 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white flex items-center justify-center shadow-lg group-hover:bg-primary group-hover:text-black transition-colors">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </a>

              {/* Project Details Panel */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between relative z-20">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-xs text-primary font-semibold tracking-wider uppercase">
                      {project.type}
                    </span>
                    <span className="text-xs font-mono text-muted/60">{project.number} / {String(projectsData.length).padStart(2, '0')}</span>
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block group/title"
                  >
                    <h3 className="text-2xl md:text-3xl font-bold text-textMain group-hover/title:text-primary transition-colors duration-300">
                      {project.name}
                    </h3>
                  </a>

                  <p className="text-muted text-sm leading-relaxed mt-2.5 mb-6">
                    {project.desc}
                  </p>
                </div>

                <div>
                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono bg-white/5 border border-white/10 rounded-md text-muted/90 group-hover:border-primary/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Explore Button */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-primary text-textMain hover:text-black border border-white/10 hover:border-primary text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer shadow-md hover:shadow-primary/30"
                    >
                      <span>Explore Live Site</span>
                      <ExternalLink size={14} />
                    </a>

                    <span className="text-xs font-mono text-muted/40 hidden sm:inline">
                      Live Project ↗
                    </span>
                  </div>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
