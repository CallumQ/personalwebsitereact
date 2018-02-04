import React, { Component } from 'react';
import { NavLink,Link  } from 'react-router-dom';
import SVGInline from 'react-svg-inline';
import '../../src/header.css';
import '../../src/fontello.css';
class Home extends Component {
    
  constructor()
  {
    super();
  
  }

  render() 
  {
    return (
       
        <div className="mainContainer valign-wrapper">
          <div className="mainContainer-centerSection">
            <div className="row">
              <div className="col s7 right-align mainText">Hi, I'm Callum <br/> and I make software</div>
              <div className="col s5">placeholder</div>
            </div>
            <div className="row">
              <div className="col s3"></div>
              <div className="col s6 center-align linksSection">
                <a href="https://github.com/CallumQ"><i className="icon-github-circled-alt"></i></a>
                <a href="http://callumquigley.com/Callum%20Quigley%20CV.pdf"> <i className="icon-linkedin-circled"></i></a> 
                <NavLink to="/cv" activeClassName="active"> <i className="icon-doc-circled"></i></NavLink>       
                <NavLink to="/contact" activeClassName="active"> <i className="icon-mail-circled"></i></NavLink>    
              </div>
              <div className="col s3"></div>
            </div>
          </div>
        </div>
    );
  }
}

export default Home;
