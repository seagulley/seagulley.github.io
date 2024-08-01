import React from 'react';
import ExperienceCard from './ExperienceCard';
import SkillsList from './SkillsList';
import './ExperienceSection.css'

const ExperienceSection = () => {
    const languages = ['Java', 'JavaScript/TypeScript', 'Python', 'C/C++', 'Assembly (RISC-V)'];
    const softwareDev = ['Spring', 'MongoDB', 'ExpressJS', 'ReactJS', 'Flask', 'AngluarJS', 'Openshift', 'REST API', 'React Native', 'Flutter'];
    const dataScience = ['TensorFlow', 'Pandas']
    const projectManagement = ['Agile', 'Jira']

    return (
        <div className='experience-section'>
            <h1 className='section-title'>Experience</h1>
            <div className='experience-content'>
                <div className='experience-cards'>
                    <ExperienceCard
                        jobTitle="Software Development Engineer Intern"
                        company="Amazon Web Services - Step Functions"
                        duration="May 2024 - Present"
                        description="Independently spearheading a major team project for launch at AWS re:Invent, taking full ownership of development, documentation, and implementation."
                    />
                    <ExperienceCard
                        jobTitle="Software Development Intern"
                        company="RBC Amplify, RBC Clear"
                        duration="May 2023 - December 2023"
                        description="Led the development of a key product feature for RBC Clear, focused on improving digital customer experiences and using state of the art technology to provide RBC with a distinctive edge in the US market."
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
                    <SkillsList title="Software Development" skills={softwareDev} /> 
                    <SkillsList title="Data Science" skills={dataScience} /> 
                    <SkillsList title="Project Management" skills={projectManagement} /> 
                </div>
            </div>
            

        </div>
    )
}

export default ExperienceSection;