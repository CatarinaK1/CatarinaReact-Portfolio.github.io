import React from 'react';
import EducationalCSS from '../style/education.module.css';

const EducationalBackground = () => {
  // Example educational background data
  // objects
  const educations = [
    {
      id: 1,
      institution: 'HAMK - Häme University of Applied Sciences',
      degree: 'Bachelor of Business Administration, Degree Program in Computer Applications',
      year: '2022 - 2025',
      description:
        'At HAMK I am currently focused on acquiring the skills necessary to work in Software Development. I maintain a 4.49 GPA. Actively participating in my courses and obtaining practical skills. I am also involved in my university by being a Tutor.',
    }
    // You can add more educational background entries here
  ];

  return (
    
    <div className="educational-background container mt-5">
      <h2 className="mb-4">Educational Background</h2>
      <div className="row">

        {/* iterate through the objects, they are treated as an array of objects */}
        {educations.map((education) => (
          <div className="col-md-6 col-lg-12 mb-9" key={education.id}>
            <div className="card h-100 shadow">
              <div className="card-header">
                <h5 className="card-title mb-0">{education.institution}</h5>
              </div>
              <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">
                  {education.degree}
                </h6>
                <p className="card-text">{education.description}</p>
              </div>
              <div className="card-footer text-muted">
                <small>{education.year}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationalBackground;
