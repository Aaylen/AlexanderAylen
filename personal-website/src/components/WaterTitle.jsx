import React from 'react';
import styled from 'styled-components';

const TextContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  pointer-events: none;
`;

const Text = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 3.5rem;
  color: #03a9f4;
  animation: water 5s ease-in-out infinite;
  position: relative;
  @keyframes water {
    0%,
    100% {
      clip-path: polygon(
        0% 45%,
        15% 44%,
        32% 50%,
        54% 60%,
        70% 61%,
        84% 59%,
        100% 52%,
        100% 100%,
        0% 100%
      );
    }
    50% {
      clip-path: polygon(
        0% 60%,
        16% 65%,
        34% 66%,
        51% 62%,
        67% 50%,
        84% 45%,
        100% 46%,
        100% 100%,
        0% 100%
      );
    }
  }
`;

const TextBlack = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 3.5rem;
  color: black;
  position: absolute;
  top: 0;
  left: 0;
`;

const WaterTitle = () => {
  return (
    <TextContainer>
      <TextBlack>ALEXANDER AYLEN</TextBlack>
      <Text>ALEXANDER AYLEN</Text>
    </TextContainer>
  );
};

export default WaterTitle;
