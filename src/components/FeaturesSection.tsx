import React from 'react';
import { CTAButton } from './ui/cta-button';

const features = [
  {
    title: "Ton cerveau augmenté. Ta création accélérée.",
    description: "OMNIMIND pour te guider (notre IA propriétaire alimentée par toutes nos techniques et formations), un playground d'IA avec ChatGPT, Claude, Gemini, Mistral… Génération de vidéos, images, voix, RSS intelligents, transcription automatique, organisation de tes fichiers, automatisation back-end pour intéragir avec tes followers, analyse de tes réseaux : tout est connecté pour aller vite.",
    image: "https://res.cloudinary.com/dbi3es4vj/image/upload/v1744314159/omnimind_preview_vvex5n.png",
    cta: "Explore nos outils",
    ctaLink: "#explore"
  },
  {
    title: "Propose des solutions. Pas juste du contenu.",
    description: "Crée des workflows personnalisés ou utilise nos templates prêts à l'emploi. Automatise tes posts, tes messages, ton back-end, tes audits… et gagne du temps chaque jour. Facture simplement tes clients via notre prestataire de paiement intégré.",
    image: "https://res.cloudinary.com/dbi3es4vj/image/upload/v1744314986/screen_n8N_ukn9k0.png",
    cta: "Installe tes premières automatisations",
    ctaLink: "#automate"
  },
  {
    title: "Tout ce que l'école ne t'a jamais appris.",
    description: "Montage, automatisation, cold reach, facturation, stratégie de contenu, UGC, marketing, landing page, affiliation… Une formation claire, concrète, évolutive, faite pour créer une activité solide, rapide à monétiser.",
    image: "https://res.cloudinary.com/dbi3es4vj/image/upload/v1744307656/ChatGPT_Image_10_avr._2025_19_30_39_lxfg2d.png",
    cta: "Commence à te former",
    ctaLink: "#learn"
  },
  {
    title: "Un réseau pour avancer plus vite.",
    description: "Webinaires hebdomadaires, discussions ciblées, entraide entre créateurs…Tu n'es plus seul. Tu progresses, tu partages, tu gagnes. Et bientôt, tu joues aussi : notre système de gamification te permet de grinder les rangs pour accéder à des ressources exclusives et une commission plus élevée sur notre programme d'affiliation qui te permet d'apposer ta marque sur notre SaaS sans t'occuper de sa structure complexe.",
    image: "https://res.cloudinary.com/dbi3es4vj/image/upload/v1744314530/ChatGPT_Image_10_avr._2025_21_48_38_vgn0rm.png",
    cta: "Rejoins nous",
    ctaLink: "#join"
  }
];

const FeatureCard = ({ title, description, image, cta, ctaLink, isReversed = false }) => (
  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 last:mb-0 ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
    <div className="relative group">
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-[2rem] blur-2xl group-hover:opacity-75 transition-opacity duration-500 animate-gradient"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
      <img
        src={image}
        alt={title}
        className="relative rounded-3xl shadow-2xl border border-white/10 w-full transform group-hover:scale-[1.02] transition-transform duration-500 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-3xl"></div>
    </div>

    <div className={`lg:${isReversed ? 'pr-8' : 'pl-8'}`}>
      <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
        {title}
      </h3>
      <p className="text-xl text-white/80 mb-8 leading-relaxed">
        {description}
      </p>
      <CTAButton>
        {cta}
      </CTAButton>
    </div>
  </div>
);

const FeaturesSection = () => {
  return (
    <section className="pt-8 pb-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-transparent"></div>
        <div className="absolute w-full h-full">
          <div className="absolute w-[1200px] h-[1200px] left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2">
            <div className="w-full h-full rounded-full bg-gradient-radial-pink opacity-70 blur-3xl animate-pulse"></div>
          </div>
          <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 animate-pulse"></div>
          <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-purple-500/20 rounded-full blur-3xl -translate-y-1/2 animate-pulse delay-1000"></div>
          <div className="absolute top-0 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-ping delay-700"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="block mb-2">Un seul outil.</span>
            <span className="block">Quatre leviers de croissance.</span>
          </h2>
          <p className="text-xl text-white/80">
            Tu veux aller vite, mais bien. MonétizIA te donne la méthode, les outils, les systèmes et les gens pour y arriver. Tout ce qu'il te faut pour créer du contenu, générer des revenus et automatiser en toute simplicité.
          </p>
        </div>

        <div className="space-y-32">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;