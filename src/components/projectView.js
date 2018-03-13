import React, { Component } from 'react';
import '../../src/project.css';
import TechnologyItem from './technologyItem';
import { NavLink } from 'react-router-dom';
class ProjectView extends Component {  

  render() {
    return (
        <div className="project-container">
        <div className="row no-padding pos-relative">
          <div className="col s1"></div>
          <div className="col s10">
            <div className="row no-padding pos-relative">
              <div className="col s1"><h1>{this.props.properties.id}</h1></div>
              <div className= "col s10"></div>
              <div className="col s1">
               
              </div>
            </div>
          </div>
        </div>
        <div className="col s1"></div>
        <div className="row">
          <div className="col s1"></div>
            <div className="col s10 pos-relative">
              <div className="row">
                
              </div>  
            </div>
            <div className="col s1"></div>  
        </div>
       
      </div>
      );
    }
}

export default ProjectView;
