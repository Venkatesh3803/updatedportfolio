import React from 'react'
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from '../../animations/framermotion'
const EducationExperience = () => {

    const education = [
        {
            id: 1,
            college: "Mahaveer Institute of Science and Technology",
            location: " Hyderabad, Telangana",
            course: "B.Tech - Civil Engineering",
        },
        {
            id: 2,
            college: "Narayana Junior College",
            location: " Madinaguda, Hyderabad",
            course: "Intermediate (MPC)",
        },
    ]


    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}

            className='education'>
            <div className="edu-container">
                <motion.div
                    variants={fadeIn("right", "tween", 0.5, 1)}
                    className="edu-left">
                    <h2>Education</h2>
                    {education.map((e) => {
                        return (
                            <div className="edu-card">
                                <div className="vl"></div>
                                <div className="dot"></div>
                                <div className="edu-info">
                                    <h3>{e.college}</h3>
                                    <h4 style={{ color: "gray" }}>{e.location}</h4>
                                    <p>Course : {e.course}</p>
                                </div>
                            </div>
                        )
                    })}

                </motion.div>
                <motion.div
                    variants={fadeIn("left", "tween", 0.5, 1)}
                    className="edu-right">
                    <h2>Work Experience</h2>
                    <div className="edu-card">
                        <div className="vl"></div>
                        <div className="dot"></div>
                        <div className="edu-info">
                            <h3>Sharpminds Cloud Tech Pvt Ltd</h3>
                            <span className="exp-period">Aug 2024 - Present</span>
                            <h4 style={{ color: "gray" }}>Full Stack Developer (Remote)</h4>
                            <p>Developing and maintaining enterprise-grade Purchase, Quality, and Sales & Inventory Management modules for a production ERP platform.</p>
                            <p>• Designing scalable REST APIs with Node.js, Express.js & TypeScript</p>
                            <p>• Implementing Redis caching & BullMQ background jobs for performance</p>
                            <p>• Optimizing MongoDB queries & aggregation pipelines</p>
                        </div>
                    </div>

                    <h2 className="edu-sub">Certifications</h2>
                    <div className="edu-card">
                        <div className="vl"></div>
                        <div className="dot"></div>
                        <div className="edu-info">
                            <h3>upGrad</h3>
                            <span className="exp-period">Feb 2023 - Oct 2023</span>
                            <p>Full Stack Development Bootcamp (JavaScript)</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default EducationExperience
