import React from 'react';
import './SkillsList.css';

function SkillsList({ title, skills }) {
  return (
    <div className="skills-list">
      <h2 className="skills-title">{title}</h2>
      <ul className="skills">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default SkillsList;
