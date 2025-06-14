import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../lib/**/*.mdx",
    "../lib/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  docs: {
    autodocs: true,
  },
  viteFinal: async (config) => {
    return {
      ...config,
      build: {
        ...config.build,
        rollupOptions: {
          ...config.build?.rollupOptions,
          external: [
            'react',
            'react-dom',
            'react/jsx-runtime',
            'react-big-calendar',
            'react-big-calendar/lib/css/react-big-calendar.css',
            'react-big-calendar/lib/addons/dragAndDrop/styles.css',
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
        },
      },
      optimizeDeps: {
        include: [
          'react-big-calendar/lib/css/react-big-calendar.css',
          'react-big-calendar/lib/addons/dragAndDrop/styles.css'
        ],
      },
    };
  },
};

export default config;
