import React from 'react';

import { WithLayout } from '../components';

export function AboutPageTemplate({}) {
  return (
    <>
      <h1>About Page</h1>
    </>
  );
}

AboutPageTemplate.propTypes = {};

export const AboutPage = WithLayout(AboutPageTemplate);
