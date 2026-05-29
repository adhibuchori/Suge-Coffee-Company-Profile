'use client';

import { useState, useRef, useEffect } from 'react';

/**
 * Manages open/close state for a custom dropdown with outside-click dismissal.
 *
 * @returns Ref to attach to the dropdown container, open state, and toggle handler.
 *
 * @example
 * const { ref, open, setOpen } = useDropdown();
 * <div ref={ref}>...</div>
 */
export function useDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return { ref, open, setOpen };
}
