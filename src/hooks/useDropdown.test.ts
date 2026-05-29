import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, afterEach } from 'vitest';
import { useDropdown } from './useDropdown';

describe('useDropdown', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('starts with open: false', () => {
    const { result } = renderHook(() => useDropdown());
    expect(result.current.open).toBe(false);
  });

  it('sets open: true when setOpen(true) is called', () => {
    const { result } = renderHook(() => useDropdown());
    act(() => {
      result.current.setOpen(true);
    });
    expect(result.current.open).toBe(true);
  });

  it('closes when a mousedown event fires outside the ref element', () => {
    const { result } = renderHook(() => useDropdown());

    const container = document.createElement('div');
    document.body.appendChild(container);
    result.current.ref.current = container;

    act(() => {
      result.current.setOpen(true);
    });

    act(() => {
      const outside = document.createElement('div');
      document.body.appendChild(outside);
      document.dispatchEvent(
        new MouseEvent('mousedown', { bubbles: true, relatedTarget: outside }),
      );
    });

    expect(result.current.open).toBe(false);
  });

  it('stays open when a mousedown event fires inside the ref element', () => {
    const { result } = renderHook(() => useDropdown());

    const container = document.createElement('div');
    document.body.appendChild(container);
    result.current.ref.current = container;

    act(() => {
      result.current.setOpen(true);
    });

    act(() => {
      container.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
    });

    expect(result.current.open).toBe(true);
  });
});
