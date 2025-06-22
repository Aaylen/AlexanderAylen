import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Photos from './pages/Photos';
import Experience from './pages/Experience';
import Courses from './pages/Courses';
import ProjectDetails from './pages/ProjectDetails';
import WaterTitle from './components/WaterTitle';
import ExperienceDetails from './pages/ExperienceDetails';
import Background from './components/Background';
import * as THREE from 'three';


const CubeSide = ({ position, rotation, component: Component }) => {
  return (
    <mesh position={position} rotation={rotation}>
      <boxGeometry args={[1, 1, 0.01]} />
      <meshBasicMaterial color="white" />
      <Component />
    </mesh>
  );
};

const Cube = ({ rotation, onRotationChange }) => {
  // const rotationSpeed = 0; 

  // useFrame((state, delta) => {
  //   const newRotation = [...rotation];
  //   newRotation[1] += rotationSpeed * delta;
  //   onRotationChange(newRotation);
  // });

  return (
    <group rotation={rotation}>
      <CubeSide position={[0, 0, 0.5]} rotation={[0, 0, 0]} component={About} />
      <CubeSide position={[0, 0, -0.5]} rotation={[0, Math.PI, 0]} component={Experience} />
      <CubeSide position={[0, 0.5, 0]} rotation={[-Math.PI / 2, 0, 0]} component={Resume} />
      <CubeSide position={[0, -0.5, 0]} rotation={[Math.PI / 2, 0, 0]} component={Photos} />
      <CubeSide position={[0.5, 0, 0]} rotation={[0, Math.PI / 2, 0]} component={Projects} />
      <CubeSide position={[-0.5, 0, 0]} rotation={[0, -Math.PI / 2, 0]} component={Courses} />
    </group>
  );
};

const CameraAdjustment = () => {
  const { camera } = useThree();
  
  useEffect(() => {
    const handleResize = () => {
      const aspectRatio = window.innerWidth / window.innerHeight;

      if (aspectRatio > 1) {
        camera.position.set(0, 0, 1.45);
      } else {
        camera.position.set(0, 0, 1.6);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [camera]);

  return null;
};




const App = () => {
  const [rotation, setRotation] = useState([0, -0.5, 0]);

  return (
    <Router basename="/AlexanderAylen">
      <Routes>
        <Route path="/" element={
          <>
            <Background/>
            <WaterTitle />
            <Canvas style={{ width: '100vw', height: '100vh' }}>
              <CameraAdjustment />
              <ambientLight />
              <pointLight position={[10, 10, 10]} />
              <Cube rotation={rotation} onRotationChange={setRotation}/>
              <OrbitControls 
              enableRotate 
              enableZoom={true}
              enablePan={false} 
              rotateSpeed={0.75} 
              zoomSpeed={0.75} 
              minDistance={1} 
              maxDistance={4} 
              mouseButtons={{ RIGHT: THREE.MOUSE.ROTATE, LEFT: THREE.MOUSE.ROTATE }} 
              />
            </Canvas>
            
          </>
        } />
        <Route path="/experiences/:experienceTitle" element={<ExperienceDetails />} />
        <Route path="/projects/:projectTitle" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
};

export default App;