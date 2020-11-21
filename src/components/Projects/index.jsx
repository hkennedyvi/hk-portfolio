import React from 'react';
import './projects.scss';
import restaurant from './images/restaurant.png';
import shopper from './images/shopper.png';

function Projects() {

  return (
    <div className="projects_container">
      {/* <div className="test_circle">
          </div> */}
      <div className="projects_grid">
        <div className="project">
          <h1 className="project_header">
            Project 1
            </h1>
          <h2 className="project_subheader">
            good restaurant.
            </h2>
        </div>
        <div className="project">
          <img src={restaurant} alt="" />
          <h3>Website for a fictional restaurant.</h3>
          <h3>Responsive, mobile-design with from scratch animations.</h3>
          <div>
          <a className="projects_link" href="/">
              LINK &nbsp;
              <i class="fas fa-link"></i>
            </a>
            <a className="projects_link" href="/">
              REPO &nbsp;
              <i class="fas fa-code"></i>
            </a>
          </div>
        </div>
        <div className="project">
          <h1 className="project_header">
            Project 2
            </h1>
          <h2 className="project_subheader">
            shopper.
            </h2>
        </div>
        <div className="project">
          <img src={shopper} alt="" />
          <h3>Website for a fictional restaurant.</h3>
          <h3>Responsive, mobile-design with from scratch animations.</h3>
          <div>
          <a className="projects_link" href="/">
              LINK &nbsp;
              <i class="fas fa-link"></i>
            </a>
            <a className="projects_link" href="/">
              REPO &nbsp;
              <i class="fas fa-code"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;