import * as React from "react"

import Navbar from '../components/navbar'
import Footer from '../components/footer'

import '../styles/coursework.css'
import '../styles/global.css'

const CourseworkPage = () => {
  return (
    <div className="pagecontainer">
      <title>Coursework | Josh Geden</title>
      <Navbar />

      <div className="coursework">
        <div className="container">
          <div className="content">
            <ul className="schools">
              <li className="school">
                <h2>Duke University</h2>
                <p className="gpa">Current GPA: 3.98/4.0</p>
                <ul>
                  <li className="semester">
                    <h3>Summer 2021</h3>
                    <ul>
                      <li>MATH 216: Linear Algebra and Differential Equations</li>
                      <li>MATH 230: Probability</li>
                    </ul>
                  </li>
                  <li className="semester">
                    <h3>Spring 2021</h3>
                    <ul>
                      <li>COMPSCI 290: Web Application Development</li>
                      <li>GERMAN 204: Intermediate German II</li>
                      <li>LINGUIST 202: Languages of the World</li>
                      <li>LINGUIST 471S: Language and Politics</li>
                      <li>STA 199L: Introduction to Data Visualization</li>
                    </ul>
                  </li>
                  <li className="semester">
                    <h3>Fall 2020</h3>
                    <ul>
                      <li>COMPSCI 230: Discrete Math for Computer Science</li>
                      <li>GERMAN 203: Intermediate German I</li>
                      <li>LINGUIST 201: Introduction to Linguistics</li>
                      <li>RUSSIAN 101: Elementary Russian I</li>
                    </ul>
                  </li>
                  <li className="semester">
                    <h3>Summer 2020</h3>
                    <ul>
                      <li>GERMAN 102: First-Year German II</li>
                    </ul>
                  </li>
                  <li className="semester">
                    <h3>Spring 2020</h3>
                    <ul>
                      <li>COMPSCI 250D: Computer Architecture</li>
                      <li>GERMAN 101: First-Year German I</li>
                      <li>HISTORY 171S: History Gateway Seminar</li>
                      <li>WRITING 101: Academic Writing</li>
                    </ul>
                  </li>
                  <li className="semester">
                    <h3>Fall 2019</h3>
                    <ul>
                      <li>CHEM 101DL: Core Concepts in Chemistry</li>
                      <li>COMPSCI 201: Data Structures and Algorithms</li>
                      <li>ENGLISH 90S: Special Topics in Literature</li>
                      <li>MATH 212: Multivariable Calculus</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="school">
                <h2>Coker University (Dual Enrollment)</h2>
                <p className="gpa">Final GPA: 4.0/4.0</p>
                <ul>
                  <li className="semester">
                    <h3>Fall 2018</h3>
                    <ul>
                      <li>CSC 110: Python for Scientists</li>
                      <li>CSC 111: C++ Applications</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="school">
                <h2>South Carolina Governor's School for Science and Math</h2>
                <p className="gpa">Graduating GPA: Unweighted 4.0/4.0 , Weighted 5.204</p>
                <ul>
                  <li className="semester">
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
