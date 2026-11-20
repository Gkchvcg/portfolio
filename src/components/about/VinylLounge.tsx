'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Disc3,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Sparkles,
  Music,
  Heart,
  Radio,
  Waves,
  Repeat,
} from 'lucide-react';
import { sound } from './soundEngine';
import { useGothamSoundtrack } from '@/components/gotham/GothamSoundtrackContext';

export interface Track {
  id: string;
  title: string;
  artist: string;
  genre: string;
  album: string;
  year: string;
  durationFormatted: string;
  audioSrc: string;
  accentColor: string;
  quote: string;
  whyILoveIt: string;
  vibes: string[];
}

export const TRACKS: Track[] = [
  {
    id: 'muhammad-nabina',
    title: 'Muhammad Nabina',
    artist: 'Ayisha Abdul Basith',
    genre: 'Spiritual Devotional / Nasheed',
    album: 'Muhammad Nabina / Divine Peace',
    year: '2023',
    durationFormatted: '03:52',
    audioSrc: '/audio/muhammad-nabina-ayisha-abdul-basith.mp3',
    accentColor: 'from-emerald-500/20 via-teal-500/10 to-emerald-950/40 border-emerald-500/40 text-emerald-300',
    quote: '"Muhammad nabina, bi noorou hadina, min Makka habibi noorou sata\'a al-Madina... Man salla salatuh wathalla bi-sifatuh..."',
    whyILoveIt: 'An ethereal, profoundly serene spiritual Nasheed rendered with pristine purity by Ayisha Abdul Basith. A calming oasis of devotion, peace, and spiritual grace that quiets the soul.',
    vibes: ['Spiritual Devotion', 'Prophetic Love', 'Serene Nasheed', 'Heart Peace'],
  },
  {
    id: 'oh-sahib',
    title: 'Oh Sahib',
    artist: 'Zain Zohaib',
    genre: 'Sufi Qawwali / Cinematic OST',
    album: 'Abdullahpur Ka Devdas (Original Soundtrack)',
    year: '2024',
    durationFormatted: '03:07',
    audioSrc: '/audio/oh-sahib-zain-zohaib.mp3',
    accentColor: 'from-amber-500/20 via-red-500/10 to-amber-950/40 border-amber-500/40 text-amber-300',
    quote: '"Oh Sahib tere naam ki main gal vich maala paayie... Meri aashiq akhiyan nu tera deedaar pyara..."',
    whyILoveIt: 'A hauntingly soulful modern Sufi composition by Zain Zohaib. The passionate qawwali vocal runs, rhythmic dholak, and raw emotional resonance capture the agony and devotion of unyielding love.',
    vibes: ['Sufi Qawwali', 'Zain Zohaib', 'Cinematic OST', 'Raw Emotion'],
  },
  {
    id: 'pal-pal',
    title: 'Pal Pal',
    artist: 'Afusic (feat. Ali Soomro)',
    genre: 'Indie Pop / Lo-Fi R&B / Chill Romance',
    album: 'Pal Pal / Single',
    year: '2024',
    durationFormatted: '02:27',
    audioSrc: '/audio/pal-pal-afusic.mp3',
    accentColor: 'from-purple-500/20 via-pink-500/10 to-purple-950/40 border-purple-500/40 text-purple-300',
    quote: '"Pal-pal jeena muhaal mera tere bina, yeh saare nashe bekaar teri aankhon ke siwa... Ghar nahi jaata main baahar rehta tera intezaar..."',
    whyILoveIt: 'The viral, mesmerizing indie groove with an irresistible acoustic rhythm and effortlessly catchy vocal cadence. Melancholic yet deeply romantic late-night listening.',
    vibes: ['Indie Pop', 'Late Night Vibes', 'Viral Hit', 'Chill R&B'],
  },
  {
    id: 'tera-mera-viah',
    title: 'Tera Mera Viah',
    artist: 'Jass Manak',
    genre: 'Punjabi Pop Romance',
    album: 'Age 19 / Geet MP3',
    year: '2019',
    durationFormatted: '03:40',
    audioSrc: '/audio/tera-mera-viah-jass-manak.mp3',
    accentColor: 'from-pink-500/20 via-purple-500/10 to-indigo-950/40 border-pink-500/40 text-pink-300',
    quote: '"Ve main taan tere utte senti hoyi baahli firdi... Sara pind dekhu khad ke, huna jis din tera mera vyaah sohneya..."',
    whyILoveIt: 'One of Jass Manak\'s most infectious and heartfelt melodic compositions. Catchy acoustic groove, playful romantic cadence, and unmatched energetic charm that brightens any mood instantly.',
    vibes: ['Punjabi Romance', 'Jass Manak Hit', 'Upbeat Melodies', 'Feel-Good Energy'],
  },
  {
    id: 'sanso-ki-mala',
    title: 'Sanso Ki Mala Pe',
    artist: 'Ustad Nusrat Fateh Ali Khan',
    genre: 'Sufi Devotional / Qawwali Masterpiece',
    album: 'Mirzapur / Timeless Classics',
    year: 'Classic Edition',
    durationFormatted: '03:02',
    audioSrc: '/audio/sanso-ki-mala-nusrat-fateh-ali-khan.mp3',
    accentColor: 'from-amber-500/20 via-orange-500/10 to-amber-950/40 border-amber-500/40 text-amber-300',
    quote: '"Preetam ka kuch dosh nahi hai, wo to hai nirdosh... Saanson ki maala pe simrun main pi ka naam..."',
    whyILoveIt: 'The pinnacle of Sufi devotion. Ustad Nusrat Fateh Ali Khan weaves divine love into every single breath. A transcendent anthem connecting mortal yearning to spiritual ecstasy.',
    vibes: ['Spiritual Ecstasy', 'Shahenshah-e-Qawwali', 'Transcendent Breath', 'Deep Devotion'],
  },
  {
    id: 'apne-kandhon-pe',
    title: 'Apne Kandhon Pe Ab Mere Qatil',
    artist: 'Ustad Nusrat Fateh Ali Khan',
    genre: 'Soulful Sufi Ghazal / Poetic Tragedy',
    album: 'Live & Timeless Mehfil',
    year: 'Classic',
    durationFormatted: '04:17',
    audioSrc: '/audio/apne-kandhon-pe-nusrat-fateh-ali-khan.mp3',
    accentColor: 'from-blue-500/20 via-cyan-500/10 to-blue-950/40 border-blue-500/40 text-blue-300',
    quote: '"Meri mehfil mein karke andhere, apni mehfil sajaye huye hain... Apne haathon se khanjar chala kar, itna masoom chehra bana kar, apne kaandhon pe ab mere qatil meri mayyat uthaye huye hain..."',
    whyILoveIt: 'Heartbreakingly profound Urdu poetry set to Nusrat sahib\'s raw, emotive vocal delivery. It explores the cruel irony of love, betrayal, and quiet philosophical acceptance.',
    vibes: ['Poetic Tragedy', 'Ghazal Mastery', 'Urdu Shayari', 'Soul-Stirring'],
  },
];

export function VinylLounge() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [liked, setLiked] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [freqBars, setFreqBars] = useState<number[]>([25, 45, 60, 80, 50, 70, 90, 65, 85, 40, 75, 50, 65, 45, 70]);

  const gothamSoundtrack = useGothamSoundtrack();
  const track = TRACKS[currentTrackIndex];
  const scrubberRef = useRef<HTMLDivElement>(null);

  const isLoopingRef = useRef(isLooping);
  useEffect(() => {
    isLoopingRef.current = isLooping;
  }, [isLooping]);

  const currentTrackIndexRef = useRef(currentTrackIndex);
  useEffect(() => {
    currentTrackIndexRef.current = currentTrackIndex;
  }, [currentTrackIndex]);

  // Handle auto next or loop when song ends
  const handleSelectTrack = async (idx: number) => {
    setCurrentTrackIndex(idx);
    const audio = sound.initAudioElement();
    if (!audio) return;

    if (gothamSoundtrack?.isPlaying) {
      gothamSoundtrack.pause();
    }

    await sound.playTrack(TRACKS[idx].audioSrc);
  };

  const handleNext = () => {
    const nextIdx = (currentTrackIndex + 1) % TRACKS.length;
    handleSelectTrack(nextIdx);
  };

  const handlePrev = () => {
    const prevIdx = (currentTrackIndex - 1 + TRACKS.length) % TRACKS.length;
    handleSelectTrack(prevIdx);
  };

  // Setup audio listeners once on mount
  useEffect(() => {
    const audio = sound.initAudioElement();
    if (!audio) return;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      if (audio.duration && !isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration || 0);
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    const handleEnded = () => {
      if (isLoopingRef.current) {
        audio.currentTime = 0;
        audio.play().catch(console.warn);
      } else {
        const nextIdx = (currentTrackIndexRef.current + 1) % TRACKS.length;
        handleSelectTrack(nextIdx);
      }
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
    };
  }, []);

  // Real-time frequency visualizer bars
  useEffect(() => {
    if (!isPlaying) {
      setFreqBars([14, 12, 16, 15, 12, 18, 14, 16, 12, 15, 14, 12, 15, 12, 14]);
      return;
    }

    let animId: number;
    let t = 0;
    const updateSpectrum = () => {
      t += 0.16;
      const sampled: number[] = [];
      for (let i = 0; i < 15; i++) {
        const wave = Math.sin(t * 1.6 + i * 0.45) * 28 + Math.cos(t * 2.1 - i * 0.35) * 22 + 50;
        const jitter = (Math.sin(t * 3.5 + i * 1.1) + 1) * 10;
        sampled.push(Math.max(14, Math.min(96, wave + jitter)));
      }
      setFreqBars(sampled);
      animId = requestAnimationFrame(updateSpectrum);
    };

    animId = requestAnimationFrame(updateSpectrum);
    return () => cancelAnimationFrame(animId);
  }, [isPlaying]);

  const togglePlay = async () => {
    const audio = sound.initAudioElement();
    if (!audio) return;

    if (gothamSoundtrack?.isPlaying) {
      gothamSoundtrack.pause();
    }

    if (!audio.paused && !audio.ended && audio.currentTime > 0) {
      sound.pauseTrack();
    } else {
      await sound.playTrack(track.audioSrc);
    }
  };

  const toggleMute = () => {
    const nextMuted = sound.toggleMute();
    setIsMuted(nextMuted);
  };

  const formatSeconds = (sec: number) => {
    if (!sec || isNaN(sec)) return '00:00';
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleScrubberClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrubberRef.current || !duration) return;
    const rect = scrubberRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    const targetSeconds = ratio * duration;
    sound.seekTrack(targetSeconds);
    setCurrentTime(targetSeconds);
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

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
            <span>ANALOG SOUL • HIGH-FIDELITY AUDIO</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-3">
            The Vinyl Lounge
            <span className="text-xs font-mono py-1 px-2.5 rounded-full bg-zinc-800 text-zinc-300 font-normal">
              33⅓ RPM Hi-Fi
            </span>
          </h3>
          <p className="text-sm text-zinc-400 mt-2 max-w-2xl leading-relaxed">
            Listen to my real hand-picked favorites in high fidelity: spiritual serenity in <span className="text-emerald-300 font-medium">Muhammad Nabina</span>, Zain Zohaib&apos;s intense Sufi OST <span className="text-amber-300 font-medium">Oh Sahib</span>, Afusic&apos;s viral indie groove <span className="text-purple-300 font-medium">Pal Pal</span>, Jass Manak&apos;s <span className="text-pink-300 font-medium">Tera Mera Viah</span>, and Ustad Nusrat Fateh Ali Khan&apos;s timeless classics <span className="text-amber-300 font-medium">Sanso Ki Mala Pe</span> and <span className="text-blue-300 font-medium">Apne Kandhon Pe</span>.
          </p>
        </div>

        <div className="flex items-center gap-3 self-start md:self-auto">
          <button
            type="button"
            onClick={() => setIsLooping(!isLooping)}
            className={`p-2 rounded-xl border transition-all ${
              isLooping
                ? 'bg-blue-500/20 text-blue-300 border-blue-500/40'
                : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white'
            }`}
            title={isLooping ? 'Loop: ON' : 'Loop: OFF'}
          >
            <Repeat className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={toggleMute}
            className={`flex items-center gap-2 text-xs font-mono px-3.5 py-2 rounded-xl border transition-all ${
              isMuted
                ? 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                : 'bg-zinc-900 text-zinc-300 border-zinc-800 hover:text-white hover:border-zinc-700'
            }`}
            title={isMuted ? 'Unmute Sound' : 'Mute Sound'}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
            <span>{isMuted ? 'Muted' : 'Sound: ON'}</span>
          </button>
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
                duration: 5,
                ease: 'linear',
              }}
              className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-gradient-to-tr from-zinc-950 via-zinc-900 to-zinc-950 shadow-2xl flex items-center justify-center cursor-pointer border border-zinc-800 group"
              onClick={togglePlay}
              title={isPlaying ? 'Click to pause turntable' : 'Click to drop needle and play'}
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
            {isPlaying ? 'Now Playing: Real audio active (Click disc to pause)' : 'Turntable ready • Click disc or Play button'}
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
                  {track.artist} • <span className="text-xs text-zinc-400">{track.album}</span>
                </p>
              </div>

              <button
                type="button"
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
            <div className="flex flex-wrap gap-2 pt-1">
              {track.vibes.map((vibe) => (
                <span
                  key={vibe}
                  className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-zinc-800/80 text-zinc-300 border border-zinc-700"
                >
                  #{vibe}
                </span>
              ))}
            </div>

            {/* Scrubber / Progress Bar */}
            <div className="space-y-1.5 pt-2">
              <div
                ref={scrubberRef}
                onClick={handleScrubberClick}
                className="relative w-full h-2 rounded-full bg-zinc-800 cursor-pointer overflow-hidden group"
              >
                <div
                  className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 rounded-full relative transition-all"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              <div className="flex justify-between text-[11px] font-mono text-zinc-400">
                <span>{formatSeconds(currentTime)}</span>
                <span>{duration > 0 ? formatSeconds(duration) : track.durationFormatted}</span>
              </div>
            </div>

            {/* Live Equalizer Visualizer Bars */}
            <div className="pt-2 border-t border-zinc-800 flex items-center justify-between gap-4">
              <div className="flex items-end gap-1.5 h-10 w-48 sm:w-64">
                {freqBars.map((height, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      height: isPlaying ? `${height}%` : '8%',
                    }}
                    transition={{
                      duration: 0.08,
                      ease: 'linear',
                    }}
                    className="flex-1 rounded-full bg-gradient-to-t from-blue-600 via-indigo-500 to-cyan-400"
                    style={{ minHeight: '4px' }}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <Volume2 className="w-4 h-4 text-blue-400" />
                <span>Web Audio Live Spectrum</span>
              </div>
            </div>

            {/* Playback Controls */}
            <div className="pt-2 flex items-center justify-center gap-6">
              <button
                type="button"
                onClick={handlePrev}
                className="p-2.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-colors active:scale-95 cursor-pointer"
                title="Previous Track"
              >
                <SkipBack className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={togglePlay}
                className="p-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 transition-transform active:scale-95 cursor-pointer"
                title={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="w-6 h-6 fill-white" /> : <Play className="w-6 h-6 fill-white ml-0.5" />}
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="p-2.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-colors active:scale-95 cursor-pointer"
                title="Next Track"
              >
                <SkipForward className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Track Selection Pills (6 Tracks Responsive Grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {TRACKS.map((t, idx) => (
              <button
                key={t.id}
                type="button"
                onClick={() => handleSelectTrack(idx)}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                  currentTrackIndex === idx
                    ? 'bg-blue-600/20 border-blue-500 text-white shadow-md'
                    : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                }`}
              >
                <div className="text-[10px] font-mono uppercase text-blue-400 flex items-center justify-between">
                  <span>Track 0{idx + 1}</span>
                  {currentTrackIndex === idx && isPlaying && (
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  )}
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
