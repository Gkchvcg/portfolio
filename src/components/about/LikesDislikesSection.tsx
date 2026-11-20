'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ThumbsDown, Sparkles, AlertCircle, CheckCircle2, XCircle } from 'lucide-react';

interface PreferenceItem {
  id: string;
  title: string;
  tagline: string;
  category: string;
  icon: string;
}

const LOVES: PreferenceItem[] = [
  {
    id: 'l1',
    title: 'Hyderabadi Dum Biryani',
    tagline: 'Slow-cooked saffron rice, caramelized fried onions, and marinated richness. The undisputed zenith of culinary comfort.',
    category: 'Culinary Masterpiece',
    icon: '🍲',
  },
  {
    id: 'l2',
    title: 'Zero-Error First-Run Compiles',
    tagline: 'When 800 lines of complex TypeScript, Go, or Python compile on the first try with zero warnings at 2:30 AM.',
    category: 'Engineering Flow',
    icon: '⚡',
  },
  {
    id: 'l3',
    title: 'Rainy Night Drives with Nusrat Sahib',
    tagline: 'The Emperor of Qawwali at full volume while rain droplets streak across the windshield on empty nocturnal roads.',
    category: 'Acoustic Sanctuary',
    icon: '🌧️',
  },
  {
    id: 'l4',
    title: '90+ Minute Champions League Winners',
    tagline: 'Real Madrid at the Bernabéu turning despair into sheer euphoric triumph when the clock hits stoppage time.',
    category: 'Football Passion',
    icon: '⚽',
  },
  {
    id: 'l5',
    title: 'Spring Blossom in Osaka & Kyoto',
    tagline: 'Cherry blossoms floating along ancient canals, balancing serene temple silence with neon nocturnal alleyways.',
    category: 'Atmospheric Aesthetics',
    icon: '🌸',
  },
  {
    id: 'l6',
    title: 'Pure Functional Architecture',
    tagline: 'Deterministic pipelines, explicit error boundaries, and zero hidden mutable state.',
    category: 'System Design',
    icon: '📐',
  },
  {
    id: 'l7',
    title: 'Deep "Thock" Mechanical Keyboards',
    tagline: 'The acoustic tactile satisfaction of lubed linear switches on a gasket-mounted brass backplate.',
    category: 'Tactile Pleasure',
    icon: '⌨️',
  },
  {
    id: 'l8',
    title: 'Editorial Typography & Intentional UI',
    tagline: 'Generous negative space, harmonious baseline grids, and subtle 60 FPS spring microinteractions.',
    category: 'Design Craft',
    icon: '✨',
  },
];

const DISLIKES: PreferenceItem[] = [
  {
    id: 'd1',
    title: 'Unhandled Promise Rejections',
    tagline: 'Silent exceptions that swallow the call stack in production without leaving a readable error trace.',
    category: 'Code Anarchy',
    icon: '💥',
  },
  {
    id: 'd2',
    title: 'Cold Chai / Lukewarm Tea',
    tagline: 'A cognitive tragedy. Chai must be scalding, aromatic, and steeped to spiced perfection.',
    category: 'Culinary Injustice',
    icon: '☕',
  },
  {
    id: 'd3',
    title: 'Cryptic Errors Without Line Numbers',
    tagline: 'Debugging minified bundles where the only hint is "TypeError: Cannot read properties of undefined".',
    category: 'Developer Friction',
    icon: '🛑',
  },
  {
    id: 'd4',
    title: 'Overengineered Factory Abstractions',
    tagline: 'Constructing five abstract interfaces and seven wrapper classes for a problem solved by a single pure function.',
    category: 'Software Bloat',
    icon: '🧱',
  },
  {
    id: 'd5',
    title: 'Spoilers Before Season Finales',
    tagline: 'Casually scrolling social media and having a 10-episode emotional payoff ruined in a headline.',
    category: 'Storytelling Ruin',
    icon: '📵',
  },
  {
    id: 'd6',
    title: 'Laggy UI & Cumulative Layout Shifts',
    tagline: 'Web pages that jump around as assets load and buttons that stutter below 60 frames per second.',
    category: 'UX Atrocity',
    icon: '📉',
  },
  {
    id: 'd7',
    title: 'Superficial Small Talk',
    tagline: 'Conversations that skate over weather and pleasantries rather than delving into ideas, books, or passions.',
    category: 'Intellectual Void',
    icon: '🌫️',
  },
  {
    id: 'd8',
    title: 'Arbitrary Bureaucratic Rituals',
    tagline: 'Process for the sake of process that suffocates initiative, creativity, and simple common sense.',
    category: 'System Inertia',
    icon: '⛓️',
  },
];

export function LikesDislikesSection() {
  const [activeTab, setActiveTab] = useState<'love' | 'dislike'>('love');

  const items = activeTab === 'love' ? LOVES : DISLIKES;

  return (
    <div
      className={`relative rounded-3xl overflow-hidden border transition-all duration-700 p-6 sm:p-10 shadow-2xl ${
        activeTab === 'love'
          ? 'border-emerald-500/30 bg-zinc-950 text-white shadow-emerald-950/20'
          : 'border-rose-500/30 bg-zinc-950 text-white shadow-rose-950/20'
      }`}
    >
      {/* Dynamic Ambient Background Glow */}
      <div
        className={`absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full blur-3xl transition-all duration-700 pointer-events-none ${
          activeTab === 'love' ? 'bg-emerald-500/10' : 'bg-rose-500/10'
        }`}
      />

      {/* Header and Animated Sliding Toggle Pill */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-zinc-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-zinc-800 border border-zinc-700 text-zinc-300 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AUTHENTIC PERSPECTIVE • LIKES & DISLIKES</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-3">
            Things I Love & Things I Dislike
          </h3>
          <p className="text-sm text-zinc-400 mt-2 max-w-2xl leading-relaxed">
            Personal tastes, engineering quirks, and unvarnished opinions that define who I am when the laptop screen turns off.
          </p>
        </div>

        {/* Sliding Indicator Toggle */}
        <div className="relative flex items-center p-1.5 rounded-2xl bg-zinc-900 border border-zinc-800 self-start md:self-auto">
          <button
            onClick={() => setActiveTab('love')}
            className={`relative z-10 flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-colors ${
              activeTab === 'love' ? 'text-emerald-300' : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Heart className={`w-4 h-4 ${activeTab === 'love' ? 'fill-emerald-400' : ''}`} />
            <span>Things I Love ({LOVES.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('dislike')}
            className={`relative z-10 flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-colors ${
              activeTab === 'dislike' ? 'text-rose-300' : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <ThumbsDown className={`w-4 h-4 ${activeTab === 'dislike' ? 'fill-rose-400' : ''}`} />
            <span>Things I Dislike ({DISLIKES.length})</span>
          </button>

          {/* Animated sliding highlight */}
          <motion.div
            layout
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className={`absolute inset-y-1.5 rounded-xl pointer-events-none ${
              activeTab === 'love'
                ? 'left-1.5 w-[calc(50%-6px)] bg-emerald-500/20 border border-emerald-500/40 shadow-sm'
                : 'left-[calc(50%+3px)] w-[calc(50%-6px)] bg-rose-500/20 border border-rose-500/40 shadow-sm'
            }`}
          />
        </div>
      </div>

      {/* Grid of Items with Staggered Entrance */}
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className={`p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                  activeTab === 'love'
                    ? 'bg-zinc-900/60 border-zinc-800/80 hover:border-emerald-500/40 hover:bg-zinc-900'
                    : 'bg-zinc-900/60 border-zinc-800/80 hover:border-rose-500/40 hover:bg-zinc-900'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl">{item.icon}</span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                        activeTab === 'love'
                          ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                          : 'bg-rose-500/10 text-rose-300 border-rose-500/30'
                      }`}
                    >
                      {item.category}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white tracking-tight">
                    {item.title}
                  </h4>

                  <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                    {item.tagline}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-800/60 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span>Entry #{idx + 1}</span>
                  {activeTab === 'love' ? (
                    <span className="text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Essential
                    </span>
                  ) : (
                    <span className="text-rose-400 flex items-center gap-1">
                      <XCircle className="w-3.5 h-3.5" /> Avoid
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
