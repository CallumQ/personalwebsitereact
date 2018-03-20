import React, { Component } from 'react';
import '../../src/project.css';
import PropTypes from 'prop-types';
import TechnologyItem from './technologyItem';

class Project extends Component {  
  //passes the id of the element that has been clicked to the parent component
  sendIDforModal(){
    this.props.expand(this.props.properties.id);
  }

  render() {
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
            <a onClick={() => {this.sendIDforModal()}}>Expand</a>
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

Project.propTypes = {
  properties : PropTypes.object,
  expand:PropTypes.func
}

export default Project;
