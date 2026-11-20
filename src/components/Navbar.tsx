'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Download, Eye, FileText, ChevronRight } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { ThemeToggle } from './ThemeToggle';
import { ResumeModal } from './ResumeModal';
import { GothamMusicWidget } from './gotham/GothamMusicWidget';
import { BatIcon } from './gotham/BatIcon';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100)));
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { code: '01', name: 'About', href: '/#about' },
    { code: '02', name: 'Projects', href: '/projects' },
    { code: '03', name: 'Writing', href: '/#writing' },
    { code: '04', name: 'Skills', href: '/#skills' },
    { code: '05', name: 'Profiles', href: '/#coding-profiles' },
    { code: '06', name: 'Education', href: '/#education' },
    { code: '07', name: 'Contact', href: '/#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          scrolled
            ? 'bg-[#050608]/95 backdrop-blur-xl border-b border-[#232A38] shadow-[0_4px_30px_rgba(0,0,0,0.9)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Brand / Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#D4A338] rounded-lg p-1"
            >
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-[#12161F] to-[#050608] border border-[#232A38] text-white flex items-center justify-center font-bold text-base tracking-tight shadow-md group-hover:border-[#D4A338]/60 group-hover:shadow-[0_0_15px_rgba(212,163,56,0.3)] transition-all duration-200 overflow-hidden">
                <BatIcon className="w-5 h-auto text-[#D4A338] group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-sm sm:text-base text-[#E2E8F0] tracking-tight leading-tight group-hover:text-[#D4A338] transition-colors flex items-center gap-1.5 font-display">
                  {PERSONAL_INFO.name}
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#162238] border border-[#D4A338]/30 text-[#D4A338] hidden sm:inline">
                    GOTHAM
                  </span>
                </span>
                <span className="text-[11px] text-[#8B95A5] font-mono leading-tight">
                  Wayne Applied Sciences • SDE
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
              {navLinks.map((link) => {
                const isActive =
                  link.href === pathname ||
                  (link.href === '/projects' && pathname.startsWith('/projects'));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-2.5 py-1.5 rounded-md text-[11px] font-mono tracking-wider transition-all duration-150 ${
                      isActive
                        ? 'text-[#D4A338] bg-[#D4A338]/10 border border-[#D4A338]/40 shadow-[0_0_12px_rgba(212,163,56,0.25)] font-semibold'
                        : 'text-[#8B95A5] hover:text-[#E2E8F0] hover:bg-[#12161F] hover:border-[#232A38] border border-transparent'
                    }`}
                  >
                    <span className="text-[#8B95A5]/60 mr-1 text-[10px]">{link.code} //</span>
                    {isActive ? `[ ${link.name.toUpperCase()} ]` : link.name.toUpperCase()}
                  </Link>
                );
              })}
            </nav>

            {/* Actions: Soundtrack Player + Resume + Theme + Mobile Burger */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Minimal Gotham Soundtrack Controller */}
              <GothamMusicWidget />

              <ThemeToggle />

              {/* Resume download / preview buttons */}
              <div className="hidden sm:flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setResumeModalOpen(true)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-lg border border-[#232A38] hover:border-[#D4A338]/40 bg-[#12161F] text-[#8B95A5] hover:text-[#E2E8F0] transition-colors cursor-pointer"
                  title="Preview resume document"
                  id="nav-preview-resume-btn"
                >
                  <Eye className="w-3.5 h-3.5 text-[#D4A338]" />
                  <span>Preview CV</span>
                </button>

                <a
                  href={PERSONAL_INFO.resumePath}
                  download={PERSONAL_INFO.resumeFilename}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-semibold rounded-lg bg-[#D4A338] hover:bg-[#E5BE58] text-[#050608] transition-all shadow-[0_0_15px_rgba(212,163,56,0.3)] hover:shadow-[0_0_20px_rgba(212,163,56,0.5)] cursor-pointer"
                  id="nav-download-resume-btn"
                  title="Download verified resume PDF"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Resume</span>
                </a>
              </div>

              {/* Mobile menu toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-[#8B95A5] hover:text-[#E2E8F0] hover:bg-[#12161F] transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-[#232A38] bg-[#0B0E14] backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-200 batcomputer-scanlines">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-sm text-xs font-mono text-[#8B95A5] hover:text-[#D4A338] hover:bg-[#12161F] transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-[#D4A338] font-medium">{link.code} //</span>
                    <span>{link.name.toUpperCase()}</span>
                  </span>
                  <ChevronRight className="w-4 h-4 text-[#8B95A5]" />
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-[#232A38] flex flex-col gap-2">
              <a
                href={PERSONAL_INFO.resumePath}
                download={PERSONAL_INFO.resumeFilename}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-mono uppercase tracking-wider font-bold rounded-sm bg-[#D4A338] text-black hover:bg-[#E5B54A] transition-colors shadow-[0_0_15px_rgba(212,163,56,0.25)]"
                id="mobile-nav-download-resume-btn"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD RESUME (PDF)</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setResumeModalOpen(true);
                }}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-mono uppercase tracking-wider font-medium rounded-sm border border-[#232A38] bg-[#12161F] text-[#E2E8F0] hover:text-[#D4A338] hover:bg-[#1E2430] transition-colors"
              >
                <FileText className="w-4 h-4 text-[#D4A338]" />
                <span>PREVIEW RESUME IN-BROWSER</span>
              </button>
            </div>
          </div>
        )}

        {/* Tactical Laser Scroll Progress Bar */}
        <div
          className="absolute bottom-0 left-0 h-[2px] laser-progress-bar transition-[width] duration-75 ease-out pointer-events-none"
          style={{ width: `${scrollProgress}%` }}
        />
      </header>

      {/* Resume modal */}
      <ResumeModal isOpen={resumeModalOpen} onClose={() => setResumeModalOpen(false)} />
    </>
  );
}
