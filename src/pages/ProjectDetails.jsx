import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProjectDetails.css'

const ProjectDetails = () => {
  const { projectTitle } = useParams();

  return (
    <div className='container'>
      <div className='container2'>
        <h1 className='title'>{projectTitle}</h1>
        <div className='slideshow'>
        
        </div>
        <div className='content'>

        </div>
        <Link className='button' to="/">
        <div className='bottom'>
          <div className='buttonholder' >
            <h1>Go back to the cube</h1>
          </div>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetails;