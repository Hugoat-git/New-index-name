import React from 'react';
import { Check, X, Link, Brain } from 'lucide-react';
import { CTAButton } from './ui/cta-button';
import { ShineBorder } from './ui/shine-border';
import HeroVideoDialog from './ui/hero-video-dialog';

const forYouPoints = [
  "Tu veux gagner du temps et créer du contenu de qualité sans y passer ta vie.",
  "Tu veux monétiser rapidement ce que tu sais faire grâce à l'IA.",
  "Tu veux proposer une vraie valeur pro aux entreprises ou clients.",
  "Tu veux automatiser une partie de ton activité et scaler efficacement."
];

const notForYouPoints = [
  "Tu cherches une solution magique sans effort.",
  "Tu refuses de tester, d'itérer et de prendre la création au sérieux.",
  "Tu préfères accumuler des outils sans jamais passer à l'action.",
  "Tu veux tout faire toi-même sans méthode ni structure."
];

const IsItForYouSection = () => {
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

      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-center gap-4 mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white">
            Est-ce que
          </h2>
          <div className="flex items-center gap-2">
            <img 
              src="https://res.cloudinary.com/dbi3es4vj/image/upload/v1743862413/logo-icon_dnbxzf.png" 
              alt="MonétizIA Icon"
              className="h-12 md:h-16 w-auto"
            />
            <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              MonétizIA
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white">
            est fait pour toi ?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 relative z-10">
          {/* For You Card */}
          <div className="relative group">
            {/* Badge */}
            <div className="absolute -top-4 left-4 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold z-10 flex items-center gap-2">
              <Check className="w-4 h-4" />
              C'est pour toi si...
            </div>
            
            <div className="relative bg-gray-900/40 backdrop-blur-sm rounded-2xl overflow-hidden h-full">
              <ShineBorder 
                borderWidth={2}
                duration={10}
                shineColor={["#22c55e", "#16a34a"]}
              />
              <div className="p-8 space-y-6">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                  <span className="bg-green-500/20 p-2 rounded-lg">
                    <Check className="w-6 h-6 text-green-500" />
                  </span>
                  C'est pour toi si...
                </h3>
                <ul className="space-y-6">
                  {forYouPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-4 text-white/90 text-lg">
                      <span className="text-green-400 mt-1.5">➤</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-64">
                <img 
                  src="https://res.cloudinary.com/dbi3es4vj/image/upload/v1744040009/0bb54c2c-3b54-492b-9635-caf2cf659ce7_i96mlf.png"
                  alt="Success with AI"
                  className="w-full h-full object-cover object-center rounded-b-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Not For You Card */}
          <div className="relative group">
            {/* Badge */}
            <div className="absolute -top-4 left-4 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold z-10 flex items-center gap-2">
              <X className="w-4 h-4" />
              Ce n'est pas pour toi si...
            </div>
            
            <div className="relative bg-gray-900/40 backdrop-blur-sm rounded-2xl overflow-hidden h-full">
              <ShineBorder 
                borderWidth={2}
                duration={10}
                shineColor={["#ef4444", "#dc2626"]}
              />
              <div className="relative h-64">
                <img 
                  src="https://res.cloudinary.com/dbi3es4vj/image/upload/v1744040914/ChatGPT_Image_7_avr._2025_17_48_26_zt0tx5.png"
                  alt="Not the right fit"
                  className="w-full h-full object-cover object-center rounded-t-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 to-transparent"></div>
              </div>
              <div className="p-8 space-y-6">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                  <span className="bg-red-500/20 p-2 rounded-lg">
                    <X className="w-6 h-6 text-red-500" />
                  </span>
                  Ce n'est pas pour toi si...
                </h3>
                <ul className="space-y-6">
                  {notForYouPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-4 text-white/90 text-lg">
                      <span className="text-red-400 mt-1.5">➤</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* First CTA Button - Centered */}
        <div className="flex justify-center mb-32 relative z-10">
          <CTAButton className="text-lg">
            Je passe à l'action
          </CTAButton>
        </div>

        {/* Choice Section */}
        <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
            <span className="relative inline-block">
              Comprendre l'IA
              <div className="absolute bottom-0 inset-x-0">
                <div className="h-[3px] w-0 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-expand-from-center"></div>
              </div>
            </span>
            {" "}ou laisser d'autres{" "}
            <span className="relative inline-block">
              définir le futur
              <div className="absolute bottom-0 inset-x-0">
                <div className="h-[3px] w-0 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-expand-from-center animation-delay-200"></div>
              </div>
            </span>
            {" "}de{" "}
            <span className="relative inline-block">
              l'économie
              <div className="absolute bottom-0 inset-x-0">
                <div className="h-[3px] w-0 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-expand-from-center animation-delay-400"></div>
              </div>
            </span>
            {" "}?
          </h2>

          {/* Video Section */}
          <div className="relative">
            <HeroVideoDialog
              className="block"
              animationStyle="top-in-bottom-out"
              videoSrc="https://www.youtube.com/watch?v=BTUIJDoP2iY"
              thumbnailSrc="https://res.cloudinary.com/dbi3es4vj/image/upload/v1744120954/87ccea8c-5c4e-4535-90b0-9e07c5bc3f89_jz2hwp.png"
              thumbnailAlt="L'IA et l'économie mondiale"
              description="Sam Altman, CEO d'OpenAI, explique pourquoi l'IA va transformer l'économie mondiale et comment s'y préparer dès maintenant."
            />
          </div>

          {/* Second CTA Button - Centered */}
          <div className="flex justify-center mt-12">
            <CTAButton className="text-xl">
              Commencer gratuitement avec MonétizIA
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IsItForYouSection;