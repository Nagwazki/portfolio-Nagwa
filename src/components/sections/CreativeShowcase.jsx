import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useScene } from '../SceneBackground';
import { Layers, MousePointer2, Wand2 } from 'lucide-react';

export default function CreativeShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });
  const { setActiveScene } = useScene();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isInView) setActiveScene('showcase');
  }, [isInView, setActiveScene]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setMousePos({ x, y });
  };

  const calculateTransform = (factor) => ({
    x: mousePos.x * factor,
    y: mousePos.y * factor,
  });

  return (
    <section 
      ref={ref} 
      id="showcase" 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen py-24 px-6 overflow-hidden flex items-center justify-center"
    >
      
      <div className="text-center relative z-20 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Wand2 className="mx-auto text-primary mb-4" size={48} />
          <h2 className="text-5xl md:text-7xl font-bold mb-4">Creative <br/><span className="text-transparent bg-clip-text bg-linear-to-r from-white to-secondary">Workspace</span></h2>
          <p className="text-muted text-lg max-w-md mx-auto">
            Where logic meets imagination. Move your mouse to explore the floating fragments of my digital universe.
          </p>
        </motion.div>
      </div>

      {/* Floating Elements layer */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        
        {/* Code Snippet 1 */}
        <motion.div
          animate={calculateTransform(100)}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="absolute top-[20%] left-[10%] glass-panel p-4 rounded-lg shadow-lg rotate-12 opacity-80"
        >
          <pre className="font-mono text-xs text-green-400">
            <code>{'<motion.div\n  whileHover={{ scale: 1.1 }}\n/>'}</code>
          </pre>
        </motion.div>

        {/* UI Fragment */}
        <motion.div
          animate={calculateTransform(-150)}
          transition={{ type: "spring", stiffness: 40, damping: 15 }}
          className="absolute bottom-[20%] right-[15%] glass-panel p-3 rounded-full flex items-center gap-2 shadow-xl opacity-90 border-primary/30 neon-glow -rotate-6"
        >
          <div className="w-8 h-8 rounded-full bg-linear-to-tr from-primary to-secondary"></div>
          <div className="w-16 h-2 bg-white/20 rounded-full"></div>
        </motion.div>

        {/* Small Terminal */}
        <motion.div
          animate={calculateTransform(80)}
          transition={{ type: "spring", stiffness: 60, damping: 25 }}
          className="absolute top-[30%] right-[20%] glass-panel p-3 rounded-lg shadow-xl opacity-70 w-48 border border-white/5"
        >
          <div className="flex gap-1 mb-2">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
          </div>
          <div className="font-mono text-[10px] text-muted">
            <span className="text-primary">~</span>$ npm run build<br/>
            <span className="text-green-400">✓ compiled successfully</span>
          </div>
        </motion.div>

        {/* Design Element */}
        <motion.div
          animate={calculateTransform(-80)}
          transition={{ type: "spring", stiffness: 70, damping: 30 }}
          className="absolute bottom-[30%] left-[20%] glass-panel p-5 rounded-2xl shadow-xl opacity-60 rotate-45"
        >
          <Layers className="text-secondary" size={32} />
        </motion.div>
        
        {/* Floating Cursor Hint */}
        <motion.div
          animate={calculateTransform(50)}
          transition={{ type: "spring", stiffness: 100, damping: 40 }}
          className="absolute top-[10%] left-[45%] text-primary/50 animate-pulse"
        >
          <MousePointer2 size={24} />
        </motion.div>

      </div>
    </section>
  );
}
