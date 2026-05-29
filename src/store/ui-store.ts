import { create } from 'zustand';

interface UiStore {
  /** Whether the mobile menu drawer is open. */
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  toggleMobileMenu: () => void;
}

/** Global UI state — mobile menu only. No server state here. */
export const useUiStore = create<UiStore>((set) => ({
  mobileMenuOpen: false,
  setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),
  toggleMobileMenu: () => set((s) => ({ mobileMenuOpen: !s.mobileMenuOpen })),
}));
