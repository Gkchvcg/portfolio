'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';
import { Sun, Moon, Laptop } from 'lucide-react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-24 h-9 rounded-lg bg-zinc-800/40 animate-pulse" />
    );
  }

  return (
    <div
      role="group"
      aria-label="Theme selector"
      className="flex items-center p-1 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-100/80 dark:bg-zinc-900/80 backdrop-blur-sm"
    >
      <button
        type="button"
        onClick={() => setTheme('light')}
        aria-label="Light mode"
        aria-pressed={theme === 'light'}
        className={`p-1.5 rounded-md transition-all duration-150 ${
          theme === 'light'
            ? 'bg-white text-zinc-900 shadow-xs dark:bg-zinc-800 dark:text-zinc-100'
            : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'
        }`}
        title="Light theme"
      >
        <Sun className="w-4 h-4" />
      </button>

      <button
        type="button"
        onClick={() => setTheme('dark')}
        aria-label="Dark mode"
        aria-pressed={theme === 'dark'}
        className={`p-1.5 rounded-md transition-all duration-150 ${
          theme === 'dark'
            ? 'bg-zinc-800 text-zinc-100 shadow-xs'
            : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'
        }`}
        title="Dark theme"
      >
        <Moon className="w-4 h-4" />
      </button>

      <button
        type="button"
        onClick={() => setTheme('system')}
        aria-label="System mode"
        aria-pressed={theme === 'system'}
        className={`p-1.5 rounded-md transition-all duration-150 ${
          theme === 'system'
            ? 'bg-white text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100 shadow-xs'
            : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'
        }`}
        title="System default theme"
      >
        <Laptop className="w-4 h-4" />
      </button>
    </div>
  );
}
