import React from 'react'
import { AiFillLinkedin, AiFillInstagram, AiFillGithub, AiOutlineMenu, AiOutlineArrowRight } from "react-icons/ai"
import { TypeAnimation } from 'react-type-animation'
import { motion } from "framer-motion"
import { HeroSection } from '../../animations/framermotion'
import { Link } from 'react-router-dom'

const Hero = ({ setActive, active }) => {
    return (
        <div id='hero'>
            <motion.div
                variants={HeroSection}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="info">
                <AiOutlineMenu onClick={() => setActive(!active)} className="menu-icon" />

                <div className="hero-badge">
                    <span className="pulse-dot"></span>
                    <span>Available for Full-Time & Freelance Roles</span>
                </div>

                <h3 className="greeting">Hello & Welcome! 👋</h3>
                <h1>I'm Chanda <span className="highlight-name">Venkatesh</span></h1>
                <h2 className="type-container">I build <TypeAnimation
                    sequence={[
                        'Enterprise ERP Applications',
                        1500,
                        'Scalable REST APIs',
                        1500,
                        'Modern MERN Solutions',
                        1500,
                        'Interactive Web Experiences',
                        1500
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    className="type-text"
                />
                </h2>

                <p className="hero-bio">
                    Results-driven <strong>Full Stack Developer</strong> with <strong>2+ years</strong> of experience building enterprise ERP applications at <strong>Sharpminds Cloud Tech Pvt Ltd</strong>. Specializing in <strong>Node.js, React.js, Next.js, TypeScript,</strong> and <strong>MongoDB</strong> — with Redis caching, queue management, and scalable API design.
                </p>

                <div className="hero-cta-group">
                    <a href="#projects" className="btn btn-primary">
                        <span>View Projects</span>
                        <AiOutlineArrowRight className="btn-icon" />
                    </a>
                    <a href="#contact" className="btn btn-secondary">
                        <span>Contact Me</span>
                    </a>
                </div>

                <div className="hero-stats">
                    <div className="stat-card">
                        <h4>2+</h4>
                        <p>Years Experience</p>
                    </div>
                    <div className="stat-card">
                        <h4>15+</h4>
                        <p>Projects Built</p>
                    </div>
                    <div className="stat-card">
                        <h4>MERN</h4>
                        <p>+ TypeScript Stack</p>
                    </div>
                </div>

                <div className="social-media">
                    <span className="social-title">Connect with me:</span>
                    <div className="social-icons-wrapper">
                        <Link to={"https://www.linkedin.com/in/chanda-venkatesh-705154247"} target='_blank' aria-label="LinkedIn">
                            <div className="social-links linkedin-link">
                                <AiFillLinkedin size={22} />
                            </div>
                        </Link>
                        <Link to={"https://github.com/Venkatesh3803"} target='_blank' aria-label="GitHub">
                            <div className="social-links github-link">
                                <AiFillGithub size={22} />
                            </div>
                        </Link>
                        <Link to={"https://www.instagram.com/venkat_venky3803/"} target='_blank' aria-label="Instagram">
                            <div className="social-links instagram-link">
                                <AiFillInstagram size={22} />
                            </div>
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Hero
