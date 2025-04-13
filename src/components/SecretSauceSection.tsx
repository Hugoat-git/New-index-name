import React from 'react';
import { TrendingUp, BarChart } from 'lucide-react';
import { useCountUp } from '../hooks/useCountUp';

const SecretSauceSection = () => {
  const { count: count600, elementRef: ref600 } = useCountUp({ 
    end: 600,
    duration: 2000,
    startOnView: true 
  });
  
  const { count: count75, elementRef: ref75 } = useCountUp({ 
    end: 75,
    duration: 1500,
    delay: 500,
    startOnView: true 
  });

  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* First Stat */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-1.5 rounded-lg bg-white/10">
                <TrendingUp className="w-4 h-4 text-white/70" />
              </div>
              <span className="text-white/70 text-sm uppercase tracking-wider font-medium">
                McKinsey Global Institute
              </span>
            </div>
            <div className="mb-4 relative group">
              <div className="absolute -inset-2 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <span ref={ref600} className="font-beastly text-7xl md:text-8xl font-bold text-white tabular-nums">
                  {count600}
                </span>
                <span className="font-beastly text-4xl md:text-5xl font-bold text-white/60 ml-2">
                  milliards $
                </span>
              </div>
            </div>
            <p className="text-lg text-white/90 font-acumin leading-tight">
              de valeur économique générée par l'IA dans le marketing et les ventes d'ici 2030
            </p>
          </div>

          {/* Second Stat */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-1.5 rounded-lg bg-white/10">
                <BarChart className="w-4 h-4 text-white/70" />
              </div>
              <span className="text-white/70 text-sm uppercase tracking-wider font-medium">
                Worldwide AI 2023 Predictions
              </span>
            </div>
            <div className="mb-4 relative group">
              <div className="absolute -inset-2 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <span ref={ref75} className="font-beastly text-7xl md:text-8xl font-bold text-white tabular-nums">
                  {count75}
                </span>
                <span className="font-beastly text-4xl md:text-5xl font-bold text-white/60 ml-2">
                  %
                </span>
              </div>
            </div>
            <p className="text-lg text-white/90 font-acumin leading-tight">
              des entreprises prévoient d'augmenter leur budget IA dans les deux prochaines années
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecretSauceSection;