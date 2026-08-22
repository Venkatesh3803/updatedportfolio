import React, { Fragment } from 'react'
import Hero from '../sections/Hero'
import AboutMe from '../sections/AboutMe'
import Services from '../sections/Services'
import Projects from '../sections/Projects'
import Contact from '../sections/Contact'

const Right = () => {
    return (
        <Fragment>
            <Hero />
            <AboutMe />
            <Services />
            <Projects />
            <Contact />
        </Fragment>
    )
}

export default Right
