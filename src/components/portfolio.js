import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../src/header.css';

class Portfolio extends Component {
    
  constructor()
  {
    super();
  
  }
  
  componentDidMount() {
    document.title = "Portfolio - Callum Quigley";
  }

  render() 
  {
    return (
       
        <h1>Portfolio</h1>
    );
  }
}

export default Portfolio;
