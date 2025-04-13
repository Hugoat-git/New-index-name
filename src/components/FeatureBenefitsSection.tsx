import React from 'react';
import { CheckCircle, Zap, Brain, TrendingUp, Shield, Users } from 'lucide-react';

const FeatureBenefitsSection = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-blue-500" />,
      title: "IA Avancée",
      description: "Notre technologie d'IA génère du contenu de qualité professionnelle en quelques secondes, adaptée à votre marque et à votre audience."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-500" />,
      title: "Optimisation Automatique",
      description: "Nos algorithmes analysent en continu les performances pour améliorer vos taux de conversion et maximiser votre ROI."
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-500" />,
      title: "Rapidité d'Exécution",
      description: "Créez des landing pages, des emails et des campagnes publicitaires 10x plus rapidement qu'avec les méthodes traditionnelles."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-500" />,
      title: "Simplicité d'Utilisation",
      description: "Interface intuitive qui ne nécessite aucune compétence technique, permettant à n'importe qui de créer des contenus professionnels."
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      title: "Sécurité des Données",
      description: "Protection avancée de vos données et conformité RGPD pour une utilisation en toute sécurité et confiance."
    },
    {
      icon: <Users className="w-6 h-6 text-blue-500" />,
      title: "Collaboration d'Équipe",
      description: "Travaillez efficacement en équipe avec des fonctionnalités de partage, commentaires et approbation en temps réel."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pourquoi Choisir MonétizIA?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre plateforme combine intelligence artificielle et expertise marketing pour vous aider à générer plus de leads et augmenter vos conversions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="bg-blue-50 p-3 rounded-full inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#" 
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-md font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            Commencer votre essai gratuit
          </a>
          <p className="mt-4 text-gray-500">Aucune carte de crédit requise • Annulez à tout moment</p>
        </div>
      </div>
    </section>
  );
};

export default FeatureBenefitsSection;