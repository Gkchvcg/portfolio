'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Sparkles, Terminal, Code2, Cpu, Layers, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_DATA } from '@/data/portfolioData';
import { BatIcon } from '../gotham/BatIcon';

interface JournalIntroProps {
  onOpenMystery?: () => void;
}

export function JournalIntro({ onOpenMystery }: JournalIntroProps) {
  const introHeadline = "Driven by algorithmic clarity, end-to-end full-stack systems, and integrating machine learning into production software.";
  const words = introHeadline.split(' ');

  return (
    <div className="relative space-y-12">
      {/* Background ambient blue glow */}
      <div className="absolute -top-16 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse" />

      {/* Section Eyebrow & Title with Word-by-Word Text Reveal */}
      <div className="space-y-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-sky-400 bg-sky-950/60 border border-sky-500/30 shadow-[0_0_15px_rgba(56,189,248,0.2)]"
        >
          <BatIcon className="w-4 h-2 text-sky-400" />
          <span>WAYNE ENTERPRISES // CLASSIFIED PERSONNEL DOSSIER MH-2027</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white"
        >
          Personnel Dossier:{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-blue-500 drop-shadow-[0_0_25px_rgba(56,189,248,0.35)]">
            Maroof Husain
          </span>
        </motion.h2>

        {/* Sophisticated Staggered Word Reveal */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.035, delayChildren: 0.2 },
            },
          }}
          className="text-base sm:text-xl text-zinc-300 leading-relaxed font-normal"
        >
          {words.map((word, idx) => (
            <motion.span
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 12, filter: 'blur(4px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
              }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block mr-1.5"
            >
              {word}
            </motion.span>
          ))}
        </motion.p>
      </div>

      {/* Main Intro Grid: Profile Snapshot + Progressive Narrative */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left Column: Portrait & Snapshot Card with Tactical 3D Depth */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-4 space-y-6"
        >
          <div className="group relative p-6 rounded-2xl border border-zinc-800 bg-[#07090e]/95 backdrop-blur-xl shadow-2xl hover:border-sky-500/50 transition-all duration-300 tactical-bracket batcomputer-scanlines overflow-hidden">
            {/* Subtle blue accent glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 blur-2xl pointer-events-none" />

            {/* Dossier ID Stamp */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-800 text-[10px] font-mono text-zinc-400">
              <span className="text-sky-400 flex items-center gap-1 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                SECURITY CLEARANCE: LEVEL 09
              </span>
              <span>FILE: #MH-AKTU</span>
            </div>

            <div className="flex items-center gap-4 relative">
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-zinc-700 bg-zinc-800 shadow-sm group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={PERSONAL_INFO.avatarUrl}
                  alt={PERSONAL_INFO.name}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-1.5">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-xs text-sky-400 font-mono font-medium">
                  CS & Engineering (2023–2027)
                </p>
                <div className="flex items-center gap-1.5 text-xs text-zinc-400 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-5 mt-5 border-t border-zinc-800 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-zinc-400">Academic Degree</span>
                <span className="font-semibold text-zinc-200">B.Tech CSE</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-400">University</span>
                <span className="font-semibold text-zinc-200 text-right truncate max-w-[200px]" title={EDUCATION_DATA.institution}>
                  AKTU, Lucknow
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-400">Academic CGPA</span>
                <span className="font-semibold text-emerald-400 font-mono">
                  {EDUCATION_DATA.cgpa}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-400">LeetCode Solved</span>
                <span className="font-semibold text-amber-400 font-mono">
                  500+ Problems
                </span>
              </div>
            </div>
          </div>

          {/* Core Philosophy Quote Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-5 rounded-2xl border border-sky-500/30 bg-[#07090e]/95 text-xs text-sky-200 shadow-md relative overflow-hidden batcomputer-scanlines"
          >
            <div className="text-2xl font-serif text-sky-500/40 absolute -top-1 left-3 select-none leading-none">“</div>
            <p className="relative italic leading-relaxed pt-2 pl-4 text-zinc-300">
              I prefer understanding why things work under the hood rather than simply memorizing how to invoke them.
            </p>
          </motion.div>
        </motion.div>

        {/* Right Column: Progressive Bio Storytelling & Technical Pillars */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="lg:col-span-8 space-y-6 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed"
        >
          <div className="space-y-4">
            <p>
              I am a Computer Science & Engineering undergraduate at <strong className="text-zinc-900 dark:text-white font-semibold">Dr. A.P.J. Abdul Kalam Technical University</strong> (2023–2027), holding a <strong className="text-zinc-900 dark:text-white font-semibold">7.9 / 10 CGPA</strong>. My engineering journey is driven by an obsession with writing resilient, production-quality code that seamlessly bridges intuitive human interfaces with robust distributed backends.
            </p>

            <p>
              Rather than building superficial clones, I architect full-stack software—shipping end-to-end applications with <strong className="text-zinc-900 dark:text-white">React, Next.js, Node.js, Express, and Flask/FastAPI</strong>. In the AI and machine learning sphere, I engineer real-world intelligence pipelines utilizing <strong className="text-zinc-900 dark:text-white">Llama-3 LLM reasoning, BLIP Vision AI, XGBoost, and Meta Prophet time-series forecasting</strong>.
            </p>

            <p>
              My foundations are anchored in <strong className="text-zinc-900 dark:text-white">Data Structures and Algorithms</strong>. With over <strong className="text-zinc-900 dark:text-white font-semibold">500+ LeetCode problems solved</strong>, I continuously hone problem-solving patterns including graph traversals, dynamic programming, sliding windows, and tree algorithms. I also engineer smart contracts on <strong className="text-zinc-900 dark:text-white">Polygon Amoy</strong> with Solidity.
            </p>
          </div>

          {/* 4 Interactive Pillars with Hover Stagger */}
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div
              whileHover={{ y: -3, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="p-4 rounded-xl border border-zinc-800 bg-[#07090e]/95 backdrop-blur-sm space-y-2 hover:border-sky-500/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)] transition-all"
            >
              <div className="flex items-center gap-2 text-sky-400 font-semibold text-sm">
                <Code2 className="w-4 h-4" />
                <span>Full-Stack Engineering</span>
              </div>
              <p className="text-xs text-zinc-400 leading-normal">
                Building responsive web apps, stateful clients, and REST APIs with React, Next.js, Express, MongoDB, and FastAPI.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -3, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="p-4 rounded-xl border border-zinc-800 bg-[#07090e]/95 backdrop-blur-sm space-y-2 hover:border-sky-500/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)] transition-all"
            >
              <div className="flex items-center gap-2 text-sky-300 font-semibold text-sm">
                <Cpu className="w-4 h-4" />
                <span>AI & Applied Machine Learning</span>
              </div>
              <p className="text-xs text-zinc-400 leading-normal">
                Deploying LLMs, computer vision (BLIP), XGBoost classification, and time-series models into interactive applications.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -3, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="p-4 rounded-xl border border-zinc-800 bg-[#07090e]/95 backdrop-blur-sm space-y-2 hover:border-sky-500/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)] transition-all"
            >
              <div className="flex items-center gap-2 text-sky-400 font-semibold text-sm">
                <Layers className="w-4 h-4" />
                <span>Blockchain & Web3</span>
              </div>
              <p className="text-xs text-zinc-400 leading-normal">
                Designing Solidity smart contracts on Polygon Amoy with Wagmi and RainbowKit for escrow and tokenized reward flows.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -3, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="p-4 rounded-xl border border-zinc-800 bg-[#07090e]/95 backdrop-blur-sm space-y-2 hover:border-sky-500/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)] transition-all"
            >
              <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                <Terminal className="w-4 h-4" />
                <span>Algorithms & Core CS</span>
              </div>
              <p className="text-xs text-zinc-400 leading-normal">
                500+ LeetCode problems solved with in-depth knowledge of OS concepts, DBMS normalization, and OOP system design.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
