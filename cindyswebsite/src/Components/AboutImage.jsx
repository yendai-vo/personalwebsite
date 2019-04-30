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
    const imageArray = [
      {img: dobieCamp, text: 'Dobie Wan Kenobi at Camp'},
      {img: hangingLake, text: 'Hike to the Hanging Lake'},
      {img: groupGC, text: 'Post-Grad Trip to the Grand Canyons'},
      {img: skydiving, text: 'Bravely Skydiving'},
      {img: fsSari, text: 'Celebrating Diwali'},
      {img: familyBeach, text: 'Family Vacation at St. Petersburg, FL'},
      {img: fsStudents, text: 'Graduation at Flatiron School'},
      {img: fsCindy, text: 'Flatiron Student'}
    ];

    return (
      // <div class="containerCard">
      //   <div class="row text-center text-lg-left">
      //     {imageArray.map(photoObject => (
      //       <div class="col-lg-3 col-md-4 col-6 imageCard">
      //         <a href="../images/dobieCamp.jpg" class="d-block mb-4 h-100">
      //           <img class="img-fluid img-thumbnail galleryImage" src={photoObject.img} alt={photoObject.text}/>
      //           <span>{photoObject.text}</span>
      //         </a>
      //       </div>
      //     ))}
      //   </div>
      // </div>
      <div class="containerCard">
        <div class="row text-center text-lg-left">
          {imageArray.map(photoObject => (
            <div class="col-lg-3 col-md-4 col-6 imageCard">
                <img class="img-fluid img-thumbnail galleryImage" src={photoObject.img} alt={photoObject.text}/>
                <div className="middle">
                  <div className="text">
                    {photoObject.text}
                  </div>
                </div>
            </div>
          ))}
        </div>
        </div>
              
    )
  }
}

export default AboutImage;
