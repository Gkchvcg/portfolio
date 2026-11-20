'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Disc3, Play, Pause, SkipForward, SkipBack, Volume2, Sparkles, Music, Heart, Radio, Waves } from 'lucide-react';

interface Track {
  id: string;
  title: string;
  artist: string;
  genre: string;
  album: string;
  year: string;
  duration: string;
  accentColor: string;
  quote: string;
  whyILoveIt: string;
  vibes: string[];
}

const TRACKS: Track[] = [
  {
    id: 'nusrat',
    title: 'Yeh Jo Halka Halka Suroor Hai',
    artist: 'Ustad Nusrat Fateh Ali Khan',
    genre: 'Sufi Qawwali / Spiritual Ecstasy',
    album: 'En Concert à Paris',
    year: '1988',
    duration: '24:18',
    accentColor: 'from-amber-500/20 via-orange-500/10 to-amber-950/40 border-amber-500/40 text-amber-300',
    quote: '"Saaki ki har nigaah pe bal khaa ke pee gaya... Lehra ke pee gaya, kabhi balkha ke pee gaya."',
    whyILoveIt: 'The Shahenshah-e-Qawwali. Nusrat sahib’s transcendental improvisations (sargam) and unyielding vocal intensity create a hypnotic spiritual trance. It is my ultimate companion for late-night deep architecture work where code meets flow state.',
    vibes: ['Transcendental', 'Sufi Ecstasy', 'Hypnotic Harmonium', 'Infinite Sargam'],
  },
  {
    id: 'jass-manak',
    title: 'Prada & Lehanga Anthems',
    artist: 'Jass Manak',
    genre: 'Contemporary Punjabi Pop / Melodic Hooks',
    album: 'Age 19 / No Competition',
    year: '2019–2021',
    duration: '3:45',
    accentColor: 'from-pink-500/20 via-purple-500/10 to-indigo-950/40 border-pink-500/40 text-pink-300',
    quote: '"Tera mukhda chand da tukda ni, dil tere naal judeya ae..."',
    whyILoveIt: 'Incredible melodic ear, infectious cadence, and effortless lyrical rhythm. Jass Manak represents modern Punjabi pop culture with pure acoustic charm and catchy production that lifts any mood instantly.',
    vibes: ['Vibrant Melodies', 'Punjabi Pop', 'Acoustic Guitar Hooks', 'Upbeat Euphoria'],
  },
  {
    id: 'parda',
    title: 'Parda (The Mystical Veil)',
    artist: 'Soulful Sufi Composition & Acoustic Poetry',
    genre: 'Sufi Classical / Poetic Soul',
    album: 'Timeless Mystics',
    year: 'Classic',
    duration: '6:12',
    accentColor: 'from-blue-500/20 via-cyan-500/10 to-blue-950/40 border-blue-500/40 text-blue-300',
    quote: '"Parda hai parda, parda nashi se parda... Jab parda uthega toh jalwa nazar aayega."',
    whyILoveIt: 'A meditation on mystery, modesty, and divine beauty. The metaphor of the veil ("Parda") explores the delicate boundary between the seen and the unseen, the spoken and the whispered—a theme deeply woven into my creative world.',
    vibes: ['Deep Acoustic', 'Urdu Poetry', 'Subtle Mysticism', 'Contemplative'],
  },
];

export function VinylLounge() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [liked, setLiked] = useState(true);

  const track = TRACKS[currentTrackIndex];

  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % TRACKS.length);
  };

  const handlePrev = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + TRACKS.length) % TRACKS.length);
  };

  return (
    <div className="relative rounded-3xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-950 text-white p-6 sm:p-10 shadow-2xl">
      {/* Ambient Lighting Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-zinc-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 border border-blue-500/30 text-blue-400 mb-3">
            <Radio className="w-3.5 h-3.5" />
            <span>ANALOG SOUL • ACOUSTIC FREQUENCIES</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-3">
            The Vinyl Lounge
            <span className="text-xs font-mono py-1 px-2.5 rounded-full bg-zinc-800 text-zinc-300 font-normal">
              33⅓ RPM Hi-Fi
            </span>
          </h3>
          <p className="text-sm text-zinc-400 mt-2 max-w-2xl leading-relaxed">
            Music is emotional architecture. From the spiritual vortex of Nusrat Fateh Ali Khan to the vibrant melodies of Jass Manak and the poetic cadence of Parda, this is the soundtrack of my life.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 bg-zinc-900 px-3 py-2 rounded-xl border border-zinc-800 self-start md:self-auto">
          <Waves className="w-4 h-4 text-blue-400 animate-pulse" />
          <span>Interactive Visual Player (Silent)</span>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Interactive 33 RPM Vinyl Turntable */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
            {/* Turntable Platter Base */}
            <div className="absolute inset-0 rounded-full bg-zinc-900 border-4 border-zinc-800 shadow-2xl flex items-center justify-center">
              {/* Outer Strobe Dots */}
              <div className="absolute inset-1 rounded-full border border-zinc-700/50 border-dashed" />
            </div>

            {/* Vinyl Record */}
            <motion.div
              animate={{ rotate: isPlaying ? 360 : 0 }}
              transition={{
                repeat: isPlaying ? Infinity : 0,
                duration: 6,
                ease: 'linear',
              }}
              className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-gradient-to-tr from-zinc-950 via-zinc-900 to-zinc-950 shadow-2xl flex items-center justify-center cursor-pointer border border-zinc-800 group"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {/* Vinyl Microgrooves */}
              <div className="absolute inset-3 rounded-full border border-zinc-800/80 pointer-events-none" />
              <div className="absolute inset-6 rounded-full border border-zinc-800/60 pointer-events-none" />
              <div className="absolute inset-9 rounded-full border border-zinc-800/80 pointer-events-none" />
              <div className="absolute inset-12 rounded-full border border-zinc-800/60 pointer-events-none" />
              <div className="absolute inset-16 rounded-full border border-zinc-800/80 pointer-events-none" />

              {/* Gloss Sheen Reflection */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />

              {/* Center Vinyl Label */}
              <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-2 shadow-inner flex flex-col items-center justify-center text-center border-2 border-zinc-900">
                <span className="text-[9px] font-mono uppercase tracking-widest text-blue-200">
                  SIDE A • 33 RPM
                </span>
                <span className="text-[10px] font-bold text-white leading-tight truncate max-w-[80px]">
                  {track.title}
                </span>
                <span className="text-[8px] text-blue-200/80 truncate max-w-[70px]">
                  {track.artist}
                </span>

                {/* Spindle hole */}
                <div className="w-4 h-4 rounded-full bg-zinc-950 border border-zinc-700 mt-1 shadow-inner" />
              </div>
            </motion.div>

            {/* Tonearm Stylus */}
            <div
              className={`absolute top-0 right-2 w-16 h-28 origin-top-right transition-transform duration-700 pointer-events-none ${
                isPlaying ? 'rotate-12' : '-rotate-12'
              }`}
            >
              <div className="w-1.5 h-20 bg-gradient-to-b from-zinc-400 to-zinc-600 rounded-full shadow-lg ml-auto mr-4" />
              <div className="w-4 h-6 bg-zinc-300 rounded-sm shadow-md ml-auto mr-3 border border-zinc-500" />
            </div>
          </div>

          <p className="text-xs font-mono text-zinc-400 mt-4 flex items-center gap-1.5">
            <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-emerald-400 animate-ping' : 'bg-zinc-600'}`} />
            {isPlaying ? 'Turntable spinning at 33⅓ RPM' : 'Turntable paused (Click disc to spin)'}
          </p>
        </div>

        {/* Right Column: Player Controls, Equalizer & Poetic Narrative */}
        <div className="lg:col-span-7 space-y-6">
          {/* Active Track Metadata Card */}
          <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-4 backdrop-blur-md">
            <div className="flex items-center justify-between gap-4">
              <div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  {track.genre}
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-2">
                  {track.title}
                </h4>
                <p className="text-sm font-medium text-blue-400">
                  {track.artist}
                </p>
              </div>

              <button
                onClick={() => setLiked(!liked)}
                className={`p-3 rounded-full border transition-all ${
                  liked
                    ? 'bg-rose-500/20 border-rose-500/40 text-rose-400'
                    : 'bg-zinc-800 border-zinc-700 text-zinc-400 hover:text-white'
                }`}
                title={liked ? 'In Favorites' : 'Add to Favorites'}
              >
                <Heart className={`w-5 h-5 ${liked ? 'fill-rose-400' : ''}`} />
              </button>
            </div>

            {/* Lyric Quote */}
            <div className="p-3.5 rounded-xl bg-black/40 border border-zinc-800 text-xs sm:text-sm text-zinc-300 italic">
              {track.quote}
            </div>

            {/* Why Maroof Loves It */}
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              {track.whyILoveIt}
            </p>

            {/* Vibe Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {track.vibes.map((vibe) => (
                <span
                  key={vibe}
                  className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-zinc-800/80 text-zinc-300 border border-zinc-700"
                >
                  #{vibe}
                </span>
              ))}
            </div>

            {/* Equalizer Visualizer Bars */}
            <div className="pt-4 border-t border-zinc-800 flex items-center justify-between gap-4">
              <div className="flex items-end gap-1.5 h-8">
                {[45, 80, 60, 95, 40, 75, 100, 65, 85, 50, 90, 70, 80, 60, 95].map((height, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      height: isPlaying ? [`${Math.max(15, height * 0.3)}%`, `${height}%`, `${Math.max(10, height * 0.4)}%`] : '15%',
                    }}
                    transition={{
                      repeat: isPlaying ? Infinity : 0,
                      duration: 0.6 + (i % 5) * 0.15,
                      ease: 'easeInOut',
                    }}
                    className="w-1.5 rounded-full bg-gradient-to-t from-blue-600 via-indigo-500 to-cyan-400"
                    style={{ minHeight: '4px' }}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <Volume2 className="w-4 h-4 text-blue-400" />
                <span>Lossless 96kHz / 24-bit</span>
              </div>
            </div>

            {/* Playback Controls */}
            <div className="pt-2 flex items-center justify-center gap-6">
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-colors"
                title="Previous Track"
              >
                <SkipBack className="w-5 h-5" />
              </button>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 transition-transform active:scale-95"
                title={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="w-6 h-6 fill-white" /> : <Play className="w-6 h-6 fill-white ml-0.5" />}
              </button>

              <button
                onClick={handleNext}
                className="p-2.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-colors"
                title="Next Track"
              >
                <SkipForward className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Track Selection Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {TRACKS.map((t, idx) => (
              <button
                key={t.id}
                onClick={() => {
                  setCurrentTrackIndex(idx);
                  setIsPlaying(true);
                }}
                className={`p-3 rounded-xl border text-left transition-all ${
                  currentTrackIndex === idx
                    ? 'bg-blue-600/20 border-blue-500 text-white shadow-md'
                    : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                }`}
              >
                <div className="text-[10px] font-mono uppercase text-blue-400">
                  Track 0{idx + 1}
                </div>
                <div className="text-xs font-bold truncate mt-1 text-white">
                  {t.title}
                </div>
                <div className="text-[11px] text-zinc-400 truncate">
                  {t.artist}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
