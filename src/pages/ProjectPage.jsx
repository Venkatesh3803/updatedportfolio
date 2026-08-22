import React, { useEffect, useState } from 'react'
import projectData from "../data/projectsData"
import { Link } from 'react-router-dom'
import { AiFillGithub } from "react-icons/ai"
import { FiExternalLink } from "react-icons/fi"

const ProjectPage = () => {
    const projectId = parseInt(window.location.pathname.split("/")[2])
    const [data, setData] = useState("")

    useEffect(() => {
        setData(projectData.find((project) => project.id === projectId))

    }, [projectId])

    return (
        <div className='project-page'>
            <h1>{data.title}</h1>
            <img src={data?.image} alt="" />
            <h2>Technology Used :- {data.technologies} </h2>
            <div className='desc'>
                {data.description?.split("\n")?.map((p) => {
                    return (
                        <p>{p}</p>
                    )
                })}
            </div>
            <div className="btns">
                {data.gitHub ? (
                    <Link to={data.gitHub} target='_blank' rel="noreferrer" className="btn-github">
                        <AiFillGithub className="btn-icon" />
                        <span>Github</span>
                    </Link>
                ) : (
                    <span className="btn-github disabled">
                        <AiFillGithub className="btn-icon" />
                        <span>Github</span>
                    </span>
                )}
                <Link to={data.liveProject} target='_blank' rel="noreferrer" className="btn-live">
                    <span>Go Live</span>
                    <FiExternalLink className="btn-icon" />
                </Link>
            </div>
        </div>
    )
}

export default ProjectPage
