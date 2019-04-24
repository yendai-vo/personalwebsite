import React, { Component } from 'react';

import dobieCamp from '../images/dobieCamp.jpg';
import hangingLake from '../images/hangingLake.JPG';
import groupGC from '../images/groupGC.jpg';
import skydiving from '../images/skydiving.jpg';
import fsSari from '../images/fsSari.jpg';
import familyBeach from '../images/familyBeach.jpg';
import fsStudents from '../images/fsStudents.JPG';
import fsCindy from '../images/fsCindy.JPG';

import './AboutImage.css';
class AboutImage extends Component {
  render() {
    return (
      <div class="container">
        <div class="row text-center text-lg-left">

          <div class="col-lg-3 col-md-4 col-6">
            <a href="../images/dobieCamp.jpg" class="d-block mb-4 h-100">
              <img class="img-fluid img-thumbnail" src={dobieCamp} alt="Dobie at Camp"/>
            </a>
          </div>

          <div class="col-lg-3 col-md-4 col-6">
            <a href="../images/fsSari.jpg" class="d-block mb-4 h-100">
              <img class="img-fluid img-thumbnail" src={fsSari} alt="Flatiron Diwali"/>
            </a>
          </div>

          <div class="col-lg-3 col-md-4 col-6">
            <a href="../images/fsStudents.JPG" class="d-block mb-4 h-100">
              <img class="img-fluid img-thumbnail" src={fsStudents} alt="Flatiron Students"/>
            </a>
          </div>

          <div class="col-lg-3 col-md-4 col-6">
            <a href="../images/familyBeach.jpg" class="d-block mb-4 h-100">
              <img class="img-fluid img-thumbnail" src={familyBeach} alt="Family at Beach"/>
            </a>
          </div>

          <div class="col-lg-3 col-md-4 col-6">
            <a href="../images/groupGC.jpg" class="d-block mb-4 h-100">
              <img class="img-fluid img-thumbnail" src={groupGC} alt="Group at Grand Canyons"/>
            </a>
          </div>

          <div class="col-lg-3 col-md-4 col-6">
            <a href="../images/hangingLake.JPG" class="d-block mb-4 h-100">
              <img class="img-fluid img-thumbnail" src={hangingLake} alt="Hanging Lake"/>
            </a>
          </div>

          <div class="col-lg-3 col-md-4 col-6">
            <a href="../images/skydiving.jpg" class="d-block mb-4 h-100">
              <img class="img-fluid img-thumbnail" src={skydiving} alt="Cindy Skydiving"/>
            </a>
          </div>

          <div class="col-lg-3 col-md-4 col-6">
            <a href="../images/fsCindy.JPG" class="d-block mb-4 h-100">
              <img class="img-fluid img-thumbnail" src={fsCindy} alt="Cindy at Flatiron"/>
            </a>
          </div>

        </div>
      </div>
              
    )
  }
}

export default AboutImage;
