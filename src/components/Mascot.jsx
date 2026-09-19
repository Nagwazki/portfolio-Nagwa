import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Mascot.css';
import mascotImg from '../assets/hero.png';

export default function Mascot() {
  const mascotRef = useRef(null);

  useEffect(() => {
    // Gentle floating animation
    gsap.to(mascotRef.current, {
      y: -15,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });
  }, []);

  return (
    <div className="mascot-container" ref={mascotRef}>
      <img src={mascotImg} alt="Mascot" className="mascot-image" />
    </div>
  );
}
