import styles from './Navbar.module.css';
import { getImageUrl } from '../../utils';

const links = [
  { name: 'About', path: '#about' },
  { name: 'Technologies', path: '#technologies' },
  { name: 'Experience', path: '#experience' },
  { name: 'Projects', path: '#projects' },
  { name: 'Contact', path: '#contact' },
];

// eslint-disable-next-line react/prop-types
export const Navbar = ({ setMenuOpen, menuOpen }) => {
  return (
    <div className={styles.navbar}>
      <img
        src={getImageUrl('nav/menuIcon.png')}
        alt="Menu Button"
        onClick={() => setMenuOpen(!menuOpen)}
        className={styles.menuBtn}
      />
      <nav className={styles.menu}>
        {links.map((link, index) => {
          return (
            <a href={link.path} key={index} className="hover:text-garnet">
              {link.name}
            </a>
          );
        })}
      </nav>
    </div>
  );
};
