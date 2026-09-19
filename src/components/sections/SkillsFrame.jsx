import React from 'react';
import Frame from '../Frame';
import './Sections.css';

export default function SkillsFrame() {
  const codeSnippet = `const skills = {
  languages: ['JavaScript', 'TypeScript', 'HTML/CSS'],
  frameworks: ['React', 'Next.js', 'Vue'],
  animation: ['GSAP', 'Framer Motion', 'Three.js'],
  tools: ['Git', 'Webpack', 'Figma']
};

function buildAmazingThings() {
  return skills.map(skill => master(skill));
}`;

  return (
    <section className="section-container" id="skills">
      <Frame title="skills.js" className="skills-frame">
        <div className="content-padding code-editor">
          <div className="editor-sidebar">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="line-number">{i + 1}</div>
            ))}
          </div>
          <div className="editor-content">
            <pre className="typewriter-code">
              <code>{codeSnippet}</code>
            </pre>
          </div>
        </div>
      </Frame>
    </section>
  );
}
