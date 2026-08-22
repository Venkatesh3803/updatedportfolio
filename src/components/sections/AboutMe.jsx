import React from 'react'
import EducationExperience from './EducationExperience'
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from '../../animations/framermotion'

import resume from "../../assets/resume/resume.pdf"

const AboutMe = () => {

    const Stats = [
        {
            skills: "REACT JS",
            percent: 88
        },
        {
            skills: "NEXT JS",
            percent: 82
        },
        {
            skills: "TYPE SCRIPT",
            percent: 85
        },
        {
            skills: "NODE JS",
            percent: 90
        },
        {
            skills: "EXPRESS JS",
            percent: 86
        },
        {
            skills: "MONGO DB",
            percent: 85
        },
        {
            skills: "REDIS",
            percent: 78
        },
        {
            skills: "TAILWIND CSS",
            percent: 80
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
            <p>Full Stack Developer with 2+ years of experience building enterprise ERP applications using Node.js, Express.js, React.js, Next.js, TypeScript, and MongoDB. Skilled in designing secure REST APIs, optimizing performance with Redis and BullMQ, and delivering production-ready Purchase, Quality, and Sales & Inventory modules.</p>
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
                            <p>B. Tech (Civil) </p>
                        </li>
                        <li>
                            <h4>Post: </h4>
                            <p>Full Stack Developer</p>
                        </li>
                        <li>
                            <h4>Exp: </h4>
                            <p>2+ Years</p>
                        </li>
                        <li>
                            <h4>Company: </h4>
                            <p>Sharpminds Cloud Tech Pvt Ltd</p>
                        </li>
                        <li>
                            <h4>Location: </h4>
                            <p>Nirmal, Telangana</p>
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
                                <h3>{s.skills}<span>{s.percent}%</span></h3>
                                <div className="progress-track">
                                    <motion.div
                                        className="progress-fill"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${s.percent}%` }}
                                        viewport={{ once: false, amount: 0.5 }}
                                        transition={{ duration: 1.2, ease: "easeOut" }}
                                    />
                                </div>
                            </motion.div>

                        )
                    })}
                </div>
            </div>
            <EducationExperience />
        </motion.div>
    )
}

export default AboutMe
