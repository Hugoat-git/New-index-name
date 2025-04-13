import React from 'react';
import { Logos } from './logos';

interface LogoProps {
  variant?: 'default' | 'white' | 'gradient';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'default', className = '' }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img 
        src={Logos.icon} 
        alt="MonétizIA"
        className="h-14 w-14"
      />
      <span 
        className={`text-3xl font-bold ${
          variant === 'white' ? 'text-white' : 
          variant === 'gradient' ? 'bg-gradient-to-r from-[#0A97B0] to-[#A66EFF] bg-clip-text text-transparent' : 
          'text-gray-900'
        }`}
      >
        MonétizIA
      </span>
    </div>
  );
};

export default Logo;