'use client';

import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';

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

const SOUNDTRACK_SRC = '/audio/sajan-sajan.mp3';

export function GothamSoundtrackProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolumeState] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const hasStartedRef = useRef(false);

  const play = useCallback(async () => {
    if (!audioRef.current) return;
    try {
      audioRef.current.muted = isMuted;
      audioRef.current.volume = isMuted ? 0 : volume;
      await audioRef.current.play();
      setIsPlaying(true);
      hasStartedRef.current = true;
    } catch (err) {
      console.warn('Playback blocked or pending user interaction:', err);
      setIsPlaying(false);
    }
  }, [isMuted, volume]);

  const pause = useCallback(() => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
  }, []);

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  }, [isPlaying, pause, play]);

  const setVolume = useCallback((val: number) => {
    const clamped = Math.max(0, Math.min(1, val));
    setVolumeState(clamped);
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : clamped;
    }
  }, [isMuted]);

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => {
      const nextMuted = !prev;
      if (audioRef.current) {
        audioRef.current.muted = nextMuted;
        audioRef.current.volume = nextMuted ? 0 : volume;
      }
      return nextMuted;
    });
  }, [volume]);

  const startSoundtrackFromIntro = useCallback(async () => {
    if (!audioRef.current) return;
    try {
      audioRef.current.muted = false;
      audioRef.current.volume = 0;
      await audioRef.current.play();
      setIsPlaying(true);
      hasStartedRef.current = true;

      // Smooth 1.5-second volume ramp up to target volume
      const targetVolume = isMuted ? 0 : volume;
      const durationMs = 1500;
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
  }, [isMuted, volume]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const audio = new Audio(SOUNDTRACK_SRC);
    audio.loop = true;
    audio.volume = volume;
    audio.preload = 'auto';
    audio.setAttribute('playsinline', 'true');

    audio.onplay = () => setIsPlaying(true);
    audio.onpause = () => setIsPlaying(false);
    audio.onended = () => setIsPlaying(false);

    audioRef.current = audio;

    // Attempt auto-play immediately when anyone enters the website
    const attemptAutoStart = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
        hasStartedRef.current = true;
      } catch {
        // Autoplay policy prevented immediate playback without user gesture.
        // Listen for the very first interaction anywhere on the document.
        const handleFirstInteraction = async () => {
          if (hasStartedRef.current || !audioRef.current) return;
          try {
            audioRef.current.muted = false;
            audioRef.current.volume = volume;
            await audioRef.current.play();
            setIsPlaying(true);
            hasStartedRef.current = true;
          } catch (e) {
            console.warn('Interaction play attempt:', e);
          } finally {
            cleanupInteractionListeners();
          }
        };

        const cleanupInteractionListeners = () => {
          window.removeEventListener('pointerdown', handleFirstInteraction);
          window.removeEventListener('click', handleFirstInteraction);
          window.removeEventListener('keydown', handleFirstInteraction);
          window.removeEventListener('touchstart', handleFirstInteraction);
        };

        window.addEventListener('pointerdown', handleFirstInteraction, { passive: true, once: true });
        window.addEventListener('click', handleFirstInteraction, { passive: true, once: true });
        window.addEventListener('keydown', handleFirstInteraction, { passive: true, once: true });
        window.addEventListener('touchstart', handleFirstInteraction, { passive: true, once: true });
      }
    };

    attemptAutoStart();

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

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
