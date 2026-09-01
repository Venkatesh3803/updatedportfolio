import React from 'react'
import { Link } from 'react-router-dom'
import projectsData from '../../data/projectsData'

const Projects = () => {
  return (
    <section id='projects' className="section">
      <div className="section-head reveal">
        <div>
          <div className="section-label">03 — Selected work</div>
          <h2 className="section-title">What I <em>can show</em> — the ERP stays private.</h2>
        </div>
        <p className="section-desc">The Sharpminds ERP is under NDA, so I put five solo products here instead. Same stack, same habits — just things you can actually click.</p>
      </div>

      <div className="projects-index">
        {projectsData.map((project, idx) => (
          <article key={project.id} className={`project-row reveal ${idx % 2 === 1 ? 'reveal-delay-1' : ''}`}>
            <div className="project-num">0{idx + 1}</div>
            <div className="project-main">
              <div className="project-kicker">{project.technologies} — {project.id === 5 ? 'Small & useful →' : 'Full case study'}</div>
              <h3><a href={project.liveProject} target="_blank" rel="noreferrer">{project.title}</a></h3>
              <p>{project.shortDesc}</p>
              <div className="project-tags">
                {project.technologies.split('|').map(t => (
                  <span key={t.trim()}>{t.trim()}</span>
                ))}
              </div>
              <div className="project-links">
                {project.gitHub ? <a href={project.gitHub} target="_blank" rel="noreferrer">GitHub ↗</a> : <span className="disabled">Private source</span>}
                <a href={project.liveProject} target="_blank" rel="noreferrer">Live site ↗</a>
                <Link to={`/project/${project.id}`}>Read the story →</Link>
              </div>
            </div>
            <div className="project-media">
              <img src={project.image} alt={project.title} loading="lazy" />
            </div>
          </article>
        ))}
      </div>
      <p style={{ marginTop: 12, fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.70rem', color: '#8C8C88', lineHeight: 1.6 }}>
        Note from me: the ERP work I’m most proud of — Purchase / Quality / Sales & Inventory with Redis, BullMQ, aggregations — is private. Happy to talk through it on a call and show architecture diagrams.
      </p>
    </section>
  )
}

export default Projects
