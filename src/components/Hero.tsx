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
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#162238]/30 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Bio, CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Gotham Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D4A338]/30 bg-[#162238]/60 text-[#D4A338] text-xs font-mono font-medium tracking-wide shadow-[0_0_15px_rgba(212,163,56,0.15)]">
              <BatIcon className="w-3.5 h-auto text-[#D4A338]" />
              <span>GOTHAM SECTOR 04 // LAT 40.7128° N • {PERSONAL_INFO.eyebrow}</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#E2E8F0] leading-[1.12] font-display">
                Building software that{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A338] via-[#F3CE75] to-[#E2E8F0] drop-shadow-[0_0_25px_rgba(212,163,56,0.4)]">
                  solves real problems.
                </span>
              </h1>

              {/* Dynamic Animated Descriptors */}
              <div className="h-8 flex items-center text-sm sm:text-base font-mono text-[#8B95A5]">
                <span className="text-[#D4A338] mr-2">focus://</span>
                <span className="inline-block py-0.5 px-2.5 rounded bg-[#12161F] text-[#E2E8F0] font-semibold border border-[#232A38] transition-all duration-300 shadow-inner">
                  {PERSONAL_INFO.typingDescriptors[descriptorIndex]}
                </span>
              </div>
            </div>

            {/* Supporting text */}
            <p className="text-base sm:text-lg text-[#8B95A5] max-w-2xl leading-relaxed">
              I develop full-stack applications and explore AI-powered systems, data-driven applications, and blockchain technology. Grounded in strong core Computer Science principles and problem solving with 500+ algorithmic problems solved.
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#12161F] hover:bg-[#1A202C] text-[#E2E8F0] border border-[#232A38] hover:border-[#D4A338]/50 text-sm font-semibold transition-all duration-150 shadow-md hover:shadow-[0_0_20px_rgba(212,163,56,0.2)] hover:translate-y-[-1px] cursor-pointer"
                id="hero-explore-work-btn"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 text-[#D4A338]" />
              </Link>

              <a
                href={PERSONAL_INFO.resumePath}
                download={PERSONAL_INFO.resumeFilename}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#D4A338] hover:bg-[#E5BE58] text-[#050608] text-sm font-bold transition-all duration-150 shadow-[0_0_20px_rgba(212,163,56,0.35)] hover:shadow-[0_0_30px_rgba(212,163,56,0.6)] hover:translate-y-[-1px] cursor-pointer"
                id="hero-download-resume-btn"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <button
                type="button"
                onClick={() => setResumeModalOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-[#232A38] hover:border-[#D4A338]/40 bg-[#12161F] text-[#8B95A5] hover:text-[#E2E8F0] text-sm font-medium transition-colors cursor-pointer"
                id="hero-preview-resume-btn"
              >
                <span>View CV In-Browser</span>
              </button>
            </div>

            {/* Verified Profile Links */}
            <div className="pt-4 border-t border-[#232A38]">
              <div className="text-xs font-mono uppercase tracking-wider text-[#8B95A5] mb-3">
                Verified Developer Profiles
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://github.com/Gkchvcg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#232A38] hover:border-[#D4A338]/50 bg-[#12161F] text-xs font-medium text-[#8B95A5] hover:text-[#E2E8F0] transition-colors cursor-pointer"
                  id="hero-github-link"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub (@Gkchvcg)</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/maroof-husain-arima/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#232A38] hover:border-[#D4A338]/50 bg-[#12161F] text-xs font-medium text-[#8B95A5] hover:text-[#E2E8F0] transition-colors cursor-pointer"
                  id="hero-linkedin-link"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-[#D4A338]" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://leetcode.com/u/MaroofHusain/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#232A38] hover:border-[#D4A338]/50 bg-[#12161F] text-xs font-medium text-[#8B95A5] hover:text-[#E2E8F0] transition-colors cursor-pointer"
                  id="hero-leetcode-link"
                >
                  <LeetCodeIcon className="w-3.5 h-3.5 text-[#D4A338]" />
                  <span>LeetCode (500+)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Gotham Technical Workspace & Batcomputer Architecture */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-[#232A38] bg-[#0B0E14]/95 p-6 backdrop-blur-xl shadow-2xl bat-border-glow tactical-bracket batcomputer-scanlines overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4A338]/5 blur-3xl pointer-events-none" />
              {/* Terminal / Batcomputer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#232A38]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block animate-pulse" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D4A338]/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E2E8F0] inline-block shadow-[0_0_10px_rgba(226,232,240,0.8)]" />
                  <span className="ml-2 font-mono text-xs text-[#D4A338] font-semibold flex items-center gap-1.5 tracking-tight">
                    <BatIcon className="w-3.5 h-auto text-[#D4A338]" />
                    batcomputer@gotham-r&d:~$
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#162238] text-[#D4A338] border border-[#D4A338]/30 text-[10px] font-mono tracking-wider">
                  <CheckCircle2 className="w-3 h-3 text-[#D4A338]" />
                  <span>WAYNE-SYS-ARMED</span>
                </div>
              </div>

              {/* Technical System Architecture Blueprint */}
              <div className="pt-5 space-y-4 font-mono text-xs">
                {/* Node 1: Client & Interface */}
                <div className="p-3 rounded-xl border border-[#232A38] bg-[#12161F] flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#162238] text-[#D4A338] border border-[#D4A338]/20 mt-0.5">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#E2E8F0]">
                      Frontend & Client Systems
                    </div>
                    <div className="text-[11px] text-[#8B95A5] mt-0.5">
                      Next.js 14 App Router · React · Vite · Tailwind · Jetpack Compose
                    </div>
                  </div>
                </div>

                {/* Flow Connector */}
                <div className="flex items-center justify-center text-[#D4A338]/40">
                  <span className="text-[11px]">↓ async REST / GraphQL / RPC</span>
                </div>

                {/* Node 2: Backend & AI Pipelines */}
                <div className="p-3 rounded-xl border border-[#232A38] bg-[#12161F] flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#162238] text-[#D4A338] border border-[#D4A338]/20 mt-0.5">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#E2E8F0]">
                      Backend Services & AI Inference
                    </div>
                    <div className="text-[11px] text-[#8B95A5] mt-0.5">
                      Node.js / Express · FastAPI · Flask · Llama-3 · BLIP · XGBoost
                    </div>
                  </div>
                </div>

                {/* Flow Connector */}
                <div className="flex items-center justify-center text-[#D4A338]/40">
                  <span className="text-[11px]">↓ distributed state & consensus</span>
                </div>

                {/* Node 3: Database & Web3 Contracts */}
                <div className="p-3 rounded-xl border border-[#232A38] bg-[#12161F] flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#162238] text-[#D4A338] border border-[#D4A338]/20 mt-0.5">
                    <Database className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#E2E8F0]">
                      Data Stores & Smart Contracts
                    </div>
                    <div className="text-[11px] text-[#8B95A5] mt-0.5">
                      MongoDB · PostgreSQL · SQLite · Polygon Amoy Solidity (POL/USDC)
                    </div>
                  </div>
                </div>
              </div>

              {/* Engineering Stats Grid */}
              <div className="mt-5 pt-4 border-t border-[#232A38] grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded-lg bg-[#12161F] border border-[#232A38]">
                  <div className="text-base font-bold text-[#D4A338] font-mono">
                    500+
                  </div>
                  <div className="text-[10px] text-[#8B95A5] font-mono">
                    LeetCode Solved
                  </div>
                </div>

                <div className="p-2 rounded-lg bg-[#12161F] border border-[#232A38]">
                  <div className="text-base font-bold text-[#E2E8F0] font-mono">
                    15
                  </div>
                  <div className="text-[10px] text-[#8B95A5] font-mono">
                    GitHub Projects
                  </div>
                </div>

                <div className="p-2 rounded-lg bg-[#12161F] border border-[#232A38]">
                  <div className="text-base font-bold text-emerald-400 font-mono">
                    7.9 / 10
                  </div>
                  <div className="text-[10px] text-[#8B95A5] font-mono">
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
