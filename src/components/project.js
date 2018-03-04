import React, { Component } from 'react';
import '../../src/project.css';
import TechnologyItem from './technologyItem';

class Project extends Component {  

  render() 
  {
    return (
      <div className="col s3">
        <div className="card large hoverable">
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{this.props.properties.name}</span>
          </div>
          <div className="divider"></div>
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={this.props.properties.previewImage} alt="project preview" />
          </div>
          <div className="divider"></div>
          <div className="card-content">
            {this.props.properties.description}
          </div>
          <div class="card-action">
            <div class="left-section valign-wrapper">
              <div className="language-text">Languages: </div>
              {this.props.properties.technology.map(tech => <TechnologyItem item={tech} stringName={tech}/>)}
            </div>
            <div class="right-section valign-wrapper">
              <a href="/">More info</a>
            </div> 
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">
              Card Title
              <i class="material-icons right">
                close
              </i>
            </span>
            <p>Here is some more information about this product that is only revealed once clicked on.</p>
          </div>
        </div>
      </div>
      );
    }
    
}

export default Project;
