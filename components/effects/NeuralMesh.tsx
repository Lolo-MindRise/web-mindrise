'use client';

import { useEffect, useRef } from 'react';

type Node = { x: number; y: number; vx: number; vy: number; r: number; pulse: number };

export function NeuralMesh() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0;
    let nodes: Node[] = [];
    const mouse = { x: 0.5, y: 0.5 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const rect = canvas.getBoundingClientRect();
    const count = Math.min(70, Math.floor((rect.width * rect.height) / 16000));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * rect.width,
      y: Math.random() * rect.height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.1 + 0.4,
      pulse: Math.random() * Math.PI * 2,
    }));

    const onMouse = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = (e.clientX - r.left) / r.width;
      mouse.y = (e.clientY - r.top) / r.height;
    };

    window.addEventListener('mousemove', onMouse);
    window.addEventListener('resize', resize);

    const loop = () => {
      const r = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, r.width, r.height);

      const mx = mouse.x * r.width;
      const my = mouse.y * r.height;

      for (const n of nodes) {
        if (!reduced) {
          n.x += n.vx;
          n.y += n.vy;
        }
        if (n.x < 0 || n.x > r.width) n.vx *= -1;
        if (n.y < 0 || n.y > r.height) n.vy *= -1;

        const dx = mx - n.x;
        const dy = my - n.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 220 && !reduced) {
          n.x += (dx / d) * 0.15;
          n.y += (dy / d) * 0.15;
        }
      }

      const maxDist = 140;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < maxDist * maxDist) {
            const alpha = (1 - Math.sqrt(d2) / maxDist) * 0.35;
            ctx.strokeStyle = `rgba(134, 164, 216, ${alpha.toFixed(3)})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        n.pulse += 0.015;
        const g = 0.6 + Math.sin(n.pulse) * 0.2;
        const r2 = n.r * (1 + Math.sin(n.pulse) * 0.3);
        ctx.fillStyle = `rgba(134, 164, 216, ${g.toFixed(2)})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, r2, 0, Math.PI * 2);
        ctx.fill();

        if (n.r > 1.2) {
          const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, 14);
          grad.addColorStop(0, 'rgba(134, 164, 216, 0.12)');
          grad.addColorStop(1, 'rgba(134, 164, 216, 0)');
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(n.x, n.y, 14, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero__canvas" aria-hidden="true" />;
}
