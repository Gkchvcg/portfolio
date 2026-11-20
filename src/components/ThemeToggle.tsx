'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';
import { Moon } from 'lucide-react';
import { BatIcon } from './gotham/BatIcon';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-28 h-8 rounded-sm bg-[#12161F] border border-[#232A38] animate-pulse" />
    );
  }

  return (
    <div
      role="group"
      aria-label="Gotham Night Vision HUD"
      className="flex items-center gap-1.5 px-2.5 py-1 rounded-sm border border-[#232A38] bg-[#12161F] text-xs font-mono text-[#D4A338] shadow-sm select-none"
      title="Gotham Night Vision // Locked"
    >
      <BatIcon className="w-3.5 h-2 text-[#D4A338]" />
      <span className="text-[10px] uppercase font-bold tracking-wider">
        NIGHT VISION
      </span>
      <span className="w-1.5 h-1.5 rounded-full bg-[#D4A338] animate-pulse" />
    </div>
  );
}
