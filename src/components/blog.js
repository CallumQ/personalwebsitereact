import React, { Component } from 'react';
import '../../src/header.css';

class Blog extends Component {
    
  
  componentDidMount() {
    document.title = "Blog - Callum Quigley";
  }

  render() 
  {
    return (
       
        <h1>Blog</h1>
    );
  }
}

export default Blog;
