'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Search,
  SlidersHorizontal,
  X,
  RotateCcw,
  Layers,
  ArrowLeft,
  LayoutGrid,
  List,
  Sparkles,
} from 'lucide-react';
import { ALL_PROJECTS } from '@/data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { Project } from '@/types';

type CategoryFilter =
  | 'All'
  | 'Full Stack'
  | 'AI/ML'
  | 'Data Analytics'
  | 'Finance'
  | 'Android'
  | 'Backend/API'
  | 'Developer Tools'
  | 'Experiments';

export function ProjectDirectoryClient() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const [selectedTech, setSelectedTech] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [compactView, setCompactView] = useState(false);

  // Extract all unique technologies
  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    ALL_PROJECTS.forEach((p) => {
      p.technologies.forEach((t) => techSet.add(t));
    });
    return Array.from(techSet).sort();
  }, []);

  const categories: CategoryFilter[] = [
    'All',
    'Full Stack',
    'AI/ML',
    'Data Analytics',
    'Finance',
    'Android',
    'Backend/API',
    'Developer Tools',
    'Experiments',
  ];

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: ALL_PROJECTS.length };
    categories.forEach((cat) => {
      if (cat !== 'All') {
        counts[cat] = ALL_PROJECTS.filter((p) =>
          p.categories.includes(cat as any)
        ).length;
      }
    });
    return counts;
  }, []);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return ALL_PROJECTS.filter((project) => {
      // Category filter
      if (
        selectedCategory !== 'All' &&
        !project.categories.includes(selectedCategory as any)
      ) {
        return false;
      }

      // Technology filter
      if (
        selectedTech !== 'All' &&
        !project.technologies.some(
          (t) => t.toLowerCase() === selectedTech.toLowerCase()
        )
      ) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = project.title.toLowerCase().includes(query);
        const matchesSubtitle = project.subtitle.toLowerCase().includes(query);
        const matchesDesc = project.description.toLowerCase().includes(query);
        const matchesTech = project.technologies.some((t) =>
          t.toLowerCase().includes(query)
        );
        return matchesTitle || matchesSubtitle || matchesDesc || matchesTech;
      }

      return true;
    });
  }, [searchQuery, selectedCategory, selectedTech]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedTech('All');
  };

  const isFiltered =
    searchQuery.trim() !== '' ||
    selectedCategory !== 'All' ||
    selectedTech !== 'All';

  return (
    <div className="space-y-8">
      {/* Top Controls: Search & View Toggle */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
        {/* Search bar */}
        <div className="relative flex-1 max-w-xl">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by project name, description, or technology (e.g. Next.js, XGBoost)..."
            className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 shadow-2xs"
            id="projects-search-input"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
              aria-label="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* View toggles & status */}
        <div className="flex items-center gap-3 justify-between md:justify-end">
          <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
            Showing <strong className="text-zinc-900 dark:text-white">{filteredProjects.length}</strong> of{' '}
            {ALL_PROJECTS.length} repositories
          </span>

          <div className="flex items-center p-1 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900">
            <button
              type="button"
              onClick={() => setCompactView(false)}
              className={`p-1.5 rounded-md ${
                !compactView
                  ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-2xs'
                  : 'text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200'
              }`}
              title="Standard Grid View"
              aria-label="Grid View"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => setCompactView(true)}
              className={`p-1.5 rounded-md ${
                compactView
                  ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-2xs'
                  : 'text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200'
              }`}
              title="Compact View"
              aria-label="Compact View"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Category Filter Chips */}
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((category) => {
          const isSelected = selectedCategory === category;
          const count = categoryCounts[category] || 0;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-colors flex items-center gap-1.5 ${
                isSelected
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800'
              }`}
            >
              <span>{category}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                  isSelected
                    ? 'bg-indigo-700 text-indigo-100'
                    : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Popular Technology Filter row */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
        <span className="text-zinc-400 font-mono text-[11px] shrink-0">Filter by tech:</span>
        <button
          type="button"
          onClick={() => setSelectedTech('All')}
          className={`px-2.5 py-1 rounded-lg font-mono text-[11px] shrink-0 ${
            selectedTech === 'All'
              ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-bold'
              : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200'
          }`}
        >
          All Tech
        </button>
        {['React', 'Next.js 14', 'FastAPI', 'Python', 'Solidity', 'Kotlin', 'Streamlit', 'MongoDB', 'XGBoost'].map(
          (tech) => (
            <button
              key={tech}
              type="button"
              onClick={() => setSelectedTech(selectedTech === tech ? 'All' : tech)}
              className={`px-2.5 py-1 rounded-lg font-mono text-[11px] shrink-0 transition-colors border ${
                selectedTech === tech
                  ? 'bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 border-indigo-300 dark:border-indigo-700 font-bold'
                  : 'border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-zinc-300 dark:hover:border-zinc-700'
              }`}
            >
              {tech}
            </button>
          )
        )}

        {isFiltered && (
          <button
            type="button"
            onClick={resetFilters}
            className="ml-auto shrink-0 inline-flex items-center gap-1 text-[11px] text-rose-500 hover:text-rose-600 dark:hover:text-rose-400 font-mono"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset filters</span>
          </button>
        )}
      </div>

      {/* Projects Grid or Empty State */}
      {filteredProjects.length > 0 ? (
        <div
          className={`grid gap-6 ${
            compactView
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setSelectedProject(p)}
              compact={compactView}
            />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-800 p-8 space-y-4">
          <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-400 flex items-center justify-center mx-auto">
            <Search className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-bold text-zinc-900 dark:text-white">
              No matching repositories found
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 max-w-sm mx-auto">
              No projects matched your search &quot;{searchQuery}&quot; with category &quot;{selectedCategory}&quot;.
            </p>
          </div>
          <button
            type="button"
            onClick={resetFilters}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset all filters</span>
          </button>
        </div>
      )}

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
