'use client';

import React from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './icons/BrandIcons';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  compact?: boolean;
}

export function ProjectCard({ project, onSelect, compact = false }: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col justify-between p-5 sm:p-6 rounded-sm border border-[#232A38] bg-[#12161F] hover:border-[#D4A338]/50 transition-all duration-200 shadow-md hover:shadow-[0_0_20px_rgba(212,163,56,0.12)] hover:-translate-y-0.5 batcomputer-scanlines">
      {/* Top Meta */}
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-1.5">
            {project.categories.slice(0, 2).map((cat) => (
              <span
                key={cat}
                className="px-2 py-0.5 rounded-sm text-[10px] font-mono font-medium bg-[#0B0E14] text-[#D4A338] border border-[#232A38]"
              >
                {cat}
              </span>
            ))}
          </div>

          {project.liveDemoUrl ? (
            <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[#E2E8F0] bg-[#0B0E14] px-2 py-0.5 rounded-sm border border-[#232A38]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4A338] animate-pulse" />
              <span>Live Deployed</span>
            </span>
          ) : (
            <span className="text-[10px] font-mono text-[#8B95A5]">
              {project.status}
            </span>
          )}
        </div>

        {/* Title */}
        <div>
          <h3 className="font-display text-base sm:text-lg font-bold uppercase tracking-wider text-[#E2E8F0] group-hover:text-[#D4A338] transition-colors flex items-center justify-between">
            <span>{project.title}</span>
            <button
              type="button"
              onClick={() => onSelect(project)}
              className="opacity-0 group-hover:opacity-100 transition-opacity p-1 text-[#8B95A5] hover:text-[#D4A338]"
              title="Expand Case Study"
              aria-label={`View details for ${project.title}`}
            >
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </h3>
          <p className="text-xs text-[#8B95A5] font-mono mt-0.5 line-clamp-1">
            {project.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#8B95A5] leading-relaxed line-clamp-3">
          {project.description}
        </p>
      </div>

      {/* Bottom: Tags & Actions */}
      <div className="pt-5 mt-4 border-t border-[#232A38] space-y-4">
        {/* Technology tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, compact ? 4 : 5).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-sm text-[11px] font-mono text-[#8B95A5] bg-[#0B0E14] border border-[#232A38]"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > (compact ? 4 : 5) && (
            <span className="px-1.5 py-0.5 rounded-sm text-[10px] font-mono text-[#8B95A5] bg-[#0B0E14]">
              +{project.technologies.length - (compact ? 4 : 5)}
            </span>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex items-center justify-between gap-2 pt-1">
          <button
            type="button"
            onClick={() => onSelect(project)}
            className="text-xs font-mono uppercase tracking-wider font-semibold text-[#D4A338] hover:text-[#E2E8F0] transition-colors inline-flex items-center gap-1"
          >
            <span>Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-sm text-[#8B95A5] hover:text-[#E2E8F0] hover:bg-[#232A38]/50 transition-colors"
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
                className="p-1.5 rounded-sm text-[#D4A338] hover:text-[#E2E8F0] hover:bg-[#232A38]/50 transition-colors"
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
