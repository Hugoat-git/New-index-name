import { useState, useEffect, useRef } from 'react';

interface UseCountUpProps {
  end: number;
  duration?: number;
  delay?: number;
  startOnView?: boolean;
}

export function useCountUp({ end, duration = 2000, delay = 0, startOnView = true }: UseCountUpProps) {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(!startOnView);
  const elementRef = useRef<HTMLElement | null>(null);
  const animationRef = useRef<number>();
  const startTimeRef = useRef<number>();

  useEffect(() => {
    if (startOnView) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      if (elementRef.current) {
        observer.observe(elementRef.current);
      }

      return () => observer.disconnect();
    }
  }, [startOnView]);

  useEffect(() => {
    if (!isInView) return;

    const startAnimation = () => {
      const step = (timestamp: number) => {
        if (!startTimeRef.current) {
          startTimeRef.current = timestamp;
        }

        const progress = timestamp - startTimeRef.current;
        const percentage = Math.min(progress / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
        
        setCount(Math.floor(easeOutQuart * end));

        if (progress < duration) {
          animationRef.current = requestAnimationFrame(step);
        }
      };

      setTimeout(() => {
        animationRef.current = requestAnimationFrame(step);
      }, delay);
    };

    startAnimation();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [end, duration, delay, isInView]);

  return { count, elementRef };
}