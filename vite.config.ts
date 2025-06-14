import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import dts from 'vite-plugin-dts';

// Get the current directory
const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    cssInjectedByJsPlugin(),
    dts({
      include: ['lib/**/*.ts', 'lib/**/*.tsx'],
      exclude: ['lib/**/*.stories.tsx', 'lib/**/*.test.tsx'],
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      name: 'RadixReactUILib',
      fileName: (format) => `radix-react-ui-lib.${format === 'es' ? 'js' : 'umd.cjs'}`,
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'react-big-calendar',
        'react-big-calendar/lib/css/react-big-calendar.css',
        'react-big-calendar/lib/addons/dragAndDrop/styles.css',
        'react-big-calendar/lib/addons/dragAndDrop',
        '@radix-ui/react-icons',
        'luxon',
        '@radix-ui/react-avatar',
        '@radix-ui/react-alert-dialog',
        '@radix-ui/react-slot',
        '@radix-ui/react-typography',
        '@radix-ui/themes',
        'class-variance-authority',
        'clsx',
        'tailwind-merge',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
          'react-big-calendar': 'ReactBigCalendar',
          'react-big-calendar/lib/addons/dragAndDrop': 'ReactBigCalendarDragAndDrop',
          '@radix-ui/react-icons': 'RadixIcons',
          'luxon': 'Luxon',
          '@radix-ui/react-avatar': 'RadixAvatar',
          '@radix-ui/react-alert-dialog': 'RadixAlertDialog',
          '@radix-ui/react-slot': 'RadixSlot',
          '@radix-ui/react-typography': 'RadixTypography',
          '@radix-ui/themes': 'RadixThemes',
          'class-variance-authority': 'ClassVarianceAuthority',
          'clsx': 'Clsx',
          'tailwind-merge': 'TailwindMerge',
        },
      },
    },
    sourcemap: true,
    outDir: 'dist',
  },
  optimizeDeps: {
    include: [
      'react-big-calendar/lib/css/react-big-calendar.css',
      'react-big-calendar/lib/addons/dragAndDrop/styles.css',
      'react-big-calendar/lib/addons/dragAndDrop'
    ],
  },
});
