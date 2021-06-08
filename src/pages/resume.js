import * as React from "react"

import Navbar from '../components/navbar'
import Footer from '../components/footer'

import '../styles/resume.css'
import '../styles/global.css'

import resume from '../files/Joshua_Geden_Resume.pdf'

const ResumePage = () => {
  return (
    <div className="pagecontainer">
      <title>Resume | Josh Geden</title>
      <Navbar />
      <div className="resume">
        <div className="container">
          <div className="content">
            <a href={resume} target="_blank" rel="noreferrer">Open PDF in new Tab</a>
            <br />
            <embed className="resumefile" src={resume} alt="pdf" pluginspage="http://www.adobe.com/products/acrobat/readstep2.html" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ResumePage
