import React from 'react';

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
