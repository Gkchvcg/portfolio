'use client';

import React from 'react';
import Link from 'next/link';
import { Download, ArrowUp, Terminal } from 'lucide-react';
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
    <footer className="border-t border-[#232A38] bg-[#050608] relative overflow-hidden batcomputer-scanlines">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-20 bg-[#162238]/30 blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Identity & positioning */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-sm bg-[#0B0E14] border border-[#232A38] text-[#D4A338] flex items-center justify-center font-bold text-sm tracking-tight shadow-md">
                <BatIcon className="w-5 h-3 text-[#D4A338]" />
              </div>
              <span className="font-display font-bold uppercase tracking-wider text-lg text-[#E2E8F0] flex items-center gap-2">
                {PERSONAL_INFO.name}
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-[#0B0E14] text-[#D4A338] border border-[#232A38]">
                  GOTHAM SECTOR 04
                </span>
              </span>
            </div>

            <p className="text-sm text-[#8B95A5] max-w-md leading-relaxed">
              Computer Science & Engineering undergraduate at Dr. A.P.J. Abdul Kalam Technical University (2023–2027). Building full-stack web applications, AI-driven data intelligence, and distributed systems.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.resumePath}
                download={PERSONAL_INFO.resumeFilename}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider font-bold rounded-sm bg-[#D4A338] hover:bg-[#E5B54A] text-black transition-all shadow-md shadow-[#D4A338]/20"
                id="footer-download-resume-btn"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-sm border border-[#232A38] hover:border-[#D4A338]/50 bg-[#0B0E14] text-[#8B95A5] hover:text-[#D4A338] transition-colors"
              >
                <span>{PERSONAL_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* Quick site navigation */}
          <div className="space-y-3">
            <h3 className="font-display text-xs font-bold uppercase tracking-wider text-[#E2E8F0] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-sm bg-[#D4A338]" />
              Navigation
            </h3>
            <ul className="space-y-2 text-sm text-[#8B95A5] font-mono text-xs">
              <li>
                <Link href="/#about" className="hover:text-[#D4A338] transition-colors">
                  [ 01 // ABOUT DOSSIER ]
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#D4A338] transition-colors">
                  [ 02 // ALL PROJECTS (15) ]
                </Link>
              </li>
              <li>
                <Link href="/#skills" className="hover:text-[#D4A338] transition-colors">
                  [ 03 // TACTICAL ARSENAL ]
                </Link>
              </li>
              <li>
                <Link href="/#coding-profiles" className="hover:text-[#D4A338] transition-colors">
                  [ 04 // INTELLIGENCE NETWORK ]
                </Link>
              </li>
              <li>
                <Link href="/#education" className="hover:text-[#D4A338] transition-colors">
                  [ 05 // MISSION ARCHIVE ]
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-[#D4A338] transition-colors">
                  [ 06 // ENCRYPTED COMMS ]
                </Link>
              </li>
            </ul>
          </div>

          {/* Verified Profiles */}
          <div className="space-y-3">
            <h3 className="font-display text-xs font-bold uppercase tracking-wider text-[#E2E8F0] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-sm bg-[#D4A338]" />
              Verified Profiles
            </h3>
            <ul className="space-y-2.5 text-xs font-mono text-[#8B95A5]">
              {CODING_PROFILES.map((profile) => (
                <li key={profile.name}>
                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-[#D4A338] transition-colors"
                  >
                    {profile.platform === 'GitHub' && <GithubIcon className="w-4 h-4 text-[#8B95A5]" />}
                    {profile.platform === 'LinkedIn' && <LinkedinIcon className="w-4 h-4 text-[#8B95A5]" />}
                    {profile.platform === 'LeetCode' && <LeetCodeIcon className="w-4 h-4 text-[#D4A338]" />}
                    {profile.platform === 'HackerRank' && <Terminal className="w-4 h-4 text-[#8B95A5]" />}
                    {profile.platform === 'CodeChef' && <Terminal className="w-4 h-4 text-[#8B95A5]" />}
                    <span>{profile.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-12 pt-8 border-t border-[#232A38] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8B95A5]">
          <div className="space-y-1 text-center md:text-left">
            <p>© {currentYear} Maroof Husain. All rights reserved. Crafted with Next.js, TypeScript & Tailwind CSS.</p>
            <p className="text-[11px] font-mono text-[#8B95A5] italic">
              &quot;It&apos;s not who I am underneath, but what I do that defines me.&quot; — Wayne Enterprises Applied Sciences
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2 font-mono text-xs text-[#D4A338] bg-[#0B0E14] px-3 py-1 rounded-sm border border-[#232A38]">
              <BatIcon className="w-4 h-2 text-[#D4A338] inline" />
              <span>GOTHAM SECTOR 04 // OPERATIONAL</span>
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-sm bg-[#0B0E14] hover:bg-[#12161F] text-[#D4A338] border border-[#232A38] hover:border-[#D4A338]/50 hover:shadow-[0_0_15px_rgba(212,163,56,0.2)] transition-all cursor-pointer"
              aria-label="Scroll back to top"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
