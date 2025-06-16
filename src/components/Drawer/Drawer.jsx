import styles from './Drawer.module.css';
import { getImageUrl } from '../../utils';
import { useEffect } from 'react';

const links = [
  { name: 'About', path: '#about' },
  { name: 'Technologies', path: '#technologies' },
  { name: 'Experience', path: '#experience' },
  { name: 'Projects', path: '#projects' },
  { name: 'Contact', path: '#contact' },
];

// eslint-disable-next-line react/prop-types
export const Drawer = ({ setMenuOpen, menuOpen }) => {
  useEffect(() => {
    console.log(menuOpen);
  }, [menuOpen]);

  return (
    <div className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`}>
      <div className={styles.drawerHeader}>
        <img
          src={getImageUrl('nav/closeIcon.png')}
          alt="Close Menu"
          onClick={() => setMenuOpen(false)}
          className={styles.closeBtn}
        />
      </div>
      <nav className={styles.drawerItems}>
        {links.map((link, index) => (
          <a href={link.path} key={index} onClick={() => setMenuOpen(false)}>
            <h3>{link.name}</h3>
          </a>
        ))}
      </nav>
    </div>
  );
};
