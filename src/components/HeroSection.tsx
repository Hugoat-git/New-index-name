import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-black min-h-screen overflow-hidden">
      {/* Multi-layered background gradients */}
      <div className="absolute inset-0">
        {/* Primary gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-transparent"></div>
        
        {/* Accent gradients */}
        <div className="absolute w-full h-full">
          <div className="absolute w-[800px] h-[800px] left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2">
            <div className="w-full h-full rounded-full bg-gradient-radial-pink opacity-70 blur-3xl"></div>
          </div>
          
          {/* Additional subtle color accents */}
          <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2"></div>
          <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl -translate-y-1/2"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="relative font-['beastly'] text-6xl md:text-7xl text-white mb-8 leading-[1.1] tracking-tight" style={{ fontWeight: 900, fontStyle: 'normal' }}>
            {/* Glow effect behind text */}
            <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-blue-500/30 to-purple-500/30 opacity-75" aria-hidden="true"></span>
            <span className="relative">
              TON ÉCOSYSTÈME <span className="relative">
                IA
                <div className="absolute bottom-0 inset-x-0">
                  <div className="h-[3px] w-0 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-expand-from-center"></div>
                </div>
              </span><br />
              POUR <span className="relative">
                CONCEVOIR
                <div className="absolute bottom-0 inset-x-0">
                  <div className="h-[3px] w-0 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-expand-from-center animation-delay-200"></div>
                </div>
              </span> ET<br />
              MONÉTISER TES <span className="relative">
                SOLUTIONS
                <div className="absolute bottom-0 inset-x-0">
                  <div className="h-[3px] w-0 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-expand-from-center animation-delay-400"></div>
                </div>
              </span>
            </span>
          </h1>
          <p className="font-acumin text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Crée du contenu, automatise, scale tes revenus. Une plateforme tout-en-un pour créateurs malins.
          </p>
          <div className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4 mb-20">
            <input
              type="email"
              className="input-primary flex-1 text-lg py-4 px-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400"
              placeholder="Email professionnel"
            />
            <button className="btn-primary text-lg py-4 px-8 flex items-center justify-center whitespace-nowrap rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
              Commencer maintenant
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
          
          {/* Hero Image with rounded corners and glass effect */}
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-[2rem] blur-xl transform scale-105"></div>
            <img 
              src="https://res.cloudinary.com/dbi3es4vj/image/upload/v1743863145/ChatGPT_Image_5_avr._2025_16_25_37_urhyaj.png"
              alt="MonétizIA Platform Interface"
              className="w-full rounded-[2rem] shadow-2xl relative z-10 border border-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;