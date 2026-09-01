import React from 'react'
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai"
import profilePic from "../../assets/images/Screenshot_2020-09-07-12-32-36-259_com.whatsapp-removebg-preview.png"

const Hero = () => {
  return (
    <div id='hero'>
      <div className="hero-left">
        <div className="eyebrow">Sharpminds Cloud Tech  ·  early engineer, Aug 2024 — now  ·  remote from Nirmal</div>

        <h1 className="hero-title">
          I joined an <em>ERP startup</em> early<br />
          and <strong>stayed to ship it<br />to factory floors.</strong>
        </h1>

        <p className="hero-lead">
          Hey — I'm <strong>Venkatesh</strong>. Civil grad who fell into code and didn't look back.
          For the last two years I've been one of the first engineers at <strong>Sharpminds Cloud Tech</strong>, building an ERP that factories actually use every day.
          We started with a blank repo. Now <strong>Purchase, Quality and Sales & Inventory</strong> run live for real teams, with real stock, real mistakes, and real “we need this yesterday” calls.
          I mostly live in <strong>Node / TypeScript / React / Next / MongoDB</strong> — plus Redis and BullMQ when things need to be fast or not break at 5pm.
        </p>

        <p className="hero-lead" style={{ fontSize: '0.94rem', color: '#6A6A66', marginTop: '-8px' }}>
          What that means day-to-day: drawing a flow on paper in the morning, writing the API after lunch, and fixing something on prod before dinner because a customer is waiting. I like that loop.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary-old">See what I shipped →</a>
          <a href="#contact" className="btn-ghost">Talk to me</a>
        </div>

        <div className="hero-meta-row">
          <div className="meta-stat"><b>2 years</b><span>in one product</span></div>
          <div className="meta-stat"><b>0 → live</b><span>blank repo to factory</span></div>
          <div className="meta-stat"><b>3</b><span>modules I own end-to-end</span></div>
          <div className="meta-stat"><b>~real users</b><span>not demo data</span></div>
        </div>
      </div>

      <div className="hero-right">
        <div className="portrait-wrap">
          <div className="portrait-badge"><span className="dot-live"></span> Open to new work</div>
          <img src={profilePic} alt="Chanda Venkatesh" />
          
        </div>

        <div className="info-card">
          <div>
            <h4>Reach me</h4>
            <p><a href="mailto:venkateshvnky3803@gmail.com">venkateshvnky3803@gmail.com</a></p>
            <p style={{ marginTop: 4 }}><a href="tel:+918463944069">+91 84639 44069</a></p>
          </div>
          <div>
            <h4>Right now</h4>
            <p>Early Engineer<br /><span style={{ color: '#5A5A58', fontSize: '0.82rem' }}>Sharpminds Cloud Tech — ERP (Remote)</span></p>
            <p style={{ color: '#8C8C88', fontSize: '0.78rem', marginTop: 4 }}>Nirmal, Telangana</p>
          </div>
          <div style={{ gridColumn: 'span 2', borderTop: '1px solid #E5DDCB', paddingTop: 12, marginTop: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
            <div style={{ display: 'flex', gap: 8 }} className="social-row">
              <a href="https://www.linkedin.com/in/chanda-venkatesh-705154247" target="_blank" rel="noreferrer" aria-label="LinkedIn"><AiFillLinkedin /></a>
              <a href="https://github.com/Venkatesh3803" target="_blank" rel="noreferrer" aria-label="GitHub"><AiFillGithub /></a>
              <a href="mailto:venkateshvnky3803@gmail.com" aria-label="Email"><AiFillMail /></a>
            </div>
            <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.66rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#8C8C88' }}>CV on request →</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
