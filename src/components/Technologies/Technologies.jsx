import styles from './Technologies.module.css';
import skills from '../../data/skills.json';
import { getImageUrl } from '../../utils';

export const Skills = () => {
  return (
    <section className={styles.container} id="technologies">
      <h2 className={styles.title}>Technologies</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <img
                src={getImageUrl(skill.imageSrc)}
                alt={`${skill.title} Logo`}
              />
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
