'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  BookOpen,
  Heart,
  Trophy,
  Disc3,
  Film,
  Feather,
  Flower2,
  Moon,
  Layers,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { sound } from './about/soundEngine';

import { JournalIntro } from './about/JournalIntro';
import { FavoriteCards } from './about/FavoriteCards';
import { FootballSection } from './about/FootballSection';
import { VinylLounge } from './about/VinylLounge';
import { AnimeCinemaSection } from './about/AnimeCinemaSection';
import { PhilosophyLiterature } from './about/PhilosophyLiterature';
import { LikesDislikesSection } from './about/LikesDislikesSection';
import { OsakaSpringSection } from './about/OsakaSpringSection';
import { LittleMysterySection } from './about/LittleMysterySection';
import { BatIcon } from './gotham/BatIcon';

type JournalTab =
  | 'all'
  | 'favorites'
  | 'football'
  | 'music'
  | 'cinema'
  | 'philosophy'
  | 'preferences'
  | 'osaka'
  | 'mystery';

interface NavItem {
  id: JournalTab;
  label: string;
  icon: React.ElementType;
  badge?: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'all', label: 'Full Journal', icon: Layers },
  { id: 'favorites', label: '13 Favorites', icon: Heart, badge: '13' },
  { id: 'football', label: 'Pitch & Tactics', icon: Trophy },
  { id: 'music', label: 'Vinyl Lounge', icon: Disc3 },
  { id: 'cinema', label: 'Cinema & Anime', icon: Film },
  { id: 'philosophy', label: 'Philosophy', icon: Feather },
  { id: 'preferences', label: 'Likes & Dislikes', icon: Sparkles },
  { id: 'osaka', label: 'Osaka & Spring', icon: Flower2 },
  { id: 'mystery', label: 'A Quiet Page', icon: Moon },
];

export function About() {
  const [activeTab, setActiveTab] = useState<JournalTab>('all');
  const [isAudioMuted, setIsAudioMuted] = useState(false);

  const toggleSound = () => {
    const nextMuted = sound.toggleMute();
    setIsAudioMuted(nextMuted);
  };

  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 border-t border-[#232A38] bg-[#0B0E14] overflow-hidden"
    >
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#162238]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#162238] border border-[#D4A338]/30 text-[#D4A338]">
            <BatIcon className="w-4 h-2 text-[#D4A338]" />
            <span>01 // GOTHAM ARCHIVES • DIGITAL JOURNAL & DOSSIER</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#E2E8F0] font-display">
                About Maroof
              </h2>
              <p className="text-sm sm:text-base text-[#8B95A5] max-w-2xl mt-2 leading-relaxed">
                An interactive editorial journal bridging Computer Science rigor, football geometry, analog vinyl rhythms, Japanese spring aesthetics, and literary contemplation.
              </p>
            </div>

            {/* Quick Summary Pill & Global Audio Control */}
            <div className="flex flex-wrap items-center gap-3 self-start md:self-auto">
              <button
                type="button"
                onClick={toggleSound}
                className={`flex items-center gap-2 text-xs font-mono px-3.5 py-2 rounded-2xl border transition-all cursor-pointer ${
                  isAudioMuted
                    ? 'bg-rose-500/10 text-rose-400 border-rose-500/30'
                    : 'bg-[#12161F] text-[#D4A338] border-[#232A38]'
                }`}
                title={isAudioMuted ? 'Unmute Sound Effects' : 'Mute Sound Effects'}
              >
                {isAudioMuted ? <VolumeX className="w-3.5 h-3.5 text-rose-400" /> : <Volume2 className="w-3.5 h-3.5 text-[#D4A338]" />}
                <span>{isAudioMuted ? 'Audio Muted' : 'Audio Active'}</span>
              </button>

              <div className="flex items-center gap-2 text-xs font-mono text-[#8B95A5] bg-[#12161F] px-4 py-2 rounded-2xl border border-[#232A38] shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#D4A338] animate-pulse" />
                <span>Interactive 60 FPS Digital Scrapbook</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Journal Chapter Sub-Navigation */}
        <div className="relative border-b border-[#232A38] pb-3">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    sound.playUiClick();
                    setActiveTab(item.id);
                  }}
                  className={`group relative flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#D4A338] text-[#050608] font-bold shadow-[0_0_15px_rgba(212,163,56,0.35)]'
                      : 'bg-[#12161F] text-[#8B95A5] hover:text-[#E2E8F0] hover:bg-[#1A202C] border border-[#232A38] hover:border-[#D4A338]/40'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#050608] font-bold' : 'text-[#8B95A5] group-hover:text-[#D4A338]'}`} />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span
                      className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                        isActive
                          ? 'bg-[#050608]/20 text-[#050608] font-bold'
                          : 'bg-[#0B0E14] text-[#8B95A5]'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Journal View: Full Flow vs Individual Chapters */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {activeTab === 'all' && (
              <motion.div
                key="all-flow"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-16 sm:space-y-24"
              >
                {/* 1. Hero Introduction & Academic Foundation */}
                <JournalIntro />

                {/* 2. Interactive 3D Tilt Favourite Cards (13 required items) */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D4A338] font-semibold">
                    <Heart className="w-3.5 h-3.5 text-[#D4A338]" />
                    <span>CHAPTER 01 // 13 ESSENTIAL FAVOURITES</span>
                  </div>
                  <FavoriteCards />
                </div>

                {/* 3. Football Subsection: 3D Depth, Stadium Lighting & Tactical Geometry */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D4A338] font-semibold">
                    <Trophy className="w-3.5 h-3.5 text-[#D4A338]" />
                    <span>CHAPTER 02 // FOOTBALL, STADIUM LIGHTS & TACTICAL GEOMETRY</span>
                  </div>
                  <FootballSection />
                </div>

                {/* 4. Music Player-Inspired Interface: The Vinyl Lounge */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D4A338] font-semibold">
                    <Disc3 className="w-3.5 h-3.5 text-[#D4A338]" />
                    <span>CHAPTER 03 // THE VINYL LOUNGE (ANALOG FREQUENCIES)</span>
                  </div>
                  <VinylLounge />
                </div>

                {/* 5. Anime and Cinema Animations */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D4A338] font-semibold">
                    <Film className="w-3.5 h-3.5 text-[#D4A338]" />
                    <span>CHAPTER 04 // CINEMA, YOUR LIE IN APRIL & POETIC NOIR</span>
                  </div>
                  <AnimeCinemaSection />
                </div>

                {/* 6. Philosophy & Literature Reading Desk */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D4A338] font-semibold">
                    <Feather className="w-3.5 h-3.5 text-[#D4A338]" />
                    <span>CHAPTER 05 // PHILOSOPHY, MARGINALIA & INQUIRIES</span>
                  </div>
                  <PhilosophyLiterature />
                </div>

                {/* 7. Likes & Dislikes Interactive Toggle */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D4A338] font-semibold">
                    <Sparkles className="w-3.5 h-3.5 text-[#D4A338]" />
                    <span>CHAPTER 06 // PERSONAL TASTE: LIKES & DISLIKES</span>
                  </div>
                  <LikesDislikesSection />
                </div>

                {/* 8. Osaka & Spring Atmospheric Portal */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D4A338] font-semibold">
                    <Flower2 className="w-3.5 h-3.5 text-[#D4A338]" />
                    <span>CHAPTER 07 // OSAKA & THE POETRY OF SPRING</span>
                  </div>
                  <OsakaSpringSection />
                </div>

                {/* 9. The Little Mystery: A Quiet Page */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D4A338] font-semibold">
                    <Moon className="w-3.5 h-3.5 text-[#D4A338]" />
                    <span>CHAPTER 08 // A QUIET PAGE</span>
                  </div>
                  <LittleMysterySection />
                </div>
              </motion.div>
            )}

            {activeTab === 'favorites' && (
              <motion.div
                key="favorites-view"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <FavoriteCards />
              </motion.div>
            )}

            {activeTab === 'football' && (
              <motion.div
                key="football-view"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <FootballSection />
              </motion.div>
            )}

            {activeTab === 'music' && (
              <motion.div
                key="music-view"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <VinylLounge />
              </motion.div>
            )}

            {activeTab === 'cinema' && (
              <motion.div
                key="cinema-view"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <AnimeCinemaSection />
              </motion.div>
            )}

            {activeTab === 'philosophy' && (
              <motion.div
                key="philosophy-view"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <PhilosophyLiterature />
              </motion.div>
            )}

            {activeTab === 'preferences' && (
              <motion.div
                key="preferences-view"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <LikesDislikesSection />
              </motion.div>
            )}

            {activeTab === 'osaka' && (
              <motion.div
                key="osaka-view"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <OsakaSpringSection />
              </motion.div>
            )}

            {activeTab === 'mystery' && (
              <motion.div
                key="mystery-view"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <LittleMysterySection />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
