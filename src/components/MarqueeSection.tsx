import React from 'react';
import { Logos } from '../assets/logos';

const logos = [
  { name: 'X (Twitter)', src: 'https://res.cloudinary.com/dbi3es4vj/image/upload/v1743867450/logo-x-modern-2023-7cbd_vvie9q.png' },
  { name: 'LinkedIn', src: 'https://res.cloudinary.com/dbi3es4vj/image/upload/v1743867444/vecteezy_linkedin-png-icon_16716470_fylwmk.png' },
  { name: 'Instagram', src: 'https://res.cloudinary.com/dbi3es4vj/image/upload/v1743867361/vecteezy_instagram-logo-png-instagram-icon-transparent_18930415_kwy3jp.png' },
  { name: 'TikTok', src: 'https://res.cloudinary.com/dbi3es4vj/image/upload/v1743867310/vecteezy_tiktok-logo-tiktok-social-media-icon_42148653_pqpgwr.png' },
  { name: 'Claude', src: 'https://res.cloudinary.com/dbi3es4vj/image/upload/v1743867262/66af9a719e55f1ee29f117b2_zakmxf.png' },
  { name: 'Grok', src: 'https://res.cloudinary.com/dbi3es4vj/image/upload/v1743867228/grok_1_aj3vbc.png' },
  { name: 'Runway', src: 'https://res.cloudinary.com/dbi3es4vj/image/upload/v1743867183/runway_1_b9zscr.png' },
  { name: 'Gemini', src: 'https://res.cloudinary.com/dbi3es4vj/image/upload/v1743867027/gemini-color_xojch1.png' },
  { name: 'Kling', src: 'https://res.cloudinary.com/dbi3es4vj/image/upload/v1743867023/kling-color_iuhtgc.png' },
  { name: 'OpenAI', src: 'https://res.cloudinary.com/dbi3es4vj/image/upload/v1743866943/openai_ladf4l.png' },
  { name: 'DeepSeek', src: 'https://res.cloudinary.com/dbi3es4vj/image/upload/v1743866884/deepseek_wo8j77.png' }
];

const problems = [
  { 
    title: 'Création sans résultat',
    description: (
      <>
        Tu as envie d'avoir des <strong>revenus</strong> et tu penses que la <strong>création de contenu</strong> est une possibilité ?
        <br /><br />
        Tu as raison ! Mais créer peut aussi rimer avec <strong>perte de temps</strong> si c'est mal fait.
      </>
    ),
    image: 'https://res.cloudinary.com/dbi3es4vj/image/upload/v1743948010/ChatGPT_Image_6_avr._2025_16_00_03_ioaumz.png'
  },
  { 
    title: 'Tu ne monétises pas assez',
    description: (
      <>
        Tu enchaînes les contenus sans <strong>vraie stratégie</strong> de retour.
        <br /><br />
        Résultat : de la <strong>visibilité sans revenus</strong>.
        <br /><br />
        Ce que tu produis ne <strong>travaille pas pour toi</strong>.
      </>
    ),
    image: 'https://res.cloudinary.com/dbi3es4vj/image/upload/v1743948038/23402245-2269-4518-aa16-acf5031acd15_wnlevz.png'
  },
  { 
    title: 'Tu ne proposes aucune vraie valeur pro',
    description: (
      <>
        Créer du contenu, c'est bien. <strong>Offrir des solutions concrètes</strong>, c'est mieux.
        <br /><br />
        Tu n'as rien à vendre — et ton <strong>compte en banque</strong> le sait.
      </>
    ),
    image: 'https://res.cloudinary.com/dbi3es4vj/image/upload/v1743948054/410ae45e-10bc-4f88-bd31-b94309bd3c7d_vuhxmg.png'
  }
];

const MarqueeSection = () => {
  return (
    <section className="relative -mt-12">
      <div className="bg-white rounded-t-[2rem] rounded-b-[2rem] shadow-2xl overflow-hidden backdrop-blur-sm relative">
        {/* Background gradients */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-transparent"></div>
          <div className="absolute w-full h-full">
            <div className="absolute w-[800px] h-[800px] left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2">
              <div className="w-full h-full rounded-full bg-gradient-radial-pink opacity-20 blur-3xl"></div>
            </div>
            <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2"></div>
            <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl -translate-y-1/2"></div>
          </div>
        </div>

        {/* Marquee Section */}
        <div className="py-16 relative z-10">
          <div className="relative w-full overflow-hidden px-4">
            <div className="flex items-center space-x-24 animate-marquee">
              {logos.map((logo, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 opacity-80 hover:opacity-100 transition-all duration-300 transform hover:scale-110"
                >
                  <img 
                    src={logo.src} 
                    alt={logo.name}
                    className="h-20 w-auto object-contain"
                  />
                </div>
              ))}
              {logos.map((logo, index) => (
                <div 
                  key={`duplicate-${index}`} 
                  className="flex-shrink-0 opacity-80 hover:opacity-100 transition-all duration-300 transform hover:scale-110"
                >
                  <img 
                    src={logo.src} 
                    alt={logo.name}
                    className="h-20 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Problems Section */}
        <div className="container mx-auto px-4 pb-24 pt-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left side - Text */}
            <div className="lg:col-span-5">
              <div className="sticky top-32 -ml-12">
                <h2 className="text-6xl md:text-7xl font-bold mb-16 leading-tight max-w-[150%]">
                  Créer du contenu ne devrait pas être une 
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> galère</span>.
                  <br /><br />
                  <span className="text-gray-900">Ni un</span>
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> métier à plein temps</span>.
                </h2>
                <p className="text-2xl text-gray-600 leading-relaxed">
                  <img 
                    src={Logos.icon} 
                    alt="MonétizIA"
                    className="inline-block h-[1.4em] w-[1.4em] align-text-bottom mr-1"
                  />
                  <span className="text-blue-600 font-semibold">MonétizIA</span> booste ta création vidéo grâce à l'IA pour que tu puisses te concentrer sur ce qui compte : monétiser.
                </p>
              </div>
            </div>

            {/* Right side - Problem Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {problems.map((problem, index) => (
                <div 
                  key={index}
                  className="relative overflow-hidden rounded-xl h-[340px]"
                  style={{
                    backgroundImage: `url(${problem.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
                  <div className="relative p-8 text-white h-full flex flex-col">
                    <h3 className="text-2xl font-bold mb-4">{problem.title}</h3>
                    <p className="text-white/90 leading-relaxed text-lg">{problem.description}</p>
                  </div>
                </div>
              ))}
              {/* Solution card */}
              <div 
                className="relative overflow-hidden rounded-xl group h-[340px]"
                style={{
                  backgroundImage: 'url(https://res.cloudinary.com/dbi3es4vj/image/upload/v1743949442/31df1e99-a9f6-4be2-80df-4341db53dd98_vfmiiz.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] group-hover:bg-black/30 transition-all duration-300"></div>
                <div className="relative p-8 text-white h-full flex flex-col">
                  <h3 className="text-2xl font-bold mb-4">LA VRAIE SOLUTION</h3>
                  <p className="text-white/90 leading-relaxed text-lg">
                    Une plateforme tout-en-un pour créer, automatiser et monétiser.
                    <br /><br />
                    Avec MonétizIA, tu ne perds plus de temps à chercher des outils.
                    <br /><br />
                    Tu produis, tu vends, tu avances — le tout, dans un seul espace.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;