import React from 'react';

import {
  WithLayout,
  HeroSection,
  IntroSection,
  LogosSection,
  BlogSection
} from '../components';

export function IndexPageTemplate({}) {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <LogosSection />
      <BlogSection />
    </>
  );
}

IndexPageTemplate.propTypes = {};

export const IndexPage = WithLayout(IndexPageTemplate);
