import React, { Component } from 'react';
import TechnologyItem from './technologyItem';
import '../../src/project.css';

class ProjectView extends Component {  

  render() {
    return (
        <div className="project-container">
       
          
        <div className="popover-container"><div className="popover-header">
        <h2 className="left">{this.props.properties.name}</h2>
        <i className="material-icons right popover-close" onClick={this.props.minimise}>close</i>
        </div>
        <div className="popover-image">
        <img className="activator" src={this.props.properties.previewImage} alt="project preview" />
        </div>
        <div className="popover-description-section">
        <div className="popover-description"><h5>Description</h5>{this.props.properties.description}</div>
        <div className="popover-additionalDetails"><h5>Additional Details</h5></div></div>
        <div className="popover-bottomSection valign-wrapper">
        <div className="language-text">Languages: 
              {this.props.properties.technology.map(tech => <TechnologyItem key={tech}item={tech} stringName={tech}/>)}
              </div>
              <div className="bottomSection-right">
              <button className="btn waves-effect waves-light" type="submit" name="action">View code<i className="icon-github-circled-alt adjusted-logo"></i>
  </button>
              <button className="btn waves-effect waves-light" type="submit" name="action">Visit site
    <i className="material-icons right">send</i>
  </button>
  </div>
            </div>
        
 
        </div>
       
      </div>
      );
    }
}

export default ProjectView;
