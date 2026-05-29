'use client';

import { useState } from 'react';

type MenuTab = 'drinks' | 'food';

/** Manages active tab state for the menu section. */
export function useMenuTab() {
  const [activeTab, setActiveTab] = useState<MenuTab>('drinks');

  return { activeTab, setActiveTab };
}
