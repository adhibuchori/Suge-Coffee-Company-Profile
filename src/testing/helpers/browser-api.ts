import { vi } from 'vitest';

/** Mocks IntersectionObserver for jsdom test environments. */
export function mockIntersectionObserver() {
  const mock = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  }));
  Object.defineProperty(window, 'IntersectionObserver', {
    writable: true,
    configurable: true,
    value: mock,
  });
  return mock;
}

/** Mocks window.scrollY for scroll-position tests. */
export function mockScrollY(value: number) {
  Object.defineProperty(window, 'scrollY', {
    writable: true,
    configurable: true,
    value,
  });
}
