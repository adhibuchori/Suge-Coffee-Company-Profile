import { renderHook } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { useBodyScrollLock } from './useBodyScrollLock';

describe('useBodyScrollLock', () => {
  beforeEach(() => {
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
  });

  it('locks body scroll when locked=true', () => {
    renderHook(() => useBodyScrollLock(true));
    expect(document.body.style.overflow).toBe('hidden');
    expect(document.body.style.position).toBe('fixed');
    expect(document.body.style.width).toBe('100%');
  });

  it('does not lock body scroll when locked=false', () => {
    renderHook(() => useBodyScrollLock(false));
    expect(document.body.style.overflow).toBe('');
    expect(document.body.style.position).toBe('');
  });

  it('restores previous styles on unmount', () => {
    document.body.style.overflow = 'auto';
    const { unmount } = renderHook(() => useBodyScrollLock(true));
    expect(document.body.style.position).toBe('fixed');
    unmount();
    expect(document.body.style.overflow).toBe('auto');
    expect(document.body.style.position).toBe('');
  });

  it('unlocks when locked changes from true to false', () => {
    const { rerender } = renderHook(({ locked }) => useBodyScrollLock(locked), {
      initialProps: { locked: true },
    });
    expect(document.body.style.position).toBe('fixed');
    rerender({ locked: false });
    expect(document.body.style.position).toBe('');
  });
});
