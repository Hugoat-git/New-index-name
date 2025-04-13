import React, { useState } from 'react';
import { ChevronDown, Plus } from 'lucide-react';
import { cn } from '../lib/utils';

const faqs = [
  {
    question: "C'est une formation, un outil, ou une plateforme ?",
    answer: "MonétizIA est une plateforme web tout-en-un. Tu y retrouves une formation complète, des outils IA puissants, des automatisations prêtes à l'emploi, et une communauté active. Tout est centralisé dans un espace simple et fluide."
  },
  {
    question: "Est-ce que j'ai besoin de savoir coder ?",
    answer: "Absolument pas. MonétizIA est pensé pour être 100% no-code. Les automatisations, l'IA, les workflows… tout est guidé, visuel et accessible à n'importe quel niveau."
  },
  {
    question: "Qu'est-ce que je peux faire avec le plan standard ?",
    answer: "Tu accèdes à l'intégralité de la formation, aux webinaires hebdo, à la communauté, et aux outils IA avec une limite mensuelle de tokens. Parfait pour lancer ton activité, créer du contenu et tester des automatisations."
  },
  {
    question: "Comment fonctionne le programme d'affiliation / marque blanche ?",
    answer: "En tant que partenaire, tu peux revendre MonétizIA sous ta propre marque (white label), avec tes visuels et ton storytelling. Tu touches 40% de commission sur chaque vente. On gère la technique, le support, et l'infra — toi, tu monétises."
  },
  {
    question: "Je peux l'utiliser pour mes clients ou dans mon agence ?",
    answer: "Oui. Tu peux utiliser MonétizIA pour créer du contenu pour tes clients, proposer des audits automatisés, ou installer des systèmes IA dans les entreprises. C'est une vraie brique de valeur pour freelances, agences et consultants."
  },
  {
    question: "Et si ça ne me convient pas ?",
    answer: "Tu as 10 jours d'essai gratuit pour tester la plateforme à fond. Si tu ne vois pas la valeur ou que ce n'est pas pour toi, tu peux arrêter. Zéro engagement. Zéro prise de tête."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 bg-black relative overflow-hidden">
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
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-24">
            Tu te poses des questions ?
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="relative group"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 rounded-t-2xl"
                  style={{
                    borderBottomLeftRadius: openIndex === index ? 0 : '1rem',
                    borderBottomRightRadius: openIndex === index ? 0 : '1rem',
                  }}
                >
                  <span className="text-lg font-acumin text-white">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronDown className="w-6 h-6 text-white transform rotate-180 transition-transform duration-300" />
                  ) : (
                    <Plus className="w-6 h-6 text-white transition-transform duration-300" />
                  )}
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300 bg-gray-100 rounded-b-2xl",
                    openIndex === index ? "max-h-96" : "max-h-0"
                  )}
                >
                  <p className="p-6 text-gray-700 font-acumin">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;