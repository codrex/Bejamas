import React from 'react';

import { WithLayout, HeroSection } from '../components';

export function IndexPageTemplate({}) {
  return (
    <>
      <HeroSection />
    </>
  );
}

IndexPageTemplate.propTypes = {};

export const IndexPage = WithLayout(IndexPageTemplate);
