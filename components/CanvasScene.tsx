import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import './DotMaterial';

export default function Home({ data }) {
  const ROW = 100;
  const COL = 100;
  const NUM = ROW * COL;
  const black = new THREE.Color('#101010');

  function Particles({ pointCount }) {
    const [coords, sizes, color] = useMemo(() => {
      const initialCoords = [];
      const initialSizes = [];
      const initialColor = [];
      let i = 0;
      for (let y = 0; y < ROW; y += 1) {
        for (let x = 0; x < COL; x += 1) {
          initialCoords.push(x);
          initialCoords.push(y);
          initialCoords.push(i);
          initialSizes.push(Math.random() < 0.03 ? 15 : 6);
          i++;
        }
      }
      initialColor.push(black);

      const coords = new Float32Array(initialCoords);
      const sizes = new Float32Array(initialSizes);
      const color = new Float32Array(initialColor);
      return [coords, sizes, color];
    }, [pointCount]);

    const geom = useRef(null);
    useFrame((state) => {
      geom.current.material.uniforms.time.value = state.clock.getElapsedTime();
      geom.current.geometry.verticesNeedUpdate = true;
    });

    return (
      <points
        ref={geom}
        position={[0, 10, 0]}
        rotation={[-Math.PI / 4, 0, Math.PI / 6]}
      >
        <bufferGeometry attach='geometry'>
          <bufferAttribute
            attachObject={['attributes', 'position']}
            count={coords.length / 3}
            array={coords}
            itemSize={3}
          />
          <bufferAttribute
            attachObject={['attributes', 'size']}
            count={sizes.length}
            array={sizes}
            itemSize={1}
          />
          <bufferAttribute
            attachObject={['attributes', 'color']}
            count={color.length}
            array={color}
            itemSize={1}
          />
        </bufferGeometry>
        <dotMaterial />
      </points>
    );
  }

  return (
    <>
      <color attach='background' args={['#EAEBF0']} />
      <Particles pointCount={NUM} />
      <OrbitControls />
    </>
  );
}
