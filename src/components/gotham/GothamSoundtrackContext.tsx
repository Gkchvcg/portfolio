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
  const [volume, setVolumeState] = useState(0.75);
  const [isMuted, setIsMuted] = useState(false);
  const hasStartedRef = useRef(false);

  const play = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      audio.muted = isMuted;
      audio.volume = isMuted ? 0 : volume;
      if (audio.paused) {
        await audio.play();
      }
      setIsPlaying(true);
      hasStartedRef.current = true;
    } catch (err) {
      console.warn('Soundtrack play blocked or waiting for user interaction:', err);
      setIsPlaying(false);
    }
  }, [isMuted, volume]);

  const pause = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    setIsPlaying(false);
  }, []);

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  }, [isPlaying, pause, play]);

  const setVolume = useCallback(
    (val: number) => {
      const clamped = Math.max(0, Math.min(1, val));
      setVolumeState(clamped);
      if (audioRef.current) {
        audioRef.current.volume = isMuted ? 0 : clamped;
      }
    },
    [isMuted]
  );

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
    const audio = audioRef.current;
    if (!audio) return;
    try {
      audio.muted = false;
      audio.volume = isMuted ? 0 : (volume || 0.75);
      if (audio.paused) {
        await audio.play();
      }
      setIsPlaying(true);
      hasStartedRef.current = true;
    } catch (err) {
      console.warn('Intro soundtrack start notice:', err);
    }
  }, [isMuted, volume]);

  // Aggressive auto-play on initial load with instant unlock on first interaction
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;
    audio.muted = false;

    let cleanupListeners: (() => void) | null = null;

    const startAudio = async () => {
      try {
        // Attempt 1: Direct unmuted playback on load
        audio.muted = false;
        audio.volume = volume;
        await audio.play();
        setIsPlaying(true);
        hasStartedRef.current = true;
      } catch {
        // Attempt 2: If browser blocked unmuted autoplay without gesture, start muted
        // so it buffers and streams in sync immediately
        try {
          audio.muted = true;
          await audio.play();
          setIsPlaying(true);
        } catch {
          // Both blocked until user gesture
        }

        // Capture-phase listener for ANY user interaction across the entire viewport
        const unlock = async () => {
          if (!audioRef.current) return;
          try {
            audioRef.current.muted = false;
            audioRef.current.volume = volume;
            if (audioRef.current.paused) {
              await audioRef.current.play();
            }
            setIsPlaying(true);
            hasStartedRef.current = true;
          } catch (e) {
            console.warn('Gesture soundtrack unlock error:', e);
          } finally {
            if (cleanupListeners) cleanupListeners();
          }
        };

        const events = [
          'click',
          'pointerdown',
          'touchstart',
          'touchend',
          'keydown',
          'scroll',
          'wheel',
        ];

        cleanupListeners = () => {
          events.forEach((ev) => {
            window.removeEventListener(ev, unlock, { capture: true });
            document.removeEventListener(ev, unlock, { capture: true });
          });
        };

        events.forEach((ev) => {
          window.addEventListener(ev, unlock, { capture: true, passive: true });
          document.addEventListener(ev, unlock, { capture: true, passive: true });
        });
      }
    };

    startAudio();

    return () => {
      if (cleanupListeners) cleanupListeners();
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
      {/* Permanent, first-class DOM audio element with high privileges */}
      <audio
        ref={audioRef}
        src={SOUNDTRACK_SRC}
        loop
        preload="auto"
        playsInline
        className="hidden pointer-events-none"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      />
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
