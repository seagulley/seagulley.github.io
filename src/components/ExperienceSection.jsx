import React from 'react';
import ExperienceCard from './ExperienceCard';
import SkillsList from './SkillsList';
import './ExperienceSection.css'

const ExperienceSection = () => {
    const languages = ['Java', 'JavaScript/TypeScript', 'Python', 'C/C++', 'Assembly (RISC-V)'];
    const softwareDev = ['Spring', 'MongoDB', 'ExpressJS', 'ReactJS', 'Flask', 'AngluarJS', 'Openshift', 'AWS', 'Flutter'];
    const dataScience = ['TensorFlow', 'Pandas']

    return (
        <div className='experience-section'>
            <h1 className='section-title'>Experience</h1>
            <div className='experience-content'>
                <div className='experience-cards'>
                    <ExperienceCard
                        jobTitle="Software Development Engineer Intern"
                        company="Amazon Web Services - Step Functions"
                        duration="May 2025 - Present"
                        description="Designing and implementing new functionality to enhance JSON parsing and data transformation capabilities within AWS Step Functions Distributed Map state."
                        externalLink="https://aws.amazon.com/about-aws/whats-new/2025/02/aws-step-functions-data-source-output-option-distributed-map"
                    />
                    <ExperienceCard
                        jobTitle="Software Development Engineer Intern"
                        company="Amazon Web Services - Step Functions"
                        duration="May 2024 - December 2025"
                        description="Led the design and implementation of new input/output types and formatting logic for Distributed Map, a parallel processing state in AWS Step Functions."
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
                </div>
            </div>
            

        </div>
    )
}

export default ExperienceSection;