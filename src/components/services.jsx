import React from 'react'
import { SiExpress, SiMongodb, } from "react-icons/si"
import { IoLogoJavascript } from "react-icons/io"
import { DiNodejsSmall, DiReact } from "react-icons/di"
import { ImMobile } from "react-icons/im"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from '../animations/framermotion'

const Services = () => {
    return (
        <motion.div id='services'
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
        >
            <h1><span>Kown</span> Technologies</h1>

            <div className="service-container">
                <motion.div 
                variants={fadeIn("left", "tween", 0.2, 1)}
                className="service-card">
                    <DiNodejsSmall className='icons' />
                    <h3>Node Js</h3>
                    <p>Developing and maintaining all server-side network components</p>
                </motion.div>
                <motion.div 
                variants={fadeIn("left", "tween", 0.4, 1)}
                className="service-card">
                    <DiReact className='icons' />
                    <h3>React Js</h3>
                    <p> Experience with common front-end development tools such as Babel, Webpack, NPM</p>
                </motion.div>
                <motion.div 
                variants={fadeIn("left", "tween", 0.6, 1)}
                className="service-card">
                    <SiExpress className='icons' />
                    <h3>Express Js</h3>
                    <p>Roles and Responsibilities Read and process the operational historical data from the existing ed-tech platform</p>
                </motion.div>
                <motion.div 
                variants={fadeIn("left", "tween", 0.8, 1)}
                className="service-card">
                    <SiMongodb className='icons' />
                    <h3>Mongo DB</h3>
                    <p>maintain MongoDB databases while optimizing the performance, security,</p>
                </motion.div>
                <motion.div 
                variants={fadeIn("left", "tween", 1, 1)}
                className="service-card">
                    <IoLogoJavascript className='icons' />
                    <h3>Java Script</h3>
                    <p> Building sustainable coding that may be used in the future. Ensuring the feasibility of UI/UX designs</p>
                </motion.div>
                <motion.div 
                variants={fadeIn("left", "tween", 1.1, 1)}
                className="service-card">
                    <ImMobile className='icons' />
                    <h3>Web Dev</h3>
                    <p>Writing well designed, testable, efficient code by using best software development practices </p>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Services
