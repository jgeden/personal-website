import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import '../styles/style.css'

const Body = () => (
  <ReactFullpage
    //fullpage options
    licenseKey={'YOUR_KEY_HERE'}
    scrollingSpeed={1000} /* Options here */
    autoScrolling={true}
    navigation={true}
    anchors={['section1', 'section2', 'section3', 'section4']}
    navigationTooltips={['Home', 'About', 'Project', 'Contact']}
    // showActiveTooltip={window.innerWidth > 960}
    showActiveTooltip={true}
    controlArrows={false}
    continuousVertical={true}

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section" id="s1">
            <div className="content center">
              <h1 style={{width: 'fit-content', margin: 'auto'}}>
                <span className="emoji" role="img" aria-label="smile emoji">😄</span> Hey, I'm Josh.
              </h1>
            </div>
          </div>

          {/* About Me */}
          <div className="section" id="s2">
            <div className="content">
              <h1 className="center">About Me</h1>
              <p>I am a small-town kid, born and raised in South Carolina <span className="emoji" role="img" aria-label="SC emojis">🌙🌴</span>. I am currently a junior at Duke, where I am studying Computer Science, Linguistics, & German. Go Blue Devils <span className="emoji" role="img" aria-label="blue devil emojis">🔵😈</span>!</p>
              <p>I am passionate about the use of tech for social good. My specific interests include using tech to transform educational spaces and to overcome linguistic barriers.</p>
              <p>I am currently a software engineer intern at <a href="https://www.lbl.gov" target="_blank" rel="noreferrer">Lawrence Berkeley National Lab</a> <span className="emoji" role="img" aria-label="national lab emojis">🌇🇺🇸🧪</span>and <a href="https://www.nersc.gov" target="_blank" rel="noreferrer">NERSC</a>. My work focuses on developing software with Javascript and Python <span className="emoji" role="img" aria-label="javascript and python emojis">☕️🐍</span> to make the supercomputers at Berkeley more accessible and user friendly through Jupyter.</p>
            </div>
          </div>

          {/* Projects */}
          <div className="section" id="s3">
            <div className="slide">
              <div className="content">
                <h1 className="center">Projects</h1>
                <h2>NERSC Dask Launcher</h2>
                <p>Not every scientist at Berkeley Lab is a command line wizard, so I developed a frontend Jupyter widget for launching Dask distributed computing clusters on NERSC's Cori supercomputer without the need for using the terminal. Users can instead specify their launch arguments in a simple form widget that then automatically handles the resource allocation on Cori and the configuration of the Dask client.</p>
                <p><b>Technologies: </b>Python, Dask, Bash, JupyterLab</p>
                <div style={{display: 'inline-block'}}>
                <a style={{float: 'left'}} href="">Prev</a>
                <a style={{float: 'right'}} href="#section3/1">Next</a>
                </div>
              </div>
            </div>
            <div className="slide">
              <div className="content">
                <h1 className="center">Projects</h1>
                <p>slide 2</p>
                <a href="#section3/0">Prev</a>
                <a href="">Next</a>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="section" id="s4">
            <div className="content">
              <h1 className="center">Contact</h1>
              <p>The best way to contact me is to email me at <a href="mailto:joshua.geden@duke.edu">joshua.geden@duke.edu</a> or to message me on LinkedIn.</p>
            </div>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

const IndexPage = () => {
  return (
    <div>
      {Body()}
      {/* Footer */}
      <div id="footer">
        <a href="assets/Joshua_Geden_Resume.pdf" target="_blank" rel="noreferrer">Resume</a>
        <a href="https://linkedin.com/in/joshua-geden" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/Josh0823" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </div>
  )
}

export default IndexPage
