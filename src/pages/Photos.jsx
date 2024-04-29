import React from 'react';
import { Image } from '@react-three/drei';
import photo from '../images/photoCollage.jpg';

const Photos = () => {
  return (
    <group position={[0, 0, 0.01]}>
      <group position={[0, 0, 0.02]}>
        <Image
          url={photo}
          material={{ transparent: true }}
          scale={[0.9, 0.9, 1]}
          anchorX="center"
          anchorY="middle"
        />
      </group>

      
    </group>
  );
};

export default Photos;
