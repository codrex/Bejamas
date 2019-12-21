import React from 'react';

import styles from './footer.module.css';
import FooterLogo from '../../assets/img/footer_logo.svg';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerRow}>
        <img className={styles.img} src={FooterLogo} />
        <span>All rights reserved ©</span>
      </div>
    </footer>
  );
}

Footer.propTypes = {};
