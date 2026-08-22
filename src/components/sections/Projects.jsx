import React from 'react'
import projectsData from '../../data/projectsData'
import ProjectCard from './ProjectCard'


const Projects = () => {
    return (
        <div id='projects'>
            <h1><span>My</span> Projects</h1>
            <h3>My Live Projects</h3>
            <div className="project-container">
                {projectsData.map((project) => {
                    return (
                        <ProjectCard key={project.id} projectsData={project} />
                    )
                })}
            </div>
        </div>
    )
}

export default Projects
