import React, { useState } from 'react'
import ReactFullpage from '@fullpage/react-fullpage'

import resume from '../files/Joshua_Geden_Resume.pdf'
import github from '../images/github_logo.png'
import '../styles/main.css'

const anchors = ['Home', 'About', 'Projects', 'Contact']
const isBrowser = () => typeof window !== "undefined"

const Emoji = (props) => {
    return (
        <span className="emoji" role="img" aria-label="emoji">{props.emoji}</span>
    );
};

const Project = (props) => {
    return (
        <div className="slide">
            <div className="content">
                <h1 className="center">Projects</h1>
                <h2>
                    {props.title}
                    {props.link &&
                        <a href={props.link} target="_blank" rel="noreferrer">
                            <img className="img_link" src={github} alt="github logo" />
                        </a>
                    }
                </h2>
                <p>{props.description}</p>
                <p><b>Technologies: </b>{props.technologies}</p>
            </div>
        </div>
    );
};

const Body = () => (
    <ReactFullpage
        scrollingSpeed={1000}
        autoScrolling={true}
        navigation={isBrowser() && window.innerWidth > 700}
        anchors={anchors}
        navigationTooltips={anchors}
        showActiveTooltip={isBrowser() && window.innerWidth > 960}
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
                        <div className="content center" style={{ width: 'fit-content' }}>
                            <h1 style={{ width: 'fit-content', margin: 'auto' }}>
                                <Emoji emoji="😄" /> Hey, I'm Josh.
                            </h1>
                        </div>
                    </div>

                    {/* About Me */}
                    <div className="section" id="s2">
                        <div className="content">
                            <h1 className="center">About Me</h1>
                            <p>I was born and raised in South Carolina <Emoji emoji="🌙🌴" /> and am now living in the Bay Area <Emoji emoji="🚉🌉" />. I am a third-year undergraduate at Duke University, where I am studying Computer Science, Linguistics, & German. Go Blue Devils <Emoji emoji="🔵😈" />!</p>
                            <p>I am passionate about the use of tech for social good. I'm particularly interested in working with open-source tools to support scientific advancement.</p>
                            <p>I was previously a software engineer intern at the <a href="https://www.nersc.gov" target="_blank" rel="noreferrer">National Energy Scientific Computing Center</a> <Emoji emoji="⚡️🇺🇸🧪" /> and <a href="https://www.mealme.ai" target="_blank" rel="noreferrer">MealMe</a> <Emoji emoji="🍴🍔" />. I am currently an intern at <a href="https://www.lbl.gov" target="_blank" rel="noreferrer">Berkeley National Lab</a> working on the <a href="https://ameriflux.lbl.gov" target="_blank" rel="noreferrer">AmeriFlux</a> project, an international network dedicated to compiling actionable data on climate change.</p>
                        </div>
                    </div>

                    {/* Projects */}
                    <div className="section" id="s3">
                        <Project
                            title="JupyterHub Entrypoint Service"
                            link="https://github.com/NERSC/jupyterhub-entrypoint"
                            description="Some technology stacks at Berkeley Lab are incredibly specific, and many groups use virtual environments or container images to ensure reproducibility across multiple systems and users. I created a prototype web application service that stores user settings and interfaces with JupyterHub. This allows users to launch Jupyter in any virtual environment or image on NERSC's Cori supercomputer. I presented my project at the Jupyter in HPC monthly meeting and at the CSSSP Poster Session."
                            technologies="Javascript, Python, REST API, Selenium, CI/CD with GitHub Actions, Jupyter"
                        />
                        <Project
                            title="JupyterLab Announcements Extension"
                            link="https://github.com/Josh0823/nersc-refresh-announcements"
                            description="Some scientists at Berkeley live inside their JupyterLab notebooks, and very rarely check the hub for announcements. To make sure these scientists don't miss out on important news such as planned maintenance or ongoing issues, I developed a frontend JupyterLab extension that shows an announcements button in the status bar. No more confusion or lost work when the notebook suddenly goes down because of server maintenance!"
                            technologies="Typescript, Selenium, CI/CD with GitHub Actions, JupyterLab"
                        />
                        <Project
                            title="JupyterLab Additional Resources Menu"
                            link="https://github.com/Josh0823/additional-resources-menu"
                            description="Like most users, the scientists at Berkeley Lab very rarely consult the documentation before they run into issues. To help with this, I built a frontend extension for JupyterLab that adds an Additional Resources menu to the default Help Menu. This menu has links to documentation that can be set system-wide by an admin. Maybe by including links to the documentation inside of JupyterLab itself, the users will be more likely to read it... maybe."
                            technologies="Typescript, Selenium, CI/CD with GitHub Actions, JupyterLab"
                        />
                        <Project
                            title="This website!"
                            link="https://github.com/Josh0823/personal-website"
                            description="All the cool kids have their own personal website, and I wanted one too. I originally built this website with simple HTML & CSS and deployed with Flask and Heroku, but I transitioned to use React with Gatsby.js to improve rendering speed and improve organization. I've been making numerous updates since then. This is the third version, and it uses fullPage.js to create a single page website with auto-scrolling."
                            technologies="React, Gatsby.js, HTML, CSS"
                        />
                        <Project
                            title='"Raining Cats and Dogs" Full Stack Web App'
                            link="https://compsci290_2021spring.dukecs.io/portfolio_jmg136/Final/index.html"
                            description="Duke has a lot of cute animals around campus, such as Peaches the cat and Nugget the golden retriever. I've been off campus since COVID first hit the US and I've missed seeing these pets around campus. So for my final project for CS290, Web Application Development, I created a full-stack location-based image sharing web app with a CRUD database where people can upload sightings of Nugget, Peaches, or any other Duke campus pet."
                            technologies="Vue, Express, Google Firebase, Google OAuth, HTML, CSS"
                        />
                        <Project
                            title="RISC Processor"
                            description="For my first (and so far only) electrical & computer engineering course at Duke, I created a 16-bit MIPS-like, word-addressed reduced instruction set computer (RISC) architecture. What a mouthful. I designed and implemented all of the necessary circuit components with Logism and tested my implementation with MIPS-like assembly code. It was a fun project, and I learned a lot about computer engineering, but this project also made me realize just how much more I prefer to do software. Sorry Professor Lebeck."
                            technologies="Digital Circuits, Assembly Language Programming, Logism"
                        />
                        <Project
                            title="FIRST Robotics OnBot Java Control System"
                            description="As the team captain and software captain for my school's robotics team, I was in charge of implementing our robot's control system for FIRST's Robotics Competition. I developed a wireless gamepad control system and included controls for the drive train, arm control, and collection mechanism. I also developed an autonomous program that used sensors to guide the robot during the autonomous portion of the competition."
                            technologies="OnBot Java Library, Java"
                        />
                        <Project
                            title="SimplyFrank Simulated Compiler and Assembler"
                            link="https://github.com/Josh0823/SimplyFrank"
                            description='SimplyFrank holds a special place in my heart as my first "big" CS project. A partner and I spent a month and a half designing and implementing our own programming language called SimplyFrank that compiles to a simulated assembly language called SML (Simple Machine Language). We wrote an assembler program that was able to execute SML code through C++ and then we wrote a compiler program that took our SimplyFrank code and turned it into SML code.'
                            technologies="C++, Assembly Language Programming, Stacks, Queues, Maps"
                        />
                    </div>

                    {/* Contact */}
                    <div className="section" id="s4">
                        <div className="content">
                            <h1 className="center">Contact</h1>
                            <p>The best way to contact me is to email me at <a href="mailto:joshua.geden@duke.edu" style={{ textDecoration: 'underline' }}>joshua.geden@duke.edu</a> or to message me on LinkedIn.</p>
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
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, 5)

    return (
        <html lang="en">
            <head>
                <title>Home | Josh Geden</title>
            </head>
            {!loading &&
                <div>
                    <Body />
                    <Footer />
                </div>
            }
        </html>
    )
}

export default IndexPage
