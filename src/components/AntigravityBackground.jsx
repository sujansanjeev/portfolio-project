import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import ParticleSystem from './ParticleSystem';

const AntigravityBackground = () => {
  return (
    <div 
      className="absolute inset-0 z-[1]"
      style={{ pointerEvents: 'auto' }}
      aria-hidden="true"
    >
      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0, 40], fov: 35 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ParticleSystem />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default AntigravityBackground;
