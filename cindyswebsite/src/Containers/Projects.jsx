import React, { Component } from 'react';
import ProjectCard from '../Components/ProjectCard';
import './Projects.css';
class Projects extends Component {
  render() {
    return (
      <div className="projects" id="projects">
        <h1 className="title">Projects</h1>
        <ProjectCard />
      </div>
    )
  }
}

export default Projects;