import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  Environment,
  useGLTF,
  Html,
  useProgress,
  ContactShadows
} from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

// Preload the CAT excavator model
useGLTF.preload('/src/assets/models/caterpillar.glb');

// Loading Component
const Loader = () => {
  const { progress } = useProgress();
  
  return (
    <Html center>
      <motion.div 
        className="flex flex-col items-center justify-center text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="w-16 h-16 border-2 border-yellow-500/40 border-t-yellow-500 rounded-full animate-spin mb-4"></div>
        <div className="text-center">
          <div className="text-xl font-light mb-2">Loading CAT 323D</div>
          <div className="text-sm text-yellow-400">{Math.round(progress)}%</div>
        </div>
      </motion.div>
    </Html>
  );
};

// Professional CAT 323D Model with Enterprise Materials
const ExcavatorModel = () => {
  const groupRef = useRef<THREE.Group>(null);
  const modelRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/src/assets/models/caterpillar.glb');

  // Professional material definitions
  const materials = {
    // Primary Body/Cabin - Gunmetal Gray
    primaryBody: new THREE.MeshStandardMaterial({
      color: '#1f1f1f',
      metalness: 0.8,
      roughness: 0.3,
      envMapIntensity: 1.5,
      name: 'PrimaryBody'
    }),
    
    // Boom/Arm - Industrial Orange-Yellow
    workingEquipment: new THREE.MeshStandardMaterial({
      color: '#e29c2e',
      metalness: 0.4,
      roughness: 0.4,
      envMapIntensity: 1.2,
      name: 'WorkingEquipment'
    }),
    
    // Tracks/Undercarriage - Matte Black
    undercarriage: new THREE.MeshStandardMaterial({
      color: '#333333',
      metalness: 0.2,
      roughness: 0.9,
      envMapIntensity: 0.3,
      name: 'Undercarriage'
    }),
    
    // Hydraulic Tubes - Steel Gray
    hydraulics: new THREE.MeshStandardMaterial({
      color: '#999999',
      metalness: 0.9,
      roughness: 0.1,
      envMapIntensity: 2.0,
      name: 'Hydraulics'
    }),
    
    // Brand Strip/Accents - Silver Metallic
    accents: new THREE.MeshStandardMaterial({
      color: '#f4f4f4',
      metalness: 0.95,
      roughness: 0.05,
      envMapIntensity: 2.5,
      name: 'Accents'
    })
  };

  const clonedScene = React.useMemo(() => {
    const clone = scene.clone();
    
    // Calculate and apply proper scaling
    const box = new THREE.Box3().setFromObject(clone);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    
    const maxDimension = Math.max(size.x, size.y, size.z);
    const targetSize = 8;
    const scaleFactor = targetSize / maxDimension;
    
    clone.scale.setScalar(scaleFactor);
    clone.position.sub(center.multiplyScalar(scaleFactor));
    clone.position.y = -1;
    
    return clone;
  }, [scene]);

  // Apply professional materials based on component identification
  useEffect(() => {
    if (clonedScene) {
      clonedScene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          const meshName = child.name.toLowerCase();
          const parentName = child.parent?.name.toLowerCase() || '';
          
          // Primary Body/Cabin Components
          if (meshName.includes('body') || meshName.includes('cabin') || 
              meshName.includes('frame') || meshName.includes('main') || 
              meshName.includes('house') || meshName.includes('upper') ||
              meshName.includes('chassis') || parentName.includes('cabin')) {
            child.material = materials.primaryBody.clone();
          }
          
          // Working Equipment (Boom/Arm/Stick/Bucket)
          else if (meshName.includes('boom') || meshName.includes('arm') || 
                   meshName.includes('stick') || meshName.includes('bucket') ||
                   meshName.includes('dipper') || meshName.includes('attachment') ||
                   parentName.includes('boom') || parentName.includes('arm')) {
            child.material = materials.workingEquipment.clone();
          }
          
          // Undercarriage/Tracks
          else if (meshName.includes('track') || meshName.includes('crawler') || 
                   meshName.includes('undercarriage') || meshName.includes('sprocket') ||
                   meshName.includes('idler') || meshName.includes('roller') ||
                   meshName.includes('chain') || parentName.includes('track')) {
            child.material = materials.undercarriage.clone();
          }
          
          // Hydraulic Components
          else if (meshName.includes('hydraulic') || meshName.includes('cylinder') || 
                   meshName.includes('piston') || meshName.includes('hose') ||
                   meshName.includes('tube') || meshName.includes('ram') ||
                   parentName.includes('hydraulic')) {
            child.material = materials.hydraulics.clone();
          }
          
          // Accent/Branding Components
          else if (meshName.includes('logo') || meshName.includes('brand') || 
                   meshName.includes('stripe') || meshName.includes('accent') ||
                   meshName.includes('trim') || meshName.includes('badge') ||
                   meshName.includes('decal')) {
            child.material = materials.accents.clone();
          }
          
          // Fallback material assignment based on original properties
          else {
            const originalMaterial = child.material as THREE.MeshStandardMaterial;
            if (originalMaterial && originalMaterial.color) {
              const brightness = (originalMaterial.color.r + originalMaterial.color.g + originalMaterial.color.b) / 3;
              
              if (brightness < 0.2) {
                child.material = materials.primaryBody.clone();
              } else if (brightness > 0.8) {
                child.material = materials.accents.clone();
              } else if (brightness > 0.5) {
                child.material = materials.hydraulics.clone();
              } else {
                child.material = materials.workingEquipment.clone();
              }
            } else {
              // Default to primary body material
              child.material = materials.primaryBody.clone();
            }
          }
          
          // Enable shadows for all meshes
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
    }
  }, [clonedScene, materials]);

  // Smooth rotation to showcase material shine
  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.15; // Slower rotation to appreciate materials
    }
    
    if (groupRef.current) {
      groupRef.current.position.set(1, 0, 0);
    }
  });

  return (
    <group ref={groupRef}>
      <group ref={modelRef}>
        <primitive object={clonedScene} />
      </group>
    </group>
  );
};

// Professional Lighting Setup for Material Showcase
const Scene = () => {
  return (
    <>
      {/* Ambient lighting for overall illumination */}
      <ambientLight intensity={0.4} />
      
      {/* Key light - main directional light */}
      <directionalLight
        position={[20, 15, 10]}
        intensity={2.5}
        color="#ffffff"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
      />
      
      {/* Fill light - softer secondary lighting */}
      <directionalLight
        position={[-10, 10, -5]}
        intensity={1.2}
        color="#fff8e1"
      />
      
      {/* Rim light for edge definition */}
      <directionalLight
        position={[0, 5, -15]}
        intensity={1.0}
        color="#e3f2fd"
      />
      
      {/* Accent lighting for metallic highlights */}
      <pointLight 
        position={[8, 12, 8]} 
        intensity={1.5} 
        color="#ffffff"
        distance={30}
        decay={2}
      />

      {/* HDRI Environment for realistic metal reflections */}
      <Environment 
        preset="warehouse" 
        background={false}
        environmentIntensity={1.0}
      />

      {/* Ground contact shadows */}
      <ContactShadows
        position={[0, -2, 0]}
        opacity={0.4}
        scale={15}
        blur={2}
        far={4}
        color="#000000"
      />

      {/* 3D Model */}
      <Suspense fallback={<Loader />}>
        <ExcavatorModel />
      </Suspense>
    </>
  );
};

// Main Hero3D Component
const Hero3D: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ 
          fov: 50,
          position: [8, 5, 8],
          near: 0.1,
          far: 1000
        }}
        dpr={[1, 2]}
        shadows // Enable shadow rendering
        style={{ 
          background: 'transparent'
        }}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default Hero3D;
