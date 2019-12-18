import React from 'react';
import { Layout } from './Layout';

export function WithLayout(Template, layoutProps = {}) {
  return props => {
    return (
      <Layout {...layoutProps}>
        <Template {...props} />
      </Layout>
    );
  };
}
