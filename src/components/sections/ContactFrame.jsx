import React, { useState } from 'react';
import Frame from '../Frame';
import './Sections.css';

export default function ContactFrame() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending message...');
    setTimeout(() => {
      setStatus('Message delivered successfully!');
    }, 1500);
  };

  return (
    <section className="section-container" id="contact">
      <Frame title="contact_terminal" className="contact-frame">
        <div className="content-padding">
          <div className="terminal-prompt">
            <span className="user">guest@portfolio</span>:<span className="path">~/contact</span>$ ./send_message.sh
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name:</label>
              <input type="text" required className="terminal-input" placeholder="_" />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input type="email" required className="terminal-input" placeholder="_" />
            </div>
            <div className="form-group">
              <label>Message:</label>
              <textarea required className="terminal-input" rows="4" placeholder="_"></textarea>
            </div>
            <button type="submit" className="terminal-btn">[ Execute ]</button>
          </form>
          {status && <div className="terminal-status">{status}</div>}
        </div>
      </Frame>
    </section>
  );
}
