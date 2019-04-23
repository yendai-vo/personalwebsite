import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Containers/NavBar';
import Portfolio from './Containers/Portfolio';
import Intro from './Containers/Intro';
import Projects from './Containers/Projects';
import About from './Containers/About';
import Contact from './Containers/Contact';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Portfolio />
        <Intro />
        <Projects />
        <About />
        <Contact />
      </div>
    );
  }
}

export default App;
