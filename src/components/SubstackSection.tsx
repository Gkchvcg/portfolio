'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  BookOpen,
  ExternalLink,
  ShieldAlert,
  Calendar,
  Clock,
  Sparkles,
  ArrowRight,
  Flame,
  FileText,
  Bookmark,
  Share2,
  CheckCircle2,
  Radio,
} from 'lucide-react';
import { BatIcon } from './gotham/BatIcon';
import type { SubstackArticle } from '@/app/api/substack-feed/route';

const FEATURED_ARTICLE = {
  title: 'Guilty Until Proven Irrelevant: Inside India’s Five-Year Jail Trap.',
  subtitle: 'How the state uses UAPA to lock away its critics without ever having to prove a crime.',
  url: 'https://maroofhusain.substack.com/p/guilty-until-proven-irrelevant-inside',
  pubDate: 'November 11, 2026',
  readTime: '8 min read',
  tag: 'HUMAN RIGHTS & STATE POWER',
  dossierId: 'CASE-HOTU-01 // UAPA DECREE',
  imageUrl:
    'https://substackcdn.com/image/fetch/$s_!E9Ix!,w_1200,h_675,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fde11d7f3-ad84-4e2b-888e-c9f1ace8763e_1199x1312.png',
  keyTheses: [
    'Section 43D(5) inverted bail jurisprudence: jail as the guaranteed baseline.',
    'Pre-trial detention engineered as the actual punishment before charges are ever proven.',
    'Weaponization of prolonged procedural delays to neutralize dissent in total silence.',
  ],
};

export function SubstackSection() {
  const [articles, setArticles] = useState<SubstackArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadFeed() {
      try {
        setIsLoading(true);
        const res = await fetch('/api/substack-feed');
        if (!res.ok) throw new Error(`HTTP error ${res.status}`);
        const data = await res.json();
        if (isMounted && data.articles && Array.isArray(data.articles)) {
          setArticles(data.articles);
        }
      } catch (err) {
        console.warn('Substack feed fetch notice:', err);
        if (isMounted) {
          setFetchError('Live feed streaming offline. Archival documents loaded.');
        }
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    loadFeed();
    return () => {
      isMounted = false;
    };
  }, []);

  const formatDate = (dateStr: string) => {
    try {
      const d = new Date(dateStr);
      if (isNaN(d.getTime())) return dateStr;
      return d.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <section
      id="writing"
      className="relative py-24 sm:py-32 bg-[#080808] text-[#E8E8E8] overflow-hidden border-t border-b border-[#232A38]"
    >
      {/* Background Volumetric Lighting & Atmospheric Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial from-[#F5C518]/10 via-[#162238]/15 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 right-10 w-96 h-96 bg-[#F5C518]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-20 left-10 w-80 h-80 bg-[#162238]/30 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle Tactical Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #F5C518 1px, transparent 1px), linear-gradient(to bottom, #F5C518 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 z-10">
        {/* ========================================================
            1. SECTION HERO & EDITORIAL MANIFESTO
           ======================================================== */}
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          {/* Tactical Metadata Banner */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-widest uppercase bg-[#141414] text-[#F5C518] border border-[#F5C518]/30 shadow-[0_0_15px_rgba(245,197,24,0.15)]"
          >
            <BatIcon className="w-4 h-2 text-[#F5C518]" />
            <span>GOTHAM ARCHIVES // PERSONAL WRITING</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5C518] animate-ping" />
          </motion.div>

          {/* Main Editorial Publication Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-[#E8E8E8] font-display"
          >
            House of the Unheard
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl font-mono italic text-[#F5C518] tracking-wide"
          >
            &quot;Some truths are buried. Some voices refuse to disappear.&quot;
          </motion.p>

          {/* Editorial Introduction */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-sm sm:text-base text-[#8B95A5] leading-relaxed max-w-3xl mx-auto"
          >
            Beyond lines of code and engineering problems, there is another side of me that questions
            the world around us. <strong className="text-[#E8E8E8] font-semibold">House of the Unheard</strong> is my space for exploring society, justice, power, humanity, and the uncomfortable conversations we often avoid.
          </motion.p>

          {/* Classification Telemetry Line */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-3 pt-2 text-[11px] font-mono text-[#8B95A5]"
          >
            <span className="px-2 py-0.5 rounded-sm bg-[#141414] border border-[#232A38]">
              DISPATCH REF: HOTU-2026 // UNRESTRICTED ARCHIVE
            </span>
            <span>•</span>
            <span>INVESTIGATIVE ESSAYS</span>
            <span>•</span>
            <span className="text-[#F5C518]">PUBLICATION FREQUENCY: ESSAYS & DEEP-DIVES</span>
          </motion.div>
        </div>

        {/* ========================================================
            2. FEATURED ARTICLE: MAIN ATTRACTION (CLASSIFIED CASE FILE)
           ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Header Bar Indicator */}
          <div className="flex items-center justify-between mb-3 text-xs font-mono text-[#8B95A5]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-xs bg-[#F5C518]" />
              <span className="font-semibold text-[#F5C518] tracking-wider uppercase">
                FEATURED INVESTIGATIVE CASE FILE
              </span>
            </div>
            <span className="hidden sm:inline text-[#8B95A5]">{FEATURED_ARTICLE.dossierId}</span>
          </div>

          {/* Interactive Classified Case Card */}
          <a
            href={FEATURED_ARTICLE.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative rounded-sm bg-[#141414] border-2 border-[#232A38] hover:border-[#F5C518]/70 shadow-2xl transition-all duration-300 overflow-hidden"
          >
            {/* Top Redacted / Classified Strip */}
            <div className="bg-[#0B0E14] px-4 py-2 border-b border-[#232A38] flex items-center justify-between text-[11px] font-mono text-[#8B95A5]">
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-3.5 h-3.5 text-[#F5C518]" />
                <span className="text-[#E8E8E8] font-bold tracking-wider">
                  HOUSE OF THE UNHEARD
                </span>
                <span className="text-[#8B95A5] hidden md:inline">
                  // OFFICIAL SUBSTACK PUBLICATION
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#F5C518] font-mono text-[10px] tracking-wider hidden sm:inline">
                  VERIFIED INVESTIGATION
                </span>
                <span className="px-2 py-0.5 rounded-xs bg-[#1E2430] text-[#E8E8E8] text-[10px] uppercase font-bold">
                  UNSEALED
                </span>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Left Column: Atmospheric Cinematic Artwork */}
              <div className="lg:col-span-5 relative aspect-[16/11] lg:aspect-auto min-h-[280px] lg:min-h-[420px] bg-[#080808] overflow-hidden border-b lg:border-b-0 lg:border-r border-[#232A38]">
                <Image
                  src={FEATURED_ARTICLE.imageUrl}
                  alt={FEATURED_ARTICLE.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-[#141414]/20 lg:to-[#141414]" />

                {/* Corner Crosshairs */}
                <div className="absolute top-3 left-3 text-[10px] font-mono text-[#F5C518] bg-[#080808]/80 px-2 py-0.5 border border-[#232A38] backdrop-blur-md">
                  + DOSSIER LAT 28.6139° N
                </div>
                <div className="absolute bottom-3 left-3 flex items-center gap-2 px-2.5 py-1 rounded-xs bg-[#080808]/85 border border-[#F5C518]/30 backdrop-blur-md text-[11px] font-mono text-[#F5C518]">
                  <Flame className="w-3.5 h-3.5 text-[#F5C518] fill-current" />
                  <span>MOST READ ESSAY</span>
                </div>
              </div>

              {/* Right Column: Editorial Dossier Data */}
              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  {/* Category & Read Time */}
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                    <span className="px-2.5 py-1 rounded-xs bg-[#F5C518]/15 text-[#F5C518] border border-[#F5C518]/40 font-semibold uppercase tracking-wider">
                      {FEATURED_ARTICLE.tag}
                    </span>
                    <span className="text-[#8B95A5] flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{FEATURED_ARTICLE.pubDate}</span>
                    </span>
                    <span className="text-[#8B95A5] flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{FEATURED_ARTICLE.readTime}</span>
                    </span>
                  </div>

                  {/* Headline */}
                  <h3 className="font-display text-2xl sm:text-4xl font-bold uppercase tracking-tight text-[#E8E8E8] group-hover:text-[#F5C518] transition-colors leading-tight">
                    {FEATURED_ARTICLE.title}
                  </h3>

                  {/* Subtitle / Excerpt */}
                  <p className="text-base sm:text-lg text-[#D1D5DB] leading-relaxed font-sans font-medium">
                    {FEATURED_ARTICLE.subtitle}
                  </p>

                  {/* Case File Bullet Points / Theses */}
                  <div className="pt-2 space-y-2 border-t border-[#232A38]">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#8B95A5]">
                      INVESTIGATIVE BULLETINS:
                    </span>
                    <ul className="space-y-1.5 text-xs font-mono text-[#8B95A5]">
                      {FEATURED_ARTICLE.keyTheses.map((thesis, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#F5C518] mt-0.5">›</span>
                          <span className="text-[#B0B8C4]">{thesis}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Action Area */}
                <div className="pt-4 border-t border-[#232A38] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="inline-flex items-center gap-3 px-6 py-3.5 rounded-sm bg-[#F5C518] text-[#080808] font-bold font-mono text-xs sm:text-sm uppercase tracking-wider group-hover:bg-[#FFD43B] transition-all shadow-[0_0_20px_rgba(245,197,24,0.35)] group-hover:shadow-[0_0_30px_rgba(245,197,24,0.6)] cursor-pointer">
                    <span>Read The Full Article</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </div>

                  <span className="text-xs font-mono text-[#8B95A5] flex items-center gap-1.5 group-hover:text-[#E8E8E8] transition-colors">
                    <span>maroofhusain.substack.com</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#F5C518]" />
                  </span>
                </div>
              </div>
            </div>
          </a>
        </motion.div>

        {/* ========================================================
            3. LATEST WRITINGS SECTION: THE ARCHIVES
           ======================================================== */}
        <div className="space-y-8 pt-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[#232A38]">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#F5C518] uppercase tracking-wider mb-1">
                <FileText className="w-4 h-4 text-[#F5C518]" />
                <span>DYNAMIC FEED // SUBSTACK RSS ARCHIVES</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#E8E8E8] font-display">
                The Archives
              </h3>
              <p className="text-sm text-[#8B95A5] mt-1 font-mono italic">
                &quot;Thoughts, arguments, and stories worth questioning.&quot;
              </p>
            </div>

            <a
              href="https://maroofhusain.substack.com/archive"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#8B95A5] hover:text-[#F5C518] transition-colors self-start sm:self-auto"
            >
              <span>View complete Substack archive</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#F5C518]" />
            </a>
          </div>

          {/* Loading State Skeleton */}
          {isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2].map((idx) => (
                <div
                  key={idx}
                  className="rounded-sm bg-[#141414] border border-[#232A38] p-6 space-y-4 animate-pulse"
                >
                  <div className="w-24 h-4 bg-[#1E2430] rounded-xs" />
                  <div className="w-3/4 h-6 bg-[#1E2430] rounded-xs" />
                  <div className="w-full h-16 bg-[#1E2430] rounded-xs" />
                  <div className="flex justify-between items-center pt-2">
                    <div className="w-20 h-4 bg-[#1E2430] rounded-xs" />
                    <div className="w-24 h-8 bg-[#1E2430] rounded-xs" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Dynamic Editorial Article Cards */}
          {!isLoading && articles.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {articles.map((article, index) => (
                <motion.a
                  key={article.link || index}
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative flex flex-col justify-between rounded-sm bg-[#141414] border border-[#232A38] hover:border-[#F5C518]/60 p-6 sm:p-7 shadow-lg transition-all duration-300 overflow-hidden"
                >
                  {/* Top Crosshair / Corner Accents */}
                  <div className="absolute top-2 right-2 text-[9px] font-mono text-[#8B95A5] opacity-40 group-hover:opacity-100 group-hover:text-[#F5C518] transition-opacity">
                    + HOTU-DOC-0{index + 1}
                  </div>

                  <div className="space-y-4">
                    {/* Optional Thumbnail if present */}
                    {article.thumbnail && (
                      <div className="relative aspect-[16/9] w-full rounded-xs overflow-hidden border border-[#232A38] bg-[#080808]">
                        <Image
                          src={article.thumbnail}
                          alt={article.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
                      </div>
                    )}

                    {/* Metadata Header */}
                    <div className="flex items-center gap-2 text-xs font-mono text-[#8B95A5]">
                      <Calendar className="w-3.5 h-3.5 text-[#F5C518]" />
                      <span>{formatDate(article.pubDate)}</span>
                      <span>•</span>
                      <span className="text-[#F5C518] uppercase tracking-wider font-semibold">
                        DISPATCH 0{index + 1}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#E8E8E8] group-hover:text-[#F5C518] transition-colors leading-snug">
                      {article.title}
                    </h4>

                    {/* Excerpt */}
                    <p className="text-xs sm:text-sm text-[#8B95A5] leading-relaxed line-clamp-3">
                      {article.description}
                    </p>
                  </div>

                  {/* Bottom Footer Link */}
                  <div className="pt-6 mt-6 border-t border-[#232A38] flex items-center justify-between text-xs font-mono">
                    <span className="text-[#F5C518] font-semibold group-hover:underline flex items-center gap-1.5">
                      <span>READ FULL DISPATCH</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="text-[#8B95A5] flex items-center gap-1">
                      <span>Substack</span>
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          )}
        </div>

        {/* ========================================================
            4. SUBSCRIPTION CALL TO ACTION
           ======================================================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-sm bg-gradient-to-b from-[#141414] to-[#0B0E14] border-2 border-[#232A38] p-8 sm:p-12 text-center space-y-6 shadow-2xl overflow-hidden"
        >
          {/* Subtle Bat-Signal silhouette glow */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
            <BatIcon className="w-96 h-auto text-[#F5C518]" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-[#1E2430] text-[#F5C518] border border-[#F5C518]/30">
              <Radio className="w-3.5 h-3.5 text-[#F5C518] animate-pulse" />
              <span>DIRECT DISPATCH BROADCAST</span>
            </div>

            <h3 className="font-display text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#E8E8E8]">
              Don&apos;t Let The Conversation End Here.
            </h3>

            <p className="text-sm sm:text-base text-[#8B95A5] leading-relaxed">
              Explore more writing, follow the ideas, and join the conversations that deserve to be
              heard. Every dispatch is delivered directly to your inbox with zero noise.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://maroofhusain.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-sm bg-[#F5C518] text-[#080808] font-bold font-mono text-xs sm:text-sm uppercase tracking-wider hover:bg-[#FFD43B] transition-all shadow-[0_0_25px_rgba(245,197,24,0.35)] hover:shadow-[0_0_40px_rgba(245,197,24,0.6)] cursor-pointer"
              >
                <span>Subscribe to House of the Unheard</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href="https://maroofhusain.substack.com/archive"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-sm bg-[#141414] border border-[#232A38] text-[#E8E8E8] hover:text-[#F5C518] hover:border-[#F5C518]/40 font-mono text-xs uppercase tracking-wider transition-all"
              >
                <BookOpen className="w-4 h-4" />
                <span>Browse Archives</span>
              </a>
            </div>

            <p className="text-[11px] font-mono text-[#8B95A5] pt-2">
              Free to read • Published on Substack • Direct author dispatches
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
