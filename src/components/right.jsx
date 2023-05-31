import React from 'react'
import Hero from './hero'
import AboutMe from './aboutMe'
import Services from './services'
import Projects from './projects'
import Contact from './contact'

const Right = () => {
    return (
        <div className='right'>
            <Hero />
            <AboutMe />
            <Services />
            <Projects />
            <Contact />
        </div>
    )
}

export default Right
