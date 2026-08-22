import React from 'react'
import profilePic from "../../assets/images/Screenshot_2020-09-07-12-32-36-259_com.whatsapp-removebg-preview.png"
import { MdCancel } from "react-icons/md"
import { AiOutlineHome, AiOutlineUser, AiOutlineAppstore, AiOutlineFolderOpen, AiOutlineMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai"

const Navbar = ({ setActive, active }) => {
    return (
        <div className="navber">
            {active && <MdCancel onClick={() => setActive(false)} className='cancel-icon' />}

            <div className="profile">
                <div className="avatar-wrapper">
                    <img src={profilePic} alt="Chanda Venkatesh" />
                    <span className="status-indicator" title="Available for hire"></span>
                </div>
                <h2>Chanda Venkatesh</h2>
                <span className="role-badge">Full Stack Developer</span>
            </div>

            <div className="links">
                <ul>
                    <a href="#hero" onClick={() => setActive && setActive(false)}>
                        <li><AiOutlineHome className="nav-icon" /> <span>Home</span></li>
                    </a>
                    <a href="#about-me" onClick={() => setActive && setActive(false)}>
                        <li><AiOutlineUser className="nav-icon" /> <span>About Me</span></li>
                    </a>
                    <a href="#services" onClick={() => setActive && setActive(false)}>
                        <li><AiOutlineAppstore className="nav-icon" /> <span>Services</span></li>
                    </a>
                    <a href="#projects" onClick={() => setActive && setActive(false)}>
                        <li><AiOutlineFolderOpen className="nav-icon" /> <span>Projects</span></li>
                    </a>
                    <a href="#contact" onClick={() => setActive && setActive(false)}>
                        <li><AiOutlineMail className="nav-icon" /> <span>Contact</span></li>
                    </a>
                </ul>
            </div>

            <div className="sidebar-footer">
                <div className="sidebar-socials">
                    <a href="https://github.com/Venkatesh3803" target="_blank" rel="noreferrer" title="GitHub">
                        <AiFillGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/chanda-venkatesh-705154247" target="_blank" rel="noreferrer" title="LinkedIn">
                        <AiFillLinkedin />
                    </a>
                </div>
                <p>© {new Date().getFullYear()} Venkatesh</p>
            </div>
        </div>
    )
}

export default Navbar