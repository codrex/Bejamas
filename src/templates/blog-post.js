import React from 'react';

import { WithLayout } from '../components';

function BlogPostTemplate({ data }) {
  console.log(data);
  return (
    <>
      <h1>Blog Post Page</h1>
    </>
  );
}

BlogPostTemplate.propTypes = {};

export default WithLayout(BlogPostTemplate);
