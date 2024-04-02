import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Text, Image } from '@react-three/drei';
import speedy from '../images/speedy.jpg';
import trashai1 from '../images/trashai1.jpg';

const Experience = () => {
  const navigate = useNavigate();
  const [Experiences] = useState([
    { id: 1, title: 'INRIX 2023', image: speedy, link: 'https://devpost.com/software/speedily' },
    { id: 2, title: 'Hack for Humanity', image: trashai1, link: 'https://devpost.com/software/trash-classification-ai-mobile-app' },
    // { id: 3, title: "Atwood's Machine", image: AtwoodsMachineImage },
  ]);
  const [hoveredTitle, setHoveredTitle] = useState(null);
  const textRefs = useRef([]);

  const handleTitleHover = (title) => {
    setHoveredTitle(title);
  };

  const handleTitleClick = (title, link) => {
    // navigate(`/experiences/${title}`);
    window.location.href = link;
  };

  return (
    <group position={[0, 0, 0.01]}>
      <mesh>
        <planeGeometry args={[0.9, 0.9]} />
        <meshBasicMaterial color="lightblue" />
      </mesh>
      <Text position={[0, 0.35, 0.01]} fontSize={0.1} color="black" anchorX="center" anchorY="middle">
        Hackathons
      </Text>
      <group position={[0, 0.15, 0.01]}>
        {Experiences.map((Experiences, index) => (
          <group key={Experiences.id} position={[0, -index * 0.2, 0]}>
            <mesh>
              <planeGeometry args={[0.8, 0.15]} />
              <meshBasicMaterial color={index % 2 === 0 ? 'lightgreen' : 'lightpink'} />
            </mesh>
            <Image url={Experiences.image} position={[-0.32, 0, 0.01]} scale={[0.15, 0.15, 1]} transparent />
            <Text
              ref={(ref) => (textRefs.current[index] = ref)}
              position={[-0.15, 0, 0.01]} 
              fontSize={0.05}
              color={hoveredTitle === Experiences.title ? 'blue' : 'black'}
              anchorX="left"
              anchorY="middle"
              maxWidth={0.5} 
              textAlign="left" 
              onPointerOver={() => {
                handleTitleHover(Experiences.title);
                document.body.style.cursor = 'pointer';
              }}
              onPointerOut={() => {
                handleTitleHover(null);
                document.body.style.cursor = 'default';
              }}
              onClick={() => handleTitleClick(Experiences.title, Experiences.link)}
            >
              {Experiences.title}
            </Text>
          </group>
        ))}
      </group>
    </group>
  );
};

export default Experience;