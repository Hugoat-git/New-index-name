import React, { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Logos } from '../assets/logos';
import { CTAButton } from './ui/cta-button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path: string) => {
    switch (path.toLowerCase()) {
      case 'fonctionnalités':
        navigate('/fonctionnalites');
        break;
      case 'tarifs':
        navigate('/tarifs');
        break;
      default:
        navigate('/');
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'pt-2' : 'pt-4'}`}>      
      <div className="container mx-auto px-4">
        <div 
          className={`
            rounded-xl transition-all duration-300 relative w-full
            ${isHovered ? 'bg-black backdrop-blur-sm' : 
              isScrolled ? 'bg-black' : 'bg-transparent'}
            ${isScrolled ? 'py-2 px-4' : 'px-8 py-3'}
          `}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex items-center justify-between">
            <div className={`flex items-center transition-all duration-500 ${isScrolled ? 'gap-8' : 'gap-16'}`}>
              {/* Logo with animated text */}
              <button 
                onClick={() => navigate('/')}
                className="flex items-center gap-3"
              >
                <img 
                  src={Logos.icon}
                  alt="MonétizIA"
                  className="h-10 w-10"
                />
                <span 
                  className={`
                    text-2xl font-bold bg-gradient-to-r from-[#0A97B0] to-[#A66EFF] bg-clip-text text-transparent
                    transition-all duration-500 origin-left
                    ${isScrolled ? 'opacity-0 scale-x-0 w-0' : 'opacity-100 scale-x-100 w-auto'}
                  `}
                >
                  MonétizIA
                </span>
              </button>
              
              {/* Navigation */}
              <nav className={`hidden md:block transition-all duration-500 ${isScrolled ? '-ml-4' : ''}`}>
                <ul className="flex space-x-8 font-acumin text-sm">
                  {[
                    'Fonctionnalités',
                    'Formation',
                    'Affiliation',
                    'Tarifs',
                    'Communauté'
                  ].map((item) => (
                    <li key={item} className="relative group">
                      <button 
                        onClick={() => handleNavigation(item)}
                        className={`text-white transition-colors ${
                          location.pathname === `/${item.toLowerCase()}` ? 'text-blue-400' : 'hover:text-blue-400'
                        }`}
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-white transition-colors">
                Se connecter
              </a>
              <CTAButton>
                Essai gratuit
              </CTAButton>
            </div>

            <button className="md:hidden text-white">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Blur overlay when hovered */}
      {isHovered && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm transition-all duration-300" style={{ zIndex: -1 }} />
      )}
    </header>
  );
};

export default Header;