import React from 'react';

import WithLayout from '../components/WithLayout';

export function IndexPageTemplate({}) {
  return (
    <>
      <h1>Index Page</h1>
    </>
  );
}

IndexPageTemplate.propTypes = {};

export default IndexPage = WithLayout(IndexPageTemplate);
