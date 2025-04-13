import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useEmailPopup } from '../../hooks/useEmailPopup';
import { cn } from '../../lib/utils';

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  showArrow?: boolean;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  children,
  variant = 'primary',
  showArrow = true,
  className,
  ...props
}) => {
  const { open } = useEmailPopup();

  return (
    <button
      onClick={open}
      className={cn(
        "flex items-center justify-center font-semibold transition-all duration-300 group",
        variant === 'primary' && "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700",
        variant === 'secondary' && "bg-white/10 text-white hover:bg-white/20",
        variant === 'outline' && "border border-white/20 text-white hover:bg-white/10",
        "px-8 py-4 rounded-xl",
        className
      )}
      {...props}
    >
      {children}
      {showArrow && (
        <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
      )}
    </button>
  );
};