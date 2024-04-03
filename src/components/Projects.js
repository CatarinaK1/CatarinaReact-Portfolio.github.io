import React from 'react';
import ProjectCSS from '../style/projects.module.css';
import Lavendear from '../assets/Lavendear.png';
import Contact from '../assets/Contact.png';
import Data from '../assets/Data.png';
import { FaGithub } from 'react-icons/fa'; // Importing Bootstrap icons

const Projects = () => {
  // Example educational background data
  // objects
  const Projects = [
    {
      id: 1,
      name: 'Café Website Project - HAMK',
      image: Contact,
      skill: 'HTML, CSS',
      description:
        'Collaborated in a team to design and implement a website for a fictional café, demonstrating my practical skills in web development. ',
        repository:
        'https://github.com/makzibs/CatffeeWebsiteAssignment'
    },
    {
        id: 2,
        name: 'Data Processing with Python - HAMK',
        image: Data,
        skill: 'Python, Data Analysis',
        description:
          'Utilized Python to analyze and present data findings from a workplace satisfaction survey.  Showcasing my ability to create data visualizations.',
          repository:
          'https://github.com/CatarinaK1/Data-Processing-with-Python'
      },

    {
        id: 3,
        name: 'Flower Shop Website Project - HAMK',
        image: Lavendear,
        skill: 'HTML, CSS, CMS, Wordpress',
        description:
          'Used a Wordpress and custom elements to develop a website for a flower shop',
        repository:
          ''
      },

  ];

  return (
    <div className="educational-background container mt-5">
      <h2 className="mb-4">Projects</h2>
      <div className="row">

        {/* iterate through the objects, they are treated as an array of objects */}
        {Projects.map((Project) => (
          <div className="col-md-6 col-lg-4 mb-4" key={Project.id} style={{ height: '650px' }}>
            <div className="card h-100 shadow">
            <img src={Project.image} className="card-img-top" alt="Project Image"  style={{ height: '100%' }} />
              <div className="card-header">
                <h5 className="card-title mb-0">{Project.name}</h5>
              </div>
              <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">
                  {Project.skill}
                </h6>
                <p className="card-text">{Project.description}</p>
                <div className="d-flex justify-content-center">

                <a href="https://github.com/CatarinaK1" target="_blank" rel="noopener noreferrer" className={`btn btn-dark ${ProjectCSS.socialButton}`}>
                  <FaGithub /> GitHub
                </a>
              </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
