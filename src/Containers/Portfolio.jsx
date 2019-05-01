import React, { Component } from 'react';
import './Portfolio.css';

class Portfolio extends Component {
  render() {
    return (
      <div className="mainImage name" id="portfolio">
        <div className="container">
            <h1 className="myName"> Cindy Vo </h1>
        </div>
        <h2 className="saying">Let's build something amazing together!</h2>
      </div>
    )
  }
}

export default Portfolio;