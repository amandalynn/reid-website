import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GlowText } from './GlowText';

export const Hero = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [stars, setStars] = useState<{ left: number; top: number; delay: number }[]>([]);

  useEffect(() => {
    // Generate random stars
    const newStars = Array.from({ length: 50 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
    }));
    setStars(newStars);
  }, []);

  const handlePressStart = () => {
    setGameStarted(true);
    setTimeout(() => setGameStarted(false), 2000);
  };

  return (
    <div className="relative min-h-screen w-full animated-bg flex items-center justify-center overflow-hidden">
      {/* Starfield Background */}
      <div className="stars">
        {stars.map((star, index) => (
          <div
            key={index}
            className="star"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4">
        <GlowText delay={0.2}>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-primary glow mb-4 animate-pulse-glow tracking-wider">
            REID WATTS
          </h1>
        </GlowText>

        <GlowText delay={0.5}>
          <p className="text-xl md:text-3xl text-white mb-12 font-medium tracking-wide">
            ⚡ <span className="text-primary">Gamer</span> |{' '}
            <span className="text-accent glow-purple">Dreamer</span> |{' '}
            <span className="text-primary">Creator</span> ⚡
          </p>
        </GlowText>

        <GlowText delay={0.8}>
          <motion.button
            onClick={handlePressStart}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-8 py-4 bg-gradient-to-r from-primary to-accent text-secondary font-bold text-xl rounded-lg box-glow transition-all duration-300 hover:box-glow-purple cursor-pointer"
          >
            <span className="relative z-10">PRESS START</span>
          </motion.button>
        </GlowText>

        {/* Level Up Animation */}
        {gameStarted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 0 }}
            animate={{ opacity: 1, scale: 1.5, y: -350 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="text-6xl md:text-8xl font-black text-primary glow">
              LEVEL UP! 🎮
            </div>
          </motion.div>
        )}
      </div>

      {/* Floating Game Elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 text-6xl opacity-30"
      >
        🎮
      </motion.div>

      <motion.div
        animate={{ y: [0, -25, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-20 right-20 text-6xl opacity-30"
      >
        🕹️
      </motion.div>

      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/3 right-10 text-5xl opacity-30"
      >
        ⚡
      </motion.div>

      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-1/3 left-20 text-5xl opacity-30"
      >
        🎯
      </motion.div>

      {/* Particle effect on hover */}
      <div className="absolute inset-0 pointer-events-none">
        {gameStarted && Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: '50vw',
              y: '50vh',
              opacity: 1,
            }}
            animate={{
              x: `${Math.random() * 100}vw`,
              y: `${Math.random() * 100}vh`,
              opacity: 0,
            }}
            transition={{
              duration: 1.5,
              ease: 'easeOut',
            }}
            className="absolute w-2 h-2 bg-primary rounded-full"
          />
        ))}
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-primary opacity-50"></div>
      <div className="absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-accent opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-4 border-l-4 border-accent opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-primary opacity-50"></div>
    </div>
  );
};

