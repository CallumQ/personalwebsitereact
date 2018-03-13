import React, { Component } from 'react';
import Project from './project';

class ProjectContainer extends Component {  
  render() {
    return (
      <div>
        {this.props.projects.map(project => <Project key={project.id} properties={project} expand={this.props.expand}/>)}
     </div>
    );
  }  
}

export default ProjectContainer;
