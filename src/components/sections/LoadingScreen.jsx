import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './LoadingScreen.css';

export default function LoadingScreen({ onComplete }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [text, setText] = useState('Initializing terminal...');

  useEffect(() => {
    const sequence = [
      'Booting system...',
      'Loading core modules...',
      'Injecting creativity...',
      'Starting Nagwa OS v1.0...',
    ];

    let i = 0;
    const interval = setInterval(() => {
      if (i < sequence.length) {
        setText(sequence[i]);
        i++;
      } else {
        clearInterval(interval);
        // Start exit animation
        gsap.to(containerRef.current, {
          opacity: 0,
          scale: 1.1,
          duration: 0.8,
          ease: 'power2.inOut',
          onComplete: () => {
            if (onComplete) onComplete();
          }
        });
      }
    }, 600);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="loading-screen" ref={containerRef}>
      <div className="terminal-container">
        <div className="terminal-header">
          <div className="control-dot"></div>
          <div className="control-dot"></div>
          <div className="control-dot"></div>
        </div>
        <div className="terminal-body" ref={textRef}>
          <p className="typewriter-text">{text}<span className="cursor">_</span></p>
        </div>
      </div>
    </div>
  );
}
