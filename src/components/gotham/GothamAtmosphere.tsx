'use client';

import React, { useEffect, useRef } from 'react';
import { BatIcon } from './BatIcon';

export function GothamAtmosphere() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle pool for rain and subtle drifting fog
    const isMobile = width < 768;
    const rainCount = isMobile ? 35 : 70;
    const rainDrops: { x: number; y: number; length: number; speed: number; opacity: number }[] = [];

    for (let i = 0; i < rainCount; i++) {
      rainDrops.push({
        x: Math.random() * width,
        y: Math.random() * height,
        length: Math.random() * 20 + 10,
        speed: Math.random() * 12 + 16,
        opacity: Math.random() * 0.15 + 0.05,
      });
    }

    // Drifting subtle fog bokeh particles
    const fogCount = isMobile ? 4 : 8;
    const fogBlobs: { x: number; y: number; radius: number; speedX: number; opacity: number }[] = [];
    for (let i = 0; i < fogCount; i++) {
      fogBlobs.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 120 + 80,
        speedX: Math.random() * 0.2 + 0.05,
        opacity: Math.random() * 0.03 + 0.015,
      });
    }

    let isVisible = true;
    const observer = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0].isIntersecting;
      },
      { threshold: 0 }
    );
    observer.observe(canvas);

    const render = () => {
      if (isVisible) {
        ctx.clearRect(0, 0, width, height);

        // Draw drifting fog
        for (let i = 0; i < fogBlobs.length; i++) {
          const blob = fogBlobs[i];
          blob.x += blob.speedX;
          if (blob.x - blob.radius > width) {
            blob.x = -blob.radius;
            blob.y = Math.random() * height;
          }

          const grad = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.radius);
          grad.addColorStop(0, `rgba(22, 34, 56, ${blob.opacity})`);
          grad.addColorStop(1, 'rgba(22, 34, 56, 0)');
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
          ctx.fill();
        }

        // Draw slanted rain
        ctx.lineWidth = 1;
        for (let i = 0; i < rainDrops.length; i++) {
          const drop = rainDrops[i];
          ctx.strokeStyle = `rgba(139, 149, 165, ${drop.opacity})`;
          ctx.beginPath();
          ctx.moveTo(drop.x, drop.y);
          // Slanted rain angle
          ctx.lineTo(drop.x - drop.length * 0.25, drop.y + drop.length);
          ctx.stroke();

          drop.y += drop.speed;
          drop.x -= drop.speed * 0.25;

          if (drop.y > height) {
            drop.y = -drop.length;
            drop.x = Math.random() * (width + 100);
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden select-none" aria-hidden="true">
      {/* Deepest Base Void Backdrop */}
      <div className="absolute inset-0 bg-[#050608]" />

      {/* GPU Accelerated Canvas for Slanted Rain & Volumetric Fog */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-80"
      />

      {/* Volumetric Sweeping Searchlight Cones (Nolan Era Realism) */}
      <div className="absolute -top-40 left-1/4 w-[550px] h-[950px] bg-gradient-to-b from-[#162238]/30 via-[#D4A338]/5 to-transparent -rotate-12 blur-3xl transform origin-top animate-searchlight" />
      <div className="absolute -top-40 right-1/4 w-[500px] h-[850px] bg-gradient-to-b from-[#162238]/25 via-slate-400/5 to-transparent rotate-12 blur-3xl transform origin-top animate-searchlight-delayed" />

      {/* Atmospheric Bat-Signal Cloud Projection in Upper Background */}
      <div className="absolute top-16 right-10 sm:right-28 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-radial from-[#D4A338]/20 via-[#162238]/20 to-transparent blur-2xl opacity-75 flex items-center justify-center">
        <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border border-[#D4A338]/40 bg-[#0B0E14]/80 flex items-center justify-center p-6 opacity-80 shadow-[0_0_50px_rgba(212,163,56,0.25)]">
          <BatIcon className="w-full h-auto text-[#D4A338] drop-shadow-[0_0_15px_rgba(212,163,56,0.8)]" />
        </div>
      </div>

      {/* Faint Tactical 40px Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(142,155,174,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(142,155,174,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-75" />

      {/* Distant Gotham Skyline Silhouette across lower horizon */}
      <div className="absolute bottom-0 left-0 right-0 h-44 sm:h-64 opacity-25 overflow-hidden">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-full object-cover text-[#070b14]"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,320 L0,220 L30,220 L30,200 L45,200 L45,180 L55,180 L55,130 L60,130 L60,110 L62,70 L64,110 L64,130 L75,130 L75,210 L110,210 L110,170 L140,170 L140,240 L180,240 L180,150 L195,150 L195,90 L200,90 L200,60 L202,30 L204,60 L205,90 L210,90 L210,150 L230,150 L230,220 L270,220 L270,160 L310,160 L310,230 L360,230 L360,140 L380,140 L380,100 L390,100 L390,70 L392,40 L394,70 L395,100 L410,100 L410,140 L430,140 L430,250 L480,250 L480,190 L520,190 L520,240 L570,240 L570,120 L585,120 L585,80 L590,80 L592,50 L594,80 L600,80 L600,120 L620,120 L620,220 L670,220 L670,180 L710,180 L710,250 L760,250 L760,130 L780,130 L780,90 L785,90 L787,60 L789,90 L800,90 L800,130 L820,130 L820,230 L870,230 L870,170 L910,170 L910,240 L960,240 L960,150 L980,150 L980,110 L990,110 L992,80 L994,110 L1010,110 L1010,150 L1030,150 L1030,220 L1080,220 L1080,160 L1120,160 L1120,240 L1170,240 L1170,140 L1190,140 L1190,100 L1200,100 L1202,50 L1204,100 L1215,100 L1215,140 L1230,140 L1230,230 L1280,230 L1280,190 L1320,190 L1320,250 L1370,250 L1370,180 L1410,180 L1410,210 L1440,210 L1440,320 Z" />
        </svg>

        {/* Faint tower beacon lights */}
        <div className="absolute top-[30px] left-[14%] w-1.5 h-1.5 rounded-full bg-red-500/80 animate-ping" />
        <div className="absolute top-[40px] left-[27%] w-1.5 h-1.5 rounded-full bg-amber-400/80 animate-pulse" />
        <div className="absolute top-[50px] left-[41%] w-1.5 h-1.5 rounded-full bg-red-500/80 animate-ping" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-[60px] left-[55%] w-1.5 h-1.5 rounded-full bg-amber-400/80 animate-pulse" style={{ animationDelay: '0.8s' }} />
        <div className="absolute top-[50px] left-[83%] w-1.5 h-1.5 rounded-full bg-red-500/80 animate-ping" style={{ animationDelay: '2.1s' }} />
      </div>

      {/* Subterranean Batcave Depth Fog Vignette */}
      <div className="absolute bottom-0 left-0 right-0 h-72 bg-gradient-to-t from-[#050608] via-[#050608]/85 to-transparent" />

      {/* HUD Telemetry Watermark in corners */}
      <div className="hidden lg:block absolute bottom-3 left-4 text-[10px] font-mono text-zinc-500/50 tracking-wider">
        SYS.LOC: GOTHAM SECTOR 04 // 40.7128° N, 74.0060° W // WAYNETECH SATELLITE COMMS
      </div>
      <div className="hidden lg:block absolute bottom-3 right-4 text-[10px] font-mono text-zinc-500/50 tracking-wider">
        ENCRYPTION: AES-256 GCM // CLEARANCE: LEVEL 5 // BATCAVE TERMINAL
      </div>
    </div>
  );
}
