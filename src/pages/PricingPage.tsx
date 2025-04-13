import React, { useEffect, useRef } from 'react';
import PricingSection from '../components/PricingSection';

const PricingPage = () => {
  const pricingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Smooth scroll to pricing section on mount
    if (pricingRef.current) {
      pricingRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div ref={pricingRef}>
      <PricingSection />
    </div>
  );
};

export default PricingPage;