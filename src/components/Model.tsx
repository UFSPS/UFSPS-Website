import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/*
 * Signal globe — a 3D interpretation of the IEEE SPS logo mark:
 * criss-crossing great-circle arcs (solid = continuous, dashed = sampled)
 * in the logo's green ramp, a few trajectories escaping the sphere, and
 * small square "sample" markers riding the curves.
 *
 * Every motion is a pure, periodic function of a virtual clock — no
 * accumulated per-frame state. The virtual clock advances by real elapsed
 * time, clamped per frame (MAX_DELTA), so the scene is identical on any
 * refresh rate, and a main-thread stall or a hidden tab pauses the scene
 * briefly instead of snapping it forward. It runs forever from its
 * initial conditions and never drifts away from the hand-tuned
 * composition: the spinning sphere is rotationally self-similar, so its
 * continuous y-spin (period SPIN_PERIOD) plus a bounded x wobble keep the
 * layout stable; the asymmetric escape trajectories stay compositionally
 * fixed, like the swooshes in the printed logo.
 */

const R = 1.8;

// Logo-derived palette (greens + a thin ink arc), tuned for the lab-white bg.
const GREEN_DEEP = 0x0e3b23;
const GREEN_ACCENT = 0x167a45;
const GREEN_MID = 0x1f8f54;
const GREEN_KELLY = 0x27a05c;
const GREEN_BRIGHT = 0x2fbf71;
const INK = 0x30403a;

// Periods in seconds. Each component is periodic on its own; the rotation
// periods share no small common multiple (lcm ≈ 51 min), so the pose
// sequence feels alive without ever leaving its bounded envelope.
const SPIN_PERIOD = 65;    // full y revolution of the sphere
const WOBBLE_PERIOD = 47;  // one x-tilt oscillation
const WOBBLE_AMP = 0.12;   // radians; bounded, so the composition holds

// Longest single frame the virtual clock will absorb, in seconds. Real
// deltas up to this pass through untouched (any refresh rate is fine);
// longer stalls — GC, tab switches, jank — pause the scene for the excess
// instead of snapping it forward when rendering resumes.
const MAX_DELTA = 0.05;

// Fraction of an open arc over which an emitted sample scales in from
// zero (and back out at the far end). Generous, so births and deaths
// read as gradual, never as a pop.
const EMIT_RAMP = 0.18;

const TWO_PI = Math.PI * 2;

interface RingSpec {
  radius: number;
  euler: [number, number, number];
  color: number;
  opacity: number;
  dashed?: boolean;
}

// Hand-tuned composition echoing the logo's criss-cross of orbits.
const LINE_RINGS: RingSpec[] = [
  { radius: R, euler: [1.1, 0.8, -0.3], color: GREEN_MID, opacity: 0.85 },
  { radius: R, euler: [0.25, 0.15, 1.2], color: GREEN_KELLY, opacity: 0.8 },
  { radius: R, euler: [0.9, -1.1, 0.35], color: INK, opacity: 0.45 },
  { radius: R, euler: [0.7, 0.5, -1.3], color: GREEN_DEEP, opacity: 0.8, dashed: true },
  { radius: R * 1.16, euler: [1.5, -0.25, 0.9], color: GREEN_ACCENT, opacity: 0.7, dashed: true },
];

// Heavy arcs rendered as thin tori so they read with real stroke weight.
const TORUS_RINGS: RingSpec[] = [
  { radius: R, euler: [1.35, 0.2, 0.5], color: GREEN_DEEP, opacity: 1 },
  { radius: R, euler: [0.5, -0.4, -0.9], color: GREEN_ACCENT, opacity: 1 },
];

// Trajectories that leave the sphere, like the logo's escaping swooshes.
// These are asymmetric, so they do NOT spin with the sphere — they hold
// the composition while the globe rotates beneath them.
const ESCAPE_ARCS: { points: [number, number, number][]; color: number; opacity: number; dashed?: boolean }[] = [
  {
    // bright arc flying off to the upper right
    points: [[-1.5, -0.9, 0.4], [-0.2, -1.55, 0.9], [1.3, -0.9, 1.1], [1.9, 0.4, 0.6], [3.0, 1.4, 0.2], [4.2, 2.3, -0.4]],
    color: GREEN_BRIGHT,
    opacity: 0.9,
  },
  {
    // thin ink trajectory swooping out to the left
    points: [[1.7, 0.6, -0.5], [0.6, 1.5, -1.0], [-1.2, 1.2, -0.6], [-2.6, 0.4, 0.3], [-3.8, -0.3, 0.8]],
    color: INK,
    opacity: 0.4,
  },
  {
    // dashed (sampled) swoosh across the lower hemisphere
    points: [[-1.2, -1.2, -0.5], [0.5, -1.6, -0.8], [2.0, -1.2, -0.2], [3.2, -0.5, 0.5]],
    color: GREEN_DEEP,
    opacity: 0.6,
    dashed: true,
  },
];

// Curve indices: LINE_RINGS occupy 0-4 (closed, spin with the sphere),
// ESCAPE_ARCS occupy 5-7 (open, compositionally fixed).
const RING_CURVE_COUNT = LINE_RINGS.length;

// Square data samples: (curve index, t along curve, size, color).
const STATIC_MARKERS: [number, number, number, number][] = [
  [0, 0.08, 0.09, GREEN_DEEP], [0, 0.34, 0.06, GREEN_ACCENT], [0, 0.71, 0.075, GREEN_DEEP],
  [1, 0.18, 0.055, GREEN_DEEP], [1, 0.52, 0.085, GREEN_ACCENT], [1, 0.86, 0.06, GREEN_BRIGHT],
  [2, 0.27, 0.065, GREEN_DEEP], [2, 0.63, 0.05, GREEN_ACCENT],
  [3, 0.12, 0.07, GREEN_DEEP], [3, 0.58, 0.09, GREEN_ACCENT], [3, 0.9, 0.055, GREEN_DEEP],
  [4, 0.4, 0.065, GREEN_ACCENT],
];

// Markers that travel their curve: (curve index, phase offset, period s, size, color).
// Open-curve travelers scale in from zero at the start of the arc and back
// out at the end, so the periodic wrap is seamless — a sample is emitted,
// flies its trajectory, and dissolves.
const TRAVELERS: [number, number, number, number, number][] = [
  [5, 0.15, 26, 0.08, GREEN_BRIGHT],
  [5, 0.65, 26, 0.06, GREEN_ACCENT],
  [7, 0.35, 30, 0.07, GREEN_DEEP],
  [1, 0.0, 45, 0.065, GREEN_KELLY],
];

const smoothstep = (edge0: number, edge1: number, x: number) => {
  const s = Math.min(Math.max((x - edge0) / (edge1 - edge0), 0), 1);
  return s * s * (3 - 2 * s);
};

const ringPoints = (radius: number, euler: [number, number, number], segments = 128) => {
  const rot = new THREE.Euler(...euler);
  const pts: THREE.Vector3[] = [];
  for (let i = 0; i <= segments; i++) {
    const a = (i / segments) * TWO_PI;
    pts.push(new THREE.Vector3(Math.cos(a) * radius, Math.sin(a) * radius, 0).applyEuler(rot));
  }
  return pts;
};

const Model = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width  = mount.clientWidth;
    const height = mount.clientHeight;

    // ── Renderer ──────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0); // transparent bg
    mount.appendChild(renderer.domElement);

    // ── Scene / Camera ────────────────────────────────────────
    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 6);

    const globe = new THREE.Group();
    globe.position.x = 1.3;
    scene.add(globe);

    // The sphere (rings + their markers) spins; the escape arcs hold still.
    const spinner = new THREE.Group();
    const fixedLayer = new THREE.Group();
    globe.add(spinner, fixedLayer);

    const geometries: THREE.BufferGeometry[] = [];
    const materials: THREE.Material[] = [];
    // Curves in layer-local space, used to place and animate the markers.
    const sampleCurves: THREE.Curve<THREE.Vector3>[] = [];

    // ── Orbit rings (solid + dashed lines) ────────────────────
    for (const ring of LINE_RINGS) {
      const pts = ringPoints(ring.radius, ring.euler);
      sampleCurves.push(new THREE.CatmullRomCurve3(pts.slice(0, -1), true));
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      const mat = ring.dashed
        ? new THREE.LineDashedMaterial({ color: ring.color, transparent: true, opacity: ring.opacity, dashSize: 0.14, gapSize: 0.09 })
        : new THREE.LineBasicMaterial({ color: ring.color, transparent: true, opacity: ring.opacity });
      const line = new THREE.Line(geo, mat);
      if (ring.dashed) line.computeLineDistances();
      spinner.add(line);
      geometries.push(geo);
      materials.push(mat);
    }

    // ── Heavy rings (thin tori for stroke weight) ─────────────
    for (const ring of TORUS_RINGS) {
      const geo = new THREE.TorusGeometry(ring.radius, 0.016, 6, 128);
      const mat = new THREE.MeshBasicMaterial({ color: ring.color });
      const torus = new THREE.Mesh(geo, mat);
      torus.rotation.set(...ring.euler);
      spinner.add(torus);
      geometries.push(geo);
      materials.push(mat);
    }

    // ── Escaping trajectories (fixed layer) ───────────────────
    for (const arc of ESCAPE_ARCS) {
      const curve = new THREE.CatmullRomCurve3(arc.points.map((p) => new THREE.Vector3(...p)));
      sampleCurves.push(curve);
      const geo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(96));
      const mat = arc.dashed
        ? new THREE.LineDashedMaterial({ color: arc.color, transparent: true, opacity: arc.opacity, dashSize: 0.14, gapSize: 0.09 })
        : new THREE.LineBasicMaterial({ color: arc.color, transparent: true, opacity: arc.opacity });
      const line = new THREE.Line(geo, mat);
      if (arc.dashed) line.computeLineDistances();
      fixedLayer.add(line);
      geometries.push(geo);
      materials.push(mat);
    }

    // ── Square sample markers ─────────────────────────────────
    const markerGeo = new THREE.BoxGeometry(1, 1, 1);
    geometries.push(markerGeo);
    const markerMats = new Map<number, THREE.MeshBasicMaterial>();
    const markerMat = (color: number) => {
      let mat = markerMats.get(color);
      if (!mat) {
        mat = new THREE.MeshBasicMaterial({ color });
        markerMats.set(color, mat);
        materials.push(mat);
      }
      return mat;
    };

    const placeMarker = (curveIdx: number, t: number, size: number, color: number) => {
      const mesh = new THREE.Mesh(markerGeo, markerMat(color));
      mesh.scale.setScalar(size);
      mesh.position.copy(sampleCurves[curveIdx]!.getPoint(t));
      mesh.rotation.set(t * 5, t * 9, t * 3); // fixed, slightly irregular orientations
      // Markers belong to the layer their curve lives in.
      (curveIdx < RING_CURVE_COUNT ? spinner : fixedLayer).add(mesh);
      return mesh;
    };

    for (const [curveIdx, t, size, color] of STATIC_MARKERS) placeMarker(curveIdx, t, size, color);
    const travelers = TRAVELERS.map(([curveIdx, offset, period, size, color]) => ({
      mesh: placeMarker(curveIdx, offset, size, color),
      curve: sampleCurves[curveIdx]!,
      offset,
      period,
      size,
      closed: curveIdx < RING_CURVE_COUNT,
    }));

    // ── Animation: state is a pure function of elapsed seconds ─
    const applyState = (t: number) => {
      spinner.rotation.y = ((t / SPIN_PERIOD) * TWO_PI) % TWO_PI;
      spinner.rotation.x = WOBBLE_AMP * Math.sin((t / WOBBLE_PERIOD) * TWO_PI);
      for (const tr of travelers) {
        const phase = (tr.offset + t / tr.period) % 1;
        // Arc-length parameterization keeps travel speed constant along the curve.
        tr.curve.getPointAt(phase, tr.mesh.position);
        const ramp = tr.closed
          ? 1
          : smoothstep(0, EMIT_RAMP, phase) * (1 - smoothstep(1 - EMIT_RAMP, 1, phase));
        tr.mesh.scale.setScalar(tr.size * ramp);
      }
    };

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let animId = 0;
    let virtualT = 0;
    let lastNow: number | null = null;
    const animate = (now: number) => {
      animId = requestAnimationFrame(animate);
      const nowSeconds = now / 1000;
      if (lastNow !== null) virtualT += Math.min(nowSeconds - lastNow, MAX_DELTA);
      lastNow = nowSeconds;
      applyState(virtualT);
      renderer.render(scene, camera);
    };
    if (reducedMotion) {
      applyState(0);
      renderer.render(scene, camera);
    } else {
      animId = requestAnimationFrame(animate);
    }

    // ── Resize (observes the mount, not just the window) ──────
    const resizeObserver = new ResizeObserver(() => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      if (w === 0 || h === 0) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      if (reducedMotion) renderer.render(scene, camera);
    });
    resizeObserver.observe(mount);

    // ── Cleanup ───────────────────────────────────────────────
    return () => {
      if (animId) cancelAnimationFrame(animId);
      resizeObserver.disconnect();
      mount.removeChild(renderer.domElement);
      renderer.dispose();
      renderer.forceContextLoss();
      for (const geo of geometries) geo.dispose();
      for (const mat of materials) mat.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
    />
  );
};

export default Model;
