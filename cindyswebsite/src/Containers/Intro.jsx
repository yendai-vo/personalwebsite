import React, { Component } from 'react';
import './Intro.css';

class Intro extends Component {
  render() {
    return (
      <div className="intro">
        <h2 className="iAm">I am a full-stack web developer.</h2>
        <p className="striveFor">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, recusandae maxime. Omnis sunt animi ex.</p>
        <h3 className="skillTitle"> Technical Skills</h3>
        <ul className="skillsUList">
          <li className="skillsList">ReactJS</li>
          <li className="skillsList">Javascript</li>
          <li className="skillsList">Ruby-on-Rails</li>
          <li className="skillsList">HTML</li>
          <li className="skillsList">CSS</li>
        </ul>
        
      </div>
    )
  }
}

export default Intro;