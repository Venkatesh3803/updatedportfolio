import React from 'react'

const rows = [
  { name: 'Node.js', icon: '⬢', desc: 'Startup-grade services — layered architecture, validation and error handling you can trust at 5pm on a Friday.', use: 'APIs / Workers' },
  { name: 'React.js', icon: '◈', desc: 'Ops-friendly UIs — dense tables, filters and flows that factory teams use all day without training.', use: 'Frontend' },
  { name: 'Next.js', icon: '▲', desc: 'SSR & App Router for fast, reliable web apps — what we used to ship customer-facing surfaces.', use: 'Web Apps' },
  { name: 'TypeScript', icon: 'TS', desc: 'Strict types across the ERP — shared DTOs that stop inventory bugs before they hit production.', use: 'Everywhere' },
  { name: 'Express.js', icon: '≋', desc: 'Clean, modular REST APIs with auth and role layers — built to grow with a startup’s scope creep.', use: 'REST APIs' },
  { name: 'MongoDB', icon: '⬣', desc: 'Schemas, indexes and aggregations that power real ERP reports — not demo dashboards.', use: 'Database' },
]

const Services = () => {
  return (
    <section id='services' className="section">
      <div className="section-head reveal">
        <div>
          <div className="section-label">02 — Stack & Capabilities</div>
          <h2 className="section-title">What a <em>startup</em> forced me<br />to get good at.</h2>
        </div>
        <p className="section-desc">At a startup you can’t say “that’s not my layer.” Here’s where I’ve had to be solid — backend to frontend.</p>
      </div>

      <div className="stack-table reveal">
        {rows.map((r, i) => (
          <div key={r.name} className={`stack-row reveal ${i % 2 === 0 ? '' : 'reveal-delay-1'}`}>
            <div className="stack-name">
              <span className="stack-icon">{r.icon}</span>
              {r.name}
            </div>
            <div className="stack-desc">{r.desc}</div>
            <div className="stack-use">{r.use}</div>
          </div>
        ))}
      </div>
      <p style={{ marginTop: 12, fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.70rem', color: '#8C8C88', letterSpacing: '0.04em' }}>
        Startup glue: Redis (caching), BullMQ (queues), Tailwind, Git, Vercel/Render. Learned on the job because the startup needed it yesterday.
      </p>
    </section>
  )
}

export default Services
