'use client';

import React from 'react';
import {
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  CheckCircle2,
  BookOpen,
} from 'lucide-react';
import { EDUCATION_DATA, CERTIFICATIONS_DATA } from '@/data/portfolioData';
import { BatIcon } from './gotham/BatIcon';

export function EducationCertifications() {
  return (
    <section id="education" className="py-20 lg:py-28 border-t border-zinc-800/80 bg-[#07090e]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-sky-400 uppercase tracking-wider">
            <BatIcon className="w-3.5 h-auto text-sky-400" />
            <span>05 // GOTHAM INTELLIGENCE ARCHIVE • ACADEMIC & MISSION TIMELINE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
            Academic Timeline & WayneTech Credentials
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl">
            Formal university engineering training at Dr. A.P.J. Abdul Kalam Technical University (7.9 CGPA) supplemented by Wayne Enterprises validated operational credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* ======================================================== */}
          {/* Education Column */}
          {/* ======================================================== */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 pb-2 border-b border-zinc-800">
              <GraduationCap className="w-5 h-5 text-sky-400" />
              <h3 className="text-lg font-bold text-white">
                Formal Academic Education
              </h3>
            </div>

            <div className="p-6 rounded-2xl border border-zinc-800 bg-[#07090e]/95 shadow-md space-y-5 bat-border-glow tactical-bracket">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h4 className="text-lg font-bold text-white">
                    {EDUCATION_DATA.degree}
                  </h4>
                  <div className="text-sm text-zinc-300 font-medium mt-0.5">
                    {EDUCATION_DATA.institution}
                  </div>
                </div>

                <div className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-950/60 text-emerald-400 border border-emerald-900/60">
                  CGPA: {EDUCATION_DATA.cgpa}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-sky-400" />
                  <span>{EDUCATION_DATA.period}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-sky-400" />
                  <span>{EDUCATION_DATA.location}</span>
                </span>
              </div>

              <div className="space-y-2 pt-4 border-t border-zinc-800">
                <div className="text-xs font-mono uppercase tracking-wider text-sky-400">
                  Coursework & Core Focus
                </div>
                <ul className="space-y-2 text-xs text-zinc-300">
                  {EDUCATION_DATA.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* Certifications Column */}
          {/* ======================================================== */}
          <div id="certifications" className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 pb-2 border-b border-zinc-800">
              <Award className="w-5 h-5 text-sky-400" />
              <h3 className="text-lg font-bold text-white">
                Industry Certifications & Credentials
              </h3>
            </div>

            <div className="space-y-4">
              {CERTIFICATIONS_DATA.map((cert) => (
                <div
                  key={cert.title}
                  className="p-5 rounded-2xl border border-zinc-800 bg-[#07090e]/95 hover:border-sky-500/40 hover:shadow-[0_0_15px_rgba(56,189,248,0.15)] transition-all shadow-sm space-y-2.5 tactical-bracket"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-base font-bold text-white">
                        {cert.title}
                      </h4>
                      <div className="text-xs font-medium text-sky-400 font-mono">
                        {cert.issuer}
                      </div>
                    </div>

                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono text-sky-300 bg-sky-950/60 border border-sky-500/30">
                      {cert.year}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
