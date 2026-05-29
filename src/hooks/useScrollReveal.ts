'use client';

import { useEffect, useRef } from 'react';

/**
 * Attaches an IntersectionObserver to all `.reveal` elements and adds `.visible` when they enter the viewport.
 * Unobserves each element after it becomes visible so the animation fires once only.
 *
 * @param threshold - Intersection ratio (0–1) at which to trigger visibility. Defaults to 0.12.
 * @returns void — side-effect only; drives CSS class transitions defined in globals.css.
 *
 * @example
 * // Call once at the page root; all .reveal elements on the page are observed.
 * useScrollReveal();
 */
export function useScrollReveal(threshold = 0.12) {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const reveals = document.querySelectorAll<HTMLElement>('.reveal');

    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            observerRef.current?.unobserve(e.target);
          }
        }
      },
      { threshold },
    );

    for (const el of reveals) {
      observerRef.current?.observe(el);
    }

    return () => observerRef.current?.disconnect();
  }, [threshold]);
}
