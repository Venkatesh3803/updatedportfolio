import React from 'react'
import { SiExpress, SiMongodb, } from "react-icons/si"
import { IoLogoJavascript } from "react-icons/io"
import { DiNodejsSmall, DiReact } from "react-icons/di"
import { ImMobile } from "react-icons/im"

const Services = () => {
    return (
        <div className='services'>
            <h1><span>Our</span> Services</h1>

            <div className="service-container">
                <div className="service-card">
                    <DiNodejsSmall className='icons' />
                    <h3>Node Js</h3>
                    <p>Developing and maintaining all server-side network components</p>
                </div>
                <div className="service-card">
                    <DiReact className='icons' />
                    <h3>React Js</h3>
                    <p> Experience with common front-end development tools such as Babel, Webpack, NPM</p>
                </div>
                <div className="service-card">
                    <SiExpress className='icons' />
                    <h3>Express Js</h3>
                    <p>Roles and Responsibilities Read and process the operational historical data from the existing ed-tech platform</p>
                </div>
                <div className="service-card">
                    <SiMongodb className='icons' />
                    <h3>Mongo DB</h3>
                    <p>maintain MongoDB databases while optimizing the performance, security,</p>
                </div>
                <div className="service-card">
                    <IoLogoJavascript className='icons' />
                    <h3>Java Script</h3>
                    <p> Building sustainable coding that may be used in the future. Ensuring the feasibility of UI/UX designs</p>
                </div>
                <div className="service-card">
                    <ImMobile className='icons' />
                    <h3>Web Dev</h3>
                    <p>Writing well designed, testable, efficient code by using best software development practices </p>
                </div>
            </div>
        </div>
    )
}

export default Services
