import * as THREE from './vendor/three.module.min.js';

// A small, original workshop made entirely from geometric primitives.
// No remote assets, photographs, models or personal data are used here.
export function createWorkshop(container, { onSelect = () => {}, reducedMotion = false, labels = {} } = {}) {
  const scene = new THREE.Scene();
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.7));
  renderer.setClearColor(0x000000, 0);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.25;
  const canvas = renderer.domElement;
  canvas.className = 'workshop-canvas';
  canvas.setAttribute('aria-hidden', 'true');
  canvas.style.cssText = 'display:block;width:100%;height:100%;touch-action:pan-y;';
  container.appendChild(canvas);
  if (getComputedStyle(container).position === 'static') container.style.position = 'relative';

  const camera = new THREE.OrthographicCamera(-5, 5, 4, -4, 0.1, 70);
  const lookAt = new THREE.Vector3(0, 1.1, 0);
  const baseCamera = new THREE.Vector3(8.3, 7.3, 10.6);
  const root = new THREE.Group();
  scene.add(root);

  const palette = { cream: 0xf4e4c9, wall: 0xc3d0bd, wallDark: 0x94aba0, wood: 0xa0653c, darkWood: 0x663f2d, teal: 0x194e50, green: 0x608568, orange: 0xca6240, yellow: 0xe7bc63, ink: 0x263e3b, paper: 0xfaf0dc };
  const materials = new Map();
  const textures = [];
  function mat(color, roughness = 0.8, metalness = 0) {
    const key = `${color}-${roughness}-${metalness}`;
    if (!materials.has(key)) materials.set(key, new THREE.MeshStandardMaterial({ color, roughness, metalness }));
    return materials.get(key);
  }
  function mesh(geometry, material, parent = root) {
    const value = new THREE.Mesh(geometry, material);
    value.castShadow = true;
    value.receiveShadow = true;
    parent.add(value);
    return value;
  }
  function box(w, h, d, color, x, y, z, parent = root) {
    const value = mesh(new THREE.BoxGeometry(w, h, d), typeof color === 'number' ? mat(color) : color, parent);
    value.position.set(x, y, z);
    return value;
  }
  function roundedBox(w, h, d, radius, color, x, y, z, parent = root) {
    const r = Math.min(radius, w / 2.1, h / 2.1, d / 2.1);
    const shape = new THREE.Shape();
    shape.moveTo(-w / 2 + r, -h / 2);
    shape.lineTo(w / 2 - r, -h / 2);
    shape.quadraticCurveTo(w / 2, -h / 2, w / 2, -h / 2 + r);
    shape.lineTo(w / 2, h / 2 - r);
    shape.quadraticCurveTo(w / 2, h / 2, w / 2 - r, h / 2);
    shape.lineTo(-w / 2 + r, h / 2);
    shape.quadraticCurveTo(-w / 2, h / 2, -w / 2, h / 2 - r);
    shape.lineTo(-w / 2, -h / 2 + r);
    shape.quadraticCurveTo(-w / 2, -h / 2, -w / 2 + r, -h / 2);
    const geometry = new THREE.ExtrudeGeometry(shape, { depth: d - r, bevelEnabled: true, bevelSegments: 2, steps: 1, bevelSize: r / 2, bevelThickness: r / 2, curveSegments: 5 });
    geometry.translate(0, 0, -(d - r) / 2);
    const value = mesh(geometry, mat(color), parent);
    value.position.set(x, y, z);
    return value;
  }
  function cylinder(rTop, rBottom, h, color, x, y, z, parent = root, segments = 24) {
    const value = mesh(new THREE.CylinderGeometry(rTop, rBottom, h, segments), typeof color === 'number' ? mat(color) : color, parent);
    value.position.set(x, y, z);
    return value;
  }
  function sphere(radius, color, x, y, z, parent = root) {
    const value = mesh(new THREE.SphereGeometry(radius, 16, 12), typeof color === 'number' ? mat(color) : color, parent);
    value.position.set(x, y, z);
    return value;
  }
  function texture(draw, width = 512, height = 384) {
    const element = document.createElement('canvas');
    element.width = width; element.height = height;
    draw(element.getContext('2d'), width, height);
    const value = new THREE.CanvasTexture(element);
    value.colorSpace = THREE.SRGBColorSpace;
    value.anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), 4);
    textures.push(value);
    return value;
  }
  function picture(w, h, image, x, y, z, parent = root) {
    const value = mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: image, side: THREE.DoubleSide }), parent);
    value.position.set(x, y, z);
    value.castShadow = false;
    return value;
  }
  const selectable = [];
  function action(group, id) { group.userData.section = id; selectable.push(group); return group; }

  // The room: warm parquet, rounded platform and two open walls.
  roundedBox(6.8, 0.34, 5.8, 0.12, palette.darkWood, 0, -0.18, 0);
  box(6.6, 0.08, 5.6, palette.cream, 0, 0.02, 0);
  for (let row = 0; row < 15; row++) {
    const z = -2.61 + row * 0.37;
    const shade = row % 3 === 0 ? 0xd0ae7e : row % 3 === 1 ? 0xd8b88b : 0xdec298;
    box(6.47, 0.025, 0.35, shade, 0, 0.075, z);
    for (let seam = 0; seam < 3; seam++) box(0.012, 0.027, 0.35, 0xb2916b, -2.5 + seam * 2.1 + (row % 2) * 0.7, 0.077, z);
  }
  box(6.72, 3.55, 0.14, palette.wall, 0, 1.78, -2.76);
  box(0.14, 3.55, 5.5, palette.wallDark, -3.29, 1.78, -0.06);
  box(6.72, 0.17, 0.18, palette.teal, 0, 0.17, -2.65);
  box(0.18, 0.17, 5.4, palette.teal, -3.18, 0.17, 0);
  box(6.8, 0.07, 0.22, 0xb4c1ab, 0, 3.57, -2.76);

  // Window with an illustrated outdoor sky, so no external assets are needed.
  const skyTexture = texture((ctx, w, h) => {
    const gradient = ctx.createLinearGradient(0, 0, 0, h);
    gradient.addColorStop(0, '#91bbc0'); gradient.addColorStop(1, '#e5d9ad');
    ctx.fillStyle = gradient; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#f2c268'; ctx.beginPath(); ctx.arc(w * 0.7, h * 0.27, 48, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#7e9a80'; ctx.beginPath(); ctx.moveTo(0, h); ctx.lineTo(0, h * 0.7); ctx.bezierCurveTo(w * 0.3, h * 0.42, w * 0.48, h * 0.91, w, h * 0.56); ctx.lineTo(w, h); ctx.fill();
    ctx.fillStyle = '#426f63'; ctx.beginPath(); ctx.moveTo(0, h); ctx.lineTo(0, h * 0.9); ctx.bezierCurveTo(w * 0.4, h * 0.5, w * 0.65, h * 0.91, w, h * 0.72); ctx.lineTo(w, h); ctx.fill();
  });
  box(2.18, 2.0, 0.12, palette.cream, -1.7, 2.22, -2.59);
  picture(1.93, 1.74, skyTexture, -1.7, 2.22, -2.515);
  box(0.07, 1.78, 0.07, palette.cream, -1.7, 2.22, -2.46);
  box(2.0, 0.07, 0.07, palette.cream, -1.7, 2.22, -2.46);
  box(2.4, 0.1, 0.34, palette.paper, -1.7, 1.21, -2.43);

  // Desk and retro computer — the data corner.
  const desk = new THREE.Group(); root.add(desk); desk.position.set(-0.6, 0, -0.7);
  roundedBox(3.35, 0.16, 1.65, 0.06, palette.wood, 0, 1.35, 0, desk);
  for (const x of [-1.35, 1.35]) for (const z of [-0.57, 0.57]) box(0.13, 1.25, 0.13, palette.teal, x, 0.68, z, desk);
  box(0.75, 0.67, 1.2, palette.teal, 1.04, 0.91, 0, desk);
  for (const y of [0.73, 0.98, 1.2]) {
    box(0.67, 0.2, 0.025, 0x2a6463, 1.04, y, 0.613, desk);
    box(0.2, 0.025, 0.04, palette.yellow, 1.04, y + 0.02, 0.64, desk);
  }
  const monitor = action(new THREE.Group(), 'dados'); desk.add(monitor); monitor.position.set(-0.35, 1.43, -0.2);
  roundedBox(1.25, 0.17, 0.73, 0.08, 0xc5b89c, 0, 0.06, 0, monitor);
  box(0.23, 0.21, 0.2, palette.cream, 0, 0.2, -0.07, monitor);
  roundedBox(1.35, 1.03, 0.81, 0.15, palette.cream, 0, 0.76, -0.13, monitor);
  roundedBox(1.08, 0.77, 0.04, 0.08, palette.ink, 0, 0.78, 0.3, monitor);
  const screenTexture = texture((ctx, w, h) => {
    ctx.fillStyle = '#103d36'; ctx.fillRect(0, 0, w, h);
    ctx.font = 'bold 23px monospace'; ctx.fillStyle = '#a4d9a3'; ctx.fillText('LAB DO MARCELO', 28, 42);
    ctx.fillStyle = '#73a783'; ctx.font = '15px monospace'; ctx.fillText('IDEIA > DADOS > ACAO', 28, 71);
    for (let j = 0; j < 6; j++) { ctx.fillStyle = j === 5 ? '#e7bc63' : '#6fbd9e'; ctx.fillRect(36 + j * 73, 280 - j * 20 - (j % 2) * 24, 39, 40 + j * 20 + (j % 2) * 24); }
    ctx.strokeStyle = '#9ed9ab'; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(25, 324); ctx.lineTo(490, 324); ctx.stroke();
    ctx.font = '14px monospace'; ctx.fillStyle = '#d5d7ac'; ctx.fillText('EXPLORAR PROJETOS  _', 28, 358);
    ctx.fillStyle = 'rgba(0,0,0,.12)'; for (let y = 0; y < h; y += 5) ctx.fillRect(0, y, w, 1);
  });
  picture(0.97, 0.68, screenTexture, 0, 0.79, 0.327, monitor);
  cylinder(0.025, 0.025, 0.009, palette.orange, 0.52, 0.39, 0.31, monitor).rotation.x = Math.PI / 2;
  const ledMaterial = new THREE.MeshStandardMaterial({ color: 0xa5d674, emissive: 0x6eb74b, emissiveIntensity: 0.7 });
  sphere(0.018, ledMaterial, 0.42, 0.39, 0.33, monitor);
  const keyboard = roundedBox(1.23, 0.085, 0.42, 0.03, 0xd4c7ae, -0.37, 1.47, 0.49, desk);
  for (let r = 0; r < 4; r++) for (let c = 0; c < 11; c++) box(0.075, 0.025, 0.057, c === 10 ? palette.orange : palette.paper, -0.87 + c * 0.097, 1.527, 0.35 + r * 0.08, desk);
  roundedBox(0.22, 0.07, 0.32, 0.04, palette.paper, 0.44, 1.47, 0.53, desk);
  // Coffee: ceramic body, visible coffee and handle.
  cylinder(0.13, 0.115, 0.25, palette.orange, -1.28, 1.56, 0.23, desk);
  cylinder(0.112, 0.112, 0.009, 0x4a3025, -1.28, 1.691, 0.23, desk);
  const handle = mesh(new THREE.TorusGeometry(0.09, 0.025, 8, 18), mat(palette.orange), desk);
  handle.position.set(-1.43, 1.58, 0.23); handle.rotation.y = Math.PI / 2;
  box(0.55, 0.028, 0.4, palette.paper, 0.96, 1.46, -0.37, desk).rotation.y = -0.18;
  box(0.32, 0.018, 0.025, palette.teal, 1.0, 1.49, -0.3, desk).rotation.y = 0.5;

  // Small desk lamp, with a warm pool of light at night.
  cylinder(0.2, 0.23, 0.055, palette.orange, 0.82, 1.47, -0.5, desk);
  const lampArm = cylinder(0.028, 0.028, 0.7, palette.ink, 0.85, 1.84, -0.5, desk);
  lampArm.rotation.z = -0.22;
  cylinder(0.11, 0.26, 0.3, palette.orange, 0.93, 2.2, -0.5, desk);
  const lampGlow = new THREE.PointLight(0xffbb68, 1.4, 4, 2);
  lampGlow.position.set(0.35, 1.98, -1.2); root.add(lampGlow);

  // Chair, slightly turned away from the desk.
  const chair = new THREE.Group(); root.add(chair); chair.position.set(-0.7, 0, 0.79); chair.rotation.y = -0.16;
  roundedBox(0.9, 0.16, 0.82, 0.12, palette.orange, 0, 0.72, 0, chair);
  roundedBox(0.94, 0.74, 0.16, 0.13, palette.orange, 0, 1.18, 0.34, chair);
  for (const x of [-0.32, 0.32]) for (const z of [-0.26, 0.26]) box(0.055, 0.65, 0.055, palette.darkWood, x, 0.37, z, chair);

  // Book shelf and poster — learning is an everyday practice.
  const books = action(new THREE.Group(), 'aprender'); root.add(books); books.position.set(2.22, 0, -2.05);
  box(1.34, 2.25, 0.55, palette.darkWood, 0, 1.19, 0, books);
  for (const y of [0.14, 0.83, 1.55, 2.33]) box(1.44, 0.09, 0.65, palette.wood, 0, y, 0.02, books);
  const bookColors = [palette.orange, palette.cream, palette.teal, palette.yellow, 0x8eaaa2, 0x8c6d53];
  for (let shelf = 0; shelf < 3; shelf++) {
    for (let n = 0; n < 6; n++) {
      const h = 0.37 + ((n * 3 + shelf) % 4) * 0.055;
      const value = box(0.13 + (n % 2) * 0.035, h, 0.35, bookColors[(n + shelf) % bookColors.length], -0.49 + n * 0.19, 0.22 + shelf * 0.73 + h / 2, 0.13, books);
      if (n === 5) value.rotation.z = -0.12;
      box(0.08, 0.018, 0.012, 0xe8d6b5, -0.49 + n * 0.19, 0.3 + shelf * 0.73, 0.313, books);
    }
  }
  const posterTex = texture((ctx, w, h) => {
    ctx.fillStyle = '#f2e3c6'; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#c86443'; ctx.beginPath(); ctx.arc(w / 2, h * 0.39, 83, Math.PI, 0); ctx.lineTo(w / 2 + 83, h * 0.58); ctx.lineTo(w / 2 - 83, h * 0.58); ctx.fill();
    ctx.fillStyle = '#235353'; ctx.font = 'bold 35px monospace'; ctx.textAlign = 'center'; ctx.fillText('SEMPRE', w / 2, h * 0.75); ctx.fillText('APRENDENDO', w / 2, h * 0.87);
  }, 512, 512);
  box(1.14, 1.15, 0.06, palette.darkWood, 0.66, 2.59, -2.61);
  picture(1.03, 1.04, posterTex, 0.66, 2.59, -2.57);
  // A rounded wall clock, intentionally without any live or personal information.
  const clockFace = texture((ctx, w, h) => {
    ctx.clearRect(0, 0, w, h); ctx.fillStyle = '#f5e7ce'; ctx.beginPath(); ctx.arc(w / 2, h / 2, w * 0.47, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = '#27524e'; ctx.lineWidth = 14; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(w / 2, h / 2); ctx.lineTo(w / 2, h * 0.24); ctx.moveTo(w / 2, h / 2); ctx.lineTo(w * 0.73, h * 0.59); ctx.stroke();
    ctx.fillStyle = '#c86443'; ctx.beginPath(); ctx.arc(w / 2, h / 2, 13, 0, Math.PI * 2); ctx.fill();
  }, 256, 256);
  const clockMat = new THREE.MeshBasicMaterial({ map: clockFace, transparent: true });
  const clockMesh = mesh(new THREE.PlaneGeometry(0.62, 0.62), clockMat); clockMesh.position.set(2.18, 3.03, -2.64);

  // A helpful little robot, built from shapes rather than an imported mascot.
  const robotTable = new THREE.Group(); root.add(robotTable); robotTable.position.set(2.12, 0, 0.46);
  cylinder(0.66, 0.66, 0.12, palette.wood, 0, 0.79, 0, robotTable);
  for (const [x, z] of [[-.4, -.3], [.4, -.3], [0, .42]]) box(.07, .71, .07, palette.teal, x, .4, z, robotTable);
  const robot = action(new THREE.Group(), 'ia'); robotTable.add(robot); robot.position.y = 0.91;
  roundedBox(0.56, 0.45, 0.4, 0.09, palette.yellow, 0, 0.3, 0, robot);
  roundedBox(0.65, 0.42, 0.45, 0.09, palette.cream, 0, 0.8, 0, robot);
  roundedBox(0.49, 0.23, 0.02, 0.05, palette.teal, 0, 0.83, 0.239, robot);
  const eyeMat = new THREE.MeshStandardMaterial({ color: 0xb5e4b1, emissive: 0x7bbf80, emissiveIntensity: 0.65 });
  box(0.075, 0.09, 0.025, eyeMat, -0.12, 0.85, 0.26, robot);
  box(0.075, 0.09, 0.025, eyeMat, 0.12, 0.85, 0.26, robot);
  box(0.1, 0.02, 0.025, palette.cream, 0, 0.77, 0.26, robot);
  cylinder(0.018, 0.018, 0.18, palette.teal, 0, 1.11, 0, robot);
  sphere(0.055, palette.orange, 0, 1.22, 0, robot);
  for (const x of [-0.36, 0.36]) {
    sphere(0.075, palette.teal, x, 0.45, 0, robot);
    const arm = box(0.095, 0.25, 0.12, palette.cream, x * 1.08, 0.29, 0, robot); arm.rotation.z = x < 0 ? -0.15 : 0.15;
    roundedBox(0.18, 0.11, 0.24, 0.03, palette.teal, x * 0.48, 0.035, 0.04, robot);
  }

  // A tiny game corner, a playful nod to building things for family.
  const rug = box(2.05, 0.025, 1.5, 0xb45e46, -1.45, 0.12, 1.74);
  rug.rotation.y = -0.08;
  for (let stripe = 0; stripe < 3; stripe++) box(1.85, 0.008, 0.045, palette.yellow, -1.45, 0.139, 1.23 + stripe * 0.46).rotation.y = -0.08;
  const game = action(new THREE.Group(), 'pessoal'); root.add(game); game.position.set(-1.77, 0.2, 1.7); game.rotation.y = 0.14;
  roundedBox(0.91, 0.22, 0.58, 0.08, palette.teal, 0, 0.14, 0, game);
  roundedBox(0.52, 0.025, 0.38, 0.03, palette.cream, 0, 0.266, 0, game);
  box(0.27, 0.018, 0.045, palette.ink, -0.22, 0.287, 0, game);
  box(0.045, 0.018, 0.21, palette.ink, -0.22, 0.287, 0, game);
  cylinder(0.05, 0.05, 0.025, palette.orange, 0.21, 0.292, 0.08, game);
  cylinder(0.05, 0.05, 0.025, palette.yellow, 0.32, 0.292, -0.05, game);
  for (let n = 0; n < 3; n++) {
    const die = roundedBox(0.27, 0.27, 0.27, 0.04, n === 1 ? palette.orange : palette.yellow, 0.65 + n * 0.24, 0.16, 0.05 + (n % 2) * 0.3, game);
    die.rotation.y = n * 0.4;
  }

  function plant(x, y, z, scale = 1) {
    const group = new THREE.Group(); root.add(group); group.position.set(x, y, z); group.scale.setScalar(scale);
    cylinder(0.23, 0.16, 0.36, palette.orange, 0, 0.18, 0, group);
    cylinder(0.22, 0.22, 0.02, 0x634d35, 0, 0.366, 0, group);
    for (let n = 0; n < 7; n++) {
      const angle = n * 2.399;
      const leaf = sphere(0.23, n % 2 ? 0x527c55 : 0x719b60, Math.cos(angle) * 0.17, 0.58 + (n % 3) * 0.12, Math.sin(angle) * 0.17, group);
      leaf.scale.set(0.45, 1.7, 0.65); leaf.rotation.z = Math.cos(angle) * 0.48; leaf.rotation.x = Math.sin(angle) * 0.48;
    }
    return group;
  }
  plant(-2.39, 1.27, -2.35, .65);
  plant(2.64, .12, 2.06, 1.05);

  const ambient = new THREE.HemisphereLight(0xfff3d6, 0x73928c, 2.8); scene.add(ambient);
  const sunlight = new THREE.DirectionalLight(0xffe2b4, 4.0);
  sunlight.position.set(-3, 8, 5); sunlight.castShadow = true;
  sunlight.shadow.mapSize.set(1024, 1024);
  sunlight.shadow.camera.left = -6; sunlight.shadow.camera.right = 6;
  sunlight.shadow.camera.top = 7; sunlight.shadow.camera.bottom = -6;
  sunlight.shadow.normalBias = 0.035;
  sunlight.shadow.bias = -0.0002;
  sunlight.shadow.radius = 3; scene.add(sunlight);
  const fill = new THREE.DirectionalLight(0xa4d9d3, 1.1); fill.position.set(6, 4, -2); scene.add(fill);

  // Labels are regular HTML buttons: they work with mouse, touch and keyboard.
  const hotspots = [
    { id: 'dados', text: 'Dados', point: new THREE.Vector3(-.95, 2.78, -.77) },
    { id: 'ia', text: 'IA', point: new THREE.Vector3(2.12, 2.42, .46) },
    { id: 'aprender', text: 'Aprender', point: new THREE.Vector3(2.24, 2.54, -2.02) },
    { id: 'pessoal', text: 'Brincar', point: new THREE.Vector3(-1.3, .68, 1.75) }
  ].map((data) => {
    const button = document.createElement('button');
    button.type = 'button'; button.className = `room-hotspot room-hotspot--${data.id}`;
    button.textContent = labels[data.id]?.text ?? data.text; button.setAttribute('aria-label', labels[data.id]?.label ?? `Explorar ${data.text.toLocaleLowerCase('pt-BR')}`);
    button.style.position = 'absolute'; button.style.zIndex = '2'; button.style.transform = 'translate(-50%,-50%)';
    button.addEventListener('click', () => onSelect(data.id)); container.appendChild(button);
    return { ...data, button };
  });

  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2(100, 100);
  const cursor = new THREE.Vector2();
  let width = 1, height = 1, frame = 0, previousTime = 0, elapsed = 0, paused = false, destroyed = false;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  let motionOff = reducedMotion || prefersReduced.matches;
  function fit() {
    width = Math.max(container.clientWidth, 1); height = Math.max(container.clientHeight, 1);
    renderer.setSize(width, height, false);
    const aspect = width / height;
    const span = Math.max(6.7, 9.35 / aspect);
    camera.left = -span * aspect / 2; camera.right = span * aspect / 2;
    camera.top = span / 2; camera.bottom = -span / 2;
    camera.updateProjectionMatrix();
    render();
  }
  function updateLabels() {
    for (const item of hotspots) {
      const pos = item.point.clone().project(camera);
      item.button.style.left = `${Math.max(6, Math.min(94, (pos.x + 1) * 50))}%`;
      item.button.style.top = `${Math.max(7, Math.min(93, (1 - pos.y) * 50))}%`;
    }
  }
  function render() {
    if (destroyed) return;
    camera.position.copy(baseCamera);
    if (!motionOff && !paused) { camera.position.x += cursor.x * .35; camera.position.y += cursor.y * .2; }
    camera.lookAt(lookAt);
    updateLabels(); renderer.render(scene, camera);
  }
  function pick() {
    raycaster.setFromCamera(pointer, camera);
    const hit = raycaster.intersectObjects(selectable, true)[0];
    if (!hit) return null;
    let object = hit.object;
    while (object && !object.userData.section) object = object.parent;
    return object?.userData.section || null;
  }
  function move(event) {
    const rect = canvas.getBoundingClientRect();
    pointer.set((event.clientX - rect.left) / rect.width * 2 - 1, -(event.clientY - rect.top) / rect.height * 2 + 1);
    cursor.set(pointer.x, pointer.y);
    canvas.style.cursor = pick() ? 'pointer' : 'default';
    if (motionOff || paused) render();
  }
  function leave() { cursor.set(0, 0); pointer.set(100, 100); canvas.style.cursor = 'default'; }
  function click(event) { move(event); const id = pick(); if (id) onSelect(id); }
  function animate(time) {
    if (destroyed) return;
    frame = 0;
    if (document.hidden || motionOff || paused) return;
    const dt = previousTime ? Math.min((time - previousTime) / 1000, .1) : 0;
    previousTime = time; elapsed += dt;
    robot.position.y = .91 + Math.sin(elapsed * 1.7) * .025;
    robot.rotation.y = Math.sin(elapsed * .5) * .09;
    ledMaterial.emissiveIntensity = .6 + Math.sin(elapsed * 2.4) * .15;
    render(); frame = requestAnimationFrame(animate);
  }
  function restart() {
    if (frame) cancelAnimationFrame(frame); frame = 0; previousTime = 0;
    render();
    if (!destroyed && !motionOff && !paused && !document.hidden) frame = requestAnimationFrame(animate);
  }
  function preference() { motionOff = reducedMotion || prefersReduced.matches; restart(); }
  const observer = new ResizeObserver(fit); observer.observe(container);
  canvas.addEventListener('pointermove', move); canvas.addEventListener('pointerleave', leave); canvas.addEventListener('click', click);
  document.addEventListener('visibilitychange', restart);
  prefersReduced.addEventListener('change', preference);
  fit(); restart();

  return {
    setNight(value) {
      ambient.intensity = value ? 1.1 : 2.8;
      sunlight.intensity = value ? .35 : 4;
      sunlight.color.setHex(value ? 0x9cbbd0 : 0xffe2b4);
      fill.intensity = value ? .6 : 1.1;
      lampGlow.intensity = value ? 5 : 1.4;
      renderer.toneMappingExposure = value ? 1.05 : 1.25;
      render();
    },
    setPaused(value) { paused = Boolean(value); restart(); },
    destroy() {
      destroyed = true; cancelAnimationFrame(frame); observer.disconnect();
      canvas.removeEventListener('pointermove', move); canvas.removeEventListener('pointerleave', leave); canvas.removeEventListener('click', click);
      document.removeEventListener('visibilitychange', restart); prefersReduced.removeEventListener('change', preference);
      hotspots.forEach(({ button }) => button.remove());
      const geometries = new Set(), allMaterials = new Set();
      scene.traverse(object => { if (object.geometry) geometries.add(object.geometry); if (object.material) { if (Array.isArray(object.material)) object.material.forEach(m => allMaterials.add(m)); else allMaterials.add(object.material); } });
      geometries.forEach(g => g.dispose()); allMaterials.forEach(m => m.dispose()); textures.forEach(t => t.dispose());
      renderer.dispose(); canvas.remove();
    }
  };
}
