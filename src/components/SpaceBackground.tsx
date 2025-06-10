import React from 'react';
import { motion } from 'framer-motion';

const SpaceBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden bg-[radial-gradient(ellipse_at_bottom,_#1B2735_0%,_#090A0F_100%)] dark:bg-[radial-gradient(ellipse_at_bottom,_#090A0F_0%,_#000000_100%)]">
      {/* Stars */}
      <div className="stars absolute w-full h-full">
        {[...Array(200)].map((_, i) => (
          <div
            key={i}
            className="star absolute w-0.5 h-0.5 bg-white rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random(),
            }}
          />
        ))}
      </div>

      {/* Shooting stars */}
      <div className="shooting-stars absolute w-full h-full">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="shooting-star absolute w-1 h-1 bg-white rounded-full animate-shooting-star"
            style={{
              top: `${Math.random() * 50}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>
      
      {/* Animated gradient overlay */}
      <motion.div 
        className="absolute inset-0 opacity-30 dark:opacity-40"
        style={{
          background: 'linear-gradient(45deg, rgba(67, 56, 202, 0.1) 0%, rgba(17, 24, 39, 0.4) 100%)',
        }}
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};

export default SpaceBackground; 