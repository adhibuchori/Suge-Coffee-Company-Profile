import { renderHook } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { useScrollReveal } from './useScrollReveal';

describe('useScrollReveal', () => {
  let observeMock: ReturnType<typeof vi.fn>;
  let unobserveMock: ReturnType<typeof vi.fn>;
  let disconnectMock: ReturnType<typeof vi.fn>;
  let callbackRef: IntersectionObserverCallback;

  beforeEach(() => {
    observeMock = vi.fn();
    unobserveMock = vi.fn();
    disconnectMock = vi.fn();

    // jsdom does not implement IntersectionObserver — provide a constructor-compatible mock
    const obs = { observe: observeMock, unobserve: unobserveMock, disconnect: disconnectMock };
    window.IntersectionObserver = function (cb: IntersectionObserverCallback) {
      callbackRef = cb;
      return obs;
    } as unknown as typeof IntersectionObserver;
  });

  afterEach(() => {
    vi.restoreAllMocks();
    document.body.innerHTML = '';
  });

  it('observes all .reveal elements present in the DOM on mount', () => {
    document.body.innerHTML = '<div class="reveal"></div><div class="reveal"></div>';
    renderHook(() => useScrollReveal());
    expect(observeMock).toHaveBeenCalledTimes(2);
  });

  it('adds .visible and unobserves an element when it intersects', () => {
    const el = document.createElement('div');
    el.className = 'reveal';
    document.body.appendChild(el);
    renderHook(() => useScrollReveal());

    const entry = { isIntersecting: true, target: el } as unknown as IntersectionObserverEntry;
    callbackRef([entry], {} as IntersectionObserver);

    expect(el.classList.contains('visible')).toBe(true);
    expect(unobserveMock).toHaveBeenCalledWith(el);
  });

  it('does not add .visible when the element is not intersecting', () => {
    const el = document.createElement('div');
    el.className = 'reveal';
    document.body.appendChild(el);
    renderHook(() => useScrollReveal());

    const entry = { isIntersecting: false, target: el } as unknown as IntersectionObserverEntry;
    callbackRef([entry], {} as IntersectionObserver);

    expect(el.classList.contains('visible')).toBe(false);
  });

  it('disconnects the observer on unmount', () => {
    renderHook(() => useScrollReveal()).unmount();
    expect(disconnectMock).toHaveBeenCalledOnce();
  });
});
