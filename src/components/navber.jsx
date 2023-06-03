import React from 'react'
import profilePic from "../images/Screenshot_2020-09-07-12-32-36-259_com.whatsapp-removebg-preview.png"

import { MdCancel } from "react-icons/md"


const Navber = ({ setActive, active }) => {



    return (
        <div className="navber">

            {active && <MdCancel onClick={() => setActive(false)} className='cancel-icon' />}

            <div className="profile">
                <img src={profilePic} alt="" />
                <h2>Chanda Venkatesh</h2>
                <p>Full Stack Developer</p>
            </div>

            <div className="links">
                <ul>
                    <a href="#hero" style={{ textDecoration: "none", color: "white" }}>
                        <li>Home</li>
                    </a>
                    <a href="#about-me" style={{ textDecoration: "none", color: "white" }}>
                        <li>About Me</li>
                    </a>
                    <a href="#services" style={{ textDecoration: "none", color: "white" }}>
                        <li>Servies</li>
                    </a>
                    <a href="#projects" style={{ textDecoration: "none", color: "white" }}>
                        <li>Projects</li>
                    </a>
                    <a href="#contact" style={{ textDecoration: "none", color: "white" }}>
                        <li>Contact</li>
                    </a>

                </ul>
            </div>
        </div>
    )
}

export default Navber