import React from 'react'
import projectsData from '../data/projectsData'
import ProjectDetails from './ProjectDetails'


const projects = () => {
    return (
        <div id='projects'>
            <h1><span>My</span> Projects</h1>
            <h3>My Live Projects</h3>
            <div className="project-container">
                {projectsData.map((project) => {
                    return (
                        <ProjectDetails projectsData={project} />
                    )
                })}
            </div>
        </div>
    )
}

export default projects
