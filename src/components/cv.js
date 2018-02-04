import React, { Component } from 'react';

import '../../src/header.css';

class CV extends Component {
  
  
  componentDidMount() {
    document.title = "CV - Callum Quigley";
  }


  render() 
  {
    return (
       
        <h1>CV</h1>
    );
  }
}

export default CV;
