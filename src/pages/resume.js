import * as React from "react"

import Navbar from '../components/navbar'
import Footer from '../components/footer'

import '../styles/resume.css'
import '../styles/global.css'

import resume from '../files/Joshua_Geden_Resume.pdf'

const ResumePage = () => {
  return (
    <div className="pagecontainer">
      <Navbar />
      <div className="resume">
        <div className="container">
          <div className="content">
            <a href="/resumefile" target="_blank" rel="noopener_noreferrer">Open PDF in new Tab</a>
            <br />
            <embed className="resumefile" src={resume} type="application/pdf" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ResumePage
