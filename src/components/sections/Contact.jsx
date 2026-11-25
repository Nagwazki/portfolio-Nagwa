import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useScene } from '../SceneBackground';
import { Mail, Globe } from 'lucide-react';
import MagneticButton from '../MagneticButton';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  const { setActiveScene } = useScene();
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (isInView) setActiveScene('contact');
  }, [isInView, setActiveScene]);

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    // Egyptian WhatsApp international format: Country Code (20) + Mobile (1225127569)
    const whatsappNumber = "201225127569"; 
    
    // If input is filled, send their custom typed message. If empty, send a default greeting!
    const messageContent = inputValue.trim() 
      ? inputValue 
      : "Hi Nagwa, I'd like to work with you on a project!";
      
    const encodedMessage = encodeURIComponent(messageContent);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    const win = window.open(whatsappUrl, '_blank');
    if (!win) {
      window.location.href = whatsappUrl;
    }
    
    if (inputValue.trim()) {
      setInputValue('');
    }
  };

  return (
    <section ref={ref} id="contact" className="relative min-h-screen py-24 px-6 flex flex-col items-center justify-center bg-[url('/contact.png')] bg-fixed bg-cover bg-center">
      <div className="absolute inset-0 bg-background/70 bg-linear-to-t from-background via-background/50 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto w-full text-center relative z-20">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Wanna build something <span className="text-primary glow-text">amazing?</span>
          </h2>
          <p className="text-2xl text-muted mb-16">
            Let's create something people remember.
          </p>
        </motion.div>

        {/* Terminal Component */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-left mb-16"
        >
          <div className="glass-panel p-6 rounded-xl border border-white/10 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-4">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#289642]"></div>
                <span className="ml-2 font-mono text-xs text-muted">guest@nevo.dev:~</span>
              </div>

              <div className="font-mono text-lg mb-4">
                <span className="text-primary mr-2">❯</span> 
                <span className="text-textMain">hello@nevo.dev</span>
              </div>
              
              <form onSubmit={handleSubmit} className="flex items-center font-mono text-lg relative z-20">
                <span className="text-primary mr-2">❯</span>
                <input 
                  type="text" 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="type a message..." 
                  className="bg-transparent border-none outline-none text-green-400 w-full placeholder:text-muted/50 cursor-text pointer-events-auto"
                />
                <span className="animate-pulse w-2 h-5 bg-textMain inline-block ml-1"></span>
              </form>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-10"
        >
          <MagneticButton variant="primary" className="text-lg px-12 py-4" onClick={handleSubmit}>
            Send Message...
          </MagneticButton>

          <div className="flex items-center gap-5 mt-4">
            {/* GitHub */}
            <a 
              href="https://github.com/Nagwazki" 
              target="_blank" 
              rel="noreferrer" 
              className="p-3.5 bg-surface rounded-full text-muted hover:text-white hover:border-white/30 hover:neon-glow hover:-translate-y-1 transition-all duration-300 border border-white/5 flex items-center justify-center"
              title="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/nagwa-zaki-0354b127b?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
              target="_blank" 
              rel="noreferrer" 
              className="p-3.5 bg-surface rounded-full text-muted hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:neon-glow hover:-translate-y-1 transition-all duration-300 border border-white/5 flex items-center justify-center"
              title="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>

            {/* Instagram */}
            <a 
              href="https://www.instagram.com/nagwa__zaki?cnvx=MWJ1Y21ka2c5bzN2Yw==" 
              target="_blank" 
              rel="noreferrer" 
              className="p-3.5 bg-surface rounded-full text-muted hover:text-[#E4405F] hover:border-[#E4405F]/40 hover:neon-glow hover:-translate-y-1 transition-all duration-300 border border-white/5 flex items-center justify-center"
              title="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>

            {/* Facebook */}
            <a 
              href="https://www.facebook.com/share/19be2qZbfw/" 
              target="_blank" 
              rel="noreferrer" 
              className="p-3.5 bg-surface rounded-full text-muted hover:text-[#1877F2] hover:border-[#1877F2]/40 hover:neon-glow hover:-translate-y-1 transition-all duration-300 border border-white/5 flex items-center justify-center"
              title="Facebook"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
