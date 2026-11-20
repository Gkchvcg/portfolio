'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Heart, ExternalLink, Compass, Eye } from 'lucide-react';

export interface FavoriteItem {
  id: string;
  name: string;
  category: 'Cuisine' | 'Aesthetic' | 'Place' | 'Season' | 'Actor' | 'Cinema' | 'Anime' | 'Music';
  tagline: string;
  description: string;
  quote?: string;
  accentColor: string;
  accentBg: string;
  image?: string;
  details: string[];
}

export const FAVORITES_LIST: FavoriteItem[] = [
  {
    id: 'biryani',
    name: 'Awadhi Biryani',
    category: 'Cuisine',
    tagline: 'Lucknow Heritage & Dum Cooking',
    description: 'Slow-cooked fragrant basmati rice infused with saffron, mace, kewra water, and marinated tenderness. The soul of Lucknow culinary culture.',
    quote: 'Cooking as patience, aroma as storytelling.',
    accentColor: '#F59E0B',
    accentBg: 'rgba(245, 158, 11, 0.1)',
    details: ['Royal Lucknow Dum Style', 'Fragrant saffron & cardamom', 'Culinary warmth & memory'],
  },
  {
    id: 'blue',
    name: 'Electric & Deep Blue',
    category: 'Aesthetic',
    tagline: 'Infinite Depth & Serenity',
    description: 'The color of deep twilight, vast oceans, and high-frequency digital intelligence. Calm, sharp, and boundless.',
    quote: 'A color that listens more than it speaks.',
    accentColor: '#3B82F6',
    accentBg: 'rgba(59, 130, 246, 0.12)',
    details: ['Midnight Cobalt & Azure', 'Clarity & focus', 'The tone of quiet nights'],
  },
  {
    id: 'osaka',
    name: 'Osaka, Japan',
    category: 'Place',
    tagline: 'Neon Canals & Spring Petals',
    description: 'Dotonbori’s luminous waterways, historic castle towers framed by pink cherry blossoms, and Kuromon’s electric culinary warmth.',
    quote: 'Tradition echoing softly beneath neon lights.',
    accentColor: '#EC4899',
    accentBg: 'rgba(236, 72, 153, 0.1)',
    image: '/images/about/ylia-cherry-blossoms-4k.jpg',
    details: ['Dotonbori River neon reflections', 'Cherry blossoms at Osaka Castle', 'Street life & vibrant energy'],
  },
  {
    id: 'spring',
    name: 'Spring',
    category: 'Season',
    tagline: 'Season of Awakening & April',
    description: 'Gentle mornings, sakura petals drifting on the wind, mild sunlight, and the palpable sense that everything can begin anew.',
    quote: 'The world waking up in pastels and promise.',
    accentColor: '#10B981',
    accentBg: 'rgba(16, 185, 129, 0.1)',
    image: '/images/about/ylia-hero-8k.jpg',
    details: ['Cherry blossom bloom', 'The bittersweet April air', 'Quiet revitalization'],
  },
  {
    id: 'kalki',
    name: 'Kalki Koechlin',
    category: 'Actor',
    tagline: 'Fearless Artistry & Emotional Truth',
    description: 'An actress of rare courage and emotional vulnerability who elevates independent Indian cinema through raw, layered authenticity.',
    quote: 'Art that refuses to apologize for its honesty.',
    accentColor: '#EAB308',
    accentBg: 'rgba(234, 179, 8, 0.1)',
    details: ['Uncompromising roles', 'That Girl in Yellow Boots', 'Deep theatrical vulnerability'],
  },
  {
    id: 'jake',
    name: 'Jake Gyllenhaal',
    category: 'Actor',
    tagline: 'Chameleon of Psychological Depth',
    description: 'From the nocturnal obsession of Nightcrawler to the emotional labyrinth of Prisoners and Donnie Darko. An actor who commits totally.',
    quote: 'Immersion so total that the actor disappears.',
    accentColor: '#8B5CF6',
    accentBg: 'rgba(139, 92, 246, 0.1)',
    details: ['Nightcrawler & Prisoners', 'Complex moral duality', 'Master of psychological intensity'],
  },
  {
    id: 'batman',
    name: 'The Batman',
    category: 'Cinema',
    tagline: 'The Dark Knight of Resolve',
    description: 'No superpowers—only relentless discipline, detective intellect, and the iron will to turn profound personal grief into protection for Gotham.',
    quote: 'It’s not who I am underneath, but what I do that defines me.',
    accentColor: '#64748B',
    accentBg: 'rgba(100, 116, 139, 0.15)',
    details: ['Detective intellect', 'Gotham’s shadows', 'Mental resilience without superpowers'],
  },
  {
    id: 'dark',
    name: 'Dark (Netflix)',
    category: 'Cinema',
    tagline: 'The Grand Paradox of Time & Fate',
    description: 'Baran bo Odar and Jantje Friese’s magnum opus. A mind-bending symphony of causality, deterministic loops, and the tragedy of human longing.',
    quote: 'Sic Mundus Creatus Est — What we know is a drop; what we don’t know is an ocean.',
    accentColor: '#06B6D4',
    accentBg: 'rgba(6, 182, 212, 0.1)',
    details: ['Winden’s 33-year time cycle', 'Flawless non-linear narrative', 'Existential philosophy in cinema'],
  },
  {
    id: 'ylia',
    name: 'Your Lie in April',
    category: 'Anime',
    tagline: 'Shigatsu wa Kimi no Uso',
    description: 'The story of pianist Kousei Arima and violinist Kaori Miyazono. A heart-wrenching yet beautiful meditation on grief, classical music, and finding color again.',
    quote: 'Spring will be here soon. Spring, the season I met you, is coming.',
    accentColor: '#F43F5E',
    accentBg: 'rgba(244, 63, 94, 0.12)',
    image: '/images/about/kaori-kousei-8k.jpg',
    details: ['Chopin & Saint-Saëns music', 'Emotional renaissance', 'The unforgettable April letter'],
  },
  {
    id: 'yellow-boots',
    name: 'That Girl in Yellow Boots',
    category: 'Cinema',
    tagline: 'Gritty Indie Character Study',
    description: 'Anurag Kashyap and Kalki Koechlin’s raw portrait of displacement, quiet grit, and the relentless search for identity across Mumbai’s underbelly.',
    quote: 'Unfiltered, uncomfortable, and impossible to forget.',
    accentColor: '#EAB308',
    accentBg: 'rgba(234, 179, 8, 0.12)',
    details: ['Raw Mumbai indie atmosphere', 'Kalki’s defining performance', 'Uncompromising indie grit'],
  },
  {
    id: 'sneakerella',
    name: 'Sneakerella',
    category: 'Cinema',
    tagline: 'Modern Street Rhythm & Dreams',
    description: 'A vibrant reimagining of a classic tale through kinetic sneaker design culture, hip-hop rhythm, and youthful optimism.',
    quote: 'Dreams sketched on paper, walked into reality.',
    accentColor: '#14B8A6',
    accentBg: 'rgba(20, 184, 166, 0.1)',
    details: ['Sneaker art & street culture', 'Kinetic musical energy', 'Creative optimism'],
  },
  {
    id: 'jass-manak',
    name: 'Jass Manak',
    category: 'Music',
    tagline: 'Acoustic Pop & Melodic Flow',
    description: 'Infectious melodies, catchy acoustic hooks, and youthful musical storytelling that brings effortless energy to everyday playlists.',
    quote: 'Rhythms that stick effortlessly in your head.',
    accentColor: '#84CC16',
    accentBg: 'rgba(132, 204, 22, 0.1)',
    details: ['Prada & acoustic hits', 'Modern Punjabi pop hook crafting', 'Effortless rhythm'],
  },
  {
    id: 'parda',
    name: 'Parda',
    category: 'Music',
    tagline: 'Soulful Composition & Poetic Veil',
    description: 'A composition steeped in poetic metaphor and acoustic depth, exploring the hidden layers of emotions, longing, and mystery.',
    quote: 'Music behind the veil of silence.',
    accentColor: '#A855F7',
    accentBg: 'rgba(168, 85, 247, 0.12)',
    details: ['Poetic acoustic textures', 'Deep melodic resonance', 'Subtle contemplative mood'],
  },
];

export function FavoriteCards() {
  const [activeItem, setActiveItem] = useState<FavoriteItem | null>(null);

  return (
    <div className="space-y-8">
      {/* Subsection Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-pink-600 dark:text-pink-400 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CURATED SCRAPBOOK // 13 CHAPTERS</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mt-1">
            Personal Favorites & Cultural Influences
          </h3>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-xl mt-1">
            Hover to experience 3D tilt depth and reveal hidden reflections. Click or tap any card for the full digital scrapbook entry.
          </p>
        </div>
      </div>

      {/* Grid of 13 Interactive 3D Tilt Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 perspective-1000">
        {FAVORITES_LIST.map((item, idx) => (
          <Interactive3DCard
            key={item.id}
            item={item}
            index={idx}
            onSelect={() => setActiveItem(item)}
          />
        ))}
      </div>

      {/* Lightbox Modal for Expanded Details */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveItem(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg p-6 sm:p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-2xl overflow-hidden"
            >
              {/* Background accent glow */}
              <div
                className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none opacity-20 -z-10"
                style={{ backgroundColor: activeItem.accentColor }}
              />

              <div className="flex items-start justify-between gap-4">
                <div>
                  <span
                    className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold uppercase tracking-wider"
                    style={{
                      color: activeItem.accentColor,
                      backgroundColor: activeItem.accentBg,
                    }}
                  >
                    {activeItem.category}
                  </span>
                  <h4 className="text-2xl font-bold text-zinc-900 dark:text-white mt-1">
                    {activeItem.name}
                  </h4>
                  <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-0.5">
                    {activeItem.tagline}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveItem(null)}
                  className="p-2 rounded-xl text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {activeItem.image && (
                <div className="relative w-full h-48 rounded-2xl overflow-hidden my-4 border border-zinc-200 dark:border-zinc-800">
                  <Image
                    src={activeItem.image}
                    alt={activeItem.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mt-4">
                {activeItem.description}
              </p>

              {activeItem.quote && (
                <div className="mt-4 p-4 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-950/60 text-xs italic text-zinc-700 dark:text-zinc-300">
                  “{activeItem.quote}”
                </div>
              )}

              <div className="mt-5 pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                  Journal Reflections
                </span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {activeItem.details.map((detail, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Interactive3DCard({
  item,
  index,
  onSelect,
}: {
  item: FavoriteItem;
  index: number;
  onSelect: () => void;
}) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle 3D tilt calculation (-10 to 10 deg)
    const rotX = ((y - centerY) / centerY) * -10;
    const rotY = ((x - centerX) / centerX) * 10;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onSelect}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}, 1)`,
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
      }}
      className="group relative cursor-pointer select-none rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 p-5 shadow-xs hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between overflow-hidden"
    >
      {/* Animated accent gradient border top glow */}
      <div
        className="absolute top-0 left-0 right-0 h-1 transition-opacity duration-300"
        style={{
          background: `linear-gradient(90deg, transparent, ${item.accentColor}, transparent)`,
          opacity: isHovered ? 1 : 0.4,
        }}
      />

      {/* Background image if present */}
      {item.image && (
        <div className="absolute inset-0 opacity-10 dark:opacity-15 group-hover:opacity-25 transition-opacity duration-500 overflow-hidden -z-10">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </div>
      )}

      <div>
        <div className="flex items-center justify-between mb-3">
          <span
            className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold uppercase tracking-wider"
            style={{
              color: item.accentColor,
              backgroundColor: item.accentBg,
            }}
          >
            {item.category}
          </span>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity p-1 text-zinc-400 hover:text-blue-500">
            <Eye className="w-3.5 h-3.5" />
          </span>
        </div>

        <h4 className="text-base font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {item.name}
        </h4>
        <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-0.5 line-clamp-1">
          {item.tagline}
        </p>

        <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed mt-2.5 line-clamp-2">
          {item.description}
        </p>
      </div>

      {/* Hover reveal details */}
      <div className="pt-4 mt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-400">
        <span className="truncate max-w-[180px]">{item.details[0]}</span>
        <span className="text-blue-500 group-hover:translate-x-1 transition-transform">
          Tap →
        </span>
      </div>
    </motion.div>
  );
}
