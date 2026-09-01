import React from 'react'
import EducationExperience from './EducationExperience'
import resume from "../../assets/resume/resume.pdf"

const AboutMe = () => {
  return (
    <section id='about-me' className="section">
      <div className="section-head reveal">
        <div>
          <div className="section-label">01 — About</div>
          <h2 className="section-title">Civil engineer <em>who stayed for the code.</em></h2>
        </div>
        <p className="section-desc">I liked structures where a small mistake shows. Software is the same — only the users tell you faster.</p>
      </div>

      <div className="about-grid reveal">
        <div className="about-copy">
          <p>
            I studied Civil at <strong>MIST, Hyderabad</strong> because I liked working with constraints — loads, tolerances, how much steel you can actually use. I didn't plan to switch, but I kept opening VS Code at night. One small project became five, then I stopped applying to site jobs.
          </p>
          <p>
            In Aug 2024 I joined <strong>Sharpminds Cloud Tech</strong> when their ERP was still a whiteboard. Two years later that whiteboard is live software. <strong>Purchase, Quality, Sales & Inventory</strong> — used by factory teams every day, not demo accounts. I've been lucky to be early: that means I got to make the schema, break it, and fix it again when stock numbers didn't match at month end.
          </p>
          <p>
            My day is not just tickets. It's customer calls where someone says “this report takes too long,” then I trace a Mongo aggregation, add a Redis cache, and ship a BullMQ job so it doesn't block the UI. I write APIs with <strong>Node + TypeScript + Express</strong>, UIs with <strong>React/Next</strong>, and I spend a lot of time making tables and filters that people who hate software can still use.
          </p>
          <p>
            I'm not the “10x” type. I write small PRs, add tests because I've been burned, and leave rollback notes. At a factory, a bug isn't a vibe — it stops work. That keeps me honest.
          </p>
          <p style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.78rem', letterSpacing: '0.04em', color: '#8C8C88', borderLeft: '2px solid #D94F30', paddingLeft: 12, marginTop: 16 }}>
            I keep a paper notebook for flows. Still faster than any tool when a user is explaining their process on a call.
          </p>
        </div>

        <div>
          <div className="detail-table">
            <div className="detail-row"><dt>Name</dt><dd>Chanda Venkatesh</dd></div>
            <div className="detail-row"><dt>Role</dt><dd>Early Full Stack Engineer</dd></div>
            <div className="detail-row"><dt>Company</dt><dd>Sharpminds Cloud Tech</dd></div>
            <div className="detail-row"><dt>Location</dt><dd>Nirmal, Telangana — Remote</dd></div>
            <div className="detail-row"><dt>Email</dt><dd>venkateshvnky3803@gmail.com</dd></div>
            <div className="detail-row"><dt>Phone</dt><dd>+91 84639 44069</dd></div>
            <div className="detail-row"><dt>Degree</dt><dd>B.Tech Civil — MIST, Hyderabad</dd></div>
          </div>
          <a href={resume} download="Chanda-Venkatesh-Resume.pdf" style={{ display: 'block', textDecoration: 'none' }}>
            <button className="btn-download">Download CV — PDF ↓</button>
          </a>
          <p style={{ marginTop: 10, fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.66rem', color: '#8C8C88', lineHeight: 1.5 }}>
            If you want the one-pager with dates and numbers, this is it. For the stories behind them, let's talk.
          </p>
        </div>
      </div>

      <div className="skills-wrap reveal reveal-delay-1" style={{ marginTop: 32 }}>
          <div className="skills-group">
          <h4>Things I use every week — for real</h4>
          <div className="tag-cloud">
            <span className="tag">Node.js <small>— services</small></span>
            <span className="tag">TypeScript <small>— strict, saves me</small></span>
            <span className="tag">Express <small>— REST</small></span>
            <span className="tag">React <small>— tables & flows</small></span>
            <span className="tag">Next.js <small>— where it matters</small></span>
            <span className="tag">MongoDB <small>— aggregations I still tune</small></span>
          </div>
        </div>
        <div className="skills-group">
          <h4>The glue — learned because we needed it</h4>
          <div className="tag-cloud">
            <span className="tag">Redis <small>— cache</small></span>
            <span className="tag">BullMQ <small>— background jobs</small></span>
            <span className="tag">Tailwind CSS</span>
            <span className="tag">Git / GitHub</span>
            <span className="tag">REST design</span>
            <span className="tag">Vercel / Render <small>— ship it</small></span>
          </div>
        </div>
      </div>

      <EducationExperience />
    </section>
  )
}

export default AboutMe
