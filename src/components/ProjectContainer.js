import React, { Component } from 'react';
import Project from './project';

class ProjectContainer extends Component {  
  render() {
    return (
      <div>
        {this.props.projects.map(project => <Project key={project.name} properties={project}/>)}
     </div>
    );
  }  
}

export default ProjectContainer;
