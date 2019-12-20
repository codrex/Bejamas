import React from 'react';
import Img from 'gatsby-image';

import styles from './IntroSection.module.css';
import { useIntroImage } from '../../lib/hooks';

export function IntroSection({}) {
  const imgFixed = useIntroImage();
  console.log(imgFixed);
  return (
    <div className={styles.intro}>
      <h1 className={styles.heading}>Lorem ipsum something</h1>
      <div className={styles.description}>
        <div className={styles.img}>
          <Img fixed={imgFixed} />
        </div>
        <div className={styles.descriptionTexts}>
          <h3>New Product, new Story</h3>
          <p>
            Vivamus vestibulum elit efficitur, elementum sapien a, aliquet
            ipsum. Fusce placerat dolor id cursus finibus. Aliquam tempus
            facilisis ipsum sit amet molestie. Proin lobortis eros a turpis
            tempor, sed ornare augue aliquam. Donec imperdiet nulla ut placerat
            molestie. In hendrerit blandit ante facilisis ultrices. Mauris
            vulputate metus sit amet ex dignissim, sed hendrerit nunc rhoncus.
          </p>
        </div>
      </div>
    </div>
  );
}

IntroSection.propTypes = {};
