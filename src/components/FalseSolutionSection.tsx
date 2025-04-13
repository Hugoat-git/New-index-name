import React from 'react';
import { AlertTriangle, CheckCircle, Link, Brain } from 'lucide-react';

const FalseSolutionSection = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-transparent"></div>
        <div className="absolute w-full h-full">
          <div className="absolute w-[800px] h-[800px] left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2">
            <div className="w-full h-full rounded-full bg-gradient-radial-pink opacity-70 blur-3xl"></div>
          </div>
          <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2"></div>
          <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl -translate-y-1/2"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Illustration and False Solution */}
          <div className="relative">
            {/* Badge */}
            <div className="absolute -top-4 left-4 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold z-10 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              Fausse solution
            </div>
            
            {/* Main Card */}
            <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
              
              {/* Illustration */}
              <div className="p-8 border-b border-white/10">
                <img 
                  src="https://res.cloudinary.com/dbi3es4vj/image/upload/v1743951460/ChatGPT_Image_6_avr._2025_16_57_31_gnsgxp.png" 
                  alt="Overwhelmed by AI tools"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              
              {/* Content */}
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-white">
                  Trop d'outils IA. Pas assez de structure.
                </h2>
                <p className="text-xl text-white/80 mb-8">
                  L'IA explose.<br />
                  Des dizaines d'outils sortent chaque semaine.<br />
                  Mais tester sans méthode, c'est reculer en pensant avancer.
                </p>
                
                {/* Alert Box */}
                <div className="bg-red-500/10 backdrop-blur-sm border border-red-500/20 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-4 flex items-center gap-2">
                    <Brain className="w-5 h-5" />
                    Ce que tu crois être une solution :
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-red-300">
                      <span className="text-lg">➤</span>
                      Empiler des apps IA
                    </li>
                    <li className="flex items-center gap-2 text-red-300">
                      <span className="text-lg">➤</span>
                      Espérer "trouver le bon outil"
                    </li>
                    <li className="flex items-center gap-2 text-red-300">
                      <span className="text-lg">➤</span>
                      Perdre du temps à organiser au lieu d'exécuter
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - True Solution */}
          <div className="relative">
            {/* Badge */}
            <div className="absolute -top-4 left-4 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold z-10 flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              La vraie solution
            </div>
            
            {/* Main Card */}
            <div id="solution-card" className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 shadow-2xl border border-white/10 group">
              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 blur-xl"></div>
              </div>
              
              {/* Illustration */}
              <div className="p-8 border-b border-white/10 relative">
                <img 
                  src="https://res.cloudinary.com/dbi3es4vj/image/upload/v1743952411/78621eae-7470-4a66-baf9-902356ce12f6_yahk32.png" 
                  alt="MonétizIA Solution"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              
              {/* Content */}
              <div className="p-8 text-white relative">
                <div className="flex items-center gap-3 mb-6">
                  <Link className="w-8 h-8" />
                  <h2 className="text-3xl font-bold">MonétizIA te donne une direction.</h2>
                </div>
                <p className="text-xl opacity-90 mb-6">
                  Une seule plateforme, pensée pour créer, automatiser, et monétiser.
                </p>
                <p className="text-xl font-semibold">
                  Tout est connecté, fluide, et orienté résultats.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FalseSolutionSection;