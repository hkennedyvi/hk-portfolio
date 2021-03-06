import React from 'react';
import './projects.scss';
import Camper from './images/camper.png';
import Restaurant from './images/restaurant.png';
import Shopper from './images/shopper.png';
import Cars from './images/cars.png';
import Bloggy from './images/bloggy.png';
import AlreadyBooked from './images/alreadybooked.png';

function Projects() {

  const myProjects = [
    {
      number: 1,
      title: "camper",
      description: "Website for a fictional outdoor company.",
      objective: "Responsive, mobile design with original svg logo and transparent background PNG.",
      link: "https://master.d229e61yd7gdz6.amplifyapp.com/",
      repo: "https://github.com/hkennedyvi/camper",
      image: Camper
    },
    {
      number: 2,
      title: "good restaurant",
      description: "Website for a fictional restaurant.",
      objective: "Responsive, mobile design with animations from scratch.",
      link: "https://goodrestaurant.herokuapp.com/",
      repo: "https://github.com/hkennedyvi/foodapp",
      image: Restaurant
    },
    {
      number: 3,
      title: "shopper",
      description: "Website for a fictional online shoe store.",
      objective: "Responsive, mobile-design with from scratch animations.",
      link: "https://master.d3d58nhol1cgjn.amplifyapp.com/",
      repo: "https://github.com/hkennedyvi/store",
      image: Shopper
    },
    {
      number: 4,
      title: "bloggy",
      description: "Twitteresque blog application.",
      objective: "User registration and login with admin capability.",
      link: "https://i-bloggy.herokuapp.com/",
      repo: "https://github.com/hkennedyvi/bloggy",
      image: Bloggy
    },
    {
      number: 5,
      title: "wheels of steel",
      description: "Website for a fictional automotive dealer.",
      objective: "Responsive, mobile-design with from scratch animations.",
      link: "/",
      repo: "https://github.com/hkennedyvi/project",
      image: Cars
    },
    {
      number: 6,
      title: "i'm already booked",
      description: "User generated library application.",
      objective: "Personalized bookshelf with Google Books API search and save.",
      link: "https://imalreadybooked.herokuapp.com/",
      repo: "https://github.com/hkennedyvi/google-books",
      image: AlreadyBooked
    },
  ];

  return (
    <div className="projects_container">
      <h1 className="projects_header">
        my work
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