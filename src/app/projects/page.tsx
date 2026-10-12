import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Terminal, Sparkles } from 'lucide-react';
import { GithubIcon } from '@/components/icons/BrandIcons';
import { ProjectDirectoryClient } from '@/components/ProjectDirectoryClient';

export const metadata: Metadata = {
  title: 'All Projects & Repositories | Maroof Husain — Software Development Engineer',
  description:
    'Comprehensive public project directory for Maroof Husain. Inspect all 15 GitHub repositories across Full-Stack, AI/ML, Data Analytics, Mobile, and Backend systems.',
  openGraph: {
    title: 'All Projects | Maroof Husain Portfolio',
    description:
      'Inspect 15 verified engineering projects by Maroof Husain including DataKart, Flatmate Finder, SafeVault, and more.',
  },
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Back Link & Breadcrumb */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>← Back to Home Overview</span>
          </Link>

          <a
            href="https://github.com/Gkchvcg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-500 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400 transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>github.com/Gkchvcg</span>
          </a>
        </div>

        {/* Directory Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
            <span>COMPLETE REPOSITORY INVENTORY</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-950 dark:text-white">
            Engineering Projects Directory
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
            Every eligible public repository in my GitHub portfolio is enumerated below. Each project is documented with its verified purpose, actual technologies, system architecture, and repository links.
          </p>
        </div>

        {/* Client Interactive Filterable Directory */}
        <ProjectDirectoryClient />
      </div>
    </main>
  );
}
