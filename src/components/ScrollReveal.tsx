import { useEffect, useRef, useState, ReactNode } from 'react';

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
  duration = 800,
  threshold = 0.1
}: ScrollRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  const getInitialStyles = () => {
    switch (direction) {
      case 'down':
        return { opacity: 0, transform: 'translateY(-40px)' };
      case 'left':
        return { opacity: 0, transform: 'translateX(-50px)' };
      case 'right':
        return { opacity: 0, transform: 'translateX(50px)' };
      case 'scale':
        return { opacity: 0, transform: 'scale(0.9)' };
      case 'up':
      default:
        return { opacity: 0, transform: 'translateY(40px)' };
    }
  };

  const getVisibleStyles = () => {
    return { 
      opacity: 1, 
      transform: 'translateY(0) translateX(0) scale(1)',
      filter: 'blur(0)'
    };
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...(isVisible ? getVisibleStyles() : { ...getInitialStyles(), filter: 'blur(8px)' }),
        transition: `all ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: 'opacity, transform, filter',
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;