import React, { useState } from 'react';
import { Sparkles, Clock, Calendar, Check, Music2, Flame, Heart, Crown, Gift, SunMedium } from 'lucide-react';
import { WEDDING_DATA, WeddingEvent } from '../config/weddingData';

export const EventTimeline: React.FC = () => {
  const [activeDateTab, setActiveDateTab] = useState<'all' | 'day1' | 'day2'>('all');
  const [copiedEventId, setCopiedEventId] = useState<string | null>(null);

  // Helper to render authentic Indian motifs for each ritual
  const renderEventIcon = (type: WeddingEvent['iconType']) => {
    switch (type) {
      case 'carnival':
        return <SunMedium className="w-4 h-4 text-amber-400" />;
      case 'mayra':
        return <Gift className="w-4 h-4 text-purple-300" />;
      case 'sangeet':
        return <Music2 className="w-4 h-4 text-rose-300" />;
      case 'baarat':
        return <Crown className="w-4 h-4 text-amber-300" />;
      case 'phere':
        return <Flame className="w-4 h-4 text-orange-400" />;
      case 'vidai':
        return <Heart className="w-4 h-4 text-pink-300" />;
      case 'reception':
        return <Sparkles className="w-4 h-4 text-emerald-300" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#D4AF37]" />;
    }
  };

  const createGoogleCalendarLink = (event: WeddingEvent) => {
    const isDay1 = event.dateKey === 'day1';
    const dateStr = isDay1 ? '20261125' : '20261126';
    
    let startHour = '090000';
    if (event.name === 'CARNIVAL') startHour = '090000';
    else if (event.name === 'MAYRA') startHour = '130000';
    else if (event.name === 'SANGEET') startHour = '200000';
    else if (event.name === 'BAARAT') startHour = '100000';
    else if (event.name === 'PHERE') startHour = '120000';
    else if (event.name === 'VIDAI') startHour = '150000';
    else if (event.name === 'RECEPTION') startHour = '200000';

    const title = encodeURIComponent(`${event.name} — Priyanshu & Rupal Wedding`);
    const details = encodeURIComponent(`${event.description}\n\nVenue: ${WEDDING_DATA.venue.name}, ${WEDDING_DATA.venue.address}`);
    const location = encodeURIComponent(`${WEDDING_DATA.venue.name}, ${WEDDING_DATA.venue.address}`);

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dateStr}T${startHour}/${dateStr}T230000&details=${details}&location=${location}`;
  };

  const handleShareEvent = (event: WeddingEvent) => {
    const text = `Join us for ${event.name} (${event.time}, ${event.date}) at ${WEDDING_DATA.venue.name} celebrating the wedding of Priyanshu Kocher & Rupal Jain. Details: ${window.location.href}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedEventId(event.id);
      setTimeout(() => setCopiedEventId(null), 2500);
    }
  };

  return (
    <section id="events" className="relative py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center mb-12 sm:mb-16">
        <p className="font-serif-cormorant text-xs sm:text-sm tracking-[0.3em] uppercase text-[#F5E0A0] font-bold text-gold-light-gradient">
          Sacred Ceremonies & Celebrations
        </p>
        <h2 className="font-display-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FFF5CC] tracking-wide mt-2">
          Wedding Itinerary
        </h2>
        <div className="flex items-center justify-center gap-3 mt-3">
          <span className="h-[1px] w-14 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
          <span className="text-[#D4AF37] text-xs">✦</span>
          <span className="h-[1px] w-14 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
        </div>
        <p className="font-sans text-xs sm:text-sm text-[#F4E8D1]/80 mt-3 max-w-md mx-auto font-light">
          We eagerly look forward to your auspicious presence and heartfelt blessings at every celebration.
        </p>

        {/* Date Filter Tabs with Royal Velvet & Gold finish */}
        <div className="inline-flex items-center gap-1.5 p-1.5 bg-[#3D060F]/90 backdrop-blur-md rounded-2xl border border-[#D4AF37]/50 shadow-xl mt-7">
          <button
            onClick={() => setActiveDateTab('all')}
            className={`px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all whitespace-nowrap ${
              activeDateTab === 'all'
                ? 'bg-gradient-to-r from-[#D4AF37] to-[#B88E3E] text-[#2A050B] shadow-lg'
                : 'text-[#F5E0A0]/80 hover:text-[#FFF5CC] hover:bg-[#5E0B18]/50'
            }`}
          >
            All Celebrations (7 Events)
          </button>
          <button
            onClick={() => setActiveDateTab('day1')}
            className={`px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all whitespace-nowrap ${
              activeDateTab === 'day1'
                ? 'bg-gradient-to-r from-[#D4AF37] to-[#B88E3E] text-[#2A050B] shadow-lg'
                : 'text-[#F5E0A0]/80 hover:text-[#FFF5CC] hover:bg-[#5E0B18]/50'
            }`}
          >
            25 November (Day 1)
          </button>
          <button
            onClick={() => setActiveDateTab('day2')}
            className={`px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all whitespace-nowrap ${
              activeDateTab === 'day2'
                ? 'bg-gradient-to-r from-[#D4AF37] to-[#B88E3E] text-[#2A050B] shadow-lg'
                : 'text-[#F5E0A0]/80 hover:text-[#FFF5CC] hover:bg-[#5E0B18]/50'
            }`}
          >
            26 November (Day 2)
          </button>
        </div>
      </div>

      {/* Days Loop */}
      <div className="space-y-16">
        {WEDDING_DATA.dates
          .filter((day) => activeDateTab === 'all' || activeDateTab === day.key)
          .map((day, dayIndex) => {
            // Symmetrical grid layout:
            // Day 1 has 3 events -> 3 columns (md:grid-cols-3)
            // Day 2 has 4 events -> 4 columns on large screens (lg:grid-cols-4), 2x2 on tablets (sm:grid-cols-2)
            const gridLayoutClass =
              day.events.length === 3
                ? 'grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7'
                : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6';

            return (
              <div key={day.key} className="relative">
                
                {/* Day Header Banner with Royal Velvet Scroll */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-[1.5px] flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-[#D4AF37]" />
                  <div className="text-center px-6 py-3 rounded-2xl bg-gradient-to-r from-[#4A0813] via-[#35050D] to-[#4A0813] border-2 border-[#D4AF37]/60 shadow-xl">
                    <span className="font-serif-cormorant text-xs sm:text-sm tracking-[0.25em] text-[#F5E0A0] uppercase font-bold block">
                      {day.dayOfWeek}
                    </span>
                    <h3 className="font-display-cinzel text-xl sm:text-2xl md:text-3xl font-extrabold text-gold-gradient tracking-wide">
                      {day.dateFormatted}
                    </h3>
                  </div>
                  <div className="h-[1.5px] flex-1 bg-gradient-to-l from-transparent via-[#D4AF37]/50 to-[#D4AF37]" />
                </div>

                {/* Events Cards Grid - Symmetrically Aligned with Equal Heights */}
                <div className={gridLayoutClass}>
                  {day.events.map((event) => (
                    <div
                      key={event.id}
                      className="group relative rounded-3xl royal-card border-2 border-[#D4AF37]/45 shadow-xl hover:shadow-[0_20px_45px_rgba(212,175,55,0.25)] transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col h-full"
                    >
                      {/* Event AI Generated Image Banner - Fixed 16:10 aspect ratio */}
                      <div className="relative w-full aspect-[16/10] overflow-hidden bg-black/40 shrink-0">
                        <img
                          src={event.image}
                          alt={`${event.name} celebration`}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                          referrerPolicy="no-referrer"
                        />
                        
                        {/* Rich velvet gradient scrim */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#200307] via-[#200307]/30 to-transparent" />

                        {/* Floating Time Pill with Gold Foil Rim */}
                        <div className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2A050B]/90 backdrop-blur-md border border-[#D4AF37] text-[#FFF5CC] shadow-lg">
                          <Clock className="w-3 h-3 text-amber-400" />
                          <span className="font-display-cinzel text-xs font-bold tracking-wider">
                            {event.time}
                          </span>
                        </div>

                        {/* Ritual Icon Badge */}
                        <div className="absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-[#4A0813]/95 backdrop-blur-md border-2 border-[#D4AF37] flex items-center justify-center shadow-lg">
                          {renderEventIcon(event.iconType)}
                        </div>
                      </div>

                      {/* Card Body - Flex Column for Perfect Vertical Alignment */}
                      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                        <div>
                          {/* Event Name Header - Standardized min-height */}
                          <div className="min-h-[2.5rem] flex items-center mb-2">
                            <h4 className="font-display-cinzel text-xl sm:text-2xl font-extrabold text-[#FFF5CC] tracking-wide group-hover:text-amber-300 transition-colors">
                              {event.name}
                            </h4>
                          </div>

                          {/* Event Description - Standardized min-height */}
                          <div className="min-h-[4.25rem] flex items-start mb-3">
                            <p className="font-sans text-xs sm:text-sm text-[#F4E8D1]/85 leading-relaxed font-light">
                              {event.description}
                            </p>
                          </div>

                          {/* Traditional Significance - Standardized min-height */}
                          <div className="pt-2.5 border-t border-[#D4AF37]/20 min-h-[3.75rem] flex items-center">
                            <p className="font-serif-cormorant italic text-sm text-[#F5E0A0]/90 leading-relaxed font-light line-clamp-2">
                              {event.traditionalSignificance}
                            </p>
                          </div>
                        </div>

                        {/* Card Actions - Pinned to bottom with mt-auto */}
                        <div className="mt-5 pt-4 border-t border-[#D4AF37]/25 flex items-center justify-between gap-2">
                          {/* Add to Google Calendar */}
                          <a
                            href={createGoogleCalendarLink(event)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-sans font-bold text-amber-300 hover:text-white transition-colors"
                            title="Add to Google Calendar"
                          >
                            <Calendar className="w-3.5 h-3.5" />
                            <span>Add to Calendar</span>
                          </a>

                          {/* Share event timing */}
                          <button
                            onClick={() => handleShareEvent(event)}
                            className="inline-flex items-center gap-1 text-xs font-sans text-[#F4E8D1]/70 hover:text-amber-300 transition-colors"
                            title="Copy event details"
                          >
                            {copiedEventId === event.id ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                                <span className="text-emerald-400 font-bold">Copied</span>
                              </>
                            ) : (
                              <span>Share</span>
                            )}
                          </button>
                        </div>
                      </div>

                    </div>
                  ))}
                </div>

                {/* Day divider flourish if day1 */}
                {dayIndex === 0 && activeDateTab === 'all' && (
                  <div className="flex items-center justify-center gap-4 my-14 opacity-85">
                    <span className="h-[1px] w-28 bg-gradient-to-r from-transparent to-[#D4AF37]" />
                    <span className="text-[#D4AF37] text-lg font-serif-cormorant">❦</span>
                    <span className="h-[1px] w-28 bg-gradient-to-l from-transparent to-[#D4AF37]" />
                  </div>
                )}

              </div>
            );
          })}
      </div>

    </section>
  );
};
