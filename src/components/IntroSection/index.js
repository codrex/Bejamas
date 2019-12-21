import React from 'react';
import Img from 'gatsby-image';
import RMarkDown from 'react-markdown';
import { objectOf, shape, string } from 'prop-types';

import styles from './IntroSection.module.css';

export function IntroSection({ img, description, heading }) {
  return (
    <div className={styles.intro}>
      <h1 className={styles.heading}>{heading}</h1>
      <div className={styles.description}>
        <div className={styles.img}>
          <Img fixed={img} />
        </div>
        <div className={styles.descriptionTexts}>
          <RMarkDown source={description}></RMarkDown>
        </div>
      </div>
    </div>
  );
}

IntroSection.propTypes = {
  img: objectOf(shape).isRequired,
  description: string.isRequired,
  heading: string.isRequired
};
