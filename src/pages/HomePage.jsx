import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { IntroSection } from '../components/IntroSection';
import { FeaturedShowcase } from '../components/FeaturedShowcase';
import { PageTransition } from '../components/PageTransition';

export const HomePage = () => {
  return (
    <PageTransition>
      <HeroSection />
      <IntroSection />
      <FeaturedShowcase />
    </PageTransition>
  );
};

