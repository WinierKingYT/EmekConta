"use client";

import React, { useRef, useMemo, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

/* ------------------------------------------------------------------ */
/*  Mouse tracker – normalises cursor position to [-1,1] range        */
/* ------------------------------------------------------------------ */
function useMousePosition() {
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return mouse;
}

/* ------------------------------------------------------------------ */
/*  Individual 3‑D Gasket (Torus)                                      */
/* ------------------------------------------------------------------ */
interface GasketProps {
  position: [number, number, number];
  args: [number, number, number, number]; // [radius, tube, radialSeg, tubularSeg]
  color: string;
  emissive: string;
  roughness?: number;
  metalness?: number;
  speed?: number;
  rotationOffset?: [number, number, number];
  mouseInfluence?: number;
  floatSpeed?: number;
  floatIntensity?: number;
}

function Gasket({
  position,
  args,
  color,
  emissive,
  roughness = 0.35,
  metalness = 0.85,
  speed = 1,
  rotationOffset = [0, 0, 0],
  mouseInfluence = 0.6,
  floatSpeed = 1.5,
  floatIntensity = 0.3,
}: GasketProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouse = useMousePosition();
  const targetRotation = useRef({ x: 0, y: 0 });

  useFrame((_, delta) => {
    if (!meshRef.current) return;

    // Smoothly interpolate toward mouse-driven target rotation
    targetRotation.current.x = mouse.current.y * Math.PI * mouseInfluence;
    targetRotation.current.y = mouse.current.x * Math.PI * mouseInfluence;

    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      targetRotation.current.x + rotationOffset[0],
      delta * 2.5
    );
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      targetRotation.current.y + rotationOffset[1],
      delta * 2.5
    );

    // Gentle continuous Z-axis spin
    meshRef.current.rotation.z += delta * 0.15 * speed;
  });

  return (
    <Float speed={floatSpeed} floatIntensity={floatIntensity} rotationIntensity={0}>
      <mesh ref={meshRef} position={position}>
        <torusGeometry args={args} />
        <meshStandardMaterial
          color={color}
          emissive={emissive}
          emissiveIntensity={0.15}
          roughness={roughness}
          metalness={metalness}
          side={THREE.DoubleSide}
        />
      </mesh>
    </Float>
  );
}

/* ------------------------------------------------------------------ */
/*  Spiral-wound ring pattern (inner windings of a spiral gasket)      */
/* ------------------------------------------------------------------ */
function SpiralWoundRing({
  position,
  radius = 1.3,
  color,
  mouseInfluence = 0.5,
}: {
  position: [number, number, number];
  radius?: number;
  color: string;
  mouseInfluence?: number;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const mouse = useMousePosition();

  // Create V-shaped spiral winding segments
  const segments = useMemo(() => {
    const segs: { angle: number; scale: number }[] = [];
    const count = 24;
    for (let i = 0; i < count; i++) {
      segs.push({
        angle: (i / count) * Math.PI * 2,
        scale: 0.8 + Math.random() * 0.4,
      });
    }
    return segs;
  }, []);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    const tx = mouse.current.y * Math.PI * mouseInfluence;
    const ty = mouse.current.x * Math.PI * mouseInfluence;
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, tx, delta * 2);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, ty, delta * 2);
    groupRef.current.rotation.z += delta * 0.08;
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Outer centering ring */}
      <mesh>
        <torusGeometry args={[radius, 0.06, 16, 64]} />
        <meshStandardMaterial
          color="#555555"
          metalness={0.9}
          roughness={0.25}
        />
      </mesh>
      {/* Inner centering ring */}
      <mesh>
        <torusGeometry args={[radius * 0.65, 0.05, 16, 64]} />
        <meshStandardMaterial
          color="#666666"
          metalness={0.9}
          roughness={0.3}
        />
      </mesh>
      {/* Spiral winding segments */}
      {segments.map((seg, i) => (
        <mesh
          key={i}
          position={[
            Math.cos(seg.angle) * radius * 0.82,
            Math.sin(seg.angle) * radius * 0.82,
            0,
          ]}
          rotation={[0, 0, seg.angle + Math.PI / 2]}
          scale={[seg.scale * 0.08, seg.scale * 0.15, 0.03]}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? color : "#2a2a2a"}
            metalness={i % 2 === 0 ? 0.3 : 0.9}
            roughness={i % 2 === 0 ? 0.6 : 0.2}
          />
        </mesh>
      ))}
    </group>
  );
}

/* ------------------------------------------------------------------ */
/*  Scene Lights                                                       */
/* ------------------------------------------------------------------ */
function Lights() {
  return (
    <>
      <ambientLight intensity={0.25} color="#8899bb" />
      <directionalLight
        position={[5, 5, 5]}
        intensity={0.8}
        color="#ffffff"
      />
      <directionalLight
        position={[-3, -2, 4]}
        intensity={0.35}
        color="#b7410e"
      />
      <pointLight position={[0, 3, 2]} intensity={0.4} color="#c04657" distance={12} />
      <pointLight position={[-4, -1, 3]} intensity={0.25} color="#7084a5" distance={10} />
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Complete 3‑D Scene                                                 */
/* ------------------------------------------------------------------ */
function Scene() {
  return (
    <>
      <Lights />

      {/* ── Main large spiral-wound gasket (centre-right) ── */}
      <SpiralWoundRing
        position={[2.8, 0, -1]}
        radius={1.5}
        color="#b7410e"
        mouseInfluence={0.55}
      />

      {/* ── Medium rubber ring gasket (left) ── */}
      <Gasket
        position={[-3.2, 0.3, -0.5]}
        args={[0.9, 0.18, 24, 48]}
        color="#333333"
        emissive="#1a1a1a"
        roughness={0.7}
        metalness={0.15}
        speed={0.8}
        rotationOffset={[0.5, 0.3, 0]}
        mouseInfluence={0.7}
        floatSpeed={1.2}
        floatIntensity={0.25}
      />

      {/* ── Small metallic flange gasket (top-left) ── */}
      <Gasket
        position={[-1.2, 1.0, -1.5]}
        args={[0.45, 0.08, 20, 40]}
        color="#96350b"
        emissive="#b7410e"
        roughness={0.3}
        metalness={0.9}
        speed={1.2}
        rotationOffset={[0.8, -0.4, 0]}
        mouseInfluence={0.5}
        floatSpeed={2}
        floatIntensity={0.4}
      />

      {/* ── Tiny accent ring (bottom-right) ── */}
      <Gasket
        position={[1.0, -0.8, -1]}
        args={[0.35, 0.06, 16, 32]}
        color="#c04657"
        emissive="#c04657"
        roughness={0.4}
        metalness={0.8}
        speed={1.5}
        rotationOffset={[-0.3, 0.6, 0]}
        mouseInfluence={0.4}
        floatSpeed={2.5}
        floatIntensity={0.35}
      />

      {/* ── Extra graphite gasket (far left-bottom) ── */}
      <Gasket
        position={[-4.5, -0.6, -2]}
        args={[0.6, 0.12, 20, 44]}
        color="#444444"
        emissive="#222222"
        roughness={0.5}
        metalness={0.6}
        speed={0.6}
        rotationOffset={[0.2, 0.8, 0]}
        mouseInfluence={0.35}
        floatSpeed={1}
        floatIntensity={0.2}
      />

      {/* ── Extra small PTFE ring (top-right) ── */}
      <Gasket
        position={[4.5, 0.8, -2.5]}
        args={[0.3, 0.05, 16, 32]}
        color="#e8e8e8"
        emissive="#cccccc"
        roughness={0.2}
        metalness={0.1}
        speed={1.8}
        rotationOffset={[-0.6, -0.2, 0]}
        mouseInfluence={0.45}
        floatSpeed={2.2}
        floatIntensity={0.3}
      />
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Exported Canvas wrapper                                            */
/* ------------------------------------------------------------------ */
export function Header3DScene() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
        // Re-enable pointer events on canvas for mouse tracking
        onPointerMove={() => {}}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
