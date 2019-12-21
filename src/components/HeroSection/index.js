import React from 'react';
import Img from 'gatsby-image';
import { string, objectOf, shape } from 'prop-types';

import styles from './heroSection.module.css';

export function HeroSection({ img, heading, subheading }) {
  return (
    <div className={styles.hero}>
      <div className={styles.headings}>
        <h1>{heading}</h1>
        <p>{subheading}</p>
      </div>
      <div className={styles.img}>
        <Img fixed={img} />
      </div>
    </div>
  );
}

HeroSection.propTypes = {
  img: objectOf(shape).isRequired,
  heading: string.isRequired,
  subheading: string.isRequired
};
