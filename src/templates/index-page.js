import React from 'react';

import {
  WithLayout,
  HeroSection,
  IntroSection,
  LogosSection,
  BlogSection
} from '../components';
import {
  useHeroImage,
  useHeroData,
  useIntroImage,
  useIntroData
} from '../lib/hooks';

export function IndexPageTemplate({}) {
  const heroImage = useHeroImage();
  const heroData = useHeroData();
  const introImage = useIntroImage();
  const introData = useIntroData();
  return (
    <>
      <HeroSection img={heroImage} {...heroData} />
      <IntroSection img={introImage} {...introData} />
      <LogosSection />
      <BlogSection />
    </>
  );
}

IndexPageTemplate.propTypes = {};

export const IndexPage = WithLayout(IndexPageTemplate);
