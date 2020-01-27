import React from 'react';

import { WithLayout } from '../components';
import { getFluidImage, getBlog } from '../lib/selectors';
import typography, { rhythm } from '../lib/utils/typography';
import FeaturedImage from './components/FeaturedImage';
import BlogHeader from './components/BlogHeader';

function BlogPostTemplate(props) {
  const {
    pageContext: { data }
  } = props;
  const { title, image, html, date, timeToRead } = getBlog(data);

  return (
    <div
      style={{
        marginTop: rhythm(3)
      }}
    >
      <FeaturedImage img={image} />
      <div
        style={{
          margin: `${rhythm(3)} auto`,
          maxWidth: 900
        }}
      >
        <BlogHeader
          title={title}
          date={date}
          duration={timeToRead}
          style={{
            marginBottom: rhythm(2)
          }}
        />
        {html && <div dangerouslySetInnerHTML={{ __html: html }} />}
      </div>
    </div>
  );
}

BlogPostTemplate.propTypes = {};

export default WithLayout(BlogPostTemplate);
