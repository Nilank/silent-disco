"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";

const AudioVisualizer = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const mousePosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const sceneRef = useRef<THREE.Scene>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const cubesRef = useRef<THREE.Mesh[]>([]);
  const groupRef = useRef<THREE.Group>();

  const handleResize = useCallback(() => {
    if (!rendererRef.current || !cameraRef.current || !mountRef.current) return;
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;
    rendererRef.current.setSize(width, height);
    cameraRef.current.aspect = width / height;
    cameraRef.current.updateProjectionMatrix();
  }, []);

  const onMouseMove = (event: MouseEvent) => {
    if (!mountRef.current) return;
    const bounds = mountRef.current.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
    const y = -((event.clientY - bounds.top) / bounds.height) * 2 + 1;
    mousePosRef.current = { x, y };
  };

  useEffect(() => {
    if (!mountRef.current || typeof window === "undefined") return;
    const currentMount = mountRef.current;

    window.addEventListener("mousemove", onMouseMove);

    sceneRef.current = new THREE.Scene();
    cameraRef.current = new THREE.PerspectiveCamera(
      75,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    cameraRef.current.position.z = 15;

    rendererRef.current = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    currentMount.appendChild(rendererRef.current.domElement);

    sceneRef.current.add(new THREE.AmbientLight(0xffffff, 0.2));
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(0, 0, 20);
    sceneRef.current.add(pointLight);

    groupRef.current = new THREE.Group();
    const count = 32;
    const radius = 6;

    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
      const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
      const material = new THREE.MeshStandardMaterial({
        color: new THREE.Color(
          `hsl(${Math.round((i / count) * 360)}, 100%, 50%)`
        ),
        emissive: new THREE.Color(
          `hsl(${Math.round((i / count) * 360)}, 100%, 25%)`
        ),
      });
      const cube = new THREE.Mesh(geometry, material);
      cube.position.set(x, y, 0);
      cubesRef.current.push(cube);
      groupRef.current.add(cube);
    }

    sceneRef.current.add(groupRef.current);

    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      if (groupRef.current) {
        groupRef.current.rotation.z -= 0.002;
        groupRef.current.position.y = Math.sin(elapsedTime * 0.5) * 0.5;
      }

      // Mouse interaction logic
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(
        new THREE.Vector2(mousePosRef.current.x, mousePosRef.current.y),
        cameraRef.current!
      );
      const intersects = raycaster.intersectObjects(cubesRef.current);

      cubesRef.current.forEach((cube, i) => {
        const baseScale = Math.max(
          0.8,
          (Math.sin(elapsedTime * 2 + i * 0.5) + 1.5) * 0.5
        );
        let targetScale = baseScale;

        const distance = cube.position.distanceTo(
          new THREE.Vector3(
            mousePosRef.current.x * 10,
            mousePosRef.current.y * 10,
            0
          )
        );

        const influence = Math.max(0, 1 - distance / 8);
        targetScale += influence * 2.5;

        cube.scale.lerp(
          new THREE.Vector3(targetScale, targetScale, targetScale),
          0.1
        );

        const hue = (elapsedTime * 10 + i * 5) % 360;
        const color = new THREE.Color(`hsl(${Math.round(hue)}, 100%, 50%)`);
        const material = cube.material as THREE.MeshStandardMaterial;

        material.emissiveIntensity = targetScale * 0.6;
        material.color.set(color);
        material.emissive.set(color);
      });

      rendererRef.current?.render(sceneRef.current!, cameraRef.current!);
    };

    animate();
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);
      if (currentMount && rendererRef.current) {
        currentMount.removeChild(rendererRef.current.domElement);
      }
    };
  }, [handleResize]);

  return (
    <div className="relative w-full h-96 rounded-lg overflow-hidden border border-border bg-black/20 group">
      <div ref={mountRef} className="w-full h-full cursor-crosshair" />
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-background via-background/50 to-transparent pointer-events-none">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-lg font-medium text-foreground/80">
            Move your mouse to feel the vibe
          </p>
        </div>
      </div>
    </div>
  );
};

export default AudioVisualizer;
