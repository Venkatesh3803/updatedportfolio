import React from 'react'

const services = [
  {
    num: '01',
    kicker: 'For factories & ops teams',
    title: 'ERP parts that can’t be off by one',
    desc: 'Purchase, quality, inventory — where a count wrong by 1 stops a line. I map the flow on paper first, then build the schema, APIs and reports that the floor team checks at 9am and trusts.',
    uses: 'Node · TypeScript · Express · MongoDB · Redis · BullMQ',
    footnote: 'Recently: partial GRN → inspection → stock update that doesn’t double-count. Took a Friday to get right.',
  },
  {
    num: '02',
    kicker: 'For stores & platforms',
    title: 'Shops people actually finish buying from',
    desc: 'Not a demo with fake data. Auth that holds, cart that survives a refresh, filters that make sense. I spend time on the 5 seconds before checkout — that’s where you lose people.',
    uses: 'MERN · Redux Toolkit · payments-ready flows',
    footnote: 'Dress Up & We The People — solo, live, not mocked. Cold starts on Render, I warn users.',
  },
  {
    num: '03',
    kicker: 'For founders & small teams',
    title: 'Small tools that remove friction',
    desc: 'The PDF merger I built because I was tired of ad walls. The editor that gets out of your way. One job, done well, works on a cheap Android phone.',
    uses: 'React · Next.js · good type & speed',
    footnote: 'PDF Engine — client-side, no upload. Boring UI on purpose.',
  },
]

const Services = () => {
  return (
    <section id='services' className="section">
      <div className="section-head reveal">
        <div>
          <div className="section-label">02 — What I do</div>
          <h2 className="section-title">I don’t sell “services.” <em>I ship the boring bit that has to work.</em></h2>
        </div>
        <p className="section-desc">Not a 10-item stack list. Three things people actually call me for — and how I approach them.</p>
      </div>

      <div className="services-grid">
        <div className="services-main">
          {services.map((s, i) => (
            <article key={s.num} className={`service-card reveal ${i === 1 ? 'reveal-delay-1' : ''} ${i === 2 ? 'service-card--tilt' : ''}`}>
              <div className="service-top">
                <span className="service-num">{s.num}</span>
                <span className="service-kicker">{s.kicker}</span>
              </div>
              <h3>{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <div className="service-uses">{s.uses}</div>
              <div className="service-note">→ {s.footnote}</div>
            </article>
          ))}
        </div>

        <aside className="services-side reveal reveal-delay-1">
          <div className="side-card side-card--process">
            <h4>How I work — really</h4>
            <ol className="process-list">
              <li><b>Listen & sketch</b><span>30-min call. I draw your flow back to you on paper. If I can’t, I don’t code yet.</span></li>
              <li><b>Slice thin</b><span>Smallest shippable step, not a 3-month spec. You see it live in days.</span></li>
              <li><b>Ship & stay</b><span>PR with tests & rollback note. Then I stick around when real users hit it.</span></li>
            </ol>
            <p className="side-small">If I’m not a fit, I’ll say it on that first call. Waste of both our time otherwise.</p>
          </div>

          <div className="side-card">
            <h4>Tools I reach for</h4>
            <div className="side-tags">
              <span>Node.js</span><span>TypeScript</span><span>Express</span><span>React</span><span>Next.js</span><span>MongoDB</span><span>Redis</span><span>BullMQ</span><span>Tailwind</span><span>Git</span>
            </div>
            <p className="side-small" style={{ marginTop: 10 }}>Not buzzwords. Things I’ve fixed at 5pm and shipped at 6pm.</p>
          </div>

          <div className="side-card side-card--quote">
            <p>“At a factory, a bug isn’t a vibe — it stops work. That keeps me honest.”</p>
            <span>— my notebook, after a long Friday</span>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default Services
