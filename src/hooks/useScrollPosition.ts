'use client';

import { useEffect, useState } from 'react';

/**
 * Tracks whether the page has been scrolled past a given pixel threshold.
 * Uses a passive scroll listener for performance.
 *
 * @param threshold - Scroll Y position in pixels above which `scrolled` becomes true. Defaults to 60.
 * @returns Object with `scrolled` boolean — true when window.scrollY exceeds the threshold.
 *
 * @example
 * const { scrolled } = useScrollPosition(80);
 * // scrolled === true once the user scrolls more than 80px
 */
export function useScrollPosition(threshold = 60) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [threshold]);

  return { scrolled };
}
