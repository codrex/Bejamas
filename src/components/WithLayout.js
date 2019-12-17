import React from 'react';
import Layout from './Layout';
function WithLayout(Template, layoutProps = {}) {
  return props => {
    return (
      <Layout {...layoutProps}>
        <Template {...props} />
      </Layout>
    );
  };
}

export default WithLayout;
