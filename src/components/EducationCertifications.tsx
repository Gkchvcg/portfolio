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

export function EducationCertifications() {
  return (
    <section id="education" className="py-20 lg:py-28 border-t border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
            <span>05 // ACADEMICS & CREDENTIALS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Education & Certifications
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
            Formal university engineering training supplemented by industry-recognized simulations and specialized certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* ======================================================== */}
          {/* Education Column */}
          {/* ======================================================== */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 pb-2 border-b border-zinc-200 dark:border-zinc-800">
              <GraduationCap className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                Formal Academic Education
              </h3>
            </div>

            <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 shadow-sm space-y-5">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h4 className="text-lg font-bold text-zinc-900 dark:text-white">
                    {EDUCATION_DATA.degree}
                  </h4>
                  <div className="text-sm text-zinc-600 dark:text-zinc-300 font-medium mt-0.5">
                    {EDUCATION_DATA.institution}
                  </div>
                </div>

                <div className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900/60">
                  CGPA: {EDUCATION_DATA.cgpa}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{EDUCATION_DATA.period}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{EDUCATION_DATA.location}</span>
                </span>
              </div>

              <div className="space-y-2 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Coursework & Core Focus
                </div>
                <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-300">
                  {EDUCATION_DATA.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
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
            <div className="flex items-center gap-2 pb-2 border-b border-zinc-200 dark:border-zinc-800">
              <Award className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                Industry Certifications & Credentials
              </h3>
            </div>

            <div className="space-y-4">
              {CERTIFICATIONS_DATA.map((cert) => (
                <div
                  key={cert.title}
                  className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 shadow-sm space-y-2.5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-base font-bold text-zinc-900 dark:text-white">
                        {cert.title}
                      </h4>
                      <div className="text-xs font-medium text-indigo-600 dark:text-indigo-400">
                        {cert.issuer}
                      </div>
                    </div>

                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                      {cert.year}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
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
