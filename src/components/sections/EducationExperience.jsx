import React from 'react'

const EducationExperience = () => {
  return (
    <div className='edu-grid reveal'>
      <div className="edu-col reveal">
        <h3>Experience</h3>
        <div className="timeline-item">
          <h4>Sharpminds Cloud Tech Pvt Ltd — ERP Startup</h4>
          <div className="meta">Early Full Stack Engineer — Remote · Aug 2024 → Present</div>
          <p>Joined as early engineering to build the ERP from 0 → 1. Now live with <strong>Purchase, Quality, Sales & Inventory</strong> powering real factory workflows.</p>
          <p style={{ marginTop: 6 }}>What I owned as a startup engineer:</p>
          <p>• Architecture & schema design for multi-module ERP — not just CRUD, but inventory logic that can’t drift<br />• Typed REST APIs (Node/TS/Express), Redis caching & BullMQ background jobs for scale<br />• MongoDB aggregations for reporting that Ops actually reads<br />• Direct customer feedback → spec → ship → iterate loops with a tiny team</p>
          <p style={{ marginTop: 8, fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.72rem', color: '#5A5A58' }}>→ Startup reality: product + engineering + support in one role. Stack: Node + TS + Express + Mongo + Redis + BullMQ + React/Next</p>
        </div>
        <div className="timeline-item">
          <h4>Independent — Product builds (pre-startup)</h4>
          <div className="meta">MERN builds · 2023 → 2024</div>
          <p>Shipped Dress Up (MERN + Redux), We The People (crowdfunding), WriteWave (blogging), PDF Engine — all live, authenticated, responsive. That’s where I learned to ship solo before shipping as a team.</p>
        </div>
      </div>

      <div className="edu-col reveal reveal-delay-1">
        <h3>Education & Certs</h3>
        <div className="timeline-item">
          <h4>Mahaveer Institute of Science and Technology</h4>
          <div className="meta">B.Tech — Civil Engineering · Hyderabad</div>
          <p>Systems thinking, structures and project management — still useful when modelling ERP domain logic.</p>
        </div>
        <div className="timeline-item">
          <h4>Narayana Junior College, Hyderabad</h4>
          <div className="meta">Intermediate — MPC · Madinaguda</div>
          <p>Maths / Physics / Chemistry foundation.</p>
        </div>
        <div className="timeline-item">
          <h4>upGrad — Full Stack Bootcamp</h4>
          <div className="meta">Feb 2023 → Oct 2023</div>
          <p>JavaScript ecosystem: React, Node, Express, Mongo — project-based.</p>
        </div>
      </div>
    </div>
  )
}

export default EducationExperience
