import React from 'react';
import HeroSection from '../components/HeroSection';
import MarqueeSection from '../components/MarqueeSection';
import FalseETBenefits from '../components/FalseETBenefits';
import SecretSauceSection from '../components/SecretSauceSection';
import IsItForYouSection from '../components/IsItForYouSection';
import FeaturesSection from '../components/FeaturesSection';
import MyStorySection from '../components/MyStorySection';
import ComparisonSection from '../components/ComparisonSection';
import FAQSection from '../components/FAQSection';

const HomePage = () => {
  return (
    <div>
      <div className="bg-black">
        <HeroSection />
        <MarqueeSection />
      </div>
      <FalseETBenefits />
      <SecretSauceSection />
      <IsItForYouSection />
      <FeaturesSection />
      <MyStorySection />
      <ComparisonSection />
      <FAQSection />
    </div>
  );
};

export default HomePage;