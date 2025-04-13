import React from 'react';
import { Brain, Rocket, Target } from 'lucide-react';
import { CTAButton } from './ui/cta-button';

const MyStorySection = () => {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
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
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold relative z-10 text-white">
              De spectateur à acteur : comment j'ai pris le contrôle
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left column - Story cards and CTA */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {/* Realization Card */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                <div className="relative bg-gray-900/60 backdrop-blur-xl rounded-3xl p-6 border border-white/10">
                  <div className="absolute -right-4 -top-4 bg-blue-500/20 p-4 rounded-xl backdrop-blur-xl">
                    <Brain className="w-8 h-8 text-blue-400" />
                  </div>
                  <p className="font-acumin text-lg text-white/80 leading-relaxed">
                    Lorsque j'ai réalisé l'<span className="relative inline-block">immense décalage<div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500/50 to-transparent"></div></span> entre les capacités révolutionnaires des modèles d'intelligence artificielle et leur faible adoption concrète, j'ai immédiatement concentré tous mes efforts sur l'<span className="relative inline-block">apprentissage de ces nouvelles techniques<div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500/50 to-transparent"></div></span>. Mais à mes débuts, chaque outil était dispersé, rendant difficile toute focalisation sur l'essentiel : générer des revenus.
                  </p>
                </div>
              </div>

              {/* Journey Card */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                <div className="relative bg-gray-900/60 backdrop-blur-xl rounded-3xl p-6 border border-white/10">
                  <div className="absolute -right-4 -top-4 bg-purple-500/20 p-4 rounded-xl backdrop-blur-xl">
                    <Rocket className="w-8 h-8 text-purple-400" />
                  </div>
                  <p className="font-acumin text-lg text-white/80 leading-relaxed">
                    Après des mois de persévérance à naviguer dans le <span className="relative inline-block">bruit ambiant des solutions IA<div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500/50 to-transparent"></div></span>, j'ai enfin pu clarifier ma vision. En automatisant progressivement mon quotidien, j'ai réussi à transformer ces essais personnels en une <span className="relative inline-block">vraie compétence monétisable<div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-pink-500/50 to-transparent"></div></span>.
                  </p>
                </div>
              </div>

              {/* Results Card */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                <div className="relative bg-gray-900/60 backdrop-blur-xl rounded-3xl p-6 border border-white/10">
                  <div className="absolute -right-4 -top-4 bg-pink-500/20 p-4 rounded-xl backdrop-blur-xl">
                    <Target className="w-8 h-8 text-pink-400" />
                  </div>
                  <p className="font-acumin text-lg text-white/80 leading-relaxed">
                    En seulement 90 jours, j'ai décroché mon <span className="relative inline-block">premier contrat de 500€<div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-pink-500/50 to-transparent"></div></span>. Aujourd'hui, je construis une <span className="relative inline-block">solution réellement scalable<div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500/50 to-transparent"></div></span>, et je veux t'aider à faire de même.
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-auto">
                <CTAButton className="w-full text-xl">
                  Rejoins le mouvement aujourd'hui
                </CTAButton>
              </div>
            </div>

            {/* Right column - Photo */}
            <div className="lg:col-span-5">
              <div className="relative h-full">
                {/* Profile card with border beam effect */}
                <div className="relative rounded-3xl overflow-hidden bg-gray-900 h-full">
                  {/* Rotating border beam effect */}
                  <div className="absolute inset-0 -z-10">
                    <div 
                      className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2 animate-[border-beam_4s_linear_infinite]"
                      style={{
                        background: 'conic-gradient(from 0deg, transparent 0deg, #ef4444 60deg, transparent 120deg, transparent 180deg, #3b82f6 240deg, transparent 300deg)',
                      }}
                    />
                  </div>
                  <img
                    src="https://res.cloudinary.com/dbi3es4vj/image/upload/v1744297129/279588B6-751B-4A18-93BF-DE73531EF86D_acqbjv.png"
                    alt="Hugo Le Poole"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">Hugo Le Poole</h3>
                    <p className="font-acumin text-white/80">Part time CEO, Full time dev & Growth Hacker</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyStorySection;