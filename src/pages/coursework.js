import * as React from "react"

import Navbar from '../components/navbar'
import Footer from '../components/footer'

import '../styles/coursework.css'
import '../styles/global.css'

const CourseworkPage = () => {
  return (
    <div class="pagecontainer">
      <title>Coursework | Josh Geden</title>
      <Navbar />

      <div class="coursework">
        <div class="container">
          <div class="content">
            <ul class="schools">
              <li class="school">
                <h2>Duke University</h2>
                <p class="gpa">Current GPA: 3.98/4.0</p>
                <ul>
                  <li class="semester">
                    <h3>Spring 2021</h3>
                    <ul>
                      <li>COMPSCI 290: Web Application Development</li>
                      <li>STA 199L: Introduction to Data Visualization</li>
                      <li>LINGUIST 202: Languages of the World</li>
                      <li>LINGUIST 471S: Language and Politics</li>
                      <li>GERMAN 204: Intermediate German II</li>
                    </ul>
                  </li>
                  <li class="semester">
                    <h3>Fall 2020</h3>
                    <ul>
                      <li>COMPSCI 230: Discrete Math for Computer Science</li>
                      <li>LINGUIST 201: Introduction to Linguistics</li>
                      <li>GERMAN 203: Intermediate German I</li>
                      <li>RUSSIAN 101: Elementary Russian I</li>
                    </ul>
                  </li>
                  <li class="semester">
                    <h3>Summer 2020</h3>
                    <ul>
                      <li>GERMAN 102: First-Year German II</li>
                    </ul>
                  </li>
                  <li class="semester">
                    <h3>Spring 2020</h3>
                    <ul>
                      <li>COMPSCI 250D: Computer Architecture</li>
                      <li>HISTORY 171S: History Gateway Seminar</li>
                      <li>WRITING 101: Academic Writing</li>
                      <li>GERMAN 101: First-Year German I</li>
                    </ul>
                  </li>
                  <li class="semester">
                    <h3>Fall 2019</h3>
                    <ul>
                      <li>COMPSCI 201: Data Structures and Algorithms</li>
                      <li>MATH 212: Multivariable Calculus</li>
                      <li>CHEM 101DL: Core Concepts in Chemistry</li>
                      <li>ENGLISH 90S: Special Topics in Literature</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="school">
                <h2>Coker University (Dual Enrollment)</h2>
                <p class="gpa">Final GPA: 4.0/4.0</p>
                <ul>
                  <li class="semester">
                    <h3>Fall 2018</h3>
                    <ul>
                      <li>CSC 110: Python for Scientists</li>
                      <li>CSC 111: C++ Applications</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="school">
                <h2>South Carolina Governor's School for Science and Math</h2>
                <p class="gpa">Graduating GPA: Unweighted 4.0/4.0 , Weighted 5.204</p>
                <ul>
                  <li class="semester">
                    <h3>Relevant High School Coursework</h3>
                    <ul>
                      <li>AP Computer Science</li>
                      <li>Data Structures</li>
                      <li>Database Design</li>
                      <li>Game Design</li>
                      <li>Independent Study in Computer Science (ePortfolios as a Service)</li>
                      <li>Introduction to Artificial Intelligence</li>
                      <li>Robotics</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default CourseworkPage
