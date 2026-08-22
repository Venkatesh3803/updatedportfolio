import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillGithub } from "react-icons/ai"
import { FiExternalLink } from "react-icons/fi"

const ProjectCard = ({ projectsData }) => {
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
                    {projectsData.gitHub ? (
                        <Link to={projectsData.gitHub} target='_blank' rel="noreferrer" className="btn-github">
                            <AiFillGithub className="btn-icon" />
                            <span>Github</span>
                        </Link>
                    ) : (
                        <span className="btn-github disabled">
                            <AiFillGithub className="btn-icon" />
                            <span>Github</span>
                        </span>
                    )}
                    <Link to={projectsData.liveProject} target='_blank' rel="noreferrer" className="btn-live">
                        <span>Go Live</span>
                        <FiExternalLink className="btn-icon" />
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default ProjectCard
