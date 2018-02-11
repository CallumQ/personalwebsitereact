import React, { Component } from 'react';
import Home from './components/home';
import About from'./components/about';
import Portfolio from './components/portfolio'
import CV from './components/cv';
import Blog from './components/blog';
import Contact from './components/contact';
import Header from './components/header';
import { BrowserRouter as Router, Route } from 'react-router-dom'


class App extends Component{
  
  render(){
    return (
      <Router> 
        <div className="App">
          <Header />
          <Route exact path="/" component={Home} /> 
          <Route exact path="/about" component={About} /> 
          <Route exact path="/portfolio" component={Portfolio} /> 
          <Route exact path="/cv" component={CV} /> 
          <Route exact path="/blog" component={Blog} /> 
          <Route exact path="/contact" component={Contact} />           
        </div>
      </Router>
    );
  }
}

export default App;
