import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './ExperienceCard.css';

const ExperienceCard = ({ jobTitle, company, duration, description, githubLink }) => {
  return (
    <div className="experience-card">
      <h2>{jobTitle}</h2>
      <p className="company">{company}</p>
      <p className="duration">{duration}</p>
      <p>{description}</p>
      {githubLink && (
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="github-icon" />
        </a>
      )}
    </div>
  );
}

export default ExperienceCard;
