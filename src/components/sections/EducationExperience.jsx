import React from 'react'

const EducationExperience = () => {
  return (
    <div className='edu-grid reveal'>
      <div className="edu-col reveal">
        <h3>Work</h3>
        <div className="timeline-item">
          <h4>Sharpminds Cloud Tech — ERP startup</h4>
          <div className="meta">Early Full Stack Engineer — Remote · Aug 2024 → now</div>
          <p>Joined when the ERP was a Figma and a Mongo blank. Today <strong>Purchase, Quality, Sales & Inventory</strong> run live and people depend on it. That changes how you code.</p>
          <p style={{ marginTop: 8 }}>A few things I actually did:</p>
          <p>
            • Drew inventory flows on paper first — then modelled them in Mongo so stock never drifts. Learned the hard way when an opening stock mismatch took a Friday evening to fix.<br />
            • Wrote typed REST APIs (Node/TS/Express) and put Redis + BullMQ around the slow parts so reports don't freeze the UI.<br />
            • Built aggregations for the reports ops teams check every morning. If it's slow at 9am, you hear about it.<br />
            • Sat on customer calls, turned “it's confusing” into a checklist, shipped it the same week. Small team = you hear feedback directly.
          </p>
          <p style={{ marginTop: 8, fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.72rem', color: '#5A5A58' }}>Stack I touch weekly: Node · TypeScript · Express · MongoDB · Redis · BullMQ · React / Next · Tailwind</p>
        </div>
        <div className="timeline-item">
          <h4>On my own — before the startup</h4>
          <div className="meta">Solo builds · 2023 → 2024</div>
          <p>I needed reps. So I built and shipped four live apps end-to-end — auth, DB, deploy, the works. <strong>Dress Up</strong> (store with Redux), <strong>We The People</strong> (crowdfunding), <strong>WriteWave</strong> (writing app), <strong>PDF Engine</strong>. They’re not perfect, but they’re live and I keep them running. That taught me to finish.</p>
        </div>
      </div>

      <div className="edu-col reveal reveal-delay-1">
        <h3>Study</h3>
        <div className="timeline-item">
          <h4>Mahaveer Institute of Science and Technology</h4>
          <div className="meta">B.Tech — Civil Engineering · Hyderabad</div>
          <p>Not the obvious path to code. But estimating, scheduling, and “what happens if this beam fails” turned out to be good training for thinking about edge cases in ERP.</p>
        </div>
        <div className="timeline-item">
          <h4>Narayana Junior College, Hyderabad</h4>
          <div className="meta">Intermediate — MPC · Madinaguda</div>
          <p>Maths, Physics, Chemistry. Lots of problem sheets. Liked the ones you could check yourself.</p>
        </div>
        <div className="timeline-item">
          <h4>upGrad — Full Stack Bootcamp</h4>
          <div className="meta">Feb 2023 → Oct 2023 · remote, nights</div>
          <p>Where I learned to stop watching tutorials and start shipping. React, Node, Express, Mongo — mostly by building and breaking things.</p>
        </div>
      </div>
    </div>
  )
}

export default EducationExperience
