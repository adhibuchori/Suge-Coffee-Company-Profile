import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useMenuNavigation } from './useMenuNavigation';

describe('useMenuNavigation', () => {
  it('initialises with the provided category and no expanded item', () => {
    const { result } = renderHook(() => useMenuNavigation('drinks'));
    expect(result.current.activeCategory).toBe('drinks');
    expect(result.current.expandedItemId).toBeNull();
  });

  it('updates activeCategory and collapses expanded item when selectCategory is called', () => {
    const { result } = renderHook(() => useMenuNavigation('drinks'));
    act(() => {
      result.current.toggleItem('item-1');
    });
    act(() => {
      result.current.selectCategory('food');
    });
    expect(result.current.activeCategory).toBe('food');
    expect(result.current.expandedItemId).toBeNull();
  });

  it('toggleItem expands an item when none is expanded', () => {
    const { result } = renderHook(() => useMenuNavigation('drinks'));
    act(() => {
      result.current.toggleItem('item-1');
    });
    expect(result.current.expandedItemId).toBe('item-1');
  });

  it('toggleItem collapses the item when the same id is toggled again', () => {
    const { result } = renderHook(() => useMenuNavigation('drinks'));
    act(() => {
      result.current.toggleItem('item-1');
    });
    act(() => {
      result.current.toggleItem('item-1');
    });
    expect(result.current.expandedItemId).toBeNull();
  });

  it('toggleItem switches to a different item without collapsing first', () => {
    const { result } = renderHook(() => useMenuNavigation('drinks'));
    act(() => {
      result.current.toggleItem('item-1');
    });
    act(() => {
      result.current.toggleItem('item-2');
    });
    expect(result.current.expandedItemId).toBe('item-2');
  });
});
