'use client';

import React from 'react';
import {
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  CheckCircle2,
} from 'lucide-react';
import { EDUCATION_DATA, CERTIFICATIONS_DATA } from '@/data/portfolioData';
import { BatIcon } from './gotham/BatIcon';

export function EducationCertifications() {
  return (
    <section id="education" className="py-20 lg:py-28 border-t border-[#232A38] bg-[#0B0E14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#D4A338] uppercase tracking-wider">
            <BatIcon className="w-3.5 h-2 text-[#D4A338]" />
            <span>05 // GOTHAM INTELLIGENCE ARCHIVE • ACADEMIC & MISSION TIMELINE</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold uppercase tracking-wider text-[#E2E8F0]">
            Academic Timeline & WayneTech Credentials
          </h2>
          <p className="text-sm sm:text-base text-[#8B95A5] max-w-2xl leading-relaxed">
            Formal university engineering training at Dr. A.P.J. Abdul Kalam Technical University (7.9 CGPA) supplemented by Wayne Enterprises validated operational credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* ======================================================== */}
          {/* Education Column */}
          {/* ======================================================== */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 pb-2 border-b border-[#232A38]">
              <GraduationCap className="w-5 h-5 text-[#D4A338]" />
              <h3 className="font-display text-lg font-bold uppercase tracking-wider text-[#E2E8F0]">
                Formal Academic Education
              </h3>
            </div>

            <div className="p-6 rounded-sm border border-[#232A38] bg-[#12161F] shadow-md space-y-5 batcomputer-scanlines">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h4 className="font-display text-lg font-bold uppercase tracking-wider text-[#E2E8F0]">
                    {EDUCATION_DATA.degree}
                  </h4>
                  <div className="text-sm text-[#8B95A5] font-medium mt-0.5">
                    {EDUCATION_DATA.institution}
                  </div>
                </div>

                <div className="px-3 py-1 rounded-sm text-xs font-mono font-semibold bg-[#0B0E14] text-[#D4A338] border border-[#232A38]">
                  CGPA: {EDUCATION_DATA.cgpa}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs text-[#8B95A5] font-mono">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#D4A338]" />
                  <span>{EDUCATION_DATA.period}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#D4A338]" />
                  <span>{EDUCATION_DATA.location}</span>
                </span>
              </div>

              <div className="space-y-2 pt-4 border-t border-[#232A38]">
                <div className="text-xs font-mono uppercase tracking-wider text-[#D4A338]">
                  Coursework & Core Focus
                </div>
                <ul className="space-y-2 text-xs text-[#8B95A5]">
                  {EDUCATION_DATA.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D4A338] shrink-0 mt-0.5" />
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
            <div className="flex items-center gap-2 pb-2 border-b border-[#232A38]">
              <Award className="w-5 h-5 text-[#D4A338]" />
              <h3 className="font-display text-lg font-bold uppercase tracking-wider text-[#E2E8F0]">
                Industry Certifications & Credentials
              </h3>
            </div>

            <div className="space-y-4">
              {CERTIFICATIONS_DATA.map((cert) => (
                <div
                  key={cert.title}
                  className="p-5 rounded-sm border border-[#232A38] bg-[#12161F] hover:border-[#D4A338]/40 hover:shadow-[0_0_15px_rgba(212,163,56,0.1)] transition-all shadow-sm space-y-2.5 batcomputer-scanlines"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="font-display text-base font-bold uppercase tracking-wider text-[#E2E8F0]">
                        {cert.title}
                      </h4>
                      <div className="text-xs font-medium text-[#D4A338] font-mono">
                        {cert.issuer}
                      </div>
                    </div>

                    <span className="px-2.5 py-0.5 rounded-sm text-[11px] font-mono text-[#E2E8F0] bg-[#0B0E14] border border-[#232A38]">
                      {cert.year}
                    </span>
                  </div>

                  <p className="text-xs text-[#8B95A5] leading-relaxed">
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
