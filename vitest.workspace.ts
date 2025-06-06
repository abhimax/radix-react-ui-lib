//import path from 'node:path';
//import { fileURLToPath } from 'node:url';
import { defineWorkspace } from 'vitest/config';
//import { storybookTest } from '@storybook/experimental-addon-test/vitest-plugin';

//const dirname =
  //typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

export default defineWorkspace([
  {
    extends: './vitest.config.mts',
    test: {
      exclude: [
        '**/test-app/**',
        '**/node_modules/**',
        '**/dist/**',
        '**/.{idea,git,cache,output,temp}/**'
      ]
    }
  },
  // Storybook project
  // {
  //   extends: './vitest.config.mts',
  //   plugins: [
  //     storybookTest({ configDir: path.join(dirname, '.storybook') }),
  //   ],
  //   test: {
  //     name: 'storybook',
  //     browser: {
  //       enabled: true,
  //       headless: true,
  //       name: 'chromium',
  //       provider: 'playwright'
  //     },
  //     setupFiles: ['.storybook/vitest.setup.ts'],
  //     exclude: ['**/test-app/**']
  //   },
  // },
]);