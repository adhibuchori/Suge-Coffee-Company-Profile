'use client';

import { useState, useRef, useEffect } from 'react';

type ContactTab = 'reservasi' | 'hampers';

/**
 * Manages the sliding tab indicator for the Contact section.
 * Measures the active tab button's position/width to animate an underline indicator.
 *
 * @returns Active tab state, setter, ref map for tab buttons, and indicator position/width.
 *
 * @example
 * const { activeTab, setActiveTab, tabRefs, indicator } = useContactTabs();
 * <button ref={(el) => { tabRefs.current['reservasi'] = el; }} onClick={() => setActiveTab('reservasi')}>
 */
export function useContactTabs() {
  const [activeTab, setActiveTab] = useState<ContactTab>('reservasi');
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const el = tabRefs.current[activeTab];
    if (el) setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
  }, [activeTab]);

  return { activeTab, setActiveTab, tabRefs, indicator };
}
