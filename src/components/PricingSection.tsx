import React, { useState } from 'react';
import { Check, ArrowRight, Star } from 'lucide-react';
import { cn } from '../lib/utils';
import { CTAButton } from './ui/cta-button';

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

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Formation Essentielle",
      price: isAnnual ? 39 : 49,
      description: "La base pour démarrer avec l'IA et rejoindre une communauté active",
      features: [
        "Accès à la formation complète",
        "Accès aux modules temporaires",
        "Accès à la communauté",
        "Webinaires hebdomadaires",
      ],
      cta: "Commencer gratuitement",
      variant: "outline"
    },
    {
      name: "Pack Créateur",
      price: isAnnual ? 70 : 87,
      description: "L'écosystème complet pour automatiser et développer votre activité",
      features: [
        "Tout ce qui est inclus dans Formation Essentielle",
        "Accès à l'écosystème MonétizIA complet",
        "Automatisations avancées et RSS",
        "Génération IA (texte, vidéo, photos)",
        "Speech-to-Text et organisation",
        "Automatisations backend type Manychat",
        "Cerveau OMNIMIND avec techno RAG",
        "Créateur de landing page (bientôt)",
      ],
      cta: "Commencer gratuitement",
      variant: "solid",
      earlyBird: true
    },
    {
      name: "Pack Expert",
      price: isAnnual ? 256 : 320,
      description: "Accompagnement personnalisé pour une croissance maximale",
      features: [
        "Tout ce qui est inclus dans Pack Créateur",
        "2 sessions de coaching d'1H par mois",
        "Création de landing pages sur mesure",
        "Optimisation conversion par nos experts",
        "Stratégie de croissance personnalisée",
      ],
      cta: "Commencer gratuitement",
      variant: "gradient"
    }
  ];

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
        {/* New Headlines with Beastly font */}
        <div className="text-center mb-24">
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-6">
            Pourquoi payer 400€/mois pour 20 outils, quand un seul suffit ?
          </p>
          <h2 className="font-['beastly'] text-5xl md:text-6xl font-bold text-white">
            TON ÉCOSYSTÈME IA<br />
            POUR CONCEVOIR ET<br />
            MONÉTISER TES<br />
            SOLUTIONS
          </h2>
        </div>

        {/* Toggle */}
        <div className="flex justify-center items-center gap-4 mb-16">
          <span className={cn(
            "text-lg transition-colors duration-200",
            isAnnual ? "text-white/60" : "text-white"
          )}>
            Mensuel
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative w-16 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1 transition-all duration-200"
          >
            <div className={cn(
              "w-6 h-6 rounded-full bg-white transition-transform duration-200",
              isAnnual ? "translate-x-8" : "translate-x-0"
            )} />
          </button>
          <span className={cn(
            "text-lg transition-colors duration-200",
            isAnnual ? "text-white" : "text-white/60"
          )}>
            Annuel
            <span className="ml-2 text-sm text-green-400">-20%</span>
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div key={index} className="relative">
              {/* Early Bird Badge */}
              {plan.earlyBird && (
                <div className="absolute -top-4 left-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-4 py-1 rounded-full text-sm font-semibold z-10 flex items-center gap-2 shadow-lg">
                  <Star className="w-4 h-4 fill-current" />
                  Les 100 premiers à 55€ à vie !
                </div>
              )}

              <div className={cn(
                "h-full rounded-2xl backdrop-blur-sm p-8 relative overflow-hidden",
                plan.variant === "outline" ? "bg-gray-900/40 border border-white/10" :
                plan.variant === "solid" ? "bg-gradient-to-br from-blue-600/90 to-purple-600/90 border border-white/20" :
                "bg-gradient-to-br from-blue-900/90 to-purple-900/90 border border-white/10"
              )}>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    {plan.earlyBird ? (
                      <>
                        <span className="text-4xl font-bold text-white">{plan.price}€</span>
                        <span className="text-white/60">/ mois</span>
                        <span className="text-sm text-green-400 ml-2">ou 55€ pour les 100 premiers</span>
                      </>
                    ) : (
                      <>
                        <span className="text-4xl font-bold text-white">{plan.price}€</span>
                        <span className="text-white/60">/ mois</span>
                      </>
                    )}
                  </div>
                  <p className="text-white/80">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-white/80">
                      <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <CTAButton
                  variant={plan.variant === "outline" ? "outline" : "primary"}
                  className="w-full"
                >
                  {plan.cta}
                </CTAButton>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="max-w-5xl mx-auto mt-32 mb-16">
          <div className="text-center mb-16">
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
                  <td className="py-6 px-6 text-center text-xl font-bold text-white">87€ / mois</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* New CTA */}
        <div className="text-center flex items-center justify-center gap-4">
          <h3 className="text-2xl text-white font-bold">
            Rejoignez notre communauté
          </h3>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group">
            <ArrowRight className="w-6 h-6 text-white transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;