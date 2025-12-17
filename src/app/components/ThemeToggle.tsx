'use client';

import { useState, useEffect, startTransition } from 'react';

interface ThemeToggleProps {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ThemeToggle({
  dark,
  setDark
} : ThemeToggleProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    startTransition(() => {
      setMounted(true);

      const stored = localStorage.getItem('theme');
      if (stored) {
        setDark(stored === 'dark');
      } else {
        setDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
      }
    });
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.toggle('dark', dark);
      localStorage.setItem('theme', dark ? 'dark' : 'light');
    }
  }, [dark, mounted]);

  const toggleTheme = () => setDark(prev => !prev);

  if (!mounted) {
    // Render neutral placeholder to avoid hydration mismatch
    return <button className="theme-toggle" aria-label="Toggle theme" />;
  }

  return (
    <button onClick={toggleTheme} aria-label="Toggle theme" className="theme-toggle group">
      <div className="theme-toggle-icon">
        <svg
          className={`theme-sun ${dark ? 'theme-sun-active' : 'theme-sun-inactive'}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>

        <svg
          className={`theme-moon ${dark ? 'theme-moon-inactive' : 'theme-moon-active'}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </div>
    </button>
  );
}
