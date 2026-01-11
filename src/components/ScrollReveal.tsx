import { ReactNode } from 'react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'left' | 'right' | 'scale';
  delay?: number;
}

const ScrollReveal = ({ 
  children, 
  className = '', 
  direction = 'up',
  delay = 0 
}: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const getAnimationClasses = () => {
    switch (direction) {
      case 'left':
        return `scroll-hidden-left ${isVisible ? 'scroll-visible-x' : ''}`;
      case 'right':
        return `scroll-hidden-right ${isVisible ? 'scroll-visible-x' : ''}`;
      case 'scale':
        return `scroll-hidden-scale ${isVisible ? 'scroll-visible-scale' : ''}`;
      default:
        return `scroll-hidden ${isVisible ? 'scroll-visible' : ''}`;
    }
  };

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${getAnimationClasses()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
