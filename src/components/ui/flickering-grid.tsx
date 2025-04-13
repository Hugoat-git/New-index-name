import React, { useEffect, useRef } from 'react';
import { cn } from '../../lib/utils';

interface FlickeringGridProps {
  className?: string;
  squareSize?: number;
  gridGap?: number;
  color?: string;
  maxOpacity?: number;
  flickerChance?: number;
  height?: number;
  width?: number;
}

export function FlickeringGrid({
  className,
  squareSize = 4,
  gridGap = 6,
  color = "#60A5FA",
  maxOpacity = 0.5,
  flickerChance = 0.1,
  height = 800,
  width = 800,
}: FlickeringGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = width;
    canvas.height = height;

    const columns = Math.floor(width / (squareSize + gridGap));
    const rows = Math.floor(height / (squareSize + gridGap));
    const squares: { opacity: number }[][] = [];

    // Initialize squares
    for (let i = 0; i < rows; i++) {
      squares[i] = [];
      for (let j = 0; j < columns; j++) {
        squares[i][j] = { opacity: Math.random() * maxOpacity };
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Update and draw squares
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
          if (Math.random() < flickerChance) {
            squares[i][j].opacity = Math.random() * maxOpacity;
          }

          ctx.fillStyle = color;
          ctx.globalAlpha = squares[i][j].opacity;
          ctx.fillRect(
            j * (squareSize + gridGap),
            i * (squareSize + gridGap),
            squareSize,
            squareSize
          );
        }
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, [squareSize, gridGap, color, maxOpacity, flickerChance, height, width]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("", className)}
    />
  );
}