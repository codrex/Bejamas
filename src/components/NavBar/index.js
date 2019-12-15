import React from 'react';
import { Link } from 'gatsby';

import styles from './navbar.module.css';

const links = [
  { to: '/home', text: 'home' },
  { to: '/products', text: 'products' },
  { to: '/blog', text: 'blog' },
  { to: '/contact', text: 'contact' }
];

function NavBar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        {links.map(link => (
          <Link
            key={link.to}
            to={link.to}
            className={styles.link}
            activeClassName={styles.active}
          >
            {link.text}
          </Link>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
