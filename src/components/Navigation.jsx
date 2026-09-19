import React from 'react';
import './Navigation.css';

export default function Navigation() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="dock-navigation">
      <ul className="dock-list">
        <li className="dock-item" onClick={() => scrollToSection('hero')} title="Home">
          <div className="dock-icon home-icon"></div>
        </li>
        <li className="dock-item" onClick={() => scrollToSection('about')} title="About">
          <div className="dock-icon about-icon"></div>
        </li>
        <li className="dock-item" onClick={() => scrollToSection('skills')} title="Skills">
          <div className="dock-icon skills-icon"></div>
        </li>
        <li className="dock-item" onClick={() => scrollToSection('projects')} title="Projects">
          <div className="dock-icon projects-icon"></div>
        </li>
        <li className="dock-item" onClick={() => scrollToSection('contact')} title="Contact">
          <div className="dock-icon contact-icon"></div>
        </li>
      </ul>
    </nav>
  );
}
