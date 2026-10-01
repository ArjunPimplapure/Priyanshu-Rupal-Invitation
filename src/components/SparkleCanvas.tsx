import React, { useEffect, useRef } from 'react';

interface SparkleCanvasProps {
  intensity?: 'subtle' | 'celebratory';
}

export const SparkleCanvas: React.FC<SparkleCanvasProps> = ({ intensity = 'subtle' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // 1. Rose Petals (Traditional Indian wedding celebration shower)
    const petalCount = intensity === 'celebratory' ? 22 : 14;

    interface RosePetal {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      rotation: number;
      rotSpeed: number;
      swayAngle: number;
      swaySpeed: number;
      swayRange: number;
      flipAngle: number;
      flipSpeed: number;
      opacity: number;
      hueShift: number;
    }

    const petals: RosePetal[] = Array.from({ length: petalCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height - height * 0.2,
      size: Math.random() * 8 + 9, // 9px to 17px
      speedY: Math.random() * 0.8 + 0.5,
      speedX: (Math.random() - 0.5) * 0.3,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.025,
      swayAngle: Math.random() * Math.PI * 2,
      swaySpeed: Math.random() * 0.02 + 0.015,
      swayRange: Math.random() * 1.5 + 0.8,
      flipAngle: Math.random() * Math.PI * 2,
      flipSpeed: Math.random() * 0.03 + 0.02,
      opacity: Math.random() * 0.35 + 0.6,
      hueShift: Math.random() * 15 - 7, // slight red/crimson variance
    }));

    // 2. Golden Zari Sparkles
    const sparkleCount = intensity === 'celebratory' ? 40 : 25;

    interface Sparkle {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
      maxOpacity: number;
      fadeSpeed: number;
      pulseAngle: number;
    }

    const sparkles: Sparkle[] = Array.from({ length: sparkleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.2 + 0.8,
      speedY: -(Math.random() * 0.3 + 0.1),
      speedX: (Math.random() - 0.5) * 0.2,
      opacity: Math.random() * 0.5 + 0.2,
      maxOpacity: Math.random() * 0.6 + 0.3,
      fadeSpeed: Math.random() * 0.02 + 0.008,
      pulseAngle: Math.random() * Math.PI * 2,
    }));

    // Helper to draw realistic curved rose petal shape
    const drawPetal = (p: RosePetal) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      const scaleX = Math.cos(p.flipAngle);
      ctx.scale(scaleX, 1);

      // Deep royal crimson / ruby gradient for velvety rose petals
      const grad = ctx.createLinearGradient(-p.size, -p.size, p.size, p.size);
      grad.addColorStop(0, `rgba(180, 25, 45, ${p.opacity})`);
      grad.addColorStop(0.5, `rgba(135, 12, 28, ${p.opacity * 0.95})`);
      grad.addColorStop(1, `rgba(88, 6, 16, ${p.opacity * 0.85})`);

      ctx.fillStyle = grad;
      ctx.beginPath();
      // Organic teardrop heart petal curve
      ctx.moveTo(0, -p.size * 0.9);
      ctx.bezierCurveTo(
        p.size * 0.8, -p.size * 0.9,
        p.size * 0.9, p.size * 0.4,
        0, p.size * 1.1
      );
      ctx.bezierCurveTo(
        -p.size * 0.9, p.size * 0.4,
        -p.size * 0.8, -p.size * 0.9,
        0, -p.size * 0.9
      );
      ctx.closePath();
      ctx.fill();

      // Subtle velvet center vein
      ctx.strokeStyle = `rgba(255, 150, 165, ${p.opacity * 0.35})`;
      ctx.lineWidth = 0.75;
      ctx.beginPath();
      ctx.moveTo(0, -p.size * 0.7);
      ctx.quadraticCurveTo(p.size * 0.1, 0, 0, p.size * 0.8);
      ctx.stroke();

      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render Golden Sparkles
      sparkles.forEach((s) => {
        s.y += s.speedY;
        s.x += s.speedX;
        s.pulseAngle += s.fadeSpeed;
        s.opacity = (Math.sin(s.pulseAngle) * 0.5 + 0.5) * s.maxOpacity;

        if (s.y < -10) {
          s.y = height + 10;
          s.x = Math.random() * width;
        }
        if (s.x < -10) s.x = width + 10;
        if (s.x > width + 10) s.x = -10;

        ctx.beginPath();
        const radGrad = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.size * 2);
        radGrad.addColorStop(0, `rgba(255, 235, 175, ${s.opacity})`);
        radGrad.addColorStop(0.5, `rgba(216, 181, 112, ${s.opacity * 0.7})`);
        radGrad.addColorStop(1, 'rgba(216, 181, 112, 0)');

        ctx.fillStyle = radGrad;
        ctx.arc(s.x, s.y, s.size * 2, 0, Math.PI * 2);
        ctx.fill();

        // Star cross glint
        if (s.size > 1.8) {
          ctx.strokeStyle = `rgba(255, 245, 220, ${s.opacity * 0.8})`;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(s.x - s.size * 1.6, s.y);
          ctx.lineTo(s.x + s.size * 1.6, s.y);
          ctx.moveTo(s.x, s.y - s.size * 1.6);
          ctx.lineTo(s.x, s.y + s.size * 1.6);
          ctx.stroke();
        }
      });

      // Render Falling Rose Petals
      petals.forEach((p) => {
        p.swayAngle += p.swaySpeed;
        p.flipAngle += p.flipSpeed;
        p.rotation += p.rotSpeed;

        p.y += p.speedY;
        p.x += Math.sin(p.swayAngle) * p.swayRange + p.speedX;

        // Reset once fallen off screen
        if (p.y > height + 30) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x < -30) p.x = width + 20;
        if (p.x > width + 30) p.x = -20;

        drawPetal(p);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [intensity]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 opacity-85"
      aria-hidden="true"
    />
  );
};
