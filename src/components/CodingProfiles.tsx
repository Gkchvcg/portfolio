'use client';

import React from 'react';
import {
  Terminal,
  Award,
  ExternalLink,
  CheckCircle2,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './icons/BrandIcons';
import { CODING_PROFILES } from '@/data/portfolioData';
import { BatIcon } from './gotham/BatIcon';

export function CodingProfiles() {
  return (
    <section id="coding-profiles" className="py-20 lg:py-28 border-t border-[#232A38] bg-[#050608]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#D4A338] uppercase tracking-wider">
            <BatIcon className="w-3.5 h-2 text-[#D4A338]" />
            <span>04 // GOTHAM INTELLIGENCE NETWORK • VERIFIED CREDENTIALS</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold uppercase tracking-wider text-[#E2E8F0]">
            Verified Intelligence Profiles & Metrics
          </h2>
          <p className="text-sm sm:text-base text-[#8B95A5] max-w-2xl leading-relaxed">
            Live telemetry across competitive algorithmic problem solving (500+ LeetCode), open-source repositories, and professional networks.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CODING_PROFILES.map((profile) => (
            <a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-sm border border-[#232A38] bg-[#12161F] hover:border-[#D4A338]/50 transition-all duration-200 shadow-md hover:shadow-[0_0_20px_rgba(212,163,56,0.12)] hover:-translate-y-0.5 flex flex-col justify-between batcomputer-scanlines"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-sm bg-[#0B0E14] text-white border border-[#232A38] group-hover:scale-105 group-hover:border-[#D4A338]/40 transition-all">
                    {profile.platform === 'LeetCode' && <LeetCodeIcon className="w-6 h-6 text-[#D4A338]" />}
                    {profile.platform === 'GitHub' && <GithubIcon className="w-6 h-6 text-[#E2E8F0]" />}
                    {profile.platform === 'LinkedIn' && <LinkedinIcon className="w-6 h-6 text-[#8E9BAE]" />}
                    {profile.platform === 'HackerRank' && <Terminal className="w-6 h-6 text-[#D4A338]" />}
                    {profile.platform === 'CodeChef' && <Award className="w-6 h-6 text-[#D4A338]" />}
                  </div>

                  <span className="p-1.5 rounded-sm text-[#8B95A5] group-hover:text-[#D4A338] transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-base font-bold uppercase tracking-wider text-[#E2E8F0] group-hover:text-[#D4A338] transition-colors">
                    {profile.name}
                  </h3>
                  <div className="text-xs font-mono text-[#8B95A5] mt-0.5">
                    @{profile.username}
                  </div>
                </div>

                <div className="inline-block px-2.5 py-1 rounded-sm text-xs font-mono uppercase bg-[#0B0E14] text-[#D4A338] border border-[#232A38]">
                  {profile.badgeText}
                </div>

                {profile.statsLabel && (
                  <p className="text-xs text-[#8B95A5] leading-relaxed">
                    {profile.statsLabel}
                  </p>
                )}
              </div>

              <div className="pt-4 mt-4 border-t border-[#232A38] flex items-center justify-between text-xs text-[#8B95A5] font-mono">
                <span className="flex items-center gap-1 text-[#D4A338]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Profile</span>
                </span>
                <span className="group-hover:text-[#D4A338] transition-colors">
                  Inspect →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
