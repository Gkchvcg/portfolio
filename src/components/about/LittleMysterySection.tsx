'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Moon } from 'lucide-react';

export function LittleMysterySection() {
  return (
    <div className="relative rounded-3xl overflow-hidden border border-blue-500/20 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-white p-8 sm:p-12 shadow-2xl">
      {/* Subtle Ambient Blue Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
        {/* Tiny pulsing animated heart with subtle blue glow */}
        <div className="flex items-center justify-center">
          <div className="relative flex items-center justify-center">
            {/* Outer gentle ripple */}
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
              className="absolute w-12 h-12 rounded-full bg-blue-500/20 blur-sm pointer-events-none"
            />

            {/* Inner Heart */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative p-3 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-400 shadow-lg shadow-blue-500/20"
            >
              <Heart className="w-5 h-5 fill-blue-400 text-blue-300" />
            </motion.div>
          </div>
        </div>

        {/* Section Pill */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono tracking-widest uppercase bg-blue-500/10 border border-blue-500/20 text-blue-300">
          <Moon className="w-3 h-3 text-blue-400" />
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
          <p className="text-base sm:text-lg text-zinc-300 font-serif italic leading-relaxed">
            &quot;In a world of constant noise and infinite lines of code, some memories remain whispered like gentle rain on quiet evenings. A quiet presence that gently anchors the heart, unspoken yet ever remembered.&quot;
          </p>

          <p className="text-xs font-mono text-zinc-500 tracking-wider">
            [ Preserved in quiet reverie • Between the margins of time ]
          </p>
        </motion.div>

        {/* Delicate decorative divider */}
        <div className="pt-2 flex items-center justify-center gap-2 text-blue-400/30">
          <span className="w-8 h-px bg-blue-500/20" />
          <Sparkles className="w-3 h-3" />
          <span className="w-8 h-px bg-blue-500/20" />
        </div>
      </div>
    </div>
  );
}
