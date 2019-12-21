import React from 'react';
import { arrayOf, shape, string, objectOf } from 'prop-types';
import Img from 'gatsby-image';

import styles from './blogSection.module.css';
import { Button } from '../Button';

function Blog({ image, title, excerpt }) {
  return (
    <div className={styles.blog}>
      <div className={styles.blogImg}>
        <Img fluid={image} />
      </div>
      <div className={styles.blogContent}>
        <h3 className={styles.blogTitle}>{title}</h3>
        <p className={styles.blogExcerpt}>{excerpt}</p>
      </div>
    </div>
  );
}

export function BlogSection({ blogs }) {
  return (
    <>
      <div className={styles.blogs}>
        {blogs.map((blog, index) => {
          return <Blog key={index} {...blog} />;
        })}
      </div>
      <div className={styles.btnWrapper}>
        <Button>Read more</Button>
      </div>
    </>
  );
}

BlogSection.propTypes = {
  blogs: arrayOf(
    shape({
      image: objectOf(shape),
      title: string,
      excerpt: string
    })
  ).isRequired
};
