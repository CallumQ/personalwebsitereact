import React, { Component } from 'react';
import '../../src/portfolio.css';


class Pagination extends Component {  
  
  constructor(){
    super();
   
  }
  componentDidMount() {
    document.title = "Portfolio - Callum Quigley";
  }
    render() 
    {
      return (              
      
    <ul class="pagination">   
    
        <li class={this.props.pageDownClass}><a onClick={this.props.pageDown}><i class="material-icons">chevron_left</i></a></li>
        <li class="active"><a>{this.props.pageNo}</a></li>
        <li class={this.props.pageUpClass}><a onClick={this.props.pageUp}><i class="material-icons">chevron_right</i></a></li>
    </ul> 
    );
    }
  
}

export default Pagination;
