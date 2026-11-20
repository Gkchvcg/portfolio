'use client';

import React from 'react';
import Image from 'next/image';
import {
  X,
  ExternalLink,
  Layers,
  CheckCircle,
  AlertCircle,
  Terminal,
} from 'lucide-react';
import { GithubIcon } from './icons/BrandIcons';
import { Project } from '@/types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#050608]/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-[#12161F] border border-[#232A38] rounded-sm shadow-2xl overflow-hidden my-auto batcomputer-scanlines"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between px-6 py-5 border-b border-[#232A38] bg-[#0B0E14]">
          <div className="space-y-1 pr-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-sm text-[11px] font-mono font-medium bg-[#12161F] text-[#D4A338] border border-[#232A38]">
                {project.categories.join(' · ')}
              </span>
              <span className="px-2 py-0.5 rounded-sm text-[11px] font-mono text-[#8B95A5] bg-[#12161F] border border-[#232A38]">
                Status: {project.status}
              </span>
            </div>
            <h2 id="project-modal-title" className="font-display text-xl sm:text-2xl font-bold uppercase tracking-wider text-[#E2E8F0]">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#D4A338] font-mono">
              {project.subtitle}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-sm text-[#8B95A5] hover:text-[#E2E8F0] hover:bg-[#232A38]/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
          {/* Architecture Image if available */}
          {project.architectureImage && (
            <div className="rounded-sm border border-[#232A38] overflow-hidden bg-[#0B0E14] p-2">
              <div className="text-[11px] font-mono text-[#D4A338] mb-2 px-2 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#D4A338]" />
                <span>Verified Architecture Blueprint</span>
              </div>
              <div className="relative w-full aspect-video rounded-sm overflow-hidden bg-[#050608]">
                <Image
                  src={project.architectureImage}
                  alt={`${project.title} Architecture Diagram`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          )}

          {/* Problem & Solution block */}
          {project.problemStatement && project.solution && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-sm border border-[#232A38] bg-[#0B0E14] space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider font-semibold text-[#D4A338]">
                  <AlertCircle className="w-4 h-4 text-[#D4A338]" />
                  <span>The Engineering Problem</span>
                </div>
                <p className="text-xs text-[#8B95A5] leading-relaxed">
                  {project.problemStatement}
                </p>
              </div>

              <div className="p-4 rounded-sm border border-[#232A38] bg-[#0B0E14] space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider font-semibold text-[#E2E8F0]">
                  <CheckCircle className="w-4 h-4 text-[#E2E8F0]" />
                  <span>The Architectural Solution</span>
                </div>
                <p className="text-xs text-[#8B95A5] leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>
          )}

          {/* Deep Overview */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#D4A338]">
              System Overview
            </h3>
            <p className="text-sm text-[#8B95A5] leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Key Features */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#D4A338]">
                Key System Capabilities
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#8B95A5]">
                {project.keyFeatures.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2 p-2.5 rounded-sm bg-[#0B0E14] border border-[#232A38]">
                    <CheckCircle className="w-4 h-4 text-[#D4A338] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Architecture Highlights */}
          {project.architectureHighlights && project.architectureHighlights.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#D4A338]">
                Implementation Highlights
              </h3>
              <ul className="space-y-2 text-xs text-[#8B95A5]">
                {project.architectureHighlights.map((arch, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Terminal className="w-3.5 h-3.5 text-[#D4A338] shrink-0 mt-0.5" />
                    <span>{arch}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Verified Technologies */}
          <div className="space-y-2 pt-2 border-t border-[#232A38]">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#D4A338]">
              Verified Technology Stack
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-sm text-xs font-mono bg-[#0B0E14] text-[#8B95A5] border border-[#232A38]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-[#232A38] bg-[#0B0E14] flex items-center justify-between">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider font-semibold rounded-sm bg-[#12161F] hover:bg-[#1E2430] border border-[#232A38] text-[#E2E8F0] transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>View Source Code</span>
          </a>

          {project.liveDemoUrl ? (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm bg-[#D4A338] hover:bg-[#E5B54A] text-black transition-all shadow-lg shadow-[#D4A338]/20"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Launch Live Deployment</span>
            </a>
          ) : (
            <span className="text-xs text-[#8B95A5] font-mono">
              Code & Architecture Verified
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
