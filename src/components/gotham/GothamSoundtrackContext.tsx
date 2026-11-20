'use client';

import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

interface GothamSoundtrackContextType {
  isPlaying: boolean;
  volume: number;
  isMuted: boolean;
  play: () => Promise<void>;
  pause: () => void;
  togglePlay: () => void;
  setVolume: (val: number) => void;
  toggleMute: () => void;
  startSoundtrackFromIntro: () => Promise<void>;
}

const GothamSoundtrackContext = createContext<GothamSoundtrackContextType | null>(null);

const SOUNDTRACK_SRC = '/audio/gotham-soundtrack.mp3';

export function GothamSoundtrackProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolumeState] = useState(0.65);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const audio = new Audio(SOUNDTRACK_SRC);
    audio.loop = true;
    audio.volume = volume;
    audio.preload = 'auto';

    audio.onplay = () => setIsPlaying(true);
    audio.onpause = () => setIsPlaying(false);
    audio.onended = () => setIsPlaying(false);

    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  const play = async () => {
    if (!audioRef.current) return;
    try {
      audioRef.current.muted = isMuted;
      audioRef.current.volume = isMuted ? 0 : volume;
      await audioRef.current.play();
      setIsPlaying(true);
    } catch (err) {
      console.warn('Playback blocked or pending user interaction:', err);
      setIsPlaying(false);
    }
  };

  const pause = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  const setVolume = (val: number) => {
    const clamped = Math.max(0, Math.min(1, val));
    setVolumeState(clamped);
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : clamped;
    }
  };

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (audioRef.current) {
      audioRef.current.muted = nextMuted;
      audioRef.current.volume = nextMuted ? 0 : volume;
    }
  };

  const startSoundtrackFromIntro = async () => {
    if (!audioRef.current) return;
    try {
      audioRef.current.currentTime = 0;
      audioRef.current.muted = false;
      audioRef.current.volume = 0;
      await audioRef.current.play();
      setIsPlaying(true);

      // Smooth 2-second volume ramp up to target volume
      const targetVolume = isMuted ? 0 : volume;
      const durationMs = 2000;
      const startTime = performance.now();

      const ramp = (currentTime: number) => {
        if (!audioRef.current || audioRef.current.paused) return;
        const elapsed = currentTime - startTime;
        const progress = Math.min(1, elapsed / durationMs);
        audioRef.current.volume = progress * targetVolume;
        if (progress < 1) {
          requestAnimationFrame(ramp);
        }
      };
      requestAnimationFrame(ramp);
    } catch (err) {
      console.warn('Autoplay blocked:', err);
    }
  };

  return (
    <GothamSoundtrackContext.Provider
      value={{
        isPlaying,
        volume,
        isMuted,
        play,
        pause,
        togglePlay,
        setVolume,
        toggleMute,
        startSoundtrackFromIntro,
      }}
    >
      {children}
    </GothamSoundtrackContext.Provider>
  );
}

export function useGothamSoundtrack() {
  const context = useContext(GothamSoundtrackContext);
  if (!context) {
    throw new Error('useGothamSoundtrack must be used within a GothamSoundtrackProvider');
  }
  return context;
}
