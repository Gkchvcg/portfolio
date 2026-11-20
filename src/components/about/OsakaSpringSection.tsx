'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Wind, Flower2, Heart } from 'lucide-react';
import { SakuraPetals } from './SakuraPetals';
import { BatIcon } from '../gotham/BatIcon';

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
      className="relative rounded-sm overflow-hidden border border-[#232A38] bg-[#0B0E14] text-[#E2E8F0] p-6 sm:p-10 shadow-2xl transition-all batcomputer-scanlines"
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
        className="absolute -top-32 -left-32 w-96 h-96 bg-[#162238]/30 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          x: mousePosition.x * -25,
          y: mousePosition.y * -25,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 100 }}
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#D4A338]/5 rounded-full blur-3xl pointer-events-none"
      />

      {/* Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-[#232A38]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm text-xs font-mono font-medium bg-[#12161F] border border-[#232A38] text-[#D4A338] mb-3">
            <BatIcon className="w-3.5 h-2 text-[#D4A338]" />
            <span>SEASON OF RENEWAL • MONO NO AWARE</span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wider text-[#E2E8F0] flex items-center gap-3">
            Osaka & The Poetry of Spring
          </h3>
          <p className="text-sm text-[#8B95A5] mt-2 max-w-2xl leading-relaxed">
            Spring is nature&apos;s clean git rebase—a tender reminder that beauty is fleeting, vibrant, and worthy of total presence.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-[#D4A338] bg-[#12161F] px-3 py-2 rounded-sm border border-[#232A38] self-start md:self-auto">
          <Wind className="w-4 h-4 animate-pulse text-[#D4A338]" />
          <span>Sakura Breeze & Dotonbori Neon</span>
        </div>
      </div>

      {/* Content Layout */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Visual: Kyoto/Osaka Spring Visual with Ambient Frame */}
        <div className="lg:col-span-6 relative aspect-[16/11] rounded-sm overflow-hidden border border-[#232A38] shadow-2xl group">
          <Image
            src="/images/about/ylia-cherry-blossoms-4k.jpg"
            alt="Osaka Cherry Blossom Canopy"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-1000"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-[#0B0E14]/30 to-transparent" />

          {/* Floating Aesthetic Overlay */}
          <div className="absolute bottom-4 left-4 right-4 p-4 rounded-sm bg-[#050608]/80 backdrop-blur-md border border-[#232A38] space-y-1">
            <div className="flex items-center justify-between text-xs font-mono text-[#D4A338]">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#D4A338]" />
                Osaka-jo & Dotonbori Canals, Japan
              </span>
              <span className="text-[11px] text-[#8B95A5]">Late March • Hanami</span>
            </div>
            <p className="text-xs text-[#E2E8F0] italic">
              &quot;Mono no aware (物の哀れ) — an empathy toward the impermanence of all things.&quot;
            </p>
          </div>
        </div>

        {/* Right Narrative: Why Osaka & Why Spring */}
        <div className="lg:col-span-6 space-y-5">
          {/* Card 1: The Soul of Osaka */}
          <div className="p-5 rounded-sm bg-[#12161F] border border-[#232A38] space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#D4A338] uppercase tracking-wider font-semibold">
                01 // The Spirit of Osaka
              </span>
              <span className="text-xs font-mono text-[#8B95A5]">Kansai Heart</span>
            </div>
            <h4 className="font-display text-lg font-bold uppercase tracking-wider text-[#E2E8F0]">
              Warmth, Street Food & Neon Canals
            </h4>
            <p className="text-xs sm:text-sm text-[#8B95A5] leading-relaxed">
              Unlike the quiet formality of Tokyo, Osaka is alive with infectious laughter, steaming takoyaki stalls along Dotonbori, and a down-to-earth warmth that embraces you immediately. It is the kitchen of Japan and the heart of spontaneous conversation.
            </p>
          </div>

          {/* Card 2: The Philosophy of Spring */}
          <div className="p-5 rounded-sm bg-[#12161F] border border-[#232A38] space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#D4A338] uppercase tracking-wider font-semibold">
                02 // The Ephemeral Beauty of Spring
              </span>
              <span className="text-xs font-mono text-[#8B95A5]">Hanami Season</span>
            </div>
            <h4 className="font-display text-lg font-bold uppercase tracking-wider text-[#E2E8F0]">
              The Transience of Cherry Blossoms
            </h4>
            <p className="text-xs sm:text-sm text-[#8B95A5] leading-relaxed">
              Sakura blossoms bloom for barely two weeks before falling gently to the ground. That fragility is precisely what makes them breathtaking. It teaches me to treat every season of life—and every creative project—with reverence and deliberate intention.
            </p>
          </div>

          {/* Micro Cultural Note */}
          <div className="p-4 rounded-sm bg-[#0B0E14] border border-[#232A38] text-xs text-[#8B95A5] flex items-center justify-between gap-4">
            <div>
              <span className="font-bold text-[#D4A338] font-mono">Dream Journey:</span> An evening walk from Osaka Castle through the lantern-lit cherry blossoms down to the canal-side ramen shops.
            </div>
            <Heart className="w-5 h-5 text-[#D4A338] shrink-0 fill-[#D4A338]/20" />
          </div>
        </div>
      </div>
    </div>
  );
}
