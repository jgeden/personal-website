import * as React from 'react'
import '../styles/footer.css'

import github from '../images/github_logo.png'
import linkedin from '../images/linkedin_logo.png'

const Footer = ({fixed}) => {
  return (
    
    <div className={`footer ${fixed ? "fixed" : ""}`}>
      <div className="content">
        <a href="https://www.linkedin.com/in/joshua-geden/" target="_blank" rel="noreferrer">
          <img className="logo" id="linkedin_logo" src={linkedin} alt="linkedin logo" />
        </a>

        <a href="https://www.github.com/Josh0823" target="_blank" rel="noreferrer">
          <img className="logo" id="github_logo" src={github} alt="github logo" />
        </a>

        <p className="email">Contact me at: <a href="mailto:joshua.geden@duke.edu">joshua.geden@duke.edu</a></p>
      </div>
    </div>
  )
}

export default Footer
