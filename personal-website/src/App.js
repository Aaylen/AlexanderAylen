import React, { useState, useEffect } from 'react';
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

const CubeSide = ({ position, rotation, component: Component }) => {
  return (
    <mesh position={position} rotation={rotation}>
      <boxGeometry args={[1, 1, 0.01]} />
      <meshStandardMaterial color="white" />
      <Component />
    </mesh>
  );
};

const Cube = ({ rotation }) => {
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
        camera.position.set(0, 0, 1.4);
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
  const [rotation, setRotation] = useState([0, 0, 0]);

  const handleRotate = () => {
    setRotation([rotation[0] + Math.PI / 2, rotation[1] + Math.PI / 2, rotation[2] + Math.PI / 2]);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <WaterTitle />
              <Canvas style={{ width: '100vw', height: '100vh' }}>
                <CameraAdjustment />
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Cube rotation={rotation} />
                <OrbitControls enableRotate enableZoom enablePan />
              </Canvas>
              <button onClick={handleRotate}>Rotate Cube</button>
            </>
          }
        />
        <Route path="/experiences/:experienceTitle" element={<ExperienceDetails />} />
        <Route path="/projects/:projectTitle" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
};

export default App;