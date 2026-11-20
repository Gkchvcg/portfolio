'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Film, Sparkles, Heart, Moon, Wind, Music, Play, Layers, Eye } from 'lucide-react';
import { SakuraPetals } from './SakuraPetals';

export function AnimeCinemaSection() {
  const [activeTab, setActiveTab] = useState<'ylia' | 'noir' | 'cinema'>('ylia');
  const [activeKey, setActiveKey] = useState<number | null>(null);

  // Piano keys for the interactive Your Lie in April footer motif
  const pianoKeys = [
    { note: 'C', isBlack: false },
    { note: 'C#', isBlack: true },
    { note: 'D', isBlack: false },
    { note: 'D#', isBlack: true },
    { note: 'E', isBlack: false },
    { note: 'F', isBlack: false },
    { note: 'F#', isBlack: true },
    { note: 'G', isBlack: false },
    { note: 'G#', isBlack: true },
    { note: 'A', isBlack: false },
    { note: 'A#', isBlack: true },
    { note: 'B', isBlack: false },
    { note: 'C2', isBlack: false },
    { note: 'C#2', isBlack: true },
    { note: 'D2', isBlack: false },
  ];

  return (
    <div className="relative rounded-3xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-950 text-white p-6 sm:p-10 shadow-2xl">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Sakura Petals when on YLIA tab */}
      {activeTab === 'ylia' && <SakuraPetals count={24} />}

      {/* Section Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-zinc-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-sky-500/10 border border-sky-500/30 text-sky-400 mb-3">
            <Film className="w-3.5 h-3.5" />
            <span>CINEMATIC ARCHITECTURE • STORYTELLING</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-3">
            Cinema, Anime & Poetic Noir
          </h3>
          <p className="text-sm text-zinc-400 mt-2 max-w-2xl leading-relaxed">
            Stories that shaped my visual empathy and emotional depth—from the tear-soaked sakura blossoms of Kousei and Kaori to the rain-drenched deterministic labyrinths of Winden and Gotham.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-zinc-900 border border-zinc-800 self-start md:self-auto">
          <button
            onClick={() => setActiveTab('ylia')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeTab === 'ylia'
                ? 'bg-sky-600 text-white shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            🌸 Your Lie in April
          </button>
          <button
            onClick={() => setActiveTab('noir')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeTab === 'noir'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            🦇 Batman & Dark
          </button>
          <button
            onClick={() => setActiveTab('cinema')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeTab === 'cinema'
                ? 'bg-zinc-700 text-white shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
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
            <div className="lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden border border-sky-500/30 group shadow-2xl">
              <Image
                src="/images/about/ylia-hero-8k.jpg"
                alt="Your Lie in April - Kaori Miyazono and Kousei Arima under Cherry Blossoms"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-2 text-[11px] font-mono text-sky-300">
                  <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                  <span>Kousei Arima & Kaori Miyazono • Chopin Ballade No. 1</span>
                </div>
                <p className="text-xs text-zinc-300 italic mt-1 line-clamp-2">
                  &quot;Was I able to live inside someone&apos;s heart? Was I able to live inside your heart?&quot;
                </p>
              </div>
            </div>

            {/* Narrative & Poetic Details */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-sky-400">
                <Music className="w-4 h-4" />
                <span>SPRING 2014 • NAOSHI ARAKAWA MASTERPIECE</span>
              </div>
              <h4 className="text-2xl font-bold text-white tracking-tight">
                Colors In A Monochrome World
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                <em className="text-sky-300 font-medium">Your Lie in April</em> isn&apos;t simply an anime—it is an emotional sanctuary. When Kousei lost his ability to hear the notes of the piano after trauma, Kaori didn&apos;t tell him to move on; she handed him her violin, dragged him back onto the stage, and showed him that music is about reaching another soul.
              </p>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                The visual palette transitions from desaturated blue-grey to radiant pastels whenever Kaori plays. It taught me that technical precision (the metronome) is hollow without heart and emotional intent.
              </p>

              {/* Letter Quote Excerpt */}
              <div className="p-4 rounded-xl bg-sky-950/40 border border-sky-800/40 text-xs sm:text-sm text-sky-200 italic leading-relaxed">
                &quot;Spring will be here soon. A spring without you... is coming. But I met you, and the spring that you left behind is so vibrant that it hurts.&quot;
              </div>

              {/* Gallery thumbnails */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="relative aspect-video rounded-xl overflow-hidden border border-zinc-800">
                  <Image
                    src="/images/about/ylia-piano-5k.jpg"
                    alt="Kousei Piano Performance"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors" />
                </div>
                <div className="relative aspect-video rounded-xl overflow-hidden border border-zinc-800">
                  <Image
                    src="/images/about/kaori-violin-4k.jpg"
                    alt="Kaori Violin Stance"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors" />
                </div>
                <div className="relative aspect-video rounded-xl overflow-hidden border border-zinc-800">
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
          <div className="pt-6 border-t border-zinc-800/80">
            <div className="flex items-center justify-between mb-3 text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1.5">
                <Music className="w-3.5 h-3.5 text-sky-400" />
                <span>Interactive Piano Motif (Hover / Tap keys)</span>
              </span>
              <span>Chopin • Saint-Saëns • Kreisler</span>
            </div>

            <div className="relative flex justify-center bg-zinc-900/80 p-3 rounded-2xl border border-zinc-800 shadow-inner overflow-x-auto">
              <div className="flex relative h-28 sm:h-32">
                {pianoKeys.map((k, idx) => {
                  if (k.isBlack) {
                    return (
                      <motion.div
                        key={idx}
                        whileHover={{ y: 2 }}
                        onMouseEnter={() => setActiveKey(idx)}
                        onMouseLeave={() => setActiveKey(null)}
                        className={`absolute w-5 sm:w-6 h-16 sm:h-20 bg-zinc-900 border border-zinc-700 rounded-b-md z-20 cursor-pointer shadow-lg transition-colors ${
                          activeKey === idx ? 'bg-sky-500 border-sky-400 shadow-sky-500/50' : 'hover:bg-zinc-800'
                        }`}
                        style={{
                          left: `${idx * 24 - 12}px`,
                        }}
                      />
                    );
                  }
                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ y: 2 }}
                      onMouseEnter={() => setActiveKey(idx)}
                      onMouseLeave={() => setActiveKey(null)}
                      className={`w-8 sm:w-10 h-full bg-zinc-100 dark:bg-zinc-200 border border-zinc-400 rounded-b-lg cursor-pointer shadow-md transition-colors relative flex items-end justify-center pb-2 ${
                        activeKey === idx ? 'bg-sky-200 dark:bg-sky-100' : 'hover:bg-zinc-50'
                      }`}
                    >
                      <span className="text-[10px] font-mono text-zinc-700 font-bold select-none">
                        {k.note}
                      </span>
                    </motion.div>
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
          <div className="rounded-2xl p-6 sm:p-8 border border-zinc-800 bg-gradient-to-b from-zinc-900/90 to-zinc-950/90 space-y-4 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-zinc-800 text-zinc-300 border border-zinc-700">
                GOTHAM NOIR • THE DETECTIVE
              </span>
              <Moon className="w-5 h-5 text-blue-400" />
            </div>

            <h4 className="text-2xl font-bold text-white tracking-tight">
              Batman (The Dark Knight)
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 italic">
              &quot;It&apos;s not who I am underneath, but what I do that defines me.&quot;
            </p>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              What fascinates me about Batman is that he possesses no superpowers. He is defined purely by discipline, forensic intellect, strategic preparation, and an iron moral code. In a city submerged in entropy, he becomes an engineered system of balance.
            </p>

            <div className="space-y-2 pt-2">
              <div className="text-xs font-mono text-blue-400 uppercase tracking-wide">Key Themes:</div>
              <div className="flex flex-wrap gap-2">
                {['Forensic Deduction', 'Moral Restraint', 'Uncompromising Discipline', 'Gotham Architecture'].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-zinc-800 text-zinc-300 border border-zinc-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Dark (Netflix) Card */}
          <div className="rounded-2xl p-6 sm:p-8 border border-zinc-800 bg-gradient-to-b from-zinc-900/90 to-zinc-950/90 space-y-4 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-600/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-amber-500/10 text-amber-300 border border-amber-500/30">
                WINDEN 1953–2053 • SIC MUNDUS
              </span>
              <Layers className="w-5 h-5 text-amber-400" />
            </div>

            <h4 className="text-2xl font-bold text-white tracking-tight">
              Dark (Baran bo Odar)
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 italic">
              &quot;What we know is a drop. What we don&apos;t know is an ocean.&quot;
            </p>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              The pinnacle of television architecture. A deterministic masterclass woven around the 33-year lunar-solar cycle, the bootstrap paradox, and quantum entanglement. Every scene connects with mathematical inevitability—a story written like a flawless graph traversal algorithm.
            </p>

            <div className="space-y-2 pt-2">
              <div className="text-xs font-mono text-amber-400 uppercase tracking-wide">Key Themes:</div>
              <div className="flex flex-wrap gap-2">
                {['Bootstrap Paradox', 'Quantum Entanglement', 'Triquetra Knot', 'Deterministic Tragedy'].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-zinc-800 text-zinc-300 border border-zinc-700">
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
          <div className="rounded-2xl p-6 sm:p-8 border border-zinc-800 bg-zinc-900/80 space-y-4">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-yellow-500/10 text-yellow-400 border border-yellow-500/30">
              INDIE & CULTURE CINEMA
            </span>
            <h4 className="text-xl sm:text-2xl font-bold text-white">
              That Girl in Yellow Boots & Sneakerella
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Anurag Kashyap&apos;s <em className="text-yellow-400">That Girl in Yellow Boots</em> is raw, courageous, and uncompromising—portraying Mumbai&apos;s gritty underbelly with unfiltered human dignity. In contrast, <em className="text-yellow-400">Sneakerella</em> brings modern urban rhythm, street sneaker culture, and vibrant dream-chasing energy.
            </p>
            <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-400">
              &quot;Cinema should either show you the reality you hide from, or give you the wings to build the fantasy you crave.&quot;
            </div>
          </div>

          {/* Kalki Koechlin & Jake Gyllenhaal */}
          <div className="rounded-2xl p-6 sm:p-8 border border-zinc-800 bg-zinc-900/80 space-y-4">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-rose-500/10 text-rose-400 border border-rose-500/30">
              ACTING MASTERY • ARTISTIC DEDICATION
            </span>
            <h4 className="text-xl sm:text-2xl font-bold text-white">
              Kalki Koechlin & Jake Gyllenhaal
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Two actors whose devotion to character transformation is unmatched. Kalki brings fearless vulnerability and theatrical depth to non-conformist storytelling. Jake Gyllenhaal (<em>Nightcrawler</em>, <em>Prisoners</em>, <em>Donnie Darko</em>) embodies intense psychological immersion—an actor who never plays safe.
            </p>
            <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-400">
              &quot;Great acting, like great code, requires total presence—where the creator vanishes into the work.&quot;
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
