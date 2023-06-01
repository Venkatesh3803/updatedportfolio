import React from 'react'
import EducationAndExperiance from './educationAndExperiance'

const AboutMe = () => {

    

    return (
        <div id='about-me'>
            <h1>About <span>Me</span></h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam veniam iure quam minus cupiditate possimus ea doloremque reprehenderit qui, sint dolore illum ipsa, commodi laudantium animi totam voluptatibus impedit. Beatae!</p>
            <div className="about-container">
                <div className="about-left">
                    <ul>
                        <li>
                            <h4>Name: </h4>
                            <p>Chanda Venkatesh </p>
                        </li>
                        <li>
                            <h4>Age: </h4>
                            <p>24</p>
                        </li>
                        <li>
                            <h4>Qualification: </h4>
                            <p>B. Tech </p>
                        </li>
                        <li>
                            <h4>Post: </h4>
                            <p>Full Stact Developer </p>
                        </li>
                        <li>
                            <h4>Email: </h4>
                            <p>venkateshvnky3803@gmail.com </p>
                        </li>
                        <li>
                            <h4>Phone: </h4>
                            <p>+91 8463944069 </p>
                        </li>
                        <button>Download CV</button>
                    </ul>
                </div>
                <div className="about-right">
                    <div className="progress-bar">
                        <h3>HTML</h3>
                        <div className="progressbar-inputs">
                            <input type="range" value={90} />
                            <label htmlFor="">90%</label>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <h3>Css</h3>
                        <div className="progressbar-inputs">
                            <input type="range" value={90} />
                            <label htmlFor="">90%</label>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <h3>JavaScript</h3>
                        <div className="progressbar-inputs">
                            <input type="range" value={80} />
                            <label htmlFor="">80%</label>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <h3>React JS</h3>
                        <div className="progressbar-inputs">
                            <input type="range" value={80} />
                            <label htmlFor="">80%</label>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <h3>Node Js</h3>
                        <div className="progressbar-inputs">
                            <input type="range" value={80} />
                            <label htmlFor="">80%</label>
                        </div>
                    </div>

                </div>
            </div>
            <EducationAndExperiance />
        </div>
    )
}

export default AboutMe
