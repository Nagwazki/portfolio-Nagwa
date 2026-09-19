import React, { createContext, useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Context to manage active scene globally
const SceneContext = createContext();

export const useScene = () => useContext(SceneContext);

export const SceneProvider = ({ children }) => {
  const [activeScene, setActiveScene] = useState('hero');

  return (
    <SceneContext.Provider value={{ activeScene, setActiveScene }}>
      {children}
    </SceneContext.Provider>
  );
};

export default function SceneBackground({ scenes }) {
  const { activeScene } = useScene();
  const currentScene = scenes[activeScene] || scenes['hero'];

  return (
    <div className="fixed inset-0 w-full h-full z-[-1] pointer-events-none overflow-hidden bg-background">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeScene}
          initial={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${currentScene.image})`,
            backgroundPosition: currentScene.position || 'center',
          }}
        >
          {/* Overlay Gradient for readability */}
          <div className="absolute inset-0 bg-background/60 bg-linear-to-t from-background via-background/40 to-transparent"></div>
          
          {/* Subtle tech circuit pattern */}
          <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{ backgroundImage: "url('/circuit.svg')", backgroundSize: '400px' }}></div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
