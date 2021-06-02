import React from 'react';
import { useTheme } from '@emotion/react';
import { Canvas } from '@react-three/fiber';
import styled from '@emotion/styled';
import CanvasScene from './CanvasScene';

export default function CanvasLoader() {
  const theme: any = useTheme();

  const CanvasLoader = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    opacity: 0.5;
  `;

  return (
    <CanvasLoader>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <CanvasScene theme={theme} />
      </Canvas>
    </CanvasLoader>
  );
}
