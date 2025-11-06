import { ReactNode } from 'react';
import useIntersectionObserver from '@/hooks/use-intersection-observer';

export type AnimationType = 
  | 'fade-in' 
  | 'fade-up' 
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'slide-in-left' 
  | 'slide-in-right' 
  | 'slide-up'
  | 'slide-down'
  | 'scale-in'
  | 'scale-up'
  | 'zoom-in'
  | 'zoom-out'
  | 'rotate-in'
  | 'rotate-in-left'
  | 'rotate-in-right'
  | 'flip-in'
  | 'blur-in'
  | 'bounce-in';

export type AnimationSpeed = 'slow' | 'normal' | 'fast';
export type AnimationEasing = 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'bounce';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  speed?: AnimationSpeed;
  easing?: AnimationEasing;
  threshold?: number;
  className?: string;
  once?: boolean;
}

const AnimatedSection = ({ 
  children, 
  animation = 'fade-up', 
  delay = 0,
  speed = 'normal',
  easing = 'ease-out',
  threshold = 0.15,
  className = '',
  once = true,
}: AnimatedSectionProps) => {
  const [ref, entry] = useIntersectionObserver({
    threshold,
    freezeOnceVisible: once,
    rootMargin: '0px 0px -100px 0px', // Trigger animation slightly before element is visible
  });

  const isVisible = entry?.isIntersecting || false;

  const animationClasses = {
    'fade-in': 'animate-fade-in',
    'fade-up': 'animate-fade-up',
    'fade-down': 'animate-fade-down',
    'fade-left': 'animate-fade-left',
    'fade-right': 'animate-fade-right',
    'slide-in-left': 'animate-slide-in-left',
    'slide-in-right': 'animate-slide-in-right',
    'slide-up': 'animate-slide-up',
    'slide-down': 'animate-slide-down',
    'scale-in': 'animate-scale-in',
    'scale-up': 'animate-scale-up',
    'zoom-in': 'animate-zoom-in',
    'zoom-out': 'animate-zoom-out',
    'rotate-in': 'animate-rotate-in',
    'rotate-in-left': 'animate-rotate-in-left',
    'rotate-in-right': 'animate-rotate-in-right',
    'flip-in': 'animate-flip-in',
    'blur-in': 'animate-blur-in',
    'bounce-in': 'animate-bounce-in',
  };

  const speedValues = {
    slow: '1.2s',
    normal: '0.8s',
    fast: '0.5s',
  };

  const easingValues = {
    ease: 'ease',
    'ease-in': 'ease-in',
    'ease-out': 'ease-out',
    'ease-in-out': 'ease-in-out',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  };

  return (
    <div
      ref={ref}
      className={`${isVisible ? animationClasses[animation] : 'opacity-0 translate-y-8'} ${className}`}
      style={{ 
        animationDelay: `${delay}ms`,
        animationDuration: isVisible ? speedValues[speed] : undefined,
        animationTimingFunction: isVisible ? easingValues[easing] : undefined,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
