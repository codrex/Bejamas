import React from 'react';
import { Link } from 'gatsby';
import { arrayOf, object, bool, func } from 'prop-types';

import styles from './navbar.module.css';

export function MobileNav({ links, open }) {
  return (
    <ul className={`${styles.mobileNav} ${open ? styles.mobileNavOpen : ''}`}>
      {links.map(link => (
        <Link
          key={link.to}
          to={link.to}
          className={styles.linkMobile}
          activeClassName={styles.active}
        >
          {link.text}
        </Link>
      ))}
    </ul>
  );
}

MobileNav.propTypes = {
  links: arrayOf(object).isRequired,
  open: bool.isRequired
};
