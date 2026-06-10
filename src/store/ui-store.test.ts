import { describe, it, expect, beforeEach } from 'vitest';
import { useUiStore } from './ui-store';

describe('useUiStore', () => {
  beforeEach(() => {
    useUiStore.setState({ mobileMenuOpen: false });
  });

  it('starts with mobileMenuOpen as false', () => {
    expect(useUiStore.getState().mobileMenuOpen).toBe(false);
  });

  it('setMobileMenuOpen sets mobileMenuOpen to true', () => {
    useUiStore.getState().setMobileMenuOpen(true);
    expect(useUiStore.getState().mobileMenuOpen).toBe(true);
  });

  it('setMobileMenuOpen sets mobileMenuOpen to false', () => {
    useUiStore.setState({ mobileMenuOpen: true });
    useUiStore.getState().setMobileMenuOpen(false);
    expect(useUiStore.getState().mobileMenuOpen).toBe(false);
  });

  it('toggleMobileMenu flips mobileMenuOpen from false to true', () => {
    useUiStore.getState().toggleMobileMenu();
    expect(useUiStore.getState().mobileMenuOpen).toBe(true);
  });

  it('toggleMobileMenu flips mobileMenuOpen from true to false', () => {
    useUiStore.setState({ mobileMenuOpen: true });
    useUiStore.getState().toggleMobileMenu();
    expect(useUiStore.getState().mobileMenuOpen).toBe(false);
  });
});
