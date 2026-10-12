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
    <div className="group relative flex flex-col justify-between p-5 sm:p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 hover:border-indigo-500/50 dark:hover:border-indigo-500/40 transition-all duration-200 shadow-xs hover:shadow-lg hover:-translate-y-1">
      {/* Top Meta */}
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-1.5">
            {project.categories.slice(0, 2).map((cat) => (
              <span
                key={cat}
                className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60"
              >
                {cat}
              </span>
            ))}
          </div>

          {project.liveDemoUrl ? (
            <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-900/60">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Live Demo</span>
            </span>
          ) : (
            <span className="text-[10px] font-mono text-zinc-400">
              {project.status}
            </span>
          )}
        </div>

        {/* Title */}
        <div>
          <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors flex items-center justify-between">
            <span>{project.title}</span>
            <button
              type="button"
              onClick={() => onSelect(project)}
              className="opacity-0 group-hover:opacity-100 transition-opacity p-1 text-zinc-400 hover:text-indigo-500"
              title="Expand Case Study"
              aria-label={`View details for ${project.title}`}
            >
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono mt-0.5 line-clamp-1">
            {project.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed line-clamp-3">
          {project.description}
        </p>
      </div>

      {/* Bottom: Tags & Actions */}
      <div className="pt-5 mt-4 border-t border-zinc-100 dark:border-zinc-800/80 space-y-4">
        {/* Technology tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, compact ? 4 : 5).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-[11px] font-mono text-zinc-600 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800"
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
            className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors inline-flex items-center gap-1"
          >
            <span>Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
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
