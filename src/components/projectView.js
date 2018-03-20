import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TechnologyItem from './technologyItem';
import '../../src/project.css';

class ProjectView extends Component {  
  render() {
    return (
      <div className="project-container">   
        <div className="popover-container">
          <div className="popover-header">
            <h2 className="left">
              {this.props.properties.name}
            </h2>
            <i className="material-icons right popover-close" onClick={this.props.minimise}>close</i>
          </div>
          <div className="popover-image">
            <img className="activator" src={this.props.properties.previewImage} alt="project preview" />
            <div className="popover-leftArrow"><i className="material-icons">keyboard_arrow_left</i></div>
            <div className="popover-rightArrow"> <i className="material-icons">keyboard_arrow_right</i></div>
          </div>
          <div className="popover-description-section">
            <div className="popover-description">
              <h5>Description</h5>
              {this.props.properties.description}
            </div>
            <div className="popover-additionalDetails">
              <h5>Documents</h5>
              <ul>
                {this.props.properties.documents.map(document => {return <a href={document.url} target="_blank" key={document.name}><li><i className={"icon-file-"+document.fileType}></i>{document.name}</li></a>})}
              </ul>
            </div>
          </div>
          <div className="popover-bottomSection valign-wrapper">
            <div className="bottomSection-left valign-wrapper">
              <div className="language-text">Languages: </div>
              <div className="technologyItems">
                {this.props.properties.technology.map(tech => <TechnologyItem key={tech}item={tech} stringName={tech}/>)}
              </div>
            </div>
            <div className="bottomSection-right">
              <a href="https://github.com"><button className="btn waves-effect waves-light" type="submit" name="action">View Code<i className="icon-github-circled-alt adjusted-logo"></i></button></a>
              <a href="https://google.com" className="modal-button">  <button className="btn waves-effect waves-light" type="submit" name="action">Visit site<i className="material-icons right">send</i></button></a>
            </div>
          </div>
        </div> 
      </div>
      );
    }
}
//this.props validation (only used for during dev)
ProjectView.propTypes = {
  properties : PropTypes.object,
  minimise : PropTypes.func
}

export default ProjectView;
