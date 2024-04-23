import styles from './About.module.css';
import { getImageUrl } from '../../utils';

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl('about/aboutImage.png')}
          alt="Anna Ewbank Avatar with Laptop"
          className={styles.aboutImg}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl('about/cursorIcon.png')} alt="Cursor Icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I&apos;m a frontend developer passionate about building
                responsive and optimised websites and apps.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl('about/serverIcon.png')} alt="Server Icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience building a number of fast, robust and reliable
                backends.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl('about/uiIcon.png')} alt="UI Icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                With 10 years of experience as a designer, I am confident in
                bringing code to life. Creating beautiful but user-friendly UI
                makes me tick.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
