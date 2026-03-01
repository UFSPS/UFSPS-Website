import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Model = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width  = mount.clientWidth;
    const height = mount.clientHeight;

    // ── Renderer ──────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0); // transparent bg
    mount.appendChild(renderer.domElement);

    // ── Scene / Camera ────────────────────────────────────────
    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 6);

    // ── Geometry + deformation ────────────────────────────────
    const geo = new THREE.IcosahedronGeometry(1.8, 3);
    const pos = geo.attributes.position as THREE.BufferAttribute;

    const pseudoNoise = (x: number, y: number, z: number) => (
      Math.sin(x * 1.7 + 0.3) * Math.cos(y * 2.1 - 0.5) +
      Math.sin(y * 1.3 + 1.1) * Math.cos(z * 1.9 + 0.7) +
      Math.sin(z * 2.3 - 0.9) * Math.cos(x * 1.5 + 0.2)
    ) / 3;

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i)
      const y = pos.getY(i)
      const z = pos.getZ(i);
      const scale = 1 + pseudoNoise(x, y, z) * 0.22;
      pos.setXYZ(i, x * scale, y * scale, z * scale);
    }
    pos.needsUpdate = true;
    geo.computeVertexNormals();

    // ── Wireframe ─────────────────────────────────────────────
    const wire = new THREE.LineSegments(
      new THREE.WireframeGeometry(geo),
      new THREE.LineBasicMaterial({ color: 0x999999, transparent: true, opacity: 0.6 })
    );
    wire.position.x = 1.0;
    scene.add(wire);

    // ── Vertex dots ───────────────────────────────────────────
    const uniqueVerts = [];
    const seen = new Set();
    for (let i = 0; i < pos.count; i++) {
      const key = `${pos.getX(i).toFixed(4)},${pos.getY(i).toFixed(4)},${pos.getZ(i).toFixed(4)}`;
      if (!seen.has(key)) {
        seen.add(key);
        uniqueVerts.push(pos.getX(i), pos.getY(i), pos.getZ(i));
      }
    }
    const pointsGeo = new THREE.BufferGeometry();
    pointsGeo.setAttribute('position', new THREE.Float32BufferAttribute(uniqueVerts, 3));
    const points = new THREE.Points(
      pointsGeo,
      new THREE.PointsMaterial({ color: 0x555555, size: 0.045, sizeAttenuation: true })
    );
    points.position.x = 1.0;
    scene.add(points);

    // ── Animation loop ────────────────────────────────────────
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      wire.rotation.y   += 0.0018;
      wire.rotation.x   += 0.0006;
      points.rotation.y  = wire.rotation.y;
      points.rotation.x  = wire.rotation.x;
      renderer.render(scene, camera);
    };
    animate();

    // ── Resize handler ────────────────────────────────────────
    const handleResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // ── Cleanup ───────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
      geo.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
    />
  );
};

export default Model;