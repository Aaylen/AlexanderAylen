import React, { useCallback, useState } from 'react';
import { Text, Image } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import headshot from '../images/professional.png';
import LinkedIn from '../images/li.png';
import GitHub from '../images/github.png';
import Devpost from '../images/dpost.png';
import Mail from '../images/mail.png';

const About = () => {
  const texture = useLoader(TextureLoader, headshot);
  const [hovered, setHovered] = useState(null);

  const handleIconClick = useCallback((url) => {
    window.open(url, '_blank');
  }, []);

  const handlePointerOver = useCallback((index) => {
    setHovered(index);
    document.body.style.cursor = 'pointer'; // Change cursor to pointer
  }, []);

  const handlePointerOut = useCallback(() => {
    setHovered(null);
    document.body.style.cursor = 'auto'; // Reset cursor to default
  }, []);

  return (
    <group position={[0, 0, 0.01]}>
      <mesh>
        <planeGeometry args={[0.9, 0.9]} />
        <meshBasicMaterial color="lightblue" />
      </mesh>
      <mesh position={[0.275, 0.1, 0.01]}>
        <planeGeometry args={[0.3, 0.3]} />
        <meshBasicMaterial map={texture} transparent={true} />
      </mesh>
      <Text position={[0, 0.35, 0.01]} fontSize={0.1} color="black" anchorX="center" anchorY="middle">
        About Me
      </Text>
      <Text position={[-0.15, 0.09, 0.01]} fontSize={0.04} maxWidth={0.55} color="black" anchorX="center" anchorY="middle">
        Sophmore at Santa Clara University pursuing a double major in Computer Science and Finance with a minor in Mathematics. Experienced in backend tasks such as
      </Text>
      <Text position={[0, -0.208, 0.01]} fontSize={0.04} maxWidth={0.85} color="black" anchorX="center" anchorY="middle">
        creating API endpoints, training CNNs, and building webscrapers, but I also enjoy frontend tasks. Looking for challenging opportunities to help me grow both as a person and an engineer.
      </Text>
      <group position={[0, -0.394, 0.01]}>
        <mesh
          onClick={() => handleIconClick('mailto:aaylen@scu.edu')}
          onPointerOver={() => handlePointerOver(0)}
          onPointerOut={handlePointerOut}
        >
          <Image url={Mail} scale={0.05} position={[-0.15, 0, 0]} transparent backgroundColor="lightblue" />
        </mesh>
        <mesh
          onClick={() => handleIconClick('https://devpost.com/aaylen')}
          onPointerOver={() => handlePointerOver(1)}
          onPointerOut={handlePointerOut}
        >
          <Image url={Devpost} scale={0.05} position={[-0.05, 0, 0]} transparent backgroundColor="lightblue" />
        </mesh>
        <mesh
          onClick={() => handleIconClick('https://www.linkedin.com/in/aaylen/')}
          onPointerOver={() => handlePointerOver(2)}
          onPointerOut={handlePointerOut}
        >
          <Image url={LinkedIn} scale={0.05} position={[0.05, 0, 0]} transparent backgroundColor="lightblue" />
        </mesh>
        <mesh
          onClick={() => handleIconClick('https://github.com/Aaylen')}
          onPointerOver={() => handlePointerOver(3)}
          onPointerOut={handlePointerOut}
        >
          <Image url={GitHub} scale={0.05} position={[0.15, 0, 0]} transparent backgroundColor="lightblue" />
        </mesh>
      </group>
    </group>
  );
};

export default About;
