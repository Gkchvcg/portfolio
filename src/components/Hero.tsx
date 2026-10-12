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
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden tech-grid">
      {/* Background radial gradient accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-500/10 dark:bg-indigo-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Bio, CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-200 dark:border-indigo-900/60 bg-indigo-50/70 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 text-xs font-mono font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              <span>{PERSONAL_INFO.eyebrow}</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 dark:text-white leading-[1.12]">
                Building software that{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-500 dark:from-indigo-400 dark:via-indigo-300 dark:to-violet-400">
                  solves real problems.
                </span>
              </h1>

              {/* Dynamic Animated Descriptors */}
              <div className="h-8 flex items-center text-sm sm:text-base font-mono text-zinc-600 dark:text-zinc-400">
                <span className="text-zinc-400 dark:text-zinc-500 mr-2">focus://</span>
                <span className="inline-block py-0.5 px-2 rounded bg-zinc-100 dark:bg-zinc-800/80 text-zinc-900 dark:text-zinc-200 font-semibold border border-zinc-200 dark:border-zinc-700/60 transition-all duration-300">
                  {PERSONAL_INFO.typingDescriptors[descriptorIndex]}
                </span>
              </div>
            </div>

            {/* Supporting text */}
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl leading-relaxed">
              I develop full-stack applications and explore AI-powered systems, data-driven applications, and blockchain technology. Grounded in strong core Computer Science principles and problem solving with 500+ algorithmic problems solved.
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-950 text-sm font-semibold transition-all duration-150 shadow-sm hover:translate-y-[-1px]"
                id="hero-explore-work-btn"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={PERSONAL_INFO.resumePath}
                download={PERSONAL_INFO.resumeFilename}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-all duration-150 shadow-xs hover:translate-y-[-1px]"
                id="hero-download-resume-btn"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <button
                type="button"
                onClick={() => setResumeModalOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-700 bg-white/80 dark:bg-zinc-900/80 text-zinc-800 dark:text-zinc-200 text-sm font-medium transition-colors"
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

          {/* Right Column: Restrained Technical Workspace & Architecture Diagram */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 p-6 backdrop-blur-md shadow-xl card-hover-border">
              {/* Terminal / System Header */}
              <div className="flex items-center justify-between pb-4 border-b border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 font-mono text-xs text-zinc-500 dark:text-zinc-400">
                    maroof@sys-arch:~$
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[11px] font-mono">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>verified-production</span>
                </div>
              </div>

              {/* Technical System Architecture Blueprint */}
              <div className="pt-5 space-y-4 font-mono text-xs">
                {/* Node 1: Client & Interface */}
                <div className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/60 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 mt-0.5">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-zinc-900 dark:text-zinc-200">
                      Frontend & Client Systems
                    </div>
                    <div className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">
                      Next.js 14 App Router · React · Vite · Tailwind · Jetpack Compose
                    </div>
                  </div>
                </div>

                {/* Flow Connector */}
                <div className="flex items-center justify-center text-zinc-400 dark:text-zinc-600">
                  <span className="text-[11px]">↓ async REST / GraphQL / RPC</span>
                </div>

                {/* Node 2: Backend & AI Pipelines */}
                <div className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/60 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-violet-500/10 text-violet-500 dark:text-violet-400 mt-0.5">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-zinc-900 dark:text-zinc-200">
                      Backend Services & AI Inference
                    </div>
                    <div className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">
                      Node.js / Express · FastAPI · Flask · Llama-3 · BLIP · XGBoost
                    </div>
                  </div>
                </div>

                {/* Flow Connector */}
                <div className="flex items-center justify-center text-zinc-400 dark:text-zinc-600">
                  <span className="text-[11px]">↓ distributed state & consensus</span>
                </div>

                {/* Node 3: Database & Web3 Contracts */}
                <div className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/60 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-sky-500/10 text-sky-500 dark:text-sky-400 mt-0.5">
                    <Database className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-zinc-900 dark:text-zinc-200">
                      Data Stores & Smart Contracts
                    </div>
                    <div className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">
                      MongoDB · PostgreSQL · SQLite · Polygon Amoy Solidity (POL/USDC)
                    </div>
                  </div>
                </div>
              </div>

              {/* Engineering Stats Grid */}
              <div className="mt-5 pt-4 border-t border-zinc-200 dark:border-zinc-800 grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded-lg bg-zinc-50 dark:bg-zinc-950/40">
                  <div className="text-base font-bold text-zinc-900 dark:text-white font-mono">
                    500+
                  </div>
                  <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-mono">
                    LeetCode Solved
                  </div>
                </div>

                <div className="p-2 rounded-lg bg-zinc-50 dark:bg-zinc-950/40">
                  <div className="text-base font-bold text-zinc-900 dark:text-white font-mono">
                    15
                  </div>
                  <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-mono">
                    GitHub Projects
                  </div>
                </div>

                <div className="p-2 rounded-lg bg-zinc-50 dark:bg-zinc-950/40">
                  <div className="text-base font-bold text-zinc-900 dark:text-white font-mono">
                    7.9 / 10
                  </div>
                  <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-mono">
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
