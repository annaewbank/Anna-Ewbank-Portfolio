import styles from './Technologies.module.css';
import { getImageUrl } from '../../utils';
import skills from '../../data/skills.json';

export const Skills = () => {
  return (
    <section className={styles.container} id="technologies">
      <h2 className={styles.title}>Technologies</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImgContainer}>
                <img
                  src={getImageUrl(skill.imageSrc)}
                  alt={`${skill.title} Logo`}
                />
                <p>{skill.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
