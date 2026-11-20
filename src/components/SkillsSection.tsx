'use client';

import React from 'react';
import {
  Code,
  Layout,
  Server,
  Database,
  BrainCircuit,
  Layers,
  Wrench,
  Cpu,
  CheckCircle2,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '@/data/portfolioData';
import { BatIcon } from './gotham/BatIcon';

const iconMap: Record<string, React.ReactNode> = {
  Code: <Code className="w-5 h-5 text-[#D4A338]" />,
  Layout: <Layout className="w-5 h-5 text-[#D4A338]" />,
  Server: <Server className="w-5 h-5 text-[#D4A338]" />,
  Database: <Database className="w-5 h-5 text-[#D4A338]" />,
  BrainCircuit: <BrainCircuit className="w-5 h-5 text-[#D4A338]" />,
  Layers: <Layers className="w-5 h-5 text-[#D4A338]" />,
  Wrench: <Wrench className="w-5 h-5 text-[#D4A338]" />,
  Cpu: <Cpu className="w-5 h-5 text-[#D4A338]" />,
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 lg:py-28 border-t border-[#232A38] bg-[#0B0E14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#D4A338] uppercase tracking-wider">
            <BatIcon className="w-3.5 h-2 text-[#D4A338]" />
            <span>03 // WAYNETECH ARSENAL • TACTICAL CAPABILITIES & SYSTEMS</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold uppercase tracking-wider text-[#E2E8F0]">
            Engineering Capabilities & Tactical Arsenal
          </h2>
          <p className="text-sm sm:text-base text-[#8B95A5] max-w-2xl leading-relaxed">
            Curated across core computer science fundamentals, full-stack web architectures, distributed data pipelines, and machine learning models.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-sm border border-[#232A38] bg-[#12161F] hover:border-[#D4A338]/50 transition-all duration-200 shadow-md hover:shadow-[0_0_20px_rgba(212,163,56,0.12)] hover:-translate-y-0.5 flex flex-col justify-between batcomputer-scanlines"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-sm bg-[#0B0E14] border border-[#232A38]">
                    {iconMap[category.iconName] || <Code className="w-5 h-5 text-[#D4A338]" />}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#D4A338] uppercase block">
                      TACTICAL ARSENAL
                    </span>
                    <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[#E2E8F0] leading-tight">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-sm text-xs font-mono bg-[#0B0E14] text-[#8B95A5] border border-[#232A38] hover:border-[#D4A338]/40 hover:text-[#E2E8F0] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#232A38] text-[11px] font-mono text-[#8B95A5] flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-[#D4A338]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4A338]" />
                  <span>Verified in code</span>
                </span>
                <span className="text-[10px] text-[#8B95A5]">SYS: ARMED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
