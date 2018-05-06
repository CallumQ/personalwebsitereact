import React, { Component } from 'react';

import '../../src/header.css';
import '../../src/cv.css';
class CV extends Component {
  
  componentDidMount() {
    document.title = "CV - Callum Quigley";
  }

  render() 
  {
    return (
      <div className="cv-container">
        <div className="center-align">
          <a href="#" className="button-link">
            <div className="outer-button">
              <div className="inner-button">
                <p className="buttonText">Download CV</p>
              </div> 
            </div>
          </a>
        </div>
        <div className="technology-experience center-align">
          <div className="row"> 
            <div className="col s3"></div>
            <div className="col s6">
              <div className="row left-align">
                <div className="col s3 offer-seperator offer-header">Technologies / Skills</div>
                <div className="col s1"></div>
                <div className="col s4 offer-header">Experienced
                  <ul className="skills-list">
                    <li className="list-item-seperator">C#</li>
                    <li className="list-item-seperator">Java (JUnit 4)</li>
                    <li className="list-item-seperator">Python</li>
                    <li className="list-item-seperator">Javascript</li>
                    <li className="list-item-seperator">React</li>
                    <li className="list-item-seperator">HTML5</li>
                    <li className="list-item-seperator">CSS3</li>
                    <li className="list-item-seperator">MySQL</li>
                    <li className="list-item-seperator">MongoDB</li>
                    <li className="list-item-seperator">PHP</li>
                    <li className="list-item-seperator">Foundation 6</li>
                    <li className="list-item-seperator">Selenium</li>
                    <li className="list-item-seperator">Agile Development (Scrum, Kanban)</li>
                    <li className="list-item-seperator">Version Control (Git)</li>
                  </ul>
                </div>
                <div className="col s4 offer-header">Some experience
                  <ul className="skills-list">
                    <li>C</li>
                    <li>C++</li>
                    <li>Node.js</li>
                    <li>Angular</li>
                    <li>SPARK ADA</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col s3"></div>
          </div>
        </div>
        <div className="related-experience center-align">
          <div className="row"> 
            <div className="col s3"></div>
            <div className="col s6">
              <div className="row left-align">
                <div className="col s3 offer-seperator offer-header">Relevant Experience</div>
                <div className="col s1"></div>
                <div className="col s8 offer-header">
                  <div className="offer-item">
                    <div className="offer-header">Lab Assistant, Heriot-Watt University</div>
                    <div className="offer-date">12th September 2016 - 28th November 2016</div>
                    <div className="offer-details">I provided support to the new 1st year students on a course called praxis, which aims to teach the new students time management skills, study skills, methods of research, and report writing. I also helped teach them the basics of shell navigation and BASH scripting.</div>
                  </div>
                  <div className="offer-item">
                    <div className="offer-header">Programmer &amp; group liaison, Heriot-Watt Group Project</div>
                    <div className="offer-date">12th September 2015 - 1st April 2016</div>
                    <div className="offer-details">I was part of a group of 7 people who were tasked to create an online career pathfinder aimed at school leavers with the aim of going to university. My primary roles were to liaise between the project manager and the group, Gathering the data from all of the different universities via Python using Scrapy and also constructing the MySql database to supply the students with suitable suggestions.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col s3"></div>
          </div>
        </div>

         <div className="technology-experience center-align">
          <div className="row"> 
            <div className="col s3"></div>
            <div className="col s6">
              <div className="row left-align">
                <div className="col s3 offer-seperator offer-header">Education</div>
                <div className="col s1"></div>
                <div className="col s8 offer-header">
                  <div className="offer-item">
                    <div className="offer-header">BSc (Hons) Computer Systems, Heriot-Watt University</div>
                    <div className="offer-date">12th September 2015 - 21st June 2017, 1st Class Honours</div>
                    <div className="offer-details">Computer Systems is a course that offers an in depth look at programming including things such as multi-threaded programming, network topologies, artificial intelligence, methods of testing software, and language processors. It also includes project management, different methods of analyzing the problem situation, ensuring content is delivered in the best manner, and also the importance of the human element of organizations.</div>
                  </div>
                  <div className="offer-item">
                    <div className="offer-header">Software Development HND, Forth Valley College Falkirk</div>
                    <div className="offer-date">31 August 2012 - 30 June 2015</div>
                    <div className="offer-details">While at Forth Valley College, I studied a broad spectrum of programming disciplines including Android app development, MySql databases, OOP (Object Orientated Programming), Web development, Data structures, and a large group project where I developed an online stock management system.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col s3"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default CV;
