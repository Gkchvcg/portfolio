'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Terminal, Code2, Cpu, Layers, ShieldCheck } from 'lucide-react';
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
      {/* Background ambient midnight/amber glow */}
      <div className="absolute -top-16 left-1/4 w-96 h-96 bg-[#162238]/30 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Section Eyebrow & Title with Word-by-Word Text Reveal */}
      <div className="space-y-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-sm text-xs font-mono font-medium text-[#D4A338] bg-[#12161F] border border-[#232A38] shadow-[0_0_15px_rgba(212,163,56,0.15)]"
        >
          <BatIcon className="w-4 h-2 text-[#D4A338]" />
          <span>WAYNE ENTERPRISES // CLASSIFIED PERSONNEL DOSSIER MH-2027</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-wider text-[#E2E8F0]"
        >
          Personnel Dossier:{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A338] via-[#E2E8F0] to-[#D4A338] drop-shadow-[0_0_20px_rgba(212,163,56,0.3)]">
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
          className="text-base sm:text-lg text-[#8B95A5] leading-relaxed font-normal"
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
          <div className="group relative p-6 rounded-sm border border-[#232A38] bg-[#12161F] backdrop-blur-xl shadow-2xl hover:border-[#D4A338]/50 transition-all duration-300 tactical-bracket batcomputer-scanlines overflow-hidden">
            {/* Subtle amber accent glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4A338]/5 blur-2xl pointer-events-none" />

            {/* Dossier ID Stamp */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#232A38] text-[10px] font-mono text-[#8B95A5]">
              <span className="text-[#D4A338] flex items-center gap-1 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4A338]" />
                SECURITY CLEARANCE: LEVEL 09
              </span>
              <span>FILE: #MH-AKTU</span>
            </div>

            <div className="flex items-center gap-4 relative">
              <div className="relative w-16 h-16 rounded-sm overflow-hidden border border-[#232A38] bg-[#0B0E14] shadow-sm group-hover:scale-105 transition-transform duration-300">
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
                <h3 className="font-display text-lg font-bold uppercase tracking-wider text-[#E2E8F0] flex items-center gap-1.5">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-xs text-[#D4A338] font-mono font-medium">
                  CS & Engineering (2023–2027)
                </p>
                <div className="flex items-center gap-1.5 text-xs text-[#8B95A5] mt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#8B95A5]" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-5 mt-5 border-t border-[#232A38] text-xs">
              <div className="flex items-center justify-between">
                <span className="text-[#8B95A5] font-mono uppercase">Academic Degree</span>
                <span className="font-semibold text-[#E2E8F0]">B.Tech CSE</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#8B95A5] font-mono uppercase">University</span>
                <span className="font-semibold text-[#E2E8F0] text-right truncate max-w-[200px]" title={EDUCATION_DATA.institution}>
                  AKTU, Lucknow
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#8B95A5] font-mono uppercase">Academic CGPA</span>
                <span className="font-semibold text-[#D4A338] font-mono">
                  {EDUCATION_DATA.cgpa}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#8B95A5] font-mono uppercase">LeetCode Solved</span>
                <span className="font-semibold text-[#D4A338] font-mono">
                  500+ Problems
                </span>
              </div>
            </div>
          </div>

          {/* Core Philosophy Quote Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-5 rounded-sm border border-[#232A38] bg-[#12161F] text-xs shadow-md relative overflow-hidden batcomputer-scanlines"
          >
            <div className="text-2xl font-serif text-[#D4A338]/30 absolute -top-1 left-3 select-none leading-none">“</div>
            <p className="relative italic leading-relaxed pt-2 pl-4 text-[#8B95A5]">
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
          className="lg:col-span-8 space-y-6 text-sm sm:text-base text-[#8B95A5] leading-relaxed"
        >
          <div className="space-y-4">
            <p>
              I am a Computer Science & Engineering undergraduate at <strong className="text-[#E2E8F0] font-semibold">Dr. A.P.J. Abdul Kalam Technical University</strong> (2023–2027), holding a <strong className="text-[#D4A338] font-semibold">7.9 / 10 CGPA</strong>. My engineering journey is driven by an obsession with writing resilient, production-quality code that seamlessly bridges intuitive human interfaces with robust distributed backends.
            </p>

            <p>
              Rather than building superficial clones, I architect full-stack software—shipping end-to-end applications with <strong className="text-[#E2E8F0]">React, Next.js, Node.js, Express, and Flask/FastAPI</strong>. In the AI and machine learning sphere, I engineer real-world intelligence pipelines utilizing <strong className="text-[#E2E8F0]">Llama-3 LLM reasoning, BLIP Vision AI, XGBoost, and Meta Prophet time-series forecasting</strong>.
            </p>

            <p>
              My foundations are anchored in <strong className="text-[#E2E8F0]">Data Structures and Algorithms</strong>. With over <strong className="text-[#D4A338] font-semibold">500+ LeetCode problems solved</strong>, I continuously hone problem-solving patterns including graph traversals, dynamic programming, sliding windows, and tree algorithms. I also engineer smart contracts on <strong className="text-[#E2E8F0]">Polygon Amoy</strong> with Solidity.
            </p>
          </div>

          {/* 4 Interactive Pillars with Hover Stagger */}
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div
              whileHover={{ y: -3, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="p-4 rounded-sm border border-[#232A38] bg-[#12161F] backdrop-blur-sm space-y-2 hover:border-[#D4A338]/50 hover:shadow-[0_0_20px_rgba(212,163,56,0.12)] transition-all"
            >
              <div className="flex items-center gap-2 text-[#D4A338] font-display uppercase tracking-wider text-sm font-semibold">
                <Code2 className="w-4 h-4 text-[#D4A338]" />
                <span>Full-Stack Engineering</span>
              </div>
              <p className="text-xs text-[#8B95A5] leading-normal">
                Building responsive web apps, stateful clients, and REST APIs with React, Next.js, Express, MongoDB, and FastAPI.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -3, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="p-4 rounded-sm border border-[#232A38] bg-[#12161F] backdrop-blur-sm space-y-2 hover:border-[#D4A338]/50 hover:shadow-[0_0_20px_rgba(212,163,56,0.12)] transition-all"
            >
              <div className="flex items-center gap-2 text-[#D4A338] font-display uppercase tracking-wider text-sm font-semibold">
                <Cpu className="w-4 h-4 text-[#D4A338]" />
                <span>AI & Applied Machine Learning</span>
              </div>
              <p className="text-xs text-[#8B95A5] leading-normal">
                Deploying LLMs, computer vision (BLIP), XGBoost classification, and time-series models into interactive applications.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -3, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="p-4 rounded-sm border border-[#232A38] bg-[#12161F] backdrop-blur-sm space-y-2 hover:border-[#D4A338]/50 hover:shadow-[0_0_20px_rgba(212,163,56,0.12)] transition-all"
            >
              <div className="flex items-center gap-2 text-[#D4A338] font-display uppercase tracking-wider text-sm font-semibold">
                <Layers className="w-4 h-4 text-[#D4A338]" />
                <span>Blockchain & Web3</span>
              </div>
              <p className="text-xs text-[#8B95A5] leading-normal">
                Designing Solidity smart contracts on Polygon Amoy with Wagmi and RainbowKit for escrow and tokenized reward flows.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -3, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="p-4 rounded-sm border border-[#232A38] bg-[#12161F] backdrop-blur-sm space-y-2 hover:border-[#D4A338]/50 hover:shadow-[0_0_20px_rgba(212,163,56,0.12)] transition-all"
            >
              <div className="flex items-center gap-2 text-[#D4A338] font-display uppercase tracking-wider text-sm font-semibold">
                <Terminal className="w-4 h-4 text-[#D4A338]" />
                <span>Algorithms & Core CS</span>
              </div>
              <p className="text-xs text-[#8B95A5] leading-normal">
                500+ LeetCode problems solved with in-depth knowledge of OS concepts, DBMS normalization, and OOP system design.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
