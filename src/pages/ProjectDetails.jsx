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
        <div className='bottom'>
          <div className='buttonholder' >
            <Link className='button' to="/">Go back to the cube</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;