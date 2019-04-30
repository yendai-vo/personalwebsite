import React, { Component } from 'react';
import './Awards.css';
import codeRED from '../images/codeRED.png';
import startHereNow from '../images/startHereNow.png';
import facebook from '../images/facebook.png';
import nscs from '../images/NSCS.png';

export default class Awards extends Component {
  render() {

    const imageArray = [
      {img: startHereNow, text: 'Best Developer Award at StartHereNow Hackathon'},
      {img: facebook, text: 'Facebook Tech Scholarship Recipient'},
      {img: codeRED, text: 'Co-organizer and Co-creator of UH CodeRED Hackathon'},
      {img: nscs, text: 'Member of the National Society of Collegiate Scholars'},
      
    ]

    return (
      <div className="awardsDiv">
        <h1 className="awardsTitle">Awards and Organizations</h1>

        <div class="containerAwards">
        <div class="row text-center text-lg-left">
          {imageArray.map(photoObject => (
            <div class="col-lg-3 col-md-4 col-6 imageCard">
                <img class="img-fluid img-thumbnail awardsImage" src={photoObject.img} alt={photoObject.text}/>
                <div className="middle">
                  <div className="text">
                    {photoObject.text}
                  </div>
                </div>
            </div>
          ))}
        </div>
        </div>

      </div>
    )
  }
}
