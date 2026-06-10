import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { useActiveSection } from './useActiveSection';

describe('useActiveSection', () => {
  let observeMock: ReturnType<typeof vi.fn>;
  let disconnectMock: ReturnType<typeof vi.fn>;
  let callbackRef: IntersectionObserverCallback;

  beforeEach(() => {
    observeMock = vi.fn();
    disconnectMock = vi.fn();

    const obs = { observe: observeMock, disconnect: disconnectMock };
    window.IntersectionObserver = function (cb: IntersectionObserverCallback) {
      callbackRef = cb;
      return obs;
    } as unknown as typeof IntersectionObserver;
  });

  afterEach(() => {
    vi.restoreAllMocks();
    document.body.innerHTML = '';
  });

  it('returns empty string initially', () => {
    const { result } = renderHook(() => useActiveSection(['section-a']));
    expect(result.current).toBe('');
  });

  it('observes elements that exist in the DOM', () => {
    const el = document.createElement('div');
    el.id = 'section-a';
    document.body.appendChild(el);

    renderHook(() => useActiveSection(['section-a']));
    expect(observeMock).toHaveBeenCalledWith(el);
  });

  it('skips ids whose element does not exist in the DOM', () => {
    renderHook(() => useActiveSection(['nonexistent']));
    expect(observeMock).not.toHaveBeenCalled();
  });

  it('sets active to the id of the intersecting element', () => {
    const el = document.createElement('div');
    el.id = 'section-b';
    document.body.appendChild(el);

    const { result } = renderHook(() => useActiveSection(['section-b']));

    act(() => {
      const entry = { isIntersecting: true } as IntersectionObserverEntry;
      callbackRef([entry], {} as IntersectionObserver);
    });

    expect(result.current).toBe('section-b');
  });

  it('does not change active when element is not intersecting', () => {
    const el = document.createElement('div');
    el.id = 'section-c';
    document.body.appendChild(el);

    const { result } = renderHook(() => useActiveSection(['section-c']));

    act(() => {
      const entry = { isIntersecting: false } as IntersectionObserverEntry;
      callbackRef([entry], {} as IntersectionObserver);
    });

    expect(result.current).toBe('');
  });

  it('disconnects all observers on unmount', () => {
    const el1 = document.createElement('div');
    el1.id = 'sec-1';
    const el2 = document.createElement('div');
    el2.id = 'sec-2';
    document.body.appendChild(el1);
    document.body.appendChild(el2);

    const { unmount } = renderHook(() => useActiveSection(['sec-1', 'sec-2']));
    unmount();

    expect(disconnectMock).toHaveBeenCalledTimes(2);
  });
});
