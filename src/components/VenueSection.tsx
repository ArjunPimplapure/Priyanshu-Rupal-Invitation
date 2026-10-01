import React, { useState } from 'react';
import { MapPin, Navigation, Copy, Check, ExternalLink } from 'lucide-react';
import { WEDDING_DATA } from '../config/weddingData';

export const VenueSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    const fullText = `${WEDDING_DATA.venue.name}, ${WEDDING_DATA.venue.address}, ${WEDDING_DATA.venue.city}`;
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="venue" className="relative py-20 px-4 sm:px-6 max-w-4xl mx-auto">
      
      {/* Container with heavy 24k gold border and deep royal velvet backdrop */}
      <div className="relative rounded-[40px] royal-card border-2 border-[#D4AF37]/60 p-8 sm:p-12 md:p-16 shadow-2xl overflow-hidden text-center">
        
        {/* Animated Gold Sweep Bar */}
        <div className="absolute top-0 inset-x-0 h-[2px] animate-gold-sweep" />

        {/* Decorative Arch Lines */}
        <div className="absolute inset-3 border border-[#D4AF37]/25 rounded-[32px] pointer-events-none" />

        {/* Section Tag */}
        <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-[#4A0813]/90 border border-[#D4AF37]/50 text-[#F5E0A0] mb-6 shadow-md">
          <MapPin className="w-3.5 h-3.5 text-amber-400" />
          <span className="font-serif-cormorant text-xs sm:text-sm tracking-[0.25em] uppercase font-bold text-gold-light-gradient">
            Royal Celebration Venue
          </span>
        </div>

        {/* Venue Title in 24k Gold */}
        <h2 className="font-display-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FFF5CC] tracking-wide mb-3">
          {WEDDING_DATA.venue.name}
        </h2>

        {/* Full Address */}
        <p className="font-serif-cormorant italic text-xl sm:text-2xl text-[#F5E0A0] max-w-lg mx-auto font-light">
          {WEDDING_DATA.venue.address}
        </p>
        <p className="font-sans text-xs sm:text-sm tracking-widest uppercase text-amber-300 font-bold mt-2">
          {WEDDING_DATA.venue.city}
        </p>

        {/* Ornamental divider */}
        <div className="flex items-center justify-center gap-4 my-8">
          <span className="h-[1px] w-20 bg-gradient-to-r from-transparent to-[#D4AF37]" />
          <span className="text-amber-400 text-sm select-none">🪔</span>
          <span className="h-[1px] w-20 bg-gradient-to-l from-transparent to-[#D4AF37]" />
        </div>

        {/* Location Directions Tip */}
        <p className="font-sans text-xs sm:text-sm text-[#F4E8D1]/85 max-w-md mx-auto mb-8 leading-relaxed font-light">
          {WEDDING_DATA.venue.landmarkTip}
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WEDDING_DATA.venue.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#D4AF37] via-[#F5E0A0] to-[#B88E3E] text-[#2A050B] font-display-cinzel text-sm sm:text-base font-extrabold tracking-wider shadow-xl hover:shadow-[0_10px_25px_rgba(212,175,55,0.4)] transition-all duration-300 hover:scale-103 focus:outline-none group"
          >
            <span className="text-lg">📍</span>
            <span>VIEW LOCATION</span>
            <ExternalLink className="w-4 h-4 text-[#2A050B] group-hover:translate-x-0.5 transition-transform" />
          </a>

          {/* Copy Address Button */}
          <button
            onClick={handleCopyAddress}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-[#4A0813] hover:bg-[#6F0D1C] text-[#FFF5CC] border border-[#D4AF37]/60 font-sans text-xs sm:text-sm font-bold transition-all shadow-md focus:outline-none"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 font-bold">Address Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-amber-400" />
                <span>Copy Full Address</span>
              </>
            )}
          </button>
        </div>

        {/* Subtle Map Coordinates Badge */}
        <div className="mt-8 pt-6 border-t border-[#D4AF37]/20 flex items-center justify-center gap-2 text-xs text-[#F4E8D1]/70">
          <Navigation className="w-3.5 h-3.5 text-amber-400" />
          <span>Tap "View Location" to navigate directly via Google Maps</span>
        </div>

      </div>

    </section>
  );
};
