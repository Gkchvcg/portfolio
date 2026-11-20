'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Film, Moon, Music, Layers, Volume2 } from 'lucide-react';
import { SakuraPetals } from './SakuraPetals';
import { BatIcon } from '../gotham/BatIcon';
import { sound, PIANO_FREQUENCIES } from './soundEngine';

export function AnimeCinemaSection() {
  const [activeTab, setActiveTab] = useState<'ylia' | 'noir' | 'cinema'>('ylia');
  const [activeKey, setActiveKey] = useState<number | null>(null);

  // Piano keys for the interactive Your Lie in April footer motif
  const pianoKeys = [
    { note: 'C', keyChar: 'A', isBlack: false },
    { note: 'C#', keyChar: 'W', isBlack: true },
    { note: 'D', keyChar: 'S', isBlack: false },
    { note: 'D#', keyChar: 'E', isBlack: true },
    { note: 'E', keyChar: 'D', isBlack: false },
    { note: 'F', keyChar: 'F', isBlack: false },
    { note: 'F#', keyChar: 'T', isBlack: true },
    { note: 'G', keyChar: 'G', isBlack: false },
    { note: 'G#', keyChar: 'Y', isBlack: true },
    { note: 'A', keyChar: 'H', isBlack: false },
    { note: 'A#', keyChar: 'U', isBlack: true },
    { note: 'B', keyChar: 'J', isBlack: false },
    { note: 'C2', keyChar: 'K', isBlack: false },
    { note: 'C#2', keyChar: 'O', isBlack: true },
    { note: 'D2', keyChar: 'L', isBlack: false },
  ];

  const handlePlayKey = (note: string, idx: number) => {
    setActiveKey(idx);
    const freq = PIANO_FREQUENCIES[note];
    if (freq) {
      sound.playPiano(freq);
    }
    setTimeout(() => {
      setActiveKey((prev) => (prev === idx ? null : prev));
    }, 250);
  };

  // Keyboard shortcut listener for piano keys
  useEffect(() => {
    if (activeTab !== 'ylia') return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      const char = e.key.toUpperCase();
      const foundIdx = pianoKeys.findIndex((k) => k.keyChar === char);
      if (foundIdx !== -1) {
        e.preventDefault();
        handlePlayKey(pianoKeys[foundIdx].note, foundIdx);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeTab]);

  return (
    <div className="relative rounded-sm overflow-hidden border border-[#232A38] bg-[#0B0E14] text-[#E2E8F0] p-6 sm:p-10 shadow-2xl batcomputer-scanlines">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#162238]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#D4A338]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Sakura Petals when on YLIA tab */}
      {activeTab === 'ylia' && <SakuraPetals count={24} />}

      {/* Section Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-[#232A38]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm text-xs font-mono font-medium bg-[#12161F] border border-[#232A38] text-[#D4A338] mb-3">
            <BatIcon className="w-3.5 h-2 text-[#D4A338]" />
            <span>CINEMATIC ARCHITECTURE • STORYTELLING</span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wider text-[#E2E8F0] flex items-center gap-3">
            Cinema, Anime & Poetic Noir
          </h3>
          <p className="text-sm text-[#8B95A5] mt-2 max-w-2xl leading-relaxed">
            Stories that shaped my visual empathy and emotional depth—from the tear-soaked sakura blossoms of Kousei and Kaori to the rain-drenched deterministic labyrinths of Winden and Gotham.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-sm bg-[#12161F] border border-[#232A38] self-start md:self-auto">
          <button
            onClick={() => setActiveTab('ylia')}
            className={`px-3 py-1.5 rounded-sm text-xs font-mono uppercase tracking-wider transition-all ${
              activeTab === 'ylia'
                ? 'bg-[#D4A338] text-black font-semibold shadow-sm'
                : 'text-[#8B95A5] hover:text-[#E2E8F0]'
            }`}
          >
            🌸 Your Lie in April
          </button>
          <button
            onClick={() => setActiveTab('noir')}
            className={`px-3 py-1.5 rounded-sm text-xs font-mono uppercase tracking-wider transition-all ${
              activeTab === 'noir'
                ? 'bg-[#D4A338] text-black font-semibold shadow-sm'
                : 'text-[#8B95A5] hover:text-[#E2E8F0]'
            }`}
          >
            🦇 Batman & Dark
          </button>
          <button
            onClick={() => setActiveTab('cinema')}
            className={`px-3 py-1.5 rounded-sm text-xs font-mono uppercase tracking-wider transition-all ${
              activeTab === 'cinema'
                ? 'bg-[#D4A338] text-black font-semibold shadow-sm'
                : 'text-[#8B95A5] hover:text-[#E2E8F0]'
            }`}
          >
            🎬 Indie Cinema & Actors
          </button>
        </div>
      </div>

      {/* Tab 1: Your Lie in April (Shigatsu wa Kimi no Uso) */}
      {activeTab === 'ylia' && (
        <motion.div
          key="ylia"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4 }}
          className="relative z-10 space-y-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Art Showcase */}
            <div className="lg:col-span-6 relative aspect-[16/10] rounded-sm overflow-hidden border border-[#232A38] group shadow-2xl">
              <Image
                src="/images/about/ylia-hero-8k.jpg"
                alt="Your Lie in April - Kaori Miyazono and Kousei Arima under Cherry Blossoms"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-[#0B0E14]/40 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-sm bg-[#050608]/80 backdrop-blur-md border border-[#232A38]">
                <div className="flex items-center gap-2 text-[11px] font-mono text-[#D4A338]">
                  <BatIcon className="w-3.5 h-2 text-[#D4A338]" />
                  <span>Kousei Arima & Kaori Miyazono • Chopin Ballade No. 1</span>
                </div>
                <p className="text-xs text-[#E2E8F0] italic mt-1 line-clamp-2">
                  &quot;Was I able to live inside someone&apos;s heart? Was I able to live inside your heart?&quot;
                </p>
              </div>
            </div>

            {/* Narrative & Poetic Details */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#D4A338]">
                <Music className="w-4 h-4 text-[#D4A338]" />
                <span>SPRING 2014 • NAOSHI ARAKAWA MASTERPIECE</span>
              </div>
              <h4 className="font-display text-2xl font-bold uppercase tracking-wider text-[#E2E8F0]">
                Colors In A Monochrome World
              </h4>
              <p className="text-xs sm:text-sm text-[#8B95A5] leading-relaxed">
                <em className="text-[#E2E8F0] font-medium">Your Lie in April</em> isn&apos;t simply an anime—it is an emotional sanctuary. When Kousei lost his ability to hear the notes of the piano after trauma, Kaori didn&apos;t tell him to move on; she handed him her violin, dragged him back onto the stage, and showed him that music is about reaching another soul.
              </p>
              <p className="text-xs sm:text-sm text-[#8B95A5] leading-relaxed">
                The visual palette transitions from desaturated blue-grey to radiant pastels whenever Kaori plays. It taught me that technical precision (the metronome) is hollow without heart and emotional intent.
              </p>

              {/* Letter Quote Excerpt */}
              <div className="p-4 rounded-sm bg-[#12161F] border border-[#232A38] text-xs sm:text-sm text-[#E2E8F0] italic leading-relaxed">
                &quot;Spring will be here soon. A spring without you... is coming. But I met you, and the spring that you left behind is so vibrant that it hurts.&quot;
              </div>

              {/* Gallery thumbnails */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="relative aspect-video rounded-sm overflow-hidden border border-[#232A38]">
                  <Image
                    src="/images/about/ylia-piano-5k.jpg"
                    alt="Kousei Piano Performance"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors" />
                </div>
                <div className="relative aspect-video rounded-sm overflow-hidden border border-[#232A38]">
                  <Image
                    src="/images/about/kaori-violin-4k.jpg"
                    alt="Kaori Violin Stance"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors" />
                </div>
                <div className="relative aspect-video rounded-sm overflow-hidden border border-[#232A38]">
                  <Image
                    src="/images/about/ylia-cherry-blossoms-4k.jpg"
                    alt="Cherry Blossom Canopy"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors" />
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Piano Keys Strip */}
          <div className="pt-6 border-t border-[#232A38]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 text-xs font-mono text-[#8B95A5]">
              <span className="flex items-center gap-2 text-[#D4A338] font-semibold">
                <Volume2 className="w-4 h-4 text-[#D4A338] animate-pulse" />
                <span>Interactive Piano Soundboard (Click keys or press keyboard keys A-L)</span>
              </span>
              <span className="text-[11px] text-[#8B95A5]">Chopin Ballade No. 1 • Saint-Saëns • Kreisler</span>
            </div>

            <div className="relative flex justify-center bg-[#12161F] p-4 rounded-sm border border-[#232A38] shadow-inner overflow-x-auto">
              <div className="flex relative h-32 sm:h-36 select-none">
                {pianoKeys.map((k, idx) => {
                  if (k.isBlack) {
                    return (
                      <motion.button
                        key={idx}
                        type="button"
                        whileHover={{ y: 2 }}
                        whileTap={{ y: 4, scale: 0.98 }}
                        onClick={() => handlePlayKey(k.note, idx)}
                        onTouchStart={(e) => {
                          e.preventDefault();
                          handlePlayKey(k.note, idx);
                        }}
                        className={`absolute w-6 sm:w-7 h-20 sm:h-22 border border-[#232A38] rounded-b-sm z-20 cursor-pointer shadow-lg transition-all flex flex-col justify-end items-center pb-1 ${
                          activeKey === idx
                            ? 'bg-[#D4A338] border-[#D4A338] shadow-[#D4A338]/80 shadow-md ring-2 ring-[#D4A338]'
                            : 'bg-[#0B0E14] hover:bg-[#1E2430] text-[#8B95A5]'
                        }`}
                        style={{
                          left: `${idx * 26 - 13}px`,
                        }}
                        title={`Play note ${k.note} (Press ${k.keyChar})`}
                      >
                        <span className="text-[9px] font-mono font-bold text-[#E2E8F0]">
                          {k.keyChar}
                        </span>
                      </motion.button>
                    );
                  }

                  return (
                    <motion.button
                      key={idx}
                      type="button"
                      whileHover={{ y: 2 }}
                      whileTap={{ y: 4, scale: 0.98 }}
                      onClick={() => handlePlayKey(k.note, idx)}
                      onTouchStart={(e) => {
                        e.preventDefault();
                        handlePlayKey(k.note, idx);
                      }}
                      className={`w-9 sm:w-11 h-full border border-[#232A38] rounded-b-sm cursor-pointer shadow-md transition-all relative flex flex-col items-center justify-end pb-2 ${
                        activeKey === idx
                          ? 'bg-[#D4A338] border-[#D4A338] shadow-[#D4A338]/40 ring-2 ring-[#D4A338]'
                          : 'bg-[#1E2430] hover:bg-[#232A38] text-[#E2E8F0]'
                      }`}
                      title={`Play note ${k.note} (Press ${k.keyChar})`}
                    >
                      <span className="text-[11px] font-mono font-bold select-none text-[#E2E8F0]">
                        {k.note}
                      </span>
                      <span className="text-[9px] font-mono text-[#8B95A5] font-medium">
                        [{k.keyChar}]
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Tab 2: Batman & Dark (Noir & Paradox) */}
      {activeTab === 'noir' && (
        <motion.div
          key="noir"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4 }}
          className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Batman Card */}
          <div className="rounded-sm p-6 sm:p-8 border border-[#232A38] bg-[#12161F] space-y-4 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#D4A338]/5 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-sm text-xs font-mono font-medium bg-[#0B0E14] text-[#D4A338] border border-[#232A38]">
                GOTHAM NOIR • THE DETECTIVE
              </span>
              <Moon className="w-5 h-5 text-[#D4A338]" />
            </div>

            <h4 className="font-display text-2xl font-bold uppercase tracking-wider text-[#E2E8F0]">
              Batman (The Dark Knight)
            </h4>
            <p className="text-xs sm:text-sm text-[#D4A338] italic">
              &quot;It&apos;s not who I am underneath, but what I do that defines me.&quot;
            </p>

            <p className="text-xs sm:text-sm text-[#8B95A5] leading-relaxed">
              What fascinates me about Batman is that he possesses no superpowers. He is defined purely by discipline, forensic intellect, strategic preparation, and an iron moral code. In a city submerged in entropy, he becomes an engineered system of balance.
            </p>

            <div className="space-y-2 pt-2">
              <div className="text-xs font-mono text-[#D4A338] uppercase tracking-wide">Key Themes:</div>
              <div className="flex flex-wrap gap-2">
                {['Forensic Deduction', 'Moral Restraint', 'Uncompromising Discipline', 'Gotham Architecture'].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-sm text-[11px] font-mono bg-[#0B0E14] text-[#8B95A5] border border-[#232A38]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Dark (Netflix) Card */}
          <div className="rounded-sm p-6 sm:p-8 border border-[#232A38] bg-[#12161F] space-y-4 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#162238]/30 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#0B0E14] text-[#8E9BAE] border border-[#232A38]">
                WINDEN 1953–2053 • SIC MUNDUS
              </span>
              <Layers className="w-5 h-5 text-[#8E9BAE]" />
            </div>

            <h4 className="font-display text-2xl font-bold uppercase tracking-wider text-[#E2E8F0]">
              Dark (Baran bo Odar)
            </h4>
            <p className="text-xs sm:text-sm text-[#8E9BAE] italic">
              &quot;What we know is a drop. What we don&apos;t know is an ocean.&quot;
            </p>

            <p className="text-xs sm:text-sm text-[#8B95A5] leading-relaxed">
              The pinnacle of television architecture. A deterministic masterclass woven around the 33-year lunar-solar cycle, the bootstrap paradox, and quantum entanglement. Every scene connects with mathematical inevitability—a story written like a flawless graph traversal algorithm.
            </p>

            <div className="space-y-2 pt-2">
              <div className="text-xs font-mono text-[#8E9BAE] uppercase tracking-wide">Key Themes:</div>
              <div className="flex flex-wrap gap-2">
                {['Bootstrap Paradox', 'Quantum Entanglement', 'Triquetra Knot', 'Deterministic Tragedy'].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-sm text-[11px] font-mono bg-[#0B0E14] text-[#8B95A5] border border-[#232A38]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Tab 3: Indie Cinema & Actors */}
      {activeTab === 'cinema' && (
        <motion.div
          key="cinema"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4 }}
          className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* That Girl in Yellow Boots & Sneakerella */}
          <div className="rounded-sm p-6 sm:p-8 border border-[#232A38] bg-[#12161F] space-y-4">
            <span className="px-3 py-1 rounded-sm text-xs font-mono font-medium bg-[#0B0E14] text-[#D4A338] border border-[#232A38]">
              INDIE & CULTURE CINEMA
            </span>
            <h4 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-wider text-[#E2E8F0]">
              That Girl in Yellow Boots & Sneakerella
            </h4>
            <p className="text-xs sm:text-sm text-[#8B95A5] leading-relaxed">
              Anurag Kashyap&apos;s <em className="text-[#D4A338]">That Girl in Yellow Boots</em> is raw, courageous, and uncompromising—portraying Mumbai&apos;s gritty underbelly with unfiltered human dignity. In contrast, <em className="text-[#D4A338]">Sneakerella</em> brings modern urban rhythm, street sneaker culture, and vibrant dream-chasing energy.
            </p>
            <div className="p-3.5 rounded-sm bg-[#0B0E14] border border-[#232A38] text-xs text-[#8B95A5]">
              &quot;Cinema should either show you the reality you hide from, or give you the wings to build the fantasy you crave.&quot;
            </div>
          </div>

          {/* Kalki Koechlin & Jake Gyllenhaal */}
          <div className="rounded-sm p-6 sm:p-8 border border-[#232A38] bg-[#12161F] space-y-4">
            <span className="px-3 py-1 rounded-sm text-xs font-mono font-medium bg-[#0B0E14] text-[#8E9BAE] border border-[#232A38]">
              ACTING MASTERY • ARTISTIC DEDICATION
            </span>
            <h4 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-wider text-[#E2E8F0]">
              Kalki Koechlin & Jake Gyllenhaal
            </h4>
            <p className="text-xs sm:text-sm text-[#8B95A5] leading-relaxed">
              Two actors whose devotion to character transformation is unmatched. Kalki brings fearless vulnerability and theatrical depth to non-conformist storytelling. Jake Gyllenhaal (<em>Nightcrawler</em>, <em>Prisoners</em>, <em>Donnie Darko</em>) embodies intense psychological immersion—an actor who never plays safe.
            </p>
            <div className="p-3.5 rounded-sm bg-[#0B0E14] border border-[#232A38] text-xs text-[#8B95A5]">
              &quot;Great acting, like great code, requires total presence—where the creator vanishes into the work.&quot;
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
