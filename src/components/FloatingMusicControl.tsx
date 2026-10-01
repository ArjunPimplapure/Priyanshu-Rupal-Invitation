import React, { useEffect, useState } from 'react';
import { VolumeX } from 'lucide-react';
import { weddingAudio } from '../utils/audioPlayer';
import { ASSETS } from '../config/assets';

export const FloatingMusicControl: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const unsubscribe = weddingAudio.subscribe((playing) => {
      setIsPlaying(playing);
    });
    return unsubscribe;
  }, []);

  const handleToggle = async () => {
    await weddingAudio.toggleMusic();
  };

  return (
    <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 flex items-center">
      {/* Tooltip on hover/tap */}
      {showTooltip && (
        <div className="mr-3 px-4 py-2 rounded-2xl bg-[#3D060F]/95 backdrop-blur-md text-[#FFF5CC] text-xs shadow-xl border border-[#D4AF37]/60 whitespace-nowrap animate-fadeIn">
          <p className="font-bold text-amber-300">{ASSETS.musicTitle}</p>
          <p className="text-[11px] text-[#F4E8D1]/80 font-light">{isPlaying ? 'Tap to pause' : 'Tap to play wedding music'}</p>
        </div>
      )}

      <button
        onClick={handleToggle}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label={isPlaying ? 'Pause background wedding music' : 'Play background wedding music'}
        className={`group relative flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-full backdrop-blur-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 ${
          isPlaying
            ? 'bg-[#4A0813] border-2 border-[#D4AF37] shadow-[0_4px_25px_rgba(212,175,55,0.5)]'
            : 'bg-[#2A050B]/90 border border-[#D4AF37]/50 hover:border-[#D4AF37] shadow-lg'
        }`}
      >
        {/* Subtle spinning gold dashed ring when playing */}
        {isPlaying && (
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#D4AF37]/60 animate-[spin_10s_linear_infinite]" />
        )}

        {/* Audio Icon & Animated Sound Wave Bars */}
        <div className="flex items-center gap-1">
          {isPlaying ? (
            <div className="flex items-end gap-[3px] h-4">
              <span className="w-[3px] bg-amber-300 rounded-full animate-[pulse_0.8s_ease-in-out_infinite] h-2.5" />
              <span className="w-[3px] bg-[#D4AF37] rounded-full animate-[pulse_1.1s_ease-in-out_infinite_0.2s] h-4" />
              <span className="w-[3px] bg-yellow-100 rounded-full animate-[pulse_0.9s_ease-in-out_infinite_0.4s] h-3" />
            </div>
          ) : (
            <VolumeX className="w-5 h-5 text-[#F5E0A0] group-hover:text-amber-300 transition-colors" />
          )}
        </div>
      </button>
    </div>
  );
};
