import React, {useState} from "react";
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
import berekelyLogo from "../images/berkeley-logo.png";
import mealmeLogo from "../images/mealme-logo.png";
import nasaLogo from "../images/nasa-logo.png";
import nerscLogo from "../images/nersc-logo.png";
import "../styles/main.css";

const anchors = ["home", "about", "projects", "resume"];
const isBrowser = () => typeof window !== "undefined";

const Head = () => {
  const currentHash = isBrowser() ? window.location.hash.substring(1) : "home";

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
      if (fullpageApi) {
        fullpageApi.setAllowScrolling(false);
      }

      return (
        <ReactFullpage.Wrapper>
          {/* home section */}
          <div className="section">
            <div className="float-center">
              <div className="name-box">
                <h1>Hi, I'm Josh</h1>
              </div>
              <div>
                <p>cs @ duke | swe @ nasa jpl</p>
              </div>
              <div className="icons-box">
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
            <div className="float-center">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div className="content">
                  <ul>
                    <li>
                      <p>
                        third-year undergraduate at duke university studying
                        computer science and linguistics
                      </p>
                    </li>
                    <li>
                      <p>
                        software engineer intern at nersc, mealme, and berkeley
                        national lab and now at nasa jpl
                      </p>
                    </li>
                    <li>
                      <p>
                        interested in open source, building scientific tools,
                        and full-stack development
                      </p>
                    </li>
                  </ul>
                </div>
                <div style={{ width: "fit-content", height: "fit-content" }}>
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
                    <a
                      href="https://mealme.ai"
                      target="_blank"
                      rel="noreferrer"
                    >
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
          </div>

          {/* projects section */}
          <div className="section">
            <div className="float-center">
              <div className="center content">
                <ul>
                  <li>Europa Clipper Register Mapper</li>
                  <li>GroupDuke</li>
                  <li>JupyterHub Entrypoint</li>
                  <li>SimplyFrank</li>
                </ul>
              </div>
            </div>
          </div>

          {/* resume section */}
          <div className="section">
            <div className="float-center">
              <a href={resume} target="_blank" rel="noreferrer">
                <p>View in new tab</p>
              </a>
              <iframe src={resume} title="Resume pdf viewer" />
            </div>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

const IndexPage = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 5);

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
