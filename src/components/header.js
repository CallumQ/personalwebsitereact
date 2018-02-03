import React, { Component } from 'react';
import { NavLink,Link  } from 'react-router-dom';
import '../../src/header.css';
import SVGInline from 'react-svg-inline';
class Header extends Component {
    
 
  render() 
  {
    return (
        <nav>
            <div className="nav-wrapper">
            <Link to="/" className="website-logo">
                <SVGInline svg={svg} />
                </Link>
                <ul id="nav-mobile" className="right nav-bar-right">
                    <NavLink to="/ " activeClassName="active">Home</NavLink>
                    <NavLink to="/about" activeClassName="active">About</NavLink>
                    <NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
                    <NavLink to="/cv" activeClassName="active">CV</NavLink>
                    <NavLink to="/blog" activeClassName="active">Blog</NavLink>
                    <NavLink to="/contact" activeClassName="active">Contact</NavLink>    
                </ul>
            </div>
      </nav>
    );
  }
}

export default Header;
var svg =  '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 83.2 50.25"><defs><style>.cls-1{fill:#fff;stroke:#000;stroke-miterlimit:10;}</style></defs><title>logo1</title><path class="cls-1" d="M42.06,49c-.49-.46-.93-1-1.38-1.49a14.67,14.67,0,0,1-2-2.62C30.4,50,21.35,49.61,15.1,44.35A18.64,18.64,0,0,1,10,22.6a19.78,19.78,0,0,1,18.12-11.5A19.12,19.12,0,0,1,38.74,14.7c.14-.18.28-.36.43-.53l.27-.36,1.13-1.42a17,17,0,0,1,1.64-1.84,3.13,3.13,0,0,0-.45-.38A24.45,24.45,0,0,0,3.34,25.7a24.82,24.82,0,0,0,3,16.53A24.43,24.43,0,0,0,41.55,49.7a2.61,2.61,0,0,0,.62-.6Z" transform="translate(-2.5 -4.52)"/><path class="cls-1" d="M85.07,30a23.72,23.72,0,0,1-5.16,14.74l5,4.89a1.05,1.05,0,0,1,.33.66,1.2,1.2,0,0,1-.4.93l-2.38,2.38a1.16,1.16,0,0,1-.86.4.9.9,0,0,1-.66-.4l-5-5a23.75,23.75,0,0,1-14.88,5.22c-12.3,0-24.79-9.39-24.79-24.2C36.27,16.65,47,5,60.67,5,75.08,5,85.07,17.25,85.07,30Zm-5.36-.4A19,19,0,1,0,60.87,48.52,18.44,18.44,0,0,0,72,44.82l-2.51-2.64a.8.8,0,0,1-.33-.66,1,1,0,0,1,.33-.79l2.38-2.38A1.22,1.22,0,0,1,72.7,38a1,1,0,0,1,.73.26l2.64,2.58A19,19,0,0,0,79.71,29.61Z" transform="translate(-2.5 -4.52)"/></svg>';  