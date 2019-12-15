import React from 'react';

import WithLayout from '../components/WithLayout';

export function BlogPostTemplate({}) {
  return (
    <>
      <h1>Blog Post Page</h1>
    </>
  );
}

BlogPostTemplate.propTypes = {};

export default BlogPost = WithLayout(BlogPostTemplate);
