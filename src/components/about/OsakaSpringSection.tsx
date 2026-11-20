'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, MapPin, Compass, Wind, Sun, Flower2, Heart } from 'lucide-react';
import { SakuraPetals } from './SakuraPetals';

export function OsakaSpringSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setMousePosition({ x, y });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative rounded-3xl overflow-hidden border border-pink-500/20 dark:border-sky-500/20 bg-zinc-950 text-white p-6 sm:p-10 shadow-2xl transition-all"
    >
      {/* Floating Cherry Blossom Petals */}
      <SakuraPetals count={26} />

      {/* Gentle Parallax Ambient Lighting */}
      <motion.div
        animate={{
          x: mousePosition.x * 25,
          y: mousePosition.y * 25,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 100 }}
        className="absolute -top-32 -left-32 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          x: mousePosition.x * -25,
          y: mousePosition.y * -25,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 100 }}
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl pointer-events-none"
      />

      {/* Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-zinc-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-pink-500/10 border border-pink-500/30 text-pink-300 mb-3">
            <Flower2 className="w-3.5 h-3.5 text-pink-400" />
            <span>SEASON OF RENEWAL • MONO NO AWARE</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-3">
            Osaka & The Poetry of Spring
          </h3>
          <p className="text-sm text-zinc-400 mt-2 max-w-2xl leading-relaxed">
            Spring is nature&apos;s clean git rebase—a tender reminder that beauty is fleeting, vibrant, and worthy of total presence.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-pink-300 bg-pink-950/40 px-3 py-2 rounded-xl border border-pink-800/40 self-start md:self-auto">
          <Wind className="w-4 h-4 animate-pulse" />
          <span>Sakura Breeze & Dotonbori Neon</span>
        </div>
      </div>

      {/* Content Layout */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Visual: Kyoto/Osaka Spring Visual with Ambient Frame */}
        <div className="lg:col-span-6 relative aspect-[16/11] rounded-2xl overflow-hidden border border-pink-500/30 shadow-2xl group">
          <Image
            src="/images/about/ylia-cherry-blossoms-4k.jpg"
            alt="Osaka Cherry Blossom Canopy"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-1000"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />

          {/* Floating Aesthetic Overlay */}
          <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 space-y-1">
            <div className="flex items-center justify-between text-xs font-mono text-pink-300">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-pink-400" />
                Osaka-jo & Dotonbori Canals, Japan
              </span>
              <span className="text-[11px] text-zinc-400">Late March • Hanami</span>
            </div>
            <p className="text-xs text-zinc-200 italic">
              &quot;Mono no aware (物の哀れ) — an empathy toward the impermanence of all things.&quot;
            </p>
          </div>
        </div>

        {/* Right Narrative: Why Osaka & Why Spring */}
        <div className="lg:col-span-6 space-y-5">
          {/* Card 1: The Soul of Osaka */}
          <div className="p-5 rounded-2xl bg-zinc-900/70 border border-zinc-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-sky-400 uppercase tracking-wider font-semibold">
                01 // The Spirit of Osaka
              </span>
              <span className="text-xs font-mono text-zinc-500">Kansai Heart</span>
            </div>
            <h4 className="text-lg font-bold text-white">
              Warmth, Street Food & Neon Canals
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Unlike the quiet formality of Tokyo, Osaka is alive with infectious laughter, steaming takoyaki stalls along Dotonbori, and a down-to-earth warmth that embraces you immediately. It is the kitchen of Japan and the heart of spontaneous conversation.
            </p>
          </div>

          {/* Card 2: The Philosophy of Spring */}
          <div className="p-5 rounded-2xl bg-zinc-900/70 border border-zinc-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-pink-400 uppercase tracking-wider font-semibold">
                02 // The Ephemeral Beauty of Spring
              </span>
              <span className="text-xs font-mono text-zinc-500">Hanami Season</span>
            </div>
            <h4 className="text-lg font-bold text-white">
              The Transience of Cherry Blossoms
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Sakura blossoms bloom for barely two weeks before falling gently to the ground. That fragility is precisely what makes them breathtaking. It teaches me to treat every season of life—and every creative project—with reverence and deliberate intention.
            </p>
          </div>

          {/* Micro Cultural Note */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-pink-950/30 to-sky-950/30 border border-pink-500/20 text-xs text-zinc-300 flex items-center justify-between gap-4">
            <div>
              <span className="font-bold text-pink-300 font-mono">Dream Journey:</span> An evening walk from Osaka Castle through the lantern-lit cherry blossoms down to the canal-side ramen shops.
            </div>
            <Heart className="w-5 h-5 text-pink-400 shrink-0 fill-pink-500/30" />
          </div>
        </div>
      </div>
    </div>
  );
}
