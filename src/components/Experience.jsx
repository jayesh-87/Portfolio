import React from 'react'
import siteConfig from '../data/siteConfig'

export default function Experience(){
  return (
    <div className="experience container">
      <h2>Tranning & Internship</h2>
      <div className="timeline">
        {siteConfig.experience.map(e => (
          <div className="timeline-item" key={e.id}>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>{e.role} <span className="muted">@ {e.company}</span></h3>
              <div className="muted">{e.period}</div>
              <p>{e.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
