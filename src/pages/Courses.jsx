import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Text } from '@react-three/drei';

const Courses = () => {
  const [courses] = useState([
    { id: 1, title: 'Data Structures and Algorithms', grade: "A", subject: "Computer Science" },
    { id: 2, title: 'Object Oriented Programming C++', grade: "A", subject: "Computer Science" },
    { id: 3, title: "Calculus and Analytic Geometry IV", grade: "A", subject: "Math" },
    { id: 4, title: "Discrete Math", grade: "A", subject: "Math" },
    { id: 5, title: "Embedded Systems", grade: "-", subject: "Future Courses" },
  ]);

  const subjectColors = {
    'Math': 'lightgreen',
    'Computer Science': 'lightgreen',
    'Future Courses': 'lightyellow',
  };

  const groupedCourses = courses.reduce((acc, course) => {
    if (!acc[course.subject]) {
      acc[course.subject] = [];
    }
    acc[course.subject].push(course);
    return acc;
  }, {});

  const textRefs = useRef([]);
  let pos = 0.1; // Initial position

  return (
    <group position={[0, 0, 0.01]}>
      <mesh>
        <planeGeometry args={[0.9, 0.9]} />
        <meshBasicMaterial color="lightblue" />
      </mesh>
      <Text position={[0, 0.35, 0.01]} fontSize={0.1} color="black" anchorX="center" anchorY="middle">
        Relevant Courses
      </Text>
      <group position={[0, 0.13, 0.01]}>
        {Object.entries(groupedCourses).map(([subject, subjectCourses]) => {
          const subjectPos = pos; 
          pos -= 0.05; 
          
          return (
            <>
              <group key={`${subject}-header`} position={[0, subjectPos, 0]}>
                <Text position={[-0.4, 0.02, 0.01]} fontSize={0.03} fontWeight="bold" color="black" anchorX="left" anchorY="middle">
                  {subject}
                </Text>
              </group>
              {subjectCourses.map((course, courseIndex) => {
                const coursePos = pos; // Save the course position
                pos -= 0.1; // Increase the position for the course
                
                return (
                  <group key={course.id} position={[0, coursePos, 0]}>
                    <mesh position={[-0.06, 0, 0]}>
                      <planeGeometry args={[0.69, 0.08]} />
                      <meshBasicMaterial color={subjectColors[subject]} />
                    </mesh>
                    <mesh position={[0.345, 0, 0]}>
                      <planeGeometry args={[0.09, 0.08]} />
                      <meshBasicMaterial color={subjectColors[subject]} />
                    </mesh>
                    <Text
                      ref={(ref) => (textRefs.current[courseIndex] = ref)}
                      position={[-0.37, 0, 0.01]}
                      fontSize={0.03}
                      color="black"
                      anchorX="left"
                      anchorY="middle"
                      maxWidth={0.58}
                      textAlign="left"
                    >
                      {course.title}
                    </Text>
                    <Text
                      position={[0.344, 0, 0.01]}
                      fontSize={0.03}
                      color="black"
                      anchorX="center"
                      anchorY="middle"
                    >
                      {course.grade}
                    </Text>
                  </group>
                );
              })}
            </>
          );
        })}
      </group>
    </group>
  );
};

export default Courses;
