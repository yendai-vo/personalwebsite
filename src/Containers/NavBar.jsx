import React, { Component } from 'react';

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <ul id="nav">
          <li><a href="/">Home</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    )
  }
}
