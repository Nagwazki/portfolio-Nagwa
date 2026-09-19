import React from 'react';
import Frame from '../Frame';
import './HeroFrame.css';

export default function HeroFrame() {
  return (
    <section className="section-container" id="hero">
      <Frame title="hero_intro.html" className="hero-frame">
        <div className="hero-content">
          <p className="greeting">Hi, I'm</p>
          <h1 className="name glow-text">Nagwa</h1>
          <h2 className="role">Creative Developer & UI/UX Engineer</h2>
          <p className="bio">
            I craft digital experiences using a blend of creative design,
            solid engineering, and modern web technologies. 
            Welcome to my interactive portfolio window.
          </p>
          <div className="hero-actions">
            <button className="primary-btn">View Projects</button>
            <button className="secondary-btn">Contact Me</button>
          </div>
        </div>
      </Frame>
    </section>
  );
}
