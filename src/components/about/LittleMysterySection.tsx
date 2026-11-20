'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Moon } from 'lucide-react';
import { BatIcon } from '../gotham/BatIcon';

export function LittleMysterySection() {
  return (
    <div className="relative rounded-sm overflow-hidden border border-[#232A38] bg-[#0B0E14] text-[#E2E8F0] p-8 sm:p-12 shadow-2xl batcomputer-scanlines">
      {/* Subtle Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#162238]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
        {/* Pulsing animated heart with subtle amber glow */}
        <div className="flex items-center justify-center">
          <div className="relative flex items-center justify-center">
            <motion.div
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.3, 0, 0.3],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute w-12 h-12 rounded-full bg-[#D4A338]/20 blur-sm pointer-events-none"
            />

            <motion.div
              animate={{
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative p-3 rounded-full bg-[#12161F] border border-[#232A38] text-[#D4A338] shadow-lg shadow-[#D4A338]/10"
            >
              <Heart className="w-5 h-5 fill-[#D4A338] text-[#D4A338]" />
            </motion.div>
          </div>
        </div>

        {/* Section Pill */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm text-[11px] font-mono tracking-widest uppercase bg-[#12161F] border border-[#232A38] text-[#D4A338]">
          <Moon className="w-3 h-3 text-[#D4A338]" />
          <span>A QUIET PAGE • UNSPOKEN MEMORY</span>
        </div>

        {/* Delicate handwritten prose reveal */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="space-y-4"
        >
          <p className="text-base sm:text-lg text-[#E2E8F0] font-serif italic leading-relaxed">
            &quot;In a world of constant noise and infinite lines of code, some memories remain whispered like gentle rain on quiet evenings. A quiet presence that gently anchors the heart, unspoken yet ever remembered.&quot;
          </p>

          <p className="text-xs font-mono text-[#8B95A5] tracking-wider">
            [ Preserved in quiet reverie • Between the margins of time ]
          </p>
        </motion.div>

        {/* Delicate decorative divider */}
        <div className="pt-2 flex items-center justify-center gap-2 text-[#232A38]">
          <span className="w-8 h-px bg-[#232A38]" />
          <BatIcon className="w-3.5 h-2 text-[#D4A338]" />
          <span className="w-8 h-px bg-[#232A38]" />
        </div>
      </div>
    </div>
  );
}
