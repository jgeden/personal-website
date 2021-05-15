import * as React from 'react'
import '../styles/navbar.css'

import clip from '../images/clip.jpg'

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="headshot vertical-center" src={clip} alt="navbar clip"/>
      <div className="center headers">
        <h1 className="name">Josh Geden</h1>
        <h2 className="no-top-margin">Student and Aspiring Software Engineer</h2>
      </div>
      <div className="links">
        <ul>
          <li><a href="/">About Me</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/coursework">Coursework</a></li>
          <li><a href="/resume">Resume</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
