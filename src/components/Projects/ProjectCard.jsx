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
          {/* These technologies are hidden if screen size is > 1200px or < 830px */}
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
          <a href={project.link} className={styles.projectBtn} target="_blank">
            Try it yourself
          </a>
        )}
        <div className={styles.projectTechnologies}>
          {/* These technologies are hidden if screen size is between 830px and 1200px */}
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
