import { describe, it, expect } from 'vitest';
import { fadeUp, staggerContainer, heroIn } from './animations';

describe('animations', () => {
  describe('fadeUp', () => {
    it('has hidden state with opacity 0 and y offset', () => {
      expect(fadeUp.hidden).toEqual({ opacity: 0, y: 28 });
    });

    it('has visible state with opacity 1 and y 0', () => {
      expect((fadeUp.visible as Record<string, unknown>)['opacity']).toBe(1);
      expect((fadeUp.visible as Record<string, unknown>)['y']).toBe(0);
    });
  });

  describe('staggerContainer', () => {
    it('has empty hidden state', () => {
      expect(staggerContainer.hidden).toEqual({});
    });

    it('has visible state with staggerChildren transition', () => {
      const visible = staggerContainer.visible as Record<string, unknown>;
      const transition = visible['transition'] as Record<string, unknown>;
      expect(transition['staggerChildren']).toBe(0.12);
    });
  });

  describe('heroIn', () => {
    it('uses delay 0 by default', () => {
      const variant = heroIn();
      const visible = variant.visible as Record<string, unknown>;
      const transition = visible['transition'] as Record<string, unknown>;
      expect(transition['delay']).toBe(0);
    });

    it('uses the provided delay', () => {
      const variant = heroIn(0.5);
      const visible = variant.visible as Record<string, unknown>;
      const transition = visible['transition'] as Record<string, unknown>;
      expect(transition['delay']).toBe(0.5);
    });

    it('returns correct hidden state', () => {
      const variant = heroIn();
      expect(variant.hidden).toEqual({ opacity: 0, y: 28 });
    });
  });
});
