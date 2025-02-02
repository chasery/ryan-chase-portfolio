import React from 'react';
import { Theme, useTheme } from '@emotion/react';
import { Canvas } from '@react-three/fiber';
import styled from '@emotion/styled';
import CanvasScene from './CanvasScene';
import { Vector3 } from 'three';

export default function CanvasLoader(): React.ReactElement {
  const theme: Theme = useTheme();

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
      <Canvas camera={{ position: new Vector3(0, 0, 1) }}>
        <CanvasScene />
      </Canvas>
    </CanvasLoader>
  );
}
