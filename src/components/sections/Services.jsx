import React from 'react'
import { SiExpress, SiMongodb, SiNextdotjs, SiTypescript } from "react-icons/si"
import { DiNodejsSmall, DiReact } from "react-icons/di"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from '../../animations/framermotion'

const Services = () => {
    return (
        <motion.div id='services'
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
        >
            <h1><span>Known</span> Technologies</h1>

            <div className="service-container">
                <motion.div 
                variants={fadeIn("left", "tween", 0.2, 1)}
                className="service-card">
                    <DiNodejsSmall className='icons' />
                    <h3>Node Js</h3>
                    <p>Building scalable server-side components and REST APIs</p>
                </motion.div>
                <motion.div 
                variants={fadeIn("left", "tween", 0.4, 1)}
                className="service-card">
                    <DiReact className='icons' />
                    <h3>React Js</h3>
                    <p> Developing dynamic and user-friendly interfaces</p>
                </motion.div>
                <motion.div 
                variants={fadeIn("left", "tween", 0.6, 1)}
                className="service-card">
                    <SiNextdotjs className='icons' />
                    <h3>Next Js</h3>
                    <p>Building production-ready, server-side rendered applications</p>
                </motion.div>
                <motion.div 
                variants={fadeIn("left", "tween", 0.8, 1)}
                className="service-card">
                    <SiTypescript className='icons' />
                    <h3>TypeScript</h3>
                    <p>Writing clean, strongly typed, and reusable code</p>
                </motion.div>
                <motion.div 
                variants={fadeIn("left", "tween", 1, 1)}
                className="service-card">
                    <SiExpress className='icons' />
                    <h3>Express Js</h3>
                    <p>Designing secure and modular REST APIs with clean architecture</p>
                </motion.div>
                <motion.div 
                variants={fadeIn("left", "tween", 1.1, 1)}
                className="service-card">
                    <SiMongodb className='icons' />
                    <h3>Mongo DB</h3>
                    <p>Modeling and optimizing databases with aggregation pipelines</p>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Services
