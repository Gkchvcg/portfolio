'use client';

import React from 'react';
import { BatIcon } from './BatIcon';

export function GothamAtmosphere() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden" aria-hidden="true">
      {/* Deepest Base Charcoal / Black gradient */}
      <div className="absolute inset-0 bg-[#06070a]" />

      {/* Subtle sweeping searchlight beam */}
      <div className="absolute -top-40 left-1/4 w-[500px] h-[900px] bg-gradient-to-b from-sky-500/8 via-sky-600/3 to-transparent -rotate-12 blur-3xl transform origin-top animate-searchlight" />
      <div className="absolute -top-40 right-1/4 w-[450px] h-[800px] bg-gradient-to-b from-blue-500/6 via-sky-600/2 to-transparent rotate-12 blur-3xl transform origin-top animate-searchlight-delayed" />

      {/* Atmospheric Bat-Signal cloud projection in upper background */}
      <div className="absolute top-16 right-10 sm:right-24 w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-radial from-sky-400/12 via-sky-600/4 to-transparent blur-2xl opacity-60 flex items-center justify-center">
        <div className="w-24 h-24 rounded-full border border-sky-400/20 bg-sky-950/20 flex items-center justify-center p-5 opacity-40">
          <BatIcon className="w-full h-auto text-sky-400/50" />
        </div>
      </div>

      {/* Subtle Gotham grid texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(56,189,248,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.02)_1px,transparent_1px)] bg-[size:48px_48px] opacity-70" />

      {/* Rain canvas / CSS rain drops */}
      <div className="gotham-rain-overlay absolute inset-0 opacity-25" />

      {/* Bottom atmospheric fog vignette */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#06070a] via-[#06070a]/60 to-transparent" />
    </div>
  );
}
