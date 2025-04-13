import React, { useState } from 'react';
import { cn } from '../../lib/utils';
import { ArrowRight } from 'lucide-react';

interface BentoGridProps {
  className?: string;
  children?: React.ReactNode;
}

interface BentoCardProps {
  className?: string;
  Icon?: React.ComponentType<{ className?: string }>;
  name: string;
  description: string;
  detailedDescription?: string;
  background?: React.ReactNode;
}

export function BentoGrid({ className, children }: BentoGridProps) {
  return (
    <div className={cn("grid grid-cols-1 lg:grid-cols-3 gap-8", className)}>
      {children}
    </div>
  );
}

export function BentoCard({
  className,
  Icon,
  name,
  description,
  detailedDescription = "Description détaillée à venir...",
  background,
}: BentoCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/10 h-[400px] cursor-pointer",
        "transition-all duration-500",
        className
      )}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Background Image with Progressive Blur */}
      <div className="absolute inset-0">
        {background}
        <div className={cn(
          "absolute inset-0 transition-all duration-500",
          isExpanded 
            ? "backdrop-blur-3xl bg-black/80" // Full blur when expanded
            : "bg-gradient-to-t from-black/95 via-black/70 to-transparent" // Gradient overlay for normal state
        )} />
        
        {/* Additional blur layer for text area */}
        <div className={cn(
          "absolute bottom-0 left-0 right-0 h-1/3 backdrop-blur-xl transition-all duration-500",
          isExpanded ? "opacity-0" : "opacity-100"
        )} />
      </div>

      {/* Content Container */}
      <div className="relative h-full flex flex-col p-8">
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Icon */}
          <div className={cn(
            "mt-auto mb-4 transition-all duration-500",
            isExpanded ? "opacity-0" : "opacity-100"
          )}>
            {Icon && (
              <div className="inline-flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-md p-3">
                <Icon className="h-6 w-6 text-white" />
              </div>
            )}
          </div>

          {/* Title and Description */}
          <div className={cn(
            "transition-all duration-500 transform",
            isExpanded 
              ? "opacity-0 translate-y-4" 
              : "opacity-100 translate-y-0",
            "group-hover:translate-y-[-2rem]" // Move up when CTA appears
          )}>
            <h3 className="text-xl font-bold text-white mb-3">{name}</h3>
            <p className="text-white/90 text-left text-base leading-relaxed">{description}</p>
          </div>
        </div>

        {/* Detailed Content (Shown when expanded) */}
        <div className={cn(
          "absolute inset-0 p-8 transition-all duration-500 flex flex-col justify-center",
          isExpanded 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-4 pointer-events-none"
        )}>
          <h3 className="text-xl font-bold text-white mb-4">{name}</h3>
          <p className="text-white text-left leading-relaxed">
            {detailedDescription}
          </p>
        </div>

        {/* CTA that appears from bottom on hover */}
        <div className={cn(
          "absolute left-8 right-8 bottom-8 transition-all duration-500 bg-gradient-to-t from-black/80 to-transparent pt-8 pb-2 px-0",
          isExpanded 
            ? "opacity-0 translate-y-4 pointer-events-none" 
            : "transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100"
        )}>
          <div className="flex items-center text-white gap-2 font-medium">
            <span>En savoir plus</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
}