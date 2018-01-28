import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../src/header.css';

class Header extends Component {
    
  constructor()
  {
    super();
    this.state = 
    {
      Projects : [],
      todos: [],
       books :[],
    }
  }

  render() 
  {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo"><img src="logo.png"/></a>
                <ul id="nav-mobile" className="right nav-bar-right">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/cv">CV</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/contact">Contact</Link>    
                </ul>
            </div>
      </nav>
    );
  }
}

export default Header;
