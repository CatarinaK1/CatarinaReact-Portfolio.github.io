import React from 'react';

const WorkExperience = () => {
  // Example educational background data
  // objects
  const educations = [
    {
      id: 1,
      institution: 'University of Animal Kingdom',
      degree: 'Bachelor of Science in Memes',
      year: '2000 BC - 2024',
      description:
        'A prestigious institution known for its rigorous curriculum in memeology and viral content.',
    },
    {
      id: 2,
      institution: 'Institute of Cartoon Physics',
      degree: 'Master of Science in Anvil Dynamics',
      year: '2025 - 2027',
      description:
        'An acclaimed institute dedicated to the study of cartoon motion and slapstick science.',
    },
    // You can add more educational background entries here
  ];

  return (
    <div className="educational-background container mt-5">
      <h2 className="mb-4">Educational Background</h2>
      <div className="row">

        {/* iterate through the objects, they are treated as an array of objects */}
        {educations.map((education) => (
          <div className="col-md-6 col-lg-4 mb-4" key={education.id}>
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

export default WorkExperience;
