import * as React from "react"

import Navbar from '../components/navbar'
import Footer from '../components/footer'

import '../styles/projects.css'
import '../styles/global.css'

import github from '../images/github_logo.png'

const ProjectsPage = () => {
  return (
    <div className="pagecontainer">
      <title>Projects | Josh Geden</title>
      <Navbar />
      <div className="projects">
        <div className="content">
          <ul>
            <li className="project">
              <h3>JupyterLab Announcements Refresh Extension
                <a href="https://github.com/Josh0823/nersc-refresh-announcements" target="_blank" rel="noreferrer">
                  <img className="img_link" src={github} alt="github logo" />
                </a>
              </h3>
              <ul>
                <li>The Berkeley Lab JupyterLab system has the ability to show an annoucement when users login to JupyterLab, but some scientists live inside their JupyterLab notebooks, and very rarely login more than once or twice every couple of days. To make sure these scientists don't miss out on important announcements such as planned maintenance or ongoing issues, I developed a frontend JupyterLab extension that will ping the announcements API every 5 minutes and if there is an ongoing announcement, it will give the user a headups in their status bar. They can click on this notification to then view the announcement. No more confusion or lost work when the notebook suddenly goes down because of server maintenance!</li>
                <li><b>Technologies:</b> Typescript, Python, Selenium, CI/CD with GitHub Actions, JupyterLab</li>
              </ul>
            </li>
            <li className="project">
              <h3>JupyterLab Additional Resources Menu Extension
                <a href="https://github.com/Josh0823/additional-resources-menu" target="_blank" rel="noreferrer">
                  <img className="img_link" src={github} alt="github logo" />
                </a>
              </h3>
              <ul>
                <li>Like most users, the scientists at Berkeley National Lab very rarely consult the documentation before they run into issues. So the lab service consultants often have to remind the scientists to check the lab's documentation on JupyterLab just in case their problem has already been solved. To help with this issue, I built a frontend extension for JupyterLab that adds an Additional Resources menu to the default Help Menu. This menu has links to documentation that can be set system-wide by an admin. Maybe by including links to the documentation inside of JupyterLab itself, the users will be more likely to read it... maybe.</li>
                <li><b>Technologies:</b> Typescript, Python, Selenium, CI/CD with GitHub Actions, JupyterLab</li>
              </ul>
            </li>
            <li className="project">
              <h3>This website!
                <a href="https://github.com/Josh0823/personal-website" target="_blank" rel="noreferrer">
                  <img className="img_link" src={github} alt="github logo" />
                </a>
              </h3>
              <ul>
                <li>All the cool kids have their own personal website, and I wanted one too. I built this website with simple HTML and CSS and deployed it with Flask and Heroku. While not the most technologically complex, I did spend a lot of time googling how to properly center divs, so I hope you enjoy my hard work.</li>
                <li><b>Technologies:</b> HTML, CSS, Flask, Heroku</li>
              </ul>
            </li>
            <li className="project">
              <h3>"Raining Cats and Dogs" Full Stack Web App
                <a href="https://compsci290_2021spring.dukecs.io/portfolio_jmg136/Final/index.html" target="_blank" rel="noreferrer">
                  <img className="img_link" src={github} alt="github logo" />
                </a>
              </h3>
              <ul>
                <li>Duke has a lot of cute animals around campus, such as Peaches the cat and Nugget the golden retriever. I've been off campus since COVID first hit the US and I've missed seeing these pets around campus. So for my final project for CS290, Web Application Development, I created a full-stack location-based image sharing web app where people can upload sightings of Nugget, Peaches, or any other Duke campus pet.</li>
                <li><b>Technologies:</b> Vue, Express, Google Firebase Database & Storage, Google Passport OAuth, HTML, CSS</li>
              </ul>
            </li>
            <li className="project">
              <h3>RISC Processor</h3>
              <ul>
                <li>For my first (and so far only) electrical & computer engineering course at Duke, I created a 16-bit MIPS-like, word-addressed reduced instruction set computer (RISC) architecture (what a mouthful). I designed and implemented all of the necessary circuit components to create this RISC architecture with Logism and tested my implementation with MIPS-like assembly code. It was a fun project, and I learned a lot about computer engineering, but this project also made me realize just how much more I prefer to do software. Sorry Professor Lebeck.</li>
                <li><b>Technologies:</b> Digital Circuits, Assembly Language Programming, Logism</li>
              </ul>
            </li>
            <li className="project"><h3>Huffman File Compressor</h3>
              <ul>
                <li>Don't you just hate how big some text files are? Do you wish you could make them smaller while also learning about Binary Trees and Priority Queues? Well do I have the algorithm for you. For my Algorithms & Data Structures course at Duke I implemented the Huffman Encoding Algorithm to compress and decompress text files with zero loss. My implementation of the algorithm was able to compress files by over 40% on average.</li>
                <li><b>Technologies:</b> BinaryTrees, PriorityQueues, Arrays, Java</li>
              </ul>
            </li>
            <li className="project"><h3>FIRST Robotics OnBot Java Control System</h3>
              <ul>
                <li>As the team captain and software captain for my school's robotics team, I was in charge of implementing our robot's control system with FIRST's OnBot Java library. I developed a remote-controlled program that allowed my team to control the robot wirelessly through a gamepad and included controls for the drive train, arm control, and our collection mechanism. I also developed an autonomous program that used sensors to guide the robot during the autonomous portion of the competition. I was also the driver during the remote-controlled portion of the competition, and guided our robot to 2nd place at FIRST's regional competition.</li>
                <li><b>Technologies:</b> OnBot Java Library, Java</li>
              </ul>
            </li>
            <li className="project">
              <h3>SimplyFrank Simulated Compiler and Assembler
                <a href="https://github.com/Josh0823/SimplyFrank" target="_blank" rel="noreferrer">
                  <img className="img_link" src={github} alt="github logo" />
                </a>
              </h3>
              <ul>
                <li>SimplyFrank holds a special place in my heart as the first "big" CS project I ever wrote. For my C++ Applications course that I took in high school, a partner and I spent a month and a half designing and implementing our own programming language called SimplyFrank. Our teacher gave us documentation on a simulated assembly language called SML (Simple Machine Language) that our code had to compile to. We wrote an assembler program that was able to execute SML code through C++ and then we wrote a compiler program that took our SimplyFrank code and turned it into SML code. We then presented our work as well as example programs written in SimplyFrank in lieu of a final exam.</li>
                <li><b>Technologies:</b> Stacks, Queues, C++, Assembly Language Programming</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  )
}
export default ProjectsPage