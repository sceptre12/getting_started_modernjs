import { appTools, defineConfig } from '@modern-js/app-tools';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  runtime: {
    router: true,
  },
  dev: {
    port: 3001,
  },
  plugins: [
    appTools({
      bundler: 'experimental-rspack',
    }),
  ],
});
