import { useEffect, useRef, useState, ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
  duration?: number;
  threshold?: number;
}

const ScrollReveal = ({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up',
  duration = 0.7,
  threshold = 0.1
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const getVariants = () => {
    const directions = {
      up: { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 } },
      down: { initial: { opacity: 0, y: -50 }, animate: { opacity: 1, y: 0 } },
      left: { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 } },
      right: { initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 } },
      scale: { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 } },
    };
    return directions[direction];
  };

  const variants = getVariants();

  return (
    <motion.div
      ref={ref}
      initial={variants.initial}
      animate={isInView ? variants.animate : variants.initial}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;