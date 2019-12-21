import React from 'react';

import styles from './logosSection.module.css';
import { useLogos } from '../../lib/hooks';

export function LogosSection({}) {
  const logos = useLogos();
  return (
    <div className={styles.logos}>
      <div className={styles.logosWrapper}>
        {logos.map(({ image, link }) => {
          return (
            <a href={link} className={styles.logo}>
              <img className={styles.img} src={image.publicURL} alt='' />
            </a>
          );
        })}
      </div>
    </div>
  );
}

LogosSection.propTypes = {};
