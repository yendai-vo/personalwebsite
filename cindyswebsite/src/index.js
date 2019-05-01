import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
//import * as serviceWorker from './serviceWorker';
import App from './App';
import Portfolio from './Containers/Portfolio';
import Intro from './Containers/Intro';
import Projects from './Containers/Projects';
import About from './Containers/About';
import Contact from './Containers/Contact';

const routing = (
  <Router>
    <div>
        <ul className="navUList">
          <li className="navList">
            <Link to="/" className="navLink">Home</Link>
          </li>
          <li className="navList">
            <a href="#technical" className="navLink">Skills</a>
          </li>
          <li className="navList">
            <a href="#projects" className="navLink">Projects</a>
          </li>
          <li className="navList">
            <a href="#aboutMe" className="navLink">About</a>
          </li>
          <li className="navList">
            <a href="#contact" className="navLink">Contact</a>
          </li>
        </ul>
        <div class="scrollDiv">
          <a href="#portfolio" className="scrollIcon" ><i class="fas  fa-arrow-circle-up"></i></a>
        </div>
      <Route exact path="/" component={App} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/intro" component={Intro} />
      <Route path="/projects" component={Projects} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

// ReactDOM.render(<App />, document.getElementById('root'));
// serviceWorker.unregister();
