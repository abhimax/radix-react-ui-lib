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
          external: [],
        },
      },
      optimizeDeps: {
        include: [
          'react-big-calendar/lib/css/react-big-calendar.css',
          'react-big-calendar/lib/addons/dragAndDrop/styles.css',
          'react-big-calendar/lib/addons/dragAndDrop'
        ],
      },
    };
  },
};

export default config;
