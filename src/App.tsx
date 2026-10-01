/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LuxuryEnvelope } from './components/LuxuryEnvelope';
import { HeroSection } from './components/HeroSection';
import { CountdownTimer } from './components/CountdownTimer';
import { WeddingScratchCard } from './components/WeddingScratchCard';
import { EventTimeline } from './components/EventTimeline';
import { VenueSection } from './components/VenueSection';
import { ClosingSection } from './components/ClosingSection';
import { FloatingMusicControl } from './components/FloatingMusicControl';
import { SparkleCanvas } from './components/SparkleCanvas';
import { FloatingNav } from './components/FloatingNav';
import { ASSETS } from './config/assets';

export default function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  const handleOpenComplete = () => {
    setIsEnvelopeOpen(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReplayInvitation = () => {
    setIsEnvelopeOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="relative min-h-screen bg-[#250409] text-[#FAF4E8] selection:bg-[#D4AF37] selection:text-[#2A050B] overflow-x-hidden heavy-indian-backdrop">
      
      {/* Heavy Royal Indian Wedding Velvet & Zardozi Backdrop Image */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-30 mix-blend-overlay bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${ASSETS.invitationBackground})` }}
      />

      {/* Floating Celebratory Red Rose Petals & Golden Zari Dust */}
      <SparkleCanvas intensity={isEnvelopeOpen ? 'celebratory' : 'subtle'} />

      {/* Floating Gold Soundwave Music Controller */}
      <FloatingMusicControl />

      {/* 1. Opening Luxury Indian Shagun Envelope Experience */}
      {!isEnvelopeOpen && (
        <LuxuryEnvelope onOpenComplete={handleOpenComplete} />
      )}

      {/* 2. Main Wedding Invitation (Revealed after envelope unseals) */}
      <main
        className={`transition-opacity duration-1000 ${
          isEnvelopeOpen ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden pointer-events-none'
        }`}
      >
        {/* Deep Ruby & Gold Ambient Diya Glows */}
        <div className="fixed inset-0 pointer-events-none z-0 opacity-60">
          <div className="absolute top-10 -left-20 w-[500px] h-[500px] rounded-full bg-[#D4AF37]/10 blur-[130px]" />
          <div className="absolute top-1/3 -right-20 w-[550px] h-[550px] rounded-full bg-[#8C1628]/25 blur-[140px]" />
          <div className="absolute top-2/3 -left-20 w-[500px] h-[500px] rounded-full bg-[#D4AF37]/12 blur-[130px]" />
          <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] rounded-full bg-[#6F0D1C]/25 blur-[140px]" />
        </div>

        <div className="relative z-10 space-y-6">
          {/* Royal Palace Jharokha Hero Section with Temple Bells */}
          <HeroSection />

          {/* Live Royal Countdown Timer for 26th November */}
          <CountdownTimer />

          {/* Interactive 24K Gold Scratch Card in Middle */}
          <WeddingScratchCard />

          {/* Events Schedule with AI Generated Visuals */}
          <EventTimeline />

          {/* Royal Venue & Location Directions */}
          <VenueSection />

          {/* Emotional Closing & Family Signature */}
          <ClosingSection onReplayInvitation={handleReplayInvitation} />
        </div>

        {/* Floating Navigation Bar */}
        <FloatingNav onReplayInvitation={handleReplayInvitation} />
      </main>

    </div>
  );
}
