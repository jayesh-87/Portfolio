import React from 'react'
import siteConfig from '../data/siteConfig'

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container">
        <div>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</div>
        <div className="social">
          <a href={siteConfig.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}