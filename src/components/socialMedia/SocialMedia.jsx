"use client";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { Suspense, useRef, useState } from "react";

const Earth = () => {
  const earth = useGLTF("/assets/models/planet/scene.gltf", true);
  const { viewport } = useThree();
  const scale = viewport.width < 6 ? 0.8 : 1.5;

  return (
    <primitive
      object={earth.scene}
      scale={scale}
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
    />
  );
};

const SocialIcon = ({ url, initialPosition, link }) => {
  const icon = useGLTF(url, true);
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const { viewport } = useThree();
  const scale = viewport.width < 6 ? 0.1 : 0.17;

  const handlePointerOver = () => {
    document.body.style.cursor = "pointer";
    setHovered(true);
  };
  const handlePointerOut = () => {
    document.body.style.cursor = "";
    setHovered(false);
  };

  useFrame(() => {
    if (ref.current) {
      ref.current.scale.set(
        hovered ? 0.2 : scale,
        hovered ? 0.2 : scale,
        hovered ? 0.2 : scale
      );
    }
  });

  const handleClick = () => {
    window.open(link, "_blank");
  };

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh
      ref={ref}
      onClick={handleClick} // Handle click event
      scale={scale}
      position={initialPosition}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      className="social-icon cursor-pointer hover-scale-on "
    >
      <primitive object={icon.scene} />
    </mesh>
  );
};

const SocialMedia = () => {
  return (
    <>
      <div className="relative w-full h-screen">
        <Canvas
          className="!h-screen"
          shadows
          frameloop="demand"
          dpr={[1, 2]}
          gl={{ preserveDrawingBuffer: true }}
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
          }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight intensity={1} position={[5, 5, 5]} />
          <Suspense fallback={null}>
            <OrbitControls
              autoRotate
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            {/* Earth */}
            <Earth />

            {/* Social Media Icons */}
            <SocialIcon
              link="https://github.com/codevivekk"
              url="/assets/models/github.glb"
              initialPosition={[2, 0, 0]}
            />
            <SocialIcon
              link="https://x.com/codevivekk"
              url="/assets/models/x.glb"
              initialPosition={[-2, 0.3, 0]}
            />
            <SocialIcon
              link="https://www.linkedin.com/in/codevivekk/"
              url="/assets/models/linkedin.glb"
              initialPosition={[1, 0, -2]}
            />
            <Preload all />
          </Suspense>
        </Canvas>
      </div>
      <div className="text-center flex items-center justify-center text-size gap-4 py-4  border-y-4">
        <span className="">Connect with me: </span>
        <a href="mailto:codevivekk@gmail.com" target="_blank" className="">codevivekk@gmail.com</a>
      </div>
    </>
  );
};

export default SocialMedia;
