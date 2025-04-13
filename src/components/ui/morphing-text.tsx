import React, { useEffect, useState } from 'react';
import { cn } from '../../lib/utils';

interface MorphingTextProps {
  texts: string[];
  className?: string;
  interval?: number;
  transitionDuration?: number;
}

export function MorphingText({
  texts,
  className,
  interval = 5000,
  transitionDuration = 1000,
}: MorphingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((current) => (current + 1) % texts.length);
        setIsTransitioning(false);
      }, transitionDuration);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval, transitionDuration]);

  return (
    <span
      className={cn(
        "inline-block transition-all duration-1000",
        isTransitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0",
        className
      )}
    >
      {texts[currentIndex]}
    </span>
  );
}