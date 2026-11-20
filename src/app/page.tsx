import React from 'react';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { FeaturedProjects } from '@/components/FeaturedProjects';
import { SubstackSection } from '@/components/SubstackSection';
import { SkillsSection } from '@/components/SkillsSection';
import { CodingProfiles } from '@/components/CodingProfiles';
import { EducationCertifications } from '@/components/EducationCertifications';
import { ContactSection } from '@/components/ContactSection';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <FeaturedProjects />
      <SubstackSection />
      <SkillsSection />
      <CodingProfiles />
      <EducationCertifications />
      <ContactSection />
    </main>
  );
}
