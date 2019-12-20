import React from 'react';

import {
  WithLayout,
  HeroSection,
  IntroSection,
  LogosSection
} from '../components';

export function IndexPageTemplate({}) {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <LogosSection />
    </>
  );
}

IndexPageTemplate.propTypes = {};

export const IndexPage = WithLayout(IndexPageTemplate);
