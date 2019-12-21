import React from 'react';

import styles from './button.module.css';

export function Button({ children, ...props }) {
  return (
    <button className={styles.btn} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {};
