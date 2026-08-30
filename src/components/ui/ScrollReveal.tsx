import React, { useEffect, useRef, useState } from 'react';

export type RevealDirection = 'left' | 'right' | 'up' | 'down' | 'zoom' | 'blur' | 'none';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: RevealDirection;
  delay?: number; // in ms
  duration?: number; // in ms
  className?: string;
  threshold?: number;
  distance?: string; // e.g. '40px', '60px'
  once?: boolean;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 850,
  className = '',
  threshold = 0.12,
  distance = '48px',
  once = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = elementRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(currentRef);
          }
        } else if (!once && entry.boundingClientRect.top > 0) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once]);

  // Compute transform & filter styles based on state and direction
  const getInitialTransform = (): string => {
    switch (direction) {
      case 'left':
        return `translateX(-${distance})`;
      case 'right':
        return `translateX(${distance})`;
      case 'up':
        return `translateY(${distance})`;
      case 'down':
        return `translateY(-${distance})`;
      case 'zoom':
        return 'scale(0.93)';
      case 'blur':
      case 'none':
      default:
        return 'none';
    }
  };

  const getInitialFilter = (): string => {
    if (direction === 'blur') return 'blur(14px)';
    return 'none';
  };

  const style: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translate(0px, 0px) scale(1)' : getInitialTransform(),
    filter: isVisible ? 'blur(0px)' : getInitialFilter(),
    transitionProperty: 'opacity, transform, filter',
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    transitionDelay: `${delay}ms`,
    willChange: 'opacity, transform, filter',
  };

  return (
    <div ref={elementRef} style={style} className={className}>
      {children}
    </div>
  );
};
