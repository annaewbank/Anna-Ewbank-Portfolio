/* eslint-disable react/prop-types */

import styles from './Projects.module.css';

export const ProjectCard = ({ project }) => {
  return (
    <div>
      <div>
        <h3>{project.title}</h3>
        <p>{project.year}</p>
      </div>
      <h4>{project.tagline}</h4>
      <p>{project.description}</p>
      {project.link && <a href={project.link}>Try it yourself</a>}
      <p>Tech Stack:</p>
      {project.technologies.map((technology, index) => (
        <div key={index}>{technology}</div>
      ))}
      <p>Main Responsibilities:</p>
      <ul>
        {project.responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </div>
  );
};
