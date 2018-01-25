import React, { Component } from 'react';
import Projects from './components/project';
import AddProject from './components/addProject';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
     Projects : []
    }

  }

  componentWillMount(){
    this.setState({
      
        projects: [
          {
          title: 'Business Website',
          category: 'Web Design'  
        },
        {
          title: 'Another Website',
          category: 'Mobile Development'
        }
  
    ]});
  }

  render() {
    return (
      <div className="App">
       <AddProject />
        <Projects projects = {this.state.projects}/>
      </div>
    );
  }
}

export default App;
