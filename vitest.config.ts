import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/testing/setup.ts'],
    coverage: {
      provider: 'v8',
      include: [
        'src/hooks/**',
        'src/lib/utils.ts',
        'src/lib/animations.ts',
        'src/store/ui-store.ts',
      ],
      thresholds: {
        statements: 80,
        branches: 75,
        functions: 80,
        lines: 80,
      },
      exclude: ['**/index.ts', '**/*.gitkeep'],
    },
  },
  resolve: {
    alias: { '@': resolve(__dirname, './src') },
  },
});
