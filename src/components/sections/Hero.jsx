import React from 'react'
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai"
import profilePic from "../../assets/images/Screenshot_2020-09-07-12-32-36-259_com.whatsapp-removebg-preview.png"

const Hero = () => {
  return (
    <div id='hero'>
      <div className="hero-left">
        <div className="eyebrow">Early engineering at Sharpminds Cloud Tech — ERP startup · Aug 2024 → Present</div>

        <h1 className="hero-title">
          Helped build an <em>ERP startup</em><br />
          from <strong>first commit to<br />factory floor.</strong>
        </h1>

        <p className="hero-lead">
          I’m <strong>Chanda Venkatesh</strong> — one of the early engineers at <strong>Sharpminds Cloud Tech</strong>, where we’re building an ERP from scratch for real manufacturing operations.
          In 2 years we went from whiteboard to live product powering <strong>Purchase, Quality and Sales & Inventory</strong> — with real users, real data, real edge cases.
          I work across <strong>Node.js / TypeScript / React / Next.js / MongoDB</strong> — plus Redis & BullMQ — doing the startup thing: architecture in the morning, performance fix at noon, customer call in between.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary-old">View selected work →</a>
          <a href="#contact" className="btn-ghost">Start a conversation</a>
        </div>

        <div className="hero-meta-row">
          <div className="meta-stat"><b>2 yrs</b><span>Building a startup ERP</span></div>
          <div className="meta-stat"><b>0 → 1</b><span>Startup journey</span></div>
          <div className="meta-stat"><b>03</b><span>Core modules owned</span></div>
          <div className="meta-stat"><b>15+</b><span>Products & features shipped</span></div>
        </div>
      </div>

      <div className="hero-right">
        <div className="portrait-wrap">
          <div className="portrait-badge"><span className="dot-live"></span> Open to work</div>
          <img src={profilePic} alt="Chanda Venkatesh" />
          
        </div>

        <div className="info-card">
          <div>
            <h4>Contact</h4>
            <p><a href="mailto:venkateshvnky3803@gmail.com">venkateshvnky3803@gmail.com</a></p>
            <p style={{ marginTop: 4 }}><a href="tel:+918463944069">+91 84639 44069</a></p>
          </div>
          <div>
            <h4>Currently</h4>
            <p>Early Engineer<br /><span style={{ color: '#5A5A58', fontSize: '0.82rem' }}>Sharpminds Cloud Tech — ERP Startup (Remote)</span></p>
          </div>
          <div style={{ gridColumn: 'span 2', borderTop: '1px solid #E5DDCB', paddingTop: 12, marginTop: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
            <div style={{ display: 'flex', gap: 8 }} className="social-row">
              <a href="https://www.linkedin.com/in/chanda-venkatesh-705154247" target="_blank" rel="noreferrer" aria-label="LinkedIn"><AiFillLinkedin /></a>
              <a href="https://github.com/Venkatesh3803" target="_blank" rel="noreferrer" aria-label="GitHub"><AiFillGithub /></a>
              <a href="mailto:venkateshvnky3803@gmail.com" aria-label="Email"><AiFillMail /></a>
            </div>
            <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.66rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#8C8C88' }}>Resume on request →</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
