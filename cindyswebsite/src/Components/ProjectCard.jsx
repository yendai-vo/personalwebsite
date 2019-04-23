import React, { Component } from 'react';
import fsStudents from '../images/fsStudents.JPG';
import './ProjectCard.css';

class ProjectCard extends Component {
  render() {
    return (
      <div>
        <div class="card">
          <img class="card-img-top" src={fsStudents} alt="fs" />
          <div class="card-body">
            <p class="card-text"> 1 Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>

        <div class="card">
          <img class="card-img-top" src={fsStudents} alt="fs" />
          <div class="card-body">
            <p class="card-text">2 Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>

        <div class="card">
          <img class="card-img-top" src={fsStudents} alt="fs" />
          <div class="card-body">
            <p class="card-text">3 Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectCard;