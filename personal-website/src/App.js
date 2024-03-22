import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
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

const Cube = () => {
  return (
    <group>
      <CubeSide position={[0, 0, 0.5]} rotation={[0, 0, 0]} component={About} />
      <CubeSide position={[0, 0, -0.5]} rotation={[0, Math.PI, 0]} component={Experience} />
      <CubeSide position={[0, 0.5, 0]} rotation={[-Math.PI / 2, 0, 0]} component={Resume} />
      <CubeSide position={[0, -0.5, 0]} rotation={[Math.PI / 2, 0, 0]} component={Photos} />
      <CubeSide position={[0.5, 0, 0]} rotation={[0, Math.PI / 2, 0]} component={Projects} />
      <CubeSide position={[-0.5, 0, 0]} rotation={[0, -Math.PI / 2, 0]} component={Courses} />
    </group>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <WaterTitle/>
              <Canvas
                camera={{ position: [0, 0, 1.4] }}
                style={{ width: '100vw', height: '100vh' }}
              >
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Cube />
                <OrbitControls enableRotate enableZoom enablePan />
              </Canvas>
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