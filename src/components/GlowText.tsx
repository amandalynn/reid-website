import { motion } from 'framer-motion';

interface GlowTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const GlowText = ({ children, className = '', delay = 0 }: GlowTextProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0, 0.71, 0.2, 1.01]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

