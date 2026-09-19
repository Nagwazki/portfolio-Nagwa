import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export default function MagneticButton({ children, className, variant = 'primary', onClick }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = "relative px-8 py-3 rounded-lg font-mono text-sm tracking-wider overflow-hidden transition-colors duration-300";
  
  const variants = {
    primary: "bg-primary/90 hover:bg-primary text-white neon-glow border border-primary/50",
    secondary: "bg-surface/50 text-textMain border border-white/10 hover:border-primary/50 hover:bg-surface",
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={twMerge(clsx(baseStyles, variants[variant], className))}
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
      {/* Subtle background glow effect on hover */}
      <div className="absolute inset-0 bg-white/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
    </motion.button>
  );
}
