import React from 'react';
import './PersonalSection.css'

function PersonalSection() {
  return (
    <div className="personal-section">
      <h2 className="section-title">Extracurriculars and Fun Facts</h2>
      
      <div className="clubs-row">
        <h3>clubs</h3>
        <p>alberta competitive programming, ada's team, tiger skate club</p>
      </div>
      
      <div className="hobbies-list">
        <h3>hobbies</h3>
        <ul>
          <li>skateboarding</li>
          <li>snowboarding</li>
          <li>making music</li>
          <li>drawing</li>
          <li>fiber art (crochet, knitting)</li>
          <li>language learning</li>
          {/* Add more hobbies here */}
        </ul>
      </div>
      
      <div className="resume-button">
        <a href="src/assets/resume.pdf" target="_blank" rel="noopener noreferrer">
          View My Resume
        </a>
      </div>
    </div>
  );
}

export default PersonalSection;
