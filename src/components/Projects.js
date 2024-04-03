import React from 'react';
import Lavendear from '../assets/Lavendear.png';
import Contact from '../assets/Contact.png';

const Projects = () => {
  // Example educational background data
  // objects
  const educations = [
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
        name: 'Café Website Project - HAMK',
        image:'',
        skill: 'HTML, CSS',
        description:
          'Collaborated in a team to design and implement a website for a fictional café, demonstrating my practical skills in web development. ',
          repository:
          'https://github.com/makzibs/CatffeeWebsiteAssignment'
      },

    {
        id: 3,
        name: 'Café Website Project - HAMK',
        image: Lavendear,
        skill: 'HTML, CSS',
        description:
          'Collaborated in a team to design and implement a website for a fictional café, demonstrating my practical skills in web development. ',
        repository:
          'https://github.com/makzibs/CatffeeWebsiteAssignment'
      },

  ];

  return (
    <div className="educational-background container mt-5">
      <h2 className="mb-4">Projects</h2>
      <div className="row">

        {/* iterate through the objects, they are treated as an array of objects */}
        {educations.map((education) => (
          <div className="col-md-6 col-lg-4 mb-4" key={education.id} style={{ height: '650px' }}>
            <div className="card h-100 shadow">
            <img src={education.image} className="card-img-top" alt="Education"  style={{ height: '100%' }} />
              <div className="card-header">
                <h5 className="card-title mb-0">{education.name}</h5>
              </div>
              <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">
                  {education.skill}
                </h6>
                <p className="card-text">{education.description}</p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
