import React, { useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import MagneticButton from '../MagneticButton';
import { useScene } from '../SceneBackground';
import { Terminal, Code2 } from 'lucide-react';

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const { setActiveScene } = useScene();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Parallax effects
  const yText = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const yWindows = useTransform(scrollYProgress, [0, 1], [0, 50]);

  useEffect(() => {
    if (isInView) {
      setActiveScene('hero');
    }
  }, [isInView, setActiveScene]);

  // Floating animation configs
  const floatAnimation = (delay = 0, yOffset = 15) => ({
    y: [-yOffset, yOffset],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
      delay: delay
    }
  });

  return (
    <section ref={ref} id="hero" className="relative min-h-screen flex items-center pt-20 px-6 bg-[url('/hero-bg.png')] bg-fixed bg-cover" style={{ backgroundPosition: 'right 20%' }}>
      {/* Overlay to ensure text remains readable over the image */}
      <div className="absolute inset-0 bg-background/30 bg-linear-to-t from-background via-background/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10 flex">
        
        {/* Left Content Area */}
        <motion.div 
          style={{ y: yText }}
          className="max-w-2xl"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-8xl font-bold mb-4 tracking-tight"
          >
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-secondary">Nagwa Zaki</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl md:text-3xl text-textMain/90 font-medi      um mb-6"
          >
            Front-End Developer <br />
            <span className="text-muted text-xl">& Creative Coder</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-muted max-w-lg mb-10 text-lg leading-relaxed"
          >
            I build immersive, interactive digital experiences where code meets creativity. 
            Crafting the web of tomorrow, today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap gap-4"
          >
            <MagneticButton variant="primary">
              View My Work
            </MagneticButton>
            <MagneticButton variant="secondary">
              Let's Build Something
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Floating Code Elements (Parallax) */}
        <motion.div style={{ y: yWindows }} className="absolute inset-0 pointer-events-none hidden lg:block">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, ...floatAnimation(0, 20) }}
            transition={{ opacity: { duration: 1, delay: 1.2 } }}
            className="absolute right-[10%] top-[20%] glass-panel p-4 rounded-xl shadow-2xl"
          >
            <Terminal className="text-primary mb-2" size={20} />
            <div className="font-mono text-xs text-muted">
              <span className="text-secondary">const</span> <span className="text-textMain">stack</span> = [<br/>
              &nbsp;&nbsp;<span className="text-green-400">'React'</span>,<br/>
              &nbsp;&nbsp;<span className="text-green-400">'Framer Motion'</span><br/>
              ];
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, ...floatAnimation(1, 15) }}
            transition={{ opacity: { duration: 1, delay: 1.5 } }}
            className="absolute right-[45%] top-[15%] glass-panel p-3 rounded-full flex items-center justify-center border border-primary/30 neon-glow"
          >
            <Code2 className="text-primary" size={24} />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
