'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Feather, Quote, Sparkles, Bookmark, Compass, ScrollText } from 'lucide-react';

interface PhilosophyChapter {
  id: string;
  title: string;
  author: string;
  school: string;
  coreConcept: string;
  aphorism: string;
  marginalia: string;
  reflection: string;
}

const CHAPTERS: PhilosophyChapter[] = [
  {
    id: 'stoicism',
    title: 'The Inner Citadel & Control',
    author: 'Marcus Aurelius & Epictetus',
    school: 'Stoic Rationalism',
    coreConcept: 'The Dichotomy of Control',
    aphorism: 'You have power over your mind - not outside events. Realize this, and you will find strength.',
    marginalia: '→ Applicable to systems engineering: Focus only on what you can architect, handle edge cases gracefully, ignore the chaos.',
    reflection: 'Stoicism is not emotional suppression; it is extreme cognitive clarity. In debugging as in life: panicking never resolved a production outage. Composure, observation, and methodical execution prevail.',
  },
  {
    id: 'existentialism',
    title: 'The Myth of Sisyphus & Creation',
    author: 'Albert Camus',
    school: 'Absurdism & Existentialism',
    coreConcept: 'The Conscious Rebel',
    aphorism: 'One must imagine Sisyphus happy. The struggle itself toward the heights is enough to fill a man\'s heart.',
    marginalia: '→ Pushing the rock up the hill = writing software every day. Finding joy in the iteration itself.',
    reflection: 'The universe owes us no inherent meaning, which means we hold the radical freedom and responsibility to author our own purpose. Every line of code, every design system, every creative pursuit is an act of defiance against entropy.',
  },
  {
    id: 'sufism',
    title: 'The Alchemy of Silence & Love',
    author: 'Jalaluddin Rumi & Bulleh Shah',
    school: 'Sufi Mysticism & Urdu/Persian Verse',
    coreConcept: 'Unity of Being (Wahdat al-Wujud)',
    aphorism: 'The wound is the place where the Light enters you. Silence is the language of God, all else is poor translation.',
    marginalia: '→ Beyond logic lies resonance. The quiet space between thoughts is where genuine innovation sparks.',
    reflection: 'Sufi poetry grounds my technical mind with spiritual humility. When algorithms threaten to make the world mechanical, Rumi and Bulleh Shah remind me that empathy, mystery, and compassion are the true anchors of human existence.',
  },
  {
    id: 'metamorphosis',
    title: 'Labyrinths, Bureaucracy & The Self',
    author: 'Franz Kafka & Fyodor Dostoevsky',
    school: 'Psychological Realism & Modern Absurdity',
    coreConcept: 'The Struggle for Authenticity',
    aphorism: 'A book must be the axe for the frozen sea within us.',
    marginalia: '→ Kafka reminds us not to become cogs in unthinking machines. Keep questioning assumptions.',
    reflection: 'Kafka dissected the alienating machinery of institutional bureaucracy; Dostoevsky plumbed the deepest abysses of human guilt, redemption, and moral consequence. They teach an engineer to build technology that serves human dignity rather than enslaves it.',
  },
];

export function PhilosophyLiterature() {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [typewriterText, setTypewriterText] = useState('');
  const fullAphorism = CHAPTERS[activeChapterIndex].aphorism;

  // Typewriter effect on chapter change
  useEffect(() => {
    setTypewriterText('');
    let idx = 0;
    const interval = setInterval(() => {
      if (idx <= fullAphorism.length) {
        setTypewriterText(fullAphorism.slice(0, idx));
        idx++;
      } else {
        clearInterval(interval);
      }
    }, 25);
    return () => clearInterval(interval);
  }, [activeChapterIndex, fullAphorism]);

  const currentChapter = CHAPTERS[activeChapterIndex];

  return (
    <div className="relative rounded-3xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-950 text-white p-6 sm:p-10 shadow-2xl">
      {/* Background Parchment and Floating Quotes */}
      <div className="absolute top-0 right-10 text-zinc-900/40 dark:text-zinc-800/20 pointer-events-none select-none text-9xl font-serif">
        &rdquo;
      </div>
      <div className="absolute bottom-5 left-8 text-zinc-900/40 dark:text-zinc-800/20 pointer-events-none select-none text-9xl font-serif">
        &ldquo;
      </div>

      {/* Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-zinc-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-amber-500/10 border border-amber-500/30 text-amber-300 mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>LITERARY JOURNAL • PHILOSOPHICAL FOUNDATIONS</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-3">
            Philosophy & Literature
            <span className="text-xs font-mono py-1 px-2.5 rounded-full bg-zinc-800 text-zinc-300 font-normal">
              Marginalia & Inquiries
            </span>
          </h3>
          <p className="text-sm text-zinc-400 mt-2 max-w-2xl leading-relaxed">
            Code builds tools, but literature refines the mind that wields them. A collection of ideas, paradoxes, and marginalia that anchor my perspective.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-amber-400 bg-amber-500/10 px-3 py-2 rounded-xl border border-amber-500/20 self-start md:self-auto">
          <Feather className="w-4 h-4" />
          <span>Interactive Reading Desk</span>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Chapters / Book Spines Index */}
        <div className="lg:col-span-4 space-y-3">
          <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2 flex items-center gap-1.5">
            <Bookmark className="w-3.5 h-3.5 text-amber-400" />
            <span>Selected Treatises</span>
          </div>

          {CHAPTERS.map((ch, idx) => (
            <button
              key={ch.id}
              onClick={() => setActiveChapterIndex(idx)}
              className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center justify-between gap-3 ${
                activeChapterIndex === idx
                  ? 'bg-amber-500/15 border-amber-500/40 text-white shadow-lg shadow-amber-500/5'
                  : 'bg-zinc-900/60 border-zinc-800/80 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
              }`}
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400">
                  Vol. 0{idx + 1} • {ch.school}
                </span>
                <h4 className="text-sm font-bold text-white mt-0.5">
                  {ch.title}
                </h4>
                <p className="text-xs text-zinc-400 mt-0.5">
                  {ch.author}
                </p>
              </div>

              <div
                className={`w-2.5 h-2.5 rounded-full ${
                  activeChapterIndex === idx ? 'bg-amber-400 ring-4 ring-amber-400/20' : 'bg-zinc-700'
                }`}
              />
            </button>
          ))}
        </div>

        {/* Right Column: Active Treatise Folio */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentChapter.id}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.35 }}
              className="rounded-2xl p-6 sm:p-8 border border-zinc-800 bg-gradient-to-b from-zinc-900 via-zinc-900/90 to-zinc-950 space-y-6 shadow-xl relative"
            >
              {/* Treatise Metadata */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-zinc-800">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  {currentChapter.school}
                </span>
                <span className="text-xs font-mono text-zinc-400">
                  Author: <strong className="text-white">{currentChapter.author}</strong>
                </span>
              </div>

              {/* Typewriter Aphorism */}
              <div className="p-5 rounded-2xl bg-black/60 border border-zinc-800 relative">
                <Quote className="absolute top-3 left-3 w-5 h-5 text-amber-400/40" />
                <div className="pl-6 pt-1">
                  <div className="text-base sm:text-lg font-serif text-amber-200 leading-relaxed min-h-[56px]">
                    &quot;{typewriterText}&quot;
                    <span className="inline-block w-1.5 h-4 ml-1 bg-amber-400 animate-pulse" />
                  </div>
                  <span className="block text-xs font-mono text-zinc-500 mt-2">
                    — {currentChapter.author} ({currentChapter.coreConcept})
                  </span>
                </div>
              </div>

              {/* Handwritten Marginalia Sticky Note */}
              <motion.div
                whileHover={{ rotate: 0 }}
                className="p-4 rounded-xl bg-amber-950/30 border border-amber-600/30 text-amber-200 font-mono text-xs sm:text-sm transform -rotate-1 transition-transform shadow-md"
              >
                <div className="text-[10px] uppercase tracking-wider text-amber-400 font-bold mb-1 flex items-center gap-1.5">
                  <Feather className="w-3.5 h-3.5" />
                  Marginalia Annotation:
                </div>
                {currentChapter.marginalia}
              </motion.div>

              {/* Philosophical Reflection */}
              <div className="space-y-2">
                <h5 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Personal Reflection & Cognitive Synthesis:
                </h5>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {currentChapter.reflection}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
