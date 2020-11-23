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
      image: Restaurant,
      isExpanded: true
    },
    {
      number: 2,
      title: "shopper",
      description: "Website for a fictional online shoe store.",
      objective: "Responsive, mobile-design with from scratch animations.",
      link: "https://master.d3d58nhol1cgjn.amplifyapp.com/",
      repo: "https://github.com/hkennedyvi/store",
      image: Shopper,
      isExpanded: false
    },
    {
      number: 3,
      title: "cars",
      description: "Website for a fictional online shoe store.",
      objective: "Responsive, mobile-design with from scratch animations.",
      link: "/",
      repo: "https://github.com/hkennedyvi/project",
      image: Cars,
      isExpanded: false
    },
    {
      number: 4,
      title: "bloggy",
      description: "Website for a fictional online shoe store.",
      objective: "Responsive, mobile-design with from scratch animations.",
      link: "https://i-bloggy.herokuapp.com/",
      repo: "https://github.com/hkennedyvi/bloggy",
      image: Bloggy,
      isExpanded: false
    },
    {
      number: 5,
      title: "i'm already booked",
      description: "Website for a fictional online shoe store.",
      objective: "Responsive, mobile-design with from scratch animations.",
      link: "https://imalreadybooked.herokuapp.com/",
      repo: "https://github.com/hkennedyvi/google-books",
      image: AlreadyBooked,
      isExpanded: false
    },
    {
      number: 6,
      title: "shopper",
      description: "Website for a fictional online shoe store.",
      objective: "Responsive, mobile-design with from scratch animations.",
      link: "https://master.d3d58nhol1cgjn.amplifyapp.com/",
      repo: "https://github.com/hkennedyvi/store",
      image: Shopper,
      isExpanded: false
    },
  ];

  return (
    <div className="projects_container">
      <h1 className="projects_header">
        works by me
      </h1>
      {/* <div className="test_circle">
          </div> */}
      <div className="projects_grid">
        {myProjects.map((project) => {
          return (
            <React.Fragment key={project.number}>
              <div className="project">
                <h1 className="project_header">
                  Project {project.number}
                </h1>
                <h2 className="project_subheader">
                  {project.title}
                </h2>
              </div>
              <div className="project">
                <img className="project_image" src={project.image} alt="" />
                <h3 className="project_info">{project.description}</h3>
                <h3 className="project_info">{project.objective}</h3>
                <div>
                  <a className="projects_link" href={project.link} rel="noreferrer" target="_blank">
                    LINK &nbsp;
                      <i className="fas fa-link"></i>
                  </a>
                  <a className="projects_link" href={project.repo} rel="noreferrer" target="_blank">
                    REPO &nbsp;
                      <i className="fas fa-code"></i>
                  </a>
                </div>
              </div>
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}

export default Projects;