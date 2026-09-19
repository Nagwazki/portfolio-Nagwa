import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useScene } from '../SceneBackground';
import { HtmlIcon, CssIcon, JsIcon, TsIcon, ReactIcon, TailwindIcon, FigmaIcon, GsapIcon } from './TechIcons';
import { X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const techNodes = [
  { id: 'react', name: 'React', type: 'major', icon: ReactIcon, role: 'Frontend Architecture', projects: 4, desc: 'Component-based interactive interfaces', color: '#61DAFB', left: 30, top: 25, size: 80 },
  { id: 'js', name: 'JavaScript', type: 'major', icon: JsIcon, role: 'Core Logic', projects: 8, desc: 'Dynamic logic & interaction', color: '#F7DF1E', left: 70, top: 30, size: 80 },
  { id: 'gsap', name: 'GSAP', type: 'major', icon: GsapIcon, role: 'Animation Engine', projects: 3, desc: 'High-performance animation & interaction', color: '#88CE02', left: 45, top: 75, size: 80 },
  { id: 'ts', name: 'TypeScript', type: 'minor', icon: TsIcon, role: 'Type Safety', projects: 5, desc: 'Scalable and type-safe JavaScript', color: '#3178C6', left: 12, top: 45, size: 60 },
  { id: 'tailwind', name: 'Tailwind CSS', type: 'minor', icon: TailwindIcon, role: 'Styling', projects: 6, desc: 'Utility-first rapid styling', color: '#06B6D4', left: 75, top: 65, size: 60 },
  { id: 'figma', name: 'Figma', type: 'minor', icon: FigmaIcon, role: 'Design', projects: 2, desc: 'Interface design & visual systems', color: '#A259FF', left: 85, top: 15, size: 60 },
  { id: 'html', name: 'HTML5', type: 'minor', icon: HtmlIcon, role: 'Structure', projects: 8, desc: 'Semantic document structure', color: '#E34F26', left: 15, top: 15, size: 55 },
  { id: 'css', name: 'CSS3', type: 'minor', icon: CssIcon, role: 'Styling', projects: 8, desc: 'Advanced styling & layouts', color: '#1572B6', left: 25, top: 80, size: 55 },
  { id: 'vanilla', name: 'Vanilla JS', type: 'minor', icon: JsIcon, role: 'Core Logic', projects: 3, desc: 'Native browser APIs and logic', color: '#F7DF1E', left: 55, top: 10, size: 55, isVanilla: true }
];

const connections = [
  ['react', 'ts'],
  ['js', 'gsap'],
  ['figma', 'tailwind'],
  ['html', 'css'],
  ['js', 'vanilla'],
  ['react', 'js']
];

export default function Skills() {
  const containerRef = useRef(null);
  const ecosystemRef = useRef(null);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [activeNode, setActiveNode] = useState(null);
  const { setActiveScene } = useScene();
  
  // Track scroll for background scene
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top center",
      onEnter: () => setActiveScene('skills'),
      onEnterBack: () => setActiveScene('skills')
    });
  }, { scope: containerRef });

  // Main animations
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%",
      }
    });

    // Central hub entrance
    tl.fromTo('.hub-element', 
      { opacity: 0, scale: 0.85, filter: 'blur(10px)', xPercent: -50, yPercent: -50 },
      { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.5, ease: 'power3.out', xPercent: -50, yPercent: -50 }
    );

    // Staggered node entrance
    tl.fromTo('.tech-node',
      { opacity: 0, scale: 0.5, filter: 'blur(5px)', y: 30, xPercent: -50, yPercent: -50 },
      { opacity: 1, scale: 1, filter: 'blur(0px)', y: 0, duration: 1, stagger: 0.1, ease: 'back.out(1.2)', xPercent: -50, yPercent: -50 },
      "-=1"
    );

    // Idle floating animations
    gsap.utils.toArray('.tech-node').forEach((node) => {
      const isMajor = node.dataset.type === 'major';
      
      // Floating
      gsap.to(node, {
        y: `+=${gsap.utils.random(10, 20)}`,
        x: `+=${gsap.utils.random(-10, 10)}`,
        rotation: gsap.utils.random(-5, 5),
        duration: gsap.utils.random(3, 6),
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: gsap.utils.random(0, 2)
      });
      
      // Major nodes slow orbit simulation via subtle circular motion
      if (isMajor) {
        gsap.to(node, {
          x: `+=${gsap.utils.random(15, 25)}`,
          y: `+=${gsap.utils.random(15, 25)}`,
          duration: gsap.utils.random(8, 12),
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        });
      }
    });

  }, { scope: containerRef });

  // Mouse Parallax Interaction
  const handleMouseMove = (e) => {
    if (!ecosystemRef.current) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    // Normalize coordinates (-1 to 1)
    const x = (clientX / innerWidth) * 2 - 1;
    const y = (clientY / innerHeight) * 2 - 1;

    gsap.to('.tech-node', {
      x: -x * 20,
      y: -y * 20,
      duration: 1,
      ease: 'power2.out',
      overwrite: 'auto'
    });
    
    gsap.to('.hub-element', {
      x: -x * 10,
      y: -y * 10,
      duration: 1,
      ease: 'power2.out',
      overwrite: 'auto'
    });
  };

  const handleMouseLeave = () => {
    gsap.to(['.tech-node', '.hub-element'], {
      x: 0,
      y: 0,
      duration: 1,
      ease: 'power2.out',
      overwrite: 'auto'
    });
  };

  // Info Panel Animation
  useEffect(() => {
    if (activeNode) {
      gsap.fromTo('.info-panel',
        { opacity: 0, x: 20, filter: 'blur(5px)' },
        { opacity: 1, x: 0, filter: 'blur(0px)', duration: 0.5, ease: 'power3.out' }
      );
    }
  }, [activeNode]);

  return (
    <section 
      ref={containerRef} 
      id="skills" 
      className="relative min-h-screen flex items-center justify-center py-20 px-6 overflow-hidden bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-[#0A051A] via-background to-background"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]"></div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-12 z-20 pointer-events-none">
          <p className="text-xs font-mono text-primary tracking-[0.2em] mb-2 uppercase">01 / Skills</p>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Technology Ecosystem</h2>
          <p className="text-muted text-sm mt-2 max-w-md mx-auto">Tools I use to turn ideas into interactive experiences.</p>
        </div>

        {/* Ecosystem Container */}
        <div ref={ecosystemRef} className="relative w-full aspect-square md:aspect-video max-w-5xl mt-8">
          
          {/* Connection Lines Layer */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30 z-0">
            {connections.map(([id1, id2], i) => {
              const node1 = techNodes.find(n => n.id === id1);
              const node2 = techNodes.find(n => n.id === id2);
              const isActive = hoveredNode === id1 || hoveredNode === id2;
              return (
                <line 
                  key={i}
                  x1={`${node1.left}%`} 
                  y1={`${node1.top}%`} 
                  x2={`${node2.left}%`} 
                  y2={`${node2.top}%`} 
                  stroke={isActive ? 'rgba(155, 108, 255, 0.8)' : 'rgba(255, 255, 255, 0.1)'}
                  strokeWidth={isActive ? "2" : "1"}
                  className="transition-all duration-500"
                />
              );
            })}
          </svg>

          {/* Central Hub Element */}
          <div className="hub-element absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-10 pointer-events-none">
            <div className="absolute w-75 h-75 bg-primary/10 rounded-full blur-[80px]"></div>
            <h3 className="font-mono text-xl md:text-3xl font-bold tracking-[0.15em] text-white/90 drop-shadow-[0_0_15px_rgba(155,108,255,0.5)]">
              CODE <span className="text-primary font-light mx-2">×</span> CREATIVITY
            </h3>
          </div>

          {/* Tech Nodes */}
          {techNodes.map((node) => {
            const Icon = node.icon;
            const isHovered = hoveredNode === node.id;
            const isFaded = hoveredNode && hoveredNode !== node.id;
            
            return (
              <div 
                key={node.id}
                className="tech-node absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group"
                style={{ 
                  left: `${node.left}%`, 
                  top: `${node.top}%`,
                  width: node.size,
                  height: node.size
                }}
                data-type={node.type}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                onClick={() => setActiveNode(node)}
              >
                {/* Node Glass Container */}
                <div 
                  className={`w-full h-full rounded-2xl glass-panel flex items-center justify-center border border-white/10 transition-all duration-500 ${
                    isHovered ? 'scale-110 bg-white/10 border-white/30 shadow-[0_0_30px_rgba(155,108,255,0.3)]' : ''
                  } ${isFaded ? 'opacity-30 blur-[2px]' : 'opacity-100'}`}
                >
                  <Icon className="w-1/2 h-1/2" style={{ color: node.color, filter: isHovered ? `drop-shadow(0 0 10px ${node.color})` : 'none' }} />
                  {node.isVanilla && (
                    <span className="absolute bottom-1 right-1 text-[8px] font-mono font-bold text-black bg-yellow-400 px-1 rounded-sm">V</span>
                  )}
                </div>

                {/* Tooltip */}
                <div 
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 pointer-events-none transition-all duration-300 w-48 text-center ${
                    isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                  }`}
                >
                  <div className="bg-background/80 backdrop-blur-md border border-white/10 p-3 rounded-lg shadow-xl">
                    <h4 className="text-white font-bold text-sm mb-1">{node.name}</h4>
                    <p className="text-muted text-[10px] leading-tight mb-2">{node.desc}</p>
                    <p className="text-primary text-[10px] font-mono">{node.name} → Used in {node.projects < 10 ? `0${node.projects}` : node.projects} Projects</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Info Panel Overlay */}
      {activeNode && (
        <div className="fixed inset-0 z-50 flex items-center justify-center md:items-end md:justify-end md:p-12 pointer-events-none">
          <div className="absolute inset-0 bg-background/60 backdrop-blur-sm pointer-events-auto" onClick={() => setActiveNode(null)}></div>
          
          <div className="info-panel pointer-events-auto relative bg-surface/90 backdrop-blur-xl border border-white/10 p-8 rounded-2xl w-[90%] max-w-sm shadow-[0_20px_50px_rgba(0,0,0,0.5)] md:translate-x-0">
            <button 
              onClick={() => setActiveNode(null)}
              className="absolute top-4 right-4 text-muted hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl glass-panel flex items-center justify-center bg-white/5 border border-white/10">
                <activeNode.icon className="w-6 h-6" style={{ color: activeNode.color }} />
              </div>
              <div>
                <p className="text-[10px] tracking-widest text-primary font-mono uppercase">Technology</p>
                <h3 className="text-xl font-bold text-white">{activeNode.name}</h3>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <p className="text-[10px] tracking-widest text-muted font-mono uppercase mb-1">Role</p>
                <p className="text-sm text-white/90">{activeNode.role}</p>
              </div>
              
              <div>
                <p className="text-[10px] tracking-widest text-muted font-mono uppercase mb-1">Used For</p>
                <p className="text-sm text-white/70 leading-relaxed">{activeNode.desc}</p>
              </div>
              
              <div className="pt-4 border-t border-white/10">
                <p className="text-[10px] tracking-widest text-muted font-mono uppercase mb-2">Related Projects</p>
                <div className="flex gap-2">
                  {[...Array(Math.min(3, activeNode.projects))].map((_, i) => (
                    <div key={i} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs font-mono text-primary hover:bg-primary hover:text-white transition-colors cursor-pointer">
                      0{i + 1}
                    </div>
                  ))}
                  {activeNode.projects > 3 && (
                    <div className="px-2 py-1 text-xs font-mono text-muted flex items-center">
                      +{activeNode.projects - 3} more
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
