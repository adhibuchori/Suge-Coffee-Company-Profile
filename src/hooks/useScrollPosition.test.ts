import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { useScrollPosition } from './useScrollPosition';

describe('useScrollPosition', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'scrollY', { writable: true, configurable: true, value: 0 });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('returns scrolled: false when page has not been scrolled', () => {
    const { result } = renderHook(() => useScrollPosition());
    expect(result.current.scrolled).toBe(false);
  });

  it('returns scrolled: true after scrollY exceeds the default threshold of 60', () => {
    const { result } = renderHook(() => useScrollPosition());
    act(() => {
      Object.defineProperty(window, 'scrollY', { writable: true, configurable: true, value: 80 });
      window.dispatchEvent(new Event('scroll'));
    });
    expect(result.current.scrolled).toBe(true);
  });

  it('returns scrolled: false when scrollY is exactly at the threshold', () => {
    const { result } = renderHook(() => useScrollPosition(60));
    act(() => {
      Object.defineProperty(window, 'scrollY', { writable: true, configurable: true, value: 60 });
      window.dispatchEvent(new Event('scroll'));
    });
    expect(result.current.scrolled).toBe(false);
  });

  it('respects a custom threshold value', () => {
    const { result } = renderHook(() => useScrollPosition(200));
    act(() => {
      Object.defineProperty(window, 'scrollY', { writable: true, configurable: true, value: 100 });
      window.dispatchEvent(new Event('scroll'));
    });
    expect(result.current.scrolled).toBe(false);
    act(() => {
      Object.defineProperty(window, 'scrollY', { writable: true, configurable: true, value: 201 });
      window.dispatchEvent(new Event('scroll'));
    });
    expect(result.current.scrolled).toBe(true);
  });
});
