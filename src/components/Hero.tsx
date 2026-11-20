'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Download,
  Code2,
  Terminal,
  Database,
  Cpu,
  ShieldCheck,
  Sparkles,
  Layers,
  CheckCircle2,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './icons/BrandIcons';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { ResumeModal } from './ResumeModal';
import { BatIcon } from './gotham/BatIcon';

export function Hero() {
  const [descriptorIndex, setDescriptorIndex] = useState(0);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setDescriptorIndex((prev) => (prev + 1) % PERSONAL_INFO.typingDescriptors.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background searchlight accent & Gotham ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-sky-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Bio, CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Gotham Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-500/30 bg-sky-950/40 text-sky-300 text-xs font-mono font-medium tracking-wide shadow-[0_0_15px_rgba(56,189,248,0.15)]">
              <BatIcon className="w-3.5 h-auto text-sky-400" />
              <span>GOTHAM SECTOR 04 • {PERSONAL_INFO.eyebrow}</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
                Building software that{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-blue-500 drop-shadow-[0_0_25px_rgba(56,189,248,0.4)]">
                  solves real problems.
                </span>
              </h1>

              {/* Dynamic Animated Descriptors */}
              <div className="h-8 flex items-center text-sm sm:text-base font-mono text-zinc-400">
                <span className="text-sky-500/80 mr-2">focus://</span>
                <span className="inline-block py-0.5 px-2.5 rounded bg-zinc-900 text-sky-300 font-semibold border border-sky-500/30 transition-all duration-300 shadow-inner">
                  {PERSONAL_INFO.typingDescriptors[descriptorIndex]}
                </span>
              </div>
            </div>

            {/* Supporting text */}
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed">
              I develop full-stack applications and explore AI-powered systems, data-driven applications, and blockchain technology. Grounded in strong core Computer Science principles and problem solving with 500+ algorithmic problems solved.
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700 hover:border-sky-500/50 text-sm font-semibold transition-all duration-150 shadow-md hover:shadow-[0_0_20px_rgba(56,189,248,0.2)] hover:translate-y-[-1px]"
                id="hero-explore-work-btn"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 text-sky-400" />
              </Link>

              <a
                href={PERSONAL_INFO.resumePath}
                download={PERSONAL_INFO.resumeFilename}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-zinc-950 text-sm font-bold transition-all duration-150 shadow-[0_0_20px_rgba(56,189,248,0.35)] hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] hover:translate-y-[-1px]"
                id="hero-download-resume-btn"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <button
                type="button"
                onClick={() => setResumeModalOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-zinc-800 hover:border-zinc-700 bg-zinc-900/80 text-zinc-300 hover:text-white text-sm font-medium transition-colors"
                id="hero-preview-resume-btn"
              >
                <span>View CV In-Browser</span>
              </button>
            </div>

            {/* Verified Profile Links */}
            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800/80">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3">
                Verified Developer Profiles
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://github.com/Gkchvcg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 bg-white/50 dark:bg-zinc-900/50 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-colors"
                  id="hero-github-link"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub (@Gkchvcg)</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/maroof-husain-arima/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 bg-white/50 dark:bg-zinc-900/50 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-colors"
                  id="hero-linkedin-link"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-sky-500" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://leetcode.com/u/MaroofHusain/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 bg-white/50 dark:bg-zinc-900/50 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-colors"
                  id="hero-leetcode-link"
                >
                  <LeetCodeIcon className="w-3.5 h-3.5 text-amber-500" />
                  <span>LeetCode (500+)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Gotham Technical Workspace & Batcomputer Architecture */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-zinc-800 bg-[#07090e]/95 p-6 backdrop-blur-xl shadow-2xl bat-border-glow tactical-bracket batcomputer-scanlines overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 blur-3xl pointer-events-none" />
              {/* Terminal / Batcomputer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block animate-pulse" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-400 inline-block shadow-[0_0_10px_rgba(56,189,248,0.9)]" />
                  <span className="ml-2 font-mono text-xs text-sky-400 font-semibold flex items-center gap-1.5 tracking-tight">
                    <BatIcon className="w-3.5 h-auto text-sky-400" />
                    batcomputer@gotham-r&d:~$
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-sky-500/10 text-sky-300 border border-sky-500/30 text-[10px] font-mono tracking-wider">
                  <CheckCircle2 className="w-3 h-3 text-sky-400" />
                  <span>WAYNE-SYS-ARMED</span>
                </div>
              </div>

              {/* Technical System Architecture Blueprint */}
              <div className="pt-5 space-y-4 font-mono text-xs">
                {/* Node 1: Client & Interface */}
                <div className="p-3 rounded-xl border border-zinc-800/80 bg-zinc-950/70 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20 mt-0.5">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-zinc-200">
                      Frontend & Client Systems
                    </div>
                    <div className="text-[11px] text-zinc-400 mt-0.5">
                      Next.js 14 App Router · React · Vite · Tailwind · Jetpack Compose
                    </div>
                  </div>
                </div>

                {/* Flow Connector */}
                <div className="flex items-center justify-center text-sky-500/40">
                  <span className="text-[11px]">↓ async REST / GraphQL / RPC</span>
                </div>

                {/* Node 2: Backend & AI Pipelines */}
                <div className="p-3 rounded-xl border border-zinc-800/80 bg-zinc-950/70 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 mt-0.5">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-zinc-200">
                      Backend Services & AI Inference
                    </div>
                    <div className="text-[11px] text-zinc-400 mt-0.5">
                      Node.js / Express · FastAPI · Flask · Llama-3 · BLIP · XGBoost
                    </div>
                  </div>
                </div>

                {/* Flow Connector */}
                <div className="flex items-center justify-center text-sky-500/40">
                  <span className="text-[11px]">↓ distributed state & consensus</span>
                </div>

                {/* Node 3: Database & Web3 Contracts */}
                <div className="p-3 rounded-xl border border-zinc-800/80 bg-zinc-950/70 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20 mt-0.5">
                    <Database className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-zinc-200">
                      Data Stores & Smart Contracts
                    </div>
                    <div className="text-[11px] text-zinc-400 mt-0.5">
                      MongoDB · PostgreSQL · SQLite · Polygon Amoy Solidity (POL/USDC)
                    </div>
                  </div>
                </div>
              </div>

              {/* Engineering Stats Grid */}
              <div className="mt-5 pt-4 border-t border-zinc-800 grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded-lg bg-zinc-950/60 border border-zinc-800/60">
                  <div className="text-base font-bold text-sky-400 font-mono">
                    500+
                  </div>
                  <div className="text-[10px] text-zinc-400 font-mono">
                    LeetCode Solved
                  </div>
                </div>

                <div className="p-2 rounded-lg bg-zinc-950/60 border border-zinc-800/60">
                  <div className="text-base font-bold text-sky-400 font-mono">
                    15
                  </div>
                  <div className="text-[10px] text-zinc-400 font-mono">
                    GitHub Projects
                  </div>
                </div>

                <div className="p-2 rounded-lg bg-zinc-950/60 border border-zinc-800/60">
                  <div className="text-base font-bold text-emerald-400 font-mono">
                    7.9 / 10
                  </div>
                  <div className="text-[10px] text-zinc-400 font-mono">
                    B.Tech CGPA
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ResumeModal isOpen={resumeModalOpen} onClose={() => setResumeModalOpen(false)} />
    </section>
  );
}
