import styles from './Navbar.module.css';
import { useState } from 'react';
import { getImageUrl } from '../../utils';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.menu}>
        <img
          src={
            menuOpen
              ? getImageUrl('nav/closeIcon.png')
              : getImageUrl('nav/menuIcon.png')
          }
          alt="Menu Button"
          onClick={() => setMenuOpen(!menuOpen)}
          className={styles.menuBtn}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#technologies">Technologies</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
