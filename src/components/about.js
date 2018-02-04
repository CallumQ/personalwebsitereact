import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../src/header.css';

class About extends Component {
    
  constructor()
  {
    super();
  
  }

  
  componentDidMount() {
    document.title = "About - Callum Quigley";
  }

  render() 
  {
    return (
       
        <h1>About</h1>
    );
  }
}

export default About;
