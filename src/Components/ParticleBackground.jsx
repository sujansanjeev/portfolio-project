import { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000, radius: 200 });
  const trailRef = useRef([]);
  const particlesRef = useRef([]);
  const animFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 10000), 80);
      particlesRef.current = [];

      for (let i = 0; i < particleCount; i++) {
        const types = ['circle', 'square', 'triangle'];
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          size: Math.random() * 3 + 1.5,
          baseSize: Math.random() * 3 + 1.5,
          opacity: Math.random() * 0.3 + 0.1,
          baseOpacity: Math.random() * 0.3 + 0.1,
          hue: Math.random() * 40 + 220,
          type: types[Math.floor(Math.random() * types.length)],
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02,
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.03 + 0.01,
        });
      }
    };

    const drawParticle = (p, isNearMouse, mousePos) => {
      const pulse = Math.sin(p.pulsePhase) * 0.2 + 1;
      const displaySize = isNearMouse ? p.baseSize * 1.8 * pulse : p.baseSize * pulse;
      const alpha = isNearMouse ? Math.min(p.opacity + 0.15, 0.6) : p.opacity;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);

      if (isNearMouse && mousePos) {
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, displaySize * 2);
        gradient.addColorStop(0, `hsla(${p.hue}, 60%, 50%, ${alpha})`);
        gradient.addColorStop(1, `hsla(${p.hue}, 60%, 50%, 0)`);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(0, 0, displaySize * 2, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.fillStyle = `hsla(${p.hue}, 60%, 45%, ${alpha})`;
      ctx.strokeStyle = `hsla(${p.hue}, 70%, 60%, ${alpha * 0.6})`;
      ctx.lineWidth = 0.5;

      if (p.type === 'circle') {
        ctx.beginPath();
        ctx.arc(0, 0, displaySize, 0, Math.PI * 2);
        ctx.fill();
        if (isNearMouse) ctx.stroke();
      } else if (p.type === 'square') {
        ctx.fillRect(-displaySize, -displaySize, displaySize * 2, displaySize * 2);
        if (isNearMouse) ctx.strokeRect(-displaySize, -displaySize, displaySize * 2, displaySize * 2);
      } else if (p.type === 'triangle') {
        ctx.beginPath();
        ctx.moveTo(0, -displaySize);
        ctx.lineTo(displaySize, displaySize);
        ctx.lineTo(-displaySize, displaySize);
        ctx.closePath();
        ctx.fill();
        if (isNearMouse) ctx.stroke();
      }

      ctx.restore();
    };

    const drawConnections = () => {
      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const maxDist = 120;
          if (dist < maxDist) {
            const opacity = (1 - dist / maxDist) * 0.12;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        const mdx = mouse.x - particles[i].x;
        const mdy = mouse.y - particles[i].y;
        const mouseDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mouseDist < mouse.radius) {
          const opacity = (1 - mouseDist / mouse.radius) * 0.08;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(168, 85, 247, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
    };

    const drawCursorTrail = () => {
      const trail = trailRef.current;
      if (trail.length < 2) return;

      ctx.beginPath();
      ctx.moveTo(trail[0].x, trail[0].y);

      for (let i = 1; i < trail.length; i++) {
        const point = trail[i];
        const prev = trail[i - 1];
        const midX = (point.x + prev.x) / 2;
        const midY = (point.y + prev.y) / 2;

        ctx.quadraticCurveTo(prev.x, prev.y, midX, midY);
      }

      ctx.strokeStyle = 'rgba(99, 102, 241, 0.15)';
      ctx.lineWidth = 1.5;
      ctx.lineCap = 'round';
      ctx.stroke();

      const lastPoint = trail[trail.length - 1];
      const gradient = ctx.createRadialGradient(lastPoint.x, lastPoint.y, 0, lastPoint.x, lastPoint.y, 15);
      gradient.addColorStop(0, 'rgba(99, 102, 241, 0.2)');
      gradient.addColorStop(1, 'rgba(99, 102, 241, 0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(lastPoint.x, lastPoint.y, 15, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawMouseGlow = () => {
      const mouse = mouseRef.current;
      if (mouse.x < 0) return;

      const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, mouse.radius);
      gradient.addColorStop(0, 'rgba(99, 102, 241, 0.03)');
      gradient.addColorStop(0.5, 'rgba(168, 85, 247, 0.01)');
      gradient.addColorStop(1, 'rgba(99, 102, 241, 0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2);
      ctx.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mouse = mouseRef.current;
      const particles = particlesRef.current;
      const trail = trailRef.current;

      drawMouseGlow();
      drawCursorTrail();

      for (const p of particles) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius && dist > 0) {
          const force = (mouse.radius - dist) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          p.vx += Math.cos(angle) * force * 0.15;
          p.vy += Math.sin(angle) * force * 0.15;
          p.size = p.baseSize + force * 1.5;
          p.opacity = Math.min(p.baseOpacity + force * 0.15, 0.5);
        } else {
          p.size += (p.baseSize - p.size) * 0.08;
          p.opacity += (p.baseOpacity - p.opacity) * 0.08;
        }

        p.vx *= 0.97;
        p.vy *= 0.97;
        p.vx += (Math.random() - 0.5) * 0.05;
        p.vy += (Math.random() - 0.5) * 0.05;

        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;
        p.pulsePhase += p.pulseSpeed;

        if (p.x < 0) { p.x = 0; p.vx *= -0.6; }
        if (p.x > canvas.width) { p.x = canvas.width; p.vx *= -0.6; }
        if (p.y < 0) { p.y = 0; p.vy *= -0.6; }
        if (p.y > canvas.height) { p.y = canvas.height; p.vy *= -0.6; }

        const isNearMouse = dist < mouse.radius;
        drawParticle(p, isNearMouse, mouse);
      }

      drawConnections();

      if (trail.length > 0) {
        trail.push({ x: mouse.x, y: mouse.y });
        if (trail.length > 20) {
          trail.shift();
        }
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY, radius: 200 };
      trailRef.current.push({ x: e.clientX, y: e.clientY });
      if (trailRef.current.length > 20) {
        trailRef.current.shift();
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000, radius: 200 };
      trailRef.current = [];
    };

    resizeCanvas();
    createParticles();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      createParticles();
    });
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
};

export default ParticleBackground;