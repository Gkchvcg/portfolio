'use client';

import React from 'react';
import {
  Code2,
  Terminal,
  Award,
  ExternalLink,
  CheckCircle2,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './icons/BrandIcons';
import { CODING_PROFILES } from '@/data/portfolioData';

export function CodingProfiles() {
  return (
    <section id="coding-profiles" className="py-20 lg:py-28 border-t border-zinc-200 dark:border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
            <span>04 // VERIFIED PROFILES</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Coding & Technical Profiles
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
            Live profiles across competitive programming, open-source repositories, and professional networks.
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
              className="group p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 hover:border-indigo-500/50 dark:hover:border-indigo-500/40 transition-all duration-200 shadow-xs hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white group-hover:scale-110 transition-transform">
                    {profile.platform === 'LeetCode' && <LeetCodeIcon className="w-6 h-6 text-amber-500" />}
                    {profile.platform === 'GitHub' && <GithubIcon className="w-6 h-6 text-zinc-800 dark:text-zinc-200" />}
                    {profile.platform === 'LinkedIn' && <LinkedinIcon className="w-6 h-6 text-sky-500" />}
                    {profile.platform === 'HackerRank' && <Terminal className="w-6 h-6 text-emerald-500" />}
                    {profile.platform === 'CodeChef' && <Award className="w-6 h-6 text-amber-600" />}
                  </div>

                  <span className="p-1.5 rounded-lg text-zinc-400 group-hover:text-indigo-500 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {profile.name}
                  </h3>
                  <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-0.5">
                    @{profile.username}
                  </div>
                </div>

                <div className="inline-block px-2.5 py-1 rounded-md text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-900/60">
                  {profile.badgeText}
                </div>

                {profile.statsLabel && (
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {profile.statsLabel}
                  </p>
                )}
              </div>

              <div className="pt-4 mt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400 font-mono">
                <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Profile</span>
                </span>
                <span className="group-hover:translate-x-1 transition-transform">
                  Visit →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
