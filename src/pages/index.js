import React, { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";

import { Helmet } from "react-helmet";
import Icon from "@mdi/react";
import {
  mdiCellphone,
  mdiDiscord,
  mdiEmail,
  mdiGithub,
  mdiLinkedin,
} from "@mdi/js";

import Footer from "../components/Footer";
import TitleBar from "../components/TitleBar";

import resume from "../files/Joshua_Geden_Resume.pdf";
import resumePNG from "../images/resume.png";

import berekelyLogo from "../images/berkeley-logo.png";
import mealmeLogo from "../images/mealme-logo.png";
import nasaLogo from "../images/nasa-logo.png";
import nerscLogo from "../images/nersc-logo.png";
import "../styles/main.css";

const anchors = ["home", "about", "projects", "resume"];
const isBrowser = () => typeof window !== "undefined";
const mobileViewWidth = 600;

const Project = (props) => {
  return (
    <div className="slide">
      <div className="w-4/5 max-w-[760px] m-auto">
        <div className="flex flex-row items-center">
          <h3 className="mb-3">{props.title}</h3>
          <a href={props.link} target="_blank" rel="noreferrer">
            <Icon
              path={mdiGithub}
              className="w-6 ml-3 mb-2 hover:bg-gray-600 inline"
              aria-label="GitHub"
            />
          </a>
        </div>
        <p className="mb-3">{props.description}</p>
        <p>Technologies: {props.technologies}</p>
      </div>
    </div>
  );
};

const Head = () => {
  const currentHash =
    isBrowser() && window.location.hash.length > 0
      ? window.location.hash.substring(1)
      : "home";

  return (
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto Mono"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Inter"
        rel="stylesheet"
      />
      <title>&gt; joshgeden$ ./{currentHash}</title>
    </Helmet>
  );
};

const Body = () => (
  <ReactFullpage
    scrollingSpeed={1000}
    anchors={anchors}
    controlArrows={false}
    continuousVertical={true}
    slidesNavigation={true}
    onLeave={(origin, destination, direction) => {
      document.title = "> joshgeden$ ./" + anchors[destination.index];
    }}
    render={({ state, fullpageApi }) => {
      if (fullpageApi && isBrowser() && window.innerWidth > mobileViewWidth) {
        fullpageApi.setAllowScrolling(false);
      }

      return (
        <ReactFullpage.Wrapper>
          {/* home section */}
          <div className="section">
            <div className="text-center">
              <div className="mb-3">
                <h1 className="text-5xl font-bold font-['Inter']">
                  Hi, I'm Josh
                </h1>
              </div>
              <div>
                <p className="text-md mb-1">cs @ duke | swe @ nasa jpl</p>
              </div>
              <div className="text-center flex flex-row justify-center">
                <a href="tel:18643733991">
                  <Icon
                    path={mdiCellphone}
                    className="icon"
                    aria-label="Phone"
                  />
                </a>
                <a href="mailto:joshgeden10@gmail.com">
                  <Icon path={mdiEmail} className="icon" aria-label="email" />
                </a>
                <a
                  href="https://github.com/Josh0823"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon path={mdiGithub} className="icon" aria-label="GitHub" />
                </a>
                <a
                  href="https://linkedin.com/in/joshua-geden"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon
                    path={mdiLinkedin}
                    className="icon"
                    aria-label="LinkedIn"
                  />
                </a>
                <a
                  href="https://discordapp.com/users/608489354847059989"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon
                    path={mdiDiscord}
                    className="icon"
                    aria-label="Discrod"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* about section */}
          <div className="section">
            <div className="flex flex-row justify-center items-center w-3/4 max-w-[760px] m-auto">
              <ul className="m-0 pl-2 list-disc">
                <li className="mb-2">
                  <p>
                    third-year undergraduate at duke university studying
                    computer science, linguistics, and german
                  </p>
                </li>
                <li className="mb-2">
                  <p>
                    ex software engineer intern at nersc, mealme, and berkeley
                    national lab. currently at nasa jpl
                  </p>
                </li>
                <li className="mb-2">
                  <p>
                    interested in full-stack development, open source, and
                    building scientific tools
                  </p>
                </li>
              </ul>
              {/* Logos */}
              <div>
                <div className="row-col">
                  <a
                    href="https://www.nersc.gov/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={nerscLogo}
                      aria-label="NERSC Logo"
                      className="about-img"
                    />
                  </a>
                  <a href="https://mealme.ai" target="_blank" rel="noreferrer">
                    <img
                      src={mealmeLogo}
                      aria-label="MealMe Logo"
                      className="about-img"
                    />
                  </a>
                </div>
                <div className="row-col">
                  <a
                    href="https://www.lbl.gov/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={berekelyLogo}
                      aria-label="Berkeley Lab Logo"
                      className="about-img"
                    />
                  </a>
                  <a
                    href="https://europa.nasa.gov/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={nasaLogo}
                      aria-label="NASA JPL Logo"
                      className="about-img"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* projects section */}
          <div className="section">
            <Project
              title="GroupDuke"
              link="https://github.com/Josh0823/GroupDuke"
              description="Created a full-stack web app to help Duke students find course GroupMe chats. Built a reactive, multi-page frontend with SvelteKit. Used Fiber, an Express-inspired framework for Go, to implement automatic email registration, user auth, and firebase integration."
              technologies="Typescript, Go, Firebase, Redis"
            />
            <Project
              title="JupyterHub Entrypoint Service"
              link="https://github.com/NERSC/jupyterhub-entrypoint"
              description="Prototyped a full-stack extension service for JupyterHub that enables launching Jupyter notebooks in virtual environments or containers. This service is currently in use on NERSC's Perlmutter supercomputer and I presented the project to the Jupyter in High Performance Computing group."
              technologies="Jupyter, Javascript, Python, REST API, Selenium, CI/CD with GitHub Actions"
            />
            <Project
              title="SimplyFrank"
              link="https://github.com/Josh0823/SimplyFrank"
              description='SimplyFrank holds a special place in my heart as my first "big" computer science project. A partner and I spent a month and a half designing and implementing our own programming language called SimplyFrank. We wrote a compiler that compiles SimplyFrank into SML (Simpletron Machine Language). We also wrote an interpreter that was able to execute SML code through C++.'
              technologies="C++, Assembly, Compilers, Interpreters"
            />
          </div>

          {/* resume section */}
          {isBrowser() && window.innerWidth > mobileViewWidth && (
            <div className="section">
              <div className="h-3/4">
                <a
                  className="text-center"
                  href={resume}
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>View in new tab</p>
                </a>
                <img
                  src={resumePNG}
                  class="h-5/6 max-w-[800px]  m-auto"
                  title="resume"
                />
              </div>
            </div>
          )}
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

const IndexPage = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => setLoading(false), 100);

  return (
    <>
      <Head />
      <TitleBar />
      {!loading && <Body />}
      <Footer />
    </>
  );
};

export default IndexPage;
