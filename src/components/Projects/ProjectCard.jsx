/* eslint-disable react/prop-types */

import { getImageUrl } from '../../utils';
import styles from './ProjectCard.module.css';

export const ProjectCard = ({ project }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgAndTech}>
        <img
          src={getImageUrl(project.imageSrc)}
          alt={`${project.title} Image`}
        />
        <div className={styles.mobileTechnologies}>
          {project.technologies.map((technology, index) => (
            <div key={index} className={styles.projectTechnology}>
              {technology}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.projectHeader}>
          <h3>{project.title}</h3>
          <p className={styles.projectYear}>{project.year}</p>
        </div>
        <h4 className={styles.projectTagline}>{project.tagline}</h4>
        <p style={{ whiteSpace: 'pre-wrap' }}>{project.description}</p>
        {project.link && (
          <a href={project.link} className={styles.projectBtn}>
            Try it yourself
          </a>
        )}
        <div className={styles.projectTechnologies}>
          {project.technologies.map((technology, index) => (
            <div key={index} className={styles.projectTechnology}>
              {technology}
            </div>
          ))}
        </div>
        {project.note && <p className={styles.projectNote}>{project.note}</p>}
      </div>
    </div>
  );
};
