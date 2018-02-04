import React, { Component } from 'react';
import { NavLink,Link  } from 'react-router-dom';
import SVGInline from 'react-svg-inline';
import Particles from 'react-particles-js';

import '../../src/home.css';
import '../../src/fontello.css';

class Home extends Component {
    
  constructor()
  {
    super();
  
  }

  componentDidMount() {
    document.title = "Home - Callum Quigley";
  }


  render() 
  {
    return (
        <div>


<Particles className="particleSection" params={{
  "particles": {
    "number": {
      "value": 160,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 4,
        "size_min": 0.3,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 0.2,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 600
      }
    }
  },
}}/>
       
        <div className="mainContainer valign-wrapper">

          <div className="mainContainer-centerSection">
            <div className="row">
              <div className="col s7 right-align mainText">Hi, I'm Callum <br/> and I make software</div>
              <div className="col s5">placeholder</div>
            </div>
            <div className="row">
              <div className="col s4"></div>
              <div className="col s4 center-align linksSection">
                <a href="https://github.com/CallumQ"className="tooltipped" data-position="bottom" data-delay="10" data-tooltip="Github"><i className="icon-github-circled-alt"></i></a>
                <a href="http://callumquigley.com/Callum%20Quigley%20CV.pdf"> <i className="icon-linkedin-circled tooltipped" data-position="bottom" data-delay="10" data-tooltip="LinkedIn"></i></a> 
                <NavLink to="/cv" activeClassName="active"> <i className="icon-doc-circled tooltipped" data-position="bottom" data-delay="10" data-tooltip="CV"></i></NavLink>       
                <NavLink to="/contact" activeClassName="active"> <i className="icon-mail-circled tooltipped" data-position="bottom" data-delay="10" data-tooltip="Email"></i></NavLink>    
              </div>
              <div className="col s4"></div>
            </div>
          </div>
        </div> </div>
    );
  }
}

export default Home;
