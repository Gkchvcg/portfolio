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
  ArrowUpRight,
} from 'lucide-react';
import { GithubIcon } from './icons/BrandIcons';
import { ALL_PROJECTS } from '@/data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { Project } from '@/types';
import { BatIcon } from './gotham/BatIcon';

export function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featuredList = ALL_PROJECTS.filter((p) => p.featured);
  const dataKart = ALL_PROJECTS.find((p) => p.id === 'datakart')!;
  const flatmateFinder = ALL_PROJECTS.find((p) => p.id === 'flatmate-finder')!;
  const otherFeatured = featuredList.filter(
    (p) => p.id !== 'datakart' && p.id !== 'flatmate-finder'
  );

  return (
    <section id="featured-projects" className="py-20 lg:py-28 border-t border-[#232A38] bg-[#050608]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#D4A338] uppercase tracking-wider">
              <BatIcon className="w-3.5 h-2 text-[#D4A338]" />
              <span>02 // WAYNETECH APPLIED SCIENCES • CLASSIFIED OPERATIONS REGISTRY</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold uppercase tracking-wider text-[#E2E8F0]">
              Classified Engineering Operations
            </h2>
            <p className="text-sm sm:text-base text-[#8B95A5] max-w-2xl leading-relaxed">
              End-to-end full-stack architectures, neural inference pipelines, and cryptographic systems built and deployed to production.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-wider text-[#D4A338] hover:text-[#E2E8F0] transition-colors group"
          >
            <span>View All 15 Repositories</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* ============================================================ */}
        {/* SPOTLIGHT 1: DataKart (Flagship Decentralized Marketplace)  */}
        {/* ============================================================ */}
        <div className="rounded-sm border border-[#232A38] bg-[#12161F] overflow-hidden shadow-2xl batcomputer-scanlines">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-sm text-xs font-mono font-semibold bg-[#0B0E14] text-[#D4A338] border border-[#232A38]">
                  FLAGSHIP ARCHITECTURE
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-sm text-xs font-mono text-[#E2E8F0] bg-[#0B0E14] border border-[#232A38]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A338] animate-pulse" />
                  <span>Live Deployed</span>
                </span>
              </div>

              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wider text-[#E2E8F0]">
                  DataKart — Decentralized Data Aggregation Marketplace
                </h3>
                <p className="text-xs sm:text-sm font-mono text-[#D4A338] mt-1">
                  Next.js 14 · Solidity Smart Contracts · Llama-3 AI · BLIP Vision · Polygon Amoy
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#8B95A5] leading-relaxed">
                A dual-sided decentralized marketplace designed to resolve the AI training data ownership crisis. Enables individual sellers to monetize curated datasets while preserving cryptographic privacy, verified through automated multi-modal AI moderation pipelines and rewarded via smart contracts.
              </p>

              {/* 4 Feature highlight badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3 rounded-sm border border-[#232A38] bg-[#0B0E14] flex items-start gap-2.5">
                  <Bot className="w-4 h-4 text-[#D4A338] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#E2E8F0]">Llama-3 & Karty Assistant</span>
                    <p className="text-[#8B95A5] text-[11px] mt-0.5">Automated dataset valuation & qualitative assessment</p>
                  </div>
                </div>

                <div className="p-3 rounded-sm border border-[#232A38] bg-[#0B0E14] flex items-start gap-2.5">
                  <Cpu className="w-4 h-4 text-[#D4A338] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#E2E8F0]">BLIP Vision AI & pHash</span>
                    <p className="text-[#8B95A5] text-[11px] mt-0.5">Automated image captioning & duplicate prevention</p>
                  </div>
                </div>

                <div className="p-3 rounded-sm border border-[#232A38] bg-[#0B0E14] flex items-start gap-2.5">
                  <ShieldAlert className="w-4 h-4 text-[#D4A338] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#E2E8F0]">NudeNet Content Guard</span>
                    <p className="text-[#8B95A5] text-[11px] mt-0.5">Computer-vision NSFW filtering before dataset ingestion</p>
                  </div>
                </div>

                <div className="p-3 rounded-sm border border-[#232A38] bg-[#0B0E14] flex items-start gap-2.5">
                  <Coins className="w-4 h-4 text-[#D4A338] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#E2E8F0]">Polygon Amoy Contracts</span>
                    <p className="text-[#8B95A5] text-[11px] mt-0.5">Automated POL/USDC reward distributions via Wagmi</p>
                  </div>
                </div>
              </div>

              {/* Action Links */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <a
                  href={dataKart.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#D4A338] hover:bg-[#E5B54A] text-black text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors shadow-lg shadow-[#D4A338]/20"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Launch Live Marketplace Demo</span>
                </a>

                <a
                  href={dataKart.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm border border-[#232A38] hover:border-[#D4A338]/40 bg-[#0B0E14] text-[#E2E8F0] text-xs sm:text-sm font-mono uppercase tracking-wider transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Inspect Code on GitHub</span>
                </a>

                <button
                  type="button"
                  onClick={() => setSelectedProject(dataKart)}
                  className="text-xs sm:text-sm font-mono uppercase tracking-wider text-[#D4A338] hover:underline px-2 py-1"
                >
                  Read System Architecture Case Study →
                </button>
              </div>
            </div>

            {/* Architecture diagram showcase */}
            <div className="lg:col-span-5">
              <div
                onClick={() => setSelectedProject(dataKart)}
                className="cursor-pointer group relative rounded-sm border border-[#232A38] bg-[#0B0E14] p-3 shadow-lg hover:border-[#D4A338]/50 transition-colors overflow-hidden"
              >
                <div className="flex items-center justify-between pb-2 px-2 text-[11px] font-mono text-[#8B95A5] border-b border-[#232A38] mb-2">
                  <span className="flex items-center gap-1.5 text-[#D4A338]">
                    <Layers className="w-3.5 h-3.5 text-[#D4A338]" />
                    <span>DataKart System Architecture</span>
                  </span>
                  <span className="text-[#D4A338] group-hover:underline flex items-center gap-0.5">
                    Zoom <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
                <div className="relative aspect-4/3 w-full rounded-sm overflow-hidden bg-[#050608]">
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
        <div className="rounded-sm border border-[#232A38] bg-[#12161F] overflow-hidden shadow-2xl p-6 sm:p-10 lg:p-12 batcomputer-scanlines">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-sm text-xs font-mono font-semibold bg-[#0B0E14] text-[#D4A338] border border-[#232A38]">
                  FULL-STACK MONOREPO
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-sm text-xs font-mono text-[#E2E8F0] bg-[#0B0E14] border border-[#232A38]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A338] animate-pulse" />
                  <span>Live Deployed</span>
                </span>
              </div>

              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wider text-[#E2E8F0]">
                  Flatmate Finder — Roommate Matching & Property Platform
                </h3>
                <p className="text-xs sm:text-sm font-mono text-[#D4A338] mt-1">
                  React · Vite · Node.js · Express · MongoDB · JWT · Llama AI Matching
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#8B95A5] leading-relaxed">
                Full-stack roommate discovery and residential listing platform engineered as a clean monorepo. Features JWT-based role authentication, protected dashboards, listing creation, and roommate preference matchmaking powered by Llama-based compatibility models.
              </p>

              <div className="flex flex-wrap gap-2 text-xs">
                {flatmateFinder.technologies.slice(0, 7).map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-sm bg-[#0B0E14] font-mono text-[#8B95A5] border border-[#232A38]"
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
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#D4A338] hover:bg-[#E5B54A] text-black text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-lg shadow-[#D4A338]/20"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Launch Live Platform</span>
                </a>

                <a
                  href={flatmateFinder.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm border border-[#232A38] bg-[#0B0E14] text-[#E2E8F0] text-xs sm:text-sm font-mono uppercase tracking-wider hover:border-[#D4A338]/40 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View Repository</span>
                </a>

                <button
                  type="button"
                  onClick={() => setSelectedProject(flatmateFinder)}
                  className="text-xs sm:text-sm font-mono uppercase tracking-wider text-[#D4A338] hover:underline px-2 py-1"
                >
                  View Case Study →
                </button>
              </div>
            </div>

            {/* Architecture Card for Flatmate Finder */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-sm border border-[#232A38] bg-[#0B0E14] font-mono text-xs space-y-4 batcomputer-scanlines">
                <div className="text-[#8B95A5] text-[11px] pb-2 border-b border-[#232A38] flex justify-between">
                  <span className="text-[#D4A338]">monorepo-structure/</span>
                  <span className="text-[#E2E8F0] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4A338] animate-pulse" />
                    STATUS: ACTIVE
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="p-3 rounded-sm bg-[#12161F] border border-[#232A38]">
                    <span className="text-[#D4A338] font-bold">frontend/</span>
                    <p className="text-[11px] text-[#8B95A5] mt-1">Vite + React SPA, React Router, Tailwind CSS, Vercel Edge Hosting</p>
                  </div>
                  <div className="p-3 rounded-sm bg-[#12161F] border border-[#232A38]">
                    <span className="text-[#E2E8F0] font-bold">backend/</span>
                    <p className="text-[11px] text-[#8B95A5] mt-1">Express.js REST API, JWT Middleware, MongoDB Mongoose Models, Render API</p>
                  </div>
                  <div className="p-3 rounded-sm bg-[#12161F] border border-[#232A38]">
                    <span className="text-[#D4A338] font-bold">ai-matching/</span>
                    <p className="text-[11px] text-[#8B95A5] mt-1">Llama-assisted preference evaluation for roommate compatibility scores</p>
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
          <div className="border-b border-[#232A38] pb-3">
            <h3 className="font-display text-lg font-bold uppercase tracking-wider text-[#E2E8F0] flex items-center gap-2">
              <BatIcon className="w-3.5 h-2 text-[#D4A338]" />
              Additional Classified Field Implementations
            </h3>
            <p className="text-xs text-[#8B95A5]">
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
