'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ExternalLink,
  Layers,
  ShieldAlert,
  Bot,
  Coins,
  Cpu,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';
import { GithubIcon } from './icons/BrandIcons';
import { ALL_PROJECTS } from '@/data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { Project } from '@/types';

export function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featuredList = ALL_PROJECTS.filter((p) => p.featured);
  const dataKart = ALL_PROJECTS.find((p) => p.id === 'datakart')!;
  const flatmateFinder = ALL_PROJECTS.find((p) => p.id === 'flatmate-finder')!;
  const otherFeatured = featuredList.filter(
    (p) => p.id !== 'datakart' && p.id !== 'flatmate-finder'
  );

  return (
    <section id="featured-projects" className="py-20 lg:py-28 border-t border-zinc-200 dark:border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
              <span>02 // ARCHITECTURE & CASE STUDIES</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Featured Software Systems
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
              End-to-end full-stack architectures, AI data analysis pipelines, and machine learning models built and deployed to production.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors group"
          >
            <span>View All 15 Repositories</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* ============================================================ */}
        {/* SPOTLIGHT 1: DataKart (Flagship Decentralized Marketplace)  */}
        {/* ============================================================ */}
        <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-900/80">
                  FLAGSHIP ARCHITECTURE
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Live Deployed</span>
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">
                  DataKart — Decentralized Data Aggregation Marketplace
                </h3>
                <p className="text-xs sm:text-sm font-mono text-indigo-600 dark:text-indigo-400 mt-1">
                  Next.js 14 · Solidity Smart Contracts · Llama-3 AI · BLIP Vision · Polygon Amoy
                </p>
              </div>

              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                A dual-sided decentralized marketplace designed to resolve the AI training data ownership crisis. Enables individual sellers to monetize curated datasets while preserving cryptographic privacy, verified through automated multi-modal AI moderation pipelines and rewarded via smart contracts.
              </p>

              {/* 4 Feature highlight badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/60 flex items-start gap-2.5">
                  <Bot className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-zinc-900 dark:text-white">Llama-3 & Karty Assistant</span>
                    <p className="text-zinc-500 dark:text-zinc-400 text-[11px] mt-0.5">Automated dataset valuation & qualitative assessment</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/60 flex items-start gap-2.5">
                  <Cpu className="w-4 h-4 text-violet-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-zinc-900 dark:text-white">BLIP Vision AI & pHash</span>
                    <p className="text-zinc-500 dark:text-zinc-400 text-[11px] mt-0.5">Automated image captioning & duplicate prevention</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/60 flex items-start gap-2.5">
                  <ShieldAlert className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-zinc-900 dark:text-white">NudeNet Content Guard</span>
                    <p className="text-zinc-500 dark:text-zinc-400 text-[11px] mt-0.5">Computer-vision NSFW filtering before dataset ingestion</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/60 flex items-start gap-2.5">
                  <Coins className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-zinc-900 dark:text-white">Polygon Amoy Contracts</span>
                    <p className="text-zinc-500 dark:text-zinc-400 text-[11px] mt-0.5">Automated POL/USDC reward distributions via Wagmi</p>
                  </div>
                </div>
              </div>

              {/* Action Links */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <a
                  href={dataKart.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Launch Live Marketplace Demo</span>
                </a>

                <a
                  href={dataKart.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-700 bg-zinc-100/80 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 text-xs sm:text-sm font-medium transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Inspect Code on GitHub</span>
                </a>

                <button
                  type="button"
                  onClick={() => setSelectedProject(dataKart)}
                  className="text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline px-2 py-1"
                >
                  Read System Architecture Case Study →
                </button>
              </div>
            </div>

            {/* Architecture diagram showcase */}
            <div className="lg:col-span-5">
              <div
                onClick={() => setSelectedProject(dataKart)}
                className="cursor-pointer group relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-950 p-3 shadow-lg hover:border-indigo-500/60 transition-colors overflow-hidden"
              >
                <div className="flex items-center justify-between pb-2 px-2 text-[11px] font-mono text-zinc-400 border-b border-zinc-800 mb-2">
                  <span className="flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-indigo-400" />
                    <span>DataKart System Architecture</span>
                  </span>
                  <span className="text-indigo-400 group-hover:underline flex items-center gap-0.5">
                    Zoom <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
                <div className="relative aspect-4/3 w-full rounded-xl overflow-hidden bg-zinc-900">
                  <Image
                    src="/images/datakart-architecture.png"
                    alt="DataKart Architecture Blueprint"
                    fill
                    className="object-contain p-1 group-hover:scale-102 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* SPOTLIGHT 2: Flatmate Finder (Full Stack + Matching Engine) */}
        {/* ============================================================ */}
        <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 overflow-hidden shadow-xl p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-violet-50 dark:bg-violet-950/60 text-violet-600 dark:text-violet-400 border border-violet-200 dark:border-violet-900/80">
                  FULL-STACK MONOREPO
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Live Deployed</span>
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">
                  Flatmate Finder — Roommate Matching & Property Platform
                </h3>
                <p className="text-xs sm:text-sm font-mono text-violet-600 dark:text-violet-400 mt-1">
                  React · Vite · Node.js · Express · MongoDB · JWT · Llama AI Matching
                </p>
              </div>

              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Full-stack roommate discovery and residential listing platform engineered as a clean monorepo. Features JWT-based role authentication, protected dashboards, listing creation, and roommate preference matchmaking powered by Llama-based compatibility models.
              </p>

              <div className="flex flex-wrap gap-2 text-xs">
                {flatmateFinder.technologies.slice(0, 7).map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 font-mono text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={flatmateFinder.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Launch Live Platform</span>
                </a>

                <a
                  href={flatmateFinder.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-800 bg-zinc-100/80 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 text-xs sm:text-sm font-medium transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View Repository</span>
                </a>

                <button
                  type="button"
                  onClick={() => setSelectedProject(flatmateFinder)}
                  className="text-xs sm:text-sm font-semibold text-violet-600 dark:text-violet-400 hover:underline px-2 py-1"
                >
                  View Case Study →
                </button>
              </div>
            </div>

            {/* Architecture Card for Flatmate Finder */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 font-mono text-xs space-y-4">
                <div className="text-zinc-500 text-[11px] pb-2 border-b border-zinc-200 dark:border-zinc-800 flex justify-between">
                  <span>monorepo-structure/</span>
                  <span className="text-emerald-500">active</span>
                </div>
                <div className="space-y-2">
                  <div className="p-3 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                    <span className="text-indigo-500 font-bold">frontend/</span>
                    <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1">Vite + React SPA, React Router, Tailwind CSS, Vercel Edge Hosting</p>
                  </div>
                  <div className="p-3 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                    <span className="text-violet-500 font-bold">backend/</span>
                    <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1">Express.js REST API, JWT Middleware, MongoDB Mongoose Models, Render API</p>
                  </div>
                  <div className="p-3 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                    <span className="text-sky-500 font-bold">ai-matching/</span>
                    <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1">Llama-assisted preference evaluation for roommate compatibility scores</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* Additional Featured Projects (SafeVault, Churn, Campus, Movie) */}
        {/* ============================================================ */}
        <div className="space-y-6">
          <div className="border-b border-zinc-200 dark:border-zinc-800 pb-3">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
              Additional Substantial Implementations
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Machine learning intelligence, native mobile architecture, and analytical engines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {otherFeatured.map((proj) => (
              <ProjectCard
                key={proj.id}
                project={proj}
                onSelect={(p) => setSelectedProject(p)}
              />
            ))}
          </div>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
