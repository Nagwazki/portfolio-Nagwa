import React, { useState } from 'react';
import Frame from '../Frame';
import './Sections.css';

export default function ProjectsFrame() {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    { id: 1, name: 'Quantum UI', type: 'Design System', icon: '🎨' },
    { id: 2, name: 'Neon Commerce', type: 'E-commerce App', icon: '🛒' },
    { id: 3, name: 'Synthwave Engine', type: 'WebGL Game', icon: '🎮' },
    { id: 4, name: 'Holo Dashboard', type: 'Analytics', icon: '📊' }
  ];

  return (
    <section className="section-container" id="projects">
      <Frame title="/home/projects" className="projects-frame">
        <div className="content-padding">
          <div className="file-explorer">
            {projects.map(proj => (
              <div 
                key={proj.id} 
                className="folder-item"
                onClick={() => setActiveProject(proj.id)}
              >
                <div className="folder-icon">{proj.icon}</div>
                <div className="folder-name">{proj.name}</div>
                <div className="folder-type">{proj.type}</div>
              </div>
            ))}
          </div>
          {activeProject && (
            <div className="project-detail-overlay" onClick={() => setActiveProject(null)}>
              <div className="project-detail-modal" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                  <h3>Project Details</h3>
                  <button className="close-btn" onClick={() => setActiveProject(null)}>✕</button>
                </div>
                <div className="modal-body">
                  <p>Details for {projects.find(p => p.id === activeProject).name} loading...</p>
                  <div className="mock-image-placeholder"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Frame>
    </section>
  );
}
