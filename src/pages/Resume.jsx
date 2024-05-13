import React from 'react';
import { Image, Text } from '@react-three/drei';
import resume from '../images/resume.png';

const Resume = () => {
  const handleTitleClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <group position={[0, 0, 0.01]}>
      {/* Background plane */}
      <mesh>
        <planeGeometry args={[0.9, 0.9]} />
        <meshBasicMaterial color="lightblue" />
      </mesh>

      {/* Resume image */}
      <group position={[0, 0, 0.01]}>
        <Image
          url={resume}
          material={{ transparent: true }}
          scale={[0.7, 0.89, 1]}
          anchorX="center"
          anchorY="middle"
          onClick={() => handleTitleClick("https://docs.google.com/document/d/1YPODad1EtTeHU8DBNTkAxas6wH0pEqDPU-50jft4wM4/edit?usp=sharing")}
          onPointerOver={() => {document.body.style.cursor = 'pointer';}}
        />
      </group>

      {/* Text */}
      <group position={[0, 0, .02]}>
        <Text fontSize={0.05} color={"black"} anchorX="center" anchorY="middle">
          Click to View
        </Text>
      </group>
    </group>
  );
};

export default Resume;