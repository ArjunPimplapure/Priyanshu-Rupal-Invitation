import React, { useRef, useEffect, useState, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, RotateCcw, Eye, Calendar } from 'lucide-react';
import { ASSETS } from '../config/assets';

export const WeddingScratchCard: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isScratched, setIsScratched] = useState(false);
  const [scratchPercent, setScratchPercent] = useState(0);
  const [isDrawing, setIsDrawing] = useState(false);
  const hasTriggeredCelebration = useRef(false);

  // Initialize Canvas Heavy 24K Gold Foil Layer
  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const w = rect.width;
    const h = rect.height;

    // 1. Heavy Metallic Gold Foil Gradient
    const goldGradient = ctx.createLinearGradient(0, 0, w, h);
    goldGradient.addColorStop(0, '#B88E3E');
    goldGradient.addColorStop(0.2, '#D4AF37');
    goldGradient.addColorStop(0.4, '#FFEAA7');
    goldGradient.addColorStop(0.6, '#F5CD79');
    goldGradient.addColorStop(0.85, '#AA771C');
    goldGradient.addColorStop(1, '#6F4E12');

    ctx.fillStyle = goldGradient;
    ctx.fillRect(0, 0, w, h);

    // 2. Intricate Royal Mandala Pattern
    ctx.strokeStyle = 'rgba(74, 8, 19, 0.4)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(w / 2, h / 2, Math.min(w, h) * 0.38, 0, Math.PI * 2);
    ctx.stroke();

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.65)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(w / 2, h / 2, Math.min(w, h) * 0.28, 0, Math.PI * 2);
    ctx.stroke();

    // 3. Ornate Double Gold Border Frame
    ctx.strokeStyle = 'rgba(74, 8, 19, 0.5)';
    ctx.lineWidth = 3;
    ctx.strokeRect(10, 10, w - 20, h - 20);

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.lineWidth = 1.2;
    ctx.strokeRect(14, 14, w - 28, h - 28);

    // 4. Instructions text on the gold foil
    ctx.fillStyle = '#3F0A10';
    ctx.font = '700 13px "Cinzel", serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('✦ ROYAL WEDDING REVEAL ✦', w / 2, h / 2 - 28);

    ctx.fillStyle = '#200307';
    ctx.font = '800 16px "Cinzel", serif';
    ctx.fillText('SCRATCH TO REVEAL DATES', w / 2, h / 2);

    ctx.fillStyle = '#4A0813';
    ctx.font = 'italic 13px "Cormorant Garamond", serif';
    ctx.fillText('Touch & rub with your finger or mouse to unseal', w / 2, h / 2 + 28);

    setIsScratched(false);
    setScratchPercent(0);
    hasTriggeredCelebration.current = false;
  }, []);

  useEffect(() => {
    initCanvas();
    const handleResize = () => {
      if (!isScratched) initCanvas();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [initCanvas, isScratched]);

  // Check scratch percentage
  const checkScratchPercentage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    try {
      const w = canvas.width;
      const h = canvas.height;
      const imgData = ctx.getImageData(0, 0, w, h);
      const pixels = imgData.data;
      let transparentCount = 0;
      const totalSampled = pixels.length / 16;

      for (let i = 3; i < pixels.length; i += 16) {
        if (pixels[i] === 0) {
          transparentCount++;
        }
      }

      const percent = Math.min(100, Math.round((transparentCount / totalSampled) * 100));
      setScratchPercent(percent);

      if (percent >= 35 && !hasTriggeredCelebration.current) {
        hasTriggeredCelebration.current = true;
        setIsScratched(true);
        triggerGoldCelebration();
      }
    } catch {
      // Safe fallback
    }
  };

  const triggerGoldCelebration = () => {
    confetti({
      particleCount: 65,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#FFEAA7', '#FFFDF9', '#8C1628', '#6F0D1C'],
      shapes: ['circle'],
    });
  };

  const scratchAt = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const x = (clientX - rect.left) * dpr;
    const y = (clientY - rect.top) * dpr;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 24 * dpr, 0, Math.PI * 2);
    ctx.fill();

    checkScratchPercentage();
  };

  // Mouse Handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    scratchAt(e.clientX, e.clientY);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    scratchAt(e.clientX, e.clientY);
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  // Touch Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    if (e.touches.length > 0) {
      scratchAt(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (e.touches.length > 0) {
      scratchAt(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const handleTouchEnd = () => {
    setIsDrawing(false);
  };

  const handleRevealAll = () => {
    setIsScratched(true);
    setScratchPercent(100);
    triggerGoldCelebration();
  };

  const handleReset = () => {
    initCanvas();
  };

  return (
    <section className="relative py-16 px-4 sm:px-6 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-[#4A0813]/90 border border-[#D4AF37]/50 text-[#F5E0A0] mb-3 shadow-md">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span className="font-serif-cormorant text-xs sm:text-sm tracking-[0.25em] uppercase font-bold text-gold-light-gradient">
            Royal Farmaan Reveal
          </span>
        </div>
        <h3 className="font-display-cinzel text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FFF5CC] tracking-wide">
          Scratch Card Reveal
        </h3>
        <p className="font-serif-cormorant italic text-base sm:text-lg text-[#F4E8D1]/80 mt-1 font-light">
          Rub below to reveal the sacred wedding dates of Priyanshu & Rupal
        </p>
      </div>

      {/* Card Envelope Frame */}
      <div
        ref={containerRef}
        className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden border-2 border-[#D4AF37] shadow-2xl royal-card"
      >
        {/* UNDERNEATH LAYER (Revealed Royal Wedding Dates) */}
        <div className="absolute inset-0 p-6 flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#2A050B] via-[#430712] to-[#200307]">
          {/* Subtle watermarked monogram */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-[#D4AF37] mb-2 shadow-xl bg-[#FFFDF9]">
            <img
              src={ASSETS.weddingLogo}
              alt="Priyanshu & Rupal Monogram"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <p className="font-serif-cormorant text-xs sm:text-sm tracking-[0.3em] text-[#F5E0A0] uppercase font-bold">
            SAVE THE AUSPICIOUS DATES
          </p>

          <h4 className="font-display-cinzel text-2xl sm:text-3xl md:text-4xl font-extrabold text-gold-gradient tracking-wider mt-1">
            25 & 26 NOVEMBER 2026
          </h4>

          <p className="font-serif-cormorant italic text-lg sm:text-xl text-[#FFF5CC] font-medium mt-1">
            Priyanshu Kocher & Rupal Jain
          </p>

          <div className="flex items-center justify-center gap-2 mt-2 text-xs sm:text-sm text-[#F4E8D1]/85 font-sans">
            <Calendar className="w-3.5 h-3.5 text-amber-400" />
            <span>Raipur Greens, Cherrikherri, Raipur</span>
          </div>

          {isScratched && (
            <div className="mt-3 animate-bounce inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-500/50 text-xs font-bold shadow-lg">
              <span>✨ You are cordially invited to grace our celebrations! ✨</span>
            </div>
          )}
        </div>

        {/* TOP SCRATCHABLE 24K GOLD CANVAS LAYER */}
        {!isScratched && (
          <canvas
            ref={canvasRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="absolute inset-0 w-full h-full cursor-pointer touch-none z-10"
            style={{ width: '100%', height: '100%' }}
          />
        )}
      </div>

      {/* Progress & Controls */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 px-2">
        <div className="flex items-center gap-2">
          {!isScratched ? (
            <span className="text-xs sm:text-sm font-sans text-[#F4E8D1]/80">
              Scratched: <strong className="text-amber-300 font-bold">{scratchPercent}%</strong>
            </span>
          ) : (
            <span className="text-xs sm:text-sm font-bold text-emerald-400 flex items-center gap-1.5">
              <span>✓</span> Dates Successfully Revealed!
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {!isScratched ? (
            <button
              onClick={handleRevealAll}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#4A0813] hover:bg-[#6F0D1C] border border-[#D4AF37]/60 text-[#FFF5CC] text-xs font-bold transition-all shadow-md focus:outline-none"
            >
              <Eye className="w-3.5 h-3.5 text-amber-400" />
              <span>Reveal Now</span>
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#4A0813] hover:bg-[#6F0D1C] border border-[#D4AF37]/60 text-[#FFF5CC] text-xs font-bold transition-all shadow-md focus:outline-none"
            >
              <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
              <span>Scratch Again</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
