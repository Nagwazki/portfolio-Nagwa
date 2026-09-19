import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useScene } from '../SceneBackground';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4 });
  const { setActiveScene } = useScene();

  useEffect(() => {
    if (isInView) {
      setActiveScene('about'); // We'll just reuse hero if about doesn't exist in scenes dict, or use a new bg
    }
  }, [isInView, setActiveScene]);

  const codeString = `const developer = {
  name: "Noga",
  role: "Front-End Developer",
  passion: "Creative Interfaces",
  tools: [
    "HTML", "CSS", "JavaScript", 
    "GSAP", "React", "Framer Motion"
  ]
};`;

  return (
    <section ref={ref} id="about" className="relative min-h-screen flex items-center py-20 px-6">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Introduction */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Beyond the <span className="text-primary glow-text">Code</span>
          </h2>
          <div className="space-y-4 text-muted text-lg leading-relaxed">
            <p>
              I am a passionate software engineer focused on crafting digital experiences that go beyond standard web design. 
              I blend technical precision with creative vision.
            </p>
            <p>
              My approach focuses on fluid motion, immersive storytelling, and pixel-perfect UI execution, turning complex ideas into 
              intuitive, cinematic interfaces.
            </p>
          </div>
        </motion.div>

        {/* Right: Interactive Code Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="perspective-1000"
        >
          <motion.div 
            whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="glass-panel p-8 rounded-2xl shadow-2xl relative overflow-hidden"
          >
            {/* Top Bar */}
            <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-4 font-mono text-xs text-muted">developer.js</span>
            </div>
            
            {/* Typing Effect Code */}
            <pre className="font-mono text-sm md:text-base leading-loose overflow-x-auto">
              <code className="text-textMain">
                {codeString.split('\n').map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-muted mr-4 select-none">{i + 1}</span>
                    <span dangerouslySetInnerHTML={{
                      __html: line
                        .replace(/const/g, '<span class="text-secondary">const</span>')
                        .replace(/"(.*?)"/g, '<span class="text-green-400">"$1"</span>')
                        .replace(/name:|role:|passion:|tools:/g, '<span class="text-primary">$&</span>')
                    }} />
                  </motion.div>
                ))}
              </code>
            </pre>
            <motion.div 
              animate={{ opacity: [1, 0] }} 
              transition={{ repeat: Infinity, duration: 0.8, ease: "steps(2)" }}
              className="w-2 h-5 bg-primary inline-block ml-1 align-middle mt-2"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
