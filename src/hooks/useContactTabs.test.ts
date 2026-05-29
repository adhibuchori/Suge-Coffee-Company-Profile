import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { useContactTabs } from './useContactTabs';

describe('useContactTabs', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('starts with reservasi as the active tab', () => {
    const { result } = renderHook(() => useContactTabs());
    expect(result.current.activeTab).toBe('reservasi');
  });

  it('updates activeTab to hampers when setActiveTab is called', () => {
    const { result } = renderHook(() => useContactTabs());
    act(() => {
      result.current.setActiveTab('hampers');
    });
    expect(result.current.activeTab).toBe('hampers');
  });

  it('exposes tabRefs as a mutable ref object', () => {
    const { result } = renderHook(() => useContactTabs());
    expect(result.current.tabRefs).toBeDefined();
    expect(typeof result.current.tabRefs.current).toBe('object');
  });

  it('exposes indicator with left and width properties', () => {
    const { result } = renderHook(() => useContactTabs());
    expect(result.current.indicator).toHaveProperty('left');
    expect(result.current.indicator).toHaveProperty('width');
  });

  it('updates indicator position when tabRefs contains a button element for the active tab', () => {
    const { result } = renderHook(() => useContactTabs());

    const btn = document.createElement('button');
    Object.defineProperty(btn, 'offsetLeft', { value: 42, configurable: true });
    Object.defineProperty(btn, 'offsetWidth', { value: 100, configurable: true });
    document.body.appendChild(btn);

    act(() => {
      result.current.tabRefs.current['hampers'] = btn;
      result.current.setActiveTab('hampers');
    });

    expect(result.current.indicator.left).toBe(42);
    expect(result.current.indicator.width).toBe(100);
  });

  it('does not update indicator when tabRefs has no entry for the active tab', () => {
    const { result } = renderHook(() => useContactTabs());
    const initialIndicator = { ...result.current.indicator };

    act(() => {
      // tabRefs is empty — setActiveTab should not crash
      result.current.setActiveTab('hampers');
    });

    // indicator should remain at initial default values
    expect(result.current.indicator).toEqual(initialIndicator);
  });
});
