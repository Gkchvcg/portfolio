'use client';

import React, { useMemo } from 'react';

interface SakuraPetalsProps {
  count?: number;
  className?: string;
}

export function SakuraPetals({ count = 16, className = '' }: SakuraPetalsProps) {
  // Generate stable random values for petal particles
  const petals = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${(i * 100) / count + (i % 3) * 2}%`,
      animationDuration: `${7 + (i % 5) * 2.5}s`,
      animationDelay: `${(i % 7) * 0.9}s`,
      size: 10 + (i % 4) * 3,
      opacity: 0.35 + (i % 4) * 0.15,
      rotation: (i * 47) % 360,
    }));
  }, [count]);

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {petals.map((petal) => (
        <span
          key={petal.id}
          className="sakura-petal"
          style={{
            left: petal.left,
            top: '-20px',
            width: `${petal.size}px`,
            height: `${petal.size * 1.3}px`,
            animationDuration: petal.animationDuration,
            animationDelay: petal.animationDelay,
            opacity: petal.opacity,
          }}
        >
          <svg
            viewBox="0 0 24 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: `rotate(${petal.rotation}deg)` }}
            className="w-full h-full drop-shadow-xs"
          >
            {/* Elegant stylized curved Sakura petal */}
            <path
              d="M12 0C7 6 0 14 0 22C0 27.5 4.5 32 10.5 32C12 32 12.5 31 13.5 32C19.5 32 24 27.5 24 22C24 14 17 6 12 0Z"
              fill="url(#sakura-gradient)"
            />
            <defs>
              <linearGradient id="sakura-gradient" x1="0" y1="0" x2="24" y2="32" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FBCFE8" stopOpacity="0.85" />
                <stop offset="0.6" stopColor="#F472B6" stopOpacity="0.75" />
                <stop offset="1" stopColor="#EC4899" stopOpacity="0.6" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      ))}
    </div>
  );
}
