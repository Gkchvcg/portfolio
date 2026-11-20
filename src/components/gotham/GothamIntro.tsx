'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Sparkles, ChevronRight, Volume2, ArrowRight } from 'lucide-react';
import { BatIcon } from './BatIcon';
import { useGothamSoundtrack } from './GothamSoundtrackContext';

export function GothamIntro() {
  const [showIntro, setShowIntro] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { startSoundtrackFromIntro } = useGothamSoundtrack();

  useEffect(() => {
    setMounted(true);
    // Check if user has already entered in this session
    const hasEntered = sessionStorage.getItem('gotham_entered');
    if (!hasEntered) {
      setShowIntro(true);
    }
  }, []);

  const handleEnterGotham = async () => {
    sessionStorage.setItem('gotham_entered', 'true');
    setShowIntro(false);
    // Start soundtrack immediately on user click
    await startSoundtrackFromIntro();
  };

  const handleSkip = async () => {
    sessionStorage.setItem('gotham_entered', 'true');
    setShowIntro(false);
    await startSoundtrackFromIntro();
  };

  if (!mounted || !showIntro) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="gotham-intro-container"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-50 flex flex-col justify-between bg-[#050608] text-white overflow-hidden select-none"
      >
        {/* Cinematic Shutter Blast Doors (Vertical split reveal) */}
        <motion.div
          exit={{ y: '-100%' }}
          transition={{ duration: 0.85, ease: [0.77, 0, 0.175, 1] }}
          className="absolute top-0 left-0 right-0 h-1/2 bg-[#050608] border-b border-[#1E2430] z-10 pointer-events-none"
        />
        <motion.div
          exit={{ y: '100%' }}
          transition={{ duration: 0.85, ease: [0.77, 0, 0.175, 1] }}
          className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#050608] border-t border-[#1E2430] z-10 pointer-events-none"
        />

        {/* Inner Content Wrapper */}
        <motion.div
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.45 }}
          className="relative z-20 w-full h-full flex flex-col justify-between"
        >
          {/* Skip button top right */}
          <div className="flex justify-between items-center px-6 py-6 sm:px-12">
            <div className="flex items-center gap-2 text-xs font-mono text-[#8B95A5]">
              <span className="w-2 h-2 rounded-full bg-[#D4A338] animate-ping" />
              <span>GOTHAM SECTOR 04 // LAT 40.7128° N // CLEARANCE: LEVEL 5</span>
            </div>

            <button
              type="button"
              onClick={handleSkip}
              className="px-3.5 py-1.5 rounded-full text-xs font-mono text-[#8B95A5] hover:text-[#E2E8F0] border border-[#232A38] hover:border-[#8B95A5]/40 bg-[#12161F]/80 backdrop-blur-md transition-all cursor-pointer"
            >
              Skip Intro →
            </button>
          </div>

          {/* Center: Bat-Signal, Skyline & Enter Gotham CTA */}
          <div className="max-w-4xl mx-auto px-6 text-center space-y-8 my-auto">
            {/* Bat-Signal Projection in the Clouds with Sonar Rings */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, ease: 'easeOut' }}
              className="relative flex items-center justify-center mx-auto"
            >
              {/* Cone of searchlight beam */}
              <div className="absolute -top-32 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-radial from-[#D4A338]/25 via-[#162238]/20 to-transparent blur-3xl pointer-events-none" />

              {/* Sonar / Radar pulse rings */}
              <div className="absolute w-44 h-44 sm:w-56 sm:h-56 rounded-full border border-[#D4A338]/30 animate-ping pointer-events-none" style={{ animationDuration: '3s' }} />
              <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-[#D4A338]/15 pointer-events-none" />
              <div className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full border border-[#D4A338]/5 pointer-events-none" />

              {/* Glowing Searchlight Ring with Bat Emblem */}
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full border border-[#D4A338]/40 bg-radial from-[#D4A338]/20 via-[#0B0E14]/90 to-transparent p-5 sm:p-7 shadow-[0_0_50px_rgba(212,163,56,0.3)] flex items-center justify-center backdrop-blur-md">
                <BatIcon className="w-full h-auto text-[#D4A338] drop-shadow-[0_0_20px_rgba(212,163,56,0.9)]" />
              </div>
            </motion.div>

          {/* Typography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-widest uppercase bg-[#162238]/60 text-[#D4A338] border border-[#D4A338]/30">
              <Shield className="w-3.5 h-3.5 text-[#D4A338]" />
              <span>WAYNE ENTERPRISES APPLIED SCIENCES</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#E2E8F0] uppercase font-display">
              Maroof Husain
            </h1>

            <p className="text-sm sm:text-base font-mono text-[#8B95A5] max-w-xl mx-auto leading-relaxed">
              Software Development Engineer • Algorithmic Problem Solver • Architecting Systems in the Shadows of Gotham.
            </p>
          </motion.div>

          {/* Enter Gotham Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="pt-4 flex flex-col items-center justify-center gap-3"
          >
            <button
              type="button"
              onClick={handleEnterGotham}
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#D4A338] hover:bg-[#E5BE58] text-[#050608] font-bold text-base sm:text-lg tracking-wide uppercase shadow-[0_0_30px_rgba(212,163,56,0.4)] hover:shadow-[0_0_50px_rgba(212,163,56,0.7)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <BatIcon className="w-5 h-auto text-[#050608]" />
              <span>Enter Gotham</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <span className="text-[11px] font-mono text-[#D4A338] flex items-center gap-1.5">
              <Volume2 className="w-3.5 h-3.5 text-[#D4A338]" />
              <span>Activates Signature &quot;Sajan Sajan&quot; Gotham Soundtrack</span>
            </span>
          </motion.div>
        </div>

        {/* Bottom Gotham Skyline Silhouette */}
        <div className="relative z-10 w-full">
          <svg
            viewBox="0 0 1200 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-24 sm:h-36 object-cover text-[#0a0d14] opacity-90"
            preserveAspectRatio="none"
          >
            {/* Background skyline buildings */}
            <path
              d="M0 140 L0 100 L30 100 L30 70 L60 70 L60 110 L100 110 L100 50 L120 50 L120 40 L125 10 L130 40 L130 50 L150 50 L150 110 L200 110 L200 80 L230 80 L230 45 L260 45 L260 90 L300 90 L300 60 L330 60 L330 110 L380 110 L380 30 L400 30 L400 15 L405 5 L410 15 L410 30 L430 30 L430 110 L480 110 L480 75 L520 75 L520 120 L580 120 L580 55 L610 55 L610 85 L660 85 L660 40 L690 40 L690 100 L740 100 L740 65 L770 65 L770 25 L775 0 L780 25 L780 65 L800 65 L800 110 L850 110 L850 70 L890 70 L890 120 L940 120 L940 50 L970 50 L970 85 L1020 85 L1020 45 L1050 45 L1050 100 L1100 100 L1100 60 L1130 60 L1130 90 L1170 90 L1170 120 L1200 120 L1200 140 Z"
              fill="currentColor"
            />
            {/* Foreground building layer */}
            <path
              d="M0 140 L0 115 L40 115 L40 85 L80 85 L80 125 L140 125 L140 70 L180 70 L180 120 L240 120 L240 60 L280 60 L280 105 L350 105 L350 75 L390 75 L390 125 L460 125 L460 85 L510 85 L510 130 L570 130 L570 65 L630 65 L630 110 L700 110 L700 80 L750 80 L750 125 L820 125 L820 60 L870 60 L870 105 L930 105 L930 75 L980 75 L980 120 L1060 120 L1060 80 L1110 80 L1110 125 L1200 125 L1200 140 Z"
              fill="#06080c"
            />
          </svg>
        </div>

          {/* Ambient atmospheric fog & rain streaks */}
          <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black pointer-events-none" />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
