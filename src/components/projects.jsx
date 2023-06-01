import React from 'react'
import project1 from "../images/pic1.jpg"
import project2 from "../images/2023-05-27 (2).png"


const projects = () => {
    return (
        <div id='projects'>
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
                    <img src={project2} alt="" />
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
