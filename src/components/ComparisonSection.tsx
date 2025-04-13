import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { CTAButton } from './ui/cta-button';
import { Link } from 'react-router-dom';

const comparisonData = [
  {
    feature: "Générateur de vidéos",
    classic: "Runway, Synthesia, Kling",
    price: "30€/mois",
  },
  {
    feature: "Générateur d'avatars IA",
    classic: "HeyGen, D-ID",
    price: "40€/mois",
  },
  {
    feature: "Outil d'automatisation",
    classic: "Zapier, n8n",
    price: "20€/mois",
  },
  {
    feature: "Rédaction & scripts IA",
    classic: "Jasper, ChatGPT, deepseek, Gemini, Claude, grok",
    price: "170€/mois",
  },
  {
    feature: "Outil de planifications et publication automatique",
    classic: "Buffer, Metricool",
    price: "15€/mois",
  },
  {
    feature: "Espace de rangement personnalisé",
    classic: "Notion + modèles pro",
    price: "10€/mois",
  },
  {
    feature: "Webinaires/formation",
    classic: "Accès à des masterminds",
    price: "90€/mois",
  },
  {
    feature: "Flux RSS",
    classic: "RSS feeds",
    price: "12€/mois",
  },
  {
    feature: "Speech to text",
    classic: "Otter",
    price: "16€/mois",
  }
];

const ComparisonSection = () => {
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
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ce que tu obtiens en rejoignant MonétizIA :
            </h2>
            <p className="text-xl text-white/80">
              Les fonctionnalités des meilleurs outils, sans les abonnements qui s'empilent.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl backdrop-blur-sm bg-gray-900/40 border border-white/10">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-4 px-6 text-left text-lg font-bold text-white">Fonctionnalité</th>
                  <th className="py-4 px-6 text-left text-lg font-bold text-white">Solution classique</th>
                  <th className="py-4 px-6 text-center text-lg font-bold text-white">Avec MonétizIA</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <tr key={index} className="border-b border-white/10 last:border-0">
                    <td className="py-4 px-6 text-white/80">{item.feature}</td>
                    <td className="py-4 px-6">
                      <div className="text-white/80">{item.classic}</div>
                      <div className="text-white/60 text-sm">{item.price}</div>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <Check className="w-6 h-6 text-green-400 mx-auto" />
                    </td>
                  </tr>
                ))}
                <tr className="bg-gradient-to-r from-blue-600/20 to-purple-600/20">
                  <td className="py-6 px-6 text-xl font-bold text-white">TOTAL mensuel</td>
                  <td className="py-6 px-6 text-xl font-bold text-white">403€ / mois</td>
                  <td className="py-6 px-6 text-center">
                    <Link 
                      to="/tarifs"
                      className="inline-flex items-center text-xl font-bold text-white hover:text-blue-400 transition-colors"
                    >
                      Tarifs
                      <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Money-Back Guarantee Banner */}
          <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl overflow-hidden">
            <div className="px-8 py-6 flex items-center justify-between">
              <p className="text-xl md:text-2xl font-bold text-white">
                Testé ou remboursé. Zéro risque, que du concret.
              </p>
              <CTAButton variant="secondary">
                En savoir plus
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;