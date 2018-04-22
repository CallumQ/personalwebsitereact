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
          <div class="row"> 
            <div class="col s3"></div>
            <div class="col s6">
              <div class="row left-align">
                <div class="col s3 offer-seperator offer-header">Technologies / Skills</div>
                <div class="col s1"></div>
                <div class="col s4 offer-header">Experienced
                  <ul className="skills-list">
                    <li className="list-item-seperator">Multi-threaded applications</li>
                  </ul>
                </div>
                <div class="col s4 offer-header">Some experience
                  <ul className="skills-list">
                    <li>Item 1</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col s3"></div>
          </div>
        </div>
        <div className="related-experience center-align">
          <div class="row"> 
            <div class="col s3"></div>
            <div class="col s6">
              <div class="row left-align">
                <div class="col s3 offer-seperator offer-header">Technologies / Skills</div>
                <div class="col s1"></div>
                <div class="col s8 offer-header">Some experience
                  <ul className="skills-list">
                    <li>Item 1</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col s3"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default CV;
