'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, ChevronRight, X, Shield, Activity, Target } from 'lucide-react';
import { BatIcon } from '../gotham/BatIcon';
import { sound } from './soundEngine';

interface PlayerCard {
  id: string;
  name: string;
  moniker: string;
  number: string;
  clubAndCountry: string;
  role: string;
  accentColor: string;
  badge: string;
  tagline: string;
  quote: string;
  attributes: { name: string; value: number }[];
  styleBreakdown: string[];
  iconicMoment: string;
  imageUrl: string;
}

const PLAYERS: PlayerCard[] = [
  {
    id: 'messi',
    name: 'Lionel Messi',
    moniker: 'The GOAT • La Pulga Atómica',
    number: '10',
    clubAndCountry: 'Inter Miami / Argentina (Barça Era)',
    role: 'Playmaker / False 9 / Football Deity',
    accentColor: 'border-[#D4A338]/40 text-[#D4A338]',
    badge: 'World Champion & 8x Ballon d\'Or',
    tagline: 'Football reduced to its purest, most divine geometry.',
    quote: '"I don\'t need to run all game. I just need to be in the right five square meters when the universe decides to score."',
    attributes: [
      { name: 'Vision & Playmaking', value: 99 },
      { name: 'Close Control Dribbling', value: 100 },
      { name: 'Clutch Finishing', value: 98 },
      { name: 'Football IQ', value: 100 },
    ],
    styleBreakdown: [
      'Low center of gravity with microscopic ball touches in tight telephone-booth spaces.',
      'Telepathic weight-of-pass that bypasses entire defensive backlines with subtle disguised eyes.',
      'Lusail Stadium 2022: The storybook culmination of the greatest sporting destiny in history.',
    ],
    iconicMoment: 'December 18, 2022 — Lusail, Qatar: Lifting the FIFA World Cup trophy draped in the Bisht.',
    imageUrl: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'neymar',
    name: 'Neymar Jr',
    moniker: 'The Samba Magician • Joga Bonito',
    number: '11',
    clubAndCountry: 'Al-Hilal / Brazil (MSN Barcelona Peak)',
    role: 'Creative Winger / Samba Artist',
    accentColor: 'border-[#8E9BAE]/40 text-[#E2E8F0]',
    badge: 'Joga Bonito Standard Bearer',
    tagline: 'Unapologetic joy, rhythm, and street-football audacity.',
    quote: '"Dribbling is not about humiliating the opponent. It is about expressing the freedom in my soul."',
    attributes: [
      { name: 'Flair & Unpredictability', value: 99 },
      { name: 'Elastic Dribbling', value: 98 },
      { name: 'Creativity & Assists', value: 94 },
      { name: 'Free Kicks & Technique', value: 93 },
    ],
    styleBreakdown: [
      'Rainbow flicks, elastico nutmegs, and hypnotic body feints that make defenders freeze in admiration.',
      'The legendary MSN trident (Messi, Suárez, Neymar) delivering the most devastating attacking football of modern times.',
      'March 8, 2017: The 6-1 La Remontada at Camp Nou — an 8-minute individual masterclass that defied physics.',
    ],
    iconicMoment: 'March 8, 2017 — Camp Nou: 88th to 95th minute vs PSG, scoring twice and providing the winning assist for Sergi Roberto.',
    imageUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'bellingham',
    name: 'Jude Bellingham',
    moniker: 'Belligol • The Bernabéu Talisman',
    number: '5',
    clubAndCountry: 'Real Madrid / England',
    role: 'Box-to-Box Galáctico / Late Clutch Engine',
    accentColor: 'border-[#D4A338]/40 text-[#D4A338]',
    badge: 'Real Madrid #5 • Golden Boy',
    tagline: 'Born for the brightest spotlight in European football.',
    quote: '"When you wear the white shirt of Real Madrid, you never accept defeat until the referee blows the final whistle."',
    attributes: [
      { name: 'Clutch 90+ Mentality', value: 99 },
      { name: 'Box-to-Box Engine', value: 96 },
      { name: 'Tactical Maturity', value: 95 },
      { name: 'Physical Presence', value: 93 },
    ],
    styleBreakdown: [
      'The iconic arms-outstretched celebration before 85,000 Madridistas chanting "Hey Jude".',
      'Wearing Zidane\'s legendary #5 shirt at 20 years old and commanding the midfield like a 10-year veteran.',
      'Stoppage-time El Clásico winners home and away in his debut season, conquering La Liga and the Champions League.',
    ],
    iconicMoment: 'October 28, 2023 — Montjuïc: 92nd-minute volley winner in his debut El Clásico, followed by the arms-spread celebration.',
    imageUrl: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1000&q=80',
  },
];

export function FootballSection() {
  const [activePlayer, setActivePlayer] = useState<PlayerCard | null>(null);
  const [pitchTab, setPitchTab] = useState<'cards' | 'tactics'>('cards');

  return (
    <div className="relative rounded-sm overflow-hidden border border-[#232A38] bg-[#0B0E14] text-[#E2E8F0] p-6 sm:p-10 shadow-2xl batcomputer-scanlines">
      {/* Ambient Lighting */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#162238]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#D4A338]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-[#232A38]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm text-xs font-mono font-medium bg-[#12161F] border border-[#232A38] text-[#D4A338] mb-3">
            <BatIcon className="w-3.5 h-2 text-[#D4A338]" />
            <span>TACTICAL ARENA • HIGH PRESSURE GEOMETRY</span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wider text-[#E2E8F0] flex items-center gap-3">
            Football, Stadium Lights & Artistry
            <span className="text-xs font-mono py-0.5 px-2.5 rounded-sm bg-[#12161F] text-[#8B95A5] border border-[#232A38] font-normal">
              4-3-3 Geometry
            </span>
          </h3>
          <p className="text-sm text-[#8B95A5] mt-2 max-w-2xl leading-relaxed">
            Football is algorithmic spatial awareness at full sprint. From tactical half-space overloads to transcendent individual genius, the pitch is where geometry transforms into raw emotion.
          </p>
        </div>

        {/* View Toggle Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-sm bg-[#12161F] border border-[#232A38] self-start md:self-auto">
          <button
            onClick={() => setPitchTab('cards')}
            className={`px-3 py-1.5 rounded-sm text-xs font-mono uppercase tracking-wider transition-all ${
              pitchTab === 'cards'
                ? 'bg-[#D4A338] text-black font-semibold shadow-sm'
                : 'text-[#8B95A5] hover:text-[#E2E8F0]'
            }`}
          >
            Players & Legends
          </button>
          <button
            onClick={() => setPitchTab('tactics')}
            className={`px-3 py-1.5 rounded-sm text-xs font-mono uppercase tracking-wider transition-all ${
              pitchTab === 'tactics'
                ? 'bg-[#D4A338] text-black font-semibold shadow-sm'
                : 'text-[#8B95A5] hover:text-[#E2E8F0]'
            }`}
          >
            Tactical Pitch
          </button>
        </div>
      </div>

      {pitchTab === 'cards' ? (
        /* Player Spotlight Carousel / Cards Grid */
        <div className="relative z-10 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PLAYERS.map((player) => {
              const isMessi = player.id === 'messi';
              const isNeymar = player.id === 'neymar';
              const isJude = player.id === 'bellingham';

              return (
                <motion.div
                  key={player.id}
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  onClick={() => {
                    sound.playFootballKick();
                    setActivePlayer(player);
                  }}
                  className="group relative rounded-sm p-6 border border-[#232A38] bg-[#12161F] hover:border-[#D4A338]/40 hover:shadow-[0_0_20px_rgba(212,163,56,0.12)] transition-all cursor-pointer overflow-hidden flex flex-col justify-between min-h-[380px]"
                >
                  {/* Subtle watermarked jersey number */}
                  <span className="absolute -right-3 -bottom-6 text-9xl font-black font-mono select-none opacity-5 group-hover:opacity-10 transition-opacity text-[#E2E8F0]">
                    {player.number}
                  </span>

                  {/* Header Badge */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="px-2.5 py-1 rounded-sm text-[10px] font-mono tracking-wide font-semibold bg-[#0B0E14] border border-[#232A38] text-[#8B95A5]">
                        #{player.number} • {player.badge}
                      </span>
                      {isMessi && (
                        <span className="flex items-center gap-1 text-[10px] text-[#D4A338] font-mono font-medium px-2 py-0.5 rounded-sm bg-[#12161F] border border-[#D4A338]/30">
                          👑 GOAT
                        </span>
                      )}
                      {isNeymar && (
                        <span className="flex items-center gap-1 text-[10px] text-[#8E9BAE] font-mono font-medium px-2 py-0.5 rounded-sm bg-[#12161F] border border-[#232A38]">
                          ⚡ SAMBA
                        </span>
                      )}
                      {isJude && (
                        <span className="flex items-center gap-1 text-[10px] text-[#D4A338] font-mono font-medium px-2 py-0.5 rounded-sm bg-[#12161F] border border-[#D4A338]/30">
                          🛡️ REAL MADRID
                        </span>
                      )}
                    </div>

                    <h4 className="font-display text-2xl font-bold uppercase tracking-wider text-[#E2E8F0] group-hover:text-[#D4A338] transition-colors">
                      {player.name}
                    </h4>
                    <p className="text-xs font-mono text-[#D4A338] mt-1">
                      {player.moniker}
                    </p>
                    <p className="text-xs text-[#8B95A5] mt-0.5">
                      {player.clubAndCountry}
                    </p>

                    <p className="text-xs text-[#8B95A5] italic mt-4 pl-3 border-l-2 border-[#D4A338]/40 line-clamp-3">
                      {player.quote}
                    </p>
                  </div>

                  {/* Attributes preview bars */}
                  <div className="mt-6 pt-4 border-t border-[#232A38] space-y-2">
                    {player.attributes.slice(0, 2).map((attr) => (
                      <div key={attr.name} className="space-y-1">
                        <div className="flex justify-between text-[11px] font-mono text-[#8B95A5]">
                          <span>{attr.name}</span>
                          <span className="font-bold text-[#E2E8F0]">{attr.value}</span>
                        </div>
                        <div className="w-full h-1.5 rounded-sm bg-[#0B0E14] border border-[#232A38] overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${attr.value}%` }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            className="h-full rounded-sm bg-[#D4A338]"
                          />
                        </div>
                      </div>
                    ))}

                    <div className="pt-2 flex items-center justify-between text-xs text-[#D4A338] group-hover:translate-x-1 transition-transform font-mono">
                      <span className="text-[11px]">Inspect Tactical Profile</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Real Madrid & Bernabéu Culture Card */}
          <div className="rounded-sm p-6 sm:p-7 border border-[#232A38] bg-[#12161F] relative overflow-hidden batcomputer-scanlines">
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-2 text-xs font-mono text-[#D4A338]">
                  <Shield className="w-4 h-4 text-[#D4A338]" />
                  <span>BERNABÉU DNA & CHAMPIONS LEAGUE MYSTICISM</span>
                </div>
                <h4 className="font-display text-xl font-bold uppercase tracking-wider text-[#E2E8F0]">
                  &quot;90 Minuti En El Bernabéu Son Molto Longo&quot;
                </h4>
                <p className="text-xs sm:text-sm text-[#8B95A5] leading-relaxed">
                  Real Madrid is not just a football club; it is an existential belief that surrender does not exist. From the 2022 comebacks against PSG, Chelsea, and Manchester City to the composure on European final stages, it taught me that resilience in software architecture mirrors winning under maximum pressure.
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <div className="text-center p-3 rounded-sm bg-[#0B0E14] border border-[#232A38]">
                  <div className="text-xl font-bold font-mono text-[#D4A338]">15x</div>
                  <div className="text-[10px] font-mono text-[#8B95A5] uppercase">UCL Titles</div>
                </div>
                <div className="text-center p-3 rounded-sm bg-[#0B0E14] border border-[#232A38]">
                  <div className="text-xl font-bold font-mono text-[#E2E8F0]">90+</div>
                  <div className="text-[10px] font-mono text-[#8B95A5] uppercase">Clutch DNA</div>
                </div>
                <div className="text-center p-3 rounded-sm bg-[#0B0E14] border border-[#232A38]">
                  <div className="text-xl font-bold font-mono text-[#D4A338]">∞</div>
                  <div className="text-[10px] font-mono text-[#8B95A5] uppercase">Resilience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Tactical Pitch Visualizer */
        <div className="relative z-10 space-y-6">
          <div className="relative aspect-[16/9] max-h-[460px] w-full rounded-sm overflow-hidden border border-[#232A38] bg-[#050608] p-4 sm:p-6 flex flex-col justify-between">
            {/* SVG Pitch Markings */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
              viewBox="0 0 800 500"
              fill="none"
              stroke="#8E9BAE"
              strokeWidth="2"
            >
              <rect x="20" y="20" width="760" height="460" rx="4" />
              <line x1="400" y1="20" x2="400" y2="480" />
              <circle cx="400" cy="250" r="70" />
              <circle cx="400" cy="250" r="3" fill="#8E9BAE" />
              <rect x="20" y="130" width="130" height="240" />
              <rect x="650" y="130" width="130" height="240" />
              <rect x="20" y="180" width="50" height="140" />
              <rect x="730" y="180" width="50" height="140" />
              <circle cx="100" cy="250" r="3" fill="#8E9BAE" />
              <circle cx="700" cy="250" r="3" fill="#8E9BAE" />
              <path d="M 150 200 A 70 70 0 0 1 150 300" />
              <path d="M 650 200 A 70 70 0 0 0 650 300" />

              {/* Animated Tactical Passing Lanes */}
              <path
                d="M 280 250 L 400 150 L 580 140 L 660 230"
                stroke="#D4A338"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
              <path
                d="M 400 350 L 520 280 L 680 270"
                stroke="#8E9BAE"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
            </svg>

            {/* Tactical Pitch Interactive Nodes */}
            <div className="relative z-10 w-full h-full flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs font-mono text-[#D4A338]">
                <span>SYSTEM: 4-3-3 POSITIONAL PLAY (JUEGO DE POSICIÓN)</span>
                <span>ATTACKING TRANSITION PHASE</span>
              </div>

              {/* Interactive Player Nodes on the Pitch */}
              <div className="relative w-full h-64">
                {/* Messi (False 9 / Right Half-Space) */}
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  onClick={() => {
                    sound.playFootballKick();
                    setActivePlayer(PLAYERS[0]);
                  }}
                  className="absolute left-[65%] top-[55%] -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                >
                  <div className="relative flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#D4A338] text-black font-bold flex items-center justify-center text-xs shadow-lg shadow-[#D4A338]/30 ring-4 ring-[#D4A338]/20 group-hover:ring-[#D4A338]">
                      10
                    </div>
                    <span className="mt-1 px-2 py-0.5 rounded-sm text-[10px] font-mono bg-[#0B0E14] text-[#D4A338] whitespace-nowrap border border-[#232A38]">
                      Messi (The Maestro)
                    </span>
                  </div>
                </motion.div>

                {/* Neymar (Left Winger / Iso 1v1 Zone) */}
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  onClick={() => {
                    sound.playFootballKick();
                    setActivePlayer(PLAYERS[1]);
                  }}
                  className="absolute left-[70%] top-[15%] -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                >
                  <div className="relative flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#8E9BAE] text-black font-bold flex items-center justify-center text-xs shadow-lg shadow-[#8E9BAE]/30 ring-4 ring-[#8E9BAE]/20 group-hover:ring-[#8E9BAE]">
                      11
                    </div>
                    <span className="mt-1 px-2 py-0.5 rounded-sm text-[10px] font-mono bg-[#0B0E14] text-[#E2E8F0] whitespace-nowrap border border-[#232A38]">
                      Neymar (Samba Flair)
                    </span>
                  </div>
                </motion.div>

                {/* Bellingham (Box-to-Box #8/#10 Midfield Engine) */}
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  onClick={() => {
                    sound.playFootballKick();
                    setActivePlayer(PLAYERS[2]);
                  }}
                  className="absolute left-[45%] top-[35%] -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                >
                  <div className="relative flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#12161F] text-[#E2E8F0] border border-[#232A38] font-bold flex items-center justify-center text-xs shadow-lg ring-4 ring-[#232A38] group-hover:ring-[#D4A338]">
                      5
                    </div>
                    <span className="mt-1 px-2 py-0.5 rounded-sm text-[10px] font-mono bg-[#0B0E14] text-[#D4A338] whitespace-nowrap border border-[#232A38]">
                      Bellingham (Box-to-Box)
                    </span>
                  </div>
                </motion.div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-[#8B95A5] bg-[#0B0E14] p-2.5 rounded-sm border border-[#232A38]">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#D4A338] animate-pulse" />
                  Tactical Insight: High Pressing Overload & Positional Superiority
                </span>
                <span className="text-[#8B95A5]">Click any player circle to open deep dive</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Lightbox for Deep Player Profile */}
      <AnimatePresence>
        {activePlayer && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050608]/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl rounded-sm p-6 sm:p-8 bg-[#12161F] border border-[#232A38] shadow-2xl text-[#E2E8F0] overflow-hidden max-h-[90vh] overflow-y-auto batcomputer-scanlines"
            >
              <button
                onClick={() => setActivePlayer(null)}
                className="absolute top-5 right-5 p-2 rounded-sm bg-[#0B0E14] border border-[#232A38] hover:border-[#D4A338]/50 text-[#8B95A5] hover:text-[#E2E8F0] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 rounded-sm text-xs font-mono font-bold bg-[#0B0E14] text-[#D4A338] border border-[#232A38]">
                  #{activePlayer.number} • {activePlayer.role}
                </span>
                <span className="text-xs text-[#8B95A5] font-mono">{activePlayer.badge}</span>
              </div>

              <h3 className="font-display text-3xl font-bold uppercase tracking-wider text-[#E2E8F0]">
                {activePlayer.name}
              </h3>
              <p className="text-sm font-mono text-[#D4A338] mt-1">
                {activePlayer.moniker}
              </p>

              <div className="p-4 rounded-sm bg-[#0B0E14] border border-[#232A38] my-5 italic text-sm text-[#8B95A5]">
                {activePlayer.quote}
              </div>

              {/* Attributes Radar / Bars */}
              <div className="space-y-4 my-6">
                <h5 className="text-xs font-mono uppercase tracking-wider text-[#D4A338] flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#D4A338]" />
                  Technical Attribute Ratings
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activePlayer.attributes.map((attr) => (
                    <div key={attr.name} className="p-3 rounded-sm bg-[#0B0E14] border border-[#232A38]">
                      <div className="flex justify-between text-xs font-mono mb-1.5">
                        <span className="text-[#8B95A5]">{attr.name}</span>
                        <span className="font-bold text-[#D4A338]">{attr.value} / 100</span>
                      </div>
                      <div className="w-full h-1.5 rounded-sm bg-[#12161F] overflow-hidden">
                        <div
                          className="h-full rounded-sm bg-[#D4A338]"
                          style={{ width: `${attr.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tactical Analysis & Style Breakdown */}
              <div className="space-y-3 mb-6">
                <h5 className="text-xs font-mono uppercase tracking-wider text-[#D4A338] flex items-center gap-2">
                  <Target className="w-4 h-4 text-[#D4A338]" />
                  Tactical Influence & Analysis
                </h5>
                <ul className="space-y-2">
                  {activePlayer.styleBreakdown.map((point, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-[#8B95A5] flex items-start gap-2.5">
                      <span className="text-[#D4A338] font-mono mt-0.5">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Iconic Moment */}
              <div className="p-4 rounded-sm bg-[#0B0E14] border border-[#232A38] text-xs sm:text-sm text-[#8B95A5]">
                <div className="font-semibold text-[#D4A338] font-mono text-xs uppercase mb-1 flex items-center gap-1.5">
                  Defining Career Milestone
                </div>
                {activePlayer.iconicMoment}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
