import React, { useEffect, useState } from 'react'
import projectData from "../data/projectsData"
import { Link } from 'react-router-dom'

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
            <div className="btns" style={{backgroundColor:"white", padding:"20px", borderRadius:"8px", color:"black"}}>
                <p>Github :-
                    <Link to={data.gitHub} target='_blank'style={{color:"blue"}}>
                        {data.gitHub}
                    </Link>
                </p>
                <p>Live  :-
                    <Link to={data.liveProject} target='_blank'style={{color:"blue"}}>
                        {data.liveProject}
                    </Link>
                </p>

            </div>
        </div>
    )
}

export default ProjectPage
