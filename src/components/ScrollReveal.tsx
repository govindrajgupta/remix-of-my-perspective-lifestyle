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

  // Our components often pass delay as milliseconds (e.g. 100, 150, 300).
  // Framer Motion expects seconds, so normalize here.
  const delaySeconds = delay >= 10 ? delay / 1000 : delay;
  const durationSeconds = duration >= 10 ? duration / 1000 : duration;

  const isInView = useInView(ref, {
    once: true,
    // trigger a bit earlier so content doesn't stay invisible on small viewports
    margin: "0px 0px -10% 0px",
    amount: threshold,
  });

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
        duration: durationSeconds,
        delay: delaySeconds,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;