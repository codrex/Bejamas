import React from 'react';
import { Link } from 'gatsby';

import styles from './navbar.module.css';
import Logo from '../../assets/img/Logo.svg';
import Hamburger from '../../assets/img/hamburger.svg';
import Close from '../../assets/img/close.svg';
import { MobileNav } from './MobileNav';
import { NavPortal } from './NavPortal';

const links = [
  { to: '/home', text: 'home', order: 0 },
  { to: '/products', text: 'products', order: 1 },
  { to: '/blog', text: 'blog', order: 3 },
  { to: '/contact', text: 'contact', order: 4 }
];

export function NavBar() {
  const [open, setOpen] = React.useState(false);
  const toggleNav = () => setOpen(open => !open);
  const menuIcon = open ? Close : Hamburger;

  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        {links.map(link => (
          <Link
            key={link.to}
            to={link.to}
            className={styles.link}
            activeClassName={styles.active}
            style={{ order: link.order }}
          >
            {link.text}
          </Link>
        ))}
        <img className={styles.img} style={{ order: 2 }} src={Logo} />
        <button className={styles.menuBtn} onClick={toggleNav}>
          <img src={menuIcon} />
        </button>
      </ul>
      <NavPortal>
        <MobileNav links={links} open={open} />
      </NavPortal>
    </nav>
  );
}
