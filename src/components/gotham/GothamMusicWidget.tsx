'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Music, Disc3 } from 'lucide-react';
import { useGothamSoundtrack } from './GothamSoundtrackContext';

export function GothamMusicWidget() {
  const { isPlaying, togglePlay, volume, setVolume, isMuted, toggleMute } = useGothamSoundtrack();
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  return (
    <div className="relative flex items-center gap-1.5 p-1 rounded-xl bg-[#0B0E14]/90 border border-[#232A38] shadow-md backdrop-blur-md">
      {/* Play/Pause Button */}
      <button
        type="button"
        onClick={togglePlay}
        className={`p-1.5 rounded-lg transition-all flex items-center justify-center cursor-pointer ${
          isPlaying
            ? 'bg-[#D4A338]/20 text-[#D4A338] border border-[#D4A338]/40 shadow-[0_0_12px_rgba(212,163,56,0.3)]'
            : 'text-[#8B95A5] hover:text-[#E2E8F0] hover:bg-[#12161F]'
        }`}
        title={isPlaying ? 'Pause Gotham Theme' : 'Play Gotham Theme'}
        aria-label={isPlaying ? 'Pause Gotham Theme' : 'Play Gotham Theme'}
      >
        {isPlaying ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current ml-0.5" />}
      </button>

      {/* Mini Equalizer Waveform Bars (animate when playing) */}
      <div
        onClick={togglePlay}
        className="flex items-end gap-0.5 h-4 px-1 cursor-pointer"
        title="Gotham Soundtrack: Sajan Sajan"
      >
        {[40, 80, 55, 95].map((height, i) => (
          <motion.div
            key={i}
            animate={{
              height: isPlaying ? [`${Math.max(20, height * 0.3)}%`, `${height}%`, `${Math.max(15, height * 0.4)}%`] : '25%',
            }}
            transition={{
              repeat: isPlaying ? Infinity : 0,
              duration: 0.5 + i * 0.12,
              ease: 'easeInOut',
            }}
            className={`w-0.5 rounded-full transition-colors ${
              isPlaying ? 'bg-[#D4A338] shadow-[0_0_6px_rgba(212,163,56,0.8)]' : 'bg-zinc-600'
            }`}
            style={{ minHeight: '3px' }}
          />
        ))}
      </div>

      {/* Track Label on Desktop */}
      <span className="hidden xl:inline text-[10px] font-mono font-medium text-[#8B95A5] select-none pr-1">
        GOTHAM AUDIO
      </span>

      {/* Volume Button & Hover Slider */}
      <div className="relative">
        <button
          type="button"
          onClick={() => setShowVolumeSlider(!showVolumeSlider)}
          className={`p-1.5 rounded-lg text-[#8B95A5] hover:text-[#E2E8F0] transition-colors cursor-pointer ${
            isMuted ? 'text-rose-400' : ''
          }`}
          title="Soundtrack Volume"
          aria-label="Soundtrack Volume"
        >
          {isMuted || volume === 0 ? (
            <VolumeX className="w-3.5 h-3.5" />
          ) : (
            <Volume2 className="w-3.5 h-3.5" />
          )}
        </button>

        {/* Volume Popover Slider */}
        <AnimatePresence>
          {showVolumeSlider && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 8 }}
              className="absolute right-0 top-full mt-2 p-2.5 rounded-xl bg-[#0B0E14] border border-[#232A38] shadow-2xl z-50 flex flex-col gap-2 w-36 backdrop-blur-xl"
            >
              <div className="flex items-center justify-between text-[10px] font-mono text-[#8B95A5]">
                <span>VOLUME</span>
                <span>{isMuted ? '0%' : `${Math.round(volume * 100)}%`}</span>
              </div>

              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={(e) => {
                  setVolume(parseFloat(e.target.value));
                }}
                className="w-full accent-[#D4A338] h-1 bg-[#12161F] rounded-lg cursor-pointer"
              />

              <button
                type="button"
                onClick={toggleMute}
                className="text-[10px] font-mono text-[#8B95A5] hover:text-[#D4A338] text-left pt-1 border-t border-[#232A38] flex items-center justify-between cursor-pointer"
              >
                <span>{isMuted ? 'Unmute Audio' : 'Mute Audio'}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4A338]" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
