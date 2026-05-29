import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useMenuTab } from './useMenuTab';

describe('useMenuTab', () => {
  it('returns drinks as the initial active tab', () => {
    const { result } = renderHook(() => useMenuTab());
    expect(result.current.activeTab).toBe('drinks');
  });

  it('updates activeTab when setActiveTab is called with food', () => {
    const { result } = renderHook(() => useMenuTab());
    act(() => {
      result.current.setActiveTab('food');
    });
    expect(result.current.activeTab).toBe('food');
  });

  it('switches back to drinks after being set to food', () => {
    const { result } = renderHook(() => useMenuTab());
    act(() => {
      result.current.setActiveTab('food');
    });
    act(() => {
      result.current.setActiveTab('drinks');
    });
    expect(result.current.activeTab).toBe('drinks');
  });
});
