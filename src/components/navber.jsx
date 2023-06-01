import React from 'react'
import profilePic from "../images/Screenshot_2020-09-07-12-32-36-259_com.whatsapp-removebg-preview.png"
import { Link } from 'react-router-dom'

const Navber = () => {

    return (
        <div className='navber'>
            <div className="profile">
                <img src={profilePic} alt="" />
                <h2>Chanda Venkatesh</h2>
                <p>Full Stack Developer</p>
            </div>

            <div className="links">
                <ul>
                    <Link to={"#"} style={{ textDecoration: "none", color: "white" }}>
                        <li>Home</li>
                    </Link>
                    <Link to={"#about"} style={{ textDecoration: "none", color: "white" }}>
                        <li>About Me</li>
                    </Link>
                    <Link to={"#servies"} style={{ textDecoration: "none", color: "white" }}>
                        <li>Servies</li>
                    </Link>
                    <Link to={"#projects"} style={{ textDecoration: "none", color: "white" }}>
                        <li>Projects</li>
                    </Link>
                    <Link to={"#contact"} style={{ textDecoration: "none", color: "white" }}>
                        <li>Contact</li>
                    </Link>

                </ul>
            </div>
        </div>
    )
}

export default Navber