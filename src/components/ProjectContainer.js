import React, { Component } from 'react';
import '../../src/project.css';
import TechnologyItem from './technologyItem';
import Project from './project';
import { NavLink } from 'react-router-dom';
class ProjectContainer extends Component {  

  render() 
  {
    return (
     <div>


       
      {this.props.projects.map(project => <Project key={project.name} properties={project}/>)}


     </div>
      );
    }
    
}

export default ProjectContainer;
