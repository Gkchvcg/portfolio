'use client';

import React from 'react';
import Image from 'next/image';
import {
  GraduationCap,
  Code2,
  Terminal,
  Cpu,
  Layers,
  MapPin,
  Calendar,
  Award,
  Sparkles,
} from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_DATA } from '@/data/portfolioData';

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28 border-t border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
            <span>01 // BACKGROUND & PHILOSOPHY</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
            About Me
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
            Computer Science undergraduate driven by algorithmic clarity, end-to-end full-stack development, and integrating machine learning into production software.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Portrait & Quick Snapshot Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm space-y-5">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800">
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
                  <h3 className="text-base font-bold text-zinc-900 dark:text-white">
                    {PERSONAL_INFO.name}
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                    CS & Engineering (2023–2027)
                  </p>
                  <div className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{PERSONAL_INFO.location}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-zinc-100 dark:border-zinc-800 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500 dark:text-zinc-400">Degree</span>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-200">B.Tech CSE</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500 dark:text-zinc-400">University</span>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-200 text-right truncate max-w-[200px]" title={EDUCATION_DATA.institution}>
                    AKTU, Lucknow
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500 dark:text-zinc-400">Academic CGPA</span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400 font-mono">
                    {EDUCATION_DATA.cgpa}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500 dark:text-zinc-400">LeetCode Solved</span>
                  <span className="font-semibold text-amber-600 dark:text-amber-400 font-mono">
                    500+ Problems
                  </span>
                </div>
              </div>
            </div>

            {/* Quote Card */}
            <div className="p-5 rounded-xl border border-indigo-100 dark:border-indigo-950/60 bg-indigo-50/40 dark:bg-indigo-950/20 text-xs text-indigo-900 dark:text-indigo-200 italic leading-relaxed">
              &quot;I prefer understanding why things work under the hood rather than simply memorizing how to invoke them.&quot;
            </div>
          </div>

          {/* Right Column: Bio Narrative & Technical Pillars */}
          <div className="lg:col-span-8 space-y-6 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
            <p>
              I am a Computer Science & Engineering undergraduate at <strong className="text-zinc-900 dark:text-white font-semibold">Dr. A.P.J. Abdul Kalam Technical University</strong> (2023–2027), holding a <strong className="text-zinc-900 dark:text-white font-semibold">7.9 / 10 CGPA</strong>. My development journey focuses on writing robust, production-quality code that bridges user experience with clean distributed backends and machine learning intelligence.
            </p>

            <p>
              Rather than building superficial demos, I dive into full-stack architecture—crafting end-to-end applications with <strong className="text-zinc-900 dark:text-white">React, Next.js, Node.js, Express, and Flask/FastAPI</strong>. In the AI and data domain, I build practical intelligence pipelines incorporating <strong className="text-zinc-900 dark:text-white">Llama-3 LLM reasoning, BLIP Vision AI, XGBoost, and Meta Prophet time-series forecasting</strong>.
            </p>

            <p>
              My foundations are anchored in <strong className="text-zinc-900 dark:text-white">Data Structures and Algorithms</strong>. With over <strong className="text-zinc-900 dark:text-white font-semibold">500+ LeetCode problems solved</strong>, I continuously practice problem-solving patterns including graph traversals, dynamic programming, sliding windows, and tree algorithms. I also explore blockchain protocols and smart contract development using <strong className="text-zinc-900 dark:text-white">Solidity on Polygon Amoy</strong>.
            </p>

            {/* Core Pillars Grid */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 space-y-2">
                <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold text-sm">
                  <Code2 className="w-4 h-4" />
                  <span>Full-Stack Engineering</span>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-normal">
                  Building responsive, accessible web applications and REST APIs with React, Next.js, Express, MongoDB, and FastAPI.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 space-y-2">
                <div className="flex items-center gap-2 text-violet-600 dark:text-violet-400 font-semibold text-sm">
                  <Cpu className="w-4 h-4" />
                  <span>AI & Applied Machine Learning</span>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-normal">
                  Deploying LLMs, computer vision (BLIP), XGBoost classification, and time-series models into interactive applications.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 space-y-2">
                <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 font-semibold text-sm">
                  <Layers className="w-4 h-4" />
                  <span>Blockchain & Web3</span>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-normal">
                  Designing Solidity smart contracts on Polygon Amoy with Wagmi and RainbowKit for escrow and tokenized reward flows.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 space-y-2">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold text-sm">
                  <Terminal className="w-4 h-4" />
                  <span>Algorithms & Core CS</span>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-normal">
                  500+ LeetCode problems solved with in-depth knowledge of OS concepts, DBMS normalization, and OOP system design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
