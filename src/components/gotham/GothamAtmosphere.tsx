'use client';

import React from 'react';
import { BatIcon } from './BatIcon';

export function GothamAtmosphere() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden select-none" aria-hidden="true">
      {/* Deepest Base Charcoal / Black gradient */}
      <div className="absolute inset-0 bg-[#020306]" />

      {/* Subtle sweeping searchlight beam */}
      <div className="absolute -top-40 left-1/4 w-[550px] h-[950px] bg-gradient-to-b from-sky-500/10 via-sky-600/3 to-transparent -rotate-12 blur-3xl transform origin-top animate-searchlight" />
      <div className="absolute -top-40 right-1/4 w-[500px] h-[850px] bg-gradient-to-b from-blue-500/8 via-sky-600/2 to-transparent rotate-12 blur-3xl transform origin-top animate-searchlight-delayed" />

      {/* Atmospheric Bat-Signal cloud projection in upper background */}
      <div className="absolute top-16 right-10 sm:right-28 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-radial from-sky-400/15 via-sky-600/5 to-transparent blur-2xl opacity-70 flex items-center justify-center">
        <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border border-sky-400/30 bg-sky-950/30 flex items-center justify-center p-6 opacity-60 shadow-[0_0_50px_rgba(56,189,248,0.25)]">
          <BatIcon className="w-full h-auto text-sky-400/80 drop-shadow-[0_0_12px_rgba(56,189,248,0.6)]" />
        </div>
      </div>

      {/* Subtle Gotham grid texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(56,189,248,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.025)_1px,transparent_1px)] bg-[size:48px_48px] opacity-75" />

      {/* Rain canvas / CSS rain drops */}
      <div className="gotham-rain-overlay absolute inset-0 opacity-20" />

      {/* Distant Gotham Skyline Silhouette across lower horizon */}
      <div className="absolute bottom-0 left-0 right-0 h-44 sm:h-64 opacity-25 overflow-hidden">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-full object-cover text-[#070b14]"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          {/* Skyline polygon with towers, antenna spires & gothic silhouettes */}
          <path d="M0,320 L0,220 L30,220 L30,200 L45,200 L45,180 L55,180 L55,130 L60,130 L60,110 L62,70 L64,110 L64,130 L75,130 L75,210 L110,210 L110,170 L140,170 L140,240 L180,240 L180,150 L195,150 L195,90 L200,90 L200,60 L202,30 L204,60 L205,90 L210,90 L210,150 L230,150 L230,220 L270,220 L270,160 L310,160 L310,230 L360,230 L360,140 L380,140 L380,100 L390,100 L390,70 L392,40 L394,70 L395,100 L410,100 L410,140 L430,140 L430,250 L480,250 L480,190 L520,190 L520,240 L570,240 L570,120 L585,120 L585,80 L590,80 L592,50 L594,80 L600,80 L600,120 L620,120 L620,220 L670,220 L670,180 L710,180 L710,250 L760,250 L760,130 L780,130 L780,90 L785,90 L787,60 L789,90 L800,90 L800,130 L820,130 L820,230 L870,230 L870,170 L910,170 L910,240 L960,240 L960,150 L980,150 L980,110 L990,110 L992,80 L994,110 L1010,110 L1010,150 L1030,150 L1030,220 L1080,220 L1080,160 L1120,160 L1120,240 L1170,240 L1170,140 L1190,140 L1190,100 L1200,100 L1202,50 L1204,100 L1215,100 L1215,140 L1230,140 L1230,230 L1280,230 L1280,190 L1320,190 L1320,250 L1370,250 L1370,180 L1410,180 L1410,210 L1440,210 L1440,320 Z" />
        </svg>

        {/* Faint tower beacon lights */}
        <div className="absolute top-[30px] left-[14%] w-1.5 h-1.5 rounded-full bg-red-500/80 animate-ping" />
        <div className="absolute top-[40px] left-[27%] w-1.5 h-1.5 rounded-full bg-amber-400/80 animate-pulse" />
        <div className="absolute top-[50px] left-[41%] w-1.5 h-1.5 rounded-full bg-red-500/80 animate-ping" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-[60px] left-[55%] w-1.5 h-1.5 rounded-full bg-amber-400/80 animate-pulse" style={{ animationDelay: '0.8s' }} />
        <div className="absolute top-[50px] left-[83%] w-1.5 h-1.5 rounded-full bg-red-500/80 animate-ping" style={{ animationDelay: '2.1s' }} />
      </div>

      {/* Bottom atmospheric fog vignette */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#020306] via-[#020306]/80 to-transparent" />

      {/* HUD Telemetry Watermark in corners */}
      <div className="hidden lg:block absolute bottom-3 left-4 text-[10px] font-mono text-zinc-600/60 tracking-wider">
        SYS.LOC: GOTHAM SECTOR 04 // 40.7128° N, 74.0060° W // WAYNETECH SATELLITE COMMS
      </div>
      <div className="hidden lg:block absolute bottom-3 right-4 text-[10px] font-mono text-zinc-600/60 tracking-wider">
        ENCRYPTION: AES-256 GCM // CLEARANCE: LVL-9 // BATCAVE TERMINAL
      </div>
    </div>
  );
}
