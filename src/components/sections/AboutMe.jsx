import React from 'react'
import EducationExperience from './EducationExperience'
import resume from "../../assets/resume/resume.pdf"

const AboutMe = () => {
  return (
    <section id='about-me' className="section">
      <div className="section-head reveal">
        <div>
          <div className="section-label">01 — About</div>
          <h2 className="section-title">Startup engineer, <em>not just a coder.</em></h2>
        </div>
        <p className="section-desc">Joined an ERP startup early. Learned what it takes to turn an idea into software factories actually trust.</p>
      </div>

      <div className="about-grid reveal">
        <div className="about-copy">
          <p>
            I came from Civil Engineering because I liked <strong>systems with constraints</strong> — loads, tolerances, budgets. Building a startup ERP is the same, only the users are factory teams and a bug stops production.
          </p>
          <p>
            I joined <strong>Sharpminds Cloud Tech</strong> early (Aug 2024 — Present, Remote) when the ERP was still an idea. 2 years later we have a live platform running <strong>Purchase, Quality and Sales & Inventory</strong> for real operations. At a startup you don’t just “build modules” — you <strong>own the product</strong>: schema & aggregation design in MongoDB, typed REST APIs with Node/TypeScript/Express, Redis + BullMQ for speed and background jobs, and React/Next UIs that have to be fast for non-technical ops staff.
          </p>
          <p>
            That means product calls, shaping specs from customer feedback, making architecture trade-offs with a tiny team, and fixing production at 6pm because a customer is live. It’s taught me to write <strong>boring, testable code</strong> over clever code.
          </p>
          <p style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.78rem', letterSpacing: '0.04em', color: '#8C8C88', borderLeft: '2px solid #D94F30', paddingLeft: 12, marginTop: 16 }}>
            “My PRs come with tests, docs and a rollback note. At a startup, you learn that fast.”
          </p>
        </div>

        <div>
          <div className="detail-table">
            <div className="detail-row"><dt>Name</dt><dd>Chanda Venkatesh</dd></div>
            <div className="detail-row"><dt>Role</dt><dd>Early Full Stack Engineer</dd></div>
            <div className="detail-row"><dt>Company</dt><dd>Sharpminds Cloud Tech — ERP Startup</dd></div>
            <div className="detail-row"><dt>Location</dt><dd>Nirmal, Telangana — Remote</dd></div>
            <div className="detail-row"><dt>Email</dt><dd>venkateshvnky3803@gmail.com</dd></div>
            <div className="detail-row"><dt>Phone</dt><dd>+91 84639 44069</dd></div>
            <div className="detail-row"><dt>Degree</dt><dd>B.Tech Civil — MIST, Hyderabad</dd></div>
          </div>
          <a href={resume} download="Chanda-Venkatesh-Resume.pdf" style={{ display: 'block', textDecoration: 'none' }}>
            <button className="btn-download">Download résumé — PDF ↓</button>
          </a>
        </div>
      </div>

      <div className="skills-wrap reveal reveal-delay-1" style={{ marginTop: 32 }}>
          <div className="skills-group">
          <h4>What the startup made me ship with</h4>
          <div className="tag-cloud">
            <span className="tag">Node.js <small>— APIs / services</small></span>
            <span className="tag">TypeScript <small>— strict</small></span>
            <span className="tag">Express.js <small>— REST</small></span>
            <span className="tag">React.js <small>— UI</small></span>
            <span className="tag">Next.js <small>— SSR / App Router</small></span>
            <span className="tag">MongoDB <small>— aggregations</small></span>
          </div>
        </div>
        <div className="skills-group">
          <h4>Startup glue — infra & product</h4>
          <div className="tag-cloud">
            <span className="tag">Redis <small>— cache</small></span>
            <span className="tag">BullMQ <small>— queues</small></span>
            <span className="tag">Tailwind CSS</span>
            <span className="tag">Git / GitHub</span>
            <span className="tag">REST design</span>
            <span className="tag">Deployment — Vercel / Render</span>
          </div>
        </div>
      </div>

      <EducationExperience />
    </section>
  )
}

export default AboutMe
