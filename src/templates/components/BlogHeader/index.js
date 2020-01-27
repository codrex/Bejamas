import React from 'react';
import { string } from 'prop-types';

import styles from './styles.module.css';

const BlogHeader = ({ date, duration, title, ...props }) => {
  return (
    <div className={styles.blogHeader} {...props}>
      <h1>{title}</h1>
      <span>
        <span>{date}</span> . <span>{duration} min read</span>
      </span>
    </div>
  );
};

BlogHeader.propTypes = {
  date: string.isRequired,
  duration: string.isRequired,
  title: string.isRequired
};

export default BlogHeader;
