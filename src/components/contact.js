import React, { Component } from 'react';
import '../../src/header.css';

class Contact extends Component {

  
  componentDidMount() {
    document.title = "Contact - Callum Quigley";
  }

  render() 
  {
    return (
       
        <h1>Contact</h1>
    );
  }
}

export default Contact;
