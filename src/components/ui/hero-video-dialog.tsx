import React, { useState, useEffect, useCallback } from 'react';
import { Play } from 'lucide-react';

interface HeroVideoDialogProps {
  className?: string;
  animationStyle?: 'top-in-bottom-out';
  videoSrc?: string;
  thumbnailSrc: string;
  thumbnailAlt: string;
  description?: string;
}

const HeroVideoDialog: React.FC<HeroVideoDialogProps> = ({
  className = '',
  animationStyle = 'top-in-bottom-out',
  videoSrc = '',
  thumbnailSrc,
  thumbnailAlt,
  description
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [embedUrl, setEmbedUrl] = useState('');

  const handleClose = useCallback((e: MouseEvent) => {
    const dialog = document.getElementById('video-dialog');
    const video = document.getElementById('video-content');
    if (dialog && !video?.contains(e.target as Node)) {
      setIsOpen(false);
      document.body.style.overflow = 'unset';
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClose);
    } else {
      document.removeEventListener('mousedown', handleClose);
    }
    return () => {
      document.removeEventListener('mousedown', handleClose);
    };
  }, [isOpen, handleClose]);

  const getEmbedUrl = (url: string): string => {
    if (!url) return '';
    
    try {
      // Handle youtu.be URLs
      if (url.includes('youtu.be/')) {
        const videoId = url.split('youtu.be/')[1]?.split('?')[0];
        if (videoId) {
          return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
        }
      }
      
      // Handle youtube.com URLs
      if (url.includes('youtube.com')) {
        const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        const match = url.match(regExp);
        const videoId = match && match[7].length === 11 ? match[7] : null;
        if (videoId) {
          return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
        }
      }
    } catch (error) {
      console.error('Error parsing YouTube URL:', error);
    }
    
    return url;
  };

  const openDialog = () => {
    const embedUrl = getEmbedUrl(videoSrc);
    setEmbedUrl(embedUrl);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeDialog = () => {
    setIsOpen(false);
    setEmbedUrl('');
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <button
        onClick={openDialog}
        className={`relative overflow-hidden rounded-2xl group ${className}`}
      >
        <img
          src={thumbnailSrc}
          alt={thumbnailAlt}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          {/* Styled Play Button */}
          <div className="relative group-hover:scale-110 transition-transform duration-300">
            {/* Outer glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            
            {/* Button background with gradient */}
            <div className="relative w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              {/* Inner white circle */}
              <div className="absolute inset-1 bg-white rounded-full"></div>
              
              {/* Play icon */}
              <Play className="w-8 h-8 text-blue-600 relative ml-1" />
            </div>
          </div>
        </div>
        {description && (
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <p className="text-white text-sm md:text-base">{description}</p>
          </div>
        )}
      </button>

      {isOpen && (
        <div 
          id="video-dialog"
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
        >
          <div 
            id="video-content"
            className={`relative w-full max-w-6xl mx-auto ${
              animationStyle === 'top-in-bottom-out' ? 'animate-slide-in-from-top' : ''
            }`}
          >
            <button
              onClick={closeDialog}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative pt-[56.25%] rounded-2xl overflow-hidden bg-black">
              {embedUrl && (
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={embedUrl}
                  title={thumbnailAlt}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
            {description && (
              <div className="mt-4 text-white text-center animate-fade-in">
                <p className="text-lg">{description}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default HeroVideoDialog;