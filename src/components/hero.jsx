import React from 'react'
import { AiFillLinkedin, AiFillInstagram, AiFillGithub, AiOutlineMenu } from "react-icons/ai"
import { TypeAnimation } from 'react-type-animation'
import { motion } from "framer-motion"
import { HeroSection } from '../animations/framermotion'
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
                <h3>Hey THERE !</h3>
                <h1>I'm Chanda <span>Venkatesh</span></h1>
                <h2>Expert in  <TypeAnimation
                    sequence={[
                        'Full Stact Developer', // Types 'One'
                        1000, // Waits 1s
                        'Web Developer ',
                        2000, // Waits 2s
                        'Web Designer',
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: '1em', display: 'inline-block' }}
                />
                </h2>

                <p>As a Fresher Full Stack Developer, I am an enthusiastic and motivated individual with a passion for web development. I have recently entered the field and possess a solid foundation in both front-end and back-end technologies. I am excited to embark on this journey to expand my knowledge and gain practical experience in building robust and dynamic web applications.</p>

                <div className="social-media">

                    <Link to={"https://www.linkedin.com/in/chanda-venkatesh-705154247"} target='_blank'>
                        <div className="social-links">
                            <AiFillLinkedin className='linkedin' size={30} />
                        </div>
                    </Link>
                    <Link to={"https://www.instagram.com/venkat_venky3803/"} target='_blank'>
                        <div className="social-links">
                            <AiFillInstagram className='instagram' size={30} />
                        </div>
                    </Link>
                    <Link to={"https://github.com/Venkatesh3803"} target='_blank'>
                        <div className="social-links">
                            <AiFillGithub className='github' size={30} />
                        </div>
                    </Link>

                </div>
                <a href="#about-me">
                    <button> About Me</button>
                </a>
            </motion.div>
        </div>
    )
}

export default Hero
