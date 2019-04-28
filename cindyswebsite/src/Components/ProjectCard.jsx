import React, { Component } from 'react';
import fsStudents from '../images/fsStudents.JPG';
import './ProjectCard.css';

class ProjectCard extends Component {
  render() {
    return (
      <div class="container projectCardDiv">

        <div class="card">
          <div class="card-body">
            <h5 class="card-title">FoodPopper</h5>
            {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
            <p class="card-text">Developed a fully functional web app where users can create and book reservations for pop-up restaurants in their area.</p>
            <p class="card-text">Followed a MVC model using Ruby-on-Rails, provided user authentication with Knock JWT, ReactJS for the front-end, implemented React Routes, file uploads with Active Storage hosted with AWS, and Material-UI library for better UI/UX.</p>
            <a href="https://github.com/yendai-vo/FoodPopperFrontend2" class="card-link" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
            <a href="https://github.com/yendai-vo/FoodPopperBackend2" class="card-link" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Flatiron Trivia Game</h5>
            <p class="card-text">Worked in a team of 3 to create a basic trivia game with Vanilla Javascript and Ruby-on-Rails.</p>
            <p class="card-text">Implemented JWT for authentication, Bcrypt for password hashing, Bootstrap, and HTML/CSS.</p>
            <a href="https://github.com/yendai-vo/Module3Project-Flatiron-Trivia-Game" class="card-link" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Card Game</h5>
            <p class="card-text">Created a full-stack application that allowed users to create a deck of 52 playing cards, then shuffle and draw 5 cards at random.</p>
            <p class="card-text">Wrote algorithms in Ruby-on-Rails for the creation and drawing of the randomized cards, and used Javascript with Bootstrap, HTML/CSS to reproduce the likeness of a playing card.</p>
            <a href="https://github.com/yendai-vo/WeWorkCC" class="card-link" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Foodie</h5>
            <p class="card-text">Fully functional Pinterest-inspired application for the chef at heart. Allows users to create, pin, share, update, and delete recipes.</p>
            <p class="card-text">Followed a MVC model using Ruby-on-Rails for a fully functional application. Provided user authentication, routings, and RESTful API.</p>
            <a href="https://github.com/yendai-vo/rails-guided-project-immersive-module-two-houston-web-071618" class="card-link" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
          </div>
        </div>

      </div>
    )
  }
}

export default ProjectCard;