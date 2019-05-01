import React, { Component } from 'react';
import AboutImage from '../Components/AboutImage';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="aboutMe" id="aboutMe">
        <h1 className="title">About Me</h1>
        <AboutImage />
      </div>
    )
  }
}

export default About;