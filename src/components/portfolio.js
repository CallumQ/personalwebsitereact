import React, { Component } from 'react';
import '../../src/portfolio.css';
import Project from './project';

const projects = [
  {
    name :"Project One",
    summary : "A simple web browser written in C# which performs HTTP requests.",
    description : "this is a description this is a description this is a description this is a description this is a description this is a description ",
    previewImage: "https://lh3.googleusercontent.com/0-BzaWtxoAnsBjQ_wzUcKxyF07XE7v2Kkg1ogPVUdzmQpvaz118uHQEGU6BdtzJuzfo=h556",
    technology:["C","JAVA"],
    url: "/this/will/point/to/a/endpoint",
  },{
    name :"Project One",
    summary : "A simple web browser written in C# which performs HTTP requests.",
    description : "this is a description this is a description this is a description this is a description this is a description this is a description ",
    previewImage: "https://lh3.googleusercontent.com/0-BzaWtxoAnsBjQ_wzUcKxyF07XE7v2Kkg1ogPVUdzmQpvaz118uHQEGU6BdtzJuzfo=h556",
    technology:["C","JAVA"],
    url: "/this/will/point/to/a/endpoint",
  },{
    name :"Project One",
    summary : "A simple web browser written in C# which performs HTTP requests.",
    description : "this is a description this is a description this is a description this is a description this is a description this is a description ",
    previewImage: "https://lh3.googleusercontent.com/0-BzaWtxoAnsBjQ_wzUcKxyF07XE7v2Kkg1ogPVUdzmQpvaz118uHQEGU6BdtzJuzfo=h556",
    technology:["C","JAVA"],
    url: "/this/will/point/to/a/endpoint",
  },{
    name :"Project One",
    summary : "A simple web browser written in C# which performs HTTP requests.",
    description : "this is a description this is a description this is a description this is a description this is a description this is a description ",
    previewImage: "https://lh3.googleusercontent.com/0-BzaWtxoAnsBjQ_wzUcKxyF07XE7v2Kkg1ogPVUdzmQpvaz118uHQEGU6BdtzJuzfo=h556",
    technology:["C","JAVA"],
    url: "/this/will/point/to/a/endpoint",
  },{
    name :"Project One",
    summary : "A simple web browser written in C# which performs HTTP requests.",
    description : "this is a description this is a description this is a description this is a description this is a description this is a description ",
    previewImage: "https://lh3.googleusercontent.com/0-BzaWtxoAnsBjQ_wzUcKxyF07XE7v2Kkg1ogPVUdzmQpvaz118uHQEGU6BdtzJuzfo=h556",
    technology:["C","JAVA"],
    url: "/this/will/point/to/a/endpoint",
  },{
    name :"Project One",
    summary : "A simple web browser written in C# which performs HTTP requests.",
    description : "this is a description this is a description this is a description this is a description this is a description this is a description ",
    previewImage: "https://lh3.googleusercontent.com/0-BzaWtxoAnsBjQ_wzUcKxyF07XE7v2Kkg1ogPVUdzmQpvaz118uHQEGU6BdtzJuzfo=h556",
    technology:["C","JAVA"],
    url: "/this/will/point/to/a/endpoint",
  },
  {
    name :"Project two",
    summary : "A simple web browser written in C# which performs HTTP requests.",
    description : "this is a description",
    previewImage: "https://lh3.googleusercontent.com/0-BzaWtxoAnsBjQ_wzUcKxyF07XE7v2Kkg1ogPVUdzmQpvaz118uHQEGU6BdtzJuzfo=h556",
    technology:["C","CPLUSPLUS"],
    url: "/this/will/point/to/a/endpoint",
  },
  {
    name :"Project three",
    summary : "A simple web browser written in C# which performs HTTP requests.",
    description : "this is a description",
    previewImage: "https://lh3.googleusercontent.com/0-BzaWtxoAnsBjQ_wzUcKxyF07XE7v2Kkg1ogPVUdzmQpvaz118uHQEGU6BdtzJuzfo=h556",
    technology:["REACT","CSS","HTML5","JAVASCRIPT","MONGODB"],
    url: "/this/will/point/to/a/endpoint",
  },

]
let NoOfItems = 0;
let pageNo = 0;
let itemsOnPage = 8;
class Portfolio extends Component {  
  
  constructor(){
    super();
    this.state = {
      projects,
      NoOfItems,
      itemsOnPage,
      pageNo
    }
    this.upPage = this.upPage.bind(this);
    this.downPage = this.downPage.bind(this);
  }

  upPage(){
    
    this.setState({pageNo :pageNo++});
  }

  downPage(){

    this.setState({pageNo : pageNo--});
  }

  componentDidMount() {
    document.title = "Portfolio - Callum Quigley";
  }
  createItems(){
    let projectArray = [];
    for (let i = this.state.itemsOnPage*this.state.pageNo; i <this.state.itemsOnPage; i++){
      projectArray.push( <Project key={projects[i].name} properties={projects[i]}/>);

    }
    return projectArray;

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
              {this.createItems()}
               
              </div>
              
            </div>
            <div className="col s1"></div>  
          </div>

          <div className="row center-align fixed-bottom">
              <ul class="pagination ">
    <li class="disabled"><a href="#!" onClick={this.downPage}><i class="material-icons">chevron_left</i></a></li>
    <li class="active"><a href="#!">{this.state.pageNo+1}</a></li>
    <li class="waves-effect"><a href="#!" onClick={this.upPage}><i class="material-icons">chevron_right</i></a></li>
  </ul>
              </div>  
        </div>
      );
    }
  
}

export default Portfolio;
