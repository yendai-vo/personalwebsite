import React, { Component } from 'react';
import ProjectCard from '../Components/ProjectCard';
import './Projects.css';
class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <h1>Projects</h1>
        <ProjectCard />
      </div>
    )
  }
}

export default Projects;