import React from 'react'
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from '../animations/framermotion'
const EducationAndExperiance = () => {

    const education = [
        {
            id: 1,
            college: "Mahaveer Insitute Of Science And Technologies",
            location: " Bandlaguda, Hydrabad",
            // ecadamicYear: "2015-2019",
            course: "Civil Engnieering",
            grades: 50,
        },
        {
            id: 2,
            college: "Narayana Junior College",
            location: " Madinaguda, Hydrabad",
            // ecadamicYear: "2014-2015",
            course: "MPC",
            grades: 85.3,
        },
        // {
        //     id: 3,
        //     college: "Prince English Medium High School",
        //     location: " Nirmal",
        //     ecadamicYear: "2013",
        //     grades: 60,
        // },
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
                    <h2>Edcation</h2>
                    {education.map((e) => {
                        return (
                            <div className="edu-card">
                                <div className="vl"></div>
                                <div className="dot"></div>
                                <div className="edu-info">
                                    <h3>{e.college}</h3>
                                    <h4 style={{ color: "gray" }}>{e.location}</h4>
                                    <p>Percentile : {e.grades}%</p>
                                    <p>Coures : {e.course}</p>
                                </div>
                            </div>
                        )
                    })}

                </motion.div>
                <motion.div
                    variants={fadeIn("left", "tween", 0.5, 1)}
                    className="edu-right">
                    <h2>Certifications </h2>
                    <div className="edu-card">
                        <div className="vl"></div>
                        <div className="dot"></div>
                        <div className="edu-info">
                            <h3>UpGrad</h3>
                            <p>Feb 2023 - oct 2023</p>
                            <p>Full Stack Development- (JavaScript)</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default EducationAndExperiance
