import React, { useEffect, useState } from 'react'
import projectData from "../data/projectsData"

const ProjectPage = () => {
    const projectId =parseInt(window.location.pathname.split("/")[2])
    const [data, setData] = useState("")
    
    useEffect(() => {
        setData(projectData.find((project) => project.id === projectId))

    }, [projectId])
console.log(typeof(projectId))
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
                <p>Github :- {data.gitHub}</p>
                <p>Github :- {data.liveProject}</p>
            </div>
        </div>
    )
}

export default ProjectPage
