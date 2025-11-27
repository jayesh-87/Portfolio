import React from 'react'
import siteConfig from '../data/siteConfig'
import profile from '../assets/profile.png'

export default function Hero(){
  return (
    <div className="hero container">
      <div className="hero-left">
        <h1>{siteConfig.name}</h1>
        <p className="tagline">{siteConfig.tagline}</p>

        <p className="intro">
          Hi — I'm a Python Full-Stack Developer and Data Science enthusiast.  
          I build scalable web applications, clean APIs, and data-driven solutions.
        </p>

        <div className="cta">
          <a className="btn" href="#contact">Hire Me</a>
          <a className="btn ghost" href={siteConfig.resume} download>Download Resume</a>
        </div>
      </div>

      <div className="hero-right">
        <img src={profile} alt="Profile" className="profile" />
      </div>
    </div>
  )
}
