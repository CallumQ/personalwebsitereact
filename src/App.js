import React, { Component } from 'react';
import Projects from './components/project';
import AddProject from './components/addProject';
import Header from './components/header';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import uuid from 'uuid';
import Todos from './components/todos';
import $ from 'jquery';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
     Projects : [],
     todos: [],
     books :[],
    }

  }

  getTodos(){
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/todos",
      dataType :'json',
      cache :false,
      success: function(data){
        this.setState({todos:data}, function(){
      
        });
      }.bind(this),
      error: function(xhr,status,err){
        console.log(err);
      }
    });
  }

  ComponentDidMount(){
    this.getTodos();
  }
  getProjects(){
    this.setState({
      
      projects: [
        {
          id: uuid.v4(),
        title: 'Business Website',
        category: 'Web Design'  
      },
      {
        id: uuid.v4(),
        title: 'Another Website',
        category: 'Mobile Development'
      }


  ]}
);
  }
  getBooks(){
    this.setState({
books : [
  {
    title : '12 rules of life',
    category : 'jordan b peterson'
  },
  {
    title : 'wunderbar',
    category: 'dasistgut'
  }
]

    })
  }
  componentWillMount(){
    this.getBooks();
    this.getProjects();
    this.getTodos();
  }
  handleDeleteProject(id){
    let projects = this.state.projects;
    let itemIndex = projects.findIndex(x => x.id === id);
    projects.splice(itemIndex,1);
    this.setState({projects :projects});
  }
  handleAddProject(project){
    console.log(project);
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects :projects});
  }
  render() {
    return (
      
             <Router> 
             <div className="App">
             <Header />
             <Route exact path="/" component={Home}/> 
             <Route exact path="/about" component={About}/> 
             <Route exact path="/portfolio" component={Portfolio}/> 
             <Route exact path="/cv" component={CV}/> 
             <Route exact path="/blog" component={Blog}/> 
             <Route exact path="/contact" component={Contact}/> 
          
             </div>
         </Router>

    );
  }
}

export default App;

const Home = () => <h3>Home </h3>;
const About= () => <h3>About </h3>;
const Portfolio = () => <h3>portfolio </h3>;
const CV = () => <h3>CV </h3>;
const Blog = () => <h3>Blog </h3>;
const Contact = () => <h3>Contact </h3>;