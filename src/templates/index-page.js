import React from 'react';

import {
  WithLayout,
  HeroSection,
  IntroSection,
  LogosSection,
  BlogSection
} from '../components';
import { useHeroImage, useHeroData } from '../lib/hooks';

export function IndexPageTemplate({}) {
  const heroImage = useHeroImage();
  const heroData = useHeroData();
  return (
    <>
      const heroImage = useHeroImage()
      <HeroSection img={heroImage} {...heroData} />
      <IntroSection />
      <LogosSection />
      <BlogSection />
    </>
  );
}

IndexPageTemplate.propTypes = {};

export const IndexPage = WithLayout(IndexPageTemplate);
