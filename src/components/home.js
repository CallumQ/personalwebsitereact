import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Particles from 'react-particles-js';
import '../../src/home.css';
import '../../src/fontello.css';
import 'react-tippy/dist/tippy.css';
import {
  Tooltip,
} from 'react-tippy';

class Home extends Component {
 
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
                  "value": 180,
                  "density": {
                    "enable": true,
                    "value_area": 500
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
                    "nb_sides": 1
                  },
                  "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                  }
                },
                "opacity": {
                  "value": 0.9,
                  "random": true,
                  "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0,
                    "sync": false
                  }
                },
                "size": {
                  "value": 2,
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
                  "distance": 50,
                  "color": "#ffffff",
                  "opacity": 0.3,
                  "width": 1
                },
                "move": {
                  "enable": true,
                  "speed": 0.1,
                  "direction": "none",
                  "random": true,
                  "straight": false,
                  "out_mode": "in",
                  "bounce": true,
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
                <div className="col s7 right-align mainText">Hi, I'm Callum<br/> and I make software</div>
                <div className="col s5">placeholder</div>
              </div>
              <div className="row">
                <div className="col s4"></div>
                <div className="col s4 center-align linksSection">
                  
                  <Tooltip title="Github" position="bottom" distance="5">
                    <a href="https://github.com/CallumQ"><i className="icon-github-circled-alt"></i></a>
                  </Tooltip>
                  
                  <Tooltip title="LinkedIn" position="bottom" distance="5" style={inlinestyle}>
                    <a href="https://www.linkedin.com/in/callum-quigley-563194136/"> <i className="icon-linkedin-circled"></i></a> 
                  </Tooltip>

                  <Tooltip title="CV" position="bottom" distance="5" style={inlinestyle}>
                    <NavLink to="/cv" activeClassName="active"> <i className="icon-doc-circled"></i></NavLink>       
                  </Tooltip>

                  <Tooltip title="Email" position="bottom" distance="5" style={inlinestyle}>
                    <NavLink to="/contact" activeClassName="active"> <i className="icon-mail-circled"></i></NavLink>    
                  </Tooltip>
                </div>
                <div className="col s4"></div>
              </div>
            </div>
          </div> 
        </div>
    );
  }
}
var inlinestyle = {display: '-webkit-inline-box'};
export default Home;
