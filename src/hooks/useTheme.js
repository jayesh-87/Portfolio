import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'portfolio-theme';

function readInitialTheme() {
  if (typeof document === 'undefined') return 'light';
  return document.documentElement.getAttribute('data-theme') || 'light';
}

function readStoredTheme() {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch (err) {
    return null;
  }
}

/**
 * Theme toggle with a persisted preference. Falls back to the visitor's system
 * preference until they choose explicitly (the first paint is handled by an
 * inline script in index.html so nothing flashes).
 */
export default function useTheme() {
  const [theme, setTheme] = useState(readInitialTheme);

  // Follow the OS preference live — but only while the visitor has not picked one.
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (event) => {
      if (readStoredTheme()) return;
      const next = event.matches ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      setTheme(next);
    };

    media.addEventListener('change', handleChange);
    return () => media.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch (err) {
        /* storage unavailable (private mode) — the attribute still applies */
      }
      return next;
    });
  }, []);

  return { theme, toggleTheme };
}
