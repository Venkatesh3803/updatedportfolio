import React from 'react'
import projectsData from '../../data/projectsData'

const Projects = () => {
  return (
    <section id='projects' className="section">
      <div className="section-head reveal">
        <div>
          <div className="section-label">03 — Selected Work</div>
          <h2 className="section-title">Public work, <em>startup stack.</em></h2>
        </div>
        <p className="section-desc">The ERP startup is private — so here are 5 live products I shipped with the same stack, end-to-end.</p>
      </div>

      <div className="projects-index">
        {projectsData.map((project, idx) => (
          <article key={project.id} className={`project-row reveal ${idx % 2 === 1 ? 'reveal-delay-1' : ''}`}>
            <div className="project-num">0{idx + 1}</div>
            <div className="project-main">
              <div className="project-kicker">{project.technologies} — {project.id === 5 ? 'Live →' : 'Case study'}</div>
              <h3><a href={project.liveProject} target="_blank" rel="noreferrer">{project.title}</a></h3>
              <p>{project.shortDesc}</p>
              <div className="project-tags">
                {project.technologies.split('|').map(t => (
                  <span key={t.trim()}>{t.trim()}</span>
                ))}
              </div>
              <div className="project-links">
                {project.gitHub ? <a href={project.gitHub} target="_blank" rel="noreferrer">GitHub ↗</a> : <span className="disabled">Private source — ERP/NDA</span>}
                <a href={project.liveProject} target="_blank" rel="noreferrer">Live site ↗</a>
                <a href={`/project/${project.id}`} rel="noreferrer">Details →</a>
              </div>
            </div>
            <div className="project-media">
              <img src={project.image} alt={project.title} loading="lazy" />
            </div>
          </article>
        ))}
      </div>
      <p style={{ marginTop: 12, fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.70rem', color: '#8C8C88' }}>
        Note: Sharpminds ERP is a private startup product — happy to walk through architecture & startup learnings on a call under NDA.
      </p>
    </section>
  )
}

export default Projects
