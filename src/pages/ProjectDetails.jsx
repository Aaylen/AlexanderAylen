import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProjectDetails = () => {
  const { projectTitle } = useParams();

  return (
    <div>
      <h1>Project Details: {projectTitle}</h1>
      <p>This is a regular JSX component for the project details page.</p>
      <Link to="/">Go back to the cube</Link>
    </div>
  );
};

export default ProjectDetails;