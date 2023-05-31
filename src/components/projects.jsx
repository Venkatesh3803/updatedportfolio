import React from 'react'
import project1 from "../images/0d373b57e250525e2556015c5ad6fe84f66f2f632357a97c5de6e73043c0e0d51628682335902.jpg"


const projects = () => {
    return (
        <div className='projects'>
            <h1><span>My</span> Projects</h1>
            <div className="project-container">
                <div className="project-card">
                    <img src={project1} alt="" />
                    <div className="btns">
                        <button>Github</button>
                        <button>Go Live</button>
                    </div>
                </div>
                <div className="project-card">
                    <img src={project1} alt="" />
                    <div className="btns">
                        <button>Github</button>
                        <button>Go Live</button>
                    </div>
                </div>
                <div className="project-card">
                    <img src={project1} alt="" />
                    <div className="btns">
                        <button>Github</button>
                        <button>Go Live</button>
                    </div>
                </div>
                <div className="project-card">
                    <img src={project1} alt="" />
                    <div className="btns">
                        <button>Github</button>
                        <button>Go Live</button>
                    </div>
                </div>
                <div className="project-card">
                    <img src={project1} alt="" />
                    <div className="btns">
                        <button>Github</button>
                        <button>Go Live</button>
                    </div>
                </div>
                <div className="project-card">
                    <img src={project1} alt="" />
                    <div className="btns">
                        <button>Github</button>
                        <button>Go Live</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default projects
