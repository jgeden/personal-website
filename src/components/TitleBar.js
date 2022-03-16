import * as React from "react";
import "./TitleBar.css";

const isBrowser = () => typeof window !== "undefined";

const TitleBar = () => {
  return (
    <div className="title-bar">
      <div className="title-bar-content">
        <div className="logo">
          <span>&gt;</span>
          <a href="/#home" style={{marginLeft: "0.5rem"}}>
            <span className="logo-text">joshgeden</span>
          </a>
          <span className="logo-text">$</span>
          <span className="logo-cursor"></span>
        </div>

        <div style={{ height: "1.3em" }}>
          {isBrowser() && window.innerWidth > 600 ? (
            <>
              <a href="#about">about</a>
              <a href="#projects">projects</a>
              <a href="#resume">resume</a>
            </>
          ) : (
            <p>dropdown</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TitleBar;
