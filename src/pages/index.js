import * as React from "react"
import Navbar from '../components/navbar'
import Footer from "../components/footer"

import '../styles/index.css'
import '../styles/global.css'

import headshot from '../images/headshot.jpg'

// add if-fixed for footer
const IndexPage = () => {
  return (
    <div className="pagecontainer">
      <title>About Me | Josh Geden</title>
      <Navbar />

      <div className="aboutme">
        <div className="container">
          <img className="headshot" src={headshot} alt="headshot" />
          <div className="content">
            <h1><span role="img" aria-label="smile emoji">😄</span> Hey, I'm Josh.</h1>
            <p>I am an undergrad student at Duke University, where I am studying Computer Science, Linguistics, & German, and will be graduating in May 2023. Go Blue Devils <span role="img" aria-label="blue devil emojis">🔵😈</span>! I was born and raised in Greenville, SC <span role="img" aria-label="SC emojis">🌙🌴</span> and I went to high school at the S.C. Governor's School for Science and Math.</p>
            <p>At Duke, I am a member of the International Collegiate Programming Competition club (it's like Leetcode but on steroids). I am also a student researcher with Yang Lab <span role="img" aria-label="lab emoji">👨‍🔬</span>. We focus on applications of machine learning and natural language processing to combat vaccine misinformation <span role="img" aria-label="machine learning emojis">🖥🧠</span>. I also do volunteer software development through <a href="https://www.technifynow.org" target="_blank" rel="noreferrer">Technify</a>.</p>
            <p>I have also been a teaching assistant for 3 semesters at Duke <span role="img" aria-label="teaching emojis">👨‍🏫🍎</span>, twice for Data Stuctures & Algorithms and once for Discrete Math for Computer Science. Some of my favorite projects we have done have been Percolation modeling with BFS & DFS <span role="img" aria-label="water emoji">💧</span>, Text Predication with Hidden Markov models <span role="img" aria-label="text emojis">🤔💬</span>, and RSA encryption with functional programming <span role="img" aria-label="hush emoji">🤫.</span></p>
            <p>I am currently a software engineer intern at Lawrence Berkeley National Lab <span role="img" aria-label="national lab emojis">🌇🇺🇸🧪</span>, where I am developing software in Javascript and Python to extend JupyterLab <span role="img" aria-label="javascript and python emojis">☕️🐍🪐</span>. My work focuses on making the supercomputers at Berkeley more accessible and user friendly through Jupyter. Check out my projects page to see some of these extensions!</p>
            <p>In my free time, I love to play strategy games like Civ VI and Total War (or any other game where you spend a long time staring at a map) <span role="img" aria-label="map game emojis">🗺🎮</span>. I also love to play pickup basketball and swim <span role="img" aria-label="basketball and swimming emojis">🏀🏊‍♂️</span>, and I am always down to get some Mexican food with friends <span role="img" aria-label="taco emoji">🌮</span>.</p>
          </div>
        </div>
      </div>

      <Footer fixed={true} />
    </div>
  )
}

export default IndexPage
