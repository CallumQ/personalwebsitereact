import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../../src/header.css';
import '../../src/about.css';

class About extends Component {
    
  constructor()
  {
    super();
  
  }

  render() 
  {
    return (
      <div className="AboutSection">
      <h1>About Me</h1>
      <div className="Centerted-section">
      <div className="row">
      <div className="col s8">
      <p>background background background</p>
      <p> experience experience experience</p>
      <p>proof of work proof of work proof of work </p>
      <div className="buttonSection">
      <div className="button"> <NavLink to="/portfolio"> Portfolio</NavLink>    </div>
      <div className="button"> <NavLink to="/contact"> Contact</NavLink>    </div></div>
      </div>
      <div className="col s4">
      <div className="image-container">
      <div className="image-container-image"><img src="../../public/graduationPicture.jpg"></img></div>
      <div className="image-container-text">Graduation, June 2017</div>
      </div>
      </div>
      </div>
      </div></div>
    );
  }
}

export default About;
