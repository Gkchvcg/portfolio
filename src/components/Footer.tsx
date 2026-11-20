'use client';

import React from 'react';
import Link from 'next/link';
import { Code2, Download, ArrowUp, Terminal, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './icons/BrandIcons';
import { PERSONAL_INFO, CODING_PROFILES } from '@/data/portfolioData';
import { BatIcon } from './gotham/BatIcon';

export function Footer() {
  const [currentYear, setCurrentYear] = React.useState(2026);

  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800/80 bg-zinc-50 dark:bg-[#040507] transition-colors relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-20 bg-sky-500/5 blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Identity & positioning */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-zinc-900 dark:bg-zinc-900 border border-zinc-800 dark:border-sky-500/30 text-white dark:text-sky-400 flex items-center justify-center font-bold text-sm tracking-tight shadow-[0_0_10px_rgba(56,189,248,0.15)]">
                <BatIcon className="w-5 h-3 text-sky-400" />
              </div>
              <span className="font-semibold text-lg text-zinc-900 dark:text-white tracking-tight flex items-center gap-2">
                {PERSONAL_INFO.name}
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  GOTHAM SECTOR 04
                </span>
              </span>
            </div>

            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-md leading-relaxed">
              Computer Science & Engineering undergraduate at Dr. A.P.J. Abdul Kalam Technical University (2023–2027). Building full-stack web applications, AI-driven data intelligence, and distributed systems.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.resumePath}
                download={PERSONAL_INFO.resumeFilename}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white transition-all shadow-[0_0_15px_rgba(56,189,248,0.25)]"
                id="footer-download-resume-btn"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-sky-500/50 bg-white dark:bg-[#090b12] text-zinc-700 dark:text-zinc-300 hover:text-sky-400 transition-colors"
              >
                <span>{PERSONAL_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* Quick site navigation */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-white flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              Navigation
            </h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li>
                <Link href="/#about" className="hover:text-sky-400 transition-colors">
                  About Background
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-sky-400 transition-colors">
                  All Projects Directory (15)
                </Link>
              </li>
              <li>
                <Link href="/#skills" className="hover:text-sky-400 transition-colors">
                  Technical Skills & Stack
                </Link>
              </li>
              <li>
                <Link href="/#coding-profiles" className="hover:text-sky-400 transition-colors">
                  Coding Profiles & Solved
                </Link>
              </li>
              <li>
                <Link href="/#education" className="hover:text-sky-400 transition-colors">
                  Education & Certifications
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-sky-400 transition-colors">
                  Contact Direct
                </Link>
              </li>
            </ul>
          </div>

          {/* Verified Profiles */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-white flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              Verified Profiles
            </h3>
            <ul className="space-y-2.5 text-sm text-zinc-600 dark:text-zinc-400">
              {CODING_PROFILES.map((profile) => (
                <li key={profile.name}>
                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-sky-400 transition-colors"
                  >
                    {profile.platform === 'GitHub' && <GithubIcon className="w-4 h-4 text-zinc-400" />}
                    {profile.platform === 'LinkedIn' && <LinkedinIcon className="w-4 h-4 text-sky-400" />}
                    {profile.platform === 'LeetCode' && <LeetCodeIcon className="w-4 h-4 text-amber-500" />}
                    {profile.platform === 'HackerRank' && <Terminal className="w-4 h-4 text-emerald-500" />}
                    {profile.platform === 'CodeChef' && <Terminal className="w-4 h-4 text-amber-600" />}
                    <span>{profile.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400">
          <p>© {currentYear} Maroof Husain. All rights reserved. Crafted with Next.js, TypeScript & Tailwind CSS.</p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <BatIcon className="w-3.5 h-2 text-sky-400 inline" />
              Wayne R&D Inspired Architecture
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-zinc-100 dark:bg-[#090b12] hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-transparent dark:border-zinc-800 hover:border-sky-500/40 transition-all"
              aria-label="Scroll back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
