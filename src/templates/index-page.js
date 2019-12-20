import React from 'react';

import { WithLayout, HeroSection, IntroSection } from '../components';

export function IndexPageTemplate({}) {
  return (
    <>
      <HeroSection />
      <IntroSection />
    </>
  );
}

IndexPageTemplate.propTypes = {};

export const IndexPage = WithLayout(IndexPageTemplate);
