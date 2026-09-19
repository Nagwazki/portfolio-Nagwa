import React from 'react';

export default function Frame({ title, children, className = '', id = '' }) {
  return (
    <div className={`digital-frame ${className}`} id={id}>
      <div className="frame-header">
        <div className="frame-controls">
          <div className="control-dot"></div>
          <div className="control-dot"></div>
          <div className="control-dot"></div>
        </div>
        <div className="frame-title">{title}</div>
      </div>
      <div className="frame-content">
        {children}
      </div>
    </div>
  );
}