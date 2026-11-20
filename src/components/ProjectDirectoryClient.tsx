'use client';

import React, { useState, useMemo } from 'react';
import {
  Search,
  X,
  RotateCcw,
  LayoutGrid,
  List,
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
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8B95A5]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by project name, description, or technology (e.g. Next.js, XGBoost)..."
            className="w-full pl-10 pr-10 py-2.5 rounded-sm border border-[#232A38] bg-[#0B0E14] text-sm text-[#E2E8F0] placeholder-[#8B95A5] focus:outline-hidden focus:border-[#D4A338] shadow-2xs"
            id="projects-search-input"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#8B95A5] hover:text-[#E2E8F0]"
              aria-label="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* View toggles & status */}
        <div className="flex items-center gap-3 justify-between md:justify-end">
          <span className="text-xs font-mono text-[#8B95A5]">
            Showing <strong className="text-[#E2E8F0]">{filteredProjects.length}</strong> of{' '}
            {ALL_PROJECTS.length} repositories
          </span>

          <div className="flex items-center p-1 rounded-sm border border-[#232A38] bg-[#0B0E14]">
            <button
              type="button"
              onClick={() => setCompactView(false)}
              className={`p-1.5 rounded-sm ${
                !compactView
                  ? 'bg-[#1E2430] text-[#D4A338] shadow-2xs'
                  : 'text-[#8B95A5] hover:text-[#E2E8F0]'
              }`}
              title="Standard Grid View"
              aria-label="Grid View"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => setCompactView(true)}
              className={`p-1.5 rounded-sm ${
                compactView
                  ? 'bg-[#1E2430] text-[#D4A338] shadow-2xs'
                  : 'text-[#8B95A5] hover:text-[#E2E8F0]'
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
              className={`px-3 py-1.5 rounded-sm text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                isSelected
                  ? 'bg-[#D4A338] text-black font-bold shadow-md shadow-[#D4A338]/20'
                  : 'bg-[#12161F] text-[#8B95A5] hover:bg-[#1E2430] border border-[#232A38] hover:border-[#D4A338]/40 hover:text-[#E2E8F0]'
              }`}
            >
              <span>{category}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-sm font-mono ${
                  isSelected
                    ? 'bg-black text-[#D4A338]'
                    : 'bg-[#0B0E14] text-[#8B95A5]'
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
        <span className="text-[#8B95A5] font-mono text-[11px] shrink-0">Filter by tech:</span>
        <button
          type="button"
          onClick={() => setSelectedTech('All')}
          className={`px-2.5 py-1 rounded-sm font-mono text-[11px] shrink-0 uppercase tracking-wider ${
            selectedTech === 'All'
              ? 'bg-[#D4A338] text-black font-bold'
              : 'text-[#8B95A5] hover:text-[#E2E8F0]'
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
              className={`px-2.5 py-1 rounded-sm font-mono text-[11px] shrink-0 transition-colors border ${
                selectedTech === tech
                  ? 'bg-[#1E2430] text-[#D4A338] border-[#D4A338] font-bold'
                  : 'border-[#232A38] bg-[#12161F] text-[#8B95A5] hover:border-[#D4A338]/40 hover:text-[#E2E8F0]'
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
            className="ml-auto shrink-0 inline-flex items-center gap-1 text-[11px] text-[#D4A338] hover:underline font-mono uppercase"
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
        <div className="py-20 text-center rounded-sm border border-dashed border-[#232A38] bg-[#12161F] p-8 space-y-4">
          <div className="w-12 h-12 rounded-sm bg-[#0B0E14] border border-[#232A38] text-[#D4A338] flex items-center justify-center mx-auto">
            <Search className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-display text-base font-bold uppercase tracking-wider text-[#E2E8F0]">
              No matching repositories found
            </h3>
            <p className="text-xs text-[#8B95A5] mt-1 max-w-sm mx-auto">
              No projects matched your search &quot;{searchQuery}&quot; with category &quot;{selectedCategory}&quot;.
            </p>
          </div>
          <button
            type="button"
            onClick={resetFilters}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-[#D4A338] hover:bg-[#E5B54A] text-black text-xs font-mono uppercase tracking-wider font-bold transition-colors"
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
