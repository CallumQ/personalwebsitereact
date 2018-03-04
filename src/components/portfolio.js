import React, { Component } from 'react';
import '../../src/header.css';
import Project from './project';

const projects = [
  {
    name :"Project One",
    description : "My personal website Written using React.js.",
    previewImage: "https://lh3.googleusercontent.com/0-BzaWtxoAnsBjQ_wzUcKxyF07XE7v2Kkg1ogPVUdzmQpvaz118uHQEGU6BdtzJuzfo=h556",
    technology:["C"],
    url: "/this/will/point/to/a/endpoint",
  },
  {
    name :"Project two",
    description : "A simple web browser written in C# which performs HTTP requests.",
    previewImage: "https://lh3.googleusercontent.com/0-BzaWtxoAnsBjQ_wzUcKxyF07XE7v2Kkg1ogPVUdzmQpvaz118uHQEGU6BdtzJuzfo=h556",
    technology:["C"],
    url: "/this/will/point/to/a/endpoint",
  },
  {
    name :"Project three",
    description : "this is a description",
    previewImage: "https://lh3.googleusercontent.com/0-BzaWtxoAnsBjQ_wzUcKxyF07XE7v2Kkg1ogPVUdzmQpvaz118uHQEGU6BdtzJuzfo=h556",
    technology:["js","react","css","HTML","ECMA6","Mongo"],
    url: "/this/will/point/to/a/endpoint",
  },
  {
    name :"Project four",
    description : "this is a description",
    previewImage: "https://lh3.googleusercontent.com/0-BzaWtxoAnsBjQ_wzUcKxyF07XE7v2Kkg1ogPVUdzmQpvaz118uHQEGU6BdtzJuzfo=h556",
    technology:["js","react","css","HTML","ECMA6","Mongo"],
    url: "/this/will/point/to/a/endpoint",
  },
]
class Portfolio extends Component {  
  constructor(){
    super();
    this.state = {
      projects,
    }
  
  }
  componentDidMount() {
    document.title = "Portfolio - Callum Quigley";
   
  }
  
    render() 
    {
      return (
        <div className="project-container">
          <div className="row">
          <div className="col s1"></div>
            <div className="col s10">
              <h1>Projects</h1>
            <div className="row">
              {this.state.projects.map(project => <Project key={project.name} properties={project}/>)}
            </div>  
          </div>
          <div className="col s1"></div>  
          </div>
        </div>
      );
    }
  
}

export default Portfolio;
