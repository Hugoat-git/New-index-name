import React from "react";
import { cn } from "../../lib/utils";

interface BorderBeamProps {
  duration?: number;
  delay?: number;
  size?: number;
  className?: string;
}

export function BorderBeam({
  duration = 2,
  delay = 0,
  size = 200,
  className,
}: BorderBeamProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 -z-10 overflow-hidden rounded-[inherit]",
        className
      )}
    >
      <div
        style={{
          width: size,
          height: size,
          animation: `border-beam ${duration}s linear ${delay}s infinite`,
        }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r"
      />
    </div>
  );
}