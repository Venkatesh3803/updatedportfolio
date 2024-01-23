import React from 'react'
import { Link } from 'react-router-dom'

const ProjectDetails = ({ projectsData }) => {
    console.log(projectsData)
    return (
        <div className='project-details'>
            <div className="project-details-top">
                <h2>{projectsData.title}</h2>
                <Link to={`/project/${projectsData.id}`}>
                    <img src={projectsData.image} alt="" />
                </Link>
            </div>
            <div className="project-details-bottom">
                <p>{projectsData.shortDesc.slice(0, 250)}</p>
                <div className="btns">
                    <Link to={projectsData.gitHub} target='_blank'>
                        <button>Github</button>
                    </Link>
                    <Link to={projectsData.liveProject} target='_blank'>
                        <button>Go Live</button>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
