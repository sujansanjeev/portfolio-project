import { useRef, useMemo, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// ─── Configuration ─────────────────────────────────────────────────────
const GRID_COLS = 65;
const GRID_ROWS = 65;
const SPREAD = 150;

const CURSOR_VISIBLE_RADIUS = 8;
const CURSOR_FADE_EDGE = 32;
const CIRCUMFERENCE_ROUGHNESS = 5;
const CIRCUMFERENCE_FREQUENCY = 2;
const CIRCUMFERENCE_SPEED = 2;

const MOUSE_SHRINK_RADIUS = 16;
const MOUSE_SHOVE_STRENGTH = 0.03;
const MOUSE_MOMENTUM_CATCH = 0.2;
const MOUSE_TRACKING_SMOOTHING = 0.05;
const ELASTIC_RESTORE_SPEED = 0.03;
const FLUID_VISCOSITY_FRICTION = 0.42;

const TIDE_STRENGTH = 0.02;
const TIDE_SPEED = 3;
const TIDE_FREQUENCY = 0.15;
const SWAY_STRENGTH = 0.6;
const SWAY_FREQUENCY = 0.3;
const DRIFT_SPEED = 0.5;
const DRIFT_RANGE = 1.2;

const PARTICLE_SIZE = 0.35;

// Noise helpers
function noise(x, y, t) {
  const n = Math.sin(x * 12.9898 + y * 78.233 + t * 43758.5453) * 43758.5453;
  return n - Math.floor(n);
}

function smoothNoise(x, y, t) {
  const i = Math.floor(x);
  const j = Math.floor(y);
  const u = x - i;
  const v = y - j;
  const a = noise(i, j, t);
  const b = noise(i + 1, j, t);
  const c = noise(i, j + 1, t);
  const d = noise(i + 1, j + 1, t);
  const uu = u * u * (3 - 2 * u);
  const vv = v * v * (3 - 2 * v);
  return a + (b - a) * uu + (c - a) * vv + (a - b - c + d) * uu * vv;
}

// Custom shader material for soft glowing particles
const vertexShader = `
  attribute float visibility;
  attribute vec3 velocity;
  varying float vVisibility;
  varying vec3 vVelocity;
  uniform float uPixelRatio;
  uniform float uSize;
  
  void main() {
    vVisibility = visibility;
    vVelocity = velocity;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    gl_PointSize = uSize * uPixelRatio * visibility;
    gl_PointSize *= (100.0 / -mvPosition.z);
  }
`;

const fragmentShader = `
  varying float vVisibility;
  varying vec3 vVelocity;
  uniform vec3 uColor;
  uniform vec3 uHiddenColor;
  uniform float uOpacity;
  
  void main() {
    float dist = length(gl_PointCoord - vec2(0.5));
    if (dist > 0.5) discard;
    
    // Soft circle
    float alpha = 1.0 - smoothstep(0.3, 0.5, dist);
    alpha *= vVisibility * uOpacity;
    
    // Color based on visibility
    vec3 color = mix(uHiddenColor, uColor, vVisibility);
    
    // Slight velocity-based color shift
    float speed = length(vVelocity);
    color = mix(color, vec3(0.0, 0.4, 1.0), speed * 0.5);
    
    gl_FragColor = vec4(color, alpha);
  }
`;

export default function ParticleSystem() {
  const pointsRef = useRef();
  const { viewport, pointer, size } = useThree();
  const count = GRID_COLS * GRID_ROWS;

  // Build grid with random offsets
  const { origins, drifts } = useMemo(() => {
    const o = new Float32Array(count * 3);
    const d = new Float32Array(count * 2);
    let i = 0;
    for (let row = 0; row < GRID_ROWS; row++) {
      for (let col = 0; col < GRID_COLS; col++) {
        const jitterX = (Math.random() - 0.5) * 1.5;
        const jitterY = (Math.random() - 0.5) * 1.5;
        const x = (col / (GRID_COLS - 1) - 0.5) * SPREAD + jitterX;
        const y = -(row / (GRID_ROWS - 1) - 0.5) * SPREAD + jitterY;
        o[i * 3 + 0] = x;
        o[i * 3 + 1] = y;
        o[i * 3 + 2] = (Math.random() - 0.5) * 2;
        d[i * 2 + 0] = Math.random() * Math.PI * 2;
        d[i * 2 + 1] = Math.random() * 0.5 + 0.5;
        i++;
      }
    }
    return { origins: o, drifts: d };
  }, [count]);

  const physics = useMemo(() => ({
    pos: new Float32Array(count * 3),
    vel: new Float32Array(count * 3),
    visibility: new Float32Array(count),
  }), [count]);

  const mouse = useRef({
    x: 0, y: 0, vx: 0, vy: 0,
    prevX: 0, prevY: 0,
    smoothX: 0, smoothY: 0,
  });

  // Initialize positions
  useEffect(() => {
    for (let i = 0; i < count; i++) {
      physics.pos[i * 3 + 0] = origins[i * 3 + 0];
      physics.pos[i * 3 + 1] = origins[i * 3 + 1];
      physics.pos[i * 3 + 2] = origins[i * 3 + 2];
    }
  }, [origins, physics, count]);

  // Geometry attributes
  const { positions, visibilities, velocities } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vis = new Float32Array(count);
    const vel = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 0] = origins[i * 3 + 0];
      pos[i * 3 + 1] = origins[i * 3 + 1];
      pos[i * 3 + 2] = origins[i * 3 + 2];
      vis[i] = 0;
      vel[i * 3 + 0] = 0;
      vel[i * 3 + 1] = 0;
      vel[i * 3 + 2] = 0;
    }
    return { positions: pos, visibilities: vis, velocities: vel };
  }, [origins, count]);

  const uniforms = useMemo(() => ({
    uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
    uSize: { value: PARTICLE_SIZE },
    uColor: { value: new THREE.Color('#e0e0e0') },
    uHiddenColor: { value: new THREE.Color('#0a0a0a') },
    uOpacity: { value: 1.0 },
  }), []);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    const m = mouse.current;

    const worldX = pointer.x * (viewport.width / 2);
    const worldY = pointer.y * (viewport.height / 2);

    m.vx = worldX - m.prevX;
    m.vy = worldY - m.prevY;
    m.prevX = worldX;
    m.prevY = worldY;
    m.x = worldX;
    m.y = worldY;

    m.smoothX += (m.x - m.smoothX) * MOUSE_TRACKING_SMOOTHING;
    m.smoothY += (m.y - m.smoothY) * MOUSE_TRACKING_SMOOTHING;

    const mouseSpeed = Math.sqrt(m.vx * m.vx + m.vy * m.vy);
    const geometry = pointsRef.current.geometry;
    const posAttr = geometry.attributes.position;
    const visAttr = geometry.attributes.visibility;
    const velAttr = geometry.attributes.velocity;

    let i = 0;
    for (let row = 0; row < GRID_ROWS; row++) {
      for (let col = 0; col < GRID_COLS; col++) {
        const ox = origins[i * 3 + 0];
        const oy = origins[i * 3 + 1];
        const px = physics.pos[i * 3 + 0];
        const py = physics.pos[i * 3 + 1];

        const dx = px - m.smoothX;
        const dy = py - m.smoothY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Flashlight visibility with rough edge
        const angle = Math.atan2(dy, dx);
        const roughness = smoothNoise(
          Math.cos(angle) * CIRCUMFERENCE_FREQUENCY,
          Math.sin(angle) * CIRCUMFERENCE_FREQUENCY,
          time * CIRCUMFERENCE_SPEED
        ) * CIRCUMFERENCE_ROUGHNESS;
        const effectiveRadius = CURSOR_VISIBLE_RADIUS + roughness;
        let visibility = 1;
        if (dist > effectiveRadius) {
          visibility = 1 - (dist - effectiveRadius) / CURSOR_FADE_EDGE;
        }
        visibility = Math.max(0, Math.min(1, visibility));
        visibility = visibility * visibility; // sharper falloff

        // Mouse shove
        let fx = 0, fy = 0;
        if (dist < MOUSE_SHRINK_RADIUS && dist > 0.01) {
          const force = (1 - dist / MOUSE_SHRINK_RADIUS) * MOUSE_SHOVE_STRENGTH;
          fx += (dx / dist) * force;
          fy += (dy / dist) * force;
        }

        // Momentum catch
        if (dist < MOUSE_SHRINK_RADIUS * 1.5) {
          const catchFactor = (1 - dist / (MOUSE_SHRINK_RADIUS * 1.5)) * MOUSE_MOMENTUM_CATCH;
          fx -= m.vx * catchFactor;
          fy -= m.vy * catchFactor;
        }

        // Elastic restore
        fx += (ox - px) * ELASTIC_RESTORE_SPEED;
        fy += (oy - py) * ELASTIC_RESTORE_SPEED;

        // Tide
        const tidePhase = Math.sin(dist * TIDE_FREQUENCY - time * TIDE_SPEED);
        if (dist > 0.01) {
          fx -= (dx / dist) * tidePhase * TIDE_STRENGTH;
          fy -= (dy / dist) * tidePhase * TIDE_STRENGTH;
        }

        // Sway
        const swayX = Math.sin(time * SWAY_FREQUENCY + oy * 0.05) * SWAY_STRENGTH * 0.01;
        const swayY = Math.cos(time * SWAY_FREQUENCY + ox * 0.05) * SWAY_STRENGTH * 0.01;
        fx += swayX;
        fy += swayY;

        // Drift
        const driftAngle = drifts[i * 2 + 0];
        const driftSpeed = drifts[i * 2 + 1];
        fx += Math.cos(driftAngle + time * DRIFT_SPEED) * DRIFT_RANGE * 0.005 * driftSpeed;
        fy += Math.sin(driftAngle + time * DRIFT_SPEED) * DRIFT_RANGE * 0.005 * driftSpeed;

        // Apply
        physics.vel[i * 3 + 0] += fx;
        physics.vel[i * 3 + 1] += fy;
        physics.vel[i * 3 + 0] *= FLUID_VISCOSITY_FRICTION;
        physics.vel[i * 3 + 1] *= FLUID_VISCOSITY_FRICTION;

        physics.pos[i * 3 + 0] += physics.vel[i * 3 + 0];
        physics.pos[i * 3 + 1] += physics.vel[i * 3 + 1];

        // Update geometry
        posAttr.setXYZ(i, physics.pos[i * 3 + 0], physics.pos[i * 3 + 1], physics.pos[i * 3 + 2]);
        visAttr.setX(i, visibility);
        velAttr.setXYZ(i, physics.vel[i * 3 + 0], physics.vel[i * 3 + 1], 0);

        i++;
      }
    }

    posAttr.needsUpdate = true;
    visAttr.needsUpdate = true;
    velAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-visibility"
          count={count}
          array={visibilities}
          itemSize={1}
        />
        <bufferAttribute
          attach="attributes-velocity"
          count={count}
          array={velocities}
          itemSize={3}
        />
      </bufferGeometry>
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
