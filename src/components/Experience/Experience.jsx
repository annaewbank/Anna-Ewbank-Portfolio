import styles from './Experience.module.css';
import experience from '../../data/experience.json';

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <ul>
        {experience.map((experience, id) => (
          <li key={id} className={styles.experienceItem}>
            <div className={styles.experienceItemHeader}>
              <div>
                <h3>{experience.role}</h3>
                <h4>{experience.organisation}</h4>
              </div>
              <p>
                {experience.startDate} - {experience.endDate}
              </p>
            </div>

            <p className={styles.experienceItemCompanyDetails}>
              {experience.organisationDetails}
            </p>

            <ul>
              {experience.experiences.map((experience, id) => (
                <li key={id} className={styles.experienceBullet}>
                  {experience}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
};
