import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi!
          <br />
          I&apos;m Anna.
        </h1>
        <p className={styles.description}>
          A driven frontend developer, keen to bridge the space between
          development and design.
        </p>
        <a href="mailto:Ewbank145@gmail.com" className={styles.contactBtn}>
          Get in touch
        </a>
      </div>
      <img
        src={getImageUrl('hero/heroImage.png')}
        alt="Anna Ewbank Avatar"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
