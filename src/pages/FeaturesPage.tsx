import React from 'react';
import FeaturesSection from '../components/FeaturesSection';
import { CTAButton } from '../components/ui/cta-button';

const FeaturesPage = () => {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent opacity-90"></div>
          <div className="absolute w-full h-full">
            <div className="absolute w-[800px] h-[800px] left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2">
              <div className="w-full h-full rounded-full bg-gradient-radial-pink opacity-50 blur-3xl"></div>
            </div>
            <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2"></div>
            <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-8">
              Un écosystème complet pour
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> créer et monétiser</span>
            </h1>
            <p className="text-xl text-white/80 mb-12">
              Tous les outils dont tu as besoin pour automatiser ton activité et générer des revenus, réunis dans une seule plateforme.
            </p>
            <div className="flex justify-center">
              <CTAButton className="text-xl">
                Découvrir la plateforme
              </CTAButton>
            </div>
          </div>
        </div>

        {/* Gradient transition overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black"></div>
      </section>

      {/* Features Section from Homepage */}
      <FeaturesSection />

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Prêt à passer au niveau supérieur ?
            </h2>
            <p className="text-xl text-white/80 mb-12">
              Rejoins MonétizIA aujourd'hui et commence à construire ton empire digital.
            </p>
            <div className="flex justify-center">
              <CTAButton className="text-xl">
                Commencer maintenant
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;