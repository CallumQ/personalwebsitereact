import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Project from './project';

class ProjectContainer extends Component {  
  render() {
    return (
      <div>d
        {this.props.projects.map(project => <Project key={project.id} properties={project} expand={this.props.expand}/>)}
     </div>
    );
  }  
}

ProjectContainer.propTypes = {
  projects : PropTypes.array,
  expand : PropTypes.func
}

export default ProjectContainer;

