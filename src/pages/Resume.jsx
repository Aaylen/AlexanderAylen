import React from 'react';
import { Text, Image } from '@react-three/drei';
import resume from '../images/resume.png';

const Resume = () => {
  return (
    <group position={[0, 0, 0.01]}>
      {/* Resume image */}
      <group position={[0, 0, 0.02]}>
        <Image
          url={resume}
          material={{ transparent: true }}
          scale={[0.7, 0.89, 1]}
          anchorX="center"
          anchorY="middle"
        />
      </group>
      {/* Background plane */}
      <mesh>
        <planeGeometry args={[0.9, 0.9]} />
        <meshBasicMaterial color="lightblue" />
      </mesh>

      
    </group>
  );
};

export default Resume;
