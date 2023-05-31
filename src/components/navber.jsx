import React from 'react'
import profilePic from "../images/Screenshot_2020-09-07-12-32-36-259_com.whatsapp-removebg-preview.png"

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
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navber