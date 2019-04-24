import React, { Component } from 'react';
import AboutImage from '../Components/AboutImage';

class About extends Component {
  render() {
    return (
      <div className="aboutMe">
        <h1>About Me</h1>
        <AboutImage />
      </div>
    )
  }
}

export default About;