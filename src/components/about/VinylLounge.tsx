'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Heart,
  Repeat,
} from 'lucide-react';
import { sound } from './soundEngine';
import { useGothamSoundtrack } from '@/components/gotham/GothamSoundtrackContext';
import { BatIcon } from '../gotham/BatIcon';

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
    accentColor: 'border-[#D4A338]/40 text-[#D4A338]',
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
    accentColor: 'border-[#D4A338]/40 text-[#D4A338]',
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
    accentColor: 'border-[#8E9BAE]/40 text-[#E2E8F0]',
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
    accentColor: 'border-[#D4A338]/40 text-[#D4A338]',
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
    year: '1979',
    durationFormatted: '07:12',
    audioSrc: '/audio/sanso-ki-mala-pe-mirzapur.mp3',
    accentColor: 'border-[#D4A338]/40 text-[#D4A338]',
    quote: '"Sanso ki mala pe simroon main pi ka naam... Premi ke rang mein rang gayi chunariya, ab rang dooja chadhe na mohe..."',
    whyILoveIt: 'The quintessential masterpiece of divine surrender and spiritual love. Nusrat Sahib\'s legendary vocal improvisation elevates the soul beyond earthly boundaries.',
    vibes: ['Sufi Devotion', 'Timeless Classic', 'Qawwali Heritage', 'Nusrat Sahab'],
  },
  {
    id: 'apne-kandhon-pe',
    title: 'Apne Kandhon Pe (Parda)',
    artist: 'Ustad Nusrat Fateh Ali Khan',
    genre: 'Urdu Ghazal / Sufi Acoustic Poetry',
    album: 'Parda / Classical Collection',
    year: '1984',
    durationFormatted: '05:48',
    audioSrc: '/audio/apne-kandhon-pe-nusrat-fateh-ali-khan.mp3',
    accentColor: 'border-[#8E9BAE]/40 text-[#E2E8F0]',
    quote: '"Apne kandhon pe ab mere qatil, meri mayyat uthaye huye hain... Parda daari ka aalam to dekho, dil mein reh kar bhi parda kiye hain..."',
    whyILoveIt: 'A masterclass in Urdu poetic metaphor and acoustic depth. Explores the paradoxical nature of existence, love, and spiritual mystery.',
    vibes: ['Urdu Ghazal', 'Poetic Metaphor', 'Acoustic Depth', 'Mystic Parda'],
  },
  {
    id: 'hikaru-nara',
    title: 'Hikaru Nara (光るなら)',
    artist: 'Goose house',
    genre: 'J-Pop / Anime OST Masterpiece',
    album: 'Shigatsu wa Kimi no Uso (Original Soundtrack)',
    year: '2014',
    durationFormatted: '02:03',
    audioSrc: '/audio/hikaru-nara-your-lie-in-april.mp3',
    accentColor: 'border-[#F5C518]/40 text-[#F5C518]',
    quote: '"Niji no saki ni wa... kimi ga iru kara. It was you, you were the one who made me realize: even darkness will shine like the night sky full of stars."',
    whyILoveIt: 'The radiant, tear-tinged anthem of Your Lie in April. Celebrates the fleeting beauty of youth, color, and music that lingers long after spring has passed.',
    vibes: ['Your Lie in April', 'Goose house', 'Spring Sakura', 'Radiant OST'],
  },
];

export function VinylLounge() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLooping, setIsLooping] = useState(false);
  const [liked, setLiked] = useState(false);
  const [freqBars, setFreqBars] = useState<number[]>([14, 12, 16, 15, 12, 18, 14, 16, 12, 15, 14, 12, 15, 12, 14]);

  const scrubberRef = useRef<HTMLDivElement>(null);
  const track = TRACKS[currentTrackIndex];
  const gothamSoundtrack = useGothamSoundtrack();

  const handleSelectTrack = async (idx: number) => {
    setCurrentTrackIndex(idx);
    const selected = TRACKS[idx];
    if (gothamSoundtrack?.isPlaying) {
      gothamSoundtrack.pause();
    }
    await sound.playTrack(selected.audioSrc);
  };

  const handleNext = () => {
    const nextIdx = (currentTrackIndex + 1) % TRACKS.length;
    handleSelectTrack(nextIdx);
  };

  const handlePrev = () => {
    const prevIdx = (currentTrackIndex - 1 + TRACKS.length) % TRACKS.length;
    handleSelectTrack(prevIdx);
  };

  useEffect(() => {
    const audio = sound.initAudioElement();
    if (!audio) return;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration || 0);
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => {
      if (isLooping) {
        audio.currentTime = 0;
        audio.play().catch(() => {});
      } else {
        handleNext();
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
    <div className="relative rounded-sm overflow-hidden border border-[#232A38] bg-[#0B0E14] text-[#E2E8F0] p-6 sm:p-10 shadow-2xl batcomputer-scanlines">
      {/* Ambient Lighting Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#162238]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4A338]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-[#232A38]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm text-xs font-mono font-medium bg-[#12161F] border border-[#232A38] text-[#D4A338] mb-3">
            <BatIcon className="w-3.5 h-2 text-[#D4A338]" />
            <span>ANALOG SOUL • HIGH-FIDELITY AUDIO</span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wider text-[#E2E8F0] flex items-center gap-3">
            The Vinyl Lounge
            <span className="text-xs font-mono py-0.5 px-2.5 rounded-sm bg-[#12161F] text-[#8B95A5] border border-[#232A38] font-normal">
              33⅓ RPM Hi-Fi
            </span>
          </h3>
          <p className="text-sm text-[#8B95A5] mt-2 max-w-2xl leading-relaxed">
            Listen to my real hand-picked favorites in high fidelity: spiritual serenity in <span className="text-[#D4A338] font-medium">Muhammad Nabina</span>, Zain Zohaib&apos;s intense Sufi OST <span className="text-[#D4A338] font-medium">Oh Sahib</span>, Afusic&apos;s viral indie groove <span className="text-[#E2E8F0] font-medium">Pal Pal</span>, Jass Manak&apos;s <span className="text-[#D4A338] font-medium">Tera Mera Viah</span>, and Ustad Nusrat Fateh Ali Khan&apos;s timeless classics <span className="text-[#D4A338] font-medium">Sanso Ki Mala Pe</span> and <span className="text-[#8E9BAE] font-medium">Apne Kandhon Pe</span>.
          </p>
        </div>

        <div className="flex items-center gap-3 self-start md:self-auto">
          <button
            type="button"
            onClick={() => setIsLooping(!isLooping)}
            className={`p-2 rounded-sm border transition-all ${
              isLooping
                ? 'bg-[#1E2430] text-[#D4A338] border-[#D4A338]/50'
                : 'bg-[#12161F] text-[#8B95A5] border-[#232A38] hover:text-[#E2E8F0]'
            }`}
            title={isLooping ? 'Loop: ON' : 'Loop: OFF'}
          >
            <Repeat className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={toggleMute}
            className={`flex items-center gap-2 text-xs font-mono px-3.5 py-2 rounded-sm border transition-all ${
              isMuted
                ? 'bg-[#1E2430] text-[#8E9BAE] border-[#8E9BAE]/40'
                : 'bg-[#12161F] text-[#8B95A5] border-[#232A38] hover:text-[#E2E8F0]'
            }`}
            title={isMuted ? 'Unmute Sound' : 'Mute Sound'}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-[#8E9BAE]" /> : <Volume2 className="w-4 h-4 text-[#D4A338]" />}
            <span>{isMuted ? 'Muted' : 'Sound: ON'}</span>
          </button>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Interactive 33 RPM Vinyl Turntable */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
            {/* Turntable Platter Base */}
            <div className="absolute inset-0 rounded-full bg-[#050608] border-4 border-[#232A38] shadow-2xl flex items-center justify-center">
              <div className="absolute inset-1 rounded-full border border-[#232A38]/50 border-dashed" />
            </div>

            {/* Vinyl Record */}
            <motion.div
              animate={{ rotate: isPlaying ? 360 : 0 }}
              transition={{
                repeat: isPlaying ? Infinity : 0,
                duration: 5,
                ease: 'linear',
              }}
              className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-gradient-to-tr from-[#050608] via-[#12161F] to-[#050608] shadow-2xl flex items-center justify-center cursor-pointer border border-[#232A38] group"
              onClick={togglePlay}
              title={isPlaying ? 'Click to pause turntable' : 'Click to drop needle and play'}
            >
              {/* Vinyl Microgrooves */}
              <div className="absolute inset-3 rounded-full border border-[#232A38]/80 pointer-events-none" />
              <div className="absolute inset-6 rounded-full border border-[#232A38]/60 pointer-events-none" />
              <div className="absolute inset-9 rounded-full border border-[#232A38]/80 pointer-events-none" />
              <div className="absolute inset-12 rounded-full border border-[#232A38]/60 pointer-events-none" />
              <div className="absolute inset-16 rounded-full border border-[#232A38]/80 pointer-events-none" />

              {/* Center Vinyl Label */}
              <div className="relative w-24 h-24 rounded-full bg-[#0B0E14] border-2 border-[#D4A338] p-2 shadow-inner flex flex-col items-center justify-center text-center">
                <span className="text-[8px] font-mono uppercase tracking-widest text-[#D4A338]">
                  SIDE A • 33 RPM
                </span>
                <span className="text-[10px] font-bold text-[#E2E8F0] leading-tight truncate max-w-[80px]">
                  {track.title}
                </span>
                <span className="text-[8px] text-[#8B95A5] truncate max-w-[70px]">
                  {track.artist}
                </span>

                {/* Spindle hole */}
                <div className="w-3.5 h-3.5 rounded-full bg-[#050608] border border-[#232A38] mt-1 shadow-inner" />
              </div>
            </motion.div>

            {/* Tonearm Stylus */}
            <div
              className={`absolute top-0 right-2 w-16 h-28 origin-top-right transition-transform duration-700 pointer-events-none ${
                isPlaying ? 'rotate-12' : '-rotate-12'
              }`}
            >
              <div className="w-1.5 h-20 bg-gradient-to-b from-[#8E9BAE] to-[#232A38] rounded-full shadow-lg ml-auto mr-4" />
              <div className="w-4 h-6 bg-[#D4A338] rounded-sm shadow-md ml-auto mr-3 border border-[#232A38]" />
            </div>
          </div>

          <p className="text-xs font-mono text-[#8B95A5] mt-4 flex items-center gap-1.5">
            <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-[#D4A338] animate-ping' : 'bg-[#232A38]'}`} />
            {isPlaying ? 'Now Playing: Real audio active (Click disc to pause)' : 'Turntable ready • Click disc or Play button'}
          </p>
        </div>

        {/* Right Column: Player Controls, Equalizer & Poetic Narrative */}
        <div className="lg:col-span-7 space-y-6">
          {/* Active Track Metadata Card */}
          <div className="p-6 rounded-sm bg-[#12161F] border border-[#232A38] space-y-4 backdrop-blur-md batcomputer-scanlines">
            <div className="flex items-center justify-between gap-4">
              <div>
                <span className="px-2.5 py-0.5 rounded-sm text-[10px] font-mono uppercase tracking-wider bg-[#0B0E14] text-[#D4A338] border border-[#232A38]">
                  {track.genre}
                </span>
                <h4 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-wider text-[#E2E8F0] mt-2">
                  {track.title}
                </h4>
                <p className="text-sm font-medium text-[#D4A338]">
                  {track.artist} • <span className="text-xs text-[#8B95A5]">{track.album}</span>
                </p>
              </div>

              <button
                type="button"
                onClick={() => setLiked(!liked)}
                className={`p-3 rounded-sm border transition-all ${
                  liked
                    ? 'bg-[#1E2430] border-[#D4A338]/50 text-[#D4A338]'
                    : 'bg-[#0B0E14] border-[#232A38] text-[#8B95A5] hover:text-[#E2E8F0]'
                }`}
                title={liked ? 'In Favorites' : 'Add to Favorites'}
              >
                <Heart className={`w-5 h-5 ${liked ? 'fill-[#D4A338]' : ''}`} />
              </button>
            </div>

            {/* Lyric Quote */}
            <div className="p-3.5 rounded-sm bg-[#0B0E14] border border-[#232A38] text-xs sm:text-sm text-[#E2E8F0] italic">
              {track.quote}
            </div>

            {/* Why Maroof Loves It */}
            <p className="text-xs sm:text-sm text-[#8B95A5] leading-relaxed">
              {track.whyILoveIt}
            </p>

            {/* Vibe Tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {track.vibes.map((vibe) => (
                <span
                  key={vibe}
                  className="px-2.5 py-1 rounded-sm text-[11px] font-mono bg-[#0B0E14] text-[#8B95A5] border border-[#232A38]"
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
                className="relative w-full h-1.5 rounded-sm bg-[#0B0E14] border border-[#232A38] cursor-pointer overflow-hidden group"
              >
                <div
                  className="h-full bg-[#D4A338] rounded-sm relative transition-all"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              <div className="flex justify-between text-[11px] font-mono text-[#8B95A5]">
                <span>{formatSeconds(currentTime)}</span>
                <span>{duration > 0 ? formatSeconds(duration) : track.durationFormatted}</span>
              </div>
            </div>

            {/* Live Equalizer Visualizer Bars */}
            <div className="pt-2 border-t border-[#232A38] flex items-center justify-between gap-4">
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
                    className="flex-1 rounded-sm bg-[#D4A338]"
                    style={{ minHeight: '3px' }}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-[#8B95A5]">
                <Volume2 className="w-4 h-4 text-[#D4A338]" />
                <span>Web Audio Live Spectrum</span>
              </div>
            </div>

            {/* Playback Controls */}
            <div className="pt-2 flex items-center justify-center gap-6">
              <button
                type="button"
                onClick={handlePrev}
                className="p-2.5 rounded-sm bg-[#0B0E14] border border-[#232A38] hover:border-[#D4A338]/40 text-[#8B95A5] hover:text-[#E2E8F0] transition-colors active:scale-95 cursor-pointer"
                title="Previous Track"
              >
                <SkipBack className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={togglePlay}
                className="p-3.5 rounded-sm bg-[#D4A338] hover:bg-[#E5B54A] text-black shadow-lg shadow-[#D4A338]/20 transition-transform active:scale-95 cursor-pointer font-bold"
                title={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="w-6 h-6 fill-black" /> : <Play className="w-6 h-6 fill-black ml-0.5" />}
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="p-2.5 rounded-sm bg-[#0B0E14] border border-[#232A38] hover:border-[#D4A338]/40 text-[#8B95A5] hover:text-[#E2E8F0] transition-colors active:scale-95 cursor-pointer"
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
                className={`p-3.5 rounded-sm border text-left transition-all cursor-pointer ${
                  currentTrackIndex === idx
                    ? 'bg-[#1E2430] border-[#D4A338] text-[#E2E8F0] shadow-md shadow-[#D4A338]/5'
                    : 'bg-[#12161F] border-[#232A38] text-[#8B95A5] hover:border-[#8E9BAE]/40 hover:text-[#E2E8F0]'
                }`}
              >
                <div className="text-[10px] font-mono uppercase text-[#D4A338] flex items-center justify-between">
                  <span>Track 0{idx + 1}</span>
                  {currentTrackIndex === idx && isPlaying && (
                    <span className="w-2 h-2 rounded-full bg-[#D4A338] animate-ping" />
                  )}
                </div>
                <div className="text-xs font-bold truncate mt-1 text-[#E2E8F0]">
                  {t.title}
                </div>
                <div className="text-[11px] text-[#8B95A5] truncate">
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
