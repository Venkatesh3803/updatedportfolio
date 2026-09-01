import React, { useState, useEffect } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"

const Navbar = () => {
  const [open, setOpen] = useState(false)

  // lock scroll when menu open (overlay, no content push)
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // close on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 860 && open) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [open])

  return (
    <nav className="site-nav">
      <div className="site-nav-inner">
        <div className="nav-left">
          <div className="nav-mark">CV</div>
          <div className="nav-wordmark">Chanda <span>Venkatesh</span></div>
          <div className="nav-meta">
            <span>Full-stack Developer</span>
            <span>EST. 2023 — Nirmal, IN</span>
          </div>
        </div>

        <ul className="nav-links">
          <li><a href="#about-me">About</a></li>
          <li><a href="#services">Stack</a></li>
          <li><a href="#projects">Projects — 05</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <a href="mailto:venkateshvnky3803@gmail.com?subject=Opportunity%20for%20Chanda%20Venkatesh" className="nav-cta">Hire Me →</a>

        <button className="nav-hamburger" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      <div className={`mobile-backdrop ${open ? 'open' : ''}`} onClick={() => setOpen(false)} aria-hidden="true" />
      <div className={`mobile-menu ${open ? 'open' : ''}`} role="dialog" aria-modal="true">
        <a href="#about-me" onClick={() => setOpen(false)}>About</a>
        <a href="#services" onClick={() => setOpen(false)}>Stack</a>
        <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        <a href="mailto:venkateshvnky3803@gmail.com" onClick={() => setOpen(false)}>venkateshvnky3803@gmail.com</a>
      </div>
    </nav>
  )
}

export default Navbar
