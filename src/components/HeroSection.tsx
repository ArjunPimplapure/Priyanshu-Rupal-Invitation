import React from 'react';
import { WEDDING_DATA } from '../config/weddingData';
import { ASSETS } from '../config/assets';
import { HangingBells } from './HangingBells';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[95vh] flex flex-col items-center justify-center pt-20 pb-16 px-4 sm:px-6">
      
      {/* Authentic Hanging Temple Bells & Toran at Top */}
      <HangingBells />

      {/* Main Royal Jharokha Arch Invitation Card */}
      <div className="relative w-full max-w-3xl mx-auto p-6 sm:p-12 md:p-16 rounded-[40px] royal-card border-2 border-[#D4AF37]/60 shadow-2xl overflow-hidden mt-6">
        
        {/* Animated Gold Foil Highlight Sweep across top border */}
        <div className="absolute top-0 inset-x-0 h-[2.5px] animate-gold-sweep" />

        {/* Intricate Royal Indian Ornate Inner Borders */}
        <div className="absolute inset-2 sm:inset-3 border border-[#D4AF37]/35 rounded-[34px] pointer-events-none" />
        <div className="absolute inset-3 sm:inset-5 border border-[#D4AF37]/20 rounded-[28px] pointer-events-none" />

        {/* Royal Corner Paisleys / Kalash Ornaments */}
        <div className="absolute top-4 left-4 text-[#D4AF37]/80 select-none">
          <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor">
            <path d="M4 4h12v2H6v10H4V4z" fill="currentColor" stroke="none" />
            <circle cx="14" cy="14" r="2.5" fill="currentColor" />
            <path d="M6 6 Q 16 6 16 16" stroke="currentColor" strokeWidth="1.2" fill="none" />
          </svg>
        </div>
        <div className="absolute top-4 right-4 text-[#D4AF37]/80 select-none">
          <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor">
            <path d="M28 4h-12v2h10v10h2V4z" fill="currentColor" stroke="none" />
            <circle cx="18" cy="14" r="2.5" fill="currentColor" />
            <path d="M26 6 Q 16 6 16 16" stroke="currentColor" strokeWidth="1.2" fill="none" />
          </svg>
        </div>
        <div className="absolute bottom-4 left-4 text-[#D4AF37]/80 select-none">
          <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor">
            <path d="M4 28h12v-2H6v-10H4v12z" fill="currentColor" stroke="none" />
            <circle cx="14" cy="18" r="2.5" fill="currentColor" />
            <path d="M6 26 Q 16 26 16 16" stroke="currentColor" strokeWidth="1.2" fill="none" />
          </svg>
        </div>
        <div className="absolute bottom-4 right-4 text-[#D4AF37]/80 select-none">
          <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor">
            <path d="M28 28h-12v-2h10v-10h2v12z" fill="currentColor" stroke="none" />
            <circle cx="18" cy="18" r="2.5" fill="currentColor" />
            <path d="M26 26 Q 16 26 16 16" stroke="currentColor" strokeWidth="1.2" fill="none" />
          </svg>
        </div>

        {/* Auspicious Sacred Jain Invocation */}
        <div className="text-center mb-6 pt-2">
          {/* Ceremonial Kalash & Lotus Icon */}
          <div className="inline-flex items-center justify-center gap-3 mb-2">
            <span className="text-[#D4AF37] text-lg select-none">🕉</span>
            <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
            <span className="text-amber-400 text-xs">✦</span>
            <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
            <span className="text-[#D4AF37] text-lg select-none">🪔</span>
          </div>

          <h2 className="font-serif-cormorant text-xl sm:text-2xl md:text-3xl tracking-[0.3em] font-bold text-gold-gradient select-none">
            {WEDDING_DATA.invocation}
          </h2>
          
          <div className="flex items-center justify-center gap-3 mt-2">
            <span className="h-[1px] w-14 bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />
            <span className="text-[#D4AF37] text-xs">❖</span>
            <span className="h-[1px] w-14 bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />
          </div>
        </div>

        {/* Primary Wedding Logo / Monogram with Heavy Glowing Ring */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="relative group w-40 h-40 sm:w-52 sm:h-52 rounded-full p-2.5 transition-transform duration-700 hover:scale-105">
            {/* Shimmering Golden Halo aura */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#D4AF37]/30 via-[#F5E0A0]/20 to-[#6F0D1C]/30 blur-2xl group-hover:bg-[#D4AF37]/45 transition-all duration-700 animate-pulse" />
            
            {/* Heavy Ornate Filigree Ring with Embossed Border */}
            <div className="relative w-full h-full rounded-full p-1.5 bg-gradient-to-tr from-[#8A641E] via-[#F5E0A0] to-[#D4AF37] shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#2A050B] bg-[#FFFDF9] shadow-inner">
                <img
                  src={ASSETS.weddingLogo}
                  alt="Priyanshu & Rupal Wedding Monogram"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Intro Blessings Tagline */}
        <div className="text-center mb-5 sm:mb-6">
          <p className="font-serif-cormorant italic text-lg sm:text-xl md:text-2xl text-[#F5E0A0] tracking-wider max-w-lg mx-auto font-light">
            {WEDDING_DATA.blessingIntro}
          </p>
        </div>

        {/* Couple Names Presentation with 24K Heavy Gold Effect */}
        <div className="text-center space-y-3 sm:space-y-4 my-6">
          {/* Groom */}
          <div>
            <h1 className="font-display-cinzel text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wider">
              <span className="text-gold-gradient">{WEDDING_DATA.groom.name}</span>
            </h1>
            <p className="font-serif-cormorant italic text-sm sm:text-base text-[#F4E8D1]/80 mt-1.5 tracking-widest font-normal">
              S/o {WEDDING_DATA.groom.father}
            </p>
          </div>

          {/* Ampersand Royal Flourish with Twin Diyas */}
          <div className="flex items-center justify-center gap-4 py-1">
            <span className="h-[1.5px] w-16 sm:w-28 bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-[#D4AF37]" />
            <div className="flex items-center gap-2">
              <span className="text-amber-400 text-sm animate-diya-glow select-none">🪔</span>
              <span className="font-script-alex text-5xl sm:text-6xl text-[#F5E0A0] leading-none select-none drop-shadow-lg">
                &
              </span>
              <span className="text-amber-400 text-sm animate-diya-glow select-none">🪔</span>
            </div>
            <span className="h-[1.5px] w-16 sm:w-28 bg-gradient-to-l from-transparent via-[#D4AF37]/60 to-[#D4AF37]" />
          </div>

          {/* Bride */}
          <div>
            <h2 className="font-display-cinzel text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wider">
              <span className="text-gold-gradient">{WEDDING_DATA.bride.name}</span>
            </h2>
          </div>
        </div>

        {/* Royal Ornamental Divider */}
        <div className="flex items-center justify-center gap-3 my-6 sm:my-8">
          <span className="h-[1px] w-16 sm:w-28 bg-gradient-to-r from-transparent to-[#D4AF37]/60" />
          <div className="flex items-center gap-2 text-[#D4AF37]">
            <span className="text-xs">✦</span>
            <span className="text-xl font-serif-cormorant">❦</span>
            <span className="text-xs">✦</span>
          </div>
          <span className="h-[1px] w-16 sm:w-28 bg-gradient-to-l from-transparent to-[#D4AF37]/60" />
        </div>

        {/* Heartfelt Wedding Invitation Message */}
        <div className="max-w-xl mx-auto text-center px-4">
          <blockquote className="font-serif-cormorant text-lg sm:text-xl md:text-2xl leading-relaxed text-[#FFFDF9] italic font-light">
            "{WEDDING_DATA.invitationMessage}"
          </blockquote>
          <p className="font-sans text-xs sm:text-sm text-[#F4E8D1]/85 leading-relaxed mt-4 font-light">
            {WEDDING_DATA.invitationNote}
          </p>
        </div>

        {/* Date Anchor Royal Gold Plaque */}
        <div className="mt-8 pt-6 border-t border-[#D4AF37]/25 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-[#F5E0A0] font-sans">
          <span className="font-bold text-[#FFF5CC] tracking-wide">25 & 26 November 2026</span>
          <span className="text-[#D4AF37]">·</span>
          <span>Raipur Greens, Raipur</span>
          <span className="text-[#D4AF37]">·</span>
          <span className="font-serif-cormorant italic font-semibold text-gold-light-gradient">The Kocher Family</span>
        </div>

      </div>

      {/* Downward Scroll Indicator with Gold Sheen */}
      <a
        href="#events"
        className="mt-8 flex flex-col items-center gap-1.5 text-[#F5E0A0] hover:text-white transition-colors focus:outline-none group"
        aria-label="Scroll down to view wedding events schedule"
      >
        <span className="font-serif-cormorant text-xs tracking-[0.25em] uppercase font-bold text-gold-light-gradient">
          Explore Celebrations
        </span>
        <svg
          className="w-5 h-5 animate-bounce text-[#D4AF37] group-hover:text-[#F5E0A0]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </a>

    </section>
  );
};
