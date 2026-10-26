import { useEffect, useRef } from 'react';

type Node = { x: number; y: number; vx: number; vy: number; r: number; hub: boolean; phase: number };
type Pulse = { a: number; b: number; t: number; speed: number };

// A slowly drifting constellation of people and areas of expertise behind the hero. Larger nodes stand for
// expertise categories; small pulses travel along the links between them. Decorative only: it is hidden from
// assistive technology, pauses off screen, and draws a single still frame when reduced motion is preferred.
export function HeroBackdrop() {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const el = canvas.current;
    const ctx = el?.getContext('2d');
    if (!el || !ctx) return;

    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let w = 0, h = 0, raf = 0, visible = true, last = 0;
    let nodes: Node[] = [];
    let pulses: Pulse[] = [];
    const pointer = { x: -9999, y: -9999 };

    function seed() {
      const area = w * h;
      const count = Math.max(18, Math.min(64, Math.round(area / 22000)));
      let s = 7;
      const rand = () => ((s = (s * 16807) % 2147483647) / 2147483647);
      nodes = Array.from({ length: count }, (_, i) => {
        const hub = i % 7 === 0;
        return {
          x: rand() * w, y: rand() * h,
          vx: (rand() - 0.5) * 0.12, vy: (rand() - 0.5) * 0.12,
          r: hub ? 3.6 + rand() * 1.6 : 1.4 + rand() * 1.2, hub, phase: rand() * Math.PI * 2,
        };
      });
      pulses = [];
    }

    function resize() {
      const rect = el!.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width; h = rect.height;
      el!.width = Math.round(w * dpr); el!.height = Math.round(h * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
      draw(0);
    }

    const linkDist = () => Math.min(170, Math.max(110, w / 9));

    function draw(dt: number) {
      ctx!.clearRect(0, 0, w, h);
      const max = linkDist();

      for (const n of nodes) {
        n.x += n.vx * dt; n.y += n.vy * dt;
        if (n.x < -20) n.x = w + 20; else if (n.x > w + 20) n.x = -20;
        if (n.y < -20) n.y = h + 20; else if (n.y > h + 20) n.y = -20;
      }

      const links: [number, number, number][] = [];
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < max) links.push([i, j, d]);
        }
      }

      ctx!.lineWidth = 1;
      for (const [i, j, d] of links) {
        const a = nodes[i], b = nodes[j];
        const near = Math.max(0, 1 - Math.hypot((a.x + b.x) / 2 - pointer.x, (a.y + b.y) / 2 - pointer.y) / 220);
        ctx!.strokeStyle = `rgba(157, 186, 242, ${(1 - d / max) * (0.22 + near * 0.4)})`;
        ctx!.beginPath(); ctx!.moveTo(a.x, a.y); ctx!.lineTo(b.x, b.y); ctx!.stroke();
      }

      // Occasionally send a pulse from an expertise category along one of its links.
      if (!still && pulses.length < 6 && Math.random() < 0.02 * (dt || 0)) {
        const hubLinks = links.filter(([i, j]) => nodes[i].hub || nodes[j].hub);
        const pick = hubLinks[Math.floor(Math.random() * hubLinks.length)];
        if (pick) {
          const [i, j] = nodes[pick[0]].hub ? [pick[0], pick[1]] : [pick[1], pick[0]];
          pulses.push({ a: i, b: j, t: 0, speed: 0.0012 + Math.random() * 0.001 });
        }
      }
      pulses = pulses.filter((p) => {
        p.t += p.speed * dt;
        const a = nodes[p.a], b = nodes[p.b];
        if (p.t >= 1 || Math.hypot(a.x - b.x, a.y - b.y) > max) return false;
        const x = a.x + (b.x - a.x) * p.t, y = a.y + (b.y - a.y) * p.t;
        const g = ctx!.createRadialGradient(x, y, 0, x, y, 7);
        g.addColorStop(0, 'rgba(220, 232, 255, 0.95)'); g.addColorStop(1, 'rgba(157, 186, 242, 0)');
        ctx!.fillStyle = g; ctx!.beginPath(); ctx!.arc(x, y, 7, 0, Math.PI * 2); ctx!.fill();
        return true;
      });

      const now = performance.now() / 1000;
      for (const n of nodes) {
        if (n.hub) {
          const glow = 10 + Math.sin(now * 1.2 + n.phase) * 3;
          const g = ctx!.createRadialGradient(n.x, n.y, 0, n.x, n.y, glow * 1.8);
          g.addColorStop(0, 'rgba(110, 155, 240, 0.45)'); g.addColorStop(1, 'rgba(110, 155, 240, 0)');
          ctx!.fillStyle = g; ctx!.beginPath(); ctx!.arc(n.x, n.y, glow * 1.8, 0, Math.PI * 2); ctx!.fill();
        }
        ctx!.fillStyle = n.hub ? 'rgba(230, 238, 252, 0.95)' : 'rgba(157, 186, 242, 0.7)';
        ctx!.beginPath(); ctx!.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx!.fill();
      }
    }

    function frame(t: number) {
      const dt = last ? Math.min(t - last, 50) / 16.7 : 0;
      last = t;
      draw(dt);
      raf = visible && !document.hidden ? requestAnimationFrame(frame) : 0;
    }

    function start() {
      if (still || raf || !visible || document.hidden) return;
      last = 0;
      raf = requestAnimationFrame(frame);
    }

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(el);
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; start(); });
    io.observe(el);
    const onVis = () => start();
    document.addEventListener('visibilitychange', onVis);
    const host = el.parentElement!;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      pointer.x = e.clientX - r.left; pointer.y = e.clientY - r.top;
    };
    const onLeave = () => { pointer.x = pointer.y = -9999; };
    host.addEventListener('pointermove', onMove);
    host.addEventListener('pointerleave', onLeave);
    start();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect(); io.disconnect();
      document.removeEventListener('visibilitychange', onVis);
      host.removeEventListener('pointermove', onMove);
      host.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return <canvas ref={canvas} className="hero-backdrop" aria-hidden="true" />;
}
