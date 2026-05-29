import { renderHook } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { useBodyScrollLock } from './useBodyScrollLock';

describe('useBodyScrollLock', () => {
  beforeEach(() => {
    document.body.style.overflow = '';
  });

  it('locks body scroll when locked=true', () => {
    renderHook(() => useBodyScrollLock(true));
    expect(document.body.style.overflow).toBe('hidden');
  });

  it('does not lock body scroll when locked=false', () => {
    renderHook(() => useBodyScrollLock(false));
    expect(document.body.style.overflow).toBe('');
  });

  it('restores previous overflow on unmount', () => {
    document.body.style.overflow = 'auto';
    const { unmount } = renderHook(() => useBodyScrollLock(true));
    expect(document.body.style.overflow).toBe('hidden');
    unmount();
    expect(document.body.style.overflow).toBe('auto');
  });

  it('unlocks when locked changes from true to false', () => {
    const { rerender } = renderHook(({ locked }) => useBodyScrollLock(locked), {
      initialProps: { locked: true },
    });
    expect(document.body.style.overflow).toBe('hidden');
    rerender({ locked: false });
    expect(document.body.style.overflow).toBe('');
  });
});
