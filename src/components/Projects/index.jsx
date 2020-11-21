import React from 'react';
import './projects.scss';
import Restaurant from './images/restaurant.png';
import Shopper from './images/shopper.png';
import Cars from './images/cars.png';
import Bloggy from './images/bloggy.png';
import AlreadyBooked from './images/alreadybooked.png';

function Projects() {

  const myProjects = [
    {
      number: 1,
      title: "good restaurant",
      description: "Website for a fictional restaurant.",
      objective: "Responsive, mobile-design with from scratch animations.",
      link: "https://goodrestaurant.herokuapp.com/",
      repo: "https://github.com/hkennedyvi/foodapp",
      image: Restaurant
    },
    {
      number: 2,
      title: "shopper",
      description: "Website for a fictional online shoe store.",
      objective: "Responsive, mobile-design with from scratch animations.",
      link: "https://master.d3d58nhol1cgjn.amplifyapp.com/",
      repo: "https://github.com/hkennedyvi/store",
      image: Shopper
    },
    {
      number: 3,
      title: "cars",
      description: "Website for a fictional online shoe store.",
      objective: "Responsive, mobile-design with from scratch animations.",
      link: "/",
      repo: "https://github.com/hkennedyvi/project",
      image: Cars
    },
    {
      number: 4,
      title: "bloggy",
      description: "Website for a fictional online shoe store.",
      objective: "Responsive, mobile-design with from scratch animations.",
      link: "https://i-bloggy.herokuapp.com/",
      repo: "https://github.com/hkennedyvi/bloggy",
      image: Bloggy
    },
    {
      number: 5,
      title: "i'm already booked",
      description: "Website for a fictional online shoe store.",
      objective: "Responsive, mobile-design with from scratch animations.",
      link: "https://imalreadybooked.herokuapp.com/",
      repo: "https://github.com/hkennedyvi/google-books",
      image: AlreadyBooked
    },
    {
      number: 5,
      title: "shopper",
      description: "Website for a fictional online shoe store.",
      objective: "Responsive, mobile-design with from scratch animations.",
      link: "https://master.d3d58nhol1cgjn.amplifyapp.com/",
      repo: "https://github.com/hkennedyvi/store",
      image: Shopper
    },
  ]

  return (
    <div className="projects_container">
      {/* <div className="test_circle">
          </div> */}
      <div className="projects_grid">
      {myProjects.map((project) => {
          return (
            <React.Fragment>
              <div className="project">
                <h1 className="project_header">
                  Project {project.number}
                        </h1>
                <h2 className="project_subheader">
                  {project.title}
                </h2>
              </div>
              <div className="project">
                <img src={project.image} alt="" />
                <h3>{project.description}</h3>
                <h3>{project.objective}</h3>
                <div>
                  <a className="projects_link" href={project.link} target="_blank">
                    LINK &nbsp;
                          <i class="fas fa-link"></i>
                  </a>
                  <a className="projects_link" href={project.repo} target="_blank">
                    REPO &nbsp;
                          <i class="fas fa-code"></i>
                  </a>
                </div>
              </div>
              </React.Fragment>
          )
        })};
      </div>
    </div>
  )
}

export default Projects;