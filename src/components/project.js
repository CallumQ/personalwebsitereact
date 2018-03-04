import React, { Component } from 'react';
import '../../src/project.css';
import TechnologyItem from './technologyItem';
import { NavLink } from 'react-router-dom';
class Project extends Component {  

  render() 
  {
    return (
      <div className="col s3">
        <div className="card large hoverable sticky-action">
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{this.props.properties.name}</span>
          </div>
          <div className="divider"></div>
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={this.props.properties.previewImage} alt="project preview" />
          </div>
          <div className="divider"></div>
          <div className="card-content">
            {this.props.properties.summary}
          </div>
          <div className="card-action">
            <div className="left-section valign-wrapper">
              <div className="language-text">Languages: </div>
              {this.props.properties.technology.map(tech => <TechnologyItem key={tech}item={tech} stringName={tech}/>)}
            </div>
            <div className="right-section valign-wrapper ">
              <NavLink to={"portfolio/"+this.props.properties.url}> Expand</NavLink>
            </div> 
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
            {this.props.properties.name}
              <i className="material-icons right">
                close
              </i>
            </span>
            <p> {this.props.properties.description}</p>
          </div>
        </div>
      </div>
      );
    }
    
}

export default Project;
