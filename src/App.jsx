import { useState } from 'react';
import styles from './App.module.css';
import { Drawer } from './components/Drawer/Drawer';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Projects } from './components/Projects/Projects';
import { Skills } from './components/Technologies/Technologies';
import { Experience } from './components/Experience/Experience';
import { Contact } from './components/Contact/Contact';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.App}>
      <Drawer menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <div className={styles.footer}>
        <p>© 2025 Anna Ewbank</p>
      </div>
    </div>
  );
}

export default App;
