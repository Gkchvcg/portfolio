'use client';

import React from 'react';
import { ExternalLink, ArrowUpRight, FileCode, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './icons/BrandIcons';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  compact?: boolean;
}

export function ProjectCard({ project, onSelect, compact = false }: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col justify-between p-5 sm:p-6 rounded-2xl border border-zinc-800 bg-[#07090e]/95 hover:border-sky-500/50 transition-all duration-200 shadow-md hover:shadow-[0_0_25px_rgba(56,189,248,0.2)] hover:-translate-y-1 tactical-bracket">
      {/* Top Meta */}
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-1.5">
            {project.categories.slice(0, 2).map((cat) => (
              <span
                key={cat}
                className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-zinc-950 text-sky-400 border border-sky-500/20"
              >
                {cat}
              </span>
            ))}
          </div>

          {project.liveDemoUrl ? (
            <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-900/60">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Live Deployed</span>
            </span>
          ) : (
            <span className="text-[10px] font-mono text-zinc-400">
              {project.status}
            </span>
          )}
        </div>

        {/* Title */}
        <div>
          <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-sky-400 transition-colors flex items-center justify-between">
            <span>{project.title}</span>
            <button
              type="button"
              onClick={() => onSelect(project)}
              className="opacity-0 group-hover:opacity-100 transition-opacity p-1 text-zinc-400 hover:text-sky-400"
              title="Expand Case Study"
              aria-label={`View details for ${project.title}`}
            >
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </h3>
          <p className="text-xs text-zinc-400 font-mono mt-0.5 line-clamp-1">
            {project.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed line-clamp-3">
          {project.description}
        </p>
      </div>

      {/* Bottom: Tags & Actions */}
      <div className="pt-5 mt-4 border-t border-zinc-800 space-y-4">
        {/* Technology tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, compact ? 4 : 5).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-[11px] font-mono text-zinc-400 bg-zinc-950 border border-zinc-800"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > (compact ? 4 : 5) && (
            <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-zinc-400">
              +{project.technologies.length - (compact ? 4 : 5)}
            </span>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex items-center justify-between gap-2 pt-1">
          <button
            type="button"
            onClick={() => onSelect(project)}
            className="text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors inline-flex items-center gap-1"
          >
            <span>Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              title="View GitHub repository"
              aria-label={`View ${project.title} on GitHub`}
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-950/60 transition-colors"
                title="Launch live deployment"
                aria-label={`Open live deployment for ${project.title}`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
