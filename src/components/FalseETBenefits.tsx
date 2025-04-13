import React from 'react';
import { Video, Zap, Brain, Rocket, TrendingUp, Users, AlertTriangle, CheckCircle, Link } from 'lucide-react';
import { ShineBorder } from './ui/shine-border';
import { BentoGrid, BentoCard } from './ui/bento-grid';
import { MorphingText } from './ui/morphing-text';
import { FlickeringGrid } from './ui/flickering-grid';

const features = [
  {
    Icon: TrendingUp,
    name: "Gagne en influence, en efficacité et en revenu",
    description: "MonétizIA fusionne IA, stratégie éditoriale et automatisation pour développer une activité qui s'amplifie naturellement.",
    detailedDescription: "MonétizIA fusionne IA, stratégie éditoriale et automatisation pour développer une activité qui s'amplifie naturellement. Tu construis des fondations solides, tu diffuses avec pertinence, tu transformes ton savoir en ressources numériques. Tu deviens une référence, tu exploites pleinement ton expertise, et tu libères progressivement ton temps.",
    className: "col-span-3 lg:col-span-2",
    background: (
      <img
        src="https://res.cloudinary.com/dbi3es4vj/image/upload/v1744145346/ChatGPT_Image_8_avr._2025_22_48_53_wz6gll.png"
        alt="Influence et efficacité"
        className="w-full h-full object-cover"
      />
    ),
  },
  {
    Icon: Video,
    name: "Contenu performant et engageant",
    description: "Crée des vidéos, posts et contenus percutants grâce à l'IA.",
    detailedDescription: "Crée des vidéos, posts et contenus percutants grâce à l'IA. Automatise l'engagement (ex: contenus exclusifs avec les commentaires). Diffuse un flux personnalisé et pertinent pour ton audience. Ton contenu travaille avec toi, 24/7.",
    className: "col-span-3 lg:col-span-1",
    background: (
      <img
        src="https://res.cloudinary.com/dbi3es4vj/image/upload/v1744143929/a67ce915-e300-476d-b9f9-889296bdb422_wfbvtb.png"
        alt="Contenu performant"
        className="w-full h-full object-cover"
      />
    ),
  },
  {
    Icon: Users,
    name: "Revenu récurrent via notre programme partenaire",
    description: "Objectif : revenu récurrent en 3 mois.",
    detailedDescription: "Notre système white label te permet de proposer MonétizIA sous ta marque. Tu gères l'image, on s'occupe de l'infrastructure. Commission de 50% sur chaque vente. Objectif : revenu stable en 3 mois.",
    className: "col-span-3 lg:col-span-1",
    background: (
      <img
        src="https://res.cloudinary.com/dbi3es4vj/image/upload/v1744144477/2eaee4e0-0702-4c80-94ec-2f565e6d35ed_b2lvw5.png"
        alt="Programme partenaire"
        className="w-full h-full object-cover"
      />
    ),
  },
  {
    Icon: Brain,
    name: "Le conseil du futur, accessible aujourd'hui",
    description: "Grâce à nos outils intégrés (n8n, agents IA, Audit IA) et beaucoup d'autres...chut !",
    detailedDescription: "Grâce à nos outils intégrés (n8n, agents IA, Audit IA), identifie les points faibles de ton activité et propose des solutions d'automatisation.\n\n• Trouve les clients à fort potentiel.\n• Crée des workflows IA performants.\n• Vends tes services sans coder.\n\nC'est les seules infos que je peux te donner, je vais pas tout dévoiler ici quand même !",
    className: "col-span-3 lg:col-span-2",
    background: (
      <img
        src="https://res.cloudinary.com/dbi3es4vj/image/upload/v1744144024/ChatGPT_Image_8_avr._2025_22_26_59_w2cqi7.png"
        alt="Conseil du futur"
        className="w-full h-full object-cover"
      />
    ),
  }
];

const FalseETBenefits = () => {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-transparent"></div>
        <div className="absolute w-full h-full">
          {/* Flickering Grid positioned at the top with gradient fade */}
          <div className="absolute inset-0 h-[200%]">
            <FlickeringGrid
              className="absolute inset-0 z-0 [mask-image:linear-gradient(to_bottom,white_0%,white_30%,transparent_70%)]"
              squareSize={4}
              gridGap={6}
              color="#60A5FA"
              maxOpacity={0.3}
              flickerChance={0.1}
              height={2400}
              width={2400}
            />
          </div>
          
          <div className="absolute w-[800px] h-[800px] left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2">
            <div className="w-full h-full rounded-full bg-gradient-radial-pink opacity-70 blur-3xl"></div>
          </div>
          <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2"></div>
          <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl -translate-y-1/2"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Headline */}
        <h2 className="text-6xl md:text-7xl font-bold text-center text-white mb-24 relative z-10">
          Évite le bruit constant
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 relative z-10">
          {/* Left side - False Solution */}
          <div className="relative">
            {/* Badge */}
            <div className="absolute -top-4 left-4 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold z-10 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              Fausse solution
            </div>
            
            {/* Main Card */}
            <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-2xl">
              <ShineBorder 
                borderWidth={2}
                duration={10}
                shineColor={["#ef4444", "#dc2626"]}
              />
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
              <ShineBorder 
                borderWidth={2}
                duration={10}
                shineColor={["#3b82f6", "#8b5cf6"]}
              />
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

        {/* Bento Grid Section */}
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-6xl md:text-7xl font-bold text-center text-white mb-24">
            <MorphingText 
              texts={["Structure ton savoir.", "Active le levier de l'IA."]} 
              interval={5000}
              transitionDuration={1000}
            />
          </h2>

          <BentoGrid>
            {features.map((feature, idx) => (
              <BentoCard key={idx} {...feature} />
            ))}
          </BentoGrid>
        </div>
      </div>
    </section>
  );
};

export default FalseETBenefits;