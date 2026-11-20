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
  Code: <Code className="w-5 h-5" />,
  Layout: <Layout className="w-5 h-5" />,
  Server: <Server className="w-5 h-5" />,
  Database: <Database className="w-5 h-5" />,
  BrainCircuit: <BrainCircuit className="w-5 h-5" />,
  Layers: <Layers className="w-5 h-5" />,
  Wrench: <Wrench className="w-5 h-5" />,
  Cpu: <Cpu className="w-5 h-5" />,
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 lg:py-28 border-t border-zinc-800/80 bg-[#07090e]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-sky-400 uppercase tracking-wider">
            <BatIcon className="w-3.5 h-auto text-sky-400" />
            <span>03 // WAYNETECH ARSENAL • TACTICAL CAPABILITIES & SYSTEMS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
            Engineering Capabilities & Tactical Arsenal
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl">
            Curated across core computer science fundamentals, full-stack web architectures, distributed data pipelines, and machine learning models.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl border border-zinc-800 bg-[#07090e]/95 hover:border-sky-500/50 transition-all duration-200 shadow-md hover:shadow-[0_0_20px_rgba(56,189,248,0.18)] hover:-translate-y-1 flex flex-col justify-between tactical-bracket"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-sky-950/60 text-sky-400 border border-sky-500/30">
                    {iconMap[category.iconName] || <Code className="w-5 h-5" />}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-sky-400/80 uppercase block">
                      TACTICAL ARSENAL
                    </span>
                    <h3 className="text-sm font-bold text-white leading-tight">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-zinc-950 text-zinc-300 border border-zinc-800 hover:border-sky-500/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-zinc-800/80 text-[11px] font-mono text-zinc-400 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-sky-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified in code</span>
                </span>
                <span className="text-[10px] text-zinc-500">SYS: ARMED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
