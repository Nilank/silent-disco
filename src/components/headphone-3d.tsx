
"use client";

import { useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoundedBoxGeometry } from 'three-stdlib';

const Headphone3D = () => {
    const mountRef = useRef<HTMLDivElement>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const groupRef = useRef<THREE.Group | null>(null);
    const controlsRef = useRef<OrbitControls | null>(null);
    const ledMaterialsRef = useRef<THREE.MeshStandardMaterial[]>([]);

    const handleResize = useCallback(() => {
        if (!rendererRef.current || !cameraRef.current || !mountRef.current) return;
        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;
        rendererRef.current.setSize(width, height);
        cameraRef.current.aspect = width / height;
        cameraRef.current.updateProjectionMatrix();
    }, []);

    useEffect(() => {
        if (!mountRef.current || typeof window === 'undefined') return;
        const currentMount = mountRef.current;

        // Scene, Camera, Renderer
        sceneRef.current = new THREE.Scene();
        cameraRef.current = new THREE.PerspectiveCamera(50, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
        rendererRef.current = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        rendererRef.current.setPixelRatio(window.devicePixelRatio);
        currentMount.appendChild(rendererRef.current.domElement);
        
        // Controls
        controlsRef.current = new OrbitControls(cameraRef.current, rendererRef.current.domElement);
        controlsRef.current.enableDamping = true;
        controlsRef.current.dampingFactor = 0.05;
        controlsRef.current.enableZoom = false;
        controlsRef.current.autoRotate = true;
        controlsRef.current.autoRotateSpeed = 0.5;
        controlsRef.current.target.set(0, 0.5, 0);

        // Lighting
        sceneRef.current.add(new THREE.AmbientLight(0xffffff, 0.2));
        
        const keyLight = new THREE.DirectionalLight(0xff00ff, 0.8);
        keyLight.position.set(-3, 3, 5);
        sceneRef.current.add(keyLight);

        const fillLight = new THREE.DirectionalLight(0x00ffff, 0.6);
        fillLight.position.set(3, 2, 3);
        sceneRef.current.add(fillLight);

        const backLight = new THREE.SpotLight(0xffffff, 1.5, 20, Math.PI / 4, 1);
        backLight.position.set(0, 5, -8);
        sceneRef.current.add(backLight);

        // Materials
        const bodyMaterial = new THREE.MeshStandardMaterial({
            color: 0x111111,
            roughness: 0.3,
            metalness: 0.1,
        });

        // Group
        groupRef.current = new THREE.Group();
        groupRef.current.position.y = -0.1;
        sceneRef.current.add(groupRef.current);
        
        // Headband
        const headbandCurve = new THREE.CatmullRomCurve3([
            new THREE.Vector3(0, 1.5, 0),
            new THREE.Vector3(0.4, 1.45, 0),
            new THREE.Vector3(0.7, 1.2, 0),
            new THREE.Vector3(0.8, 0.8, 0),
        ]);
        const headbandGeom = new THREE.TubeGeometry(headbandCurve, 20, 0.1, 8, false);
        const headbandLeft = new THREE.Mesh(headbandGeom, bodyMaterial);
        
        const headbandRight = headbandLeft.clone();
        headbandRight.scale.x = -1;
        groupRef.current.add(headbandLeft, headbandRight);

        const createEarcup = (isLeft: boolean) => {
            const side = isLeft ? 1 : -1;
            const earcupGroup = new THREE.Group();
            earcupGroup.position.set(side * 0.8, 0.4, 0);
            earcupGroup.rotation.y = side * 0.2;
            groupRef.current?.add(earcupGroup);
            
            const earcupGeom = new RoundedBoxGeometry(0.3, 0.9, 0.6, 4, 0.1);
            const earcup = new THREE.Mesh(earcupGeom, bodyMaterial);
            earcupGroup.add(earcup);

            const ledCount = 3;
            for (let i = 0; i < ledCount; i++) {
                const ledGeom = new THREE.BoxGeometry(0.05, 0.7, 0.05);
                const ledMaterial = new THREE.MeshStandardMaterial({
                    color: 0xff0000,
                    emissive: 0xff0000,
                    emissiveIntensity: 3,
                });
                ledMaterialsRef.current.push(ledMaterial);

                const ledMesh = new THREE.Mesh(ledGeom, ledMaterial);
                ledMesh.position.set(side * 0.18, 0, (i - 1) * 0.15);
                earcup.add(ledMesh);
            }
        };

        createEarcup(true);
        createEarcup(false);

        cameraRef.current.position.set(0, 1, 3);

        let animationFrameId: number;
        const clock = new THREE.Clock();

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            if (!rendererRef.current || !sceneRef.current || !cameraRef.current || !controlsRef.current) return;
            
            const elapsedTime = clock.getElapsedTime();

            if (ledMaterialsRef.current.length > 0) {
                const hue = (elapsedTime * 0.05) % 1;
                const color = new THREE.Color().setHSL(hue, 1, 0.5);
                ledMaterialsRef.current.forEach((mat, i) => {
                    const offsetHue = (hue + (i * 0.02)) % 1;
                    const matColor = new THREE.Color().setHSL(offsetHue, 1, 0.5);
                    mat.color.copy(matColor);
                    mat.emissive.copy(matColor);
                });
            }
            
            controlsRef.current.update();
            rendererRef.current.render(sceneRef.current, cameraRef.current);
        };

        animate();
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if(currentMount && rendererRef.current) {
                currentMount.removeChild(rendererRef.current.domElement);
            }
            cancelAnimationFrame(animationFrameId);
        };
    }, [handleResize]);

    return <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />;
};

export default Headphone3D;
