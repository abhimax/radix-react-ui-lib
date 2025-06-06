import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      exclude: [
        '**/index.ts',
        '**/src/**',
        '**/dist/**',
        '**/node_modules/**',
        '**/__tests__/**',
        '**/*.d.ts',
        '**/storybook-static/**',
        '**/*.stories.tsx',
        '**/.storybook/**',
        '**/scripts/**',
        '**/eslint.config.js',
        '**/vite.config.ts',
        '**/vitest.config.mts',
        '**/vitest.workspace.ts',
        '**/test-app/**',
        '**/style-dictionary-config.js',
      ],
      reporter: ['text', 'json', 'html', 'lcov'],
    },
    include: ['./lib/**/*.test.{ts,tsx}'],
    
    testTimeout: 10000,
    setupFiles: [],
  },
});