"use client";

import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useEffect, type FC } from "react";

import type { TechStackIcon } from "../constants";

type TechIconCardProps = {
  model: TechStackIcon;
};

// This component handles the 3D model loading and rendering
const Model: FC<{ modelPath: string; scale: number; rotation: [number, number, number] }> = ({ 
  modelPath, 
  scale, 
  rotation 
}) => {
  const scene = useGLTF(modelPath);
  
  return (
    <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
      <group scale={scale} rotation={rotation}>
        <primitive object={scene.scene} />
      </group>
    </Float>
  );
};

// Fallback component while loading
const ModelLoading = () => {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="gray" />
    </mesh>
  );
};

const TechIconCard: FC<TechIconCardProps> = ({ model }) => {
  // Track client-side rendering
  const [isMounted, setIsMounted] = useState(false);

  // Only run on client
  useEffect(() => {
    setIsMounted(true);
    
    // Preload the model
    useGLTF.preload(model.modelPath);
    
    return () => {
      // Cleanup if needed
    };
  }, [model.modelPath]);

  // Show nothing during SSR
  if (!isMounted) {
    return (
      <div className="w-full h-40 bg-gray-100 animate-pulse rounded-md"></div>
    );
  }

  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <spotLight position={[10, 15, 10]} angle={0.3} penumbra={1} intensity={2} />
      <Environment preset="city" />

      <Suspense fallback={<ModelLoading />}>
        <Model 
          modelPath={model.modelPath} 
          scale={model.scale} 
          rotation={model.rotation} 
        />
      </Suspense>

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default TechIconCard;
