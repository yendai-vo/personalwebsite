import React, { Component } from 'react'
import './technical.css';

export default class technical extends Component {
  render() {
    return (
      <div className="technicalDiv">
        <h3 className="skillTitle"> Technical Skills</h3>
        <ul className="skillsUList">
          <li className="skillsList">ReactJS</li>
          <li className="skillsList">Javascript</li>
          <li className="skillsList">Ruby-on-Rails</li>
          <li className="skillsList">Active Record</li>
          <li className="skillsList">SQL</li>
          <li className="skillsList">HTML</li>
          <li className="skillsList">CSS</li>
          <li className="skillsList">Git</li>
        </ul>
      </div>
    )
  }
}
