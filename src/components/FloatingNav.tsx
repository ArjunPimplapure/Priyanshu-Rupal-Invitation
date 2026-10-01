import React, { useState, useEffect } from 'react';
import { Home, Calendar, MapPin, RotateCcw } from 'lucide-react';

interface FloatingNavProps {
  onReplayInvitation: () => void;
}

export const FloatingNav: React.FC<FloatingNavProps> = ({ onReplayInvitation }) => {
  const [activeSection, setActiveSection] = useState<'hero' | 'events' | 'venue'>('hero');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      const eventsEl = document.getElementById('events');
      const venueEl = document.getElementById('venue');

      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      if (venueEl && scrollPos >= venueEl.offsetTop) {
        setActiveSection('venue');
      } else if (eventsEl && scrollPos >= eventsEl.offsetTop) {
        setActiveSection('events');
      } else {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      aria-label="Invitation Navigation"
      className={`fixed bottom-5 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex items-center gap-1 sm:gap-2 px-3.5 sm:px-4 py-2 rounded-full bg-[#3D060F]/95 backdrop-blur-md border border-[#D4AF37]/60 shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
        
        {/* Home */}
        <button
          onClick={() => scrollToSection('hero')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
            activeSection === 'hero'
              ? 'bg-gradient-to-r from-[#D4AF37] to-[#B88E3E] text-[#2A050B] shadow-md'
              : 'text-[#F5E0A0]/80 hover:text-white'
          }`}
        >
          <Home className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Home</span>
        </button>

        {/* Events */}
        <button
          onClick={() => scrollToSection('events')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
            activeSection === 'events'
              ? 'bg-gradient-to-r from-[#D4AF37] to-[#B88E3E] text-[#2A050B] shadow-md'
              : 'text-[#F5E0A0]/80 hover:text-white'
          }`}
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Events</span>
        </button>

        {/* Venue */}
        <button
          onClick={() => scrollToSection('venue')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
            activeSection === 'venue'
              ? 'bg-gradient-to-r from-[#D4AF37] to-[#B88E3E] text-[#2A050B] shadow-md'
              : 'text-[#F5E0A0]/80 hover:text-white'
          }`}
        >
          <MapPin className="w-3.5 h-3.5" />
          <span>Venue</span>
        </button>

        {/* Divider */}
        <div className="h-4 w-[1px] bg-[#D4AF37]/40 mx-0.5" />

        {/* Replay Envelope */}
        <button
          onClick={onReplayInvitation}
          className="flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-medium text-amber-300/80 hover:text-amber-200 transition-colors"
          title="Replay Envelope Opening"
        >
          <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
          <span className="hidden md:inline">Replay</span>
        </button>

      </div>
    </nav>
  );
};
