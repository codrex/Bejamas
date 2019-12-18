import React from 'react';
import Img from 'gatsby-image';

import styles from './heroSection.module.css';
import { useHeroImage } from '../../lib/hooks';

export function HeroSection({}) {
  const imgFluid = useHeroImage();
  return (
    <div className={styles.hero}>
      <div className={styles.headings}>
        <h1>Start new… Today!</h1>
        <p>
          Vivamus vestibulum elit efficitur, elementum sapien a, aliquet ipsum
        </p>
      </div>
      <div className={styles.img}>
        <Img fixed={imgFluid} />
      </div>
    </div>
  );
}

HeroSection.propTypes = {};
