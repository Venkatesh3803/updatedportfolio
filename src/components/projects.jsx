import React from 'react'
import projectsData from '../data/projectsData'
import Projectslider from './projectslider'


const projects = () => {
    return (
        <div id='projects'>
            <h1><span>My</span> Projects</h1>
            <h3>My Live Projects</h3>
            <div className="project-container">
                <Projectslider projectsData = {projectsData}/>
            </div>
        </div>
    )
}

export default projects
