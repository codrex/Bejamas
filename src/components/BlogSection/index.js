import React from 'react';
import Img from 'gatsby-image';

import styles from './blogSection.module.css';
import { Button } from '../Button';
// import { useHeroImage } from '../../lib/hooks';

const blogs = [
  {
    image:
      'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg',
    title: 'Blog Title #1',
    excerpt: 'Blog excerpt - first lines - for approx two lines'
  },
  {
    image:
      'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg',
    title: 'Blog Title #1',
    excerpt: 'Blog excerpt - first lines - for approx two lines'
  },
  {
    image:
      'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg',
    title: 'Blog Title #1',
    excerpt: 'Blog excerpt - first lines - for approx two lines'
  },
  {
    image:
      'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg',
    title: 'Blog Title #1',
    excerpt: 'Blog excerpt - first lines - for approx two lines'
  }
];
function Blog({ image, title, excerpt }) {
  return (
    <div className={styles.blog}>
      <div className={styles.blogImg}>
        <img src={image}></img>
      </div>
      <h3 className={styles.blogTitle}>{title}</h3>
      <p className={styles.blogExcerpt}>{excerpt}</p>
    </div>
  );
}
export function BlogSection({}) {
  //   const imgFluid = useHeroImage();
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

BlogSection.propTypes = {};
