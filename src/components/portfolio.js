import React, { Component } from 'react';
import '../../src/portfolio.css';
import ProjectContainer from './ProjectContainer';
import Pagination from'./pagination';


class Portfolio extends Component {  
  
  constructor(){
    super();
    this.state = {
      pageNo : 1,
      itemsPerPage : 8,
      noOfProjects : 8,
      projects : [
        {
          name :"zero",
          summary : "A simple web browser written in C# which performs HTTP requests.",
          description : "this is a description this is a description this is a description this is a description this is a description this is a description ",
          previewImage: "https://lh3.googleusercontent.com/0-BzaWtxoAnsBjQ_wzUcKxyF07XE7v2Kkg1ogPVUdzmQpvaz118uHQEGU6BdtzJuzfo=h556",
          technology:["C","JAVA"],
          url: "/this/will/point/to/a/endpoint",
        },{
          name :"one",
          summary : "A simple web browser written in C# which performs HTTP requests.",
          description : "this is a description this is a description this is a description this is a description this is a description this is a description ",
          previewImage: "https://lh3.googleusercontent.com/0-BzaWtxoAnsBjQ_wzUcKxyF07XE7v2Kkg1ogPVUdzmQpvaz118uHQEGU6BdtzJuzfo=h556",
          technology:["C","JAVA"],
          url: "/this/will/point/to/a/endpoint",
        },{
          name :"two",
          summary : "A simple web browser written in C# which performs HTTP requests.",
          description : "this is a description this is a description this is a description this is a description this is a description this is a description ",
          previewImage: "https://lh3.googleusercontent.com/0-BzaWtxoAnsBjQ_wzUcKxyF07XE7v2Kkg1ogPVUdzmQpvaz118uHQEGU6BdtzJuzfo=h556",
          technology:["C","JAVA"],
          url: "/this/will/point/to/a/endpoint",
        },{
          name :"three",
          summary : "A simple web browser written in C# which performs HTTP requests.",
          description : "this is a description this is a description this is a description this is a description this is a description this is a description ",
          previewImage: "https://lh3.googleusercontent.com/0-BzaWtxoAnsBjQ_wzUcKxyF07XE7v2Kkg1ogPVUdzmQpvaz118uHQEGU6BdtzJuzfo=h556",
          technology:["C","JAVA"],
          url: "/this/will/point/to/a/endpoint",
        },{
          name :"four",
          summary : "A simple web browser written in C# which performs HTTP requests.",
          description : "this is a description this is a description this is a description this is a description this is a description this is a description ",
          previewImage: "https://lh3.googleusercontent.com/0-BzaWtxoAnsBjQ_wzUcKxyF07XE7v2Kkg1ogPVUdzmQpvaz118uHQEGU6BdtzJuzfo=h556",
          technology:["C","JAVA"],
          url: "/this/will/point/to/a/endpoint",
        },{
          name :"five",
          summary : "A simple web browser written in C# which performs HTTP requests.",
          description : "this is a description this is a description this is a description this is a description this is a description this is a description ",
          previewImage: "https://lh3.googleusercontent.com/0-BzaWtxoAnsBjQ_wzUcKxyF07XE7v2Kkg1ogPVUdzmQpvaz118uHQEGU6BdtzJuzfo=h556",
          technology:["C","JAVA"],
          url: "/this/will/point/to/a/endpoint",
        },
        {
          name :"six",
          summary : "A simple web browser written in C# which performs HTTP requests.",
          description : "this is a description",
          previewImage: "https://lh3.googleusercontent.com/0-BzaWtxoAnsBjQ_wzUcKxyF07XE7v2Kkg1ogPVUdzmQpvaz118uHQEGU6BdtzJuzfo=h556",
          technology:["C","CPLUSPLUS"],
          url: "/this/will/point/to/a/endpoint",
        },
        {
          name :"seven",
          summary : "A simple web browser written in C# which performs HTTP requests.",
          description : "this is a description",
          previewImage: "https://lh3.googleusercontent.com/0-BzaWtxoAnsBjQ_wzUcKxyF07XE7v2Kkg1ogPVUdzmQpvaz118uHQEGU6BdtzJuzfo=h556",
          technology:["REACT","CSS","HTML5","JAVASCRIPT","MONGODB"],
          url: "/this/will/point/to/a/endpoint",
        },{
          name :"eight",
          summary : "A simple web browser written in C# which performs HTTP requests.",
          description : "this is a description this is a description this is a description this is a description this is a description this is a description ",
          previewImage: "https://lh3.googleusercontent.com/0-BzaWtxoAnsBjQ_wzUcKxyF07XE7v2Kkg1ogPVUdzmQpvaz118uHQEGU6BdtzJuzfo=h556",
          technology:["C","JAVA"],
          url: "/this/will/point/to/a/endpoint",
        },{
          name :"nine",
          summary : "A simple web browser written in C# which performs HTTP requests.",
          description : "this is a description this is a description this is a description this is a description this is a description this is a description ",
          previewImage: "https://lh3.googleusercontent.com/0-BzaWtxoAnsBjQ_wzUcKxyF07XE7v2Kkg1ogPVUdzmQpvaz118uHQEGU6BdtzJuzfo=h556",
          technology:["C","JAVA"],
          url: "/this/will/point/to/a/endpoint",
        },{
          name :"ten",
          summary : "A simple web browser written in C# which performs HTTP requests.",
          description : "this is a description this is a description this is a description this is a description this is a description this is a description ",
          previewImage: "https://lh3.googleusercontent.com/0-BzaWtxoAnsBjQ_wzUcKxyF07XE7v2Kkg1ogPVUdzmQpvaz118uHQEGU6BdtzJuzfo=h556",
          technology:["C","JAVA"],
          url: "/this/will/point/to/a/endpoint",
        },{
          name :"eleven",
          summary : "A simple web browser written in C# which performs HTTP requests.",
          description : "this is a description this is a description this is a description this is a description this is a description this is a description ",
          previewImage: "https://lh3.googleusercontent.com/0-BzaWtxoAnsBjQ_wzUcKxyF07XE7v2Kkg1ogPVUdzmQpvaz118uHQEGU6BdtzJuzfo=h556",
          technology:["C","JAVA"],
          url: "/this/will/point/to/a/endpoint",
        },{
          name :"twelve",
          summary : "A simple web browser written in C# which performs HTTP requests.",
          description : "this is a description this is a description this is a description this is a description this is a description this is a description ",
          previewImage: "https://lh3.googleusercontent.com/0-BzaWtxoAnsBjQ_wzUcKxyF07XE7v2Kkg1ogPVUdzmQpvaz118uHQEGU6BdtzJuzfo=h556",
          technology:["C","JAVA"],
          url: "/this/will/point/to/a/endpoint",
        },{
          name :"thirteen",
          summary : "A simple web browser written in C# which performs HTTP requests.",
          description : "this is a description this is a description this is a description this is a description this is a description this is a description ",
          previewImage: "https://lh3.googleusercontent.com/0-BzaWtxoAnsBjQ_wzUcKxyF07XE7v2Kkg1ogPVUdzmQpvaz118uHQEGU6BdtzJuzfo=h556",
          technology:["C","JAVA"],
          url: "/this/will/point/to/a/endpoint",
        },
        {
          name :"fourteen",
          summary : "A simple web browser written in C# which performs HTTP requests.",
          description : "this is a description",
          previewImage: "https://lh3.googleusercontent.com/0-BzaWtxoAnsBjQ_wzUcKxyF07XE7v2Kkg1ogPVUdzmQpvaz118uHQEGU6BdtzJuzfo=h556",
          technology:["C","CPLUSPLUS"],
          url: "/this/will/point/to/a/endpoint",
        },
        {
          name :"fifteen",
          summary : "A simple web browser written in C# which performs HTTP requests.",
          description : "this is a description",
          previewImage: "https://lh3.googleusercontent.com/0-BzaWtxoAnsBjQ_wzUcKxyF07XE7v2Kkg1ogPVUdzmQpvaz118uHQEGU6BdtzJuzfo=h556",
          technology:["REACT","CSS","HTML5","JAVASCRIPT"],
          url: "/this/will/point/to/a/endpoint",
        },
      
      ],
      sortedProjects :[],
    }

    this.pageUp = this.pageUp.bind(this);
    this.pageDown = this.pageDown.bind(this);

  }

  pageUp(){
    if (this.state.pageNo < this.state.projects.length / this.state.itemsPerPage){

    
        this.setState((prevState) => {return {pageNo: prevState.pageNo + 1}})
        this.updateProjects();
    }  }
  pageDown(){
    if(this.state.pageNo > 1){
    this.setState((prevState) => {return {pageNo: prevState.pageNo - 1}})
    this.updateProjects();
}}

  updateProjects(){
    let tempArray = [];
    let offset = this.state.itemsPerPage*this.state.pageNo;
   
      tempArray = this.state.projects.slice(offset- this.state.itemsPerPage,offset);
   return tempArray;
  }

  componentDidMount() {
    document.title = "Portfolio - Callum Quigley";

  }
  
  
  render() 
  {
    return (
      <div className="project-container">
      <div className="row no-padding pos-relative">
      <div className="col s1">           
      </div>
      <div className="col s10">
      <div className="row no-padding pos-relative">
      <div className="col s1"> <h1>Projects</h1></div>
      <div className= "col s10"></div>
      <div className="col s1 project-counter">showing {(this.state.itemsPerPage*this.state.pageNo- this.state.itemsPerPage)+1}-{this.state.itemsPerPage*this.state.pageNo} of {this.state.projects.length}</div>
      </div></div>
      </div>
      <div className="col s1"></div>
        <div className="row">
          <div className="col s1"></div>
          <div className="col s10 pos-relative">
          <div className="project-container-info">

            <div className="project-counter"></div></div>
            <div className="row">
            <ProjectContainer projects={this.updateProjects()}/>             
            </div>
            
          </div>
          <div className="col s1"></div>  
        </div>

        <div className="row center-align fixed-bottom">
        <Pagination pageNo={this.state.pageNo} pageUp={this.pageUp.bind(this)} pageDown={this.pageDown.bind(this)} pageDownClass={(this.state.pageNo <= 1)?"disabled":"waves-effect"} pageUpClass={(this.state.pageNo < this.state.projects.length / this.state.itemsPerPage)?"waves-effect":"disabled"} />
            </div>  
      </div>
    );
    }
  
}

export default Portfolio;
