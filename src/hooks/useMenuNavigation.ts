'use client';

import { useState, useCallback } from 'react';

/**
 * Manages active category and expanded item state for the menu navigation.
 *
 * @param initialCategory - The category key selected on first render.
 * @returns Active category, expanded item id, and handlers for selection and toggle.
 *
 * @example
 * const { activeCategory, selectCategory, expandedItemId, toggleItem } = useMenuNavigation('drinks');
 */
export function useMenuNavigation(initialCategory: string) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [expandedItemId, setExpandedItemId] = useState<string | null>(null);

  const selectCategory = useCallback((key: string) => {
    setActiveCategory(key);
    setExpandedItemId(null);
  }, []);

  const toggleItem = useCallback((id: string) => {
    setExpandedItemId((prev) => (prev === id ? null : id));
  }, []);

  return { activeCategory, expandedItemId, selectCategory, toggleItem };
}
