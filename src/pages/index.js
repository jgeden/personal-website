import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'

import resume from '../files/Joshua_Geden_Resume.pdf'
import github from '../images/github_logo.png'
import '../styles/style.css'

const anchors = ['Home', 'About', 'Projects', 'Contact']
const isBrowser = () => typeof window !== "undefined"

const Body = () => (
  <ReactFullpage
    scrollingSpeed={1000}
    autoScrolling={true}
    navigation={isBrowser() && window.innerWidth > 800}
    anchors={anchors}
    navigationTooltips={anchors}
    showActiveTooltip={isBrowser() && window.innerWidth > 900}
    controlArrows={false}
    continuousVertical={true}
    slidesNavigation={true}
    onLeave={(origin, destination, direction) => {
      document.title = anchors[destination.index] + ' | Josh Geden'
    }}

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          {/* Home Page */}
          <div className="section" id="s1">
            <div className="content center">
              <h1 style={{ width: 'fit-content', margin: 'auto' }}>
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
                <h2>NERSC Dask Launcher Widget
                  <a href="https://github.com/Josh0823/nersc-dask-launcher" target="_blank" rel="noreferrer">
                    <img className="img_link" src={github} alt="github logo" />
                  </a>
                </h2>
                <p>Not every scientist at Berkeley Lab is a command line wizard, so I developed a frontend Jupyter widget for launching Dask distributed computing clusters on NERSC's Cori supercomputer without the need for using the terminal. Users can instead specify their launch arguments in a simple form widget that then automatically handles the resource allocation on Cori and the configuration of the Dask client.</p>
                <p><b>Technologies: </b>Python, Dask, Bash, JupyterLab</p>
              </div>
            </div>
            <div className="slide">
              <div className="content">
                <h1 className="center">Projects</h1>
                <h2>JupyterLab Announcements Extension
                  <a href="https://github.com/Josh0823/nersc-refresh-announcements" target="_blank" rel="noreferrer">
                    <img className="img_link" src={github} alt="github logo" />
                  </a>
                </h2>
                <p>Some scientists at Berkeley live inside their JupyterLab notebooks, and very rarely check the hub for announcements. To make sure these scientists don't miss out on important news such as planned maintenance or ongoing issues, I developed a frontend JupyterLab extension that shows an announcements button in the status bar. No more confusion or lost work when the notebook suddenly goes down because of server maintenance!</p>
                <p><b>Technologies: </b>Typescript, Selenium, CI/CD with GitHub Actions, JupyterLab</p>
              </div>
            </div>
            <div className="slide">
              <div className="content">
                <h1 className="center">Projects</h1>
                <h2>JupyterLab Additional Resources Menu
                  <a href="https://github.com/Josh0823/additional-resources-menu" target="_blank" rel="noreferrer">
                    <img className="img_link" src={github} alt="github logo" />
                  </a>
                </h2>
                <p>Like most users, the scientists at Berkeley Lab very rarely consult the documentation before they run into issues. To help with this, I built a frontend extension for JupyterLab that adds an Additional Resources menu to the default Help Menu. This menu has links to documentation that can be set system-wide by an admin. Maybe by including links to the documentation inside of JupyterLab itself, the users will be more likely to read it... maybe.</p>
                <p><b>Technologies: </b>Typescript, Selenium, CI/CD with GitHub Actions, JupyterLab</p>
              </div>
            </div>
            <div className="slide">
              <div className="content">
                <h1 className="center">Projects</h1>
                <h2>This website!
                  <a href="https://github.com/Josh0823/personal-website" target="_blank" rel="noreferrer">
                    <img className="img_link" src={github} alt="github logo" />
                  </a>
                </h2>
                <p>All the cool kids have their own personal website, and I wanted one too. I originally built this website with simple HTML & CSS and deployed with Flask and Heroku, but I transitioned to use React with Gatsby.js to improve rendering speed and improve organization. I've been making numerous updates since then. This is the third version, and it uses fullPage.js to create a single page website with auto-scrolling.</p>
                <p><b>Technologies: </b>React, Gatsby.js, HTML, CSS</p>
              </div>
            </div>
            <div className="slide">
              <div className="content">
                <h1 className="center">Projects</h1>
                <h2>"Raining Cats and Dogs" Full Stack Web App
                  <a href="https://compsci290_2021spring.dukecs.io/portfolio_jmg136/Final/index.html" target="_blank" rel="noreferrer">
                    <img className="img_link" src={github} alt="github logo" />
                  </a>
                </h2>
                <p>Duke has a lot of cute animals around campus, such as Peaches the cat and Nugget the golden retriever. I've been off campus since COVID first hit the US and I've missed seeing these pets around campus. So for my final project for CS290, Web Application Development, I created a full-stack location-based image sharing web app with a CRUD database where people can upload sightings of Nugget, Peaches, or any other Duke campus pet.</p>
                <p><b>Technologies: </b>Vue, Express, Google Firebase, Google OAuth, HTML, CSS</p>
              </div>
            </div>
            <div className="slide">
              <div className="content">
                <h1 className="center">Projects</h1>
                <h2>RISC Processor</h2>
                <p>For my first (and so far only) electrical & computer engineering course at Duke, I created a 16-bit MIPS-like, word-addressed reduced instruction set computer (RISC) architecture. What a mouthful. I designed and implemented all of the necessary circuit components with Logism and tested my implementation with MIPS-like assembly code. It was a fun project, and I learned a lot about computer engineering, but this project also made me realize just how much more I prefer to do software. Sorry Professor Lebeck.</p>
                <p><b>Technologies: </b>Digital Circuits, Assembly Language Programming, Logism</p>
              </div>
            </div>
            <div className="slide">
              <div className="content">
                <h1 className="center">Projects</h1>
                <h2>FIRST Robotics OnBot Java Control System</h2>
                <p>As the team captain and software captain for my school's robotics team, I was in charge of implementing our robot's control system for FIRST's Robotics Competition. I developed a wireless gamepad control system and included controls for the drive train, arm control, and collection mechanism. I also developed an autonomous program that used sensors to guide the robot during the autonomous portion of the competition.</p>
                <p><b>Technologies: </b>OnBot Java Library, Java</p>
              </div>
            </div>
            <div className="slide">
              <div className="content">
                <h1 className="center">Projects</h1>
                <h2>SimplyFrank Simulated Compiler and Assembler
                  <a href="https://github.com/Josh0823/SimplyFrank" target="_blank" rel="noreferrer">
                    <img className="img_link" src={github} alt="github logo" />
                  </a>
                </h2>
                <p>SimplyFrank holds a special place in my heart as my first "big" CS project. A partner and I spent a month and a half designing and implementing our own programming language called SimplyFrank that compiles to a simulated assembly language called SML (Simple Machine Language). We wrote an assembler program that was able to execute SML code through C++ and then we wrote a compiler program that took our SimplyFrank code and turned it into SML code.</p>
                <p><b>Technologies: </b>C++, Assembly Language Programming, Stacks, Queues, Maps</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="section" id="s4">
            <div className="content">
              <h1 className="center">Contact</h1>
              <p>The best way to contact me is to email me at <a style={{ textDecoration: 'underline' }}>joshua.geden(at)duke.edu</a> or to message me on LinkedIn.</p>
            </div>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

const Footer = () => {
  return (
    <div id="footer">
      <a href={resume} target="_blank" rel="noreferrer">Resume</a>
      <a href="https://linkedin.com/in/joshua-geden" target="_blank" rel="noreferrer">LinkedIn</a>
      <a href="https://github.com/Josh0823" target="_blank" rel="noreferrer">GitHub</a>
    </div>
  )
}

const IndexPage = () => {
  return (
    <div>
      <title>Home | Josh Geden</title>
      {Body()}
      {Footer()}
    </div>
  )
}

export default IndexPage
