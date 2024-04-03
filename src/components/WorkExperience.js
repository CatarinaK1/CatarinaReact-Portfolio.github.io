import React from 'react';

const WorkExperience = () => {
  // Example educational background data
  // objects
  const Jobs = [
    {
      id: 1,
      Title: 'Fictional Workplace',
      Position: 'Intern',
      year: '2024',
      description:
        'Created social media content.',
    },

    // You can add more educational background entries here
  ];

  return (
    <div className="educational-background container mt-5">
      <h2 className="mb-4">Work Experience</h2>
      <div className="row">

        {/* iterate through the objects, they are treated as an array of objects */}
        {Jobs.map((Job) => (
          <div className="col-md-6 col-lg-4 mb-4" key={Job.id}>
            <div className="card h-100 shadow">
              <div className="card-header">
                <h5 className="card-title mb-0">{Job.Title}</h5>
              </div>
              <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">
                  {Job.Position}
                </h6>
                <p className="card-text">{Job.description}</p>
              </div>
              <div className="card-footer text-muted">
                <small>{Job.year}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
