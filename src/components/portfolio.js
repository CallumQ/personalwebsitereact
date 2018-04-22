import React, { Component } from 'react';
import '../../src/portfolio.css';
import ProjectContainer from './ProjectContainer';
import Pagination from'./pagination';
import { CSSTransitionGroup } from 'react-transition-group';
import ProjectView from './projectView';
import {Input} from 'react-materialize';

class Portfolio extends Component{  
  
  constructor(){
    super();
    this.state = {
      toggleFilterPopup : false,
      titleFilter : "",
      descriptionFilter : "",
      technologyFilter : "",
      UniqueTechnology : [],
      pageNo : 1,
      itemsPerPage : 8, //the number of items that can be displayed on the page at once
      projects : [
        {
          id : "9c090f823f8f4fa28b8441a21be920d5",
          name :"zero",
          summary : "A simple web browser written in C# which performs HTTP requests.",
          description : "this is a description this is a description this is a description this is a description this is a description this is a description ",
          previewImage: "http://via.placeholder.com/950x600",
          technology:["C","JAVA","DKDKDK"],
          url: "one",
          documents: [{name:"word",
            url : "https://www.google.com",
            fileType: "word"
          },{name:"pdf document",
          url : "https://www.google.com",
          fileType: "pdf"
        }],
        },{
          id : "3263318a8a914f6683a312d85cbc40fa",
          name :"one",
          summary : "A simple web browser written in C# which performs HTTP requests.",
          description : "this is a description this is a description this is a description this is a description this is a description this is a description ",
          previewImage: "http://via.placeholder.com/950x600",
          technology:["C","JAVA"],
          url: "two",
          documents: [{name:"word",
            url : "https://www.google.com",
            fileType: "word"
          },{name:"pdf document",
          url : "https://www.google.com",
          fileType: "pdf"
        }],
        },{
          id : "64c84aaa0aa440369dafb3a27e3f6c5f",
          name :"two",
          summary : "A simple web browser written in C# which performs HTTP requests.",
          description : "this is a description this is a description this is a description this is a description this is a description this is a description ",
          previewImage: "http://via.placeholder.com/950x600",
          technology:["C","JAVA"],
          url: "three",
          documents: [{name:"word",
            url : "https://www.google.com",
            fileType: "word"
          },{name:"pdf document",
          url : "https://www.google.com",
          fileType: "pdf"
        }],
        },{
          id : "2ec43eac741a42d29b40af8f2121f243",
          name :"three",
          summary : "A simple web browser written in C# which performs HTTP requests.",
          description : "this is a description this is a description this is a description this is a description this is a description this is a description ",
          previewImage: "http://via.placeholder.com/950x600",
          technology:["C","JAVA"],
          url: "four",
          documents: [{name:"word",
            url : "https://www.google.com",
            fileType: "word"
          },{name:"pdf document",
          url : "https://www.google.com",
          fileType: "pdf"
        }],
        },{
          id : "4cfaa0e837154d5b9b26fcb26393e662",
          name :"four",
          summary : "A simple web browser written in C# which performs HTTP requests.",
          description : "this is a description this is a description this is a description this is a description this is a description this is a description ",
          previewImage: "http://via.placeholder.com/950x600",
          technology:["C","JAVA"],
          url: "five",
          documents: [{name:"word",
            url : "https://www.google.com",
            fileType: "word"
          },{name:"pdf document",
          url : "https://www.google.com",
          fileType: "pdf"
        }],
        },{
          id : "dc740de8915441ce8a1eabd422980d48",
          name :"five",
          summary : "A simple web browser written in C# which performs HTTP requests.",
          description : "this is a description this is a description this is a description this is a description this is a description this is a description ",
          previewImage: "http://via.placeholder.com/950x600",
          technology:["C","JAVA"],
          url: "six",
          documents: [{name:"word",
            url : "https://www.google.com",
            fileType: "word"
          },{name:"pdf document",
          url : "https://www.google.com",
          fileType: "pdf"
        }],
        },
        {
          id : "11d8b0d0bff84e13b0a427fde4d5014a",
          name :"six",
          summary : "A simple web browser written in C# which performs HTTP requests.",
          description : "this is a description",
          previewImage: "http://via.placeholder.com/950x600",
          technology:["C","CPLUSPLUS"],
          url: "seven",
          documents: [{name:"word",
            url : "https://www.google.com",
            fileType: "word"
          },{name:"pdf document",
          url : "https://www.google.com",
          fileType: "pdf"
        }],
        },
        {
          id : "6c00456ce6c3480498db552e35296de3",
          name :"seven",
          summary : "A simple web browser written in C# which performs HTTP requests.",
          description : "this is a description",
          previewImage: "http://via.placeholder.com/950x600",
          technology:["REACT","CSS","HTML5","JAVASCRIPT","MONGODB"],
          url: "eight",
          documents: [{name:"word",
            url : "https://www.google.com",
            fileType: "word"
          },{name:"pdf document",
          url : "https://www.google.com",
          fileType: "pdf"
        }],
        },{
          id : "5b30ceb1741a45d0ad96a41dca4a1f40",
          name :"eight",
          summary : "A simple web browser written in C# which performs HTTP requests.",
          description : "this is a description this is a description this is a description this is a description this is a description this is a description ",
          previewImage: "http://via.placeholder.com/950x600",
          technology:["C","JAVA"],
          url: "/this/will/point/to/a/endpoint",
          documents: [{name:"word",
            url : "https://www.google.com",
            fileType: "word"
          },{name:"pdf document",
          url : "https://www.google.com",
          fileType: "pdf"
        }],
        },{
          id : "9755607f72b64488b6fbb29ca8763b61",
          name :"nine",
          summary : "A simple web browser written in C# which performs HTTP requests.",
          description : "this is a description this is a description this is a description this is a description this is a description this is a description ",
          previewImage: "http://via.placeholder.com/950x600",
          technology:["C","JAVA"],
          url: "/this/will/point/to/a/endpoint",
          documents: [{name:"word",
            url : "https://www.google.com",
            fileType: "word"
          },{name:"pdf document",
          url : "https://www.google.com",
          fileType: "pdf"
        }],
        },{
          id : "8b58b7e586314700a4b9cb45d4431312",
          name :"ten",
          summary : "A simple web browser written in C# which performs HTTP requests.",
          description : "this is a description this is a description this is a description this is a description this is a description this is a description ",
          previewImage: "http://via.placeholder.com/950x600",
          technology:["C","JAVA"],
          url: "/this/will/point/to/a/endpoint",
          documents: [{name:"word",
            url : "https://www.google.com",
            fileType: "word"
          },{name:"pdf document",
          url : "https://www.google.com",
          fileType: "pdf"
        }],
        },{
          id : "9c5b87da34284877806b450fec1a031d",
          name :"eleven",
          summary : "A simple web browser written in C# which performs HTTP requests.",
          description : "this is a description this is a description this is a description this is a description this is a description this is a description ",
          previewImage: "http://via.placeholder.com/950x600",
          technology:["C","JAVA"],
          url: "/this/will/point/to/a/endpoint",
          documents: [{name:"word",
            url : "https://www.google.com",
            fileType: "word"
          },{name:"pdf document",
          url : "https://www.google.com",
          fileType: "pdf"
        }],
        },{
          id : "2797f73269c443ab84e31459d4899b8b",
          name :"twelve",
          summary : "A simple web browser written in C# which performs HTTP requests.",
          description : "this is a description this is a description this is a description this is a description this is a description this is a description ",
          previewImage: "http://via.placeholder.com/950x600",
          technology:["C","JAVA"],
          url: "/this/will/point/to/a/endpoint",
          documents: [{name:"word",
            url : "https://www.google.com",
            fileType: "word"
          },{name:"pdf document",
          url : "https://www.google.com",
          fileType: "pdf"
        }],
        },{
          id : "4fe48933b30a4eae96521d8e54f04c39",
          name :"thirteen",
          summary : "A simple web browser written in C# which performs HTTP requests.",
          description : "this is a description this is a description this is a description this is a description this is a description this is a description ",
          previewImage: "http://via.placeholder.com/950x600",
          technology:["C","JAVA"],
          url: "/this/will/point/to/a/endpoint",
          documents: [{name:"word",
            url : "https://www.google.com",
            fileType: "word"
          },{name:"pdf document",
          url : "https://www.google.com",
          fileType: "pdf"
        }],
        },
        {
          id : "e3ead03c5446406594cd1452787df360",
          name :"fourteen",
          summary : "A simple web browser written in C# which performs html requests.",
          description : "this is a description",
          previewImage: "http://via.placeholder.com/950x600",
          technology:["C","CPLUSPLUS"],
          url: "/this/will/point/to/a/endpoint",
          documents: [{name:"word",
            url : "https://www.google.com",
            fileType: "word"
          },{name:"pdf document",
          url : "https://www.google.com",
          fileType: "pdf"
        }],
        },
        {
          id : "cb3b1bd4d00340d9a2aac2caf34559b2",
          name :"fifteen",
          summary : "dog",
          description : "dog",
          previewImage: "http://via.placeholder.com/950x600",
          technology:["REACT","CSS","HTML5","JAVASCRIPT"],
          url: "/this/will/point/to/a/endpoint",
          documents: [{name:"word",
            url : "https://www.google.com",
            fileType: "word"
          },{name:"pdf document",
          url : "https://www.google.com",
          fileType: "pdf"
        }],
        },
      
      ],
      sortedProjects :[],
      selectedproperties:{id : "4cfaa0e837154d5b9b26fcb26393e662",
      name :"four",
      summary : "A simple web browser written in C# which performs HTTP requests.",
      description : "this is a description this is a description this is a description this is a description this is a description this is a description ",
      previewImage: "http://via.placeholder.com/950x600",
      technology:["C","JAVA"],
      url: "five",
      documents: [{name:"word",
      url : "https://www.google.com",
      fileType: "word"
    },{name:"pdf document",
    url : "https://www.google.com",
    fileType: "pdf"
    }],}
    }

    //bind the functions to this so that when they are called against the correct object
    this.pageUp = this.pageUp.bind(this);
    this.pageDown = this.pageDown.bind(this);
    this.expand = this.expand.bind(this);
    this.minimise = this.minimise.bind(this);

  }

  minimise(){
    this.setState({ togglePopup:"close"});
  }

  expand(value){
    this.setState({selectedproperties: this.state.projects.find(item => item.id === value), togglePopup:"open"});
  }

  //triggers when the ">" button is pressed.
  //increments the page counter and updates the projects to be displayed
  pageUp(){
    if (this.state.pageNo < this.state.sortedProjects.length / this.state.itemsPerPage){
      this.setState((prevState) => {return {pageNo: prevState.pageNo + 1}})
      this.updateProjects();
    }  
  }

  //triggers when the "<" button is pressed.
  //decrements the page counter and updates the projects to be displayed
  pageDown(){
    if(this.state.pageNo > 1){
      this.setState((prevState) => {return {pageNo: prevState.pageNo - 1}})
      this.updateProjects();    
    }
  }

  //calculates the page offset for example
  //pageNo = 4 && itemsPerPage = 8 will give an offset of 32
  //we then use this to calculate which projects in the project array should be displayed
  updateProjects(){
    let offset = this.state.itemsPerPage*this.state.pageNo;   
    return this.state.sortedProjects.slice(offset- this.state.itemsPerPage,offset);
  }

  buildTechnologyList(){
    var array = [];
    this.state.projects.forEach(function(project){
      project.technology.forEach(function(item){
        if(!array.includes(item)){
          array.push(item);
        }
      });
    });
    this.setState({UniqueTechnology : array});
  }

  componentDidMount(){
    document.title = "Portfolio - Callum Quigley";
  }

  componentWillMount(){
    this.buildTechnologyList();
    this.applyFilter();
  }

  //toggles the filter tabs visibility
  toggleFilterButton(){
    this.state.toggleFilterPopup === true ? this.setState({toggleFilterPopup : false}) : this.setState({toggleFilterPopup : true});
  }

  //very very sloppy logic, should be refactored
  applyFilter(){
    let projectList = new Set();

    for(let project of this.state.projects){
      
      for (let filterTitle of ( (this.state.titleFilter+",").split(",")).filter(Boolean)){
        if(!(projectList.has(project))){      
          if(project.name.toUpperCase().includes(filterTitle.toUpperCase())){
            projectList.add(project);  
          }
        }
      }
      for (let filterDescription of ( (this.state.descriptionFilter+",").split(",")).filter(Boolean)){
        if(!(projectList.has(project))){
          if(project.description.toUpperCase().includes(filterDescription.toUpperCase()) || project.summary.toUpperCase().includes(filterDescription.toUpperCase())){
            projectList.add(project);
          }
        }
      }
      for (let filterTechnology of ( (this.state.technologyFilter+",").split(",")).filter(Boolean)){
        if(!(projectList.has(project))){
          if(project.technology.includes(filterTechnology.toUpperCase())){
            projectList.add(project);
          }
        }
      }
    }
    
    //resets the page number
    this.setState({pageNo:1})
    
    if (projectList.size === 0){
      this.setState({sortedProjects : this.state.projects});
    }
    else{
      this.setState({sortedProjects : Array.from(projectList)});
      this.toggleFilterButton();
    }
  }
  
  updateTitleFilter(evt){
    this.setState({titleFilter : evt.target.value});
  }
  
  updateDescriptionFilter(evt){
    this.setState({descriptionFilter : evt.target.value});
  }
  
  updateTechnologyFilter(evt){
    this.setState({ technologyFilter : evt.target.value});
  }

  checkIfEnter(event){
    if(event.key ==='Enter'){
      this.applyFilter();
    }
  }
  
  render() {
    //You must use window.$ or $ will be undefined
    window.$(document).ready(function() {
      window.$('.modal').modal();
    });

    return (
      <div className="project-container">
        <div className="row no-padding pos-relative">
          <div className="col s1"></div>
          <div className="col s10">
            <div className="row no-padding pos-relative">

              <div className= "col s10"></div>
              <div className="col s1 project-counter">
                showing {(this.state.itemsPerPage * this.state.pageNo - this.state.itemsPerPage) + 1} - {this.state.sortedProjects.length > this.state.itemsPerPage * this.state.pageNo ? this.state.itemsPerPage * this.state.pageNo : this.state.sortedProjects.length} of {this.state.sortedProjects.length}
              </div>
            </div>
          </div>
        </div>
        <div className="col s1"></div>   
        <div className="row">                     
          <div className={this.state.toggleFilterPopup === true ? "project-filter-tab project-filter-tab-open":"project-filter-tab"}>
            <div  onClick={() => {this.toggleFilterButton()}} className="project-filter-tab-label valign-wrapper center-align">
              <i className={this.state.toggleFilterPopup === true ? "filter-arrow rotated-icon material-icons": "material-icons filter-arrow"}>
                arrow_drop_down
              </i>
              Filter
            </div>
            <div className="project-filter-tab-details">
              <h5>Filter By:</h5>
              <div className="filter-tab-helpertext">Enter comma seperated values (CSV)</div>
              <Input placeholder=""  label="Title" id="filterTitle" onKeyPress={event => {this.checkIfEnter(event)}} onChange={evt => {this.updateTitleFilter(evt)}} value={this.state.titleFilter}/>
              <Input placeholder=""  label="Description" id="filterDescription" onKeyPress={event => {this.checkIfEnter(event)}} onChange={evt => {this.updateDescriptionFilter(evt)}} value={this.state.descriptionFilter}/>
              <Input placeholder=""  label="Language" id="filterLanguage" onKeyPress={event => {this.checkIfEnter(event)}} onChange={evt => {this.updateTechnologyFilter(evt)} } value={this.state.technologyFilter}/>
              <a className="waves-effect waves-light btn"  onClick={() => {this.applyFilter()}}><i className="material-icons right">filter_list</i>Apply Filters</a>
            </div>
          </div>
          <div className="col s1"></div>
            <div className="col s10 pos-relative">
              <div className="row">
              <CSSTransitionGroup  transitionName="example" transitionAppear={true} transitionAppearTimeout={500} transitionEnter={false} transitionLeave={false}>
                <ProjectContainer projects={this.updateProjects()} expand={this.expand.bind(this)}/>      
              </CSSTransitionGroup>       
              </div>  
            </div>
            <div className="col s1"></div>  
        </div>
        <div className="row center-align fixed-bottom">
          <Pagination pageNo={this.state.pageNo} pageUp={this.pageUp.bind(this)} pageDown={this.pageDown.bind(this)} pageDownClass={(this.state.pageNo <= 1)?false:true} pageUpClass={(this.state.pageNo < this.state.projects.length / this.state.itemsPerPage)?true:false} />
        </div>
        <div className={this.state.togglePopup ==="open" ? "projectExpanded valign-wrapper" : "projectMinimised"}>
          <ProjectView className="projectExpanded-item valign-wrapper center-align" properties={this.state.selectedproperties} minimise={this.minimise.bind(this)}/>
        </div>   
      </div>
    );
  }
}

export default Portfolio;
