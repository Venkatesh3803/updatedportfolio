import React from 'react'
import EducationAndExperiance from './educationAndExperiance'
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from '../animations/framermotion'

import resume from "../resume/resume.pdf"

const AboutMe = () => {

    const Stats = [
        {
            skills: "REACT JS",
            percent: 80
        },
        {
            skills: "JAVA SCRIPT",
            percent: 80
        },
        {
            skills: "NODE JS",
            percent: 90
        },
        {
            skills: "EXPRESS",
            percent: 80
        },
        {
            skills: "MONGO DB",
            percent: 75
        },
        {
            skills: "REDIS SERVER",
            percent: 60
        },


    ]


    const handleResume = (e) => {
        const resumePath = resume;
        const link = document.createElement('a');
        link.href = resumePath;
        link.download = "venkatesh-resume.pdf";

        link.click()

    }

    return (
        <motion.div id='about-me'
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}>
            <h1>About <span>Me</span></h1>
            <p>I am a quick learner, and possess strong problem-solving skills. I am eager to collaborate with experienced professionals, learn from their expertise, and contribute to the development of innovative web applications. With a strong work ethic, a drive to continuously learn, and a determination to excel in the field, I am confident in my ability to grow as a skilled Full Stack Developer and make a positive impact in the industry.</p>
            <div className="about-container">
                <motion.div
                    variants={fadeIn("right", "tween", 0.5, 1)}
                    className="about-left">
                    <ul>
                        <li>
                            <h4>Name: </h4>
                            <p>Chanda Venkatesh </p>
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
                        <button onClick={handleResume}>Download Resume</button>
                    </ul>
                </motion.div>
                <div className="about-right">
                    {Stats.map((s, i) => {
                        return (
                            <motion.div variants={fadeIn("left", "tween", (i + 1) * 0.2, 1)} className="progress-bar" key={s.id}>
                                <h3>{s.skills}</h3>
                                <div className="progressbar-inputs">
                                    <input type="range" value={s.percent} />
                                    <label htmlFor="">{s.percent}%</label>
                                </div>
                            </motion.div>

                        )
                    })}
                </div>
            </div>
            <EducationAndExperiance />
        </motion.div>
    )
}

export default AboutMe
