import React from 'react';
import Img from 'gatsby-image';
import { objectOf, shape } from 'prop-types';

import styles from './styles.module.css';

const FeaturedImage = ({ img, ...props }) => {
  return (
    <div className={styles.featuredImg} {...props}>
      <Img fluid={img} className={styles.featuredImg} />
    </div>
  );
};

FeaturedImage.propTypes = {
  img: objectOf(shape).isRequired
};

export default FeaturedImage;
