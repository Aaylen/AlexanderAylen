import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ExperienceDetails = () => {
  const { ExperienceTitle } = useParams();

  return (
    <div>
      <h1>Experience Details: {ExperienceTitle}</h1>
      <p>This is a regular JSX component for the project details page.</p>
      <Link to="/">Go back to the cube</Link>
    </div>
  );
};

export default ExperienceDetails;