import React from 'react';
import ExperienceCard from './ExperienceCard';
import SkillsList from './SkillsList';
import './ExperienceSection.css'

const ExperienceSection = () => {
    const languages = ['Java', 'JavaScript/TypeScript', 'Python', 'C/C++', 'Assembly (RISC-V)'];
    const webMobileDev = ['MongoDB', 'ExpressJS', 'ReactJS', 'Flask', 'AngluarJS', 'Openshift', 'REST API', 'React Native', 'Flutter'];
    const dataScience = ['TensorFlow', 'Pandas']
    const projectManagement = ['Agile', 'Jira']

    return (
        <div className='experience-section'>
            <h1 className='section-title'>Experience</h1>
            <div className='experience-content'>
                <div className='experience-cards'>
                    <ExperienceCard
                        jobTitle="Full Stack Developer"
                        company="RBC Amplify, Capital Markets"
                        duration="May 2023 - Present"
                        description="Led the development of an unreleased capital markets product with  a team, focused on improving digital customer experiences and using state of the art technology to provide RBC with a distinctive edge in the US market."
                    />
                    <ExperienceCard
                        jobTitle="Undergraduate Research Assistant"
                        company="University of Alberta"
                        duration="January - August 2022"
                        description="A self-driven research project to explore LSTMs (Long short-term memory networks) and their ability to predict compound words from constituent words."
                        githubLink="https://github.com/seagulley/compound-word-embeddings"
                    />
                </div>
                <div className='experience-skills'>
                    <SkillsList title="Languages" skills={languages} /> 
                    <SkillsList title="Web/Mobile Development" skills={webMobileDev} /> 
                    <SkillsList title="Data Science" skills={dataScience} /> 
                    <SkillsList title="Project Management" skills={projectManagement} /> 
                </div>
            </div>
            

        </div>
    )
}

export default ExperienceSection;