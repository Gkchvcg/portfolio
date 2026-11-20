import React from 'react';

interface BatIconProps {
  className?: string;
  size?: number;
}

export function BatIcon({ className = 'w-5 h-5', size }: BatIconProps) {
  return (
    <svg
      viewBox="0 0 100 45"
      fill="currentColor"
      className={className}
      style={size ? { width: size, height: (size * 45) / 100 } : undefined}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Sleek, geometric Dark Knight-inspired Bat silhouette */}
      <path d="M 50 12 C 46 8, 43 0, 41 0 C 40 4, 38 8, 32 9 C 24 10, 15 2, 4 9 C 0 12, 0 18, 5 21 C 12 25, 20 23, 27 31 C 32 37, 36 45, 50 45 C 64 45, 68 37, 73 31 C 80 23, 88 25, 95 21 C 100 18, 100 12, 96 9 C 85 2, 76 10, 68 9 C 62 8, 60 4, 59 0 C 57 0, 54 8, 50 12 Z" />
    </svg>
  );
}

export function BatSignalEmblem({ className = 'w-16 h-16' }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Outer searchlight beam aura */}
      <div className="absolute inset-0 rounded-full bg-sky-500/10 blur-xl animate-pulse" />
      <div className="relative w-full h-full rounded-full border border-sky-400/40 bg-radial from-sky-400/20 via-sky-950/40 to-transparent flex items-center justify-center p-3 shadow-lg shadow-sky-500/20">
        <BatIcon className="w-full h-auto text-sky-300 drop-shadow-[0_0_12px_rgba(56,189,248,0.8)]" />
      </div>
    </div>
  );
}
