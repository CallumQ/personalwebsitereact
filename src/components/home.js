import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../../src/home.css';
import '../../src/fontello.css';
import 'react-tippy/dist/tippy.css';
import SVGInline from 'react-svg-inline';
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
         
          <div className="mainContainer valign-wrapper">
            <div className="mainContainer-centerSection">
              <div className="row">
                <div className="col s7 right-align mainText">Hi, I'm Callum<br/> and I make software</div>
                <div className="col s5 device-container"><SVGInline svg={mobileLaptopSVG} className="mobileLaptopSVGContainer"/></div>
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

var mobileLaptopSVG = '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1163.55 830">    <defs>    <clipPath xmlns="http://www.w3.org/2000/svg" id="phoneClipPath"><rect x="13" y="20" width="300" height="626" /> </clipPath><clipPath xmlns="http://www.w3.org/2000/svg" id="laptopClipPath"><rect x="127" y="207" width="941" height="538" /> </clipPath></defs><rect class="svg-device-background" x="128" y="207" width="941" height="538" rx="27.76" ry="27.76" /><g class="laptop-clip-path"><g class="svg-scroll"><rect class="svg-device-bars" x="199" y="207" width="801" height="24" /><rect class="svg-device-bars" x="199" y="252" width="355" height="24" /><rect class="svg-device-bars" x="199" y="583" width="250" height="24" /><rect class="svg-device-bars" x="199" y="487" width="355" height="24" /><rect class="svg-device-bars" x="199" y="319" width="250" height="24" /><rect class="svg-device-bars" x="199" y="367" width="250" height="24" /><rect class="svg-device-bars" x="199" y="415" width="250" height="24" /><rect class="svg-device-bars" x="199" y="535" width="250" height="24" /><rect class="svg-device-bars" x="862" y="264" width="127" height="127" /><rect class="svg-device-bars" x="755" y="498" width="236" height="127" /><rect class="svg-device-bars" x="197" y="645" width="355" height="24" /><rect class="svg-device-bars" x="197" y="976" width="250" height="24" /><rect class="svg-device-bars" x="197" y="880" width="355" height="24" /><rect class="svg-device-bars" x="197" y="712" width="250" height="24" /><rect class="svg-device-bars" x="197" y="760" width="250" height="24" /><rect class="svg-device-bars" x="197" y="808" width="250" height="24" /><rect class="svg-device-bars" x="197" y="928" width="250" height="24" /><rect class="svg-device-bars" x="753" y="891" width="236" height="127" /></g></g><path d="M1403,790V775H1289.5a38.5,38.5,0,0,0,38.5-38.5v-499a38.5,38.5,0,0,0-38.5-38.5h-901A38.5,38.5,0,0,0,350,237.5v499A38.5,38.5,0,0,0,388.5,775H275v15c-7.76,23,58.77,23.19,75,26h919.69c18.4,0,37.4,1.35,55.77,0C1342.58,814.74,1410.29,812.35,1403,790ZM395.76,754A27.76,27.76,0,0,1,368,726.24V243.76A27.76,27.76,0,0,1,395.76,216h885.48A27.76,27.76,0,0,1,1309,243.76V726.24A27.76,27.76,0,0,1,1281.24,754Z" transform="translate(-240 -9)" /><g class="phone-clip-path"><rect class="svg-device-background" x="13.02" y="19.88" width="299.52" height="626.09" /><g class="svg-scroll"><rect class="svg-device-bars" x="13.71" y="19.19" width="298.84" height="24.67" /><rect class="svg-device-bars" x="23.3" y="63.06" width="117.89" height="24.67" /><rect class="svg-device-bars" x="23.3" y="111.04" width="180.95" height="24.67" /><rect class="svg-device-bars" x="23.3" y="209.74" width="180.95" height="24.67" /><rect class="svg-device-bars" x="23.3" y="160.39" width="180.95" height="24.67" /><rect class="svg-device-bars" x="23.3" y="259.09" width="117.89" height="24.67" /><rect class="svg-device-bars" x="161.76" y="259.09" width="117.89" height="24.67" /><rect class="svg-device-bars" x="23.3" y="349.56" width="117.89" height="24.67" /><rect class="svg-device-bars" x="23.3" y="448.26" width="180.95" height="24.67" /><rect class="svg-device-bars" x="23.3" y="398.91" width="180.95" height="24.67" /><rect class="svg-device-bars" x="23.3" y="489.38" width="180.95" height="24.67" /><rect class="svg-device-bars" x="72.65" y="579.86" width="180.95" height="24.67" /><rect class="svg-device-bars" x="19.19" y="681.3" width="117.89" height="24.67" /><rect class="svg-device-bars" x="19.19" y="729.28" width="180.95" height="24.67" /><rect class="svg-device-bars" x="19.19" y="827.98" width="180.95" height="24.67" /><rect class="svg-device-bars" x="19.19" y="778.63" width="180.95" height="24.67" /><rect class="svg-device-bars" x="19.19" y="877.33" width="117.89" height="24.67" /><rect class="svg-device-bars" x="157.64" y="877.33" width="117.89" height="24.67" /></g></g> <path d="M564.2,128.26a2,2,0,0,0-.69.13v-98A21.36,21.36,0,0,0,542.15,9h-278a21.36,21.36,0,0,0-21.36,21.36v98a2.05,2.05,0,0,0-1.37,1.93v46.61a2.05,2.05,0,0,0,1.37,1.93v11.22a2.05,2.05,0,0,0-1.37,1.93v46.61a2.05,2.05,0,0,0,1.37,1.93v75.65a2,2,0,0,0-2.74,1.93v46.61a2,2,0,0,0,2.74,1.93V655.23a21.36,21.36,0,0,0,21.36,21.36h278a21.36,21.36,0,0,0,21.36-21.36V178.86a2,2,0,0,0,2.74-1.93V130.32A2.06,2.06,0,0,0,564.2,128.26ZM527.87,13.11A6.85,6.85,0,1,1,521,20,6.85,6.85,0,0,1,527.87,13.11Zm24.67,641.54H253.71V29.56H552.55Z" transform="translate(-240 -9)" /><path d="M527.87,24.73A4.77,4.77,0,1,0,523.1,20,4.77,4.77,0,0,0,527.87,24.73Zm0-8.88A4.11,4.11,0,1,1,523.76,20,4.11,4.11,0,0,1,527.87,15.85Z" transform="translate(-240 -9)"/></svg>';
var inlinestyle = {display: '-webkit-inline-box'};
export default Home;
