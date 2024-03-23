import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Text, Image } from '@react-three/drei';
import SoustWebsiteImage from '../images/SoustWebsite.jpg';
import AtwoodsMachineImage from '../images/AtwoodsMachine.jpg';

const Projects = () => {
  const navigate = useNavigate();
  const [projects] = useState([
    { id: 1, title: 'Personal Website', image: SoustWebsiteImage },
    { id: 2, title: 'E-commerce Website', image: SoustWebsiteImage },
    { id: 3, title: "Atwood's Machine", image: AtwoodsMachineImage },
  ]);

  const [hoveredTitle, setHoveredTitle] = useState(null);
  const textRefs = useRef([]);

  const handleTitleHover = (title) => {
    setHoveredTitle(title);
  };

  const handleTitleClick = (title) => {
    navigate(`/projects/${title}`);
  };

  return (
    <group position={[0, 0, 0.01]}>
      <mesh>
        <planeGeometry args={[0.9, 0.9]} />
        <meshBasicMaterial color="lightblue" />
      </mesh>
      <Text position={[0, 0.35, 0.01]} fontSize={0.1} color="black" anchorX="center" anchorY="middle">
        Projects
      </Text>
      <group position={[0, 0.15, 0.01]}>
        {projects.map((project, index) => (
          <group key={project.id} position={[0, -index * 0.2, 0]}>
            <mesh>
              <planeGeometry args={[0.8, 0.15]} />
              <meshBasicMaterial color={index % 2 === 0 ? 'lightgreen' : 'lightpink'} />
            </mesh>
            <Image
              url={project.image}
              position={[-0.32, 0, 0.01]}
              scale={[0.15, 0.15, 1]}
              transparent
            />
            <Text
              ref={(ref) => (textRefs.current[index] = ref)}
              position={[-0.15, 0, 0.01]}
              fontSize={0.05}
              color={hoveredTitle === project.title ? 'blue' : 'black'}
              anchorX="left"
              anchorY="middle"
              maxWidth={1}
              textAlign="left"
              onPointerOver={() => {
                handleTitleHover(project.title);
                document.body.style.cursor = 'pointer';
              }}
              onPointerOut={() => {
                handleTitleHover(null);
                document.body.style.cursor = 'default';
              }}
              onClick={() => handleTitleClick(project.title)}
            >
              {project.title}
            </Text>
          </group>
        ))}
      </group>
    </group>
  );
};

export default Projects;