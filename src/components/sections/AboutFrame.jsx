import React from 'react';
import Frame from '../Frame';
import './Sections.css';

export default function AboutFrame() {
  return (
    <section className="section-container" id="about">
      <Frame title="about_me.exe" className="about-frame">
        <div className="content-padding">
          <h2 className="section-title">About <span className="highlight">Me</span></h2>
          <div className="about-grid">
            <div className="about-text">
              <p>
                I am a passionate software engineer with a strong focus on creating interactive 
                and visually stunning user interfaces. I bridge the gap between design and engineering.
              </p>
              <p>
                When I'm not coding, you can find me exploring new web technologies, 
                tinkering with animations, or designing system architectures.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat-box">
                <div className="stat-number glow-text">5+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-box">
                <div className="stat-number glow-text">50+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </Frame>
    </section>
  );
}
