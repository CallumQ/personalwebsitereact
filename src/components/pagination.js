import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Pagination extends Component {  

  componentDidMount() {
    document.title = "Portfolio - Callum Quigley";
  }
   
  render() {
    return (               
      <ul className="pagination">   
        <li className="waves-effect"><a  onClick={this.props.pageDown}><i className="material-icons">chevron_left</i></a></li>
        <li className="active"><a>{this.props.pageNo}</a></li>
        <li className="waves-effect"><a  onClick={this.props.pageUp}><i className="material-icons">chevron_right</i></a></li>
      </ul> 
    );
  }
}

Pagination.propTypes = {
  pageNo: PropTypes.number,
  pageUp : PropTypes.func,
  pageDown : PropTypes.func
}

export default Pagination;
