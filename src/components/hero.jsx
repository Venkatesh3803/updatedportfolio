import React from 'react'
import { AiFillFacebook, AiFillLinkedin, AiFillInstagram, AiFillGithub, AiFillTwitterSquare } from "react-icons/ai"
import { TypeAnimation } from 'react-type-animation'


const Hero = () => {
    return (
        <div className='hero'>
            <div
                
                className="info">
                <h3>Hey THERE !</h3>
                <h1>I'm Chanda <span>Venkatesh</span></h1>
                <h2>Expert in  <TypeAnimation
                    sequence={[
                        'Full Stact Developer', // Types 'One'
                        1000, // Waits 1s
                        'Web Developer ', // Deletes 'One' and types 'Two'
                        2000, // Waits 2s
                        'Web Designer', // Types 'Three' without deleting 'Two'
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: '1em', display: 'inline-block' }}
                />
                </h2>

                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, voluptate aperiam! Inventore, fuga ipsum eveniet adipisci necessitatibus nihil debitis atque eaque numquam saepe cum molestiae veritatis, voluptatem ab? Id, obcaecati.</p>

                <div className="social-media">
                    <div className="social-links">
                        <AiFillFacebook className='facebook' size={30} />
                    </div>
                    <div className="social-links">
                        <AiFillLinkedin className='linkedin' size={30} />
                    </div>
                    <div className="social-links">
                        <AiFillInstagram className='instagram' size={30} />
                    </div>
                    <div className="social-links">
                        <AiFillGithub className='github' size={30} />
                    </div>
                    <div className="social-links">
                        <AiFillTwitterSquare className='twiter' size={30} />
                    </div>
                </div>
                <button> About Me</button>
            </div>
        </div>
    )
}

export default Hero
